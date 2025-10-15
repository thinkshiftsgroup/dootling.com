import React from 'react'
import Image from "next/image"

const ProjectInnerTabs = ({messages}:any) => {
  return (
      <div className="flex-1 overflow-y-scroll p-2 space-y-4">
            {messages.map((msg:any, idx:any) => (
              <div
                key={idx}
                className={`flex items-end gap-2 ${
                  msg.isMe ? "justify-end" : "justify-start"
                }`}
              >
                {!msg.isMe && (
                  <Image
                    src="/images/user/orgImg.png"
                    alt="Sender"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                )}

                <div
                  className={`max-w-[70%] p-3 rounded-2xl ${
                    msg.isMe
                      ? "bg-[#157BFF] text-white rounded-tr-none"
                      : "bg-gray-100 text-gray-800 rounded-tl-none"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                  <p
                    className={`text-[10px] mt-1 text-right ${
                      msg.isMe ? "text-blue-100" : "text-gray-400"
                    }`}
                  >
                    {msg.time}
                  </p>
                </div>

                {msg.isMe && (
                  <Image
                    src="/images/user/userImg.jpg"
                    alt="Me"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                )}
              </div>
            ))}
          </div>
  )
}

export default ProjectInnerTabs