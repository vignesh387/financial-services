import type { DropdownOptionProps } from "../../../../components/Dropdown/interface";

export interface FinancialInfoProps {
  martialStatus: string;
  dependents: string;
  employmentStatus: DropdownOptionProps;
  income: string;
  housingStatus: string;
}
