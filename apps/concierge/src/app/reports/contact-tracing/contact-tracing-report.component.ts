import { Component } from '@angular/core';
import { formatDuration } from 'date-fns';
import { ContactTracingStateService } from './contact-tracing-state.service';
import { SettingsService } from '@placeos/common';

@Component({
    selector: 'app-contact-tracing-report',
    template: `
        <contact-tracing-options
            (printing)="printing = $event"
            (download)="downloadReport()"
            class="print:hidden"
        ></contact-tracing-options>
        <div
            class="relative flex-1 h-1/2 w-full overflow-auto print:overflow-visible print:h-auto"
        >
            <div class="w-full">
                <div
                    class="flex items-center m-4 p-4 rounded bg-base-200 overflow-hidden"
                >
                    <img [src]="logo.src" class="h-12" />
                    <div class="flex-1"></div>
                    <h2 class="text-2xl font-medium px-2">
                        Contact Tracing Report
                    </h2>
                </div>
            </div>
            <ng-container *ngIf="!(loading | async); else load_state">
                <ng-container *ngIf="(options | async)?.user; else empty_state">
                    <div
                        class="w-[64rem] max-w-[calc(100%-2rem)] mx-auto my-2 rounded-lg border border-base-200"
                    >
                        <div
                            class="border-b border-base-200 flex items-center justify-between px-4"
                        >
                            <h2 class="py-2 text-xl font-medium">
                                Contact Events
                            </h2>
                        </div>
                        <simple-table
                            class="w-full block text-sm"
                            [data]="tracing_events"
                            [columns]="[
                                {
                                    key: 'date',
                                    name: 'Time of Contact',
                                    content: date_template
                                },
                                {
                                    key: 'user_id',
                                    name: 'Person',
                                    content: user_template
                                },
                                {
                                    key: 'contact_id',
                                    name: 'Close Contact',
                                    content: user_template
                                },
                                {
                                    key: 'duration',
                                    name: 'Duration',
                                    content: duration_template
                                }
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
                </ng-container>
            </ng-container>
        </div>
        <ng-template #load_state>
            <div
                class="p-8 flex flex-col items-center justify-center space-y-2"
            >
                <map-spinner diameter="32"></map-spinner>
                <p class="opacity-30">{{ loading | async }}</p>
            </div>
        </ng-template>
        <ng-template #empty_state>
            <div
                class="p-8 flex flex-col items-center justify-center space-y-2 screen-only"
            >
                <p class="opacity-30">Select a user from the topbar to begin</p>
            </div>
        </ng-template>
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
})
export class ContactTracingReportComponent {
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

    public get logo() {
        return this._settings.get('app.logo_light') || {};
    }

    constructor(
        private _state: ContactTracingStateService,
        private _settings: SettingsService
    ) {}
}
