import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
    AssetManagerStateService,
    AssetRequest,
} from './asset-manager-state.service';

@Component({
    selector: 'asset-request-details',
    template: `
        <div
            class="fixed inset-0 bg-black/50 z-50"
            *ngIf="request"
            (click)="request = null; requestChange.emit(request)"
        >
            <div
                class="absolute inset-y-0 right-0 bg-white dark:bg-neutral-700 w-[480px]"
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
                <div
                    class="border-b border-gray-200 dark:border-neutral-500 px-2 py-4 flex space-x-4"
                >
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
                            class="h-6 w-6 rounded-full text-secondary bg-gray-200 dark:bg-neutral-600 flex items-center justify-center"
                        >
                            <app-icon class="text-sm">send</app-icon>
                        </div>
                        <div class="font-medium">Assets Requested</div>
                    </div>
                    <div class="pl-10 flex flex-col mt-1">
                        <div
                            *ngFor="
                                let asset of request.extension_data?.assets ||
                                    []
                            "
                        >
                            {{ asset.amount || 1 }}× {{ asset.name }}
                        </div>
                    </div>
                    <div class="flex items-center space-x-4 mt-4">
                        <div
                            class="h-6 w-6 rounded-full text-secondary bg-gray-200 dark:bg-neutral-600 flex items-center justify-center"
                        >
                            <app-icon class="text-sm">event</app-icon>
                        </div>
                        <div class="font-medium">Date For</div>
                    </div>
                    <div class="pl-10 mt-1">
                        {{ request.date | date: 'mediumDate' }}
                    </div>
                    <div class="flex items-center space-x-4 mt-4">
                        <div
                            class="h-6 w-6 rounded-full text-secondary bg-gray-200 dark:bg-neutral-600 flex items-center justify-center"
                        >
                            <app-icon class="text-sm">schedule</app-icon>
                        </div>
                        <div class="font-medium">Period</div>
                    </div>
                    <div class="pl-10 mt-1">
                        {{ request.date | date: 'shortTime' }} &ndash;
                        {{
                            request.date + request.duration * 60 * 1000
                                | date: 'shortTime'
                        }}
                        ({{ request.duration | duration }})
                    </div>
                    <div class="flex items-center space-x-4 mt-4">
                        <div
                            class="h-6 w-6 rounded-full text-secondary bg-gray-200 dark:bg-neutral-600 flex items-center justify-center"
                        >
                            <app-icon class="text-sm">place</app-icon>
                        </div>
                        <div class="font-medium">Floor</div>
                    </div>
                    <div class="pl-10 mt-1">
                        {{
                            request.extension_data?.space?.level
                                ?.display_name ||
                                request.extension_data?.space?.level?.name
                        }}
                    </div>
                    <div class="flex items-center space-x-4 mt-4">
                        <div
                            class="h-6 w-6 rounded-full text-secondary bg-gray-200 dark:bg-neutral-600 flex items-center justify-center"
                        >
                            <app-icon class="text-sm">meeting_room</app-icon>
                        </div>
                        <div class="font-medium">Room</div>
                    </div>
                    <div class="pl-10 mt-1">
                        {{
                            request.extension_data?.space?.display_name ||
                                request.extension_data?.space?.name
                        }}
                    </div>
                    <div class="absolute top-4 right-4 text-sm">
                        <button
                            matRipple
                            class="rounded-3xl !bg-opacity-20 flex items-center px-2 py-1 w-full text-left space-x-2 mb-4"
                            [class.bg-green-600]="request.status === 'approved'"
                            [class.bg-red-600]="request.status === 'declined'"
                            [class.bg-yellow-400]="
                                request.status === 'tentative'
                            "
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
                            class="bg-none w-full flex items-center px-2 py-1 text-left border border-gray-200 dark:border-neutral-700 rounded-none"
                            [matMenuTriggerFor]="tracking_menu"
                            [disabled]="loading"
                        >
                            <div class="capitalize flex-1">
                                {{
                                    request.extension_data?.tracking | splitjoin
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

    constructor(private _state: AssetManagerStateService) {}

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
