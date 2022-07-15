import { lazy } from "react";

export default {
  path: "/home",
  index: false,
  caseSensitive: false,
  element: lazy(() => import(".")),
  props: null
};
