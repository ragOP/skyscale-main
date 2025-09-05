import React, { useState, useEffect } from 'react';
import { Download, Filter, Calendar, Phone, Mail, User, MapPin, Star, Clock, Shield } from 'lucide-react';
import { BACKEND_URL } from '../utils/endpoint';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const Records = () => {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("all");
  const [customStart, setCustomStart] = useState(null);
  const [customEnd, setCustomEnd] = useState(null);

  useEffect(() => {
    fetchOrders();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [orders, filter, customStart, customEnd]);

  const fetchOrders = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/api/lander6/get-orders`);
      const result = await response.json();
      if (result.success) {
        const sorted = result.data.sort((a, b) => new Date(b.createdAt || b.orderDate).getTime() - new Date(a.createdAt || a.orderDate).getTime());
        setOrders(sorted);
      } else {
        setError('Failed to fetch orders');
      }
    } catch (err) {
      setError('Error fetching orders: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const isWithin = (date, from, to) => {
    return date >= from && date <= to;
  };

  const applyFilters = () => {
    const now = new Date();
    let filtered = [...orders];

    switch (filter) {
      case "today":
        filtered = filtered.filter(order => {
          const orderDate = new Date(order.createdAt || order.orderDate);
          return orderDate.toDateString() === now.toDateString();
        });
        break;
      case "yesterday":
        const y = new Date();
        y.setDate(y.getDate() - 1);
        filtered = filtered.filter(order => {
          const orderDate = new Date(order.createdAt || order.orderDate);
          return orderDate.toDateString() === y.toDateString();
        });
        break;
      case "last7days":
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(now.getDate() - 6);
        filtered = filtered.filter(order => {
          const d = new Date(order.createdAt || order.orderDate);
          return isWithin(d, sevenDaysAgo, now);
        });
        break;
      case "custom":
        if (customStart && customEnd) {
          filtered = filtered.filter(order => {
            const d = new Date(order.createdAt || order.orderDate);
            return isWithin(d, customStart, customEnd);
          });
        }
        break;
      default:
        break;
    }

    filtered.sort((a, b) => new Date(b.createdAt || b.orderDate).getTime() - new Date(a.createdAt || a.orderDate).getTime());
    setFilteredOrders(filtered);
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString();
  };

  const formatDateTime = (dateTimeString) => {
    if (!dateTimeString) return 'N/A';
    return new Date(dateTimeString).toLocaleString();
  };

  const isNewOrder = (orderDate) => {
    if (!orderDate) return false;
    return (Date.now() - new Date(orderDate).getTime()) / (1000 * 60) < 60;
  };

  // Calculate total amount from items array
  const calculateTotalAmount = (order) => {
    if (order.items && Array.isArray(order.items)) {
      return order.items.reduce((sum, item) => sum + (item.price || 0), 0);
    }
    return order.amount || 0;
  };

  const totalAmount = filteredOrders.reduce((sum, order) => sum + calculateTotalAmount(order), 0);

  const exportToCSV = () => {
    const csvData = filteredOrders.map((order) => ({
      OrderID: order.orderId || 'N/A',
      Name: order.fullName || 'N/A',
      Email: order.email || 'N/A',
      Phone: order.phone || 'N/A',
      DOB: formatDate(order.dob),
      Items: order.items ? order.items.map(item => `${item.title} (₹${item.price})`).join(', ') : 'N/A',
      TotalAmount: calculateTotalAmount(order),
      OrderDate: formatDateTime(order.createdAt || order.orderDate),
    }));

    const csv = convertToCSV(csvData);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.setAttribute("download", "orders.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const convertToCSV = (data) => {
    if (data.length === 0) return '';
    const headers = Object.keys(data[0]);
    const csvContent = [
      headers.join(','),
      ...data.map(row => headers.map(header => `"${row[header] || ''}"`).join(','))
    ].join('\n');
    return csvContent;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <Navbar />
      
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Order Records
              </span>
            </h1>
            <p className="text-gray-300 text-lg">
              Total Orders: <span className="font-semibold text-orange-400">{filteredOrders.length}</span>
            </p>
          </div>

          {/* Filters */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-gray-700">
            <div className="flex flex-wrap gap-3 justify-between items-center">
              <div className="flex gap-2 flex-wrap">
                {[
                  { key: "all", label: "All" },
                  { key: "today", label: "Today" },
                  { key: "yesterday", label: "Yesterday" },
                  { key: "last7days", label: "Last 7 Days" },
                  { key: "custom", label: "Custom Range" }
                ].map((filterOption) => (
                  <button
                    key={filterOption.key}
                    onClick={() => setFilter(filterOption.key)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      filter === filterOption.key
                        ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg"
                        : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    }`}
                  >
                    {filterOption.label}
                  </button>
                ))}
              </div>

              <button
                onClick={exportToCSV}
                className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Export CSV
              </button>
            </div>

            {filter === "custom" && (
              <div className="mt-6 flex gap-4 items-center">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <input
                    type="date"
                    value={customStart ? customStart.toISOString().split("T")[0] : ""}
                    onChange={(e) => setCustomStart(new Date(e.target.value))}
                    className="bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-orange-500"
                  />
                </div>
                <span className="text-gray-400">to</span>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <input
                    type="date"
                    value={customEnd ? customEnd.toISOString().split("T")[0] : ""}
                    onChange={(e) => setCustomEnd(new Date(e.target.value))}
                    className="bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Orders Table */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden">
            {loading ? (
              <div className="p-12 text-center">
                <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-300 text-lg">Loading orders...</p>
              </div>
            ) : error ? (
              <div className="p-12 text-center">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-red-400" />
                </div>
                <p className="text-red-400 font-medium text-lg">{error}</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gradient-to-r from-gray-700 to-gray-800 border-b border-gray-600">
                      <th className="px-6 py-4 text-left font-semibold text-gray-200">Order ID</th>
                      <th className="px-6 py-4 text-left font-semibold text-gray-200">Customer</th>
                      <th className="px-6 py-4 text-left font-semibold text-gray-200">Contact</th>
                      <th className="px-6 py-4 text-left font-semibold text-gray-200">DOB</th>
                      <th className="px-6 py-4 text-left font-semibold text-gray-200">Items</th>
                      <th className="px-6 py-4 text-left font-semibold text-gray-200">Total Amount</th>
                      <th className="px-6 py-4 text-left font-semibold text-gray-200">Order Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredOrders.map((order, index) => (
                      <tr
                        key={order._id || index}
                        className={`border-b border-gray-700 transition-all duration-300 hover:bg-gray-700/30 ${
                          isNewOrder(order.createdAt || order.orderDate)
                            ? "bg-gradient-to-r from-green-900/20 to-green-800/20 border-green-500/30"
                            : ""
                        }`}
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-orange-400 font-semibold">
                              {order.orderId || 'N/A'}
                            </span>
                            {isNewOrder(order.createdAt || order.orderDate) && (
                              <span className="px-2 py-1 bg-green-500 text-white text-xs rounded-full font-medium">
                                NEW
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center">
                              <User className="w-4 h-4 text-white" />
                            </div>
                            <div>
                              <div className="font-medium text-white">
                                {order.fullName || 'N/A'}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2 text-gray-300">
                              <Mail className="w-3 h-3" />
                              <span className="text-xs">{order.email || 'N/A'}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-300">
                              <Phone className="w-3 h-3" />
                              <span className="text-xs">{order.phone || 'N/A'}</span>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-gray-300 text-xs">
                            {formatDate(order.dob)}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex flex-wrap gap-1">
                            {order.items && order.items.length > 0 ? (
                              order.items.map((item, i) => (
                                <span key={i} className="px-2 py-1 bg-gradient-to-r from-orange-500/20 to-pink-500/20 text-orange-300 text-xs rounded-full border border-orange-500/30">
                                  {item.title} (₹{item.price})
                                </span>
                              ))
                            ) : (
                              <span className="text-gray-500 text-xs">No items</span>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-orange-400 font-bold text-lg">
                            ₹{calculateTotalAmount(order)}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-gray-300 text-xs">
                            {formatDateTime(order.createdAt || order.orderDate)}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  {filteredOrders.length > 0 && (
                    <tfoot>
                      <tr className="bg-gradient-to-r from-gray-700 to-gray-800 border-t border-gray-600">
                        <td colSpan={5} className="px-6 py-4 text-right font-semibold text-gray-200">
                          Total Revenue
                        </td>
                        <td className="px-6 py-4 text-orange-400 font-bold text-xl">
                          ₹{totalAmount}
                        </td>
                        <td></td>
                      </tr>
                    </tfoot>
                  )}
                </table>

                {filteredOrders.length === 0 && (
                  <div className="p-12 text-center">
                    <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Star className="w-8 h-8 text-gray-400" />
                    </div>
                    <p className="text-gray-400 text-lg">No orders found for the selected period</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Records; 