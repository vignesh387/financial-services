import React from "react";
import type { ChipProps } from "./interface";
import { useTranslation } from "react-i18next";

const Chip: React.FC<ChipProps> = ({ tag, step }) => {
  const { t } = useTranslation();
  return (
    <div className=" text-white font-medium bg-linear-to-r from-[#1F2B57] to-[#273d8c] py-1.5 px-3.5 rounded-3xl shrink-0 animate-fadeIn">
      <span className=" inline-block bg-white rounded-[50%] py-0.5 px-[5px] text-[#001540] mr-1">
        {step}
      </span>{" "}
      {t(tag)}
    </div>
  );
};

export default Chip;
