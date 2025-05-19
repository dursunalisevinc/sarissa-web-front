import { Outlet } from "react-router-dom";
import Navbar from "../../component/Navbar";
import { useEffect, useState } from "react";

const Index = () => {
  const [showFixedNavbar, setShowFixedNavbar] = useState(false);
  // console.log(JSON.parse(localStorage.getItem('cardItem')));
  const handleScroll = () => {
    if (window.scrollY > 400) {
      setShowFixedNavbar(true);
    } else {
      setShowFixedNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-screen flex flex-col">
      <div className="h-[8rem] border-b border-slate-100">
        <Navbar />
      </div>
      <div
        className={`fixed top-0 left-0 w-full h-[8rem] z-50 bg-white transition-transform duration-300 border-b border-slate-200 ${
          showFixedNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Navbar />
      </div>
      <div className="grow">
        <Outlet />
      </div>
    </div>
  );
};

export default Index;
