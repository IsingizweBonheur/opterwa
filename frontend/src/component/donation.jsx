// Donation.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaPaypal, 
  FaCreditCard, 
  FaCcMastercard, 
  FaTimes,
  FaLock,
  FaShieldAlt,
  FaHeart,
  FaUser,
  FaEnvelope,
  FaCalendarAlt,
  FaLock as FaCvv,
  FaCheckCircle,
  FaArrowRight,
  FaSpinner
} from "react-icons/fa";
import { BsCreditCard2Front, BsBank } from "react-icons/bs";
import { MdPayment, MdSecurity } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";
import logo from "../assets/logo.png";

export default function Donation({ close }) {
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [donationAmount, setDonationAmount] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    paypalEmail: "",
  });

  const paymentMethods = [
    { id: "paypal", name: "PayPal", icon: <FaPaypal className="text-4xl text-[#003087]" />, color: "border-[#003087]" },
    { id: "mastercard", name: "Mastercard", icon: <FaCcMastercard className="text-4xl text-[#EB001B]" />, color: "border-[#EB001B]" },
    { id: "creditcard", name: "Credit Card", icon: <FaCreditCard className="text-4xl text-[#1a73e8]" />, color: "border-[#1a73e8]" },
  ];

  // Handle click outside to close modal
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget && !isSubmitting) {
      close();
    }
  };

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && !isSubmitting) {
        close();
      }
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [close, isSubmitting]);

  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "fullName":
        if (!value.trim()) error = "Full name is required";
        else if (value.trim().length < 2) error = "Name must be at least 2 characters";
        break;
      case "email":
        if (!value.trim()) error = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = "Invalid email address";
        break;
      case "cardNumber":
        const cleanCard = value.replace(/\s/g, '');
        if (!cleanCard) error = "Card number is required";
        else if (!/^\d{16}$/.test(cleanCard)) error = "Card number must be 16 digits";
        break;
      case "expiryDate":
        if (!value) error = "Expiry date is required";
        else if (!/^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(value)) error = "Invalid format (MM/YY)";
        break;
      case "cvv":
        if (!value) error = "CVV is required";
        else if (!/^\d{3,4}$/.test(value)) error = "CVV must be 3-4 digits";
        break;
      case "paypalEmail":
        if (!value.trim()) error = "PayPal email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = "Invalid email address";
        break;
      default:
        break;
    }
    return error;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;
    
    // Format card number with spaces
    if (name === "cardNumber") {
      formattedValue = value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim();
      if (formattedValue.length > 19) formattedValue = formattedValue.slice(0, 19);
    }
    
    // Format expiry date
    if (name === "expiryDate") {
      formattedValue = value.replace(/\D/g, '');
      if (formattedValue.length >= 2) {
        formattedValue = formattedValue.slice(0, 2) + '/' + formattedValue.slice(2);
      }
      if (formattedValue.length > 5) formattedValue = formattedValue.slice(0, 5);
    }
    
    // Limit CVV
    if (name === "cvv") {
      formattedValue = value.replace(/\D/g, '').slice(0, 4);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: formattedValue,
    }));

    // Clear error on typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleFieldBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    if (error) {
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    }
  };

  const handleDonationSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors = {};
    const fieldsToValidate = selectedPayment === "paypal" 
      ? ["fullName", "paypalEmail"]
      : ["fullName", "email", "cardNumber", "expiryDate", "cvv"];
    
    fieldsToValidate.forEach(field => {
      const error = validateField(field, formData[field]);
      if (error) newErrors[field] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Scroll to first error
      const firstError = document.querySelector(`[name="${Object.keys(newErrors)[0]}"]`);
      if (firstError) firstError.focus();
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log("Donation Data:", {
        amount: donationAmount,
        paymentMethod: selectedPayment,
        ...formData,
      });
      
      setIsSuccess(true);
      setTimeout(() => {
        close();
      }, 3000);
    } catch (error) {
      console.error("Donation failed:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderPaymentForm = () => {
    const formFields = {
      paypal: (
        <>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-1.5">
              PayPal Email <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                name="paypalEmail"
                value={formData.paypalEmail}
                onChange={handleInputChange}
                onBlur={handleFieldBlur}
                placeholder="your-email@paypal.com"
                className={`w-full pl-10 pr-4 py-3 bg-white border rounded-lg text-gray-800 text-sm placeholder:text-gray-400 transition-all ${
                  errors.paypalEmail ? 'border-red-500 ring-2 ring-red-200' : 'border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                }`}
                required
              />
              {errors.paypalEmail && (
                <p className="text-red-500 text-xs mt-1">{errors.paypalEmail}</p>
              )}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-1.5">
              Full Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                onBlur={handleFieldBlur}
                placeholder="John Doe"
                className={`w-full pl-10 pr-4 py-3 bg-white border rounded-lg text-gray-800 text-sm placeholder:text-gray-400 transition-all ${
                  errors.fullName ? 'border-red-500 ring-2 ring-red-200' : 'border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                }`}
                required
              />
              {errors.fullName && (
                <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
              )}
            </div>
          </div>
        </>
      ),
      mastercard: (
        <>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-1.5">
              Card Number <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <BsCreditCard2Front className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
                onBlur={handleFieldBlur}
                placeholder="1234 5678 9012 3456"
                maxLength="19"
                className={`w-full pl-10 pr-4 py-3 bg-white border rounded-lg text-gray-800 text-sm placeholder:text-gray-400 transition-all ${
                  errors.cardNumber ? 'border-red-500 ring-2 ring-red-200' : 'border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                }`}
                required
              />
              {errors.cardNumber && (
                <p className="text-red-500 text-xs mt-1">{errors.cardNumber}</p>
              )}
            </div>
          </div>
          <div className="flex gap-3 mb-4">
            <div className="flex-1">
              <label className="block text-gray-700 text-sm font-medium mb-1.5">
                Expiry Date <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <FaCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                <input
                  type="text"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleInputChange}
                  onBlur={handleFieldBlur}
                  placeholder="MM/YY"
                  maxLength="5"
                  className={`w-full pl-9 pr-3 py-3 bg-white border rounded-lg text-gray-800 text-sm placeholder:text-gray-400 transition-all ${
                    errors.expiryDate ? 'border-red-500 ring-2 ring-red-200' : 'border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  }`}
                  required
                />
                {errors.expiryDate && (
                  <p className="text-red-500 text-xs mt-1">{errors.expiryDate}</p>
                )}
              </div>
            </div>
            <div className="flex-1">
              <label className="block text-gray-700 text-sm font-medium mb-1.5">
                CVV <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <FaCvv className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                <input
                  type="password"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  onBlur={handleFieldBlur}
                  placeholder="123"
                  maxLength="4"
                  className={`w-full pl-9 pr-3 py-3 bg-white border rounded-lg text-gray-800 text-sm placeholder:text-gray-400 transition-all ${
                    errors.cvv ? 'border-red-500 ring-2 ring-red-200' : 'border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  }`}
                  required
                />
                {errors.cvv && (
                  <p className="text-red-500 text-xs mt-1">{errors.cvv}</p>
                )}
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-1.5">
              Full Name (as on card) <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                onBlur={handleFieldBlur}
                placeholder="John Doe"
                className={`w-full pl-9 pr-4 py-3 bg-white border rounded-lg text-gray-800 text-sm placeholder:text-gray-400 transition-all ${
                  errors.fullName ? 'border-red-500 ring-2 ring-red-200' : 'border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                }`}
                required
              />
              {errors.fullName && (
                <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
              )}
            </div>
          </div>
        </>
      ),
      creditcard: (
        <>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-1.5">
              Card Number <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <BsCreditCard2Front className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
                onBlur={handleFieldBlur}
                placeholder="1234 5678 9012 3456"
                maxLength="19"
                className={`w-full pl-10 pr-4 py-3 bg-white border rounded-lg text-gray-800 text-sm placeholder:text-gray-400 transition-all ${
                  errors.cardNumber ? 'border-red-500 ring-2 ring-red-200' : 'border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                }`}
                required
              />
              {errors.cardNumber && (
                <p className="text-red-500 text-xs mt-1">{errors.cardNumber}</p>
              )}
            </div>
          </div>
          <div className="flex gap-3 mb-4">
            <div className="flex-1">
              <label className="block text-gray-700 text-sm font-medium mb-1.5">
                Expiry Date <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <FaCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                <input
                  type="text"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleInputChange}
                  onBlur={handleFieldBlur}
                  placeholder="MM/YY"
                  maxLength="5"
                  className={`w-full pl-9 pr-3 py-3 bg-white border rounded-lg text-gray-800 text-sm placeholder:text-gray-400 transition-all ${
                    errors.expiryDate ? 'border-red-500 ring-2 ring-red-200' : 'border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  }`}
                  required
                />
                {errors.expiryDate && (
                  <p className="text-red-500 text-xs mt-1">{errors.expiryDate}</p>
                )}
              </div>
            </div>
            <div className="flex-1">
              <label className="block text-gray-700 text-sm font-medium mb-1.5">
                CVV <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <FaCvv className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                <input
                  type="password"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  onBlur={handleFieldBlur}
                  placeholder="123"
                  maxLength="4"
                  className={`w-full pl-9 pr-3 py-3 bg-white border rounded-lg text-gray-800 text-sm placeholder:text-gray-400 transition-all ${
                    errors.cvv ? 'border-red-500 ring-2 ring-red-200' : 'border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  }`}
                  required
                />
                {errors.cvv && (
                  <p className="text-red-500 text-xs mt-1">{errors.cvv}</p>
                )}
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-1.5">
              Full Name (as on card) <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                onBlur={handleFieldBlur}
                placeholder="John Doe"
                className={`w-full pl-9 pr-4 py-3 bg-white border rounded-lg text-gray-800 text-sm placeholder:text-gray-400 transition-all ${
                  errors.fullName ? 'border-red-500 ring-2 ring-red-200' : 'border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                }`}
                required
              />
              {errors.fullName && (
                <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
              )}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-1.5">
              Email <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                onBlur={handleFieldBlur}
                placeholder="john@example.com"
                className={`w-full pl-9 pr-4 py-3 bg-white border rounded-lg text-gray-800 text-sm placeholder:text-gray-400 transition-all ${
                  errors.email ? 'border-red-500 ring-2 ring-red-200' : 'border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                }`}
                required
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>
          </div>
        </>
      ),
    };

    return (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mt-5 p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100 shadow-inner"
      >
        <h4 className="text-blue-800 text-base font-semibold mb-4 flex items-center gap-2">
          {paymentMethods.find(m => m.id === selectedPayment)?.icon}
          {selectedPayment === "paypal" && "PayPal Payment"}
          {selectedPayment === "mastercard" && "Mastercard Payment"}
          {selectedPayment === "creditcard" && "Credit Card Payment"}
        </h4>
        {formFields[selectedPayment]}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:opacity-70 disabled:cursor-not-allowed rounded-lg text-white font-bold text-base transition-all hover:-translate-y-0.5 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <FaSpinner className="animate-spin" />
              Processing...
            </>
          ) : (
            <>
              {selectedPayment === "paypal" && <FaPaypal className="text-xl" />}
              {selectedPayment === "mastercard" && <FaCcMastercard className="text-xl" />}
              {selectedPayment === "creditcard" && <FaCreditCard className="text-xl" />}
              Donate Now <FaArrowRight />
            </>
          )}
        </button>
      </motion.div>
    );
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        onClick={handleOverlayClick}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 30 }}
          transition={{ 
            type: "spring",
            damping: 25,
            stiffness: 300
          }}
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={close}
            disabled={isSubmitting}
            className="absolute -top-4 -right-4 z-10 w-12 h-12 bg-white hover:bg-gray-100 disabled:opacity-50 rounded-full flex items-center justify-center text-gray-600 text-2xl font-bold transition-all hover:scale-110 shadow-lg border border-gray-200"
            aria-label="Close donation modal"
          >
            <FaTimes />
          </button>

          {/* Main Card */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl border border-gray-100">
            {isSuccess ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-12"
              >
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaCheckCircle className="text-6xl text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You! ❤️</h3>
                <p className="text-gray-600">Your generous donation has been received.</p>
                <p className="text-gray-500 text-sm mt-2">You will receive a confirmation email shortly.</p>
              </motion.div>
            ) : (
              <>
                {/* Header with Logo */}
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-200">
                  <div className="w-16 h-16 flex-shrink-0 bg-gray-50 rounded-xl p-2">
                    <img 
                      src={logo} 
                      alt="Organization Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                      Make a Donation
                    </h2>
                    <p className="text-gray-500 text-sm">
                      Your support makes a difference in our community
                    </p>
                  </div>
                </div>

                <form onSubmit={handleDonationSubmit}>
                  {/* Donation Amount */}
                  <div className="mb-6">
                    <label className="block text-gray-700 font-semibold mb-2 text-sm">
                      Donation Amount <span className="text-red-500">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <span className="absolute left-4 text-gray-600 text-2xl font-bold">
                        $
                      </span>
                      <input
                        type="number"
                        className="w-full pl-10 pr-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-800 text-xl placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        value={donationAmount}
                        onChange={(e) => setDonationAmount(e.target.value)}
                        placeholder="Enter amount"
                        min="1"
                        step="1"
                        required
                      />
                    </div>
                    <div className="flex gap-2.5 mt-3 flex-wrap">
                      {[10, 25, 50, 100, 250, 500].map((amount) => (
                        <button
                          key={amount}
                          type="button"
                          className={`flex-1 min-w-[calc(33%-5px)] py-2.5 border-2 rounded-xl font-semibold cursor-pointer transition-all hover:-translate-y-0.5 ${
                            donationAmount === amount.toString()
                              ? "bg-blue-600 border-blue-600 text-white shadow-lg"
                              : "bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100 hover:border-blue-300"
                          }`}
                          onClick={() => setDonationAmount(amount.toString())}
                        >
                          ${amount}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Payment Methods */}
                  <div className="mb-6">
                    <label className="block text-gray-700 font-semibold mb-3 text-sm">
                      Select Payment Method <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {paymentMethods.map((method) => (
                        <div
                          key={method.id}
                          className={`relative p-4 border-2 rounded-xl cursor-pointer transition-all flex flex-col items-center gap-2 hover:-translate-y-1 ${
                            selectedPayment === method.id
                              ? `${method.color} bg-blue-50 shadow-lg`
                              : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
                          }`}
                          onClick={() => {
                            setSelectedPayment(selectedPayment === method.id ? null : method.id);
                            setErrors({});
                          }}
                        >
                          {method.icon}
                          <span className="text-gray-800 text-sm font-medium">
                            {method.name}
                          </span>
                          {selectedPayment === method.id && (
                            <span className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shadow-lg">
                              ✓
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Payment Form */}
                  {selectedPayment && renderPaymentForm()}

                  {!selectedPayment && (
                    <div className="text-center py-8 text-gray-400 text-sm bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
                      <MdPayment className="text-4xl mx-auto mb-2 text-gray-300" />
                      <p className="font-medium">Please select a payment method above</p>
                      <p className="text-xs mt-1">All transactions are secure and encrypted</p>
                    </div>
                  )}

                  {/* Security Badges */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-6 pt-5 border-t border-gray-200">
                    <div className="flex items-center justify-center gap-1.5 text-gray-500 text-xs">
                      <FaLock className="text-blue-600" />
                      <span>Secured Payment</span>
                    </div>
                    <div className="flex items-center justify-center gap-1.5 text-gray-500 text-xs">
                      <FaShieldAlt className="text-blue-600" />
                      <span>100% Encrypted</span>
                    </div>
                    <div className="flex items-center justify-center gap-1.5 text-gray-500 text-xs col-span-2 md:col-span-1">
                      <FaHeart className="text-red-500" />
                      <span>Tax Deductible</span>
                    </div>
                  </div>
                </form>
              </>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}