"use client";
import AdminBody from "@/components/admin/adminBody";
import { DataTableDemo } from "@/components/admin/data-table";
import Dashboard from "../stat-cards";

export default function AdminPageExample() {
  return (
    <AdminBody>
      <div>
        <Dashboard />
      </div>
    </AdminBody>
  );
}
