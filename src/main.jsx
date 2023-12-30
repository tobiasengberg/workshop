import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Root from "./routes/root.jsx";
import ErrorPage from "./error-page.jsx";
import View, { loader as viewLoader} from "./routes/view.jsx";
import Views , { loader as viewsLoader } from "./routes/views.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/views",
                element: <Views />,
                loader: viewsLoader,
                children: [
                    {
                        path: ":viewId",
                        loader: viewLoader,
                        element: <View />,
                    }
                ]
            },
            {
                path: "/drags",
                element: <Views />,
                loader: viewsLoader,
                children: [
                    {
                        path: "/drags/:viewId",
                        element: <View />,
                        loader: viewLoader,
                    }
                ]
            }

        ]
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
