import AddReview from "../components/AddReview/AddReview";
import AllReview from "../components/AllReview/AllReview";
import Calendars from "../components/Calenders/Calenders";

import ErrorPage from "../components/ErrorPage/ErrorPage";
import FAQ from "../components/FAQ";
import GameWatchList from "../components/GameWatchList/GameWatchList";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import MyReview from "../components/MyReview/MyReview";
import UpdateReview from "../components/MyReview/UpdateReview";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import ProductDetailsPage from "../components/ProductDetails/ProductDetailsPage";
import Registration from "../components/Registration/Registration";
import Root from "../components/Root/Root";
import { createBrowserRouter } from "react-router-dom";
import UniqueTable from "../components/UniqueTable/UniqueTable";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/"),
      },

      {
        path: "/home",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/"),
      },

      {
        path: "/allReviews",
        element: <AllReview />,
        loader: () => fetch("http://localhost:5000/blogs"),
      },
      {
        path: "/addReviews",
        element: (
          <PrivateRoute>
            <AddReview />
          </PrivateRoute>
        ),
      },



    //   {
    //     path: "/myReviews",
    //     element: (
    //       <PrivateRoute>
    //         <MyReview />
    //       </PrivateRoute>
    //     ),
    //     loader: () => fetch("http://localhost:5000/blogs"),
    //   },


      {
        path: "/gameWatchList",
        element: (
          <PrivateRoute>
            <GameWatchList />
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/watchlist"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },

      {
        path: "/product-details/:title",
        element:  <PrivateRoute><ProductDetailsPage /></PrivateRoute>,
        loader: () => fetch("http://localhost:5000/blogs"),
      },

      {
        path: "/faq",
        element: <FAQ />,
      },

      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateReview />
          </PrivateRoute>
        ),
        loader: () => fetch(`http://localhost:5000/blogs`),
      },

      {
        path: "/calendar",
        element: <Calendars />,
      },


      {
        path: "/unique",
        element: <UniqueTable/>,
        loader: () => fetch("http://localhost:5000/blogs"),
      },



      


    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
