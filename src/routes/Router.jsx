import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import How_it_works from "../components/How_it_works/How_it_works";
import All_Companies from "../components/Company/All_Companies";
import HomeLayout from "../pages/HomeLayout";
import CompanyDetails from "../pages/CompanyDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: HomeLayout, 
            },
            {
                path: '/company-details/:id',
                Component: CompanyDetails,
                loader: () => fetch('/main-company.json')
            }
        ]
    },
]);