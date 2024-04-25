import React, { Suspense, lazy } from 'react'
import { Navigate } from 'react-router-dom'

const Arc0101 = lazy(() => import("../page/arc01/Arc0101"))
const Arc0102 = lazy(() => import("../page/arc01/Arc0102"))
const Arc0103 = lazy(() => import("../page/arc01/Arc0103"))
const Arc0104 = lazy(() => import("../page/arc01/Arc0104"))
const Arc0105 = lazy(() => import("../page/arc01/Arc0105"))

const arc01Router = () => {
  return [
    { path: "", element: <Navigate to="0101" /> },
    {
        path: "0101",
        element: (
            <Suspense fallback={<div>Loading</div>}>
                <Arc0101 />
            </Suspense>
        ),
    },

    {
        path: "0102",
        element: (
            <Suspense fallback={<div>Loading</div>}>
                <Arc0102 />
            </Suspense>
        ),
    },

    {
        path: "0103",
        element: (
            <Suspense fallback={<div>Loading</div>}>
                <Arc0103 />
            </Suspense>
        ),
    },

    {
        path: "0104",
        element: (
            <Suspense fallback={<div>Loading</div>}>
                <Arc0104 />
            </Suspense>
        ),
    },

    {
        path: "0105",
        element: (
            <Suspense fallback={<div>Loading</div>}>
                <Arc0105 />
            </Suspense>
        ),
    },
  ];
};

export default arc01Router