import { Component, computed, input } from '@angular/core';
import { TranslatePipe } from '@placeos/components';
import { groupPermissionLabels } from './signage-group-permissions-modal.component';

/** Comma separated labels of a group permission mask, or "default" when the
 * mask sets no permission. Used by the user, zone and AD group rows. */
@Component({
    selector: 'signage-group-permission-labels',
    template: `
        @for (label of labels(); track label) {
            {{ label | translate }}
            @if (!$last) {
                ,
            }
        } @empty {
            <span class="italic">{{
                'SIGNAGE_MANAGER.DEFAULT_PERMISSIONS' | translate
            }}</span>
        }
    `,
    imports: [TranslatePipe],
})
export class SignageGroupPermissionLabelsComponent {
    public readonly permissions = input(0);
    public readonly labels = computed(() =>
        groupPermissionLabels(this.permissions()),
    );
}
