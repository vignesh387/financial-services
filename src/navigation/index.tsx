import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import AddFinancialService from "../pages/AddFinancialService";
import PersonalInfo from "../pages/AddFinancialService/steps/PersonalInfo";
import FinancialInfo from "../pages/AddFinancialService/steps/FinancialInfo";
import SituationDescription from "../pages/AddFinancialService/steps/SituationDescriptions";

const AppNavigation: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddFinancialService />}>
          <Route index element={<PersonalInfo />} />
          <Route path="/add-family-info" element={<FinancialInfo />} />
          <Route
            path="/add-situation-desc"
            element={<SituationDescription />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppNavigation;
