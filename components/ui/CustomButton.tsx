import { useRouter } from "next/navigation";
import React from "react";

interface CustomButtonProps {
  text: string;
  submitFn?: () => void;
  route?: string;
  isRouting: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  submitFn,
  route,
  isRouting,
}) => {
  const router = useRouter();

  const handleOnClick = (e) => {
    e.preventDefault();

    if (isRouting) {
      router.push(route);
    } else {
      submitFn();
    }
  };

  return (
    <button
      onClick={handleOnClick}
      className="h-[45px] bg-[#2FC22B] flex items-center justify-center py-[15px] px-[10px] rounded-[10px]"
    >
      <p className="font-[500] text-[16px] text-helvetica">{text}</p>
    </button>
  );
};

export default CustomButton;
