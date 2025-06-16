import { Component, Input } from '@angular/core';
import { i18n, notifyError } from '@placeos/common';
import { StaffUser } from '@placeos/users';

import { StaffStateService } from './staff-state.service';

@Component({
    selector: 'staff-details',
    template: `
        @if (user) {
            <div
                class="flex w-full items-center border-b border-base-200 bg-base-100 px-4 py-2 hover:opacity-80"
                details
            >
                <a-user-avatar [user]="user"></a-user-avatar>
                <div class="flex flex-1 flex-col">
                    <div class="px-2">{{ user?.name }}</div>
                    <div class="px-2 text-xs text-opacity-50">
                        {{ user?.email }}
                    </div>
                </div>
                @if (onsite) {
                    <div class="px-4 text-xs opacity-50">
                        {{ 'APP.CONCIERGE.DIRECTORY_ONSITE' | translate }}
                    </div>
                }
                <div class="flex items-center">
                    <action-icon
                        [matTooltip]="
                            (onsite ? 'COMMON.CHECK_IN' : 'COMMON.CHECK_OUT')
                                | translate
                        "
                        [loading]="loading"
                        [content]="onsite ? 'event_busy' : 'event_available'"
                        (click)="onsite ? checkout() : checkin()"
                    >
                    </action-icon>
                    <a
                        icon
                        matRipple
                        [matTooltip]="
                            'APP.CONCIERGE.DIRECTORY_EMAIL' | translate
                        "
                        [attr.disabled]="!user?.email"
                        [href]="'mailto:' + user?.email"
                    >
                        <icon>email</icon>
                    </a>
                    <a
                        icon
                        matRipple
                        [matTooltip]="
                            'APP.CONCIERGE.DIRECTORY_PHONE' | translate
                        "
                        [attr.disabled]="!user?.phone"
                        [href]="'tel:' + user?.phone"
                    >
                        <icon>call</icon>
                    </a>
                </div>
            </div>
        }
    `,
    styles: [``],
    standalone: false,
})
export class StaffDetailsComponent {
    @Input() public user: StaffUser;
    @Input() public onsite: boolean;

    public loading: boolean;

    public readonly checkin = async () => {
        this.loading = true;
        await this._state
            .checkin(this.user)
            .catch((e) =>
                notifyError(
                    i18n('APP.CONCIERGE.DIRECTORY_CHECKIN_ERROR', { error: e }),
                ),
            );
        this.loading = false;
    };
    public readonly checkout = async () => {
        this.loading = true;
        await this._state
            .checkout(this.user)
            .catch((e) =>
                i18n('APP.CONCIERGE.DIRECTORY_CHECKOUT_ERROR', { error: e }),
            );
        this.loading = false;
    };

    constructor(private _state: StaffStateService) {}
}
