import React, { useState } from 'react';

const AddHeatmapModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedType, setSelectedType] = useState('manual');
    const [title, setTitle] = useState('UX Revamp Milestone');
    const [date, setDate] = useState('Oct 8, 2025');
    const [description, setDescription] = useState('Finalized design overhaul for the mobile app');
    const [attachmentUrl, setAttachmentUrl] = useState('http://designexample.com/revamp');
    const [uploadedFiles, setUploadedFiles] = useState([
        { name: 'document.pdf', type: 'pdf' },
        { name: 'image.jpg', type: 'image' }
    ]);

    const handleSubmit = () => {
        console.log({ selectedType, title, date, description, attachmentUrl, uploadedFiles });
        setIsOpen(false);
    };

    const handleFileRemove = (index: number) => {
        setUploadedFiles(uploadedFiles.filter((_, i) => i !== index));
    };

    return (
        <span>

            <button onClick={() => setIsOpen(true)} className="bg-blue-500 hover:bg-blue-600 text-white px-2 mt-5 flex items-center gap-2 py-1 rounded-sm text-[0.9rem]">
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
                    <div className="fixed inset-0 bg-[#f5f6fa92] blur-lg flex items-center justify-center p-4 z-50"></div>
                    <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
                        {/* Modal Content */}
                        <div className="bg-gray-50 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto z-10 p-8 py-2">
                            <div className="p-8">
                                {/* Header */}
                                <div className="flex justify-between items-start mb-8">
                                    <h2 className="text-3xl font-medium text-gray-900 mb-3">Add Heatmap</h2>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="text-gray-400 hover:text-gray-600 transition-colors"
                                    >
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>

                                <div className="p-4 px-8 shadow-md rounded-sm m-auto">

                                    {/* Type Selection */}
                                    <div className="flex gap-4 mb-8">
                                        <button
                                            onClick={() => setSelectedType('manual')}
                                            className={`px-8 py-3 rounded-lg font-medium transition-colors ${selectedType === 'manual'
                                                ? 'bg-orange-400 text-white'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                                }`}
                                        >
                                            Manual Heat
                                        </button>
                                        <button
                                            onClick={() => setSelectedType('financial')}
                                            className={`px-8 py-3 rounded-lg font-medium transition-colors flex items-center gap-2 ${selectedType === 'financial'
                                                ? 'bg-blue-500 text-white'
                                                : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-gray-300'
                                                }`}
                                        >
                                            <div className={`w-5 h-5 rounded-full border-2 ${selectedType === 'financial' ? 'border-white bg-blue-500' : 'border-gray-300'
                                                }`}></div>
                                            Financial Proof
                                        </button>
                                        <button
                                            onClick={() => setSelectedType('work')}
                                            className={`px-8 py-3 rounded-lg font-medium transition-colors flex items-center gap-2 ${selectedType === 'work'
                                                ? 'bg-blue-500 text-white'
                                                : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-gray-300'
                                                }`}
                                        >
                                            <div className={`w-5 h-5 rounded-full border-2 ${selectedType === 'work' ? 'border-white bg-blue-500' : 'border-gray-300'
                                                }`}></div>
                                            Work File
                                        </button>
                                    </div>

                                    {/* Title and Date */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                        <div>
                                            <label className="block text-gray-900 font-semibold mb-2 text-lg">
                                                Title
                                            </label>
                                            <input
                                                type="text"
                                                value={title}
                                                onChange={(e) => setTitle(e.target.value)}
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                                                placeholder="Enter title"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-900 font-semibold mb-2 text-lg">
                                                Date
                                            </label>
                                            <input
                                                type="text"
                                                value={date}
                                                onChange={(e) => setDate(e.target.value)}
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                                                placeholder="Oct 8, 2025"
                                            />
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <div className="mb-6">
                                        <label className="block text-gray-900 font-semibold mb-2 text-lg">
                                            Description
                                        </label>
                                        <textarea
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                            rows={3}
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors resize-none"
                                            placeholder="Enter description"
                                        />
                                    </div>

                                    {/* Attachment */}
                                    <div className="mb-6">
                                        <label className="block text-gray-900 font-semibold mb-2 text-lg">
                                            Attachment (optional)
                                        </label>
                                        <div className="flex gap-2 mb-4">
                                            <input
                                                type="text"
                                                value={attachmentUrl}
                                                onChange={(e) => setAttachmentUrl(e.target.value)}
                                                className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                                                placeholder="http://example.com"
                                            />
                                            <button
                                                onClick={() => setAttachmentUrl('')}
                                                className="px-4 text-gray-400 hover:text-red-500 transition-colors"
                                            >
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </button>
                                        </div>

                                        {/* File Upload Area */}
                                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors cursor-pointer">
                                            <button
                                                className="text-gray-600 font-medium flex items-center justify-center gap-2 mx-auto"
                                            >
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                                </svg>
                                                Add or Drag & Drop File
                                            </button>
                                        </div>

                                        {/* Uploaded Files */}
                                        {uploadedFiles.length > 0 && (
                                            <div className="flex gap-4 mt-4">
                                                {uploadedFiles.map((file, index) => (
                                                    <div key={index} className="relative group">
                                                        <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center">
                                                            {file.type === 'pdf' ? (
                                                                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                                                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                                                                </svg>
                                                            ) : (
                                                                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                                                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                                                                </svg>
                                                            )}
                                                        </div>
                                                        <button
                                                            onClick={() => handleFileRemove(index)}
                                                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                                                        >
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        onClick={handleSubmit}
                                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
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
    );
};

export default AddHeatmapModal;