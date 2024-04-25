import React, { Suspense, lazy } from 'react'
import { Navigate } from 'react-router-dom'

const Arc0501 = lazy(() => import("../page/arc05/Arc0501"))
const Arc0502 = lazy(() => import("../page/arc05/Arc0502"))
const Arc0503 = lazy(() => import("../page/arc05/Arc0503"))
const Arc0504 = lazy(() => import("../page/arc05/Arc0504"))

const arc05Router = () => {
  return [
    { path: "", element: <Navigate to="0501" /> },
    {
        path: "0501",
        element: (
            <Suspense fallback={<div>Loading</div>}>
                <Arc0501 />
            </Suspense>
        ),
    },

    {
        path: "0502",
        element: (
            <Suspense fallback={<div>Loading</div>}>
                <Arc0502 />
            </Suspense>
        ),
    },

    {
        path: "0503",
        element: (
            <Suspense fallback={<div>Loading</div>}>
                <Arc0503 />
            </Suspense>
        ),
    },

    {
        path: "0504",
        element: (
            <Suspense fallback={<div>Loading</div>}>
                <Arc0504 />
            </Suspense>
        ),
    },
  ];
};

export default arc05Router