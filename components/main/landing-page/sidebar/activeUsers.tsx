"use client";
import Image from "next/image";


export default function ActiveUsers() {
    return (
        <div className="rounded-lg shadow bg-white">
            <div className="flex justify-between p-4 border-b border-[#f1f1f1]">
                <div className="header-title">
                    <h4 className="text-xl font-semibold">Active Users</h4>
                </div>
            </div>

            <div className="p-4 pt-0">
                <ul className="m-0 p-0 list-none">
                    {[
                        { name: "Arina Event", status: "Active", image: "/images/user/01.jpg", online: true },
                        { name: "Darlene Robertson", status: "Active", image: "/images/user/02.jpg", online: true },
                        { name: "Jerome Bell", status: "7 hours ago", image: "/images/user/03.jpg", online: false },
                        { name: "Arlene McCoy", status: "4 days ago", image: "/images/user/05.jpg", online: false },
                    ].map((user, index) => (
                        <li key={index} className="flex items-center gap-3 mb-3 last:mb-0">
                            <Image
                                src={user.image}
                                alt={user.name}
                                width={60}
                                height={60}
                                className="w-15 h-15 object-cover rounded-full avatar-borderd"
                            />
                            <div>
                                <h5 className="inline-block">{user.name}</h5>
                                <span
                                    className={
                                        user.online
                                            ? "profile-status-online"
                                            : "profile-status-offline"
                                    }
                                ></span>
                                <small className="capitalize block">{user.status}</small>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}