import type { DropdownOptionProps } from "./components/Dropdown/interface";

export const FORM_TITLES = [
  { step: 1, tag: "PersonalInfo" },
  { step: 2, tag: "FinancialInfo" },
  { step: 3, tag: "SituationDescriptions" },
];

export const PERSONAL_INFO_ERRORS = {
  Name_Required: "Name is required",
  ID_Required: "National ID is required",
  DOB_Required: "Date of birth is required",
  Gender_Required: "Gender is required",
  Address_Required: "Address is required",
  City_Required: "City is required",
  State_Required: "State is required",
  Country_Required: "Country is required",
  Phone_Required: "Phone is required",
  Email_Required: "Email is required",
};

export const EMPLOYMENT_OPTIONS: DropdownOptionProps[] = [
  { label: "Employed", value: "employed" },
  { label: "Unemployed", value: "employed" },
  { label: "Self-Employed", value: "selfemployed" },
  { label: "Disabled", value: "disabled" },
];

export const FINANCIAL_INFO_ERRORS = {
  Martial_Status_Required: "Martial Status is required",
  Dependents_Required: "Dependents is required",
  Employment_Status_Required: "Employment Status is required",
  Income_Required: "Income is required",
  Housing_Status_Required: "Housing Status is required",
};

export const SITUATION_ERRORS = {
  Situation_Required: "Current Financial Situation is required",
  Circumstance_Required: "Employment Circumstance is required",
  Reason_Required: "Reason for applying is required",
};
