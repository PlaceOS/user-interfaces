import { Component, inject } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
    AsyncHandler,
    Booking,
    getTimezoneOffsetString,
    notifyError,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import {
    IconComponent,
    SimpleTableComponent,
    TranslatePipe,
} from '@placeos/components';
import { VipVisitorDetailsModalComponent } from './vip-visitor-details-modal.component';
import { VipVisitorsStateService } from './vip-visitors-state.service';

@Component({
    selector: 'vip-visitor-listings',
    template: `
        <simple-table
            class="z-0 block min-w-240 text-sm"
            [data]="visitors"
            [columns]="[
                {
                    key: 'date',
                    name: 'FORM.DATE' | translate,
                    content: date_template,
                    size: '7rem',
                },
                {
                    key: 'time',
                    name: 'FORM.TIME' | translate,
                    content: time_template,
                    size: '6rem',
                },
                {
                    key: 'asset_name',
                    name: 'RESOURCE.VIP_VISITOR' | translate,
                    content: visitor_template,
                },
                {
                    key: 'vip_assistant',
                    name: 'BOOKINGS.VIP_ASSISTANT' | translate,
                    content: assistant_template,
                },
                {
                    key: 'booked_by',
                    name: 'APP.CONCIERGE.VIP_BOOKED_BY' | translate,
                    content: booked_by_template,
                },
                {
                    key: 'status',
                    name: 'COMMON.STATUS' | translate,
                    content: status_template,
                    size: '9.5rem',
                },
                {
                    key: 'actions',
                    name: ' ',
                    content: action_template,
                    size: '3.25rem',
                    sortable: false,
                },
            ]"
            [filter]="search"
            [sortable]="true"
        />
        <ng-template #date_template let-row="row">
            <div class="px-4">
                {{ row.date | date: 'mediumDate' : tz }}
            </div>
        </ng-template>
        <ng-template #time_template let-row="row">
            <div class="px-4">
                {{ row.date | date: time_format : tz }}
            </div>
        </ng-template>
        <ng-template #visitor_template let-row="row">
            <div class="px-4 py-2">
                <div class="flex items-center space-x-1">
                    <span>{{ row.asset_name || row.asset_id }}</span>
                </div>
                @if (row.asset_name && row.asset_id) {
                    <div class="text-xs opacity-30 select-all">
                        {{ row.asset_id }}
                    </div>
                }
            </div>
        </ng-template>
        <ng-template #assistant_template let-row="row">
            <div class="px-4 py-2">
                @if (row.extension_data?.vip_assistant_name) {
                    @let name = row.extension_data.vip_assistant_name;
                    @let email = row.extension_data.vip_assistant_email;
                    <div>{{ name || email }}</div>
                    @if (name && email) {
                        <div class="text-xs opacity-30 select-all">
                            {{ email }}
                        </div>
                    }
                } @else {
                    <span class="opacity-30">-</span>
                }
            </div>
        </ng-template>
        <ng-template #booked_by_template let-row="row">
            <div class="px-4 py-2">
                <div>{{ row.booked_by_name || row.booked_by_email }}</div>
                @if (row.booked_by_name && row.booked_by_email) {
                    <div class="text-xs opacity-30 select-all">
                        {{ row.booked_by_email }}
                    </div>
                }
            </div>
        </ng-template>
        <ng-template #status_template let-row="row">
            <div class="px-4">
                <button
                    matRipple
                    class="h-10 w-30 rounded-3xl border-none"
                    [class.text-success-content]="row?.status === 'approved'"
                    [class.bg-success]="row?.status === 'approved'"
                    [class.text-error-content]="row?.status === 'declined'"
                    [class.bg-error]="row?.status === 'declined'"
                    [class.text-neutral-content]="row?.status === 'ended'"
                    [class.bg-neutral]="row?.status === 'ended'"
                    [class.text-warning-content]="
                        row?.status !== 'ended' &&
                        row?.status !== 'approved' &&
                        row?.status !== 'declined'
                    "
                    [class.bg-warning]="
                        row?.status !== 'ended' &&
                        row?.status !== 'approved' &&
                        row?.status !== 'declined'
                    "
                    [class.opacity-30]="row?.status === 'ended'"
                    [matMenuTriggerFor]="menu"
                    [disabled]="
                        row?.status === 'ended' ||
                        (row.checked_in && !row.checked_out_at)
                    "
                >
                    <div class="flex items-center space-x-2 pr-2 pl-4">
                        <div class="flex-1 text-left">
                            {{
                                (row?.status === 'ended'
                                    ? 'APP.CONCIERGE.BOOKING_STATUS_ENDED'
                                    : row?.status === 'approved'
                                      ? 'APP.CONCIERGE.BOOKING_STATUS_APPROVED'
                                      : row?.status === 'declined'
                                        ? 'APP.CONCIERGE.BOOKING_STATUS_DECLINED'
                                        : 'APP.CONCIERGE.BOOKING_STATUS_PENDING'
                                ) | translate
                            }}
                        </div>
                        @if (
                            !(
                                row?.status === 'ended' ||
                                (row.checked_in && !row.checked_out_at)
                            )
                        ) {
                            <icon class="text-2xl"> arrow_drop_down </icon>
                        }
                    </div>
                </button>
            </div>
            <mat-menu #menu="matMenu">
                <button mat-menu-item (click)="approveVisitor(row)">
                    <div class="flex items-center space-x-2">
                        <icon class="text-2xl">event_available</icon>
                        <div class="pr-2">
                            {{
                                'APP.CONCIERGE.VISITORS_ACTION_APPROVE'
                                    | translate
                            }}
                        </div>
                    </div>
                </button>
                <button mat-menu-item (click)="declineVisitor(row)">
                    <div class="flex items-center space-x-2">
                        <icon class="text-error text-2xl"> event_busy </icon>
                        <div class="pr-2">
                            {{
                                'APP.CONCIERGE.VISITORS_ACTION_DECLINE'
                                    | translate
                            }}
                        </div>
                    </div>
                </button>
            </mat-menu>
        </ng-template>
        <ng-template #action_template let-row="row">
            <div class="flex items-center justify-end px-2">
                <button icon matRipple [matMenuTriggerFor]="visitor_menu">
                    <icon>more_horiz</icon>
                </button>
                <mat-menu #visitor_menu="matMenu">
                    <button mat-menu-item (click)="viewDetails(row)">
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">visibility</icon>
                            <div>
                                {{
                                    'APP.CONCIERGE.VIP_VIEW_DETAILS' | translate
                                }}
                            </div>
                        </div>
                    </button>
                    <a mat-menu-item [href]="'mailto:' + row?.asset_id">
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">email</icon>
                            <div>
                                {{
                                    'APP.CONCIERGE.VISITORS_ACTION_EMAIL_visitor'
                                        | translate
                                }}
                            </div>
                        </div>
                    </a>
                    @if (row.extension_data?.vip_assistant_email) {
                        <a
                            mat-menu-item
                            [href]="
                                'mailto:' +
                                row.extension_data.vip_assistant_email
                            "
                        >
                            <div class="flex items-center space-x-2">
                                <icon class="text-2xl">support_agent</icon>
                                <div>
                                    {{
                                        'APP.CONCIERGE.VIP_EMAIL_ASSISTANT'
                                            | translate
                                    }}
                                </div>
                            </div>
                        </a>
                    }
                    @if (!row.checked_out_at) {
                        <button
                            mat-menu-item
                            (click)="
                                row.checked_in ? checkout(row) : checkin(row)
                            "
                        >
                            <div class="flex items-center space-x-2">
                                <icon class="text-2xl">
                                    {{
                                        row.checked_in
                                            ? 'event_busy'
                                            : 'event_available'
                                    }}
                                </icon>
                                <div>
                                    {{
                                        (row.checked_in
                                            ? 'APP.CONCIERGE.VISITORS_ACTION_CHECKOUT'
                                            : 'APP.CONCIERGE.VISITORS_ACTION_CHECKIN'
                                        ) | translate
                                    }}
                                </div>
                            </div>
                        </button>
                    }
                </mat-menu>
            </div>
        </ng-template>
        <div class="h-8 w-full"></div>
    `,
    styles: [``],
    imports: [
        CommonModule,
        MatRippleModule,
        MatTooltipModule,
        MatMenuModule,
        TranslatePipe,
        IconComponent,
        SimpleTableComponent,
    ],
})
export class VipVisitorListingComponent extends AsyncHandler {
    private _state = inject(VipVisitorsStateService);
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);
    private _dialog = inject(MatDialog);

    public readonly visitors = this._state.filtered_bookings;
    public readonly search = this._state.search;

    public get timezone() {
        const use_tz = this._settings.get('app.bookings.use_building_timezone');
        const bld_tz = this._org.building?.timezone;
        return use_tz &&
            bld_tz !== Intl.DateTimeFormat().resolvedOptions().timeZone
            ? bld_tz
            : '';
    }

    public get tz() {
        const tz = this.timezone;
        if (!tz) return '';
        return getTimezoneOffsetString(tz);
    }

    public get time_format() {
        return this._settings.time_format;
    }

    public readonly approveVisitor = (u: Booking) =>
        this._state.approveVisitor(u);
    public readonly declineVisitor = (u: Booking) =>
        this._state.declineVisitor(u);

    public readonly checkin = async (item: Booking) => {
        await this._state.setCheckinState(item, true).catch((e) => {
            notifyError(e);
        });
        this._state.poll();
    };

    public readonly checkout = async (item: Booking) => {
        await this._state.setCheckinState(item, false).catch((_) => null);
        this._state.poll();
    };

    public viewDetails(booking: Booking) {
        this._dialog.open(VipVisitorDetailsModalComponent, {
            data: { booking },
        });
    }
}
