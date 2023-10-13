import API from '@root/api/axiosConfig';

export default class ProductService {
    static async getProducts({skip, limit}: {skip: number, limit: number}) {
        const response = await API.get('/products', {params: {skip, limit}});
        return response.data;
    }
}