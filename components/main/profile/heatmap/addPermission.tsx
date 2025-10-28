import { useState } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { useRoleStore } from "@/stores/userRoleStore";

export default function ConnectWorks() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPermissions, setSelectedPermissions] = useState(["activity"]);
  const [connectionMethod, setConnectionMethod] = useState("oauth");
  const [understood, setUnderstood] = useState(false);

  const togglePermission = (permission: string) => {
    setSelectedPermissions((prev) =>
      prev.includes(permission)
        ? prev.filter((p) => p !== permission)
        : [...prev, permission]
    );
  };
  const styles = `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes slideUp {
      from { 
        opacity: 0;
        transform: translateY(20px);
      }
      to { 
        opacity: 1;
        transform: translateY(0);
      }
    }
    .animate-fadeIn {
      animation: fadeIn 0.2s ease-out;
    }
    .animate-slideUp {
      animation: slideUp 0.3s ease-out;
    }
  `;

  
  const { isUser } = useRoleStore();

  return (
    <div className="">
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <div className="max-w-2xl">
        {/* Trigger Button */}
        {isUser && !isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="bg-[#157BFF] hover:bg-blue-600 text-white px-2 py-1 rounded-sm flex items-center gap-2 transition-colors text-[0.9rem]"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            Add Permission
          </button>
        )}

        {isOpen && (
          <>
            <div>
              <div className="fixed inset-0 bg-[#f5f6fa92] blur-lg flex items-center justify-center p-4 z-50 animate-fadeIn"></div>
              <div className="fixed inset-0 flex items-center justify-center p-4 z-50 animate-fadeIn">
                <div className="sm:!p-6 p-3 pt-2 overflow-y-scroll hide-scrollbar shadow-md max-w-3xl w-full max-h-[92vh] rounded-sm m-auto animate-slideUp bg-white">
                  <div className="flex justify-between items-start mb-2 pt-5 pb-2.5 ">
                    <div className="md:!flex block items-center gap-3 mb-2">
                      <div className="flex items-center gap-1 mb-2">
                        <Image
                          src="/images/dootling-icon1.svg"
                          width={25}
                          height={25}
                          alt="icon"
                        />
                        <h1 className="md:!text-2xl text-base sm:!text-xl whitespace-nowrap font-bold text-gray-900">
                          Connect Works
                        </h1>
                      </div>

                      <p className="text-[#157BFF] text-xs sm:!text-sm">
                        ...you can turns work itself into the network
                      </p>
                    </div>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="space-y-8">
                    {/* Apps selection */}
                    <div>
                      <h2 className="md:!text-lg text-base font-bold text-gray-900 mb-4">
                        Apps, Workspaces & Work Tools
                      </h2>
                      <select
                        name=""
                        className="w-full accent-[#157bff] sm:!px-4 px-2 sm:!py-3 py-2 sm:!text-base text-sm border border-[#f1f1f1] rounded-lg text-gray-700 focus:border-blue-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#157BFF]"
                        id=""
                      >
                        <option value="a">
                          Choose the app or tool you'd like to connect
                        </option>
                        <option value="a">A</option>
                        <option value="b">B</option>
                      </select>
                      <p className="sm:!text-sm text-xs text-gray-500 mt-3">
                        We'll only track activity metadata – never your private
                        content.
                      </p>
                    </div>

                    {/* Permission Scope */}
                    <div>
                      <h2 className="sm:!text-lg text-base font-bold text-gray-900 mb-4">
                        Permission Scope
                      </h2>
                      <div className="flex gap-3 flex-wrap">
                        <button
                          onClick={() => togglePermission("activity")}
                          className={`px-4 py-2 sm:!text-base text-sm rounded-lg font-semibold transition-colors flex items-center gap-2 ${
                            selectedPermissions.includes("activity")
                              ? "bg-[#157BFF] text-white"
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={selectedPermissions.includes("activity")}
                            onChange={() => togglePermission("activity")}
                            className="w-4 h-4"
                            readOnly
                          />
                          Activity metadata
                        </button>
                        <button
                          onClick={() => togglePermission("project")}
                          className={`px-4 sm:!text-base text-sm py-2 rounded-lg font-semibold transition-colors flex items-center gap-2 ${
                            selectedPermissions.includes("project")
                              ? "bg-[#157BFF] text-white"
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={selectedPermissions.includes("project")}
                            onChange={() => togglePermission("project")}
                            className="w-4 h-4"
                            readOnly
                          />
                          Project/file changes
                        </button>
                      </div>
                    </div>

                    {/* Connection Method */}
                    <div>
                      <h2 className="sm:!text-lg text-base font-bold text-gray-900 mb-4">
                        Connection Method
                      </h2>
                      <div className="space-y-3 text-sm sm:!text-base flex items-center gap-6">
                        <label className="flex items-center gap-1.5 cursor-pointer m-0">
                          <input
                            type="radio"
                            name="connection"
                            value="oauth"
                            checked={connectionMethod === "oauth"}
                            onChange={(e) =>
                              setConnectionMethod(e.target.value)
                            }
                            className="w-4 h-4"
                          />
                          <span className="text-gray-900 font-medium">
                            OAuth
                          </span>
                        </label>
                        <label className="flex items-center gap-1.5 cursor-pointer">
                          <input
                            type="radio"
                            name="connection"
                            value="api"
                            checked={connectionMethod === "api"}
                            onChange={(e) =>
                              setConnectionMethod(e.target.value)
                            }
                            className="w-4 h-4"
                          />
                          <span className="text-gray-900 font-medium">
                            API Key
                          </span>
                        </label>
                      </div>
                    </div>

                    {/* Checkbox */}
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={understood}
                        onChange={(e) => setUnderstood(e.target.checked)}
                        className="w-4 h-4 mt-1 border border-blue-500 ring-blue-400"
                      />
                      <span className="text-gray-700 sm:!text-base text-sm">
                        I understand Dootling only tracks metadata, not my
                        private data or content.
                      </span>
                    </label>

                    {/* Buttons */}
                    <div className="flex whitespace-nowrap flex-wrap justify-end gap-3 pt-6">
                      <button
                        onClick={() => setIsOpen(false)}
                        className="px-6 py-2 text-gray-600 font-medium hover:text-gray-900 transition-colors cursor "
                      >
                        Cancel
                      </button>
                      <button className="px-6 py-2 bg-[#157BFF] hover:bg-blue-600 text-white font-semibold rounded-sm transition-colors flex items-center gap-2">
                        Connect Work{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={23}
                          height={23}
                          viewBox="0 0 24 24"
                        >
                          <g
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            strokeWidth={0.5}
                            stroke="currentColor"
                          >
                            <path d="m5.251 9.663l-1.587-1.41a1 1 0 1 0-1.328 1.494l1.405 1.25l.068-.062c.503-.446.982-.873 1.442-1.272m2.295 4.642q.544.436 1.04.777c1.117.763 2.185 1.228 3.414 1.228s2.297-.465 3.413-1.228c1.081-.739 2.306-1.828 3.843-3.194l.052-.046l2.356-2.095a1 1 0 0 0-1.328-1.494l-2.357 2.094c-1.6 1.423-2.731 2.426-3.694 3.084c-.94.642-1.613.88-2.285.88s-1.345-.238-2.285-.88q-.304-.21-.636-.465c-.446.378-.949.82-1.533 1.339"></path>
                            <path d="M16.455 9.695q-.545-.436-1.042-.777C14.297 8.155 13.23 7.689 12 7.689s-2.297.466-3.413 1.229c-1.081.738-2.306 1.828-3.843 3.193l-.052.047l-2.356 2.094a1 1 0 1 0 1.328 1.495l2.357-2.094c1.6-1.423 2.731-2.426 3.694-3.084c.94-.642 1.613-.88 2.285-.88s1.345.238 2.285.88q.304.21.636.464c.446-.377.949-.82 1.534-1.338m3.804 3.308l-.068.061q-.753.672-1.442 1.273l1.587 1.41a1 1 0 0 0 1.328-1.495z"></path>
                          </g>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
