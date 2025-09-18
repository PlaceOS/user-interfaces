import { Component, inject } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { i18n, notifySuccess } from '@placeos/common';
import { format } from 'date-fns';
import { openConfirmModal } from 'libs/components/src/lib/confirm-modal.component';
import { CalendarEvent } from '@placeos/common';
import { ControlStateService } from '../control-state.service';

@Component({
    selector: 'select-meeting-modal',
    template: `
        <div class="fixed inset-0 bg-base-100">
            <button
                icon
                matRipple
                mat-dialog-close
                class="absolute right-2 top-2"
            >
                <icon>close</icon>
            </button>
            <div class="mx-auto w-[40rem] max-w-full p-2">
                <h2 class="my-4 w-full text-center text-2xl font-medium">
                    {{ 'APP.CONTROL.MEETING_SELECT' | translate }}
                </h2>
                <div class="w-full">
                    <label for="calendar">User calendar:</label>
                    <mat-form-field appearance="outline" class="w-full">
                        <mat-select
                            [ngModel]="calendar | async"
                            (ngModelChange)="setCalendar($event)"
                        >
                            @for (cal of calendars | async; track cal) {
                                <mat-option [value]="cal">
                                    {{ cal.name || cal.summary }}
                                </mat-option>
                            }
                        </mat-select>
                        <mat-hint>
                            {{ 'APP.CONTROL.MEETING_JOIN_INFO' | translate }}
                        </mat-hint>
                    </mat-form-field>
                </div>
                <h3 class="my-4 w-full font-medium">
                    {{
                        'APP.CONTROL.MEETING_COUNT'
                            | translate
                                : { count: (events | async)?.length || '0' }
                    }}
                </h3>
                @if (!loading) {
                    @if ((events | async)?.length) {
                        <div class="space-y-2 overflow-auto">
                            @for (event of events | async; track event) {
                                <button
                                    btn
                                    matRipple
                                    class="flex w-full items-center rounded border border-base-200 p-4"
                                    (click)="select(event)"
                                >
                                    <div
                                        class="w-1/2 flex-1 truncate text-left"
                                    >
                                        {{ event?.title }}
                                    </div>
                                    <div class="text-sm opacity-60">
                                        {{ event?.date | date: 'shortTime' }}
                                    </div>
                                </button>
                            }
                        </div>
                    } @else {
                        <div
                            class="flex h-32 w-full items-center justify-center opacity-40"
                        >
                            {{ 'APP.CONTROL.MEETINGS_EMPTY' | translate }}
                        </div>
                    }
                } @else {
                    <div
                        class="flex h-32 w-full items-center justify-center opacity-40"
                    >
                        <mat-spinner [diameter]="32"></mat-spinner>
                        <p>{{ 'APP.CONTROL.MEETINGS_LOADING' | translate }}</p>
                    </div>
                }
            </div>
        </div>
    `,
    styles: [``],
    standalone: false,
})
export class SelectMeetingModalComponent {
    private _service = inject(ControlStateService);
    private _dialog = inject(MatDialog);
    private _dialog_ref =
        inject<MatDialogRef<SelectMeetingModalComponent>>(MatDialogRef);

    public readonly calendars = this._service.calendars;
    public readonly events = this._service.events;

    public loading = false;

    public readonly calendar = this._service.calendar;

    public readonly setCalendar = (c) => this._service.setCalendar(c);

    public readonly select = async (e: CalendarEvent) => {
        const details = await openConfirmModal(
            {
                title: i18n('APP.CONTROL.MEETING_JOIN_TITLE'),
                content: i18n('APP.CONTROL.MEETING_JOIN_MSG', {
                    name: e.organiser?.name,
                    time: format(e.date, 'h:mm a'),
                }),
                icon: { content: 'login' },
            },
            this._dialog,
        );
        details.loading(i18n('APP.CONTROL.MEETING_JOIN_LOADING'));
        if (details.reason !== 'done') return;
        await this._service.setEvent(e);
        notifySuccess(i18n('APP.CONTROL.MEETING_JOIN_SUCCESS'));
        this._dialog_ref.close();
    };
}
