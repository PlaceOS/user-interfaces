import { Component, Input } from '@angular/core';
import {
    downloadFile,
    jsonToCsv,
    nextValueFrom,
    unique,
} from '@placeos/common';
import { map } from 'rxjs/operators';
import { AssetsReportService } from './assets-report.service';

@Component({
    selector: 'asset-report-users',
    template: `
        <div
            class="m-4 overflow-hidden rounded border border-base-200 bg-base-100"
        >
            <div class="flex items-center border-b border-base-200 px-4 py-2">
                <h3 class="flex-1 text-xl font-bold">
                    {{ 'APP.CONCIERGE.REPORTS_ASSETS_REQUESTEES' | translate }}
                </h3>
                <button
                    icon
                    matRipple
                    [matTooltip]="
                        'APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE' | translate
                    "
                    (click)="download()"
                    *ngIf="!print"
                >
                    <icon>download</icon>
                </button>
            </div>
            <simple-table
                class="block w-full text-sm"
                [data]="users"
                [columns]="[
                    { key: 'name', name: 'FORM.NAME' | translate },
                    {
                        key: 'booking_count',
                        name: 'RESOURCE.BOOKINGS' | translate,
                    },
                    {
                        key: 'asset_count',
                        name: 'APP.CONCIERGE.REPORTS_ASSETS_BOOKED' | translate,
                    },
                    {
                        key: 'asset_types',
                        name: 'APP.CONCIERGE.REPORTS_ASSETS_TYPES' | translate,
                    },
                ]"
                [sortable]="true"
                [page_size]="print ? 0 : 10"
                [empty_message]="
                    'APP.CONCIERGE.REPORTS_DAILY_EMPTY' | translate
                "
            ></simple-table>
        </div>
    `,
    styles: [``],
    standalone: false,
})
export class AssetReportUsersComponent {
    @Input() public print = false;
    public readonly users = this._state.stats$.pipe(
        map(({ events, bookings, products }) => {
            const data = unique(events, 'host').map((user_event) => {
                const host_bookings = bookings.filter(
                    (b) => b.booked_by_email === user_event.host,
                );
                const booked_assets = unique(
                    host_bookings.map((_) => _.asset_ids).flat(),
                );
                const booked_products = unique(
                    booked_assets.map(
                        (i) =>
                            products.find((p) =>
                                p.assets.find((_) => _.id === i),
                            )?.name,
                    ),
                );
                return {
                    name:
                        user_event.organiser?.name ||
                        user_event.organiser?.email ||
                        user_event.host,
                    booking_count: events.filter(
                        (event) => event.host === user_event.host,
                    ).length,
                    asset_count: booked_assets.length,
                    asset_types: booked_products.length || 0,
                };
            });
            return data;
        }),
    );

    public readonly download = async () => {
        const data = await nextValueFrom(this.users);
        downloadFile('report-assets-users.csv', jsonToCsv(data));
    };

    constructor(private _state: AssetsReportService) {}
}
