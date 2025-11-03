import type { DropdownOptionProps } from "../Dropdown/interface";

export interface RadioGroupProps {
  label: string;
  options: DropdownOptionProps[];
  onChange: (params: string) => void;
  defaultChecked: string;
  error?: string;
}
