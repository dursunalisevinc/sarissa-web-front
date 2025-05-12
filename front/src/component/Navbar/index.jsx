import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { IconMenu, IconMenu2, IconMenu3, IconShoppingBag, IconUser } from '@tabler/icons-react';

const Index = () => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    return (
        <div className='flex items-center'>
            <div className='w-full flex flex-col gap-2'>
                <div className='!p-4 w-full flex justify-between max-w-[1280px] !mx-auto'>
                    <div className='flex items-center text-3xl font-medium'>
                        Sarissa
                    </div>
                    <div className='flex gap-1'>
                        <div>
                            <button
                                aria-describedby={id} variant="contained" onClick={handleClick}
                                className='flex items-center !px-4 !py-2 rounded-xl cursor-pointer gap-1 outline-none group'

                            >
                                <IconUser className='h-5 group-hover:text-orange-500 duration-300' /> <span className='text-md group-hover:text-orange-500 duration-300'>Giriş Yap</span>
                            </button>
                            <Popover
                                id={id}
                                open={open}
                                anchorEl={anchorEl}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'center',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                }}
                            >
                                <div className='flex flex-col gap-2 !p-4'>
                                    <button onClick={() => navigate('/login')} className='!py-2 !px-10 bg-orange-500 text-white rounded-lg cursor-pointer hover:bg-orange-600 duration-300'>
                                        Giriş Yap
                                    </button>
                                    <button onClick={() => navigate('/register')} className='!py-2 !px-10 bg-slate-200 rounded-lg cursor-pointer hover:bg-slate-300 duration-300'>
                                        Üye Ol
                                    </button>
                                </div>
                            </Popover>
                        </div>
                        <div>
                            <button
                                className='flex items-center !px-4 !py-2 rounded-xl cursor-pointer gap-1 outline-none group'
                            >
                                <IconShoppingBag className='h-5 group-hover:text-orange-500 duration-300' /> <span className='text-md group-hover:text-orange-500 duration-300'>Sepetim</span>
                            </button>

                        </div>
                    </div>
                </div>
                <div className='!p-4 w-full max-w-[1280px] !mx-auto !py-2 cursor-pointer'>
                    <div className='grid grid-cols-12'>
                        <div className="col-span-2 flex gap-2 hover:text-orange-500 duration-300">
                            <IconMenu2 /> <span className='uppercase'>Tüm Katagoriler</span>
                        </div>
                        <div className="col-span-1 hover:text-orange-500 duration-300">Kadın</div>
                        <div className="col-span-1 hover:text-orange-500 duration-300">Erkek</div>
                        <div className="col-span-1 hover:text-orange-500 duration-300">Kozmetik</div>
                        <div className="col-span-1 hover:text-orange-500 duration-300">Bisiklet</div>
                        <div className="col-span-1 hover:text-orange-500 duration-300">Motor</div>
                        <div className="col-span-1 hover:text-orange-500 duration-300">Kadın</div>
                        <div className="col-span-1 hover:text-orange-500 duration-300">Erkek</div>
                        <div className="col-span-1 hover:text-orange-500 duration-300">Kozmetik</div>
                        <div className="col-span-1 hover:text-orange-500 duration-300">Bisiklet</div>
                        <div className="col-span-1 hover:text-orange-500 duration-300">Motor</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index;
