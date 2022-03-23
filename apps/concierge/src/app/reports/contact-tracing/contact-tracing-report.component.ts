import { Component } from '@angular/core';
import { ContactTracingStateService } from './contact-tracing-state.service';

@Component({
    selector: 'app-contact-tracing-report',
    template: `
        <div
            class="w-[64rem] max-w-[calc(100%-2rem)] rounded overflow-hidden bg-white shadow mx-auto my-2"
        >
            <div
                class="border-b border-gray-200 flex items-center justify-between px-4"
            >
                <h2 class="py-2 text-xl font-medium">Contact Events</h2>
                <a-user-search-field
                    class="w-64 h-12 mb-2 mt-1"
                    [ngModel]="(options | async)?.user"
                    (ngModelChange)="setOptions({ user: $event })"
                ></a-user-search-field>
            </div>
            <custom-table
                class="w-full h-full"
                [dataSource]="tracing_events"
                [columns]="['date', 'user_id', 'contact_id', 'duration']"
                [display_column]="[
                    'Time of Contact',
                    'Person',
                    'Close Contact',
                    'Duration'
                ]"
                [column_size]="['12r', '14r', 'flex']"
                [template]="{
                    options: option_state,
                    date: date_state,
                    distance: distance_state,
                    user_id: user_state,
                    contact_id: user_state
                }"
                [pagination]="true"
                [page_size]="30"
                empty="No contact records for selected period"
            ></custom-table>
            <ng-template #option_state let-data="data">
                <span
                    class="text-xs px-2 py-1 rounded bg-gray-300"
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
                {{ data | date: 'mediumDate' }}, {{ data | date: 'shortTime' }}
            </ng-template>
            <ng-template #distance_state let-data="data">
                {{ data }}m
            </ng-template>
        </div>
        <button
            mat-icon-button
            class="bg-white absolute bottom-2 left-2 shadow"
            matTooltip="Download Report"
            (click)="downloadReport()"
        >
            <app-icon>download</app-icon>
        </button>
    `,
    styles: [``],
})
export class ContactTracingReportComponent {
    public readonly options = this._state.options;
    public readonly tracing_events = this._state.events;
    public readonly setOptions = (_) => this._state.setOptions(_);
    public readonly downloadReport = () => this._state.downloadReport();

    constructor(private _state: ContactTracingStateService) {}
}
