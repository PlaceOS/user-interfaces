import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import {
    AsyncHandler,
    Booking,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import {
    IconComponent,
    SimpleTableComponent,
    TranslatePipe,
} from '@placeos/components';
import { DateOptionsComponent } from '@placeos/form-fields';
import { startOfDay } from 'date-fns';
import { BookingApprovalBarComponent } from '../ui/booking-approval-bar.component';
import { AssetManagerStateService } from './asset-manager-state.service';
import { AssetRequestDetailsComponent } from './asset-request-details.component';
import { SplitJoinPipe } from './split-join.pipe';

@Component({
    selector: 'app-asset-request-list',
    template: `
        <div class="relative flex h-[calc(100%-1rem)] w-full flex-col">
            <div class="flex items-center justify-between">
                <div class="p-4 text-sm opacity-60">
                    {{
                        'APP.CONCIERGE.ASSETS_REQUESTS_COUNT'
                            | translate: { count: requests().length }
                    }}
                </div>
                <date-options
                    [date]="filters().date"
                    (dateChange)="setDate($event)"
                ></date-options>
            </div>
            <div class="h-1/2 w-full flex-1 overflow-auto pt-2">
                <simple-table
                    class="block min-w-328 text-sm"
                    asset-requests
                    [data]="requests()"
                    [selectable]="true"
                    [(selected)]="selected"
                    [filter]="filters().search"
                    [columns]="[
                        {
                            key: 'user_name',
                            name:
                                'APP.CONCIERGE.ASSETS_REQUESTS_USER'
                                | translate,
                            content: user_template,
                        },
                        {
                            key: 'date',
                            name:
                                'APP.CONCIERGE.ASSETS_REQUESTS_TIME'
                                | translate,
                            content: date_template,
                            size: '8rem',
                        },
                        {
                            key: 'assets',
                            name: 'RESOURCE.ASSETS' | translate,
                            content: assets_template,
                            sortable: false,
                        },
                        {
                            key: 'level_code',
                            name: 'RESOURCE.LEVEL' | translate,
                            content: level_template,
                            size: '9rem',
                        },
                        {
                            key: 'description',
                            name: 'COMMON.LOCATION' | translate,
                        },
                        {
                            key: 'status',
                            name:
                                'APP.CONCIERGE.ASSETS_REQUESTS_APPROVAL'
                                | translate,
                            content: approval_template,
                            size: '11rem',
                        },
                        {
                            key: 'tracking',
                            name:
                                'APP.CONCIERGE.ASSETS_REQUESTS_TRACKING'
                                | translate,
                            content: tracking_template,
                            size: '12rem',
                            sortable: false,
                        },
                    ]"
                    [empty_message]="
                        (filters().search
                            ? 'APP.CONCIERGE.ASSETS_REQUESTS_SEARCH_EMPTY'
                            : 'APP.CONCIERGE.ASSETS_REQUESTS_EMPTY'
                        ) | translate
                    "
                    [sortable]="true"
                    (row_clicked)="request.set($event)"
                ></simple-table>
                <div class="h-20 w-full"></div>
            </div>
        </div>
        <ng-template #user_template let-row="row">
            <div class="flex flex-col px-4 py-2 text-left">
                <div>{{ row.user_name }}</div>
                <div class="text-xs opacity-30">
                    {{ date(row) | date: 'MMM d, ' + time_format() }} &ndash;
                    {{
                        date(row) + row.duration * 60 * 1000
                            | date: 'MMM d, ' + time_format()
                    }}
                </div>
            </div>
        </ng-template>
        <ng-template #assets_template let-row="row">
            <div class="flex flex-col p-4">
                @for (
                    asset of row.extension_data?.request?.items || [];
                    track asset
                ) {
                    <div>
                        <span class="font-mono text-sm">
                            {{ asset.quantity || 1 }}×
                        </span>
                        {{ asset.name }}
                    </div>
                }
            </div>
        </ng-template>
        <ng-template #date_template let-row="row">
            <div class="p-4">
                {{
                    row.date +
                        row.extension_data?.request?.deliver_offset *
                            60 *
                            1000 +
                        row.extension_data?.request?.deliver_day_offset *
                            24 *
                            60 *
                            60 *
                            1000 | date: 'MMM d, ' + time_format()
                }}
            </div>
        </ng-template>
        <ng-template #level_template let-row="row">
            <div class="p-4">
                {{ level(row)?.display_name }}
                @if (!level(row)) {
                    <span class="opacity-30">N/A</span>
                }
            </div>
        </ng-template>
        <ng-template #approval_template let-row="row">
            <div class="px-4 py-2">
                <button
                    matRipple
                    class="!bg-opacity-20 flex w-full items-center space-x-2 rounded-3xl px-2 py-1 text-left"
                    [class.bg-success]="row.status === 'approved'"
                    [class.bg-error]="row.status === 'declined'"
                    [class.bg-warning]="row.status === 'tentative'"
                    [class.text-success-content]="row.status === 'approved'"
                    [class.text-error-content]="row.status === 'declined'"
                    [class.text-warning-content]="row.status === 'tentative'"
                    [matMenuTriggerFor]="menu"
                    (click)="$event.stopPropagation()"
                    [disabled]="loading()[row.id]"
                >
                    <icon class="text-xl">
                        {{
                            row.status === 'approved'
                                ? 'done'
                                : row.status === 'declined'
                                  ? 'close'
                                  : 'warning'
                        }}
                    </icon>
                    <div class="flex-1 capitalize">{{ row.status }}</div>
                    <icon class="text-2xl">expand_more</icon>
                </button>
            </div>
            <mat-menu #menu="matMenu">
                <button mat-menu-item (click)="setStatus(row, 'approved')">
                    <div class="flex items-center space-x-2">
                        <icon class="text-2xl">event_available</icon>
                        <div class="pr-2">
                            {{
                                'APP.CONCIERGE.ASSETS_REQUESTS_ACTION_APPROVE'
                                    | translate
                            }}
                        </div>
                    </div>
                </button>
                <button mat-menu-item (click)="setStatus(row, 'declined')">
                    <div class="flex items-center space-x-2">
                        <icon class="text-2xl">event_busy</icon>
                        <div class="pr-2">
                            {{
                                'APP.CONCIERGE.ASSETS_REQUESTS_ACTION_DECLINE'
                                    | translate
                            }}
                        </div>
                    </div>
                </button>
            </mat-menu>
        </ng-template>
        <ng-template #tracking_template let-row="row">
            <div class="px-4 py-2">
                <button
                    matRipple
                    class="flex w-full items-center rounded-sm bg-none px-2 py-1 text-left"
                    [matMenuTriggerFor]="tracking_menu"
                    (click)="$event.stopPropagation()"
                    [disabled]="loading()[row.id]"
                >
                    <div class="min-w-32 flex-1 capitalize">
                        {{
                            (row.extension_data?.tracking | splitjoin) ||
                                'In Storage'
                        }}
                    </div>
                    <icon class="text-2xl">expand_more</icon>
                </button>
            </div>
            <mat-menu #tracking_menu="matMenu">
                <button mat-menu-item (click)="setTracking(row, 'in_storage')">
                    <div class="flex items-center space-x-2">
                        <icon class="text-2xl">inventory</icon>
                        <div class="pr-2">
                            {{
                                'APP.CONCIERGE.ASSETS_REQUESTS_TRACKING_STORAGE'
                                    | translate
                            }}
                        </div>
                    </div>
                </button>
                <button mat-menu-item (click)="setTracking(row, 'in_transit')">
                    <div class="flex items-center space-x-2">
                        <icon class="text-2xl">trolley</icon>
                        <div class="pr-2">
                            {{
                                'APP.CONCIERGE.ASSETS_REQUESTS_TRACKING_TRANSIT'
                                    | translate
                            }}
                        </div>
                    </div>
                </button>
                <button mat-menu-item (click)="setTracking(row, 'at_location')">
                    <div class="flex items-center space-x-2">
                        <icon class="text-2xl">place</icon>
                        <div class="pr-2">
                            {{
                                'APP.CONCIERGE.ASSETS_REQUESTS_TRACKING_LOCATION'
                                    | translate
                            }}
                        </div>
                    </div>
                </button>
            </mat-menu>
        </ng-template>
        <asset-request-details
            [request]="request()"
            (requestChange)="request.set($event)"
        />
        <booking-approval-bar
            [count]="selected().length"
            [busy]="bulk_busy()"
            (setApproval)="setApproval($event)"
            (clear)="selected.set([])"
        />
    `,
    styles: [
        `
            :host {
                display: block;
                height: 100%;
                width: 100%;
            }
        `,
    ],
    imports: [
        CommonModule,
        MatRippleModule,
        DateOptionsComponent,
        SimpleTableComponent,
        AssetRequestDetailsComponent,
        MatMenuModule,
        IconComponent,
        SplitJoinPipe,
        TranslatePipe,
        BookingApprovalBarComponent,
    ],
})
export class AssetRequestListComponent extends AsyncHandler implements OnInit {
    private _state = inject(AssetManagerStateService);
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);

    public readonly requests = computed(() => {
        const list = this._state.filtered_requests();
        list.forEach((request) => this.level(request));
        return list;
    });
    public readonly filters = this._state.options;
    public readonly request = signal<any>(null);

    public readonly loading = signal<Record<string, boolean>>({});
    /** IDs of the selected requests */
    public readonly selected = signal<string[]>([]);
    public readonly bulk_busy = signal(false);
    public readonly time_format = computed(() => this._settings.time_format);

    public date(booking: Booking) {
        return booking.all_day
            ? startOfDay(booking.date).valueOf()
            : booking.date;
    }

    public async setStatus(item: Booking, status: string) {
        this.loading.update((loading) => ({ ...loading, [item.id]: true }));
        await this._state.setStatus(item, status);
        this.loading.update((loading) => ({ ...loading, [item.id]: false }));
    }

    /** Approve or decline the selected requests */
    public async setApproval(approve: boolean) {
        const ids = new Set(this.selected());
        const list = this.requests().filter((item) => ids.has(item.id));
        this.bulk_busy.set(true);
        const done = await this._state
            .setRequestsApproval(list, approve)
            .finally(() => this.bulk_busy.set(false));
        if (done) this.selected.set([]);
    }

    public async setTracking(item: Booking, state: string) {
        this.loading.update((loading) => ({ ...loading, [item.id]: true }));
        await this._state.setTracking(item, state);
        this.loading.update((loading) => ({ ...loading, [item.id]: false }));
    }

    public readonly setDate = (date) => this._state.setOptions({ date });

    public level(item: any) {
        const zones = item.zones;
        const level = this._org.levelWithID(zones);
        item.level = level?.display_name || level?.name || zones[0] || '';
        item.level_code = level?.code || zones[0] || '';
        return level;
    }

    public ngOnInit() {
        this.subscription('polling', this._state.startPolling());
    }
}
