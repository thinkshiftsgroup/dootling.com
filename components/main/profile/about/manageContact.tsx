import React from "react";

const ManageContact = ({ activeTab }: any) => {
  return (
    <div
      id="manage-contact"
      role="tabpanel"
      className={`w-full space-y-8 ${
        activeTab === "manage-contact" ? "block" : "hidden"
      }`}
    >
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
            <label className="text-sm font-medium text-[#738b9a]">Email</label>
            <input
              type="email"
              defaultValue="Bnijone@demo.com"
              className="w-full mt-1 border-[#f1f1f1] border rounded-md text-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-[#738b9a]">URL</label>
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
    </div>
  );
};

export default ManageContact;
