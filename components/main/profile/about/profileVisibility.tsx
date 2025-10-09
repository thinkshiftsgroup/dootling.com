"use client";

import React, { useState } from "react";

interface VisibilityOption {
  label: string;
  value: string;
}

interface VisibilityRow {
  field: string;
  options?: VisibilityOption[];
  defaultValue?: string;
}

const selectOptions: VisibilityOption[] = [
  { label: "Only Me", value: "only-me" },
  { label: "Everyone", value: "everyone" },
  { label: "Friends", value: "friends" },
  { label: "All Members", value: "all-members" },
];

const ProfileVisibility = ({ activeTab }: any) => {
  const [visibility, setVisibility] = useState<Record<string, string>>({});

  const handleChange = (field: string, value: string) => {
    setVisibility((prev) => ({ ...prev, [field]: value }));
  };

  const sections = [
    {
      title: "Personal Information",
      rows: [
        { field: "Name", defaultValue: "Everyone" },
        { field: "Gender", options: selectOptions, defaultValue: "only-me" },
        {
          field: "Birthdate",
          options: selectOptions,
          defaultValue: "everyone",
        },
        { field: "Location", options: selectOptions, defaultValue: "everyone" },
        { field: "Website", defaultValue: "Only Me" },
        { field: "Biography", defaultValue: "Everyone" },
      ],
    },
    {
      title: "Hobbies And Interests",
      rows: [
        {
          field: "My Hobbies",
          options: selectOptions,
          defaultValue: "only-me",
        },
        {
          field: "Music Brands",
          options: selectOptions,
          defaultValue: "only-me",
        },
        { field: "TV Shows", options: selectOptions, defaultValue: "only-me" },
        { field: "Movies", options: selectOptions, defaultValue: "only-me" },
        { field: "Games", options: selectOptions, defaultValue: "only-me" },
      ],
    },
    {
      title: "Social Networks",
      rows: [
        { field: "Facebook", options: selectOptions, defaultValue: "only-me" },
        { field: "Twitter", options: selectOptions, defaultValue: "only-me" },
        { field: "Dribbble", options: selectOptions, defaultValue: "only-me" },
        { field: "Behance", options: selectOptions, defaultValue: "only-me" },
        { field: "YouTube", options: selectOptions, defaultValue: "only-me" },
        { field: "Instagram", options: selectOptions, defaultValue: "only-me" },
      ],
    },
    {
      title: "Billing Address",
      rows: [
        "First Name",
        "Last Name",
        "Company",
        "Address 1",
        "Address 2",
        "City",
        "Postcode",
        "Country",
        "State/County",
        "Email Address",
        "Phone",
        "Fax",
      ].map((f) => ({ field: f, defaultValue: "Only Me" })),
    },
    {
      title: "Shipping Address",
      rows: [
        "First Name",
        "Last Name",
        "Company",
        "Address 1",
        "Address 2",
        "City",
        "Postcode",
        "Country",
        "State/County",
      ].map((f) => ({ field: f, defaultValue: "Only Me" })),
    },
  ];

  return (
    <div
      id="v-pills-visibility-tab"
      role="tabpanel"
      className={`w-full space-y-8 ${
        activeTab === "v-pills-visibility-tab" ? "block" : "hidden"
      }`}
    >
      <div className="flex justify-between items-center">
        <h4 className="text-xl font-semibold text-gray-800">
          Profile Visibility
        </h4>
      </div>
      <hr className="border-gray-200" />

      {sections.map((section, idx) => (
        <div
          key={idx}
          className="overflow-x-auto border border-gray-200 rounded-sm"
        >
          <table className="w-full text-sm border-collapse">
            <thead className="bg-[#1578ff] text-white">
              <tr>
                <th className="py-3 px-4 text-left  font-semibold">
                  {section.title}
                </th>
                <th className="py-3 px-4 text-left font-semibold">
                  Visibility
                </th>
              </tr>
            </thead>
            <tbody>
              {section.rows.map((row, rowIdx) => (
                <tr
                  key={rowIdx}
                  className={`border-t border-gray-200 hover:bg-gray-50 transition`}
                >
                  <td className="py-3 px-4 font-medium text-[#7e8b9a]">
                    {row.field}
                  </td>
                  <td className="py-3 px-4">
                    {row.options ? (
                      <select
                        value={visibility[row.field] || row.defaultValue || ""}
                        onChange={(e) =>
                          handleChange(row.field, e.target.value)
                        }
                        className="border border-gray-300 rounded-sm p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
                      >
                        {row.options.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <span className="text-[#7e8b9a]">{row.defaultValue}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default ProfileVisibility;
