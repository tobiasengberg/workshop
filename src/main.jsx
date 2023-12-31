import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Root from "./routes/root.jsx";
import ErrorPage from "./error-page.jsx";
import View, { loader as viewLoader } from "./routes/view.jsx";
import Views , { loader as viewsLoader } from "./routes/views.jsx";
import Drags, { loader as dragsLoader } from "./routes/drags.jsx";
import D3s, { loader as d3sLoader } from "./routes/d3s.jsx";
import Threes, { loader as threesLoader } from "./routes/threes.jsx";
import Drag, { loader as dragLoader} from "./routes/drag.jsx";
import D3, { loader as d3Loader } from "./routes/d3.jsx";
import Three, {loader as threeLoader } from "./routes/three.jsx";
import Gsaps, { loader as gsapsLoader } from "./routes/gsaps.jsx";
import Gsap, { loader as gsapLoader } from "./routes/gsap.jsx";

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
                element: <Drags />,
                loader: dragsLoader,
                children: [
                    {
                        path: ":dragsId",
                        element: <Drag />,
                        loader: dragLoader,
                    }
                ]
            },
            {
                path: "/d3",
                element: <D3s />,
                loader: d3sLoader,
                children: [
                    {
                        path: ":d3Id",
                        element: <D3 />,
                        loader: d3Loader,
                    }
                ]
            },
            {
                path: "/three",
                element: <Threes />,
                loader: threesLoader,
                children: [
                    {
                        path: ":threeId",
                        element: <Three />,
                        loader: threeLoader,
                    }
                ]
            },
            {
                path: "/gsap",
                element: <Gsaps />,
                loader: gsapsLoader,
                children: [
                    {
                        path: ":gsapId",
                        element: <Gsap />,
                        loader: gsapLoader,
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
