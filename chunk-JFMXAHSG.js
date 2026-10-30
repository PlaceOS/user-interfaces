import {
  startOfMinute
} from "./chunk-PARB3GVO.js";
import {
  DestroyRef,
  inject,
  signal
} from "./chunk-CLFS24D3.js";

// apps/visitor-kiosk/src/app/minute-clock.ts
function minuteClock() {
  const now = signal(
    startOfMinute(Date.now()).valueOf(),
    ...ngDevMode ? [{ debugName: "now" }] : (
      /* istanbul ignore next */
      []
    )
  );
  let timer;
  const schedule = () => {
    const delay = 6e4 - Date.now() % 6e4 + 50;
    timer = setTimeout(() => {
      now.set(startOfMinute(Date.now()).valueOf());
      schedule();
    }, delay);
  };
  schedule();
  inject(DestroyRef).onDestroy(() => clearTimeout(timer));
  return now.asReadonly();
}

export {
  minuteClock
};
//# debugId=c766a6c6-83a9-5c36-9695-9de4dcbd63e1
//# sourceMappingURL=chunk-JFMXAHSG.js.map
