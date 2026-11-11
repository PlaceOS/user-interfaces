import {
  MatDialog
} from "./chunk-Z6FZWLVS.js";
import {
  HotkeysService
} from "./chunk-7Y7SMIGA.js";
import {
  DestroyRef,
  inject
} from "./chunk-5SPB2BCN.js";

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
//# sourceMappingURL=chunk-CWB43SLH.js.map
