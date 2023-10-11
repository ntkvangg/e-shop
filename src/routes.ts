import React from "react";

const Home = React.lazy(() => import("@pages/Home"));
const Contact = React.lazy(() => import("@pages/Contact"));

const publicRoutes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/contact-us",
        component: Contact,
    },
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
