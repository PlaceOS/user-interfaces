import { Component, Input } from '@angular/core';
import { downloadFile, jsonToCsv, unique } from '@placeos/common';
import { map, take } from 'rxjs/operators';
import { AssetsReportService } from './assets-report.service';

@Component({
    selector: 'asset-report-users',
    template: `
        <div
            class="m-4 rounded bg-base-100 border border-base-200 overflow-hidden"
        >
            <div class="border-b border-base-200 px-4 py-2 flex items-center">
                <h3 class="font-bold text-xl flex-1">Asset Requestees</h3>
                <button icon matRipple (click)="download()" *ngIf="!print">
                    <app-icon>download</app-icon>
                </button>
            </div>
            <simple-table
                class="w-full block text-sm"
                [data]="users"
                [columns]="[
                    { key: 'name', name: 'Name' },
                    { key: 'booking_count', name: 'Bookings' },
                    { key: 'asset_count', name: 'Assets Booked' },
                    { key: 'asset_types', name: 'Asset Types' },
                ]"
                [sortable]="true"
                [page_size]="print ? 0 : 10"
                empty_message="No events for selected period"
            ></simple-table>
        </div>
    `,
    styles: [``],
})
export class AssetReportUsersComponent {
    @Input() public print: boolean = false;
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
        const data = await this.users.pipe(take(1)).toPromise();
        downloadFile('report-assets-users.csv', jsonToCsv(data));
    };

    constructor(private _state: AssetsReportService) {}
}
