import React from "react";

const ChangePassword = ({ activeTab, tabRefs }: any) => {
  return (
    <div
      id="change-password"
      ref={tabRefs["change-password"]}
      className={`w-full space-y-8 ${
        activeTab === "change-password" ? "block" : "hidden"
      }`}
    >
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
    </div>
  );
};

export default ChangePassword;
