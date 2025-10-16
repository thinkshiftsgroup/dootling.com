// import { useState } from 'react';
"use client";
import { useState } from "react";

export default function PaymentPage() {
  const [formData, setFormData] = useState({
    businessName: '',
    name: '',
    email: '',
    address: '',
    countryCode: '+234',
    phone: '',
    currency: 'USD',
    amount: '',
    purpose: ''
  });

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-5 lg:py-8 px-4 lg:px-5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-4">
            <div className="lg:pl-0">
              {/* Header */}
              <div className="flex gap-3 lg:gap-4 items-start mb-8 lg:mb-12">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" 
                  alt="Lauren Stones" 
                  className="w-20 h-20 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <h4 className="text-base font-normal text-gray-500 flex items-center gap-2 mb-1">
                    Lauren Stones
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path fill="#3b82f6" d="m10.95 13.43l-1.796-1.79q-.14-.14-.341-.15q-.202-.01-.367.156q-.16.16-.16.354t.16.354l1.938 1.938q.243.242.566.242t.566-.242l4.038-4.038q.146-.146.153-.344q.007-.199-.153-.364q-.165-.165-.357-.168t-.356.162zm-2.28 7.186l-1.316-2.2l-2.481-.524q-.298-.055-.475-.32q-.177-.264-.146-.562l.237-2.556l-1.683-1.92q-.212-.217-.212-.534t.212-.534l1.683-1.92l-.237-2.555q-.03-.299.146-.563q.177-.264.475-.32l2.48-.523l1.316-2.2q.162-.268.435-.37q.273-.103.565.027L12 4.027l2.33-.985q.293-.13.566-.027q.273.102.435.37l1.315 2.2l2.481.523q.298.056.475.32t.146.563l-.236 2.555l1.682 1.92q.212.217.212.534t-.212.535l-1.682 1.919l.236 2.555q.03.299-.146.563q-.177.265-.475.32l-2.48.524l-1.316 2.2q-.162.267-.435.37t-.565-.028L12 19.973l-2.33.985q-.293.13-.566.027q-.273-.102-.435-.37"></path>
                    </svg>
                  </h4>
                  <p className="text-lg lg:text-xl font-bold text-black">Service Payment</p>
                </div>
              </div>

              <div className="lg:hidden mb-6">
                <h3 className="text-xl font-semibold text-center mb-4">SEO Services and Project Management</h3>
              </div>

              <ul className="hidden lg:block space-y-4 mb-10">
                <li className="flex items-center text-gray-400">
                  <div className="w-6 h-6 mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path fill="none" stroke="currentColor" strokeLinecap="square" strokeWidth="1.5" d="M16 20v-1a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v1M12.5 7a4 4 0 1 1-8 0a4 4 0 0 1 8 0Zm3 4a4 4 0 0 0 0-8M23 20v-1a4 4 0 0 0-4-4"></path>
                    </svg>
                  </div>
                  <span>Trusted by 20k+ Creators</span>
                </li>
                <li className="flex items-center text-gray-400">
                  <div className="w-6 h-6 mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48">
                      <path fill="currentColor" d="M4 15.25A6.25 6.25 0 0 1 10.25 9h27.5A6.25 6.25 0 0 1 44 15.25v17.5A6.25 6.25 0 0 1 37.75 39h-27.5A6.25 6.25 0 0 1 4 32.75zm6.25-3.75a3.75 3.75 0 0 0-3.75 3.75v3.25h35v-3.25a3.75 3.75 0 0 0-3.75-3.75zM6.5 32.75a3.75 3.75 0 0 0 3.75 3.75h27.5a3.75 3.75 0 0 0 3.75-3.75V21h-35zm24.75-3.25a1.25 1.25 0 1 0 0 2.5h5.5a1.25 1.25 0 1 0 0-2.5z"></path>
                    </svg>
                  </div>
                  <span>Stripe Offered Capital</span>
                </li>
                <li className="flex items-center text-gray-400">
                  <div className="w-6 h-6 mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 21v-5.313m0 0c5.818-4.55 10.182 4.55 16 0V4.313c-5.818 4.55-10.182-4.55-16 0z"></path>
                    </svg>
                  </div>
                  <span>Available in 146 countries</span>
                </li>
                <li className="flex items-center text-gray-400">
                  <div className="w-6 h-6 mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path fill="none" stroke="currentColor" strokeWidth="1" d="M16 16c0-1.105-3.134-2-7-2s-7 .895-7 2s3.134 2 7 2s7-.895 7-2ZM2 16v4.937C2 22.077 5.134 23 9 23s7-.924 7-2.063V16M9 5c-4.418 0-8 .895-8 2s3.582 2 8 2M1 7v5c0 1.013 3.582 2 8 2M23 4c0-1.105-3.1-2-6.923-2s-6.923.895-6.923 2s3.1 2 6.923 2S23 5.105 23 4Zm-7 12c3.824 0 7-.987 7-2V4M9.154 4v10.166M9 9c0 1.013 3.253 2 7.077 2S23 10.013 23 9"></path>
                    </svg>
                  </div>
                  <span>Support 135+ Currencies</span>
                </li>
              </ul>

              <div className="hidden lg:flex items-center p-5 border border-gray-200 rounded-xl">
                <div className="w-10 h-10 bg-yellow-400 rounded-full mr-3 flex-shrink-0 flex items-center justify-center">
                  <span className="text-xs font-bold">S</span>
                </div>
                <span className="text-gray-600">
                  Powered by <strong className="text-black font-semibold">Selfany UK</strong>
                </span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-8">
            <div className="bg-gray-100 rounded-2xl p-0 lg:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-6">
                <div className="hidden lg:block lg:col-span-5 p-12">
                  <h3 className="text-2xl font-semibold text-black mb-8 leading-tight">
                    SEO Services and Project Management
                  </h3>
                  <p className="text-lg text-gray-700 mb-8">
                    Our Consultation fees are paid through this platform from multinational organizations.
                  </p>
                  <p className="text-sm text-gray-600">*Payment made are final. No refunds.</p>
                </div>

                <div className="lg:col-span-7">
                  <div className="bg-white rounded-2xl p-5 lg:p-10 shadow-sm lg:mr-3">
                    <div className="mb-5">
                      <label className="block text-base font-semibold text-black mb-2.5">
                        Provide Business Name*
                      </label>
                      <input
                        type="text"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-xl px-5 py-3.5 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div className="mb-5">
                      <label className="block text-base font-semibold text-black mb-2.5">
                        Full Personal Legal Name*
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-xl px-5 py-3.5 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div className="mb-5">
                      <label className="block text-base font-semibold text-black mb-2.5">
                        Email Address*
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-xl px-5 py-3.5 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div className="mb-5">
                      <label className="block text-base font-semibold text-black mb-2.5">
                        Full Contact Address*
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-xl px-5 py-3.5 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div className="mb-5">
                      <label className="block text-base font-semibold text-black mb-2.5">
                        Phone Number*
                      </label>
                      <div className="flex gap-0 bg-gray-50 rounded-xl overflow-hidden border border-gray-300">
                        <select
                          name="countryCode"
                          value={formData.countryCode}
                          onChange={handleInputChange}
                          className="bg-transparent border-none px-4 py-3.5 text-gray-600 focus:outline-none cursor-pointer min-w-[110px]"
                        >
                          <option value="+234">+234</option>
                          <option value="+1">+1</option>
                          <option value="+44">+44</option>
                          <option value="+91">+91</option>
                        </select>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="937737733"
                          className="flex-1 bg-white border border-gray-300 rounded-xl px-5 py-3.5 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    <div className="mb-5">
                      <label className="block text-base font-semibold text-black mb-2.5">
                        Amount*
                      </label>
                      <div className="flex gap-0 bg-gray-50 rounded-xl overflow-hidden border border-gray-300">
                        <select
                          name="currency"
                          value={formData.currency}
                          onChange={handleInputChange}
                          className="bg-transparent border-none px-4 py-3.5 text-gray-600 focus:outline-none cursor-pointer min-w-[110px]"
                        >
                          <option value="USD">USD</option>
                          <option value="NGN">NGN</option>
                          <option value="GBP">GBP</option>
                          <option value="EUR">EUR</option>
                        </select>
                        <input
                          type="text"
                          name="amount"
                          value={formData.amount}
                          onChange={handleInputChange}
                          placeholder="150"
                          className="flex-1 bg-white border border-gray-300 rounded-xl px-5 py-3.5 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    <div className="mb-5">
                      <label className="block text-base font-semibold text-black mb-2.5">
                        Payment Purpose*
                      </label>
                      <textarea
                        name="purpose"
                        value={formData.purpose}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full border border-gray-300 rounded-xl px-5 py-3.5 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      />
                    </div>

                    <button
                      onClick={handleSubmit}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-yellow-400 font-bold text-xl rounded-xl py-4 px-6 transition-colors duration-200 flex items-center justify-center gap-3"
                    >
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                      </svg>
                      Pay Now
                    </button>
                  </div>

                  <div className="lg:hidden mt-6 px-3">
                    <p className="text-base text-gray-700 mb-6">
                      Our Consultation fees are paid through this platform from multinational organizations.
                    </p>

                    <ul className="space-y-4 mb-6">
                      <li className="flex items-center text-gray-400">
                        <div className="w-6 h-6 mr-3 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" strokeLinecap="square" strokeWidth="1.5" d="M16 20v-1a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v1M12.5 7a4 4 0 1 1-8 0a4 4 0 0 1 8 0Zm3 4a4 4 0 0 0 0-8M23 20v-1a4 4 0 0 0-4-4"></path>
                          </svg>
                        </div>
                        <span>Trusted by 20k+ Creators</span>
                      </li>
                      <li className="flex items-center text-gray-400">
                        <div className="w-6 h-6 mr-3 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48">
                            <path fill="currentColor" d="M4 15.25A6.25 6.25 0 0 1 10.25 9h27.5A6.25 6.25 0 0 1 44 15.25v17.5A6.25 6.25 0 0 1 37.75 39h-27.5A6.25 6.25 0 0 1 4 32.75zm6.25-3.75a3.75 3.75 0 0 0-3.75 3.75v3.25h35v-3.25a3.75 3.75 0 0 0-3.75-3.75zM6.5 32.75a3.75 3.75 0 0 0 3.75 3.75h27.5a3.75 3.75 0 0 0 3.75-3.75V21h-35zm24.75-3.25a1.25 1.25 0 1 0 0 2.5h5.5a1.25 1.25 0 1 0 0-2.5z"></path>
                          </svg>
                        </div>
                        <span>Stripe Offered Capital</span>
                      </li>
                      <li className="flex items-center text-gray-400">
                        <div className="w-6 h-6 mr-3 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 21v-5.313m0 0c5.818-4.55 10.182 4.55 16 0V4.313c-5.818 4.55-10.182-4.55-16 0z"></path>
                          </svg>
                        </div>
                        <span>Available in 146 countries</span>
                      </li>
                      <li className="flex items-center text-gray-400">
                        <div className="w-6 h-6 mr-3 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" strokeWidth="1" d="M16 16c0-1.105-3.134-2-7-2s-7 .895-7 2s3.134 2 7 2s7-.895 7-2ZM2 16v4.937C2 22.077 5.134 23 9 23s7-.924 7-2.063V16M9 5c-4.418 0-8 .895-8 2s3.582 2 8 2M1 7v5c0 1.013 3.582 2 8 2M23 4c0-1.105-3.1-2-6.923-2s-6.923.895-6.923 2s3.1 2 6.923 2S23 5.105 23 4Zm-7 12c3.824 0 7-.987 7-2V4M9.154 4v10.166M9 9c0 1.013 3.253 2 7.077 2S23 10.013 23 9"></path>
                          </svg>
                        </div>
                        <span>Support 135+ Currencies</span>
                      </li>
                    </ul>

                    <div className="flex items-center p-5 border border-gray-200 rounded-xl mb-4">
                      <div className="w-10 h-10 bg-yellow-400 rounded-full mr-3 flex-shrink-0 flex items-center justify-center">
                        <span className="text-xs font-bold">S</span>
                      </div>
                      <span className="text-gray-600">
                        Powered by <strong className="text-black font-semibold">Selfany UK</strong>
                      </span>
                    </div>

                    <p className="text-sm text-gray-600">*Payment made are final. No refunds.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}