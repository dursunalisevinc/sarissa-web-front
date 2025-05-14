import React from "react";
import Table from '../../component/Table'
const index = () => {
  return (
    <>
      <nav className="flex items-center justify-between px-4 py-3 bg-white shadow-sm rounded-md mb-4 h-[62px]">
        <span className="font-semibold text-xl text-orange-500">
          Müşteriler
        </span>
      </nav>

      <div className="h-[calc(100vh-7.5rem)]">
        <Table />
      </div>
    </>
  );
};

export default index;
