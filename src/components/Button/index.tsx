import clsx from "clsx";
import React from "react";

interface ButtonProps {
  text: string;
  type: "submit" | "button";
  theme: "primary" | "secondary";
  onClick?: () => void;
  width?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      type={props.type}
      className={clsx(
        props.theme === "primary"
          ? " bg-linear-to-r from-[#1F2B57] to-[#273d8c] text-white"
          : "bg-white text-blue-950 border-blue-950 border-2",
        `text-[15px] font-medium  h-9 rounded-[5px] cursor-pointer ${
          props.width ?? "w-[175px]"
        }`
      )}
      onClick={(e) => {
        if (props.onClick) {
          e.preventDefault();
          props.onClick();
        }
      }}
    >
      {props.text}
    </button>
  );
};

export default Button;
