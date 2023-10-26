import API from '@root/api/axiosConfig';

interface IRequestParams{
    skip: number;
    limit: number;
}

export interface IProduct {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
    colors: string[];
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
    static async getProductDetail(id: any) {
        const response = await API.get(`/products/${id}`);
        return response.data;
    }
    static async getProductsRelated(category: string) {
        const response = await API.get(`/products/category/${category}`);
        return response.data;
    }
}