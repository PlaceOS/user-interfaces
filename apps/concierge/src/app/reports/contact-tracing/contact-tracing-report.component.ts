import { Component } from '@angular/core';
import { formatDuration } from 'date-fns';
import { ContactTracingStateService } from './contact-tracing-state.service';
import { SettingsService } from '@placeos/common';

@Component({
    selector: 'app-contact-tracing-report',
    template: `
        <contact-tracing-options
            (printing)="printing = $event"
        ></contact-tracing-options>
        <div
            class="relative flex-1 h-1/2 w-full overflow-auto print:overflow-visible print:h-auto"
            printable
        >
            <ng-container *ngIf="!(loading | async); else load_state">
                <div
                    class="w-[64rem] max-w-[calc(100%-2rem)] rounded overflow-hidden bg-base-100 shadow mx-auto my-2"
                    printable
                    *ngIf="(options | async)?.user; else empty_state"
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
                    <div
                        class="border-b border-base-200 flex items-center justify-between px-4"
                    >
                        <h2 class="py-2 text-xl font-medium">Contact Events</h2>
                    </div>
                    <custom-table
                        class="w-full h-full"
                        [dataSource]="tracing_events"
                        [columns]="[
                            'date',
                            'user_id',
                            'contact_id',
                            'duration'
                        ]"
                        [display_column]="[
                            'Time of Contact',
                            'Person',
                            'Close Contact',
                            'Duration'
                        ]"
                        [column_size]="['12r', '14r', 'flex', '10r']"
                        [template]="{
                            options: option_state,
                            date: date_state,
                            distance: distance_state,
                            user_id: user_state,
                            contact_id: user_state,
                            duration: duration_state
                        }"
                        [pagination]="true"
                        [page_size]="30"
                        empty="No contact records for selected period"
                    ></custom-table>
                    <ng-template #option_state let-data="data">
                        <span
                            class="text-xs px-2 py-1 rounded bg-base-200"
                            *ngIf="data.length"
                            [matTooltip]="options(data)"
                        >
                            {{ data.length }} option(s)
                        </span>
                    </ng-template>
                    <ng-template #user_state let-data="data" let-row="row">{{
                        (data | user | async)?.name || row.mac_address
                    }}</ng-template>
                    <ng-template #date_state let-data="data">
                        {{ data | date: 'mediumDate' }},
                        {{ data | date: time_format }}
                    </ng-template>
                    <ng-template #duration_state let-data="data">
                        {{ formatDuration(data || 0) || 'Less than a minute' }}
                    </ng-template>
                    <ng-template #distance_state let-data="data">
                        {{ data }}m
                    </ng-template>
                </div>
            </ng-container>
        </div>
        <button
            icon
            matRipple
            class="bg-base-100 absolute bottom-2 left-2 shadow"
            matTooltip="Download Report"
            (click)="downloadReport()"
        >
            <app-icon>download</app-icon>
        </button>
        <ng-template #load_state>
            <div
                class="p-8 flex flex-col items-center justify-center space-y-2"
            >
                <map-spinner diameter="32"></map-spinner>
                <p>{{ loading | async }}</p>
            </div>
        </ng-template>
        <ng-template #empty_state>
            <div
                class="p-8 flex flex-col items-center justify-center space-y-2 screen-only"
            >
                <p class="opacity-60">Select a user from the topbar to begin</p>
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
