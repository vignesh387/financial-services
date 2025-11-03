import React, { forwardRef, type RefObject } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";
import ErrorMsg from "../ErrorMsg";
import clsx from "clsx";

interface TextAreaProps {
  label: string;
  placeholder: string;
  inputProps: UseFormRegisterReturn<string>;
  error?: string;
  disabled?: boolean;
  ref?: RefObject<HTMLTextAreaElement | null>;
}

const TextArea: React.FC<TextAreaProps> = forwardRef((props, ref) => {
  return (
    <div>
      <div
        className={clsx(
          props.error && " border-red-400!",
          " input-container items-start!"
        )}
      >
        <label htmlFor={`${props.label}-id`}>{props.label} :</label>
        <textarea
          id={`${props.label}-id`}
          placeholder={props.placeholder}
          className=" h-[100px] flex-1 resize-none outline-0"
          {...props.inputProps}
          disabled={props.disabled}
          ref={(e) => {
            props.inputProps.ref(e);
            if (ref) {
              (ref as RefObject<HTMLTextAreaElement | null>).current = e;
            }
          }}
        ></textarea>
      </div>
      {props.error && <ErrorMsg msg={props.error} />}
    </div>
  );
});

export default TextArea;
