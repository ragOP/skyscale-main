import React, { useCallback, useEffect, useState } from "react";
import { ArrowRight, Star } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import CtaButton from "../common/CTAButton";

const testimonials = [
  {
    name: "Riya Malhotra",
    quote: "Bhai sach me rula diya yaar 😭 Ye sketch bilkul mere crush jaisa dikhta hai... I don't know how you guys do this! Full filmy vibes 😍 100% recommending this to my girls group 🩷",
  },
  {
    name: "Aisha Khan",
    quote: "I was literally speechless when I opened it. The sketch looked SO much like the guy I've had a crush on for years. Like seriously, same eyes, same smile. You're insane!!",
  },
  {
    name: "Simran Kaur",
    quote: "Omg mujhe laga ye koi scam hoga but guys… itna accurate?! Sketch dekh ke shock lag gaya  He looks just like someone I secretly like. Ab toh usko propose karne ka plan hai 😭💘",
  },
  {
    name: "Tanvi Desai",
    quote: "It felt so magical. The drawing looked just like my ex I'm still not over 🙈 And the love report? Spooky accurate! I'm sending this to my bestie next 💌",
  },
  {
    name: "Anjali Bansal",
    quote: "Sachi bataun? Maine bas mazaak me mangwaya tha… par jab sketch dekha na, dil hil gaya 💔 It was literally him. The details were next level. Pls keep doing this amazing work ❤️",
  },
  {
    name: "Vikram R.",
    quote: "A friend recommended this, and I'm so glad I tried it. The sketch is now my phone wallpaper, a daily reminder of who to look for.",
  },
  {
    name: "Sunita M.",
    quote: "I received my sketch within 24 hours as promised. The details were incredible, from his eyes to the small mole on his cheek.",
  },
  {
    name: "Karan V.",
    quote: "The likeness to someone I met a month later is uncanny. I'm a believer now. This service is worth every penny and more!",
  },
  {
    name: "Aisha B.",
    quote: "The entire process was so simple and the result was beyond my expectations. The sketch has a very calming presence.",
  },
  {
    name: "Rohan D.",
    quote: "This was a fun and surprisingly moving experience. The description of my soulmate's character felt very real and familiar.",
  },
//   {
//     name: "Meera J.",
//     quote: "Absolutely stunning artwork. The psychic reading provided clarity that I didn't even know I was looking for. Highly recommend!",
//   },
//   {
//     name: "Arjun P.",
//     quote: "The customer service was excellent and the delivery was fast. The sketch itself is a work of art that I will cherish.",
//   },
//   {
//     name: "Isha V.",
//     quote: "This is more than a sketch; it's a piece of hope. The reading was so positive and aligned with my own feelings. Thank you!",
//   },
//   {
//     name: "Amit K.",
//     quote: "The quality of the artwork is phenomenal. It's a very professional service and the reading was surprisingly detailed and uplifting.",
//   },
//   {
//     name: "Deepika R.",
//     quote: "I showed the sketch to my mom and she got emotional. She said it looked like the person she always imagined for me. So beautiful.",
//   },
//   {
//     name: "Rajesh S.",
//     quote: "Got this for my sister as a gift and she absolutely loved it. The look on her face when she saw the sketch was priceless. 10/10 recommend.",
//   },
//   {
//     name: "Kavita C.",
//     quote: "The details in the sketch are insane! It's like the artist peered into my soul. I'm so excited for my future.",
//   },
//   {
//     name: "Manish T.",
//     quote: "This was a gift for my anniversary, and my wife and I were both amazed. The reading was so insightful and positive.",
//   },
//   {
//     name: "Pooja G.",
//     quote: "I can't stop looking at my sketch. It feels so real and has given me so much hope. Thank you for this beautiful gift!",
//   },
//   {
//     name: "Alok N.",
//     quote: "The turnaround was so fast, and the quality is top-notch. I highly recommend this to anyone curious about their soulmate.",
//   }
];

function TestimonialCard({ name, quote }) {
  return (
    <div className="h-full bg-white shadow-lg border border-gray-200 rounded-lg flex flex-col">
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          <div className="flex text-yellow-400 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
          </div>
          <blockquote className="italic text-gray-700 border-l-2 border-orange-500 pl-4 mb-4">
            "{quote}"
          </blockquote>
        </div>
        <p className="font-bold text-right text-orange-600 mt-auto pt-4">— {name}</p>
      </div>
    </div>
  );
}

export default function TestimonialsSection({ isCartPage = false }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: "start",
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollTo = useCallback((index) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onInit = useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <section className="py-7 sm:py-16 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-7 sm:mb-16 font-clash">
          What Our Clients Say
        </h2>
        
        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-4">
                  <div className="h-full">
                    <TestimonialCard name={testimonial.name} quote={testimonial.quote} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? 'bg-orange-500 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={() => scrollTo(index)}
              />
            ))}
          </div>
        </div>
        
     
      </div>
    </section>
  );
} 