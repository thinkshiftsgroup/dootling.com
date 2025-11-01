import React from "react";
import AdminSidebar from "./adminSideBar";

const AdminBody: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <div className="min-h-screen bg-gray-50">
        <div className="lg:grid block grid-cols-12 pr-4 gap-3">
          <div className="col-span-2">
            <AdminSidebar />
          </div>

          <div className="col-span-10 pt-[2rem] h-screen overflow-y-scroll hide-scrollbar">
            <div className=" container w-full mx-auto">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminBody;
