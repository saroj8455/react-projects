import { useState } from "react";

import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
// import 'primereact/resources/primereact.css';
import "primeicons/primeicons.css"; //icons
import "primeflex/primeflex.css"; // flex
import Welcome from "./components/Welcome";
import Mainlayout from "./Layout/Mainlayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
// import Home from './pages/Home';
import About from "./pages/About";
import ReactPage from "./Pages/ReactPage";
import Home from "./Pages/Home";
import ProductPagination from "./Pages/ProductPagination";
import MediumPost from "./Pages/MediumPost";
import Contact from "./Pages/Contact";
import Customer from "./Components/Customer";
import HookForm from "./Pages/HookForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "react-page",
        element: <ReactPage />,
      },
      {
        path: "products",
        element: <ProductPagination />,
      },
      {
        path: "post",
        element: <MediumPost />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "customer",
        element: <Customer />,
      },
      {
        path: "hook-form",
        element: <HookForm />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
