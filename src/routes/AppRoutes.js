import * as React from "react";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import { ROUTE_CONSTANTS } from "../constants/routeConstants";
import CrewInitializationPage from "../pages/crewInitializationPage/CrewInitializationPage";
import Home from "../pages/home/Home";
import ErrorPage from "../pages/errorPage/ErrorPage";

const AppRoutes = () => {    
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route>
                <Route exact path={ROUTE_CONSTANTS.HOME} element={<Home/>}/>
                <Route path={ROUTE_CONSTANTS.CREW_PAGE} element={<CrewInitializationPage />} />
                <Route path='*' element={<ErrorPage />} />
            </Route>
        ),
    );

    return <RouterProvider router={router} />;
}

export default AppRoutes;

