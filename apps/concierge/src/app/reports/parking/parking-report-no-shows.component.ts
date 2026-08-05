import { CommonModule } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ParkingSpacePipe } from '@placeos/assets';
import { downloadFile, jsonToCsv, OrganisationService } from '@placeos/common';
import {
    IconComponent,
    SimpleTableComponent,
    TranslatePipe,
} from '@placeos/components';
import { noShowReportBookings } from '../reports.utilities';
import { ParkingReportService } from './parking-report.service';

@Component({
    selector: 'parking-report-no-shows',
    template: `
        <div
            class="border-base-300 bg-base-100 m-4 overflow-hidden rounded-sm border shadow"
        >
            <div class="border-base-200 flex items-center border-b px-4 py-2">
                <h3 class="flex-1 text-xl font-bold">
                    {{ 'APP.CONCIERGE.REPORTS_NO_SHOWS' | translate }}
                </h3>
                @if (!print()) {
                    <button
                        icon
                        default
                        matRipple
                        [matTooltip]="
                            'APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE' | translate
                        "
                        (click)="download()"
                    >
                        <icon>download</icon>
                    </button>
                }
            </div>
            <simple-table
                class="-mx-px block w-[calc(100%+2px)] text-sm"
                [data]="no_shows()"
                [columns]="[
                    {
                        key: 'host',
                        name: 'APP.CONCIERGE.PARKING_RESERVED_FOR' | translate,
                    },
                    {
                        key: 'date',
                        name: 'FORM.DATE' | translate,
                        content: date_template,
                    },
                    {
                        key: 'location',
                        name: 'COMMON.LOCATION' | translate,
                    },
                    {
                        key: 'asset_id',
                        name: 'APP.CONCIERGE.PARKING_BAY_NUMBER' | translate,
                        content: bay_template,
                    },
                ]"
                [sortable]="true"
                [page_size]="print() ? 0 : 10"
                [empty_message]="
                    'APP.CONCIERGE.REPORTS_DAILY_EMPTY' | translate
                "
            ></simple-table>
            <ng-template #date_template let-row="row">
                <div class="p-4">
                    <div>{{ row.date | date: 'mediumDate' : timezone }}</div>
                    <div class="text-xs opacity-60">
                        {{ row.date | date: time_format : timezone }} -
                        {{ row.date_end | date: time_format : timezone }}
                    </div>
                </div>
            </ng-template>
            <ng-template #bay_template let-id="data">
                <div class="p-4">
                    @if (id) {
                        {{ (id | parkingSpace | async)?.identifier || id }}
                    } @else {
                        <span class="opacity-30">
                            {{ 'COMMON.EMPTY' | translate }}
                        </span>
                    }
                </div>
            </ng-template>
        </div>
    `,
    styles: [``],
    imports: [
        CommonModule,
        SimpleTableComponent,
        TranslatePipe,
        ParkingSpacePipe,
        IconComponent,
        MatRippleModule,
        MatTooltipModule,
    ],
})
export class ParkingReportNoShowsComponent {
    private _state = inject(ParkingReportService);
    private _org = inject(OrganisationService);
    private readonly _bookings = this._state.bookings;
    private readonly _parking_space = new ParkingSpacePipe();

    public readonly print = input(false);

    public get timezone() {
        return this._state.timezone;
    }

    public get time_format() {
        return this._state.time_format;
    }

    public readonly no_shows = computed(() => {
        const list = [];
        for (const booking of noShowReportBookings(this._bookings())) {
            const level = this._org.levelWithID(booking.zones || []);
            const building = this._org.find(level?.parent_id);
            list.push({
                host: booking.user_name || booking.user_email,
                date: booking.date,
                date_end: booking.date_end || booking.booking_end * 1000,
                location: [
                    building?.display_name || building?.name,
                    level?.display_name || level?.name,
                ]
                    .filter(Boolean)
                    .join(', '),
                asset_id: booking.asset_id,
            });
        }
        list.sort((a, b) => a.date - b.date);
        return list;
    });

    public readonly download = async () => {
        const rows = await Promise.all(
            this.no_shows().map(async (row) => ({
                host: row.host,
                date: this._state.formatBookingDate(
                    row.date,
                    'yyyy-MM-dd HH:mm',
                ),
                location: row.location,
                bay_number: await this._bayNumber(row.asset_id),
            })),
        );
        downloadFile('report-parking-no-shows.csv', jsonToCsv(rows));
    };

    private async _bayNumber(asset_id: string) {
        if (!asset_id) return '';
        const space = await this._parking_space.transform(asset_id);
        return space.identifier || asset_id;
    }
}
