// import { useState, useRef } from "react";
// import { AnimatePresence, motion } from "framer-motion";

// export default function ReactionHover() {
//   const [showReactions, setShowReactions] = useState(false);
//   const hideTimeout = useRef<NodeJS.Timeout | null>(null);

//   const handleMouseEnter = () => {
//     if (hideTimeout.current) {
//       clearTimeout(hideTimeout.current);
//       hideTimeout.current = null;
//     }
//     setShowReactions(true);
//   };

//   const handleMouseLeave = () => {
//     hideTimeout.current = setTimeout(() => {
//       setShowReactions(false);
//   };

//   return (
//     <div
//       className="relative"
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <button className="p-2 bg-gray-200 rounded">Like</button>

//       <AnimatePresence>
//         {showReactions && (
//           <motion.div
//             className="absolute flex items-center justify-between gap-2 -top-14 bg-white rounded-full p-2 shadow-md"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 20 }}
//           >
//             {reactions.map((reaction, index) => (
//               <motion.div
//                 key={index}
//                 className={`${reaction.bg} flex justify-center items-center text-white p-2 rounded-full cursor-pointer`}
//                 initial={{ y: 20, scale: 0.5 }}
//                 animate={{ y: 0, scale: 1 }}
//                 transition={{
//                   delay: index * 0.1,
//                   type: "spring",
//                   stiffness: 500,
//                 }}
//                 whileHover={{ scale: 1.5, y: -10, zIndex: 50 }}
//               >
//                 {reaction.icon}
//               </motion.div>
//             ))}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }
