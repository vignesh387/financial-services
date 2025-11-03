import React from "react";
import type { RadioGroupProps } from "./interface";
import ErrorMsg from "../ErrorMsg";
import clsx from "clsx";

const RadioGroup: React.FC<RadioGroupProps> = (props) => {
  return (
    <fieldset>
      <div
        className={clsx(props.error && " border-red-400!", " input-container")}
      >
        <legend>{props.label} :</legend>
        {props.options.map((item) => (
          <label htmlFor={`${item.label}-id`} key={item.label}>
            <input
              type={"radio"}
              className=" accent-[#273d8c]"
              value={item.value}
              onChange={(e) => {
                props.onChange(e.target.value);
              }}
              name={props.label}
              checked={props.defaultChecked === item.value}
              id={`${item.label}-id`}
            />
            &nbsp;{item.label}
          </label>
        ))}
      </div>
      {props.error && <ErrorMsg msg={props.error} />}
    </fieldset>
  );
};

export default RadioGroup;
