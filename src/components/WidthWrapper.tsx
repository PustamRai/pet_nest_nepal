import type React from "react";
export default function WidthWrapper({
   children,
   className,
}: {
   children: React.ReactNode;
   className?: string;
}) {
   return (
      <div
         className={`max-w-7xl mx-auto px-2 py-5 sm:py-7 sm:px-6 lg:px-2 ${
            className || ""
         }`}
      >
         {children}
      </div>
   );
}
