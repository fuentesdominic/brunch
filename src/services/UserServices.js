import Client from './api';

export const GetAllRestaurants = async () => {
    try {
        const res = await Client.get(`/restaurant`);
        return res.data;
    } catch (err) {
        throw err;
    }
};

export const GetAllMenus = async () => {
    try {
        const res = await Client.get('/menu')
        return res.data;
    } catch (err) {
        throw err;
    }
};