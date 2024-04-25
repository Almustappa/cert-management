import arc01Router from "./arc01Router";
import arc02Router from "./arc02Router";
import arc03Router from "./arc03Router";
import arc04Router from "./arc04Router";
import arc05Router from "./arc05Router";

const { Suspense, lazy } = require("react");
const { createBrowserRouter } = require("react-router-dom");

const MainPage = lazy(() => import("../page/main/MainPage"));
const Arc0100 = lazy(() => import("../page/arc01/Arc0100"));
const Arc0200 = lazy(() => import("../page/arc02/Arc0200"));
const Arc0300 = lazy(() => import("../page/arc03/Arc0300"));
const Arc0400 = lazy(() => import("../page/arc04/Arc0400"));
const Arc0500 = lazy(() => import("../page/arc05/Arc0500"));

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Suspense fallback={<div>Loading</div>}>
                <MainPage />
            </Suspense>
        ),
    }, 

    {
        path: "/arc01/",
        element: (
            <Suspense fallback={<div>Loading</div>}>
               <Arc0100 />
            </Suspense>
        ),
        children: arc01Router(),
    }, 

    {
        path: "/arc02/",
        element: (
            <Suspense fallback={<div>Loading</div>}>
                <Arc0200 />
            </Suspense>
        ),
        children: arc02Router(),
    }, 

    {
        path: "/arc03/",
        element: (
            <Suspense fallback={<div>Loading</div>}>
                <Arc0300 />
            </Suspense>
        ),
        children: arc03Router(),
    }, 

    {
        path: "/arc04/",
        element: (
            <Suspense fallback={<div>Loading</div>}>
                <Arc0400 />
            </Suspense>
        ),
        children: arc04Router(),
    }, 

    {
        path: "/arc05/",
        element: (
            <Suspense fallback={<div>Loading</div>}>
                <Arc0500 />
            </Suspense>
        ),
        children: arc05Router(),
    }, 
])

export default router;