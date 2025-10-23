// export default function AdminPage() {
//   return <div>Admin Page</div>;
// }
"use client";

import { AdminSidebar, TabContent } from "@/components/admin/adminSideBar";
import { useState } from "react";

// Example usage component
export default function AdminPageExample() {
  const [activeTab, setActiveTab] = useState("all-users");

  const sidebarSections = [
    {
      title: "Dashboard",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
        </svg>
      ),
      sectionKey: "dashboard",
      id: "dashboard",
      items: [
        { label: "Dashboard", id: "dashboard" },
      ],
    },
    {
      title: "Accounts",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
        </svg>
      ),
      sectionKey: "account",
      items: [
        { label: "All Users", id: "all-users" },
        { label: "Active Users", id: "active-users" },
        { label: "Banned Users", id: "banned-users" },
      ],
    },
    {
      title: "Transactions",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        </svg>
      ),
      sectionKey: "transaction",
      items: [
        { label: "Bookings", id: "booking" },
        { label: "Escrow", id: "escrow" },
      ],
    },
    {
      title: "Escrow",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        </svg>
      ),
      sectionKey: "escrow",
      items: [
        { label: "Running Escrow", id: "running-escrow" },
        { label: "New Requests", id: "new-requests" },
        { label: "Escrow History", id: "escrow-history" },
      ],
    },
    {
      title: "Funds Payout",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        </svg>
      ),
      sectionKey: "funds-payout",
      items: [
        { label: "New Requests", id: "new-requests" },
        { label: "Next Run", id: "next-run" },
        { label: "Payouts History", id: "payout-history" },
      ],
    },
    {
      title: "KYC",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        </svg>
      ),
      sectionKey: "kyc",
      items: [
        { label: "New Approval Requests", id: "new-approval-requests" },
        { label: "Account Deletion Requests", id: "account-deletion-requests" },
      ],
    },
    {
      title: "Communication",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        </svg>
      ),
      sectionKey: "communication",
      items: [
        { label: "New Request", id: "new-request" },
        { label: "Request Setting", id: "request-setting" },
      ],
    },
    {
      title: "Settings",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        </svg>
      ),
      sectionKey: "settings",
      items: [
        { label: "Profile Settings", id: "profile-settings" },
        { label: "Roles & Permissions", id: "roles-permissions" },
        { label: "KYC Settings", id: "kyc-settings" },
      ],
    },
    {
      title: "Utilities",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        </svg>
      ),
      sectionKey: "utilities",
      items: [
        { label: "Analytics", id: "analytics" },
        { label: "NewsLetter", id: "newsletter" },
        { label: "FAQs", id: "faqs" },
        { label: "Testimonial", id: "testimonial" },
        { label: "Freelancers", id: "freelancers" },
        { label: "Contact Messages", id: "contact-messages" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="lg:grid block grid-cols-12 gap-3">
        {/* Sidebar */}
        <div className="col-span-3">
          <AdminSidebar
            sections={sidebarSections}
            activeTab={activeTab}
            onTabChange={(tabId) => setActiveTab(tabId)}
          />
        </div>

        {/* Tab Content */}
        <div className="col-span-9">
          <div className="card bg-white rounded-sm p-6">
            <TabContent activeTab={activeTab} tabId="dashboard">
              {/* <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Dashboard
              </h4> */}
              <p className="text-gray-600">
                <Dashboard />
              </p>
            </TabContent>
            <TabContent activeTab={activeTab} tabId="all-users">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Personal Information
              </h4>
              <p className="text-gray-600">
                Add your personal information form content here
                {/* <Dashboard /> */}
              </p>
            </TabContent>

            <TabContent activeTab={activeTab} tabId="active-users">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Hobbies and Interests
              </h4>
              <p className="text-gray-600">
                Add your hobbies and interests form content here
              </p>
            </TabContent>

            <TabContent activeTab={activeTab} tabId="banned-users">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Payout Account & KYC
              </h4>
              <p className="text-gray-600">
                Add your payout account and KYC form content here
              </p>
            </TabContent>

            <TabContent activeTab={activeTab} tabId="work-education">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Work and Education
              </h4>
              <p className="text-gray-600">
                Add your work and education form content here
              </p>
            </TabContent>

            <TabContent activeTab={activeTab} tabId="places-lived">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Places You've Lived
              </h4>
              <p className="text-gray-600">
                Add your places lived form content here
              </p>
            </TabContent>

            <TabContent activeTab={activeTab} tabId="visibility">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Profile Visibility
              </h4>
              <p className="text-gray-600">
                Add your profile visibility settings here
              </p>
            </TabContent>

            <TabContent activeTab={activeTab} tabId="privacy">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Privacy and Security
              </h4>
              <p className="text-gray-600">
                Add your privacy and security settings here
              </p>
            </TabContent>

            <TabContent activeTab={activeTab} tabId="block-list">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Block List
              </h4>
              <p className="text-gray-600">Add your block list here</p>
            </TabContent>

            <TabContent activeTab={activeTab} tabId="manage-contact">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Manage Contact
              </h4>
              <p className="text-gray-600">
                Add your contact management here
              </p>
            </TabContent>

            <TabContent activeTab={activeTab} tabId="change-password">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Change Password
              </h4>
              <p className="text-gray-600">
                Add your password change form here
              </p>
            </TabContent>

            <TabContent activeTab={activeTab} tabId="email-sms">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Email and SMS
              </h4>
              <p className="text-gray-600">
                Add your email and SMS settings here
              </p>
            </TabContent>

            <TabContent activeTab={activeTab} tabId="export-data">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Export Data
              </h4>
              <p className="text-gray-600">Add your export data options here</p>
            </TabContent>
          </div>
        </div>
      </div>
    </div>
  );
}