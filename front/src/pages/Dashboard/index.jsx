import axios from "axios";
import React, { useEffect, useState } from "react";
// import { Products } from '../../Data';
import { useNavigate } from "react-router-dom";
import { getCategoryTree } from "../../Api/categoryService";
import { getXlmProduct, getXmlProductById } from "../../Api/productService";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Index = () => {
  const navigate = useNavigate();
  const [produtcData, setProductData] = useState([]);
  const [paginationData, setPaginationData] = useState({
    itemsPerPage: "",
    totalItems: "",
    pageCount: "",
    pageNumber: "",
  });

  const navigateDetails = async (id) => {
    await getXmlProductById(id)
      .then((res) => {
        navigate(`/product/${id}`, {
          state: res.data.data,
        });
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getCategoryTree()
      .then((res) => {
        console.log(res.data.categories);
      })
      .catch((err) => {
        console.error("Kategori ağacı alınamadı:", err);
      });
  }, []);

  const handleChange = (event, value) => {
    setPaginationData((prev) => ({
      ...prev,
      pageNumber: value,
    }));
  };

  useEffect(() => {
    getXlmProduct(paginationData.pageNumber, 50)
      .then((oResponse) => {
        setProductData(oResponse.data.data);
        setPaginationData({
          itemsPerPage: oResponse.data.limit,
          totalItems: oResponse.data.total,
          pageCount: Math.ceil(oResponse.data.total / oResponse.data.limit),
          pageNumber: paginationData.pageNumber,
        });
      })
      .catch((oError) => {
        console.log(oError);
      });
  }, [paginationData.pageNumber]);

  return (
    <div className="relative max-w-[1280px] mx-auto px-4 pt-[2rem] pb-[6.5rem]">
      <div className="grid grid-cols-15 gap-4">
        {produtcData &&
          produtcData.length > 0 &&
          produtcData.map((oItem, oIndex) => {
            return (
              <div
                key={oIndex}
                onClick={() => navigateDetails(oItem["Product_id"])}
                className="bg-slate-50/25 col-span-3 p-8 rounded-xl border border-slate-100 shadow-md hover:bg-slate-100 duration-300 cursor-pointer"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex justify-center h-[10rem]">
                    <img src={oItem.Image1} className="h-[10rem]" alt="" />
                  </div>

                  <div className="text-sm font-medium uppercase">
                    {oItem.Brand}{" "}
                    <span className="font-normal normal-case">
                      {oItem.Name}
                    </span>{" "}
                  </div>

                  <span className="font-semibold text-xl text-orange-500">
                    {oItem.trendyol_salePrice} TL
                  </span>
                  <div className="flex justify-end">
                    {oItem.Stock > 10 ? (
                      <span className="py-1.5 px-3 rounded-full border border-green-500 text-green-500">
                        Stokta var
                      </span>
                    ) : (
                      <span className="py-1.5 px-3 rounded-full border border-rose-500 text-rose-500">
                        Ürün Tükeniyor
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div className="fixed bottom-0 right-0 left-0 w-full bg-slate-100">
        <div className=" flex justify-end w-full max-w-[1280px] mx-auto py-4">
          <Stack spacing={2}>
            <Pagination
              count={paginationData.pageCount}
              page={paginationData.pageNumber}
              onChange={handleChange}
              showFirstButton
              showLastButton
            />
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default Index;
