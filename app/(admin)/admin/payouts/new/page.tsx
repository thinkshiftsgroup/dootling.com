import AdminBody from "@/components/admin/adminBody";
import { DataTableDemo } from "@/components/admin/data-table";
import React from "react";

const NewPayout = () => {
  return (
    <AdminBody>
      <div>
        <div className="flex items-center justify-between">
          <h1 className="font-semibold text-lg text-[#157bff]">New Payout</h1>
          {/* <p className="cursor-pointer  underline text-xs">view all</p> */}
        </div>
        <DataTableDemo />
      </div>
    </AdminBody>
  );
};

export default NewPayout;
