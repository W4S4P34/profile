import { lazy } from 'react'

export default {
    path: "/blogs",
    index: false,
    caseSensitive: true,
    element: lazy(() => import(".")),
    props: null
}