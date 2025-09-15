import React from "react";
import Image from "next/image";
import Icon from "./Icon";
import clsx from "clsx";

type FormInputProps = {
  bankCard?: boolean;
  label?: string;
  placeholder?: string;
  type?: string;
  phone?: string;
  variant?: "default" | "signup" | "checkout"; // <-- clear variants
  withCountryCode?: boolean; // replaces "two"
};

const FormInput: React.FC<FormInputProps> = ({
  label,
  placeholder,
  type = "text",
  phone,
  variant = "default",
  withCountryCode = false,
  bankCard = false,
}) => {
  //  Label styles by variant
  const labelClasses = clsx(
    "font-inter",
    variant === "checkout"
      ? "text-[10px] font-[400] text-white/60"
      : "font-[500]"
  );

  //  Input wrapper base styles
  const inputWrapperClasses = clsx(
    "border border-[#2FC22B1A] flex items-center justify-between px-[12px]",
    withCountryCode && "flex-1",
    {
      "h-[45px] bg-[#062D0866] rounded-[8px]": variant === "default",
      "h-[30px] bg-[#031706] rounded-[5px] border-[1.22px] border-[#2FC22B26]":
        variant === "checkout",
    }
  );

  return (
    <div
      className={`flex flex-col ${
        variant === "checkout" ? "gap-[6px]" : "gap-[12px] "
      } `}
    >
      {label && <label className={labelClasses}>{label}</label>}

      <div className={clsx(withCountryCode && "flex gap-[8px]")}>
        {/* Country code block */}
        {withCountryCode && (
          <div className="border border-[#2FC22B1A] flex gap-3 w-[20%] h-[45px] items-center rounded-[8px] bg-[#062D0866] px-[12px]">
            <Image width={20} height={20} alt="img" src="/signUp/flag.svg" />
            <input
              className="outline-none w-full "
              type="text"
              placeholder={phone}
            />
          </div>
        )}

        {/* Input field */}
        <div className={inputWrapperClasses}>
          <input
            className="outline-none w-full"
            type={type}
            placeholder={type === "password" ? "**********" : placeholder}
          />
          {type === "password" && (
            <Icon src="/signUp/closeeye.svg" w={20} h={20} />
          )}

          {bankCard === true && (
            <div className="flex gap-[5.28px]">
              <Icon src="/images/visa.svg" w={34.85} h={21.12} />
              <Icon src="/images/verve.svg" w={34.85} h={21.12} />
              <Icon src="/images/mastercard.svg" w={34.85} h={21.12} />
            </div>
          )}
        </div>
      </div>

      {/* Extra password info only in signup */}
      {type === "password" && variant === "signup" && (
        <p className="text-white/70 -mt-2 text-[12px] font-[300]">
          Minimum length is 8 characters
        </p>
      )}
    </div>
  );
};

export default FormInput;
