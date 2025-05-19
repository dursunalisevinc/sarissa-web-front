import { IconShoppingBag } from "@tabler/icons-react";
import axios from "axios";
import React, { useEffect } from "react";

const Index = () => {
  const token = localStorage?.getItem("token");
  console.log(token);

  const getUsers = async (token) => {
    try {
      const response = await axios.get("http://localhost:5000/api/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Kullanıcılar:", response.data);
    } catch (error) {
      console.error(
        "Kullanıcılar alınamadı:",
        error.response?.data || error.message
      );
      throw error;
    }
  };

  useEffect(() => {
    if (token) {
      getUsers(token);
    }
  }, [token]);

  return (
    <>
      <nav className="flex items-center justify-between px-4 py-3 bg-white shadow-sm rounded-md mb-4 h-[62px]">
        <span className="flex items-center font-semibold text-xl text-slate-800 gap-1"><span><IconShoppingBag className="text-orange-500" /></span> Siparişler </span>
      </nav>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-4">
          <div className="flex flex-col p-4 rounded-xl h-[20rem] border border-slate-100 shadow-sm bg-slate-50">
            <div className="flex justify-between items-center pt-2 pb-4">
              <div className="bg-yellow-100 text-yellow-500 px-4 py-1.5 rounded-full border border-yellow-500">Bekliyor</div>
              <div className="text-slate-700 font-semibold">03/04/2025</div>
            </div>
            <div className="grow overflow-auto">
              <div className="">
                dkmkd
              </div>
            </div>
            <div className="flex justify-end">
              total
            </div>
          </div>
        </div>
        <div className="col-span-4">dfdf</div>
        <div className="col-span-4">dfdf</div>
      </div>
    </>
  );
};

export default Index;
