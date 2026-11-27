import {
  ActivatedRoute,
  Router
} from "./chunk-7H4OKNBG.js";
import {
  inject,
  linkedSignal
} from "./chunk-Y6KAMZVN.js";

// apps/signage-manager/src/app/shared/routed-tab.util.ts
function routedTab(param, parse) {
  const route = inject(ActivatedRoute);
  const router = inject(Router);
  const active = linkedSignal(
    () => parse(param()),
    ...ngDevMode ? [{ debugName: "active" }] : (
      /* istanbul ignore next */
      []
    )
  );
  return {
    active: active.asReadonly(),
    /** Show `tab` and write it to the URL */
    select(tab) {
      if (tab === active())
        return;
      active.set(tab);
      void router.navigate([], {
        relativeTo: route,
        queryParams: { tab },
        queryParamsHandling: "merge",
        replaceUrl: true
      });
    }
  };
}

export {
  routedTab
};
//# debugId=8881834b-a0c1-5952-91d5-ceb90c4b2459
//# sourceMappingURL=chunk-RLVHFB4G.js.map
