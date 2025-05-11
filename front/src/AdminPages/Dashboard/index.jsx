import axios from 'axios';
import React, { useEffect } from 'react';

const Index = () => {
    const token = localStorage?.getItem('token');
    console.log(token);

    const getUsers = async (token) => {
        try {
            const response = await axios.get('http://localhost:5000/api/users', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log('Kullanıcılar:', response.data);
        } catch (error) {
            console.error('Kullanıcılar alınamadı:', error.response?.data || error.message);
            throw error;
        }
    };

    useEffect(() => {
        if (token) {
            getUsers(token);
        }
    }, [token]);

    return (
        <div>
            Admin sayfası burasıdır
        </div>
    );
};

export default Index;
