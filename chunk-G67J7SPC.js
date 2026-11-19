import {
  openConfirmModal
} from "./chunk-CORKR3QB.js";
import {
  MatDialog
} from "./chunk-LPEK236K.js";
import {
  i18n
} from "./chunk-2N4ZTDB4.js";
import {
  inject
} from "./chunk-WP37UGIF.js";

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
//# sourceMappingURL=chunk-G67J7SPC.js.map
