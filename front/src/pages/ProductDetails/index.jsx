import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import parse from "html-react-parser";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { v4 as uuidv4 } from 'uuid';
import { useCardData } from "../../context/CartContext";

const Index = () => {
    const params = useParams();
    const { cardItems, setCardItems } = useCardData();

    const { id } = params;
    const location = useLocation();
    const state = location.state;
    const [quantity, setQuantity] = useState(1);

    const addToCard = (data, number) => {
        try {
            const itemToAdd = {
                ...data,
                cardId: uuidv4(),
                quantity: number,
            };
            const storedCart = localStorage.getItem("cardItem");
            const existingCart = storedCart ? JSON.parse(storedCart) : [];
            const updatedCart = [...existingCart, itemToAdd];
            localStorage.setItem("cardItem", JSON.stringify(updatedCart));
            setCardItems(updatedCart);
        } catch (error) {
            console.error("Sepete eklenirken hata oluştu:", error);
            localStorage.removeItem("cardItem");
        }
    };

    return (
        <div className="h-[calc(100vh-8rem)] w-[1280px] !mx-auto !p-4">
            <div className="grid grid-cols-12">
                <div className="h-[calc(100vh-11rem)] col-span-6">
                    <div className="h-full flex items-center justify-center h-full shadow-md rounded-xl border border-slate-50">
                        <img src={state.Image1} className="h-[42rem]" alt="" />
                    </div>
                </div>
                <div className="relative col-span-6 h-[calc(100vh-11rem)] overflow-auto">
                    <div className="flex flex-col gap-4 p-4 pb-0">
                        <div className="flex flex-col gap-4">
                            <div className="text-2xl font-medium uppercase">
                                {state.Brand}{" "}
                                <span className="font-normal normal-case">{state.Name}</span>{" "}
                            </div>

                            <div className="relative flex flex-col p-5 bg-slate-200 rounded-xl">
                                <div>
                                    <div className="text-2xl mb-3">
                                        Fiyat:{" "}
                                        <span className="font-medium text-orange-500">
                                            {parseInt(state.trendyol_salePrice) * quantity} TL
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center bg-white w-[9rem] px-2 py-1 rounded-full">
                                        <button
                                            onClick={() => {
                                                quantity > 1
                                                    ? setQuantity(quantity - 1)
                                                    : setQuantity(1);
                                            }}
                                            className="flex justify-center items-center rounded-full bg-slate-50 border border-slate-200 w-[2rem] h-[2rem] hover:bg-rose-100 duration-300 cursor-pointer"
                                        >
                                            {" "}
                                            <IconMinus className="text-slate-600 h-[1.2rem]" />{" "}
                                        </button>
                                        <input
                                            type="text"
                                            className="w-[3rem] outline-none font-semibold text-center text-xl py-2"
                                            value={quantity}
                                        />
                                        <button
                                            onClick={() => {
                                                setQuantity(quantity + 1);
                                            }}
                                            className="flex justify-center items-center rounded-full bg-slate-50 border border-slate-200 w-[2rem] h-[2rem] hover:bg-green-100 duration-300 cursor-pointer"
                                        >
                                            {" "}
                                            <IconPlus className="text-slate-600 h-[1.2rem]" />{" "}
                                        </button>
                                    </div>
                                </div>
                                <div className="absolute top-[1rem] right-[1rem] flex justify-end">
                                    {state.Stock > 10 ? (
                                        <span className="py-1.5 px-3 rounded-full border border-green-500 bg-green-500 text-white">
                                            Stokta var
                                        </span>
                                    ) : (
                                        <span className="py-1.5 px-3 rounded-full border border-rose-500 text-rose-500">
                                            Ürün Tükeniyor
                                        </span>
                                    )}
                                </div>
                            </div>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: `<ul>${state.Description}</ul>`,
                                }}
                            />
                        </div>
                        <div className="sticky bottom-0 right-0 left-0 flex justify-end gap-4 bg-white py-4">
                            <button
                                onClick={() => addToCard(state, quantity)}
                                className="rounded-full !px-12 !py-3 text-orange-500 bg-white font-semibold text-lg border border-orange-500 cursor-pointer hover:bg-orange-50/50 duration-300"
                            >
                                Sepete Ekle
                            </button>
                            <button className="rounded-full !px-12 !py-3 text-white bg-orange-500 font-semibold text-lg cursor-pointer hover:bg-orange-600 duration-300">
                                Şimdi Al
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
