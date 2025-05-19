import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { IconMenu, IconMenu2, IconMenu3, IconMinus, IconPlus, IconShoppingBag, IconTrash, IconUser } from '@tabler/icons-react';
import { useCardData } from '../../context/CartContext';


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
    const { cardItems, setCardItems } = useCardData();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorElShopp, setAnchorElShopp] = React.useState(null);
    // const [cartData, setCartData] = useState([]);

    const [showDropdown, setShowDropdown] = useState(false);

    const handleClickShopp = (event) => {
        setAnchorElShopp(event.currentTarget);
    };
    const openShopp = Boolean(anchorElShopp);
    const idShopp = openShopp ? 'simple-popover' : undefined;

    const handleCloseShopp = () => {
        setAnchorElShopp(null);
    };

    console.log({ cardItems });


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

    useEffect(() => {
        const stored = localStorage?.getItem("cardItem");
        if (stored) {
            try {
                setCardItems(JSON.parse(stored));
            } catch (err) {
                console.error("JSON parse hatası:", err);
            }
        }
    }, []);



    const deleteCartItem = (id) => {
        const updatedItems = cardItems?.filter(item => item.cardId !== id);
        localStorage?.setItem('cardItem', updatedItems);
        setCardItems(updatedItems);
    };

    const editCardItem = (id, isIncrease) => {
        const updatedCart = cardItems.map(item => {
            if (item.cardId === id) {
                let newQuantity = isIncrease ? item.quantity + 1 : item.quantity - 1;
                newQuantity = Math.max(newQuantity, 1);
                return { ...item, quantity: newQuantity };
            }
            return item;
        });

        setCardItems(updatedCart);
        localStorage.setItem('cardItem', JSON.stringify(updatedCart));
    };

    const resetCardItems = () => {
        setCardItems([]);
        localStorage.setItem('cardItem', []);
    };



    return (
        <div className='flex items-center'>
            <div className='w-full flex flex-col gap-2'>
                <div className='!p-4 w-full flex justify-between max-w-[1280px] !mx-auto'>
                    <Link to="/" className='flex items-center text-3xl font-medium'>Sarissa</Link>
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
                                aria-describedby={idShopp} variant="contained" onClick={handleClickShopp}
                                className='flex items-center !px-4 !py-2 rounded-xl cursor-pointer gap-1 outline-none group'
                            >
                                <IconShoppingBag className='h-5 group-hover:text-orange-500 duration-300' /> <span className='text-md group-hover:text-orange-500 duration-300'>Sepetim <span className='text-rose-500'>({cardItems.length})</span></span>
                            </button>
                            <Popover
                                id={idShopp}
                                open={openShopp}
                                anchorEl={anchorElShopp}
                                onClose={handleCloseShopp}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'center',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                }}
                                PaperProps={{
                                    sx: {
                                        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.08)', // hafif gölge
                                        border: '1px solid #e0e0e0',                  // açık gri border
                                        borderRadius: 2,                              // köşeleri biraz yumuşat
                                    },
                                }}
                            >
                                <div className='w-[30rem]'>
                                    {
                                        cardItems && cardItems.length > 0 ?
                                            <div className='relative flex flex-col gap-4 max-h-[30rem] overflow-auto'>
                                                <div className='sticky top-0 font-medium text-xl bg-white p-[1rem] border-b border-slate-200'> Sepetim <span className='text-rose-400'>({cardItems.length})</span></div>
                                                {
                                                    cardItems && cardItems.length > 0 &&
                                                    cardItems.map((oItem, oIndex) => {
                                                        return (
                                                            <div key={oIndex} className='flex justify-between gap-4 bg-slate-50 border border-slate-100 shadow-sm rounded-xl p-4 mx-[1rem]'>
                                                                <div className='flex gap-2'>
                                                                    <img src={oItem.Image1} className='h-[5rem]' alt="" />
                                                                    <div className='text-sm font-medium uppercase'>{oItem.Brand} <span className='font-normal normal-case'>{oItem.Name}</span> </div>
                                                                </div>
                                                                <div className='flex flex-col gap-2'>
                                                                    <button onClick={() => deleteCartItem(oItem.cardId)} className='flex justify-end'><IconTrash className='h-[1.2rem] text-rose-600 hover:bg-rose-200 rounded-full duration-300 cursor-pointer' /></button>
                                                                    <div className='font-medium text-orange-500 text-end'> {parseInt(oItem.trendyol_salePrice) * oItem.quantity} TL </div>
                                                                    <div className='flex justify-between items-center bg-white w-[6rem] px-2 py-1 rounded-full'>
                                                                        <button onClick={() => editCardItem(oItem.cardId, false)} className='flex justify-center items-center rounded-full bg-slate-50 border border-slate-200 w-[1.2rem] h-[1.2rem] hover:bg-rose-100 duration-300 cursor-pointer'> <IconMinus className='text-slate-600 h-[1.2rem]' /> </button>
                                                                        <input type="text" className='w-[1.5rem] outline-none font-semibold text-center py-1' value={cardItems[oIndex].quantity} />
                                                                        <button onClick={() => editCardItem(oItem.cardId, true)} className='flex justify-center items-center rounded-full bg-slate-50 border border-slate-200 w-[1.2rem] h-[1.2rem] hover:bg-green-100 duration-300 cursor-pointer'> <IconPlus className='text-slate-600 h-[1.2rem]' /> </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })

                                                }
                                                <div className='sticky bottom-0 flex justify-end p-[1rem] bg-white'>
                                                    <button onClick={() => resetCardItems()} className='bg-white text-rose-500 text-rose-500 px-4 py-2 rounded-full border border-rose-500 hover:bg-rose-50 duration-300 cursor-pointer mx-2'>Sepeti Kaldır</button>
                                                    <button className='bg-green-500 text-white text-green-500 px-4 py-2 rounded-full hover:bg-green-600 duration-300 cursor-pointer'>Sepeti Onayla</button>
                                                </div>
                                            </div>
                                            :
                                            <div className='flex flex-col justify-between gap-4 bg-slate-50 border border-slate-100 shadow-sm rounded-xl p-4'>
                                                <div className='text-xl font-medium text-center text-slate-800'>Sepetinizde Ürün Bulunmamaktadır</div>
                                                <button className='bg-orange-500 text-white px-4 py-2 rounded-full cursor-pointer hover:bg-orange-600 duration-300'>Alışverişe Git</button>
                                            </div>
                                    }
                                </div>
                            </Popover>
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
                        {
                            data && data.length > 0 &&
                            data.map((oItem, oIndex) => {
                                if (oIndex < 5) {
                                    return (
                                        <div key={oIndex} className="col-span-2 hover:text-orange-500 duration-300 truncate">
                                            {oItem.name}
                                        </div>
                                    );
                                }
                                return null;
                            })
                        }


                    </div>
                    {/* Dropdown ekran genişliği kadar ve mouseLeave ile kapanıyor */}
                    {showDropdown && (
                        <div
                            className="absolute top-[2.6rem] right-0 left-0  bg-white shadow-md z-50 rounded-b-xl"
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="max-w-[1280px] mx-auto grid grid-cols-12 gap-4 p-6">

                                {
                                    data.map((oItem, oIndex) => {
                                        return (
                                            <div key={oIndex} className={`${oIndex % 2 == 0 ? "bg-slate-50" : "bg-slate-100"} col-span-2 border border-slate-200 rounded-xl p-2 duration-300 `}>

                                                <div>
                                                    <span className='underline text-blue-500 hover:text-blue-700 duration-300'>{oItem.name}</span>

                                                    {
                                                        oItem.categories.map((item, index) => {
                                                            return (
                                                                <div key={index} className='ps-3'>
                                                                    <span className='underline text-blue-500 hover:text-blue-700 duration-300'> {item.name}</span>

                                                                    {
                                                                        item.categories.map((subItem, subIndex) => {
                                                                            return (
                                                                                <div key={subIndex} className='ps-3'>
                                                                                    <span className='underline text-blue-500 hover:text-blue-700 duration-300'>{subItem.name}</span>

                                                                                </div>
                                                                            )
                                                                        })
                                                                    }
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        )
                                    })
                                }


                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Index;
