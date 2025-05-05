import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import How_it_works from "../components/How_it_works/How_it_works";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: How_it_works
            }
        ]
    },
]);