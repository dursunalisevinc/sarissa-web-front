import axios from 'axios';
import React, { useEffect } from 'react';
import { Products } from '../../Data';
import { useNavigate } from 'react-router-dom';

const Index = () => {
    const navigate = useNavigate();

    const navigateDetails = (id) => {
        navigate(`/product/${id}`)
    }

    return (
        <div className='max-w-[1280px] !mx-auto !p-4'>
            <div className='grid grid-cols-12 gap-4'>

                {
                    Products.map((oItem, oIndex) => {
                        return (
                            <div onClick={() => navigateDetails(oItem.id)} key={oIndex} className='col-span-3 !p-6 rounded-xl shadow-md cursor-pointer hover:bg-slate-200 duration-300'>
                                <div className='flex flex-col'>
                                    <img src={oItem.img} alt="" />
                                    <div>{oItem.title}</div>
                                    <div>{oItem.description}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Index;
