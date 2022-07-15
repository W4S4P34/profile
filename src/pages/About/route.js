import { lazy } from "react";

export default {
	path: "/about",
	index: false,
	caseSensitive: false,
	element: lazy(() => import(".")),
	props: null
};
