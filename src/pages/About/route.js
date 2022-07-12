import { lazy } from 'react'

export default {
    path: "/about",
    index: false,
    caseSensitive: true,
    element: lazy(() => import(".")),
    props: { name: "SAMUEL" }
}