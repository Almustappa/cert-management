import React, { Suspense, lazy } from 'react'
import { Navigate } from 'react-router-dom'

const Arc0401 = lazy(() => import("../page/arc04/Arc0401"))
const Arc040100 = lazy(() => import("../page/arc04/Arc040100"))

const Arc0402 = lazy(() => import("../page/arc04/Arc0402"))
const Arc0403 = lazy(() => import("../page/arc04/Arc0403"))
const Arc0404 = lazy(() => import("../page/arc04/Arc0404"))
const Arc0405 = lazy(() => import("../page/arc04/Arc0405"))
const Arc0406 = lazy(() => import("../page/arc04/Arc0406"))
const Arc0407 = lazy(() => import("../page/arc04/Arc0407"))
const Arc0408 = lazy(() => import("../page/arc04/Arc0408"))
const Arc0409 = lazy(() => import("../page/arc04/Arc0409"))
const Arc0410 = lazy(() => import("../page/arc04/Arc0410"))

const arc04Router = () => {
  return [
    { path: "", element: <Navigate to="0401" /> },
    {
        path: "0401",
        element: (
            <Suspense fallback={<div>Loading</div>}>
                <Arc0401 />
            </Suspense>
        ),
    },

    {
        path: "040100",
        element: (
            <Suspense fallback={<div>Loading</div>}>
                <Arc040100 />
            </Suspense>
        ),
    },

    {
        path: "0402",
        element: (
            <Suspense fallback={<div>Loading</div>}>
                <Arc0402 />
            </Suspense>
        ),
    },

    {
        path: "0403",
        element: (
            <Suspense fallback={<div>Loading</div>}>
                <Arc0403 />
            </Suspense>
        ),
    },

    {
        path: "0404",
        element: (
            <Suspense fallback={<div>Loading</div>}>
                <Arc0404 />
            </Suspense>
        ),
    },

    {
        path: "0405",
        element: (
            <Suspense fallback={<div>Loading</div>}>
                <Arc0405 />
            </Suspense>
        ),
    },

    {
        path: "0406",
        element: (
            <Suspense fallback={<div>Loading</div>}>
                <Arc0406 />
            </Suspense>
        ),
    },

    {
        path: "0407",
        element: (
            <Suspense fallback={<div>Loading</div>}>
                <Arc0407 />
            </Suspense>
        ),
    },

    {
        path: "0408",
        element: (
            <Suspense fallback={<div>Loading</div>}>
                <Arc0408 />
            </Suspense>
        ),
    },

    {
        path: "0409",
        element: (
            <Suspense fallback={<div>Loading</div>}>
                <Arc0409 />
            </Suspense>
        ),
    },

    {
        path: "0410",
        element: (
            <Suspense fallback={<div>Loading</div>}>
                <Arc0410 />
            </Suspense>
        ),
    },
  ];
};

export default arc04Router