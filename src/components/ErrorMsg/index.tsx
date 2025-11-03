import React from "react";

const ErrorMsg: React.FC<{ msg: string }> = ({ msg }) => {
  return <p className=" text-[14px] text-red-400">{msg}</p>;
};

export default ErrorMsg;
