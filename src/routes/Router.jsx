import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import How_it_works from "../components/How_it_works/How_it_works";
import All_Companies from "../components/Company/All_Companies";
import HomeLayout from "../pages/HomeLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                path: '',
                Component: HomeLayout
            },
        ]
    },
]);