import { Component } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { ContactTracingStateService } from './contact-tracing-state.service';

@Component({
    selector: 'app-contact-tracing-report',
    template: ` <div
        class="w-[64rem] max-w-[calc(100%-2rem)] rounded overflow-hidden bg-white shadow mx-auto my-2"
    >
        <div
            class="border-b border-gray-200 flex items-center justify-between px-4"
        >
            <h2 class="py-2 text-xl font-medium">Contact Events</h2>
            <mat-form-field appearance="outline" class="h-[3.25rem]">
                <input
                    matInput
                    [ngModel]="search | async"
                    (ngModelChange)="search.next($event)"
                    placeholder="Search for user..."
                />
            </mat-form-field>
        </div>
        <custom-table
            class="w-full h-full"
            [dataSource]="tracing_events"
            [columns]="['date', 'user', 'contact', 'location_name', 'distance']"
            [display_column]="[
                'Time of Contact',
                'Person',
                'Close Contact',
                'Location',
                'Distance'
            ]"
            [column_size]="['12r', '12r', 'flex']"
            [template]="{
                options: option_state,
                date: date_state,
                distance: distance_state
            }"
            [pagination]="true"
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
        <ng-template #date_state let-data="data">
            {{ data | date: 'mediumDate' }}, {{ data | date: 'shortTime' }}
        </ng-template>
        <ng-template #distance_state let-data="data"> {{ data }}m </ng-template>
    </div>`,
    styles: [``],
})
export class ContactTracingReportComponent {
    public readonly search = new BehaviorSubject('');
    public readonly tracing_events = combineLatest([
        this.search.pipe(map((_) => _.toLowerCase())),
        this._state.events,
    ]).pipe(
        map(([search, events]) =>
            events.filter((_) => _.user.toLowerCase().includes(search))
        )
    );

    constructor(private _state: ContactTracingStateService) {}
}
