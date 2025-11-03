import React from "react";
import type { TextFieldProps } from "./interface";
import clsx from "clsx";
import ErrorMsg from "../ErrorMsg";

const TextField: React.FC<TextFieldProps> = (props) => {
  return (
    <div>
      <div
        className={clsx(props.error && " border-red-400!", " input-container")}
      >
        <label htmlFor={props.id}>{props.label} :</label>
        <input
          id={props.id}
          placeholder={props.placeholder}
          type={props.type ?? "text"}
          {...props.inputProps}
          className=" flex-1"
        />
      </div>
      {props.error && <ErrorMsg msg={props.error} />}
    </div>
  );
};

export default TextField;
