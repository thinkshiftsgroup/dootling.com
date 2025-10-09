import { Switch } from "@radix-ui/react-switch";
import React from "react";

const EmailSms = ({ activeTab }: any) => {
  return (
    <div
      id="email-sms"
      role="tabpanel"
      className={`w-full space-y-8 ${
        activeTab === "email-sms" ? "block" : "hidden"
      }`}
    >
      <div className="bg-white ">
        <div className="flex justify-between items-center">
          <h4 className="text-lg font-semibold text-gray-800">Email and SMS</h4>
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
                  <label htmlFor="email01" className="text-sm text-gray-600">
                    You have new notifications.
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="email02"
                    className="w-4 h-4 accent-[#50b5ff]"
                  />
                  <label htmlFor="email02" className="text-sm text-gray-600">
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
                  <label htmlFor="email03" className="text-sm text-gray-600">
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
                  <label htmlFor="email04" className="text-sm text-gray-600">
                    Upon new order.
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="email05"
                    className="w-4 h-4 accent-[#50b5ff]"
                  />
                  <label htmlFor="email05" className="text-sm text-gray-600">
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
                  <label htmlFor="email06" className="text-sm text-gray-600">
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
    </div>
  );
};

export default EmailSms;
