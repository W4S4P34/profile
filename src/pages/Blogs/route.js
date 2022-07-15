import { lazy } from "react";

export default {
	path: "/blogs",
	index: false,
	caseSensitive: false,
	element: lazy(() => import(".")),
	props: null
};
