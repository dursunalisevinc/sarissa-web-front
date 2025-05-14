import axios from "axios";

const token = localStorage?.getItem('token');
const createMainCategory = async (categoryName) => {
    try {
        const response = await axios.post(
            'http://localhost:5000/api/categories/add-main-category',
            { name: categoryName },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }
        );
        console.log('Ana kategori başarıyla eklendi:', response.data);
        return response.data;
    } catch (error) {
        console.error('Ana kategori eklenirken bir hata oluştu:', error.response ? error.response.data : error.message);
        throw error;
    }
};

export { createMainCategory };