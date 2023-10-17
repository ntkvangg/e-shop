import API from '@root/api/axiosConfig';

interface IRequestParams{
    skip: number;
    limit: number;
}

export default class ProductService {
    static async getBestSellingProducts({skip, limit}: IRequestParams) {
        const response = await API.get('/products', {params: {skip, limit}});
        return response.data;
    }
    static async getFlashSaleProducts({skip, limit}: IRequestParams) {
        const response = await API.get('/products', {params: {skip, limit}});
        return response.data;
    }
    static async getExploreOurProducts({skip, limit}: IRequestParams) {
        const response = await API.get('/products', {params: {skip, limit}});
        return response.data;
    }
}