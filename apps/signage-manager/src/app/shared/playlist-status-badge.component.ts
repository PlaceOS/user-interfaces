import { Component, input } from '@angular/core';
import { TranslatePipe } from '@placeos/components';
import { PlaylistStatus } from '../signage-playlist.util';

/** State that a `<playlist-status-badge>` shows */
export type PlaylistBadgeStatus = 'disabled' | PlaylistStatus;

const BADGES: Record<
    NonNullable<PlaylistBadgeStatus>,
    { label: string; colour: string }
> = {
    disabled: {
        label: 'COMMON.DISABLED',
        colour: 'bg-warning text-warning-content',
    },
    expired: {
        label: 'SIGNAGE_MANAGER.STATUS_EXPIRED',
        colour: 'bg-error text-error-content',
    },
    pending: { label: 'COMMON.PENDING', colour: 'bg-info text-info-content' },
    awaiting_review: {
        label: 'SIGNAGE_MANAGER.STATUS_AWAITING_REVIEW',
        colour: 'bg-warning text-warning-content',
    },
    awaiting_approval: {
        label: 'COMMON.APPROVAL_REQUIRED',
        colour: 'bg-base-300',
    },
};

/**
 * Small label for the state of a playlist or template, such as expired or
 * awaiting review. Shows nothing for a null status.
 */
@Component({
    selector: 'playlist-status-badge',
    imports: [TranslatePipe],
    template: `
        @let status_value = status();
        @if (status_value) {
            <span
                class="shrink-0 rounded px-1.5 py-0.5 text-[10px] font-bold uppercase"
                [class]="badges[status_value].colour"
                [attr.data-playlist-status]="status_value"
            >
                {{ badges[status_value].label | translate }}
            </span>
        }
    `,
    host: { class: 'contents' },
})
export class PlaylistStatusBadgeComponent {
    public readonly status = input.required<PlaylistBadgeStatus>();

    public readonly badges = BADGES;
}
