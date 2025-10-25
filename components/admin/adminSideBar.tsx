"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  LayoutDashboard,
  Users,
  Banknote,
  Briefcase,
  FileCheck,
  Settings,
  MessageSquare,
  BarChart2,
  ChevronRight,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

interface SidebarMenuItemProps {
  title: string;
  icon: any;
  children?: React.ReactNode;
  path?: string;
}

const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({
  title,
  icon: Icon,
  children,
  path,
}) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const isActive =
    path === pathname ||
    React.Children.toArray(children)
      .filter((child: any) => child?.props?.path)
      .some((child: any) => pathname.startsWith(child.props.path));

  const handleClick = () => {
    if (path) router.push(path);
    else setOpen(!open);
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className={`group flex items-center justify-between w-full px-4 py-2 rounded-sm transition-all ease-in-out duration-150 ${
          isActive
            ? "bg-[#157bff] text-white"
            : "text-[#7e8b9a] hover:bg-[#157bff]/15 hover:text-[#157bff]"
        }`}
      >
        <div className="flex items-center gap-2">
          <Icon
            size={17}
            className={`transition-colors duration-150 ${
              isActive
                ? "text-white"
                : "text-[#7e8b9a] group-hover:text-[#157bff]"
            }`}
          />
          <span className="font-medium text-sm">{title}</span>
        </div>
        {children &&
          (open ? (
            <ChevronDown
              size={16}
              className={`transition-colors duration-150 ${
                isActive
                  ? "text-white"
                  : "group-hover:text-[#157bff] text-[#6c757d4d]"
              }`}
            />
          ) : (
            <ChevronRight
              size={16}
              className={`transition-colors duration-150 ${
                isActive
                  ? "text-white"
                  : "group-hover:text-[#157bff] text-[#6c757d4d]"
              }`}
            />
          ))}
      </button>

      {children && (
        <div
          className={`ml-5 flex flex-col mt-1 space-y-1 overflow-hidden transition-all duration-300 ease-in-out ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

const SidebarSubItem = ({ title, path }: { title: string; path: string }) => {
  const router = useRouter();
  const pathname = usePathname();
  const isActive = pathname === path;

  return (
    <li
      onClick={(e) => {
        e.stopPropagation();
        router.push(path);
      }}
      className={`px-2 py-2 list-disc list-inside w-full rounded-sm capitalize font-medium text-sm text-left transition-all ease-in-out duration-100 cursor-pointer ${
        isActive
          ? "bg-[#157bff] text-white"
          : "text-[#7e8b9a] hover:text-[#157bff] hover:bg-[#157bff]/15"
      }`}
    >
      {title}
    </li>
  );
};

const AdminSidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();

  return (
    <>
      <div className="lg:hidden p-3">
        <button
          className="flex items-center gap-2 bg-[#157bff] text-white px-4 py-2 rounded-sm"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
          {isOpen ? "Close Menu" : "Menu"}
        </button>
      </div>

      <aside
        className={`bg-white hide-scrollbar h-screen  top-0 left-0 w-full transform transition-transform duration-300 overflow-y-auto shadow-sm z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div
          className="py-4 border-b border-gray-200 flex items-center justify-center gap-2 cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Image
            width={35}
            height={35}
            src="/images/dootling-icon.svg"
            alt="Dootling icon"
            priority
          />
          <p className="font-semibold text-[#157bff] text-lg">Dootling</p>
        </div>

        <nav className="flex flex-col p-2 mt-4 text-sm space-y-2">
          <SidebarMenuItem
            title="Dashboard"
            icon={LayoutDashboard}
            path="/admin/dashboard"
          />

          <SidebarMenuItem title="Accounts" icon={Users}>
            <SidebarSubItem title="All Users" path="/admin/users" />
            <SidebarSubItem title="Active Users" path="/admin/users/active" />
            <SidebarSubItem title="Banned Users" path="/admin/users/banned" />
          </SidebarMenuItem>

          <SidebarMenuItem title="Transactions" icon={Banknote}>
            <SidebarSubItem
              title="Bookings"
              path="/admin/transactions/bookings"
            />
            <SidebarSubItem title="Escrow" path="/admin/transactions/escrow" />
          </SidebarMenuItem>

          <SidebarMenuItem title="Escrow" icon={Briefcase}>
            <SidebarSubItem
              title="Running Escrow"
              path="/admin/escrow/running"
            />
            <SidebarSubItem
              title="New Requests"
              path="/admin/escrow/requests"
            />
            <SidebarSubItem
              title="Escrow History"
              path="/admin/escrow/history"
            />
          </SidebarMenuItem>

          <SidebarMenuItem title="Funds Payouts" icon={FileCheck}>
            <SidebarSubItem title="New Requests" path="/admin/payouts/new" />
            <SidebarSubItem title="Next Run" path="/admin/payouts/next-run" />
            <SidebarSubItem
              title="Payouts History"
              path="/admin/payouts/history"
            />
          </SidebarMenuItem>

          <SidebarMenuItem title="KYC" icon={FileCheck}>
            <SidebarSubItem
              title="New Approval Requests"
              path="/admin/kyc/new-approvals"
            />
            <SidebarSubItem
              title="Account Deletion Requests"
              path="/admin/kyc/deletion-requests"
            />
          </SidebarMenuItem>

          <SidebarMenuItem title="Communication" icon={MessageSquare}>
            <SidebarSubItem
              title="New Requests"
              path="/admin/communication/new"
            />
            <SidebarSubItem
              title="Request Settings"
              path="/admin/communication/settings"
            />
          </SidebarMenuItem>

          <SidebarMenuItem title="Settings" icon={Settings}>
            <SidebarSubItem
              title="Profile Settings"
              path="/admin/settings/profile"
            />
            <SidebarSubItem
              title="Roles & Permissions"
              path="/admin/settings/roles"
            />
            <SidebarSubItem title="KYC Settings" path="/admin/settings/kyc" />
          </SidebarMenuItem>

          <SidebarMenuItem title="Utilities" icon={BarChart2}>
            <SidebarSubItem
              title="Analytics"
              path="/admin/utilities/analytics"
            />
            <SidebarSubItem
              title="Newsletter"
              path="/admin/utilities/newsletter"
            />
            <SidebarSubItem title="FAQs" path="/admin/utilities/faqs" />
            <SidebarSubItem
              title="Testimonials"
              path="/admin/utilities/testimonials"
            />
            <SidebarSubItem
              title="Freelancers"
              path="/admin/utilities/freelancers"
            />
            <SidebarSubItem
              title="Contact Messages"
              path="/admin/utilities/contact-messages"
            />
          </SidebarMenuItem>
        </nav>
      </aside>
    </>
  );
};

export default AdminSidebar;
