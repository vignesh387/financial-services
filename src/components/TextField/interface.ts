import type { UseFormRegisterReturn } from "react-hook-form";

export interface TextFieldProps {
  label: string;
  id: string;
  placeholder: string;
  type?: "text" | "number" | "email" | "tel";
  inputProps: UseFormRegisterReturn<string>;
  error?: string;
}
