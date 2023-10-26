import React from "react";

const Home = React.lazy(() => import("@pages/Home"));
const Contact = React.lazy(() => import("@pages/Contact"));
const FlashSales = React.lazy(() => import("@pages/FlashSales"));
const ProductDetail = React.lazy(() => import("@pages/ProductDetail"));

const publicRoutes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/contact-us",
        component: Contact,
    },
    {
        path: "/flash-sale",
        component: FlashSales
    },
    {
        path: "/product-detail/:id",
        component: ProductDetail
    }
    // {
    //     path: "/profile",
    //     component: Profile
    // },
    // {
    //     path: "/upload",
    //     component: Upload,
    //     // layout: HeaderOnly
    // }
];
const privateRoutes: any = [];
export { publicRoutes, privateRoutes}
