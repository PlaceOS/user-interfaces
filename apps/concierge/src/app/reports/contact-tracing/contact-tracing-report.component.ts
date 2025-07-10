import { Component, inject } from '@angular/core';
import { formatDuration, SettingsService } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { debounceTime, map } from 'rxjs/operators';
import { ContactTracingStateService } from './contact-tracing-state.service';

@Component({
    selector: 'app-contact-tracing-report',
    template: `
        <contact-tracing-options
            (printing)="printing = $event"
            (download)="downloadReport()"
            class="print:hidden"
        />
        <div
            class="relative h-1/2 w-full flex-1 overflow-auto print:h-auto print:overflow-visible"
        >
            <div class="w-full">
                <div
                    class="m-4 flex items-center overflow-hidden rounded bg-base-200 p-4"
                >
                    <img
                        auth
                        class="h-12"
                        [source]="(logo | async)?.src || (logo | async)"
                    />
                    <div class="flex-1"></div>
                    <h2 class="px-2 text-2xl font-medium">
                        {{
                            'APP.CONCIERGE.REPORTS_CONTACTS_HEADER' | translate
                        }}
                    </h2>
                </div>
            </div>
            @if (!(loading | async)) {
                @if ((options | async)?.user) {
                    <div
                        class="mx-auto my-2 w-[64rem] max-w-[calc(100%-2rem)] rounded-lg border border-base-200"
                    >
                        <div
                            class="flex items-center justify-between border-b border-base-200 px-4"
                        >
                            <h2 class="py-2 text-xl font-medium">
                                Contact Events
                            </h2>
                        </div>
                        <simple-table
                            class="block w-full text-sm"
                            [data]="tracing_events"
                            [columns]="[
                                {
                                    key: 'date',
                                    name: 'Time of Contact',
                                    content: date_template,
                                },
                                {
                                    key: 'user_id',
                                    name: 'Person',
                                    content: user_template,
                                },
                                {
                                    key: 'contact_id',
                                    name: 'Close Contact',
                                    content: user_template,
                                },
                                {
                                    key: 'duration',
                                    name: 'Duration',
                                    content: duration_template,
                                },
                            ]"
                            [sortable]="true"
                            [page_size]="print ? 0 : 30"
                            empty_message="No contact tracing events for selected period"
                        ></simple-table>
                        <ng-template
                            #user_template
                            let-data="data"
                            let-row="row"
                        >
                            <div class="p-4">
                                {{
                                    (data | user | async)?.name ||
                                        row.mac_address
                                }}
                            </div>
                        </ng-template>
                        <ng-template #date_template let-data="data">
                            <div class="p-4">
                                {{ data | date: 'mediumDate' }},
                                {{ data | date: time_format }}
                            </div>
                        </ng-template>
                        <ng-template #duration_template let-data="data">
                            <div class="p-4">
                                {{
                                    formatDuration(data || 0) ||
                                        'Less than a minute'
                                }}
                            </div>
                        </ng-template>
                    </div>
                } @else {
                    <div
                        class="screen-only flex flex-col items-center justify-center space-y-2 p-8"
                    >
                        <p class="opacity-30">
                            Select a user from the topbar to begin
                        </p>
                    </div>
                }
            } @else {
                <div
                    class="flex flex-col items-center justify-center space-y-2 p-8"
                >
                    <map-spinner diameter="32"></map-spinner>
                    <p class="opacity-30">{{ loading | async }}</p>
                </div>
            }
        </div>
    `,
    styles: [
        `
            :host {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
            }
        `,
    ],
    standalone: false,
})
export class ContactTracingReportComponent {
    private _state = inject(ContactTracingStateService);
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);

    public printing = false;

    public readonly loading = this._state.loading;
    public readonly options = this._state.options;
    public readonly tracing_events = this._state.events;
    public readonly setOptions = (_) => this._state.setOptions(_);
    public readonly downloadReport = () => this._state.downloadReport();

    public readonly formatDuration = (d) =>
        formatDuration({ hours: Math.floor(d / 60), minutes: d % 60 });

    public get time_format() {
        return this._settings.time_format;
    }

    public readonly logo = this._org.active_building.pipe(
        debounceTime(500),
        map(
            () =>
                (this._settings.theme === 'dark'
                    ? this._settings.get('app.logo_dark')
                    : this._settings.get('app.logo_light')) || {},
        ),
    );
}
