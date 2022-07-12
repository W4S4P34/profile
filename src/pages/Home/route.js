import { lazy } from 'react'

export default {
    path: "/home",
    index: false,
    caseSensitive: true,
    element: lazy(() => import(".")),
    props: null
}