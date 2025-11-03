import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import Button from "../../../../components/Button";
import { useForm, Controller } from "react-hook-form";
import RadioGroup from "../../../../components/RadioGroup";
import TextField from "../../../../components/TextField";
import Dropdown from "../../../../components/Dropdown";
import {
  EMPLOYMENT_OPTIONS,
  FINANCIAL_INFO_ERRORS,
} from "../../../../constants";
import type { FinancialInfoProps } from "./interface";
import { useTranslation } from "react-i18next";

const FinanciallInfo: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const {
    control,
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FinancialInfoProps>();

  useEffect(() => {
    const financialData = localStorage.getItem("financialInfo");
    if (financialData) {
      reset(JSON.parse(financialData));
    }
  }, []);

  const onSubmit = (data: FinancialInfoProps) => {
    localStorage.setItem("financialInfo", JSON.stringify(data));
    navigate("/add-situation-desc");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className=" form-container">
        <Controller
          name="martialStatus"
          control={control}
          rules={{ required: FINANCIAL_INFO_ERRORS.Martial_Status_Required }}
          render={({ field }) => (
            <RadioGroup
              label={t("MartialStatus")}
              options={[
                { label: t("Married"), value: "married" },
                { label: t("Single"), value: "single" },
              ]}
              onChange={field.onChange}
              defaultChecked={field.value}
              error={errors.martialStatus?.message}
            />
          )}
        />

        <TextField
          label={t("Dependents")}
          id="dependent-id"
          inputProps={register("dependents", {
            required: FINANCIAL_INFO_ERRORS.Dependents_Required,
          })}
          placeholder={"eg 3"}
          type={"number"}
          error={errors.dependents?.message}
        />
        <Controller
          name="employmentStatus"
          control={control}
          rules={{ required: FINANCIAL_INFO_ERRORS.Employment_Status_Required }}
          render={({ field }) => (
            <Dropdown
              value={field.value}
              onChange={field.onChange}
              label={t("EmploymentStatus")}
              options={EMPLOYMENT_OPTIONS}
              placeholder="Employed"
              error={errors.employmentStatus?.message}
            />
          )}
        />
        <TextField
          label={t("MonthlyIncome")}
          id="monthly-income-id"
          inputProps={register("income", {
            required: FINANCIAL_INFO_ERRORS.Income_Required,
          })}
          placeholder={"eg 10000"}
          type={"number"}
          error={errors.income?.message}
        />
        <Controller
          name="housingStatus"
          control={control}
          rules={{ required: FINANCIAL_INFO_ERRORS.Housing_Status_Required }}
          render={({ field }) => (
            <RadioGroup
              label={t("HousingStatus")}
              options={[
                { label: t("Own"), value: "own" },
                { label: t("Rent"), value: "rent" },
              ]}
              onChange={field.onChange}
              defaultChecked={field.value}
              error={errors.housingStatus?.message}
            />
          )}
        />
      </div>
      <div className=" flex justify-center items-center gap-6 mt-3">
        <Button
          text={t("Back")}
          type={"button"}
          theme={"secondary"}
          onClick={() => {
            navigate(-1);
          }}
        />
        <Button text={t("Submit")} type={"submit"} theme={"primary"} />
      </div>
    </form>
  );
};

export default FinanciallInfo;
