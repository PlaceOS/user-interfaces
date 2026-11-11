import {
  ActivatedRoute,
  Router
} from "./chunk-D2JGUGS5.js";
import {
  inject,
  linkedSignal
} from "./chunk-5SPB2BCN.js";

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
//# sourceMappingURL=chunk-ODET2JGM.js.map
