export default function DataTable() {
  const sampleData = [
    {
      no: 1,
      businessName: "Tech Solutions Inc",
      customerName: "John Doe",
      amountPaid: "$1,250.00",
      paymentDate: "2024-10-15",
      purpose: "Web Development",
      transactionId: "TXN001234",
      contactAddress: "123 Main St, New York",
      phoneNumber: "+1 234-567-8900",
      emailAddress: "john@example.com",
      status: "Completed"
    },
    {
      no: 2,
      businessName: "Design Studio",
      customerName: "Jane Smith",
      amountPaid: "$850.00",
      paymentDate: "2024-10-14",
      purpose: "Logo Design",
      transactionId: "TXN001235",
      contactAddress: "456 Oak Ave, Los Angeles",
      phoneNumber: "+1 234-567-8901",
      emailAddress: "jane@example.com",
      status: "Pending"
    },
    {
      no: 3,
      businessName: "Marketing Pro",
      customerName: "Mike Johnson",
      amountPaid: "$2,100.00",
      paymentDate: "2024-10-13",
      purpose: "SEO Services",
      transactionId: "TXN001236",
      contactAddress: "789 Pine Rd, Chicago",
      phoneNumber: "+1 234-567-8902",
      emailAddress: "mike@example.com",
      status: "Completed"
    }
  ];

  return (
    <div className="w-full overflow-x-auto bg-white">
      <table className="w-full min-w-max">
        <thead>
          <tr className="border-b border-gray-200 bg-[#E7F1FF]">
            <th className="px-4 py-4 text-left text-sm font-normal text-gray-900 whitespace-nowrap">No</th>
            <th className="px-4 py-4 text-left text-sm font-normal text-gray-900 whitespace-nowrap">Business Name</th>
            <th className="px-4 py-4 text-left text-sm font-normal text-gray-900 whitespace-nowrap">Customer Name</th>
            <th className="px-4 py-4 text-left text-sm font-normal text-gray-900 whitespace-nowrap">Amount Paid</th>
            <th className="px-4 py-4 text-left text-sm font-normal text-gray-900 whitespace-nowrap">Payment Date</th>
            <th className="px-4 py-4 text-left text-sm font-normal text-gray-900 whitespace-nowrap">Purpose</th>
            <th className="px-4 py-4 text-left text-sm font-normal text-gray-900 whitespace-nowrap">Transaction ID</th>
            <th className="px-4 py-4 text-left text-sm font-normal text-gray-900 whitespace-nowrap">Contact Address</th>
            <th className="px-4 py-4 text-left text-sm font-normal text-gray-900 whitespace-nowrap">Phone Number</th>
            <th className="px-4 py-4 text-left text-sm font-normal text-gray-900 whitespace-nowrap">Email Address</th>
            <th className="px-4 py-4 text-left text-sm font-normal text-gray-900 whitespace-nowrap">Status</th>
            <th className="px-4 py-4 text-left text-sm font-normal text-gray-900 whitespace-nowrap">Action</th>
          </tr>
        </thead>
        <tbody>
          {sampleData.map((row, index) => (
            <tr key={row.no} className={`border-b border-gray-200 ${index % 2 === 0 ? 'bg-white' : 'bg-[#E7F1FF]'}`}>
              <td className="px-4 py-4 text-sm text-gray-700">{row.no}</td>
              <td className="px-4 py-4 text-sm text-gray-700">{row.businessName}</td>
              <td className="px-4 py-4 text-sm text-gray-700">{row.customerName}</td>
              <td className="px-4 py-4 text-sm text-gray-700">{row.amountPaid}</td>
              <td className="px-4 py-4 text-sm text-gray-700">{row.paymentDate}</td>
              <td className="px-4 py-4 text-sm text-gray-700">{row.purpose}</td>
              <td className="px-4 py-4 text-sm text-gray-700">{row.transactionId}</td>
              <td className="px-4 py-4 text-sm text-gray-700">{row.contactAddress}</td>
              <td className="px-4 py-4 text-sm text-gray-700">{row.phoneNumber}</td>
              <td className="px-4 py-4 text-sm text-gray-700">{row.emailAddress}</td>
              <td className="px-4 py-4 text-sm">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  row.status === 'Completed' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {row.status}
                </span>
              </td>
              <td className="px-4 py-4 text-sm">
                <button className="text-blue-600 hover:text-blue-800 font-medium">
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}