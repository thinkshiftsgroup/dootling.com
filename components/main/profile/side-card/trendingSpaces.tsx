"use client";
import Image from "next/image";


export default function TrendingSpaces() {
    return (
        <div className="rounded-lg shadow bg-white mb-4">
            <div className="flex justify-between items-center p-4 py-3 border-b border-[#f1f1f1]">
                <div className="header-title">
                    <h4 className="text-lg font-bold">
                        Trending Spaces
                    </h4>
                </div>
                <span className="text-[12px]">
                    See All
                </span>
            </div>

            <div className="p-3 pt-0">
                <ul className="m-0 p-0 list-none">
                    {[
                        {
                            name: "Annette Black",
                            status: "Private",
                            readyToHire: "Hiring",
                            image: "/images/group-image.png",
                        },
                        {
                            name: "Christopher Plessis",
                            status: "Public",
                            readyToHire: "",
                            image: "/images/project.png",
                        },
                        {
                            name: "Ellyse Perry",
                            status: "Private",
                            readyToHire: "Hiring",
                            image: "/images/user/userImg.jpg",
                        },
                    ].map((user, index) => (
                        <li key={index} className="mb-3 last:mb-0">
                            <div className="flex items-center gap-2">
                                <Image
                                    src={user.image}
                                    alt={user.name}
                                    width={35}
                                    height={35}
                                    className="avatar-60 avatar-borderd object-cover rounded-sm w-full h-auto inline-block"
                                />
                                <div className="flex-1">
                                    <div className="flex items-center justify-between gap-2">
                                        <div>
                                            <h5 className="text-[12px]">{user.name}</h5>
                                            <small className="capitalize text-gray-600  text-[10px] flex items-center gap-2">
                                               <div className="w-1 h-1 flex-none rounded-full bg-black" />  {user.status} | {user.readyToHire}
                                            </small>
                                            
                                            {/* <small className="capitalize text-gray-600 text-[11px] flex items-center gap-2">
                                                <span className="text-black">{user.strikes}</span>  Strikes
                                            </small> */}
                                        </div>
                                        <div className="flex items-center flex-shrink-0 gap-2">
                                            {/* <button className="px-2 py-1 cursor-pointer bg-blue-100 text-blue-600 rounded hover:bg-blue-200 leading-none">
                                                <i className="ph ph-plus text-sm"></i>
                                            </button> */}
                                            <button className="px-2 py-1 cursor-pointer bg-red-100 text-red-600 rounded hover:bg-red-200 leading-none">
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
    );
}