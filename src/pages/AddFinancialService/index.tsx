import React, { useEffect, useState } from "react";
import Chip from "../../components/Chip/Chip";
import { Outlet, useLocation } from "react-router";
import { FORM_TITLES } from "../../constants";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

const AddFinancialService: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const location = useLocation();
  const { i18n, t } = useTranslation();

  useEffect(() => {
    if (location.pathname === "/") {
      setCurrentStep(1);
    } else if (location.pathname === "/add-family-info") {
      setCurrentStep(2);
    } else {
      setCurrentStep(3);
    }
  }, [location.pathname]);

  const getTitle = () => {
    if (currentStep === 1) {
      return FORM_TITLES[0];
    } else if (currentStep === 2) {
      return FORM_TITLES[1];
    } else {
      return FORM_TITLES[2];
    }
  };

  const TITLE_DESC = getTitle();

  const onLngChange = (value: string) => {
    i18n.changeLanguage(value);
    document.documentElement.dir = value === "en" ? "ltr" : "rtl";
  };

  return (
    <div className=" bg-white p-5 max-[1024px]:min-h-screen min-[1024px]:w-[984px] min-[1024px]:mx-auto min-[1024px]:my-5">
      <div className=" flex items-center gap-5">
        <h1 className=" text-3xl my-6">{t("FinancialServices")}</h1>
        <div className=" px-3 py-1 rounded-3xl border-[1.5px] border-[#e4e4e4]">
          <label id="label-lang" hidden>
            Select language
          </label>
          <select
            name="language"
            id="language"
            className=" focus:outline-0"
            aria-labelledby="label-lang"
            onChange={(e) => onLngChange(e.target.value)}
          >
            <option value="en" lang="en" className=" bg-white">
              {t("English")}
            </option>
            <option value="ar" lang="ar" dir="rtl">
              {t("Arabic")}
            </option>
          </select>
        </div>
      </div>

      <div className=" flex items-center max-w-[400px]">
        {currentStep === 1 ? (
          <Chip {...TITLE_DESC} />
        ) : (
          <div className={"active dot"}></div>
        )}
        <div
          className={clsx(currentStep !== 1 ? "active" : null, "line")}
        ></div>
        {currentStep === 2 ? (
          <Chip {...TITLE_DESC} />
        ) : (
          <div
            className={clsx(currentStep !== 1 ? "active" : null, "dot")}
          ></div>
        )}
        <div
          className={clsx(currentStep === 3 ? "active" : null, "line")}
        ></div>
        {currentStep === 3 ? (
          <Chip {...TITLE_DESC} />
        ) : (
          <div className={"dot"}></div>
        )}
      </div>
      <Outlet />
    </div>
  );
};

export default AddFinancialService;
