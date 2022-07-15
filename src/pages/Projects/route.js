import { lazy } from 'react';

export default {
  path: '/projects',
  index: false,
  caseSensitive: false,
  element: lazy(() => import('.')),
  props: null
};
