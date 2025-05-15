import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { IconMenu, IconMenu2, IconMenu3, IconShoppingBag, IconUser } from '@tabler/icons-react';
const data = [
    {
        "id": 1,
        "name": "Yeni Ana Kategori",
        "createdAt": "2025-05-11T17:58:09.487Z",
        "updatedAt": "2025-05-11T17:58:09.487Z",
        "categories": [
            {
                "id": 1,
                "name": "yeni alttt",
                "main_category_id": 1,
                "parent_category_id": null,
                "createdAt": "2025-05-11T18:17:10.155Z",
                "updatedAt": "2025-05-11T18:17:10.155Z",
                "categories": []
            }
        ]
    },
    {
        "id": 2,
        "name": "Yeni Ana Kategori",
        "createdAt": "2025-05-11T18:03:03.224Z",
        "updatedAt": "2025-05-11T18:03:03.224Z",
        "categories": []
    },
    {
        "id": 3,
        "name": "Bu ikinci katagory",
        "createdAt": "2025-05-11T18:17:54.009Z",
        "updatedAt": "2025-05-11T18:17:54.009Z",
        "categories": [
            {
                "id": 2,
                "name": "yeni 6655656",
                "main_category_id": 3,
                "parent_category_id": null,
                "createdAt": "2025-05-11T18:18:11.927Z",
                "updatedAt": "2025-05-11T18:18:11.927Z",
                "categories": [
                    {
                        "id": 3,
                        "name": "Kurutulmuş Meyveler",
                        "main_category_id": 3,
                        "parent_category_id": 2,
                        "createdAt": "2025-05-11T18:27:41.994Z",
                        "updatedAt": "2025-05-11T18:27:41.994Z"
                    }
                ]
            }
        ]
    },
    {
        "id": 4,
        "name": "Dursun",
        "createdAt": "2025-05-14T12:11:00.205Z",
        "updatedAt": "2025-05-14T12:11:00.205Z",
        "categories": []
    },
    {
        "id": 5,
        "name": "Dursun",
        "createdAt": "2025-05-14T12:11:20.167Z",
        "updatedAt": "2025-05-14T12:11:20.167Z",
        "categories": []
    },
    {
        "id": 6,
        "name": "Erkek",
        "createdAt": "2025-05-14T12:22:21.025Z",
        "updatedAt": "2025-05-14T12:22:21.025Z",
        "categories": [
            {
                "id": 4,
                "name": "Erkek Giyim",
                "main_category_id": 6,
                "parent_category_id": null,
                "createdAt": "2025-05-14T14:03:05.534Z",
                "updatedAt": "2025-05-14T14:03:05.534Z",
                "categories": []
            }
        ]
    },
    {
        "id": 7,
        "name": "benim ana katagorim",
        "createdAt": "2025-05-14T12:23:05.265Z",
        "updatedAt": "2025-05-14T12:23:05.265Z",
        "categories": []
    },
    {
        "id": 8,
        "name": "bu katagori eklendi",
        "createdAt": "2025-05-14T12:27:29.520Z",
        "updatedAt": "2025-05-14T12:27:29.520Z",
        "categories": []
    },
    {
        "id": 9,
        "name": "Bayan Giyim",
        "createdAt": "2025-05-14T14:20:43.267Z",
        "updatedAt": "2025-05-14T14:20:43.267Z",
        "categories": [
            {
                "id": 5,
                "name": "Topuklular",
                "main_category_id": 9,
                "parent_category_id": null,
                "createdAt": "2025-05-14T14:21:20.956Z",
                "updatedAt": "2025-05-14T14:21:20.956Z",
                "categories": []
            }
        ]
    },
    {
        "id": 10,
        "name": "new cat",
        "createdAt": "2025-05-14T15:34:38.737Z",
        "updatedAt": "2025-05-14T15:34:38.737Z",
        "categories": [
            {
                "id": 6,
                "name": "new-1",
                "main_category_id": 10,
                "parent_category_id": null,
                "createdAt": "2025-05-14T15:39:39.746Z",
                "updatedAt": "2025-05-14T15:39:39.746Z",
                "categories": []
            },
            {
                "id": 7,
                "name": "new-2",
                "main_category_id": 10,
                "parent_category_id": null,
                "createdAt": "2025-05-14T15:39:43.589Z",
                "updatedAt": "2025-05-14T15:39:43.589Z",
                "categories": [
                    {
                        "id": 8,
                        "name": "bu alan 2.kategori",
                        "main_category_id": 10,
                        "parent_category_id": 7,
                        "createdAt": "2025-05-14T15:40:01.897Z",
                        "updatedAt": "2025-05-14T15:40:01.897Z"
                    }
                ]
            }
        ]
    },
    {
        "id": 11,
        "name": "new cat",
        "createdAt": "2025-05-14T15:35:23.954Z",
        "updatedAt": "2025-05-14T15:35:23.954Z",
        "categories": []
    }
];
const Index = () => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [showDropdown, setShowDropdown] = useState(false);

    const handleMouseEnter = () => {
        setShowDropdown(true);
    };

    const handleMouseLeave = () => {
        setShowDropdown(false);
    };

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
                <div
                    className="relative w-full max-w-[1280px] mx-auto py-2 px-4 cursor-pointer"
                >
                    <div className="grid grid-cols-12">
                        {/* Tüm Kategoriler */}
                        <div
                            className="col-span-2 flex gap-2 hover:text-orange-500 duration-300 relative"
                            onMouseEnter={handleMouseEnter}
                        >
                            <IconMenu2 />
                            <span className="uppercase">Tüm Kategoriler</span>
                        </div>
                        {/* Diğer sabit kategoriler */}
                        <div className="col-span-1 hover:text-orange-500 duration-300">Kadın</div>
                        <div className="col-span-1 hover:text-orange-500 duration-300">Erkek</div>
                        <div className="col-span-1 hover:text-orange-500 duration-300">Kozmetik</div>
                        <div className="col-span-1 hover:text-orange-500 duration-300">Bisiklet</div>
                        <div className="col-span-1 hover:text-orange-500 duration-300">Motor</div>
                        <div className="col-span-1 hover:text-orange-500 duration-300">Aksesuar</div>
                        <div className="col-span-1 hover:text-orange-500 duration-300">Elektronik</div>
                        <div className="col-span-1 hover:text-orange-500 duration-300">Spor</div>
                        <div className="col-span-1 hover:text-orange-500 duration-300">Hobi</div>
                        <div className="col-span-1 hover:text-orange-500 duration-300">Oyuncak</div>
                    </div>
                    {/* Dropdown ekran genişliği kadar ve mouseLeave ile kapanıyor */}
                    {showDropdown && (
                        <div
                            className="absolute top-[2.6rem] right-0 left-0  bg-white shadow-md z-50 rounded-b-xl"
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="max-w-[1280px] mx-auto grid grid-cols-12 gap-4 p-6">
                                <div className='col-span-2 bg-red-400'>
                                    <div className='flex flex-col'>
                                        {
                                            data.map((oItem, oIndex) => {
                                                return (
                                                    <div key={oIndex} className={`${oIndex % 2 == 0 ? "bg-orange-50 hover:bg-orange-300" : "bg-orange-100 hover:bg-orange-400"} border-b border-orange-200 p-2 duration-300`}>
                                                        {oItem.name}
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div className='col-span-8'>
                                    <div>Kadın Giyim</div>
                                    <div>Erkek Giyim</div>
                                    <div>Kozmetik</div>
                                    <div>Bisiklet</div>
                                    <div>Motor</div>
                                    <div>Aksesuar</div>
                                    <div>Elektronik</div>
                                    <div>Spor</div>
                                    <div>Hobi</div>
                                    <div>Oyuncak</div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Index;
