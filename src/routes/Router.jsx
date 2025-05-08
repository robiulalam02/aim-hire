import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import How_it_works from "../components/How_it_works/How_it_works";
import All_Companies from "../components/Company/All_Companies";
import HomeLayout from "../pages/HomeLayout";
import CompanyDetails from "../pages/CompanyDetails";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Profile from "../components/Profile/Profile";
import Update_Profile from "../components/Profile/Update_Profile";

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
            },
            {
                path: '/auth/login',
                Component: Login
            },
            {
                path: '/auth/register',
                Component: Register
            },
            {
                path: '/my-profile',
                Component: Profile
            },
            {
                path: '/update-profile',
                Component: Update_Profile
            }
        ]
    },
]);