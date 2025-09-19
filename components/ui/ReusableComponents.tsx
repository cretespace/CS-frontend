import Image from "next/image";
import React from "react";

export const Logo = () => {
  return <Image src="/logo.svg" alt="crete logo" width={86} height={29} />;
};

export const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }) => (
  <div
    className={`${className} bg-[#141414] rounded-[15px] border-[0.5px]  border-white/20  `}
    {...props}
  />
));

export const ImageCmp = ({ w, h, src, style }: any) => {
  return (
    <Image
      width={w || 130}
      height={h || 130}
      src={src || "/signUp/checkbox.svg"}
      alt="img"
      className={style}
    />
  );
};
