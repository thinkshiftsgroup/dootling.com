"use client";
import AdminBody from "@/components/admin/adminBody";
import { DataTableDemo } from "@/components/admin/data-table";

export default function AdminPageExample() {
  return (
    <AdminBody>
      <div>
        <div className="flex items-center justify-between">
          <h1 className="font-semibold text-xl text-[#157bff]">Users</h1>
          <p className="cursor-pointer  underline text-xs">view all</p>
        </div>
        <DataTableDemo />
      </div>
    </AdminBody>
  );
}
