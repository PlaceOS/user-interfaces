import {
  openConfirmModal
} from "./chunk-4W4AGIWL.js";
import {
  errorMessage,
  notifyError
} from "./chunk-SIEX7A67.js";

// apps/concierge/src/app/ui/modal-actions.ts
function errorText(error) {
  const response = error;
  return errorMessage(error) || [response?.status, response?.statusText].filter(Boolean).join(" ") || "Unknown error";
}
function saveFromModal(ref, save) {
  return new Promise((resolve) => {
    let saving = false;
    let finished = false;
    let event_sub;
    let close_sub;
    const finish = (saved) => {
      if (finished)
        return;
      finished = true;
      event_sub?.unsubscribe();
      close_sub?.unsubscribe();
      resolve(saved);
    };
    event_sub = ref.componentInstance.event.subscribe(async (event) => {
      if (event?.reason !== "done" || saving)
        return;
      saving = true;
      try {
        await save(event);
        finish(true);
        ref.close();
      } catch {
        ref.componentInstance.loading.set(false);
        ref.disableClose = false;
      } finally {
        saving = false;
      }
    });
    close_sub = ref.afterClosed().subscribe(() => finish(false));
    if (finished)
      close_sub.unsubscribe();
  });
}
async function confirmAction(dialog, confirm, options) {
  const ref = await openConfirmModal(confirm, dialog);
  if (ref.reason !== "done") {
    ref.close();
    return false;
  }
  ref.loading(options.loading);
  try {
    await options.action();
    return true;
  } catch (e) {
    notifyError(options.error(e));
    return false;
  } finally {
    ref.close();
  }
}

export {
  errorText,
  saveFromModal,
  confirmAction
};
//# debugId=db9088e2-2854-5d90-ac58-ea1093411339
//# sourceMappingURL=chunk-ZTT7ZLL2.js.map
