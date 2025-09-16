import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import MainLayout from "../Layouts/MainLayout";
import Favorites from "../Pages/Favorites";
import About from "../Pages/About";
import PhoneDetails from "../Pages/PhoneDetails";
import ErrorPage from "../Pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        loader:()=>fetch('/phone.json'),
        Component: Home,
      },
      {
        path: "/favorites",
        Component: Favorites,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/phone-details/:id",
        Component: PhoneDetails,
      },
    ],
  },
]);
