import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About";
import Cart from "../Pages/Cart";
import Home from "../Pages/Home";
import TopRated from "../Pages/TopRated";


export const router =createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "about",
            element: <About />,
          },
          {
            path: "top-rated",
            element: <TopRated />,
          },
          {
            path: "cart",
            element: <Cart />,
          },
        ],
      },

])