import Client from './api';

export const GetAllRestaurants = async () => {
    try {
        const res = await Client.get(`/restaurant`);
        return res.data;
    } catch (err) {
        throw err;
    }
};

export const GetMenuById = async (restaurantId) => {
    try {
        const res = await Client.get(`/menu/${restaurantId}`)
        return res.data;
    } catch (err) {
        throw err;
    }
};

export const CreateRestaurant = async (restaurant) => {
    try {
        const res = await Client.post(`/restaurant/create`, restaurant)
        return res.data;
    } catch (err) {
        throw err;
    }
};

export const CreateMenu = async (menu) => {
    try {
        const res = await Client.post(`/menu/create`, menu)
        return res.data;
    } catch (err) {
        throw err;
    }
};

export const UpdateMenu = async (restaurantId, newMenuItem) => {
    try {
        const res = await Client.put(`/menu/${restaurantId}`, newMenuItem)
        return res.data;
    } catch (err) {
        throw err;
    }
};

export const DeleteRestaurantById = async (restaurantId) => {
    try {
        const res = await Client.delete(`/restaurant/${restaurantId}`)
        return res.data;
    } catch (err) {
        throw err;
    }
};

export const DeleteMenuById = async (menuId) => {
    try {
        const res = await Client.delete(`/menu/${menuId}`)
        return res.data;
    } catch (err) {
        throw err;
    }
};