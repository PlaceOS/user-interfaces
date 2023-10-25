import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { notifySuccess, openConfirmModal } from '@placeos/common';
import { CalendarEvent } from '@placeos/events';
import { format } from 'date-fns';
import { ControlStateService } from '../control-state.service';

@Component({
    selector: 'select-meeting-modal',
    template: `
        <div class="fixed inset-0 bg-base-100">
            <button
                icon
                matRipple
                mat-dialog-close
                class="absolute top-2 right-2"
            >
                <app-icon>close</app-icon>
            </button>
            <div class="w-[40rem] max-w-full p-2 mx-auto">
                <h2 class="w-full text-center my-4 text-2xl font-medium">
                    Select a meeting to join
                </h2>
                <div class="w-full">
                    <label for="calendar">User calendar:</label>
                    <mat-form-field appearance="outline" class="w-full">
                        <mat-select
                            [ngModel]="calendar | async"
                            (ngModelChange)="setCalendar($event)"
                        >
                            <mat-option
                                *ngFor="let cal of calendars | async"
                                [value]="cal"
                            >
                                {{ cal.name || cal.summary }}
                            </mat-option>
                        </mat-select>
                        <mat-hint>
                            If you are joining the meeting on behalf of another,
                            please use the dropdown to select their email
                        </mat-hint>
                    </mat-form-field>
                </div>
                <h3 class="w-full my-4 font-medium">
                    {{ (events | async)?.length || '0' }} Available meeting(s)
                </h3>
                <ng-container *ngIf="!loading; else load_state">
                    <div
                        class="overflow-auto space-y-2"
                        *ngIf="(events | async)?.length; else empty_state"
                    >
                        <button
                            btn
                            matRipple
                            class="flex items-center p-4 w-full border border-base-200 rounded"
                            *ngFor="let event of events | async"
                            (click)="select(event)"
                        >
                            <div class="flex-1 text-left truncate w-1/2">
                                {{ event?.title }}
                            </div>
                            <div class="text-sm opacity-60">
                                {{ event?.date | date: 'shortTime' }}
                            </div>
                        </button>
                    </div>
                </ng-container>
            </div>
        </div>
        <ng-template #empty_state>
            <div
                class="w-full flex items-center justify-center opacity-40 h-32"
            >
                No events found for selected calendar with a meeting URL
            </div>
        </ng-template>
        <ng-template #load_state>
            <div
                class="w-full flex items-center justify-center opacity-40 h-32"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p>Loading events...</p>
            </div>
        </ng-template>
    `,
    styles: [``],
})
export class SelectMeetingModalComponent {
    public readonly calendars = this._service.calendars;
    public readonly events = this._service.events;

    public loading = false;

    public readonly calendar = this._service.calendar;

    public readonly setCalendar = (c) => this._service.setCalendar(c);

    public readonly select = async (e: CalendarEvent) => {
        const details = await openConfirmModal(
            {
                title: 'Join meeting',
                content: `Are you sure you wish to join ${
                    e.organiser?.name
                }'s meeting for ${format(e.date, 'h:mm a')}?`,
                icon: { content: 'login' },
            },
            this._dialog
        );
        if (details.reason !== 'done') return;
        await this._service.setEvent(e);
        notifySuccess('Successfully setup meeting');
        this._dialog_ref.close();
    };

    constructor(
        private _service: ControlStateService,
        private _dialog: MatDialog,
        private _dialog_ref: MatDialogRef<SelectMeetingModalComponent>
    ) {}
}
