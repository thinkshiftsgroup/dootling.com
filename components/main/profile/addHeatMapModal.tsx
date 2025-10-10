import React, { useState } from "react";

const AddHeatmapModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("");
  const [title, setTitle] = useState("UX Revamp Milestone");
  const [date, setDate] = useState("Oct 8, 2025");
  const [description, setDescription] = useState(
    "Finalized design overhaul for the mobile app"
  );
  const [attachmentUrl, setAttachmentUrl] = useState(
    "http://designexample.com/revamp"
  );
  const [uploadedFiles, setUploadedFiles] = useState([
    { name: "document.pdf", type: "pdf" },
    { name: "image.jpg", type: "image" },
  ]);

  const handleSubmit = () => {
    console.log({
      selectedType,
      title,
      date,
      description,
      attachmentUrl,
      uploadedFiles,
    });
    setIsOpen(false);
  };

  const handleFileRemove = (index: number) => {
    setUploadedFiles(uploadedFiles.filter((_, i) => i !== index));
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

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <span>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#157BFF] hover:bg-blue-600 text-white px-2 mt-3 flex items-center gap-2 py-1 rounded-sm text-[0.9rem]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M18.385 9.083V8.07q.717.15 1.45.328q.732.178 1.524.378q.324.08.5.351q.177.27.122.593l-1.466 7.962q-.106.59-.553.953T18.925 19H5.152q-.59 0-1.025-.373t-.54-.944L2.025 9.72q-.056-.323.118-.605q.174-.283.498-.364q.734-.2 1.428-.356t1.373-.287V9.12l-1.188.251q-.6.126-1.22.278L4.46 17.5q.038.212.22.356t.395.144h13.85q.212 0 .394-.144t.222-.356l1.425-7.85q-.658-.171-1.306-.307t-1.275-.26M16 9.065q0-.427-.125-.829t-.394-.728q-.39-.506-.63-1.098q-.24-.59-.24-1.226q0-.401.105-.782q.105-.38.309-.74l.152-.27q.09-.177.291-.233q.201-.055.378.035t.233.289t-.035.375l-.177.294q-.13.244-.202.52t-.073.551q0 .427.154.82q.154.391.423.718q.41.468.62 1.05q.211.581.211 1.197q0 .42-.095.811q-.096.39-.26.77l-.159.326q-.09.177-.288.233t-.375-.034t-.233-.289t.035-.375l.152-.313q.112-.264.167-.53T16 9.066m-3.892 0q0-.428-.125-.83t-.395-.728q-.39-.506-.63-1.098q-.239-.59-.239-1.226q0-.401.105-.782t.309-.74l.151-.27q.091-.176.292-.232t.378.034t.232.289t-.034.375l-.177.294q-.13.244-.203.51q-.072.267-.072.542q0 .427.154.829t.423.728q.41.468.62 1.05q.21.581.21 1.197q0 .42-.094.811q-.096.39-.261.77l-.158.326q-.09.177-.288.233t-.375-.034t-.233-.289t.035-.375l.152-.313q.111-.264.167-.53t.056-.541m-3.887-.02q0-.427-.128-.819q-.127-.392-.397-.72q-.41-.486-.64-1.077q-.229-.591-.229-1.226q0-.402.102-.792t.312-.75l.157-.27q.09-.176.292-.232q.2-.056.377.034t.233.289t-.034.375l-.177.294q-.131.239-.206.508t-.075.544q0 .427.154.829t.423.728q.41.468.62 1.05q.21.581.21 1.197q0 .42-.095.811q-.095.39-.26.77l-.152.326q-.09.177-.292.233q-.2.056-.377-.034q-.177-.091-.233-.289t.035-.375l.157-.313q.112-.264.168-.54q.055-.276.055-.55"
            />
          </svg>
          Add Progress{" "}
        </button>

        {/* Modal Overlay */}
        {isOpen && (
          <div>
            <div className="fixed inset-0 bg-[#f5f6fa92] blur-lg flex items-center justify-center p-4 z-50 animate-fadeIn"></div>
            <div className="fixed inset-0 flex items-center justify-center p-4 z-50 animate-fadeIn">
              {/* Modal Content */}
              <div className="bg-gray-50 rounded-2xl shadow-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto z-10 p-8 py-1 animate-slideUp">
                <div className="p-6 py-3">
                  {/* Header */}
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-3xl font-medium text-gray-900 mb-3">
                      Add Heatmap
                    </h2>
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

                  <div className="p-3 px-6 shadow-md rounded-sm m-auto bg-white">
                    {/* Type Selection */}
                    <div className="flex gap-4 mb-8">
                      <button
                        className={`px-2 py-1 rounded-sm font-medium transition-colors bg-[#babec1] text-white`}
                      >
                        Manual Heat
                      </button>
                      <button
                        onClick={() => setSelectedType("financial")}
                        className={`px-2 py-1 rounded-sm font-medium transition-colors flex items-center gap-2 ${
                          selectedType === "financial"
                            ? " text-gray-700"
                            : "text-gray-700 hover:border-gray-300"
                        }`}
                      >
                        <div
                          className={`w-5 h-5 rounded-full border-2 ${
                            selectedType === "financial"
                              ? "border-gray-200 bg-[#157BFF]"
                              : "border-[#157BFF]"
                          }`}
                        ></div>
                        Financial Proof
                      </button>
                      <button
                        onClick={() => setSelectedType("work")}
                        className={`px-2 py-1 font-medium transition-colors flex items-center gap-2 ${
                          selectedType === "work"
                            ? " text-gray-700"
                            : " text-gray-700 hover:border-[#157BFF]"
                        }`}
                      >
                        <div
                          className={`w-5 h-5 rounded-full border-2 ${
                            selectedType === "work"
                              ? "border-gray-200 bg-[#157BFF]"
                              : "border-[#157BFF]"
                          }`}
                        ></div>
                        Work File
                      </button>
                    </div>

                    {/* Title and Date */}
                    {/* Title and Date */}
                    <div className="grid grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-[#738b9a] mb-2">
                          Title
                        </label>
                        <input
                          type="text"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          className="w-full border border-[#f1f1f1] rounded-md text-sm p-2 focus:outline-none focus:border-blue-500 transition-colors"
                          placeholder="Enter title"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#738b9a] mb-2">
                          Date
                        </label>
                        <input
                          type="text"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          className="w-full border border-[#f1f1f1] rounded-md text-sm p-2 focus:outline-none focus:border-blue-500 transition-colors"
                          placeholder="Oct 8, 2025"
                        />
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-[#738b9a] mb-2">
                        Description
                      </label>
                      <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows={2}
                        className="w-full border border-[#f1f1f1] rounded-md text-sm p-2 focus:outline-none focus:border-[#157BFF] transition-colors resize-none"
                        placeholder="Enter description"
                      />
                    </div>

                    {/* Attachment */}
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-[#738b9a] mb-2">
                        Project or Collab Link (optional)
                      </label>
                      <div className="flex gap-2 mb-4 border border-[#f1f1f1] rounded-sm focus-within:outline-none focus-within:border-[#157BFF]">
                        <input
                          type="text"
                          value={attachmentUrl}
                          onChange={(e) => setAttachmentUrl(e.target.value)}
                          className="flex-1 px-3 py-2 border-r border-[#f1f1f1] focus:outline-none focus:border-[#157BFF] transition-colors"
                          placeholder="http://example.com"
                        />
                        <button
                          onClick={() => setAttachmentUrl("")}
                          className="px-3 text-gray-400 hover:text-[#738b9a] transition-colors"
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
                        </button>
                      </div>
                      <div className="grid grid-cols-2 gap-6 mb-6">
                        {/* File Upload Area */}
                        <div className="border border-[#f1f1f1] rounded-md text-sm p-2 my-auto text-center hover:border-[#157BFF] transition-colors cursor-pointer">
                          <button className="text-gray-600 font-medium flex items-center justify-center gap-2 mx-auto">
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
                            Add or Drag & Drop File
                          </button>
                        </div>

                        {/* Uploaded Files */}
                        {uploadedFiles.length > 0 && (
                          <div className="flex gap-4 ">
                            {uploadedFiles.map((file, index) => (
                              <div key={index} className="relative group">
                                <div className=" bg-red-100 rounded-lg flex items-center justify-center">
                                  {file.type === "pdf" ? (
                                    <svg
                                      className="w-8 h-8 text-red-600"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                    >
                                      <g fill="none">
                                        <path
                                          stroke="currentColor"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={1.5}
                                          d="M7.792 21.25h8.416a3.5 3.5 0 0 0 3.5-3.5v-5.53a3.5 3.5 0 0 0-1.024-2.475l-5.969-5.97A3.5 3.5 0 0 0 10.24 2.75H7.792a3.5 3.5 0 0 0-3.5 3.5v11.5a3.5 3.5 0 0 0 3.5 3.5"
                                        ></path>
                                        <path
                                          fill="currentColor"
                                          fillRule="evenodd"
                                          d="M10.437 7.141c-.239.078-.392.236-.436.411c-.09.352 0 .73.253 1.203c.126.234.28.471.45.725l.092.137l.145.215l.019-.068l.086-.306q.148-.503.23-1.02c.089-.642-.011-1.018-.309-1.26c-.08-.065-.278-.119-.53-.037m.055 4.152l-.27-.362l-.032-.048c-.115-.19-.243-.38-.382-.585l-.1-.149a10 10 0 0 1-.512-.828c-.31-.578-.558-1.286-.358-2.067c.17-.664.698-1.081 1.227-1.254c.517-.168 1.174-.147 1.66.247c.792.644.848 1.573.739 2.357a9 9 0 0 1-.261 1.174l-.096.34q-.112.382-.208.769l-.067.194l1.392 1.864c.65-.078 1.364-.125 2.03-.077c.769.054 1.595.242 2.158.776a1.56 1.56 0 0 1 .395 1.441c-.117.48-.454.88-.919 1.123c-.985.515-1.902.105-2.583-.416c-.533-.407-1.045-.975-1.476-1.453l-.104-.114c-.37.057-.72.121-1.004.175c-.305.057-.684.128-1.096.22l-.151.443q-.125.288-.238.58l-.122.303a8 8 0 0 1-.427.91c-.33.578-.857 1.192-1.741 1.241c-1.184.066-1.986-.985-1.756-2.108l.006-.027c.2-.791.894-1.31 1.565-1.653c.597-.306 1.294-.532 1.941-.701zm.87 1.165l-.287.843l.421-.08l.004-.001l.38-.07zm2.84 1.604c.274.29.547.56.831.777c.55.42.94.493 1.299.305c.2-.105.284-.241.309-.342a.35.35 0 0 0-.08-.309c-.257-.228-.722-.38-1.392-.428a8 8 0 0 0-.967-.003m-5.005.947c-.318.109-.62.23-.89.368c-.587.3-.87.604-.944.867c-.078.415.192.673.516.655c.27-.015.506-.184.766-.639q.204-.372.358-.767l.107-.266z"
                                          clipRule="evenodd"
                                        ></path>
                                      </g>
                                    </svg>
                                  ) : (
                                    <svg
                                      className="w-8 h-8 text-red-600"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                    >
                                      <g
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                      >
                                        <rect
                                          width={18}
                                          height={18}
                                          x={3}
                                          y={3}
                                          rx={2}
                                          ry={2}
                                        ></rect>
                                        <circle cx={9} cy={9} r={2}></circle>
                                        <path d="m21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                                      </g>
                                    </svg>
                                  )}
                                </div>
                                <button
                                  onClick={() => handleFileRemove(index)}
                                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                  <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                    />
                                  </svg>
                                </button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="mb-6">
                      <label className="block text-sm font-medium text-[#738b9a] mb-2">
                        Peer Confirmation (Optional)
                      </label>
                      <select className="w-full border border-[#f1f1f1] rounded-md text-sm p-2 focus:outline-none focus:border-blue-500 transition-colors bg-white text-gray-700">
                        <option>Multi-Select From Collaborator</option>
                      </select>
                    </div>

                    <button
                      onClick={handleSubmit}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-sm transition-colors"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </span>
    </>
  );
};

export default AddHeatmapModal;
