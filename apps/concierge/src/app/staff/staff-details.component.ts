import { Component, Input } from '@angular/core';
import { StaffUser } from '@user-interfaces/users';

import { StaffStateService } from './staff-state.service';

@Component({
    selector: 'staff-details',
    template: `
        <div class="w-full flex items-center px-4 py-2 bg-white border-b border-gray-200">
            <a-user-avatar [user]="user"></a-user-avatar>
            <div class="flex flex-col flex-1">
                <div class="px-2">{{ user?.name }}</div>
                <div class="px-2 text-xs text-opacity-50">{{ user?.email }}</div>
            </div>
            <div class="flex items-center">
                <a mat-icon-button [disabled]="!user?.email" [href]="'mailto:' + user?.email">
                    <app-icon className="material-icons">email</app-icon>
                </a>
                <a mat-icon-button [disabled]="!user?.phone" [href]="'tel:' + user?.phone">
                    <app-icon className="material-icons">call</app-icon>
                </a>
            </div>
        </div>
    `,
    styles: [`
        :host > div:hover {
            background-color: #f0f0f0 !important;
        }
    `]
})
export class StaffDetailsComponent {

    @Input() public user: StaffUser;

    constructor(private _state: StaffStateService) {

    }
}
