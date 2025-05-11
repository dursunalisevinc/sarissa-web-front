import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

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
        <div className='flex items-center h-[4rem] bg-slate-300'>
            <div className='w-full flex justify-between max-w-[1280px] !mx-auto'>
                <div className='flex items-center'>
                    Brand
                </div>
                <div className='flex gap-4'>
                    <div>
                        <button
                            aria-describedby={id} variant="contained" onClick={handleClick}
                            className='bg-blue-500 !px-4 !py-2 rounded-xl text-white cursor-pointer'

                        >
                            Giriş Yap
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
                                <button onClick={() => navigate('/login')} className='!p-2 bg-slate-200 rounded-lg cursor-pointer hover:bg-slate-300 duration-300'>
                                    Giriş Yap
                                </button>
                                <button onClick={() => navigate('/register')} className='!p-2 bg-slate-400 rounded-lg cursor-pointer hover:bg-slate-500 duration-300'>
                                    Üye Ol
                                </button>
                            </div>
                        </Popover>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index;
