import type { DropdownOptionProps } from "../../../../components/Dropdown/interface";

export interface PersonalInfoProps {
  name: string;
  nationalId: string;
  dob: Date | null;
  gender: string;
  address: string;
  city: string;
  state: string;
  country: DropdownOptionProps;
  phone: string;
  email: string;
}
