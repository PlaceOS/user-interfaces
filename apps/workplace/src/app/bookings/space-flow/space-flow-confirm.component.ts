import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { addMinutes, format, formatDuration, isSameDay } from 'date-fns';
import { SpaceFlowService } from './space-flow.service';

@Component({
    selector: 'space-flow-confirm',
    template: `
        <ng-container *ngIf="!(loading | async); else load_state">
            <div name="heading" class="w-full">
                <a
                    button
                    mat-button
                    class="clear"
                    style="height: auto;"
                    [routerLink]="['/book', 'spaces', 'find']"
                >
                    <div class="flex items-center text-white justify-center p-2 mr-2">
                        <app-icon
                            class="text-lg"
                            [icon]="{ class: 'material-icons', content: 'arrow_back' }"
                        ></app-icon>
                        Back
                    </div>
                </a>
            </div>
            <div name="details" class="bg-white py-4 flex flex-col items-center">
                <h2 class="m-auto width-tablet p-2">Your meeting details</h2>
                <div name="line-item" class="m-auto width-tablet py-4 flex items-center">
                    <div class="rounded-full bg-gray-100 text-3xl mr-4">
                        <app-icon [icon]="{ class: 'material-icons', content: 'event' }"></app-icon>
                    </div>
                    <div class="flex-1">{{ format_date }}</div>
                    <a button mat-button class="inverse" [routerLink]="['/book', 'spaces']">Edit</a>
                </div>
                <div name="line-item" class="m-auto width-tablet py-4 flex items-center">
                    <div class="rounded-full bg-gray-100 text-3xl mr-4">
                        <app-icon
                            [icon]="{ class: 'material-icons', content: 'schedule' }"
                        ></app-icon>
                    </div>
                    <div class="flex-1">{{ format_duration }}</div>
                    <a button mat-button class="inverse" [routerLink]="['/book', 'spaces']">Edit</a>
                </div>
                <div name="line-item" class="m-auto width-tablet py-4 flex items-center">
                    <div class="rounded-full bg-gray-100 text-3xl mr-4">
                        <app-icon [icon]="{ class: 'material-icons', content: 'place' }"></app-icon>
                    </div>
                    <div class="flex-1">{{ format_space }}</div>
                    <a button mat-button class="inverse" [routerLink]="['/book', 'spaces', 'find']"
                        >Edit</a
                    >
                </div>
                <div name="line-item" class="m-auto width-tablet py-4 flex items-center mb-4">
                    <div class="rounded-full bg-gray-100 text-3xl mr-4">
                        <app-icon [icon]="{ class: 'material-icons', content: 'group' }"></app-icon>
                    </div>
                    <div class="flex-1">{{ format_capacity }}</div>
                    <a button mat-button class="inverse" [routerLink]="['/book', 'spaces', 'find']"
                        >Edit</a
                    >
                </div>
                <button mat-button (click)="save()">Confirm</button>
            </div>
        </ng-container>
        <ng-template #load_state>
            <div class="info-block center">
                <div class="icon">
                    <mat-spinner [diameter]="32"></mat-spinner>
                </div>
                <div class="text">Confirming meeting booking...</div>
            </div>
        </ng-template>
    `,
    styles: [
        `
            :host {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                overflow: auto;
            }

            [name='heading'] {
                background-color: #00539f;
            }

            [name='line-item'] {
                border-bottom: 1px solid #ccc;
            }
        `,
    ],
})
export class SpaceFlowConfirmComponent {
    public readonly save = () => {
        this._service
            .save()
            .then(() =>
                this._router.navigate(['/book', 'spaces'], { queryParams: { success: 'true' } })
            );
    };
    public readonly loading = this._service.loading_event;

    constructor(private _service: SpaceFlowService, private _router: Router) {}

    public get format_date(): string {
        const form = this._service.event_form;
        const date = new Date(form.controls.date.value);
        const end = addMinutes(date, form.controls.duration.value);
        return `${format(date, 'MMMM do, yyyy, h:mma')} - ${
            isSameDay(date, end) ? format(end, 'h:mma') : format(end, 'MMMM do, yyyy, h:mma')
        }`;
    }

    public get format_duration(): string {
        const form = this._service.event_form;
        return formatDuration({ minutes: form.controls.duration.value });
    }

    public get format_space(): string {
        const form = this._service.event_form;
        return (
            (form.controls.resources.value || [])
                .map(
                    (space) =>
                        `${space.level?.display_name || space.level?.name}, ${
                            space.display_name || space.name
                        }`
                )
                .join(', ') || '<No Rooms>'
        );
    }

    public get format_capacity(): string {
        const form = this._service.event_form;
        const attendees = form.controls.attendees.value;
        return `${attendees.length} Attendee${attendees.length === 1 ? '' : 's'}`;
    }
}
