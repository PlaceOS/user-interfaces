import { inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CanDeactivateFn } from '@angular/router';
import { i18n } from '@placeos/common';
import { openConfirmModal } from '@placeos/components';

/**
 * A page with a form that can have unsaved changes.
 * To also warn when the user reloads or closes the tab, add this host binding
 * to the component:
 * `'(window:beforeunload)': 'hasUnsavedChanges() && $event.preventDefault()'`
 */
export interface HasUnsavedChanges {
    hasUnsavedChanges(): boolean;
}

/** Asks the user to confirm before they leave a page with unsaved changes */
export const unsavedChangesGuard: CanDeactivateFn<HasUnsavedChanges> = async (
    component,
) => {
    if (!component?.hasUnsavedChanges()) return true;
    const ref = await openConfirmModal(
        {
            title: i18n('APP.CONCIERGE.UNSAVED_CHANGES_TITLE'),
            content: i18n('APP.CONCIERGE.UNSAVED_CHANGES_MSG'),
            icon: { content: 'warning' },
            confirm_text: i18n('APP.CONCIERGE.UNSAVED_CHANGES_DISCARD'),
        },
        inject(MatDialog),
    );
    ref.close();
    return ref.reason === 'done';
};
