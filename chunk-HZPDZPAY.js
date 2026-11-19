import {
  ActivatedRoute,
  Router
} from "./chunk-EWNKJBAV.js";
import {
  DestroyRef,
  inject
} from "./chunk-J4V3B3VF.js";

// apps/concierge/src/app/ui/page-transitions.ts
var MAX_ROUTE_DEPTH = 16;
var MAX_TRANSITION_WAITS = 8;
var transition_done = null;
function routePath(root) {
  const segments = [];
  let route = root;
  for (let depth = 0; route && depth < MAX_ROUTE_DEPTH; depth++) {
    segments.push(...route.url.map(({ path }) => path));
    route = route.firstChild;
  }
  return segments.join("/");
}
function onPageTransitionCreated({ transition, from, to }) {
  if (routePath(from) === routePath(to)) {
    transition.skipTransition();
    return;
  }
  const done = transition.finished.catch(() => void 0).then(() => {
    if (transition_done === done)
      transition_done = null;
  });
  transition_done = done;
}
function queryParamsWriter() {
  const router = inject(Router);
  const route = inject(ActivatedRoute);
  const destroy_ref = inject(DestroyRef);
  const write = (queryParams) => {
    if (destroy_ref.destroyed)
      return;
    void router.navigate([], {
      relativeTo: route,
      queryParams,
      queryParamsHandling: "merge"
    });
  };
  const writeAfterTransition = (queryParams, waits = 0) => {
    if (!transition_done || waits >= MAX_TRANSITION_WAITS) {
      write(queryParams);
      return;
    }
    transition_done.then(() => writeAfterTransition(queryParams, waits + 1));
  };
  return (queryParams) => writeAfterTransition(queryParams);
}

export {
  onPageTransitionCreated,
  queryParamsWriter
};
//# debugId=9483d981-0f0d-5dbb-8636-0a386e2c74b0
//# sourceMappingURL=chunk-HZPDZPAY.js.map
