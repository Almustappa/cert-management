import React, { Suspense, lazy } from 'react'
import { Navigate } from 'react-router-dom'

const Arc0301 = lazy(() => import("../page/arc03/Arc0301"))
const Arc0302 = lazy(() => import("../page/arc03/Arc0302"))
const Arc0303 = lazy(() => import("../page/arc03/Arc0303"))
const Arc0304 = lazy(() => import("../page/arc03/Arc0304"))
const Arc0305 = lazy(() => import("../page/arc03/Arc0305"))
const Arc0306 = lazy(() => import("../page/arc03/Arc0306"))

const arc03Router = () => {
  return [
    { path: "", element: <Navigate to="0301" /> },
    {
        path: "0301",
        element: (
            <Suspense fallback={<div>Loading</div>}>
                <Arc0301 />
            </Suspense>
        ),
    },

    {
        path: "0302",
        element: (
            <Suspense fallback={<div>Loading</div>}>
                <Arc0302 />
            </Suspense>
        ),
    },

    {
        path: "0303",
        element: (
            <Suspense fallback={<div>Loading</div>}>
                <Arc0303 />
            </Suspense>
        ),
    },

    {
        path: "0304",
        element: (
            <Suspense fallback={<div>Loading</div>}>
                <Arc0304 />
            </Suspense>
        ),
    },

    {
        path: "0305",
        element: (
            <Suspense fallback={<div>Loading</div>}>
                <Arc0305 />
            </Suspense>
        ),
    },

    {
        path: "0306",
        element: (
            <Suspense fallback={<div>Loading</div>}>
                <Arc0306 />
            </Suspense>
        ),
    },
  ];
};

export default arc03Router