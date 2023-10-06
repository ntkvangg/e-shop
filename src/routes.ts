import React from "react";

const Home = React.lazy(() => import("@pages/Home"));


const publicRoutes = [
    {
        path: "/",
        component: Home,
    },
    // {
    //     path: "/follwing",
    //     component: Following,
    // },
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
