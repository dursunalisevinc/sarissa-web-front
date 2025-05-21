import { useEffect, useState } from "react";
import LoginForm from "./Login/LoginForm";
import RegisterForm from "./Register/RegisterForm";
import AuthTabs from "./AuthTabs";
import { useNavigate } from "react-router-dom";

const Index = ({ activeTab }) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/${activeTab}`);
  }, []);

  return (
    <div className="min-h-screen flex items-start mt-8 justify-center  px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg shadow-slate-100 border border-slate-200 ">
        <AuthTabs currentTab={activeTab} onChange={(e) => navigate(`/${e}`)} />
        <div className="mt-6">
          {activeTab === "login" ? <LoginForm /> : <RegisterForm />}
        </div>
      </div>
    </div>
  );
};

export default Index;
