import AdminBody from "@/components/admin/adminBody";
import { DataTableDemo } from "@/components/admin/data-table";
import React from "react";

const AdminKyv = () => {
  return (
    <AdminBody>
      <div>
        <div className="flex items-center justify-between">
          <h1 className="font-semibold text-lg text-[#157bff]">
           KYC Settings
          </h1>
        </div>
      </div>
    </AdminBody>
  );
};

export default AdminKyv;
