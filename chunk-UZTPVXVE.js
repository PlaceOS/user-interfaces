import {
  MatDialog
} from "./chunk-2APKA6IB.js";
import {
  HotkeysService
} from "./chunk-SNHIXH33.js";
import {
  DestroyRef,
  inject
} from "./chunk-BKT2MDTY.js";

// apps/signage-manager/src/app/shared/save-hotkey.ts
var HOTKEY_BLOCKING_FOCUS = 'select, mat-select, [role="combobox"], [role="listbox"], [role="option"], [role="menu"], [role="menuitem"]';
function saveHotkey(dialog_ref, save) {
  const dialog = inject(MatDialog);
  const listener = inject(HotkeysService).listen(["KeyS"], () => {
    if (dialog.openDialogs.at(-1) !== dialog_ref)
      return;
    if (document.activeElement?.closest(HOTKEY_BLOCKING_FOCUS))
      return;
    save();
  });
  inject(DestroyRef).onDestroy(() => listener?.unsubscribe());
}

export {
  saveHotkey
};
//# debugId=ba5cc1d5-c445-586c-a1d8-58746cd4dd26
//# sourceMappingURL=chunk-UZTPVXVE.js.map
