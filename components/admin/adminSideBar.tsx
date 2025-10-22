"use client";
import { useState, useRef, ReactNode } from "react";

interface MenuItem {
  label: string;
  id: string;
}

interface SidebarSection {
  title: string;
  icon: ReactNode;
  sectionKey: string;
  items: MenuItem[];
}

interface AdminSidebarProps {
  sections: SidebarSection[];
  onTabChange?: (tabId: string) => void;
  activeTab?: string;
}

export const AdminSidebar = ({
  sections,
  onTabChange,
  activeTab = "",
}: AdminSidebarProps) => {
  const [open, setOpen] = useState<string | null>(sections[0]?.sectionKey || null);
  const [active, setActive] = useState<string>(activeTab);

  const toggleAccordion = (section: string) => {
    setOpen(open === section ? null : section);
  };

  const handleTabClick = (id: string, sectionKey: string) => {
    setOpen(sectionKey);
    setActive(id);
    onTabChange?.(id);
  };

  return (
    <div className="w-full md:w-[350px] bg-white rounded-sm">
      <div className="p-5">
        <div className="flex flex-col space-y-4">
          {sections.map((section, idx) => (
            <div key={idx}>
              <button
                onClick={() => toggleAccordion(section.sectionKey)}
                className="w-full flex items-center justify-between px-4 py-3 bg-[#1578ff] transition-all rounded-sm"
              >
                <span className="flex items-center gap-2 font-semibold text-white">
                  {section.icon}
                  {section.title}
                </span>
              </button>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  open === section.sectionKey
                    ? "max-h-[400px] p-4"
                    : "max-h-0 p-0"
                }`}
              >
                <div className="flex flex-col gap-3">
                  {section.items.map((item, itemIdx) => (
                    <button
                      key={itemIdx}
                      onClick={() =>
                        handleTabClick(item.id, section.sectionKey)
                      }
                      className={`text-left font-medium text-sm py-2 px-2 rounded-sm hover:bg-[#1578ff]/10 transition ${
                        active === item.id
                          ? "bg-[#1578ff]/10 text-[#1578ff]"
                          : "text-[#0a66c2]"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export interface TabContentProps {
  activeTab: string;
  tabId: string;
  children: ReactNode;
}

export const TabContent = ({ activeTab, tabId, children }: TabContentProps) => {
  return (
    <div
      className={`w-full bg-white rounded-sm transition-all ${
        activeTab === tabId ? "block" : "hidden"
      }`}
    >
      {children}
    </div>
  );
};
