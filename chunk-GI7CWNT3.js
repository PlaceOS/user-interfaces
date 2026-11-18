import {
  openConfirmModal
} from "./chunk-JVBDHHWJ.js";
import {
  MatDialog
} from "./chunk-LPEK236K.js";
import {
  i18n
} from "./chunk-B225UNI6.js";
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
//# sourceMappingURL=chunk-GI7CWNT3.js.map
