import { useState } from 'react';
import { X, Image as Imageicon, FileText, Smile, AlignLeft, MessageSquare, MapPin } from 'lucide-react';
import user from "@/public/images/user/userImg.jpg";
import Image from "next/image";


export default function AddPostModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [content, setContent] = useState('');
    const [topic, setTopic] = useState('');

    const openModal = () => setIsOpen(true);
    const closeModal = () => {
        setIsOpen(false);
        setContent('');
        setTopic('');
    };

    const handlePost = () => {
        if (content.trim()) {
            console.log('Posting:', { content, topic });
            closeModal();
        }
    };

    return (
        <>
            {/* Trigger Button */}
            <div className="flex flex-wrap pb-4">
                <div className="w-full">
                    <div className="rounded-lg shadow bg-white border border-gray-200">
                        <div className="flex justify-between items-center p-4 border-b border-gray-100">
                            <div className="header-title">
                                <h5 className="text-xl font-semibold text-gray-800">
                                    Add a Post
                                </h5>
                            </div>
                            <div className="relative">
                                <button
                                    type="button"
                                    onClick={openModal}
                                    className="px-4 py-2 border border-gray-200 text-black rounded-md cursor-pointer hover:bg-gray-50 transition-colors"
                                >
                                    Post
                                </button>
                            </div>
                        </div>
                        <div
                            className="p-4 cursor-pointer hover:bg-gray-50 transition-colors"
                            onClick={openModal}
                        >
                            <input
                                type="text"
                                readOnly
                                className="w-full rounded p-2 border-0 bg-transparent cursor-pointer text-gray-400"
                                placeholder="What's new?"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-start justify-center  bg-opacity-50 p-4">
                    <div className="w-full max-w-2xl mt-8 bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-4 duration-200">
                        {/* Modal Header */}
                        <div className="flex justify-between items-center px-6 py-2 border-b border-gray-300">
                            <button
                                onClick={closeModal}
                                className="text-gray-800 hover:text-gray-900 font-medium"
                            >
                                Cancel
                            </button>
                            <h2 className="text-lg font-bold text-black">New Post</h2>
                            <div className="flex gap-2">
                                <button className="p-2 hover:bg-gray-100 rounded-full text-black transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M2.906 17.505L5.337 3.718a2 2 0 0 1 2.317-1.623L19.472 4.18a2 2 0 0 1 1.622 2.317l-2.431 13.787a2 2 0 0 1-2.317 1.623L4.528 19.822a2 2 0 0 1-1.622-2.317Z"></path><path strokeLinecap="round" d="m8.929 6.382l7.879 1.389m-8.574 2.55l7.879 1.39M7.54 14.26l4.924.869"></path></g></svg>
                                </button>
                                <button className="p-2 hover:bg-gray-100 text-black rounded-full transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none"><path fill="currentColor" d="M9 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></path><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></path></g></svg>
                                </button>
                            </div>
                        </div>

                        {/* Modal Content */}
                        <div className="p-6">
                            <div className="flex gap-3">
                                {/* User Avatar */}
                                <div className="flex-shrink-0">
                                    {/* <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                                        <span className="text-blue-600 font-semibold text-sm">Selfgny</span>
                                    </div> */}
                                    <div className="cursor-pointer">
                                        <Image
                                            src={user}
                                            width={45}
                                            height={45}
                                            alt="user"
                                            className="rounded-sm mt-1.5 cursor-pointer"
                                        />
                                    </div>
                                    <span className='w-px h-32 bg-gray-300 block'></span>
                                </div>

                                {/* Content Area */}
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-0">
                                        <span className="font-semibold text-lg text-gray-900">John Paul</span>
                                        <span className="text-gray-400">›</span>
                                        <input
                                            type="text"
                                            value={topic}
                                            onChange={(e) => setTopic(e.target.value)}
                                            placeholder="Add a topic"
                                            className="text-gray-400 bg-transparent border-none outline-none flex-1"
                                        />
                                    </div>

                                    {/* Text Input */}
                                    <textarea
                                        value={content}
                                        onChange={(e) => setContent(e.target.value)}
                                        placeholder="What's new?"
                                        rows={2}
                                        className="w-full  text-gray-700 placeholder-gray-400 bg-transparent border-none outline-none resize-none"
                                        autoFocus
                                    />

                                    {/* Action Icons */}
                                    <div className="flex gap-4 mt-4 mb-6">
                                        <button className="text-gray-400 hover:text-gray-600 transition-colors">
                                            <Imageicon className="w-5 h-5" />
                                        </button>
                                        <button className="text-gray-400 hover:text-gray-600 transition-colors">
                                            <FileText className="w-5 h-5" />
                                        </button>
                                        <button className="text-gray-400 hover:text-gray-600 transition-colors">
                                            <Smile className="w-5 h-5" />
                                        </button>
                                        <button className="text-gray-400 hover:text-gray-600 transition-colors">
                                            <AlignLeft className="w-5 h-5" />
                                        </button>
                                        <button className="text-gray-400 hover:text-gray-600 transition-colors">
                                            <MessageSquare className="w-5 h-5" />
                                        </button>
                                        <button className="text-gray-400 hover:text-gray-600 transition-colors">
                                            <MapPin className="w-5 h-5" />
                                        </button>
                                    </div>

                                    {/* Add to Thread */}
                                    <button className="flex items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors mb-6">
                                        <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-xs">
                                            <span className="text-gray-400 text-xs">S</span>
                                        </div>
                                        <span className="text-sm">Add to thread</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="flex justify-between items-center px-6 py-4 border-t border-gray-100">
                            <span className="text-sm text-gray-500">Anyone can reply and quote</span>
                            <button
                                onClick={handlePost}
                                disabled={!content.trim()}
                                className={`px-6 py-2 rounded-full font-medium transition-colors ${content.trim()
                                    ? 'bg-black text-white hover:bg-gray-800'
                                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                    }`}
                            >
                                Post
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}