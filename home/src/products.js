const API_SERVER = 'http://localhost:8080';

export const getProducts = async () => {
    const response = await fetch(`${API_SERVER}/products`);
    return await response.json();
}

export const getProductById = async (id) => {
    const response = await fetch(`${API_SERVER}/products/${id}`);
    return await response.json();
}

export const currency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});