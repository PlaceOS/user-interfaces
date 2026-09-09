import { CommonModule } from '@angular/common';
import {
    Component,
    computed,
    inject,
    input,
    linkedSignal,
} from '@angular/core';
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
            <div class="overflow-x-auto print:overflow-visible">
                <simple-table
                    class="-mx-px block w-[calc(100%+2px)] min-w-[32rem] text-sm print:min-w-0"
                    [data]="user_no_shows()"
                    [columns]="[
                        {
                            key: 'host',
                            name:
                                'APP.CONCIERGE.PARKING_RESERVED_FOR'
                                | translate,
                            content: host_template,
                            size: 'minmax(10rem, 1fr)',
                        },
                        {
                            key: 'count',
                            size: '9rem',
                            name: 'APP.CONCIERGE.REPORTS_NO_SHOWS' | translate,
                        },
                        {
                            key: 'incidents',
                            name: 'COMMON.DETAILS' | translate,
                            content: expand_template,
                            size: '9rem',
                            sortable: false,
                        },
                    ]"
                    [sortable]="true"
                    [child_template]="incidents_template"
                    [show_children]="show_children()"
                    [page_size]="print() ? 0 : 10"
                    [empty_message]="
                        'APP.CONCIERGE.REPORTS_DAILY_EMPTY' | translate
                    "
                ></simple-table>
            </div>
            <ng-template #host_template let-row="row">
                <div class="min-w-0 p-4 break-words">
                    <div>{{ row.host }}</div>
                    @if (row.email && row.email !== row.host) {
                        <div class="text-xs opacity-60">{{ row.email }}</div>
                    }
                </div>
            </ng-template>
            <ng-template #expand_template let-row="row">
                @if (!print()) {
                    <button
                        type="button"
                        matRipple
                        class="flex items-center gap-2 p-4"
                        [attr.aria-expanded]="!!show_children()[row.id]"
                        (click)="toggleRow(row.id)"
                    >
                        <icon>{{
                            show_children()[row.id]
                                ? 'expand_less'
                                : 'expand_more'
                        }}</icon>
                        <span>{{ 'COMMON.DETAILS' | translate }}</span>
                        <span class="sr-only">{{ row.host }}</span>
                    </button>
                }
            </ng-template>
            <ng-template #incidents_template let-row="row">
                <div class="bg-base-200/40 px-4 py-2">
                    <table class="w-full text-left">
                        <thead class="text-xs font-medium opacity-60">
                            <tr>
                                <th scope="col" class="pr-4 pb-1">
                                    {{ 'FORM.DATE' | translate }}
                                </th>
                                <th scope="col" class="pr-4 pb-1">
                                    {{ 'COMMON.LOCATION' | translate }}
                                </th>
                                <th scope="col" class="pb-1">
                                    {{
                                        'APP.CONCIERGE.PARKING_BAY_NUMBER'
                                            | translate
                                    }}
                                </th>
                            </tr>
                        </thead>
                        <tbody class="divide-base-200 divide-y">
                            @for (incident of row.incidents; track incident) {
                                <tr>
                                    <td
                                        class="py-2 pr-4 align-top whitespace-nowrap"
                                    >
                                        {{
                                            incident.date
                                                | date: 'mediumDate' : timezone
                                        }}
                                        <div class="text-xs opacity-60">
                                            {{
                                                incident.date
                                                    | date
                                                        : time_format
                                                        : timezone
                                            }}
                                            -
                                            {{
                                                incident.date_end
                                                    | date
                                                        : time_format
                                                        : timezone
                                            }}
                                        </div>
                                    </td>
                                    <td class="py-2 pr-4 align-top">
                                        {{
                                            incident.location ||
                                                ('COMMON.EMPTY' | translate)
                                        }}
                                    </td>
                                    <td class="py-2 align-top">
                                        {{
                                            (
                                                incident.asset_id
                                                | parkingSpace
                                                | async
                                            )?.identifier ||
                                                incident.asset_id ||
                                                ('COMMON.EMPTY' | translate)
                                        }}
                                    </td>
                                </tr>
                            }
                        </tbody>
                    </table>
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
        const list = noShowReportBookings(this._bookings()).map(
            (booking, index) => {
                const level = this._org.levelWithID(booking.zones || []);
                const building = this._org.find(level?.parent_id);
                const email = booking.user_email?.trim().toLowerCase() || '';
                return {
                    user_key: email
                        ? `email:${email}`
                        : booking.user_id
                          ? `id:${booking.user_id}`
                          : `booking:${index}`,
                    email,
                    host: booking.user_name || email || booking.user_id,
                    date: booking.date,
                    date_end: booking.date_end || booking.booking_end * 1000,
                    location: [
                        building?.display_name || building?.name,
                        level?.display_name || level?.name,
                    ]
                        .filter(Boolean)
                        .join(', '),
                    asset_id: booking.asset_id,
                };
            },
        );
        list.sort((a, b) => a.date - b.date);
        return list;
    });

    public readonly user_no_shows = computed(() => {
        const incidents = this.no_shows();
        const users = new Map<
            string,
            {
                id: string;
                host: string;
                email: string;
                count: number;
                incidents: typeof incidents;
            }
        >();
        for (const incident of incidents) {
            const user = users.get(incident.user_key) || {
                id: incident.user_key,
                host: incident.host,
                email: incident.email,
                count: 0,
                incidents: [],
            };
            user.incidents.push(incident);
            user.count += 1;
            users.set(incident.user_key, user);
        }
        return [...users.values()].sort((a, b) => b.count - a.count);
    });

    private readonly _expanded = linkedSignal({
        source: this.user_no_shows,
        computation: (): Record<string, boolean> => ({}),
    });

    public readonly show_children = computed(() =>
        this.print()
            ? Object.fromEntries(
                  this.user_no_shows().map((row) => [row.id, true]),
              )
            : this._expanded(),
    );

    public toggleRow(id: string) {
        this._expanded.update((expanded) => ({
            ...expanded,
            [id]: !expanded[id],
        }));
    }

    public readonly download = async () => {
        const rows = await Promise.all(
            this.user_no_shows().map(async (row) => ({
                host: row.host,
                email: row.email,
                no_show_count: row.count,
                incidents: (
                    await Promise.all(
                        row.incidents.map(async (incident) =>
                            [
                                this._state.formatBookingDate(
                                    incident.date,
                                    'yyyy-MM-dd HH:mm',
                                ),
                                this._state.formatBookingDate(
                                    incident.date_end,
                                    'yyyy-MM-dd HH:mm',
                                ),
                                incident.location,
                                await this._bayNumber(incident.asset_id),
                            ].join(' | '),
                        ),
                    )
                ).join('\n'),
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
