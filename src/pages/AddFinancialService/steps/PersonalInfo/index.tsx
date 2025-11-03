import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import TextField from "../../../../components/TextField";
import RadioGroup from "../../../../components/RadioGroup";
import DatePicker from "../../../../components/DatePicker";
import Dropdown from "../../../../components/Dropdown";
import { useForm, Controller } from "react-hook-form";
import type { PersonalInfoProps } from "./interface";
import {
  EMPLOYMENT_OPTIONS,
  PERSONAL_INFO_ERRORS,
} from "../../../../constants";
import Button from "../../../../components/Button";
import { useTranslation } from "react-i18next";

const PersonalInfo: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<PersonalInfoProps>();

  useEffect(() => {
    const personalData = localStorage.getItem("personalInfo");
    if (personalData) {
      reset(JSON.parse(personalData));
    }
  }, []);

  const onSubmit = (data: PersonalInfoProps) => {
    localStorage.setItem("personalInfo", JSON.stringify(data));
    navigate("/add-family-info");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" form-container">
          <TextField
            label={t("Name")}
            id={"user-name-id"}
            placeholder={t("NamePlaceholder")}
            inputProps={register("name", {
              required: PERSONAL_INFO_ERRORS.Name_Required,
            })}
            error={errors.name?.message}
          />
          <TextField
            label={t("Id")}
            id={"national-id"}
            placeholder={"e.g 784-xxxx-xxxxxxx-xxx"}
            inputProps={register("nationalId", {
              required: PERSONAL_INFO_ERRORS.ID_Required,
            })}
            error={errors.nationalId?.message}
          />
          <Controller
            name="dob"
            control={control}
            rules={{ required: PERSONAL_INFO_ERRORS.DOB_Required }}
            render={({ field }) => (
              <DatePicker
                label={t("Dob")}
                value={field.value}
                onChange={field.onChange}
                error={errors.dob?.message}
              />
            )}
          />
          <Controller
            name={"gender"}
            control={control}
            rules={{ required: PERSONAL_INFO_ERRORS.Gender_Required }}
            render={({ field }) => (
              <RadioGroup
                label={t("Gender")}
                options={[
                  { label: t("Male"), value: "male" },
                  { label: t("Female"), value: "female" },
                ]}
                defaultChecked={field.value}
                onChange={field.onChange}
                error={errors.gender?.message}
              />
            )}
          />

          <TextField
            label={t("Address")}
            id={"address-id"}
            placeholder={t("AddressPlaceholder")}
            inputProps={register("address", {
              required: PERSONAL_INFO_ERRORS.Address_Required,
            })}
            error={errors.address?.message}
          />
          <TextField
            label={t("City")}
            id={"city-id"}
            placeholder={t("CityPlaceholder")}
            inputProps={register("city", {
              required: PERSONAL_INFO_ERRORS.City_Required,
            })}
            error={errors.city?.message}
          />
          <TextField
            label={t("State")}
            id={"state-id"}
            placeholder={t("StatePlaceholder")}
            inputProps={register("state", {
              required: PERSONAL_INFO_ERRORS.State_Required,
            })}
            error={errors.state?.message}
          />
          <Controller
            name="country"
            control={control}
            rules={{ required: PERSONAL_INFO_ERRORS.Country_Required }}
            render={({ field }) => (
              <Dropdown
                value={field.value}
                onChange={field.onChange}
                error={errors.country?.message}
                label={t("Country")}
                options={EMPLOYMENT_OPTIONS}
                placeholder={t("CountryPlaceholder")}
              />
            )}
          />

          <TextField
            label={t("Phone")}
            id={"phone-no-id"}
            placeholder={"e.g 05xxxxxxxx"}
            inputProps={register("phone", {
              required: PERSONAL_INFO_ERRORS.Phone_Required,
            })}
            type={"tel"}
            error={errors.phone?.message}
          />
          <TextField
            label={t("Email")}
            id={"email-id"}
            placeholder={"e.g testuser@gmail.com"}
            inputProps={register("email", {
              required: PERSONAL_INFO_ERRORS.Email_Required,
            })}
            type={"email"}
            error={errors.email?.message}
          />
        </div>
        <div className=" w-fit mx-auto">
          <Button type={"submit"} theme={"primary"} text={t("Continue")} />
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
