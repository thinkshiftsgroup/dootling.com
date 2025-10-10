"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Pencil } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useProfileStore } from "@/stores/useProfileStore";
import useProfileActions from "@/hooks/useProfileApi";

const EditProfile = () => {
  const [activeTab, setActiveTab] = useState("personal-information");
  const { profile, isLoading, isLoaded } = useProfileStore();
  const { fetchUserProfile, updateProfileDetails } = useProfileActions();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    headline: "",
    country: "",
    state: "",
    role: "",
    industry: "",
    dateOfBirth: "",
    pronouns: "",
  });

  useEffect(() => {
    if (!isLoaded) {
      fetchUserProfile();
    }
  }, [isLoaded, fetchUserProfile]);

  useEffect(() => {
    if (profile) {
      setFormData({
        firstname: profile.firstname || "",
        lastname: profile.lastname || "",
        username: profile.username || "",
        email: profile.email || "",
        headline: profile.headline || "",
        country: profile.country || "",
        state: profile.state || "",
        role: profile.role || "",
        industry: profile.industry || "",
        dateOfBirth: profile.dateOfBirth
          ? new Date(profile.dateOfBirth).toISOString().split("T")[0]
          : "",
        pronouns: profile.pronouns || "",
      });
    }
  }, [profile]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateProfileDetails(formData);
      alert("Profile updated successfully!");
    } catch (error) {
      alert("Failed to update profile.");
    }
  };

  const tabs = [
    { id: "personal-information", label: "Personal Information" },
    { id: "chang-pwd", label: "Change Password" },
    { id: "emailandsms", label: "Email and SMS" },
    { id: "manage-contact", label: "Manage Contact" },
  ];

  if (isLoading && !isLoaded) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg text-gray-500">Loading profile data...</p>
      </div>
    );
  }

  return (
    <div>
      <div className="relative bg-gray-50 min-h-screen py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-lg mb-6">
            <ul className=" grid grid-cols-4 rounded-sm text-sm font-medium text-center text-[#7e8b9a] ">
              {tabs.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full py-5 px-3.5 transition-colors
      ${
        activeTab === tab.id
          ? "bg-[#50b5ff] text-white"
          : "hover:bg-gray-100 text-[#7e8b9a]"
      }
      ${
        index === 0
          ? "rounded-tl-sm rounded-bl-sm"
          : index === tabs.length - 1
          ? "rounded-tr-sm rounded-br-sm"
          : ""
      }`}
                >
                  {tab.label}
                </button>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6">
            {activeTab === "personal-information" && (
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-6">
                  Personal Information
                </h4>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="flex mb-6">
                    <div className="relative">
                      <Image
                        src="/images/user/11.png"
                        alt="profile"
                        width={100}
                        height={100}
                        className="rounded-full w-36 h-36 border"
                      />
                      <label
                        htmlFor="upload"
                        className="absolute bottom-0 right-0 bg-[#50b5ff] text-white p-2 rounded-full cursor-pointer hover:bg-blue-700 transition"
                      >
                        <Pencil size={16} />
                      </label>
                      <input
                        id="upload"
                        type="file"
                        accept="image/*"
                        className="hidden"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="w-full flex flex-col gap-4">
                      <div>
                        <label className="text-sm font-medium text-[#738b9a]">
                          First Name
                        </label>
                        <input
                          type="text"
                          name="firstname"
                          value={formData.firstname}
                          onChange={handleChange}
                          placeholder="Bni"
                          className="w-full mt-1 border border-[#f1f1f1] rounded-md text-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium text-[#738b9a]">
                          Username
                        </label>
                        <input
                          type="text"
                          name="username"
                          value={formData.username}
                          onChange={handleChange}
                          placeholder="Bni@01"
                          className="w-full mt-1 border border-[#f1f1f1] rounded-md text-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-[#738b9a]">
                          Headline
                        </label>
                        <textarea
                          name="headline"
                          value={formData.headline}
                          onChange={handleChange}
                          placeholder="Your professional headline"
                          className="w-full mt-1 border border-[#f1f1f1] rounded-md text-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-[#738b9a]">
                          Country
                        </label>
                        <select
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          className="w-full mt-1 border border-[#f1f1f1] rounded-md text-sm p-2 bg-white focus:ring-blue-500 focus:border-blue-500"
                        >
                          <option value="">Select Country</option>
                          <option>USA</option>
                          <option>Canada</option>
                          <option>India</option>
                          <option>Nigeria</option>
                          <option>Germany</option>
                        </select>
                      </div>
                    </div>
                    <div className="w-full flex flex-col gap-4">
                      <div>
                        <label className="text-sm font-medium text-[#738b9a]">
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="lastname"
                          value={formData.lastname}
                          onChange={handleChange}
                          placeholder="Jhon"
                          className="w-full mt-1 border border-[#f1f1f1] rounded-md text-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium text-[#738b9a]">
                          Email
                        </label>
                        <input
                          type="text"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Johndoe@gmail.com"
                          disabled
                          className="w-full mt-1 border border-[#f1f1f1] rounded-md text-sm p-2 bg-gray-100 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-[#738b9a]">
                          Pronoun
                        </label>
                        <select
                          name="pronouns"
                          value={formData.pronouns}
                          onChange={handleChange}
                          className="w-full mt-1 border border-[#f1f1f1] rounded-md text-sm p-2 bg-white focus:ring-blue-500 focus:border-blue-500"
                        >
                          <option value="">Select Pronoun</option>
                          <option>He</option>
                          <option>She</option>
                          <option>They</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-[#738b9a]">
                          Date of Birth
                        </label>
                        <input
                          type="date"
                          name="dateOfBirth"
                          value={formData.dateOfBirth}
                          onChange={handleChange}
                          className="w-full mt-1 border border-[#f1f1f1] rounded-md text-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium text-[#738b9a]">
                          State
                        </label>
                        <select
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          className="w-full mt-1 border border-[#f1f1f1] rounded-md text-sm p-2 bg-white focus:ring-blue-500 focus:border-blue-500"
                        >
                          <option value="">Select State</option>
                          <option>California</option>
                          <option>Florida</option>
                          <option>Georgia</option>
                          <option>Connecticut</option>
                          <option>Louisiana</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-span-2 grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-[#738b9a]">
                          Role
                        </label>
                        <select
                          name="role"
                          value={formData.role}
                          onChange={handleChange}
                          className="w-full mt-1 border border-[#f1f1f1] rounded-md text-sm p-2 bg-white focus:ring-blue-500 focus:border-blue-500"
                        >
                          <option value="">Select Role</option>
                          <option>Software Eng</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-[#738b9a]">
                          Industry
                        </label>
                        <select
                          name="industry"
                          value={formData.industry}
                          onChange={handleChange}
                          className="w-full mt-1 border border-[#f1f1f1] rounded-md text-sm p-2 bg-white focus:ring-blue-500 focus:border-blue-500"
                        >
                          <option value="">Select Industry</option>
                          <option>Finance</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-4">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="bg-[#50b5ff] text-white px-5 py-2 rounded hover:bg-blue-700 transition disabled:bg-gray-400"
                    >
                      {isLoading ? "Saving..." : "Submit"}
                    </button>
                    <button
                      type="reset"
                      className="bg-[#ffebe8] text-[#ff9b8a] px-5 py-2 rounded hover:bg-[#f1f1f1] transition"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}

            {activeTab === "chang-pwd" && (
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-6">
                  Change Password
                </h4>
                <form className="space-y-5">
                  <div>
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium text-[#738b9a]">
                        Current Password
                      </label>
                      <p className="text-[#50b5ff] text-xs cursor-pointer">
                        Forgot Password
                      </p>
                    </div>
                    <input
                      type="password"
                      className="w-full mt-1 border-[#f1f1f1] border rounded-md text-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#738b9a]">
                      New Password
                    </label>
                    <input
                      type="password"
                      className="w-full mt-1 border-[#f1f1f1] border rounded-md text-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#738b9a]">
                      Verify Password
                    </label>
                    <input
                      type="password"
                      className="w-full mt-1 border-[#f1f1f1] border rounded-md text-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="flex items-center gap-3 pt-4">
                    <button
                      type="submit"
                      className="bg-[#50b5ff] text-white px-5 py-2 rounded hover:bg-blue-700 transition"
                    >
                      Submit
                    </button>
                    <button
                      type="reset"
                      className="bg-[#ffebe8] text-[#ff9b8a] px-5 py-2 rounded hover:bg-[#f1f1f1] transition"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}

            {activeTab === "emailandsms" && (
              <div className="bg-white ">
                <div className="flex justify-between items-center px-6 py-4 ">
                  <h4 className="text-lg font-semibold text-gray-800">
                    Email and SMS
                  </h4>
                </div>

                <div className="p-6">
                  <form className="space-y-6">
                    <div className="flex flex-wrap items-center">
                      <label className="w-full md:w-1/3 text-[#7e8b9a] font-medium text-sm">
                        Email Notification:
                      </label>
                      <div className="w-full md:w-2/3 flex items-center gap-3">
                        <Switch
                          id="emailNotification"
                          defaultChecked
                          className="data-[state=checked]:bg-[#50b5ff]"
                        />
                        <label
                          htmlFor="emailNotification"
                          className="text-sm text-gray-600 cursor-pointer"
                        >
                          Checked switch checkbox input
                        </label>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center">
                      <label className="w-full md:w-1/3 text-[#7e8b9a] font-medium text-sm">
                        SMS Notification:
                      </label>
                      <div className="w-full md:w-2/3 flex items-center gap-3">
                        <Switch
                          id="smsNotification"
                          defaultChecked
                          className="data-[state=checked]:bg-[#50b5ff] transition-colors duration-200"
                        />

                        <label
                          htmlFor="smsNotification"
                          className="text-sm text-gray-600 cursor-pointer"
                        >
                          Checked switch checkbox input
                        </label>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-start">
                      <label className="w-full md:w-1/3 text-[#7e8b9a] font-medium text-sm">
                        When To Email
                      </label>
                      <div className="w-full md:w-2/3 space-y-2">
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            id="email01"
                            className="w-4 h-4 accent-[#50b5ff]"
                          />
                          <label
                            htmlFor="email01"
                            className="text-sm text-gray-600"
                          >
                            You have new notifications.
                          </label>
                        </div>
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            id="email02"
                            className="w-4 h-4 accent-[#50b5ff]"
                          />
                          <label
                            htmlFor="email02"
                            className="text-sm text-gray-600"
                          >
                            You're sent a direct message
                          </label>
                        </div>
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            id="email03"
                            className="w-4 h-4 accent-[#50b5ff]"
                            defaultChecked
                          />
                          <label
                            htmlFor="email03"
                            className="text-sm text-gray-600"
                          >
                            Someone adds you as a connection
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-start">
                      <label className="w-full md:w-1/3 text-[#7e8b9a] font-medium text-sm">
                        When To Escalate Emails
                      </label>
                      <div className="w-full md:w-2/3 space-y-2">
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            id="email04"
                            className="w-4 h-4 accent-[#50b5ff]"
                          />
                          <label
                            htmlFor="email04"
                            className="text-sm text-gray-600"
                          >
                            Upon new order.
                          </label>
                        </div>
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            id="email05"
                            className="w-4 h-4 accent-[#50b5ff]"
                          />
                          <label
                            htmlFor="email05"
                            className="text-sm text-gray-600"
                          >
                            New membership approval
                          </label>
                        </div>
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            id="email06"
                            className="w-4 h-4 accent-[#50b5ff]"
                            defaultChecked
                          />
                          <label
                            htmlFor="email06"
                            className="text-sm text-gray-600"
                          >
                            Member registration
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 pt-4">
                      <button
                        type="submit"
                        className="bg-[#50b5ff] text-white px-5 py-2 rounded hover:bg-blue-700 transition"
                      >
                        Submit
                      </button>
                      <button
                        type="reset"
                        className="bg-[#ffebe8] text-[#ff9b8a] px-5 py-2 rounded hover:bg-[#f1f1f1] transition"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {activeTab === "manage-contact" && (
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-6">
                  Manage Contact
                </h4>
                <form className="space-y-5">
                  <div>
                    <label className="text-sm font-medium text-[#738b9a]">
                      Contact Number
                    </label>
                    <input
                      type="text"
                      defaultValue="001 2536 123 458"
                      className="w-full mt-1 border-[#f1f1f1] border rounded-md text-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#738b9a]">
                      Email
                    </label>
                    <input
                      type="email"
                      defaultValue="Bnijone@demo.com"
                      className="w-full mt-1 border-[#f1f1f1] border rounded-md text-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#738b9a]">
                      URL
                    </label>
                    <input
                      type="text"
                      defaultValue="https://getbootstrap.com"
                      className="w-full mt-1 border-[#f1f1f1] border rounded-md text-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="flex items-center gap-3 pt-4">
                    <button
                      type="submit"
                      className="bg-[#50b5ff] text-white px-5 py-2 rounded hover:bg-blue-700 transition"
                    >
                      Submit
                    </button>
                    <button
                      type="reset"
                      className="bg-[#ffebe8] text-[#ff9b8a] px-5 py-2 rounded hover:bg-[#f1f1f1] transition"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
