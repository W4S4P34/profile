import { lazy } from 'react'

export default {
    path: "/",
    index: false,
    caseSensitive: true,
    element: lazy(() => import(".")),
    props: { name: "SAMUEL" }
}