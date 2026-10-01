import {
  openConfirmModal
} from "./chunk-3E4VORZU.js";
import {
  MatDialog,
  i18n,
  inject
} from "./chunk-C5PCZO6L.js";

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
//# sourceMappingURL=chunk-WQ6K5VAJ.js.map
