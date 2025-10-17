"use client";
import Image from "next/image";
import { FaHeart, FaCommentDots, FaTrophy, FaUserPlus } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import Navbar from "@/components/main/landing-page/navbar/navbar";

const notifications = [
  {
    id: 1,
    name: "Paige Turner",
    action: "Posted In UI/UX Community",
    time: "30 minutes ago",
    avatar: "/avatars/avatar1.jpg",
    icon: <FaTrophy className="text-blue-500" />,
    iconBg: "bg-blue-100",
  },
  {
    id: 2,
    name: "Anne FibbiYon",
    action: "Liked Your Post",
    time: "1 hour ago",
    avatar: "/avatars/avatar2.jpg",
    icon: <FaHeart className="text-red-400" />,
    iconBg: "bg-red-100",
  },
  {
    id: 3,
    name: "Barry Cuda",
    action: "Added a Story",
    time: "40 days ago",
    avatar: "/avatars/avatar3.jpg",
    icon: <FaTrophy className="text-blue-500" />,
    iconBg: "bg-blue-100",
  },
  {
    id: 4,
    name: "Cliff Hanger",
    action: "Posted A Comment On Your Status Update",
    time: "42 days ago",
    avatar: "/avatars/avatar4.jpg",
    icon: <FaCommentDots className="text-green-500" />,
    iconBg: "bg-green-100",
  },
  {
    id: 5,
    name: "Rick O'Shea",
    action: "Posted A Comment On Your Photo",
    time: "50 days ago",
    avatar: "/avatars/avatar5.jpg",
    icon: <FaCommentDots className="text-green-500" />,
    iconBg: "bg-green-100",
  },
  {
    id: 6,
    name: "Brock Lee",
    action: "Sent A Friend Request",
    time: "1 hour ago",
    avatar: "/avatars/avatar6.jpg",
    icon: <FaUserPlus className="text-yellow-600" />,
    iconBg: "bg-yellow-100",
  },
];

export default function NotificationsPage() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-[1rem]">
        <h1 className="text-lg mx-2 md:!mx-0 font-semibold mb-5">Notification</h1>

        <div className="space-y-5 mx-2 md:!mx-0 mb-5">
          {notifications.map((notif) => (
            <div
              key={notif.id}
              className="flex justify-between items-center bg-white shadow-sm  px-4 py-4 rounded-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src="/images/user/userImg.jpg"
                    alt={notif.name}
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-800 font-medium">
                    {notif.name}{" "}
                    <span className="font-medium ">{notif.action}</span>
                  </p>
                  <p className="text-xs my-2 text-gray-400">{notif.time}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center ${notif.iconBg}`}
                >
                  {notif.icon}
                </div>
                <BsThreeDots className="text-gray-400 cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
