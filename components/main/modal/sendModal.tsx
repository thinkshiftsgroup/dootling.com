import React, { useRef, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { FaLink } from "react-icons/fa6";

interface User {
  id: number;
  name: string;
  role: string;
  avatar: string;
}

const SendModal = ({
  users,
  selectedUsers,
  toggleUser,
  setOpenModal,
  setSelectedUsers,
}: any) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setOpenModal(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setOpenModal]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div
        ref={modalRef}
        className="bg-white rounded-lg md:!w-1/2 max-h-[70vh] p-4 flex flex-col"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-black text-lg">Send John's Post</h2>
          <button onClick={() => setOpenModal(false)}>
            <IoClose size={24} />
          </button>
        </div>

        <input
          type="text"
          placeholder="Type a name"
          className="py-1 px-2 border-black rounded border mb-2"
        />

        <div className="overflow-y-auto flex-1">
          {users.map((user: User) => (
            <div
              key={user.id}
              className="flex items-center justify-between p-2 rounded hover:bg-gray-100"
            >
              <div className="flex items-center gap-2">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex flex-col border-b py-1">
                  <p className="font-medium text-black text-sm">{user.name}</p>
                  <p className="text-xs pt-0.5 text-gray-500">{user.role}</p>
                </div>
              </div>
              <input
                type="checkbox"
                checked={selectedUsers.includes(user.id)}
                onChange={() => toggleUser(user.id)}
                className="accent-[#157bff] w-4 h-4 rounded"
              />
            </div>
          ))}
        </div>

        <hr className="my-2" />

        <p
          className="inline-flex items-center gap-1 cursor-pointer rounded text-[#157bff] font-semibold px-2 py-1 hover:bg-[#157bff]/40 w-max"
          onClick={() => navigator.clipboard.writeText("https://post.link")}
        >
          <FaLink size={16} /> Copy link to post
        </p>
      </div>
    </div>
  );
};

export default SendModal;
