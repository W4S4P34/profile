import { lazy } from "react";

export default {
	path: "/",
	index: false,
	caseSensitive: false,
	element: lazy(() => import(".")),
	props: null
};
