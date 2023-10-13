import React, {Suspense} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "@root/routes";
import DefaultLayout  from "@common/DefaultLayout";
import "./App.css";



function App() {
    return (
        <Router>
            <Routes>
                {publicRoutes.map((route: any, index) => {
                    const Layout = route.layout || DefaultLayout;
                    const Page = route.component;
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Suspense fallback={<p>Loading....</p>}>
                                        <Page />
                                    </Suspense>
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </Router>
    );
}

export default App;
