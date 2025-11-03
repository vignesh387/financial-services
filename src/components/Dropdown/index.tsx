import React from "react";
import Select from "react-select";
import type { DropdownProps } from "./interface";
import ErrorMsg from "../ErrorMsg";
import clsx from "clsx";

const Dropdown: React.FC<DropdownProps> = (props) => {
  return (
    <div>
      <div
        className={clsx(
          props.error && " border-red-400!",
          " input-container py-0!"
        )}
      >
        <label id={`${props.label}-label`} htmlFor={`${props.label}-id`}>
          {props.label} :
        </label>
        <div className=" flex-1">
          <Select
            options={props.options}
            styles={{
              control: (baseStyles) => ({
                ...baseStyles,
                border: "none",
                outline: "none",
                padding: 0,
                minHeight: 52,
                boxShadow: "none",
              }),
            }}
            placeholder={"eg United Arab Emirates"}
            value={props.value}
            onChange={props.onChange}
            inputId={`${props.label}-id`}
            aria-labelledby={`${props.label}-label`}
          />
        </div>
      </div>
      {props.error && <ErrorMsg msg={props.error} />}
    </div>
  );
};

export default Dropdown;
