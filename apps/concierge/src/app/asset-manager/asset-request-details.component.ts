import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AssetManagerStateService } from './asset-manager-state.service';
import { OrganisationService } from '@placeos/organisation';
import { SettingsService } from '@placeos/common';

@Component({
    selector: 'asset-request-details',
    template: `
        <div
            class="fixed inset-0 z-50"
            *ngIf="request"
            (click)="request = null; requestChange.emit(request)"
        >
            <div class="absolute inset-0 bg-black opacity-50"></div>
            <div
                class="absolute inset-y-0 right-0 bg-base-100 w-[480px]"
                (click)="$event.stopPropagation()"
            >
                <button
                    icon
                    matRipple
                    (click)="request = null; requestChange.emit(request)"
                    class="absolute top-1 right-1"
                >
                    <app-icon>close</app-icon>
                </button>
                <div class="border-b border-base-200 px-2 py-4 flex space-x-4">
                    <a-user-avatar
                        [user]="{ name: request.user_name }"
                        class="text-xl"
                    ></a-user-avatar>
                    <div details class="space-y-1">
                        <div class="font-medium">{{ request.user_name }}</div>
                        <div class="flex items-center text-sm space-x-2">
                            <app-icon>mail</app-icon>
                            <a
                                class="underline"
                                [href]="'mailto:' + request.user_email"
                            >
                                {{ request.user_email || 'staff@place.tech' }}
                            </a>
                        </div>
                        <div class="flex items-center text-sm space-x-2">
                            <app-icon>call</app-icon>
                            <a
                                class="underline"
                                [href]="'tel:' + request.user_phone"
                            >
                                {{ request.user_phone || '04 1234 5678' }}
                            </a>
                        </div>
                        <div class="flex items-center text-sm space-x-2">
                            <app-icon>work_outline</app-icon>
                            <div>{{ request.user_company || 'PlaceOS' }}</div>
                        </div>
                    </div>
                </div>
                <div class="px-3 py-4 relative">
                    <div class="flex items-center space-x-4">
                        <div
                            class="h-6 w-6 rounded-full text-secondary bg-base-200 flex items-center justify-center"
                        >
                            <app-icon class="text-sm">send</app-icon>
                        </div>
                        <div class="font-medium">Asset Requested</div>
                    </div>
                    <div class="pl-10 flex flex-col mt-1">
                        <div *ngFor="let item of items">
                            {{ item.name }}
                            <span
                                class="text-xs bg-success text-success-content px-2 py-1 rounded"
                            >
                                x{{ item.quantity }}
                            </span>
                        </div>
                    </div>
                    <div class="flex items-center space-x-4 mt-4">
                        <div
                            class="h-6 w-6 rounded-full text-secondary bg-base-200 flex items-center justify-center"
                        >
                            <app-icon class="text-sm">event</app-icon>
                        </div>
                        <div class="font-medium">Date For</div>
                    </div>
                    <div class="pl-10 mt-1">
                        {{ request.date | date: 'EEEE, MMMM d, y' }}
                    </div>
                    <div class="flex items-center space-x-4 mt-4">
                        <div
                            class="h-6 w-6 rounded-full text-secondary bg-base-200 flex items-center justify-center"
                        >
                            <app-icon class="text-sm">schedule</app-icon>
                        </div>
                        <div class="font-medium">Period</div>
                    </div>
                    <div class="pl-10 mt-1">
                        {{ request.date | date: time_format }} &ndash;
                        {{
                            request.date + request.duration * 60 * 1000
                                | date: time_format
                        }}
                        ({{ request.duration | duration }})
                    </div>
                    <div class="flex items-center space-x-4 mt-4">
                        <div
                            class="h-6 w-6 rounded-full text-secondary bg-base-200 flex items-center justify-center"
                        >
                            <app-icon class="text-sm">place</app-icon>
                        </div>
                        <div class="font-medium">Floor</div>
                    </div>
                    <div class="pl-10 mt-1">
                        {{ level(request.zones)?.display_name || 'N/A' }}
                    </div>
                    <div class="flex items-center space-x-4 mt-4">
                        <div
                            class="h-6 w-6 rounded-full text-secondary bg-base-200 flex items-center justify-center"
                        >
                            <app-icon class="text-sm">meeting_room</app-icon>
                        </div>
                        <div class="font-medium">Room</div>
                    </div>
                    <div class="pl-10 mt-1">
                        {{ request.description }}
                    </div>
                    <div class="absolute top-4 right-4 text-sm">
                        <button
                            matRipple
                            class="rounded-3xl !bg-opacity-20 flex items-center px-2 py-1 w-full text-left space-x-2 mb-4"
                            [class.bg-success]="request.status === 'approved'"
                            [class.bg-error]="request.status === 'declined'"
                            [class.bg-warning]="request.status === 'tentative'"
                            [matMenuTriggerFor]="menu"
                            [disabled]="loading"
                        >
                            <app-icon
                                class="text-xl"
                                [class.text-green-600]="
                                    request.status === 'approved'
                                "
                                [class.text-red-600]="
                                    request.status === 'declined'
                                "
                                [class.text-yellow-400]="
                                    request.status === 'tentative'
                                "
                            >
                                {{
                                    request.status === 'approved'
                                        ? 'done'
                                        : request.status === 'declined'
                                        ? 'close'
                                        : 'warning'
                                }}
                            </app-icon>
                            <div class="capitalize flex-1">
                                {{ request.status }}
                            </div>
                            <app-icon class="text-2xl">expand_more</app-icon>
                        </button>
                        <mat-menu #menu="matMenu" class="w-36">
                            <button
                                mat-menu-item
                                (click)="setStatus('approved')"
                            >
                                Approve
                            </button>
                            <button
                                mat-menu-item
                                (click)="setStatus('declined')"
                            >
                                Decline
                            </button>
                        </mat-menu>
                        <button
                            matRipple
                            class="bg-none w-full flex items-center px-2 py-1 text-left border border-base-200 rounded-none"
                            [matMenuTriggerFor]="tracking_menu"
                            [disabled]="loading"
                        >
                            <div class="capitalize flex-1">
                                {{
                                    (request.extension_data?.tracking
                                        | splitjoin) || 'In Storage'
                                }}
                            </div>
                            <app-icon class="text-2xl">expand_more</app-icon>
                        </button>
                        <mat-menu #tracking_menu="matMenu" class="w-36">
                            <button
                                mat-menu-item
                                (click)="setTracking('in_storage')"
                            >
                                In Storage
                            </button>
                            <button
                                mat-menu-item
                                (click)="setTracking('in_transit')"
                            >
                                In Transit
                            </button>
                            <button
                                mat-menu-item
                                (click)="setTracking('at_location')"
                            >
                                At Location
                            </button>
                        </mat-menu>
                    </div>
                </div>
            </div>
        </div>
    `,
    styles: [``],
})
export class AssetRequestDetailsComponent {
    @Input() public request: any;
    @Output() public requestChange = new EventEmitter<any>();

    public loading = false;

    public get items() {
        return this.request?.extension_data?.request?.items || [];
    }

    public get time_format() {
        return this._settings.time_format;
    }

    constructor(
        private _state: AssetManagerStateService,
        private _org: OrganisationService,
        private _settings: SettingsService
    ) {}

    public level(zones) {
        return this._org.levelWithID(zones);
    }

    public async setStatus(status: string) {
        this.loading = true;
        await this._state.setStatus(this.request, status);
        (this.request as any).status = status;
        this.loading = false;
    }

    public async setTracking(state: string) {
        this.loading = true;
        await this._state.setTracking(this.request, state);
        (this.request as any).extension_data.tracking = state;
        this.loading = false;
    }
}
