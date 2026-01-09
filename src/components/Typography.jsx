import React from "react";


 
export default function Typography({ variant, children, className, color, fontKaoly }) {
  
  const variants = {
    h1: "text-[40px] font-bold font-mont leading-snug",  
    h2: "text-[40px] font-bold font-mont leading-snug",
    h3: "text-[36px] font-bold font-mont leading-snug",
    h4: "text-[16px] font-bold font-mont",
    b1: "text-[20px] font-semibold font-lato",
    b2: "text-[24px] font-extrabold font-lato",
  };


  const kaolyClass = "font-kaoly text-[35px] font-bold leading-[100%] tracking-[0%]";

  const appliedClass = fontKaoly ? kaolyClass : variants[variant] || "font-mont";

  return (
    <div className={`${appliedClass} ${color || "text-gray-900"} ${className || ""}`}>
      {children}
    </div>
  );
}
