import React, { Suspense, lazy } from 'react'
import { Navigate } from 'react-router-dom'

const Arc0201 = lazy(() => import("../page/arc02/Arc0201"))
const Arc0202 = lazy(() => import("../page/arc02/Arc0202"))
const Arc0203 = lazy(() => import("../page/arc02/Arc0203"))
const Arc0204 = lazy(() => import("../page/arc02/Arc0204"))
const Arc0205 = lazy(() => import("../page/arc02/Arc0205"))
const Arc0206 = lazy(() => import("../page/arc02/Arc0206"))
const Arc0207 = lazy(() => import("../page/arc02/Arc0207"))

const arc02Router = () => {
  return [
    { path: "", element: <Navigate to="0201" /> },
    {
        path: "0201",
        element: (
            <Suspense fallback={<div>Loading</div>}>
                <Arc0201 />
            </Suspense>
        ),
    },

    {
        path: "0202",
        element: (
            <Suspense fallback={<div>Loading</div>}>
                <Arc0202 />
            </Suspense>
        ),
    },

    {
        path: "0203",
        element: (
            <Suspense fallback={<div>Loading</div>}>
                <Arc0203 />
            </Suspense>
        ),
    },

    {
        path: "0204",
        element: (
            <Suspense fallback={<div>Loading</div>}>
                <Arc0204 />
            </Suspense>
        ),
    },

    {
        path: "0205",
        element: (
            <Suspense fallback={<div>Loading</div>}>
                <Arc0205 />
            </Suspense>
        ),
    },

    {
        path: "0206",
        element: (
            <Suspense fallback={<div>Loading</div>}>
                <Arc0206 />
            </Suspense>
        ),
    },

    {
        path: "0207",
        element: (
            <Suspense fallback={<div>Loading</div>}>
                <Arc0207 />
            </Suspense>
        ),
    },
  ];
};

export default arc02Router