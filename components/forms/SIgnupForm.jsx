import React from "react";
import Upload from "../ui/Upload";
import FormInput from "../ui/FormInput";
import SelectInput from "../ui/SelectInput";
import CustomButton from "../ui/CustomButton";
import Icon from "../ui/Icon";

const SIgnupForm = ({
  array,
  link,
  signup,
  accountType,
  setAccountType,
  cta,
  bottomText,
}) => {
  const accountTypeArray = [
    "Individual",
    "Business",
    "Student",
    "Business Center",
  ];
  return (
    <form className="p-10 rounded-[18.94px] flex flex-col gap-[28px]   [background:linear-gradient(to_right,_#00000030_0%,_#062d0831_10%,_#062D0866_70%,_#00000030_100%)] border-[0.95px] border-[#0C520A80]">
      {/* acount type navigation */}
      {signup && (
        <div className="flex items-center justify-cemter gap-[16px] rounded-[5px] bg-black/15 w-[351px] h-[32px] px-[8px] py-[4px]">
          {accountTypeArray.map((item, index) => (
            <p
              key={index}
              onClick={() => setAccountType(item)}
              className={
                accountType === item
                  ? "rounded-[3px] py-[5px] h-[24px] text-center flex items-center  px-[9px] bg-[#013500] flex items-center cursor-pointer"
                  : "text-white/50 cursor-pointer"
              }
            >
              {item}
            </p>
          ))}
        </div>
      )}

      {/* form inputs */}

      {array?.slice(0, 3).map((item, index) => (
        <FormInput
          key={index}
          label={item.label}
          placeholder={item.placeholder}
          type={item.type}
        />
      ))}

      {/* flexed components */}
      <div className="flex gap-4">
        {array?.slice(3, 5).map((item, index) => (
          <div className="flex-1" key={index}>
            <SelectInput
              label={item.label}
              placeholder={item.placeholder}
              type={item.type}
            />
          </div>
        ))}
      </div>

      {accountType !== "Student" &&
        array
          ?.slice(5, 6)
          .map((item, index) => (
            <FormInput
              key={index}
              two
              phone="+234"
              label={item.label}
              placeholder={item.placeholder}
              type={item.type}
            />
          ))}

      {accountType === "Student" && (
        <>
          <div className="flex gap-5">
            {array?.slice(5, 7).map((item, index) => (
              <div className="flex-1" key={index}>
                <SelectInput
                  label={item.label}
                  placeholder={item.placeholder}
                  type={item.type}
                />
              </div>
            ))}
          </div>

          {array?.slice(7, 8).map((item, index) => (
            <FormInput
              key={index}
              two
              phone="+234"
              label={item.label}
              placeholder={item.placeholder}
              type={item.type}
            />
          ))}
        </>
      )}

      {accountType === "Business Center" && (
        <>
          {array?.slice(6, 8).map((item, index) => (
            <FormInput
              key={index}
              label={item.label}
              placeholder={item.placeholder}
              type={item.type}
            />
          ))}
        </>
      )}

      {/* upload input */}
      {(accountType === "Student" || accountType === "Business Center") && (
        <div>
          <Upload accountType={accountType} />
        </div>
      )}

      {accountType !== "Student" && accountType !== "Business Center"
        ? array
            ?.slice(6, 11)
            .map((item, index) => (
              <FormInput
                key={index}
                label={item.label}
                placeholder={item.placeholder}
                type={item.type}
                signup
              />
            ))
        : array
            ?.slice(9, 12)
            .map((item, index) => (
              <FormInput
                key={index}
                label={item.label}
                placeholder={item.placeholder}
                type={item.type}
              />
            ))}

      <CustomButton text={cta} />

      {signup && (
        <div className="flex gap-[8px] -mt-3">
          <Icon src={"/signUp/check.svg"} w={20} h={20} />
          <p className="text-white/50 font-inter text-[12px]">
            By creating an account, I agree to the{" "}
            <span className="underline text-white/70 my-3">
              Terms & Conditions{" "}
            </span>
            and{" "}
            <span className="underline text-white/70 my-3">Privacy Policy</span>
          </p>
        </div>
      )}

      <div className="text-center">
        <span>{bottomText}</span>
        <span className="text-[#2FC22B]"> {link}</span>
      </div>
    </form>
  );
};

export default SIgnupForm;
