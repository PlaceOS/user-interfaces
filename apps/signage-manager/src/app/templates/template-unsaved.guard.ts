import { inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CanDeactivateFn } from '@angular/router';
import { i18n } from '@placeos/common';
import { openConfirmModal } from '@placeos/components';
import { SignageService } from '../signage.service';

/**
 * Asks before the user leaves a template that has unsaved layout edits.
 * Discards the edits when the user confirms, so they do not show again
 * when the user comes back to the template.
 */
export const templateUnsavedGuard: CanDeactivateFn<unknown> = async () => {
    const service = inject(SignageService);
    const dialog = inject(MatDialog);
    if (!service.template_layout_dirty()) return true;
    const result = await openConfirmModal(
        {
            title: i18n('SIGNAGE_MANAGER.TEMPLATE_UNSAVED_TITLE'),
            content: i18n('SIGNAGE_MANAGER.TEMPLATE_UNSAVED_CONTENT'),
            confirm_text: i18n('SIGNAGE_MANAGER.TEMPLATE_DISCARD'),
            icon: { content: 'warning' },
        },
        dialog,
    );
    if (result.reason !== 'done') return false;
    result.close();
    service.discardTemplateLayoutDraft();
    return true;
};
