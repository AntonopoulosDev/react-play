import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Dashbord } from "../pages";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Dashbord />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
};
