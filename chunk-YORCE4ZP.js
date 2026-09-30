import {
  openConfirmModal
} from "./chunk-P5Z7VOR7.js";
import {
  i18n,
  notifyError,
  notifySuccess
} from "./chunk-C5PCZO6L.js";

// libs/components/src/lib/bulk-actions.ts
var BULK_CONCURRENCY = 5;
async function runBulk(items, action, concurrency = BULK_CONCURRENCY) {
  const failed = [];
  let next = 0;
  const worker = async () => {
    while (next < items.length) {
      const item = items[next++];
      try {
        await action(item);
      } catch {
        failed.push(item);
      }
    }
  };
  const workers = Math.max(1, Math.min(concurrency, items.length));
  await Promise.all(Array.from({ length: workers }, worker));
  return failed;
}
async function runBulkAction(items, action, options = {}) {
  if (!items.length)
    return [];
  const { confirm, dialog, concurrency } = options;
  const ref = confirm && dialog ? await openConfirmModal({
    title: confirm.title,
    content: confirm.content,
    icon: { content: confirm.icon }
  }, dialog) : null;
  if (ref && ref.reason !== "done") {
    ref.close();
    return null;
  }
  ref?.loading(i18n("COMMON.BULK_LOADING", { count: items.length }));
  const failed = await runBulk(items, action, concurrency);
  ref?.close();
  const done = items.length - failed.length;
  if (failed.length) {
    notifyError(i18n("COMMON.BULK_PARTIAL", {
      done,
      total: items.length,
      failed: failed.length
    }));
  } else {
    notifySuccess(i18n("COMMON.BULK_SUCCESS", { count: done }));
  }
  return failed;
}

export {
  runBulkAction
};
//# debugId=a3481e22-b7bf-5a37-b46b-1854829ec2a9
//# sourceMappingURL=chunk-YORCE4ZP.js.map
