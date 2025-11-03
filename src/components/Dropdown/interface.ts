export interface DropdownOptionProps {
  label: string;
  value: string;
}

export interface DropdownProps {
  value: DropdownOptionProps | null;
  onChange: (e: DropdownOptionProps | null) => void;
  error?: string;
  label: string;
  options: DropdownOptionProps[];
  placeholder: string;
}
