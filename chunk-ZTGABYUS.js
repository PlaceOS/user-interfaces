import {
  openConfirmModal
} from "./chunk-3A65AROJ.js";
import {
  MatDialog
} from "./chunk-WP4XCCAC.js";
import {
  i18n
} from "./chunk-XXNSPKPG.js";
import {
  inject
} from "./chunk-WOMJJ4WU.js";

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
//# sourceMappingURL=chunk-ZTGABYUS.js.map
