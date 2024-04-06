// New api function for assignment 5:
import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:5000';

// Fetches details for products
export const fetchProducts = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/products`);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error; // Rethrow to allow caller to handle
    }
};