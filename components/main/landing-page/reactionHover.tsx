import { motion, AnimatePresence } from "framer-motion";
import { FaHandsClapping, FaThumbsUp } from "react-icons/fa6";
import { HiOutlineLightBulb } from "react-icons/hi";
import { CgSmileMouthOpen } from "react-icons/cg";
import { IoHeartCircle } from "react-icons/io5";
import { PiHandHeartFill } from "react-icons/pi";

const reactions = [
  { icon: <FaThumbsUp className="w-5 h-5" />, bg: "bg-blue-400" },
  { icon: <FaHandsClapping className="w-5 h-5" />, bg: "bg-green-400" },
  { icon: <PiHandHeartFill className="w-5 h-5" />, bg: "bg-purple-400" },
  { icon: <IoHeartCircle className="w-5 h-5" />, bg: "bg-red-400" },
  { icon: <HiOutlineLightBulb className="w-5 h-5" />, bg: "bg-yellow-400" },
  { icon: <CgSmileMouthOpen className="w-5 h-5" />, bg: "bg-green-400" },
];

export default function ReactionPopup({
  show,
  onHoverStart,
  onHoverEnd,
}: {
  show: boolean;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
}) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="absolute z-[999] flex items-center justify-between gap-2 -top-14 bg-white rounded-full p-1.5 shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onMouseEnter={onHoverStart}
          onMouseLeave={onHoverEnd}
        >
          {reactions.map((reaction, index) => (
            <motion.div
              key={index}
              className={`${reaction.bg} flex justify-center items-center text-white p-1.5 rounded-full cursor-pointer`}
              initial={{ y: 20, scale: 0.5 }}
              animate={{ y: 0, scale: 1 }}
              transition={{
                delay: index * 0.1,
                type: "spring",
                stiffness: 500,
              }}
              whileHover={{ scale: 1.5, y: -10, zIndex: 50 }}
            >
              {reaction.icon}
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
