"use client";
import Image from "next/image";


export default function Suggestions() {
    return (
        <div className="fixed-suggestion mb-4 mt-4">
            <div className="rounded-lg shadow bg-white">
                <div className="flex justify-between p-4 border-b border-[#f1f1f1]">
                    <div className="header-title">
                        <h4 className="text-xl font-semibold">Suggestions for you</h4>
                    </div>
                    <small className="font-medium capitalize cursor-pointer">See all</small>
                </div>

                <div className="p-4 pt-0">
                    <ul className="m-0 p-0 list-none">
                        {[
                            {
                                name: "Annette Black",
                                info: "Followed by dribbble + 2 more",
                                image: "/images/user/13.jpg",
                            },
                            {
                                name: "Christopher Plessis",
                                info: "Followed by dribbble + 2 more",
                                image: "/images/user/17.jpg",
                            },
                            {
                                name: "Ellyse Perry",
                                info: "Followed by dribbble + 2 more",
                                image: "/images/user/16.jpg",
                            },
                        ].map((user, index) => (
                            <li key={index} className="mb-3 last:mb-0">
                                <div className="flex items-center gap-3">
                                    <Image
                                        src={user.image}
                                        alt={user.name}
                                        width={60}
                                        height={60}
                                        className="avatar-60 avatar-borderd object-cover avatar-rounded w-full h-auto inline-block"
                                    />
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between gap-2">
                                            <div>
                                                <h5>{user.name}</h5>
                                                <small className="capitalize">{user.info}</small>
                                            </div>
                                            <div className="flex items-center flex-shrink-0 gap-2">
                                                <button className="px-2 py-1 bg-blue-100 text-blue-600 rounded hover:bg-blue-200 leading-none">
                                                    <i className="ph ph-plus text-sm"></i>
                                                </button>
                                                <button className="px-2 py-1 bg-red-100 text-red-600 rounded hover:bg-red-200 leading-none">
                                                    <i className="ph ph-x text-sm"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}