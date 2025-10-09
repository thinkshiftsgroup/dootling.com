import React from "react";

const FundAllocation = () => {
  const percentage = 50;
  return (
    <div className="rounded bg-white p-4 shadow-md my-5">
      <h1 className="text-lg font-bold text-black">Fund Allocation</h1>

      <div className="flex items-center my-4 gap-4">
        <select
          name=""
          className=" border w-1/2 text-sm text-black border-gray-300/70 rounded-sm p-1.5"
          id=""
        >
          <option value="">Developing Investor Vaults</option>
        </select>

        <button className="bg-[#157BFF] hover:bg-blue-600 text-white px-2 flex items-center gap-2 py-1 rounded-sm text-[0.9rem]">
          <svg
            width="24"
            height="24"
            viewBox="0 0 129 128"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_3062_3356)">
              <path
                opacity="0.2"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M67.4447 127.999C101.434 127.999 128.983 100.449 128.983 66.4603C128.983 32.4714 101.434 4.92188 67.4447 4.92188C33.4558 4.92188 5.90625 32.4714 5.90625 66.4603C5.90625 100.449 33.4558 127.999 67.4447 127.999ZM67.4447 118.153C95.9936 118.153 119.137 95.0093 119.137 66.4603C119.137 37.9114 95.9936 14.768 67.4447 14.768C38.8958 14.768 15.7524 37.9114 15.7524 66.4603C15.7524 95.0093 38.8958 118.153 67.4447 118.153Z"
                fill="white"
              />
              <path
                opacity="0.2"
                d="M79.7506 41.8438H99.4429C100.096 41.8438 100.722 42.1031 101.183 42.5647C101.645 43.0263 101.904 43.6524 101.904 44.3053V63.9976C101.904 64.6504 101.645 65.2765 101.183 65.7382C100.722 66.1998 100.096 66.4591 99.4429 66.4591H79.7506C79.0978 66.4591 78.4717 66.1998 78.01 65.7382C77.5484 65.2765 77.2891 64.6504 77.2891 63.9976V44.3053C77.2891 43.6524 77.5484 43.0263 78.01 42.5647C78.4717 42.1031 79.0978 41.8438 79.7506 41.8438ZM50.2121 68.9207H69.9044C71.2101 68.9207 72.4623 69.4394 73.3856 70.3626C74.3088 71.2859 74.8275 72.5381 74.8275 73.8438V93.5361C74.8275 94.8417 74.3088 96.0939 73.3856 97.0172C72.4623 97.9405 71.2101 98.4591 69.9044 98.4591H50.2121C48.9065 98.4591 47.6543 97.9405 46.731 97.0172C45.8077 96.0939 45.2891 94.8417 45.2891 93.5361V73.8438C45.2891 72.5381 45.8077 71.2859 46.731 70.3626C47.6543 69.4394 48.9065 68.9207 50.2121 68.9207Z"
                fill="white"
              />
              <path
                d="M42.1137 90.3607C41.6515 90.8229 41.0246 91.0825 40.3709 91.0825C39.7172 91.0825 39.0903 90.8229 38.6281 90.3607C38.1659 89.8985 37.9063 89.2716 37.9063 88.6179C37.9062 87.9642 38.1659 87.3373 38.6281 86.8751L58.3204 67.1828C58.7826 66.7206 59.4095 66.4609 60.0632 66.4609C60.7169 66.4609 61.3438 66.7206 61.806 67.1828C62.2682 67.645 62.5279 68.2719 62.5279 68.9256C62.5279 69.5792 62.2682 70.2061 61.806 70.6684L42.1137 90.3607Z"
                fill="white"
              />
              <path
                d="M62.5246 88.6148C62.5246 89.2676 62.2653 89.8937 61.8037 90.3554C61.342 90.817 60.7159 91.0763 60.0631 91.0763C59.4103 91.0763 58.7842 90.817 58.3225 90.3554C57.8609 89.8937 57.6016 89.2676 57.6016 88.6148V68.9225C57.6016 68.2696 57.8609 67.6435 58.3225 67.1819C58.7842 66.7203 59.4103 66.4609 60.0631 66.4609C60.7159 66.4609 61.342 66.7203 61.8037 67.1819C62.2653 67.6435 62.5246 68.2696 62.5246 68.9225V88.6148Z"
                fill="white"
              />
              <path
                d="M40.3678 71.3865C39.7149 71.3865 39.0888 71.1272 38.6272 70.6656C38.1656 70.2039 37.9062 69.5778 37.9062 68.925C37.9062 68.2721 38.1656 67.646 38.6272 67.1844C39.0888 66.7228 39.7149 66.4634 40.3678 66.4634H60.0601C60.7129 66.4634 61.339 66.7228 61.8007 67.1844C62.2623 67.646 62.5216 68.2721 62.5216 68.925C62.5216 69.5778 62.2623 70.2039 61.8007 70.6656C61.339 71.1272 60.7129 71.3865 60.0601 71.3865H40.3678ZM71.649 60.8216C71.4202 61.0505 71.1485 61.232 70.8494 61.3559C70.5504 61.4797 70.2299 61.5435 69.9062 61.5435C69.5826 61.5435 69.2621 61.4797 68.9631 61.3559C68.664 61.232 68.3923 61.0505 68.1635 60.8216C67.9346 60.5927 67.7531 60.321 67.6292 60.022C67.5054 59.723 67.4416 59.4025 67.4416 59.0788C67.4416 58.7552 67.5054 58.4347 67.6292 58.1357C67.7531 57.8366 67.9346 57.5649 68.1635 57.3361L87.8558 37.6438C88.318 37.1815 88.9449 36.9219 89.5986 36.9219C90.2522 36.9219 90.8791 37.1815 91.3413 37.6438C91.8035 38.106 92.0632 38.7329 92.0632 39.3865C92.0632 40.0402 91.8035 40.6671 91.3413 41.1293L71.649 60.8216Z"
                fill="white"
              />
              <path
                d="M69.9069 61.5403C69.254 61.5403 68.6279 61.2809 68.1663 60.8193C67.7047 60.3577 67.4453 59.7316 67.4453 59.0787C67.4453 58.4259 67.7047 57.7998 68.1663 57.3382C68.6279 56.8765 69.254 56.6172 69.9069 56.6172H89.5992C90.252 56.6172 90.8781 56.8765 91.3397 57.3382C91.8014 57.7998 92.0607 58.4259 92.0607 59.0787C92.0607 59.7316 91.8014 60.3577 91.3397 60.8193C90.8781 61.2809 90.252 61.5403 89.5992 61.5403H69.9069Z"
                fill="white"
              />
              <path
                d="M72.3684 59.0757C72.3684 59.7286 72.1091 60.3547 71.6474 60.8163C71.1858 61.2779 70.5597 61.5373 69.9069 61.5373C69.254 61.5373 68.6279 61.2779 68.1663 60.8163C67.7047 60.3547 67.4453 59.7286 67.4453 59.0757V39.3834C67.4453 38.7306 67.7047 38.1045 68.1663 37.6428C68.6279 37.1812 69.254 36.9219 69.9069 36.9219C70.5597 36.9219 71.1858 37.1812 71.6474 37.6428C72.1091 38.1045 72.3684 38.7306 72.3684 39.3834V59.0757Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M64.9838 120.615C96.2502 120.615 121.599 95.2659 121.599 63.9994C121.599 32.7329 96.2502 7.38401 64.9838 7.38401C33.7173 7.38401 8.36839 32.7329 8.36839 63.9994C8.36839 95.2659 33.7173 120.615 64.9838 120.615ZM64.9838 125.538C98.9727 125.538 126.522 97.9883 126.522 63.9994C126.522 30.0105 98.9727 2.46094 64.9838 2.46094C30.9949 2.46094 3.44531 30.0105 3.44531 63.9994C3.44531 97.9883 30.9949 125.538 64.9838 125.538Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_3062_3356">
                <rect
                  width="128"
                  height="128"
                  fill="white"
                  transform="translate(0.984375)"
                />
              </clipPath>
            </defs>
          </svg>
          Create Smart Contract
        </button>
      </div>

      <div className="mr-10 flex flex-col gap-1 w-full max-w-2xl">
        {[
          {
            name: "Amelia Shaw",
            color: "#0b50ab",
            percent: 50,
            amount: "$1,250",
          },
          { name: "Ronald Nunez", color: "gray", percent: 30, amount: "$550" },
          {
            name: "Carolyn Ortiz",
            color: "#9ca3af",
            percent: 20,
            amount: "$200",
          },
        ].map((person, i) => (
          <div key={i} className="flex items-center gap-4 w-full">
            <div className="w-30">
              <p className="font-semibold whitespace-nowrap text-lg text-black">
                {person.name}
              </p>
            </div>

            <div className="flex-1 h-[12px] bg-gray-100 rounded relative overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full rounded transition-all duration-300"
                style={{
                  width: `${person.percent}%`,
                  backgroundColor: person.color,
                }}
              ></div>
            </div>

            <div className="flex items-center gap-2 w-28 justify-end">
              <p className="font-bold text-lg text-black">{person.percent}%</p>
              <p className="font-bold text-lg text-[#157BFF]">
                {person.amount}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 max-w-xl">
        {/* <h1 className="font-bold text-black">Fund Allocation</h1> */}
        {[
          {
            name: "Amelia Shaw",
            email: "ameliashaw@example.com",
            percent: "50%",
          },
          {
            name: "Ronald Nunez",
            email: "ronaldnunez@example.com",
            percent: "30%",
          },
          {
            name: "Carolyn Ortiz",
            email: "carolynortiz@example.com",
            percent: "20%",
          },
        ].map((person, index) => (
          <div
            key={index}
            className="py-2.5 flex items-center justify-between text-gray-800 text-sm border-t border-gray-300/50"
          >
            <p>{person.name}</p>
            <p>{person.email}</p>
            <p>{person.percent}</p>
          </div>
        ))}
      </div>

      <div className="my-5">
        <h1 className="font-bold text-black mb-4">Audit Trials</h1>
        <div className="max-w-xl">
          {[
            {
              name: "Amelia Shaw",
              email: "ameliashaw@example.com",
              percent: "50%",
            },
            {
              name: "Ronald Nunez",
              email: "ronaldnunez@example.com",
              percent: "30%",
            },
            {
              name: "Carolyn Ortiz",
              email: "carolynortiz@example.com",
              percent: "20%",
            },
          ].map((person, index) => (
            <div
              key={index}
              className="py-2.5  flex items-center justify-between text-gray-800 text-sm border-t border-gray-300/50"
            >
              <p>{person.name}</p>
              <p>{person.email}</p>
              <p>{person.percent}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FundAllocation;
