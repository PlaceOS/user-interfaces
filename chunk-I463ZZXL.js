import {
  ConfirmModalComponent,
  openConfirmModal
} from "./chunk-3UZBDKWZ.js";
import {
  i18n,
  notifyError
} from "./chunk-C3VLFLNG.js";

// apps/signage-manager/src/app/shared/confirm-then-run.ts
async function confirmThenRun(dialog, confirm, options) {
  const result = await openConfirmModal(confirm, dialog);
  if (result.reason !== "done")
    return false;
  result.loading(i18n(options.loading_key));
  const confirm_ref = dialog.openDialogs?.at(-1);
  if (confirm_ref?.componentInstance instanceof ConfirmModalComponent) {
    confirm_ref.disableClose = true;
  }
  try {
    await options.action();
    return true;
  } catch {
    notifyError(i18n(options.error_key));
    return false;
  } finally {
    result.close();
  }
}

export {
  confirmThenRun
};
//# debugId=a425cdad-533e-5bd9-bf66-c15613443faa
//# sourceMappingURL=chunk-I463ZZXL.js.map
