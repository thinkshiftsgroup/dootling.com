import { Loader2 } from "lucide-react";
import React from "react";

const MiniLoader = () => {
  return (
    <div className="w-full h-full p-5 flex items-center justify-center">
      <Loader2 className="animate-spin text-[#157bff]" size={20} />
    </div>
  );
};

export default MiniLoader;
