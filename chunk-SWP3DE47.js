import {
  openConfirmModal
} from "./chunk-5RDDXB2X.js";
import {
  MatDialog,
  i18n,
  inject
} from "./chunk-SIEX7A67.js";

// apps/concierge/src/app/ui/unsaved-changes.guard.ts
var unsavedChangesGuard = async (component) => {
  if (!component?.hasUnsavedChanges())
    return true;
  const ref = await openConfirmModal({
    title: i18n("APP.CONCIERGE.UNSAVED_CHANGES_TITLE"),
    content: i18n("APP.CONCIERGE.UNSAVED_CHANGES_MSG"),
    icon: { content: "warning" },
    confirm_text: i18n("APP.CONCIERGE.UNSAVED_CHANGES_DISCARD")
  }, inject(MatDialog));
  ref.close();
  return ref.reason === "done";
};

export {
  unsavedChangesGuard
};
//# debugId=e0af376c-e4e3-5107-a7a5-5d56a32abcd9
//# sourceMappingURL=chunk-SWP3DE47.js.map
