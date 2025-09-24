import React from "react";
import Icon from "../ui/Icon";
import FormInput from "../ui/FormInput";
import CustomButton from "../ui/CustomButton";

type FormInputProps = {};

const CheckoutForm = ({}: FormInputProps) => {
  return (
    <section className="p-10 w-[481px] bg-[linear-gradient(to_bottom,#000000_10%,#0A4512D9_85%,#0A4512D9_100%)] rounded-[18.94px] flex flex-col gap-[28px] border-[0.95px] border-[#0C520A80]">
      <div className="flex flex-col gap-[18px]">
        {/* payment method text */}
        <div className="flex flex-col items-center">
          <p className="font-[500] text-[20px] text-[#A2FF9F]">
            Payment Method
          </p>
          <p className="text-[12px] text-white/60">
            Select a payment option to continue
          </p>
        </div>

        {/* payment option card*/}
        <div className="flex gap-[20px]">
          {/* card */}
          <div className="bg-[#031506]  w-[105px] h-[57px] rounded-[8.52px] py-[10.65px] px-[12.78px] border-[#2FC22B99] border-[1.06px]">
            <Icon src="/icons/card.svg" w={13.73} h={10.74} />
            <p className="text-[12.78px] text-[#2FC22B] mt-1">Card</p>
          </div>

          {/* bank transfer */}
          <div className="bg-[#031506] w-[105px] h-[57px] rounded-[8.52px] py-[10.65px] px-[12.78px] border-[#2FC22B26] border-[1.06px]">
            <Icon src="/icons/bank.svg" w={13.73} h={10.74} />
            <p className="mt-1 text-[12.78px] text-white/60">Bank Tnsfer</p>
          </div>
        </div>

        {/* secure payment and learn more container */}
        <div className="flex justify-between">
          {/* secure payment */}
          <div className="flex items-center gap-[4px]">
            <Icon src="/icons/secure.svg" w={10} h={10} />
            <p className="text-[10px] text-white/60">Secure payment link</p>
            <Icon src="/icons/dropdown.svg" w={10} h={10} />
          </div>
          <p className="text-[10px] text-white/60">Learn More</p>
        </div>
      </div>

      <form className="gap-[16px] flex flex-col">
        <FormInput
          variant="checkout"
          label="Email Address"
          placeholder="eugene8@gmail.com"
        />
        <FormInput
          variant="checkout"
          label="Card Number"
          placeholder="1234 1234 1234 1234"
          bankCard={true}
        />

        <div className="flex gap-[2px] justify-between w-full">
          <FormInput
            variant="checkout"
            label="Expiration Date"
            placeholder="10/25"
          />
          <FormInput variant="checkout" label="cvv" placeholder="135" />
        </div>

        <FormInput
          variant="checkout"
          label="Name on Card"
          placeholder="Eugene Doe"
        />

        <FormInput
          variant="checkout"
          label="Billing Address"
          placeholder="Nigeria"
        />

        <div className="flex items-center">
          <Icon src={"/signUp/check.svg"} w={20} h={20} />
          <p className="font-inter text-[10px] text-white/70">
            By clicking this, I agree to CRETESPACE Terms and Conditions and
            Privacy Policy
          </p>
        </div>

        <CustomButton text="Subscribe" route="/dashboard" isRouting />
      </form>
    </section>
  );
};

export default CheckoutForm;
