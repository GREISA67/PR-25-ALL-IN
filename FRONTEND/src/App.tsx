import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout.tsx";
import HomePage from "./Pages/HomePage/HomePage.tsx";
import AboutPage from "./Pages/AboutPage/AboutPage.tsx";
import Login from "./Pages/Login/Login.tsx";
import Register from "./Pages/Register/Register.tsx";
import ReportPage from "./Pages/Report/ReportPage.tsx";
import ReportsListPage from "./Pages/Report/ReportsListPage.tsx";
import ReportDetailPage from "./Pages/Report/ReportDetailPage.tsx";
import ProfilePage from "./Pages/ProfilePage/ProfilePage.tsx";
import MyReportsPage from "./Pages/Report/MyReportsPage.tsx";
import CategoriesPage from "./Pages/CategoriesPage/CategoriesPage.tsx";
import ValidationReportsPage from "./Pages/Report/ValidationReportsPage.tsx";
import DashboardPage from "./Pages/DashboardPage/DashboardPage.tsx";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Páginas fuera del Layout */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Páginas dentro del Layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/report" element={<ReportPage />} />
          <Route path="/reportList" element={<ReportsListPage />} />
          <Route path="/reportDetail" element={<ReportDetailPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/myReports" element={<MyReportsPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/validationReports" element={<ValidationReportsPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
