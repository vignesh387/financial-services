import React, { useEffect, useState } from "react";
import TextArea from "../../../../components/TextArea";
import Button from "../../../../components/Button";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import type { SituationDescriptionProps } from "./interface";
import { SITUATION_ERRORS } from "../../../../constants";
import { Api } from "../../../../api";
import Modal from "../../../../components/Modal";
import { useTranslation } from "react-i18next";
import toast from "react-hot-toast";
import Spinner from "../../../../components/Spinner";
import { Submitapi } from "../../../../submit-api";

const SituationDescriptions: React.FC = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [suggestion, setSuggestion] = useState<{
    type: "situation" | "circumstance" | "reason";
    content: string;
  } | null>();
  const [loading, setLoading] = useState<boolean>(false);

  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<SituationDescriptionProps>();

  useEffect(() => {
    const data = localStorage.getItem("descriptions");
    if (data) {
      reset(JSON.parse(data));
    }
  }, []);

  const onSubmit = async (data: SituationDescriptionProps) => {
    try {
      const response = await Submitapi({
        personalInfo: JSON.parse(localStorage.getItem("personalInfo")!),
        financialInfo: JSON.parse(localStorage.getItem("financialInfo")!),
        descriptions: data,
      });
      toast.success(response.message);
      localStorage.clear();
    } catch (error) {
      toast.error((error as { message: string }).message);
    }
  };

  const onSave = (data: SituationDescriptionProps) => {
    localStorage.setItem("descriptions", JSON.stringify(data));
    toast.success("Data saved successfully");
  };

  const getPromptDefault = (type: "situation" | "circumstance" | "reason") => {
    if (type === "situation") {
      return "I am unemployed with no income. Help me describe my financial hardship.";
    } else if (type === "circumstance") {
      return "I am facing difficulty in savings. Help me describe this situation.";
    } else {
      return "I need reason to apply for financial assistance.";
    }
  };

  const getSuggestions = async (
    type: "situation" | "circumstance" | "reason"
  ) => {
    try {
      setLoading(true);
      const response = await Api(getPromptDefault(type));
      setSuggestion({ type, content: response.message });
      setShowModal(true);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error((error as { message: string }).message);
    }
  };

  const onAccept = (value: string) => {
    if (suggestion?.type === "situation") {
      setValue("situation", value);
    } else if (suggestion?.type === "circumstance") {
      setValue("empCircumstances", value);
    } else {
      setValue("reason", value);
    }
    setShowModal(false);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" flex flex-col gap-6 mt-8 mb-6"
      >
        <div>
          <TextArea
            label={t("CurrentFinancialSituation")}
            placeholder={t("SituationPlaceholder")}
            inputProps={register("situation", {
              required: SITUATION_ERRORS.Situation_Required,
            })}
            error={errors.situation?.message}
          />
          <div className=" text-end mt-2.5">
            <Button
              text={t("HelpMeWrite")}
              type={"button"}
              theme={"secondary"}
              onClick={() => {
                getSuggestions("situation");
              }}
            />
          </div>
        </div>
        <div>
          <TextArea
            label={t("EmploymentCircumstances")}
            placeholder={t("EmploymentPlaceholder")}
            inputProps={register("empCircumstances", {
              required: SITUATION_ERRORS.Circumstance_Required,
            })}
            error={errors.empCircumstances?.message}
          />
          <div className=" text-end mt-2.5">
            <Button
              text={t("HelpMeWrite")}
              type={"button"}
              theme={"secondary"}
              onClick={() => {
                getSuggestions("circumstance");
              }}
            />
          </div>
        </div>
        <div>
          <TextArea
            label={t("ReasonforApplying")}
            placeholder={t("ReasonPlaceholder")}
            inputProps={register("reason", {
              required: SITUATION_ERRORS.Reason_Required,
            })}
            error={errors.reason?.message}
          />
          <div className=" text-end mt-2.5">
            <Button
              text={t("HelpMeWrite")}
              type={"button"}
              theme={"secondary"}
              onClick={() => {
                getSuggestions("reason");
              }}
            />
          </div>
        </div>
        <div className=" flex justify-center items-center gap-6 mt-3">
          <Button
            text={t("Back")}
            type={"button"}
            theme={"secondary"}
            onClick={() => {
              navigate(-1);
            }}
            width={"w-[125px]"}
          />
          <Button
            text={t("Save")}
            type={"button"}
            theme={"secondary"}
            onClick={handleSubmit(onSave)}
            width={"w-[125px]"}
          />
          <Button
            text={t("Submit")}
            type={"submit"}
            theme={"primary"}
            width={"w-[125px]"}
          />
        </div>

        {showModal && (
          <Modal
            content={suggestion?.content!}
            onDiscard={() => {
              setShowModal(false);
              setSuggestion(null);
            }}
            onSave={onAccept}
          />
        )}
      </form>
      {loading && <Spinner />}
    </>
  );
};

export default SituationDescriptions;
