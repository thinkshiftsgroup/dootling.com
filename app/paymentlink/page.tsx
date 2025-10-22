// import { useState } from 'react';
"use client";
import { useState } from "react";
import Image from "next/image";

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
    <div className="min-h-screen bg-gray-50 py-16 lg:py-16 px-3 lg:px-10">
      <div className="max-w-[90rem]  mx-auto">
        <div className="md:grid md:grid-cols-12 gap-6">
          {/* Left Column */}
          <div className="col-span-4 w-full">
            <div className="lg:pl-0">
              {/* Header */}
              {/* <div className="flex gap-10 items-start mb-8 lg:mb-12">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
                  alt="Lauren Stones"
                  className="w-20 h-20 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1 gap-8 flex flex-col pe-10">
                  <div>
                    <h4 className="text-xl leading-1.5 font-semibold text-gray-500 flex items-center gap-0.5 mb-1">
                      Lauren Stones
                      <svg className="w-5 h-5 mb-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="#3b82f6" d="m10.95 13.43l-1.796-1.79q-.14-.14-.341-.15q-.202-.01-.367.156q-.16.16-.16.354t.16.354l1.938 1.938q.243.242.566.242t.566-.242l4.038-4.038q.146-.146.153-.344q.007-.199-.153-.364q-.165-.165-.357-.168t-.356.162zm-2.28 7.186l-1.316-2.2l-2.481-.524q-.298-.055-.475-.32q-.177-.264-.146-.562l.237-2.556l-1.683-1.92q-.212-.217-.212-.534t.212-.534l1.683-1.92l-.237-2.555q-.03-.299.146-.563q.177-.264.475-.32l2.48-.523l1.316-2.2q.162-.268.435-.37q.273-.103.565.027L12 4.027l2.33-.985q.293-.13.566-.027q.273.102.435.37l1.315 2.2l2.481.523q.298.056.475.32t.146.563l-.236 2.555l1.682 1.92q.212.217.212.534t-.212.535l-1.682 1.919l.236 2.555q.03.299-.146.563q-.177.265-.475.32l-2.48.524l-1.316 2.2q-.162.267-.435.37t-.565-.028L12 19.973l-2.33.985q-.293.13-.566.027q-.273-.102-.435-.37"></path>
                      </svg>
                    </h4>
                    <p className="text-lg lg:text-xl leading-1.5 font-bold text-black">Service Payment</p>
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
                    <Image
                      width={40}
                      height={40}
                      src="/images/dootling-icon.svg"
                      alt="Dootling icon"
                      priority
                      className="mr-3"
                    />
                    <span className="text-gray-600">
                      Powered by <strong className="text-black font-semibold">Dootling UK</strong>
                    </span>
                  </div>
                </div>
              </div> */}
              <div className="flex mb-10 items-start gap-4">
                <Image
                  src="/images/user/userImg.jpg"
                  alt="icon"
                  width={100}
                  height={100}
                  className="rounded-sm w-[60px]"
                />
                <div className="flex flex-col gap-1.5 w-80">
                  <h1 className="text-3xl flex whitespace-nowrap font-bold text-black">
                    John Paul
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 148 148"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M77.6112 23.2932C80.5992 24.0969 83.1823 26.1032 86.3237 28.5329L88.1459 29.9441C89.6369 31.0914 89.9927 31.3553 90.3486 31.5455C90.7307 31.7533 91.1338 31.9199 91.5512 32.0424C91.9377 32.159 92.3733 32.2265 94.2385 32.4719L96.5271 32.7603C100.466 33.2634 103.706 33.6745 106.387 35.2145C108.737 36.5643 110.682 38.5093 112.032 40.8592C113.572 43.5343 113.983 46.78 114.486 50.7191L114.78 53.0076C115.02 54.8728 115.087 55.3085 115.204 55.695C115.326 56.1122 115.49 56.5131 115.695 56.8976C115.891 57.2534 116.155 57.6093 117.302 59.1002L118.713 60.9225C121.143 64.0639 123.149 66.647 123.953 69.635C124.656 72.2472 124.656 74.999 123.953 77.6112C123.149 80.5992 121.143 83.1823 118.713 86.3237L117.302 88.1459C116.155 89.6369 115.891 89.9927 115.701 90.3486C115.492 90.7331 115.326 91.134 115.204 91.5512C115.087 91.9377 115.02 92.3733 114.774 94.2385L114.486 96.5271C113.983 100.466 113.572 103.706 112.032 106.387C110.681 108.734 108.734 110.681 106.387 112.032C103.712 113.572 100.466 113.983 96.5271 114.486L94.2385 114.78C92.3733 115.02 91.9377 115.087 91.5512 115.204C91.134 115.326 90.7331 115.49 90.3486 115.695C89.9927 115.891 89.6369 116.155 88.1459 117.302L86.3237 118.713C83.1823 121.143 80.5992 123.149 77.6112 123.953C74.999 124.656 72.2472 124.656 69.635 123.953C66.647 123.149 64.0639 121.143 60.9225 118.713L59.1002 117.302C57.6093 116.155 57.2534 115.891 56.8976 115.701C56.5155 115.493 56.1123 115.326 55.695 115.204C55.3085 115.087 54.8728 115.02 53.0076 114.774L50.7191 114.486C46.78 113.983 43.5405 113.572 40.8592 112.032C38.5125 110.681 36.5649 108.734 35.2145 106.387C33.6745 103.712 33.2634 100.466 32.7603 96.5271L32.4658 94.2385C32.2265 92.3733 32.159 91.9377 32.0424 91.5512C31.9218 91.1341 31.7573 90.731 31.5516 90.3486C31.3553 89.9927 31.0914 89.6369 29.9441 88.1459L28.5329 86.3237C26.1032 83.1823 24.0969 80.5992 23.2932 77.6112C22.5898 74.999 22.5898 72.2472 23.2932 69.635C24.0969 66.647 26.1032 64.0639 28.5329 60.9225L29.9441 59.1002C31.0914 57.6093 31.3553 57.2534 31.5455 56.8976C31.7533 56.5155 31.9199 56.1123 32.0424 55.695C32.159 55.3085 32.2265 54.8728 32.4719 53.0076L32.7603 50.7191C33.2634 46.78 33.6745 43.5405 35.2145 40.8592C36.5649 38.5125 38.5125 36.5649 40.8592 35.2145C43.5343 33.6745 46.78 33.2634 50.7191 32.7603L53.0076 32.4658C54.8728 32.2265 55.3085 32.159 55.695 32.0424C56.1121 31.9218 56.5152 31.7573 56.8976 31.5516C57.2534 31.3553 57.6093 31.0914 59.1002 29.9441L60.9225 28.5329C64.0639 26.1032 66.647 24.0969 69.635 23.2932C72.2472 22.5898 74.999 22.5898 77.6112 23.2932ZM96.3676 57.0141C95.217 55.8639 93.6567 55.2177 92.0297 55.2177C90.4028 55.2177 88.8425 55.8639 87.6919 57.0141L67.4875 77.2185L59.5543 69.2853C58.3971 68.1676 56.8472 67.5492 55.2385 67.5632C53.6298 67.5771 52.0909 68.2224 50.9533 69.36C49.8158 70.4976 49.1705 72.0364 49.1565 73.6452C49.1425 75.2539 49.761 76.8037 50.8786 77.9609L63.1497 90.232C64.3003 91.3823 65.8606 92.0284 67.4875 92.0284C69.1145 92.0284 70.6748 91.3823 71.8254 90.232L96.3676 65.6898C97.5178 64.5392 98.164 62.9789 98.164 61.352C98.164 59.7251 97.5178 58.1647 96.3676 57.0141Z"
                        fill="#0088FF"
                      />
                    </svg>
                  </h1>

                  <span className="flex whitespace-nowrap flex-wrap lg:flex-nowrap font-normal items-center gap-1">
                    <p className="capitalize text-[#FAAF40] text-xs">
                      Director In Technology
                    </p>
                    <span className="flex gap-2 items-center">
                      <Image
                        src="/images/icon/iwwa_map.svg"
                        alt="icon"
                        width={16}
                        height={16}
                      />

                      <p className=" text-xs text-[#979797]">United Kingdom</p>
                    </span>
                  </span>

                  <ul className="hidden lg:block space-y-4 mb-10 mt-3">
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

                  <div className="hidden lg:flex w-70 items-center px-3 py-2 border border-gray-200 rounded-sm">
                    <Image
                      width={40}
                      height={40}
                      src="/images/dootling-icon.svg"
                      alt="Dootling icon"
                      priority
                      className="mr-3"
                    />
                    <span className="text-gray-600">
                      Powered by <strong className="text-black font-semibold">Dootling UK</strong>
                    </span>
                  </div>
                </div>
              </div>
              <div className="lg:hidden mb-6">
                <h3 className="text-xl font-semibold text-center text-black mb-4">SEO Services and Project Management</h3>
              </div>

            </div>
          </div>

          {/* Right Column */}
          <div className="col-span-8 w-full">
            <div className="bg-gray-100 rounded-2xl p-0 lg:p-8">
              <div className="md:grid md:grid-cols-12 gap-0 lg:gap-6">
                <div className="hidden lg:block lg:col-span-5 p-12">
                  <h3 className="text-2xl font-semibold text-black mb-8 leading-tight">
                    SEO Services and Project Management
                  </h3>
                  <p className="text-lg text-gray-700 mb-8">
                    Our Consultation fees are paid through this platform from multinational organizations.
                  </p>
                  <p className="text-sm text-gray-600">*Payment made are final. No refunds.</p>
                </div>

                <div className="md:col-span-7">
                  <div className="bg-white rounded-2xl p-5 lg:p-10 shadow-sm lg:mr-8">
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
                      className="w-full bg-[#157BFF] hover:bg-blue-700 text-white font-bold text-xl rounded-xl py-4 px-6 transition-colors duration-200 flex items-center justify-center gap-3"
                    >
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
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

                    <div className="flex items-center px-3 py-2 w-70 border border-gray-200 rounded-sm mb-4">
                      <Image
                        width={40}
                        height={40}
                        src="/images/dootling-icon.svg"
                        alt="Dootling icon"
                        priority
                        className="mr-3"
                      />
                      <span className="text-gray-600">
                        Powered by <strong className="text-black font-semibold">Dootling UK</strong>
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