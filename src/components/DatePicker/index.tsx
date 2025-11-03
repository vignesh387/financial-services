import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import type { DatePickerProps } from "./interface";
import ErrorMsg from "../ErrorMsg";
import clsx from "clsx";

const CustomDatePicker: React.FC<DatePickerProps> = ({
  value,
  onChange,
  error,
  label,
}) => {
  return (
    <div>
      <div className={clsx(error && " border-red-400!", "input-container")}>
        <p id="Date_Picker">{label} :</p>
        <DatePicker
          placeholderText="mm/dd/yyyy"
          selected={value}
          onChange={onChange}
          ariaLabelledBy="Date_Picker"
        />
      </div>
      {error && <ErrorMsg msg={error} />}
    </div>
  );
};

export default CustomDatePicker;
