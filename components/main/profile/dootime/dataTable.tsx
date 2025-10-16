export default function DataTable() {
  const sampleData = [
    {
      no: 1,
      customer: {
        name: "Felix Hohno",
        email: "felixhorn36748@gmail.com",
      },
      timeZone: {
        date: "23rd December 2025",
        zone: "18:00 Europe/London",
      },
      date: "12.09.2019 12:53 PM",
      transactionId: "1638hvdjshskdhtU",
      status: "Executed",
    },
    {
      no: 2,
      customer: {
        name: "Jane Smith",
        email: "janesmith@example.com",
      },
      timeZone: {
        date: "5th January 2026",
        zone: "14:30 Europe/Paris",
      },
      date: "01.05.2020 3:15 PM",
      transactionId: "TXN2024ABC987",
      status: "Rejected",
    },
    {
      no: 3,
      customer: {
        name: "Michael Johnson",
        email: "michaeljohnson@example.com",
      },
      timeZone: {
        date: "15th March 2026",
        zone: "09:00 America/New_York",
      },
      date: "03.11.2020 10:20 AM",
      transactionId: "TXN0036KJD89",
      status: "Executed",
    },
    {
      no: 4,
      customer: {
        name: "Sarah Williams",
        email: "sarahwilliams@example.com",
      },
      timeZone: {
        date: "27th April 2026",
        zone: "22:15 Africa/Lagos",
      },
      date: "04.25.2021 08:47 PM",
      transactionId: "TXN0048PLM23",
      status: "Rejected",
    },
  ];

  return (
    <div className="w-full overflow-x-auto bg-white rounded-md shadow-sm">
      <table className="w-full min-w-max">
        <thead>
          <tr className="bg-[#E7F1FF]">
            <th className="px-4 py-4 text-left text-sm font-medium text-gray-900 whitespace-nowrap">
              No
            </th>
            <th className="px-4 py-4 text-left text-sm font-medium text-gray-900 whitespace-nowrap">
              Customer
            </th>
            <th className="px-4 py-4 text-left text-sm font-medium text-gray-900 whitespace-nowrap">
              Time/Zone
            </th>
            <th className="px-4 py-4 text-left text-sm font-medium text-gray-900 whitespace-nowrap">
              Date
            </th>
            <th className="px-4 py-4 text-left text-sm font-medium text-gray-900 whitespace-nowrap">
              Transaction ID
            </th>
            <th className="px-4 py-4 text-left text-sm font-medium text-gray-900 whitespace-nowrap">
              Status
            </th>
          </tr>
        </thead>

        <tbody>
          {sampleData.map((row, index) => (
            <tr
              key={row.no}
              className={`${index % 2 === 0 ? "bg-white" : "bg-[#E7F1FF]/50"}`}
            >
              <td className="px-4 py-4 text-sm text-gray-700">{row.no}</td>

              <td className="px-4 py-4 text-sm text-gray-700">
                <div className="flex flex-col">
                  <span className="font-medium text-gray-900">
                    {row.customer.name}
                  </span>
                  <span className="text-xs text-gray-500">
                    {row.customer.email}
                  </span>
                </div>
              </td>

              <td className="px-4 py-4 text-sm text-gray-700">
                <div className="flex border border-[#299D91] rounded-md px-4 py-2 flex-col">
                  <span>{row.timeZone.date}</span>
                  <span className="text-xs text-gray-500">
                    {row.timeZone.zone}
                  </span>
                </div>
              </td>

              <td className="px-4 py-4 text-sm text-gray-700">{row.date}</td>
              <td className="px-4 py-4 text-sm text-gray-700">
                {row.transactionId}
              </td>

              <td className="px-4 py-4 text-sm">
                <span
                  className={`px-4 py-2 rounded-sm text-xs font-medium flex items-center gap-2 ${
                    row.status === "Executed"
                      ? "bg-[#157bff] text-white"
                      : "bg-[#EA0234] text-white"
                  }`}
                >
                  {row.status}
                  {row.status === "Executed" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 120 121"
                      fill="none"
                      className="inline-block"
                    >
                      <path
                        d="M110.209 3.08857C114.085 0.808229 119.102 4.00071 118.19 8.56141L101.771 107.072C101.315 110.721 97.4388 112.773 94.2463 111.405L65.97 99.3192L51.3758 117.106C48.1833 120.982 41.7983 118.93 41.7983 113.457V94.9865L96.5266 28.1724C97.6668 26.8042 95.8425 25.2079 94.7024 26.3481L29.2564 84.0409L4.85674 73.7793C0.752115 72.1831 0.296046 66.2542 4.40067 63.9738L110.209 3.08857Z"
                        fill="white"
                      />
                    </svg>
                  )}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
