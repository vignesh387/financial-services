import type { FinancialInfoProps } from "./pages/AddFinancialService/steps/FinancialInfo/interface";
import type { PersonalInfoProps } from "./pages/AddFinancialService/steps/PersonalInfo/interface";
import type { SituationDescriptionProps } from "./pages/AddFinancialService/steps/SituationDescriptions/interface";

interface SubmitRequestProps {
  personalInfo: PersonalInfoProps;
  financialInfo: FinancialInfoProps;
  descriptions: SituationDescriptionProps;
}

export const Submitapi = async (
  data: SubmitRequestProps
): Promise<{ success: boolean; message: string }> => {
  if (data) {
    return Promise.resolve({
      success: true,
      message: "Data submitted successfully",
    });
  } else {
    return Promise.reject({ success: false, message: "Invalid Request" });
  }
};
