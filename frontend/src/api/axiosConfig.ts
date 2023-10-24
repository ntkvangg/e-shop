import axios from 'axios';
const instance = axios.create({
    baseURL: "https://dummyjson.com",
    timeout: 2500,
});
import { store } from '@root/stores';
import { startLoading, finishLoading } from '@root/stores/slices/loadingSlice';
instance.interceptors.request.use(function (config) {
    store.dispatch(startLoading());
    return config;
}, function (error) {
    store.dispatch(finishLoading());
    return Promise.reject(error);
});

instance.interceptors.response.use(function (response) {
    store.dispatch(finishLoading());
    return response;
}, function (error) {
    return Promise.reject(error);
})

export default instance;
