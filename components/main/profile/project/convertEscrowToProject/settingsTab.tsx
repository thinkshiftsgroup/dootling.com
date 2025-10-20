import React from "react";

const SettingsTab = () => {
  return (
    <div>
      <div className="flex-1 overflow-y-auto">
        <div className="my-2">
          <div className="flex items-center gap-2 justify-between p-2 ">
            <div className="flex flex-col gap-1">
              <p className="text-black font-medium">Close Escrow Account</p>
              <p className="text-gray-400 text-sm">
                Permanently close the escrow accounts and stop all payments
              </p>
            </div>
            <input
              type="checkbox"
              className="accent-[#157bff] w-4 h-4 rounded-sm"
            />
          </div>
          <div className="flex items-center gap-2 justify-between p-2 ">
            <div className="flex flex-col gap-1">
              <p className="text-black font-medium">Email Notifications</p>
              <p className="text-gray-400 text-sm">
               Receive email updates about project activities and fund releases
              </p>
            </div>
            <input
              type="checkbox"
              className="accent-[#157bff] w-4 h-4 rounded-sm"
            />
          </div>
          <div className="flex items-center gap-2 justify-between p-2 ">
            <div className="flex flex-col gap-1">
              <p className="text-black font-medium">Delete Project</p>
              <p className="text-gray-400 text-sm">
                Completel removes all data associated with this project
              </p>
            </div>
            <input
              type="checkbox"
              className="accent-[#157bff] w-4 h-4 rounded-sm"
            />
          </div>
        </div>

        <div className="flex sm:!flex-row flex-col my-2 items-center justify-end">
          <button className="text-white flex items-center justify-center gap-2 rounded-sm font-semibold text-lg py-1 px-4 cursor-pointer bg-[#1571E8] hover:bg-blue-600 text-[0.9rem]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={30}
              height={30}
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M7.504 12.35q.465-.93 1.013-1.792q.549-.862 1.21-1.685L8.192 8.56q-.154-.039-.298.01t-.26.163L5.208 11.16q-.058.057-.039.134t.096.116zm11.454-7.471q-2.308.165-4.065 1.015t-3.305 2.398Q10.482 9.4 9.657 10.6t-1.36 2.385l2.831 2.825q1.185-.535 2.394-1.36t2.318-1.933q1.548-1.548 2.398-3.292t1.015-4.052q0-.061-.009-.113t-.064-.108t-.108-.064t-.113-.01m-5.346 5.636q-.44-.441-.44-1.057t.44-1.057t1.06-.44t1.059.44t.44 1.057t-.44 1.056t-1.06.44t-1.06-.44m-1.85 6.108l.941 2.245q.039.076.115.086t.135-.048l2.427-2.408q.115-.115.163-.26q.049-.144.01-.297l-.313-1.535q-.823.662-1.685 1.207t-1.792 1.01M20.21 4.733q-.012 2.5-.948 4.612t-2.793 3.968q-.096.096-.183.173t-.182.173l.423 2.072q.08.404-.04.783q-.121.378-.414.67l-2.785 2.785q-.298.298-.727.22q-.428-.077-.59-.481l-1.198-2.825l-3.544-3.564l-2.825-1.198q-.404-.161-.475-.59t.227-.727L6.94 8.019q.292-.292.674-.403q.381-.112.785-.031l2.071.423q.096-.096.164-.173q.067-.077.163-.173q1.856-1.856 3.968-2.802t4.613-.958q.161.006.313.064t.283.19t.18.273t.054.304M5.117 16.167q.587-.586 1.426-.58t1.426.594t.584 1.426q-.003.84-.59 1.426q-.834.834-1.962 1.05q-1.128.215-2.278.325q.11-1.17.335-2.288t1.06-1.953m.713.727q-.445.445-.617 1.045t-.253 1.244q.645-.081 1.245-.26T7.25 18.3q.3-.3.306-.715q.005-.416-.295-.716t-.715-.287q-.415.012-.715.312"
              ></path>
            </svg>{" "}
            Declaration
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsTab;
