import React from 'react'
import { useParams } from 'react-router-dom';

const Index = () => {
    const params = useParams();
    const {id} = params;


    return (
        <div className='h-[calc(100vh-8rem)] w-[1280px] !mx-auto !p-4'>
            <div className='grid grid-cols-12'>
            <div className="h-[calc(100vh-11rem)] col-span-6">
                <div className='h-full flex items-center justify-center h-full shadow-md rounded-xl border border-slate-50'>
                <img src="/img/urun.webp" className='h-[42rem]' alt="" />
                </div>
            </div>
            <div className="col-span-6">
                <div className='flex flex-col gap-4 !p-4'>
                    <div className='text-xl font-medium'>{id} Nolu Ürün</div>
                    <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi velit illo tempore pariatur possimus!</div>
                    <div className='text-orange-500 font-medium text-2xl'>250 TL</div>
                    <div className='flex gap-4'>
                    <button className='rounded-full !px-12 !py-3 text-orange-500 bg-white font-semibold text-lg border border-orange-500 cursor-pointer hover:bg-orange-50/50 duration-300'> 
                    Sepete Ekle
                    </button>
                    <button className='rounded-full !px-12 !py-3 text-white bg-orange-500 font-semibold text-lg cursor-pointer hover:bg-orange-600 duration-300'> 
                    Şimdi Al
                    </button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Index;
