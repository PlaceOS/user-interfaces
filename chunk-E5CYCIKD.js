import {
  openConfirmModal
} from "./chunk-HW6LHCOB.js";
import {
  MatDialog
} from "./chunk-CQXOQ5CV.js";
import {
  i18n
} from "./chunk-4USKPYHW.js";
import {
  inject
} from "./chunk-AQIWUFR7.js";

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
//# debugId=a5e5cba0-88fa-557c-997b-93fb8b6fb2af
//# sourceMappingURL=chunk-E5CYCIKD.js.map
