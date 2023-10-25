import { Component, Input } from '@angular/core';
import { notifyError } from '@placeos/common';
import { StaffUser } from '@placeos/users';

import { StaffStateService } from './staff-state.service';

@Component({
    selector: 'staff-details',
    template: `
        <div
            class="w-full flex items-center px-4 py-2 bg-base-100 border-b border-base-200 hover:opacity-80"
            details
            *ngIf="user"
        >
            <a-user-avatar [user]="user"></a-user-avatar>
            <div class="flex flex-col flex-1">
                <div class="px-2">{{ user?.name }}</div>
                <div class="px-2 text-xs text-opacity-50">
                    {{ user?.email }}
                </div>
            </div>
            <div *ngIf="onsite" class="text-xs opacity-50 px-4">Onsite</div>
            <div class="flex items-center">
                <action-icon
                    [matTooltip]="onsite ? 'Checkout Staff' : 'Checkin Staff'"
                    [loading]="loading"
                    [content]="onsite ? 'event_busy' : 'event_available'"
                    (click)="onsite ? checkout() : checkin()"
                >
                </action-icon>
                <a
                    icon
                    matRipple
                    matTooltip="Email Staff"
                    [attr.disabled]="!user?.email"
                    [href]="'mailto:' + user?.email"
                >
                    <app-icon>email</app-icon>
                </a>
                <a
                    icon
                    matRipple
                    matTooltip="Phone Staff"
                    [attr.disabled]="!user?.phone"
                    [href]="'tel:' + user?.phone"
                >
                    <app-icon>call</app-icon>
                </a>
            </div>
        </div>
    `,
    styles: [``],
})
export class StaffDetailsComponent {
    @Input() public user: StaffUser;
    @Input() public onsite: boolean;

    public loading: boolean;

    public readonly checkin = async () => {
        this.loading = true;
        await this._state
            .checkin(this.user)
            .catch((e) => notifyError('Error checking in Staff member'));
        this.loading = false;
    };
    public readonly checkout = async () => {
        this.loading = true;
        await this._state
            .checkout(this.user)
            .catch((e) => notifyError('Error checking out Staff member'));
        this.loading = false;
    };

    constructor(private _state: StaffStateService) {}
}
