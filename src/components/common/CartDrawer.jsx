import { X, Trash2, Heart, Star, Clock, Shield } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import CTAButton from './CTAButton';
import { useEffect, useState } from 'react';
import { BACKEND_URL } from '../../utils/endpoint';
import { useNavigate } from 'react-router';

const CartDrawer = () => {
    const navigate = useNavigate()
    const { isOpen, items, closeCart, removeFromCart, addToCart, getTotalPrice, getTotalSavings, clearCart } = useCart();

    const [timeLeft, setTimeLeft] = useState(5 * 60); // 5 minutes in seconds
    const [isCheckingOut, setIsCheckingOut] = useState(false);

    // Backend URL - you'll need to set this in your environment

    const products = [
        {
            id: 1,
            name: "Love Report",
            image: "/love-report-1.png",
            price: 499,
            originalPrice: 999,
            discount: "50% OFF",
            rating: 4.5,
            reviews: 1247
        },
        {
            id: 2,
            name: "Premium Astro Consultation",
            image: "/permium-astro-consultation.jpg",
            price: 389,
            originalPrice: 998,
            discount: "61% OFF",
            rating: 4.8,
            reviews: 892
        },
        {
            id: 3,
            name: "Soulmate Sketch",
            image: "/easy-astro-1.webp",
            price: 599,
            originalPrice: 1199,
            discount: "50% OFF",
            rating: 4.3,
            reviews: 567
        },
        {
            id: 4,
            name: "Wealth Report",
            image: "/astrology-2.webp",
            price: 699,
            originalPrice: 1299,
            discount: "46% OFF",
            rating: 4.6,
            reviews: 743
        }
    ];

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    const suggestedProducts = products.filter(product =>
        !items.some(item => item.id === product.id)
    ).slice(0, items.length === 0 ? 4 : 3);

    // Load Razorpay script
    const loadScript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    };

    const handleCheckout = async () => {
        if (items.length === 0) return;

        try {

            const abdOrderResponse = await fetch(
                `${BACKEND_URL}/api/lander3/create-order-abd`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        amount: 2,
                        items: items.map(item => ({
                            id: item.id,
                            title: item.name,
                            price: item.price
                        })),
                    }),
                }
            );

            const abdOrderResult = await abdOrderResponse.json();
            const abdOrderId = abdOrderResult.data._id;

            if (!abdOrderResult.success) {
                throw new Error("Failed to create payment order");
            } else {
                console.log("Abandoned Order Created with Id", abdOrderId);
            }

            setIsCheckingOut(true);

            // Create Razorpay order
            const response = await fetch(`${BACKEND_URL}/api/payment/razorpay`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    // amount: getTotalPrice(),
                    amount: 2,
                }),
            });

            const result = await response.json();

            if (!result.success) {
                throw new Error("Failed to create payment order");
            }

            const data = result.data;

            const options = {
                key: import.meta.env.VITE_RAZORPAY_KEY,
                // amount: getTotalPrice(),
                amount: 2,
                currency: "INR",
                name: "EasyAstro",
                description: "Astrology Services Order Payment",
                order_id: data.orderId,
                handler: async function (response) {
                    console.log(">>>", response)
                    try {
                        // Create order in database
                        const orderResponse = await fetch(
                            `${BACKEND_URL}/api/lander6/create-order`,
                            {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify({
                                    // amount: getTotalPrice(),
                                    amount: 2,
                                    razorpayOrderId: response.razorpay_order_id,
                                    razorpayPaymentId: response.razorpay_payment_id,
                                    razorpaySignature: response.razorpay_signature,
                                    
                                    orderId: data.orderId,
                                    items: items.map(item => ({
                                        id: item.id,
                                        title: item.name,
                                        price: item.price
                                    })),
                                }),
                            }
                        );

                        const orderResult = await orderResponse.json();

                        if (orderResult.success) {
                            // sessionStorage.setItem("orderId", data.orderId);
                            // sessionStorage.setItem("orderAmount", getTotalPrice().toString());
                            // sessionStorage.setItem("orderProducts", JSON.stringify(items));

                            // Clear cart after successful payment
                            clearCart();
                            closeCart();

                            console.log("CART >>>>>>>>>>", {
                                orderId: data.orderId,
                                orderAmount: getTotalPrice().toString(),
                                orderProducts: items
                            })

                            // Show success message
                            alert("Payment successful! Your order has been placed.");

                            const deleteAbdOrder = await fetch(
                                `${BACKEND_URL}/api/lander3/delete-order-abd`,
                                {
                                    method: "DELETE",
                                    headers: {
                                        "Content-Type": "application/json",
                                    },
                                    // body: JSON.stringify({ email: consultationFormData?.email }), // send the email here
                                }
                            );
                            const deleteAbdOrderResult = await deleteAbdOrder.json();
                            console.log("Abandoned Order Deleted", deleteAbdOrderResult);

                            navigate('/order-confirmation', {
                                state: {
                                    orderId: data.orderId,
                                    orderAmount: getTotalPrice().toString(),
                                    orderProducts: items
                                }
                            })

                        } else {
                            alert(
                                "Payment successful but order creation failed. Please contact support."
                            );
                        }
                    } catch (error) {
                        console.error("Error creating order:", error);
                        alert(
                            "Payment successful but order creation failed. Please contact support."
                        );
                    }
                },
                theme: {
                    color: "#E052B1",
                },
            };

            const rzp = new window.Razorpay(options);
            rzp.open();
        } catch (error) {
            console.error("Checkout error:", error);
            alert("Payment failed. Please try again.");
        } finally {
            setIsCheckingOut(false);
        }
    };

    useEffect(() => {
        loadScript("https://checkout.razorpay.com/v1/checkout.js").then(
            (result) => {
                if (result) {
                    console.log("Razorpay script loaded successfully");
                }
            }
        );
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    useEffect(() => {
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    useEffect(() => {
        if (!isOpen) return;

        const timer = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime <= 1) {
                    // Reset to 5 minutes when timer reaches 0
                    return 5 * 60;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/50 z-50 transition-opacity duration-300"
                onClick={closeCart}
            />

            {/* Drawer */}
            <div
                className="
    fixed top-0 right-0 z-50
    flex flex-col
    h-screen w-[90vw]
    bg-gradient-to-br from-gray-900 to-black
    transform transition-transform duration-300 ease-in-out
  "
            >
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-700">
                    <h2 className="text-2xl font-bold text-white">
                        Cart • {items.length} {items.length === 1 ? "item" : "items"}
                    </h2>
                    <button
                        onClick={closeCart}
                        className="p-2 hover:bg-gray-800 rounded-full transition-colors"
                    >
                        <X className="w-6 h-6 text-white" />
                    </button>
                </div>

                {/* Sale Timer */}
                <div className="bg-orange-500 text-white text-center py-2">
                    <span className="font-serif font-semibold">Sale Ends in {formatTime(timeLeft)}</span>
                </div>

                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto scrollbar-hide p-4">
                    {items.length === 0 ? (
                        <div className="text-center py-12">
                            <Heart className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                            <h3 className="text-xl font-serif font-semibold text-white mb-2">
                                Your cart is empty
                            </h3>
                            <p className="text-gray-400 font-serif">
                                Add some products to get started!
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {items.map((item) => (
                                <div
                                    key={item.id}
                                    className="relative bg-gray-800 rounded-lg p-4"
                                >
                                    <div className="flex space-x-4">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-16 h-16 object-cover rounded-lg"
                                        />
                                        <div className="flex-1">
                                            <h3 className="font-serif font-semibold text-white text-sm mb-1">
                                                {item.name}
                                            </h3>
                                            <div className="flex items-center space-x-2 mb-2">
                                                <div className="flex">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star
                                                            key={i}
                                                            className={`w-3 h-3 ${i < Math.floor(item.rating)
                                                                ? "fill-yellow-400 text-yellow-400"
                                                                : "text-gray-600"
                                                                }`}
                                                        />
                                                    ))}
                                                </div>
                                                <span className="text-gray-400 text-xs font-serif">
                                                    ({item.reviews})
                                                </span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <span className="text-orange-500 font-bold text-lg">
                                                    ₹{item.price}
                                                </span>
                                                <span className="text-gray-500 line-through text-sm font-serif">
                                                    ₹{item.originalPrice}
                                                </span>
                                                <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                                                    {item.discount}
                                                </span>
                                            </div>
                                            <div className="text-green-400 text-xs mt-1">
                                                (You save ₹{item.originalPrice - item.price})
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="absolute top-2 right-2 p-1 hover:bg-gray-700 rounded transition-colors"
                                    >
                                        <Trash2 className="w-4 h-4 text-red-400 hover:text-red-500" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Suggested Products */}
                    {suggestedProducts.length > 0 && (
                        <div className="mt-8">
                            <h3 className="text-white font-serif font-semibold mb-4">
                                You might also like
                            </h3>
                            <div className="space-y-3">
                                {suggestedProducts.map((product) => (
                                    <div
                                        key={product.id}
                                        className="flex items-center space-x-3 bg-gray-800 rounded-lg p-3"
                                    >
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-12 h-12 object-cover rounded-lg"
                                        />
                                        <div className="flex-1">
                                            <h4 className="text-white font-serif text-sm font-medium">
                                                {product.name}
                                            </h4>
                                            <div className="flex items-center space-x-2">
                                                <span className="text-orange-500 font-serif font-bold">
                                                    ₹{product.price}
                                                </span>
                                                <span className="text-gray-500 line-through text-xs font-serif">
                                                    ₹{product.originalPrice}
                                                </span>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => addToCart(product)}
                                            className="w-8 h-8 border border-orange-500 rounded flex items-center justify-center hover:bg-orange-500 transition-colors"
                                        >
                                            <span className="text-orange-500 hover:text-white text-lg">+</span>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Order Summary */}
                {items.length > 0 && (
                    <div className="border-t border-gray-700 p-6 space-y-4">
                        <div className="flex justify-between items-center">
                            <span className="text-white font-serif">Savings:</span>
                            <span className="text-green-400 font-bold">
                                -₹{getTotalSavings()}
                            </span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-white text-lg">Subtotal:</span>
                            <span className="text-white font-bold text-xl">
                                ₹{getTotalPrice()}
                            </span>
                        </div>

                        {/* CTA Button */}
                        <CTAButton
                            className="w-full text-center py-4 text-lg font-serif"
                            onClick={handleCheckout}
                            disabled={isCheckingOut}
                        >
                            {isCheckingOut ? 'PROCESSING...' : 'BUY NOW'}
                        </CTAButton>

                        <div className="text-center">
                            <span className="text-gray-400 text-xs font-serif">
                                Powered By EasyAstro
                            </span>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex justify-center space-x-6">
                            <div className="flex items-center space-x-1">
                                <Clock className="w-4 h-4 text-green-400" />
                                <span className="text-green-400 text-xs font-serif">
                                    24H Delivery
                                </span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <Shield className="w-4 h-4 text-green-400" />
                                <span className="text-green-400 text-xs font-serif">
                                    Secure Payment
                                </span>
                            </div>
                        </div>
                    </div>
                )}
            </div>

        </>
    );
};

export default CartDrawer; 