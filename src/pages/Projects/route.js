import { lazy } from 'react'

export default {
    path: "/projects",
    index: false,
    caseSensitive: true,
    element: lazy(() => import(".")),
    props: null
}