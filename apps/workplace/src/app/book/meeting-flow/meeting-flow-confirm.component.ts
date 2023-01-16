import { Component, Input, Optional } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { BaseClass, notifyError } from '@placeos/common';
import { CalendarEvent, EventFormService } from '@placeos/events';
import { OrganisationService } from '@placeos/organisation';
import { SpacePipe } from 'libs/spaces/src/lib/space.pipe';

@Component({
    selector: 'meeting-flow-confirm',
    template: `
        <button icon matRipple *ngIf="show_close" (click)="dismiss()">
            <app-icon>close</app-icon>
        </button>
        <header class="flex items-center justify-between px-2">
            <h2 i18n>Confirm Meeting booking</h2>
            <mat-spinner diameter="32" *ngIf="loading | async"></mat-spinner>
        </header>
        <section period class="flex space-x-1 px-2">
            <app-icon class="text-success mt-1">done</app-icon>
            <div details class="leading-6">
                <h3>{{ event.title || '~Untitled~' }}</h3>
                <div class="flex items-center space-x-2">
                    <app-icon>calendar_today</app-icon>
                    <div date>{{ event.date | date: 'fullDate' }}</div>
                </div>
                <div class="flex items-center space-x-2">
                    <app-icon>schedule</app-icon>
                    <div time>
                        {{
                            event.all_day
                                ? 'All Day'
                                : (event.date | date: 'shortTime') +
                                  ' - ' +
                                  (event.date + event.duration * 60 * 1000
                                      | date: 'h:mm a (z)')
                        }}
                    </div>
                </div>
            </div>
        </section>
        <section
            attendees
            class="flex space-x-1 px-2"
            *ngIf="event.attendees.length"
        >
            <app-icon class="text-success mt-1">done</app-icon>
            <div details class="leading-6">
                <h3 i18n>
                    {{ event.attendees.length }} { event.attendees.length,
                    plural, =1 { attendee } other { attendees } }
                </h3>
                <div attendee-list>
                    <mat-chip-list #chipList aria-label="User selection">
                        <mat-chip *ngFor="let user of event.attendees">
                            <app-icon class="mr-2">business</app-icon>
                            {{ user.name || user.email }}
                        </mat-chip>
                    </mat-chip-list>
                </div>
            </div>
        </section>
        <section spaces class="flex space-x-1 px-2" *ngIf="space?.id">
            <app-icon class="text-success mt-1">done</app-icon>
            <div details class="leading-6">
                <h3 i18n>Booked Room</h3>
                <ng-container *ngFor="let s of event.resources">
                    <div class="flex items-center space-x-2">
                        <app-icon>meeting_room</app-icon>
                        <div>
                            {{ level?.display_name || level?.name }},
                            {{ s.display_name || s.name }}
                        </div>
                    </div>
                </ng-container>
                <div class="flex items-center space-x-2">
                    <app-icon>place</app-icon>
                    <div>{{ location }}</div>
                </div>
            </div>
        </section>
        <footer class="p-2 w-full border-t border-gray-200 mt-4">
            <button
                btn
                matRipple
                class="w-full"
                *ngIf="!(loading | async)"
                (click)="postForm()"
                i18n
            >
                Confirm
            </button>
            <button
                btn
                matRipple
                class="inverse w-full"
                *ngIf="loading | async"
                (click)="cancelPost()"
                i18n
            >
                Undo
            </button>
        </footer>
    `,
    styles: [
        `
            section > app-icon {
                font-size: 1.5rem;
            }

            h2 {
                font-size: 1.5rem;
                font-weight: medium;
                margin-bottom: 0.5rem;
            }

            h3 {
                font-size: 1.25rem;
                font-weight: medium;
                margin: 0.5rem 0;
            }
        `,
    ],
    providers: [SpacePipe],
})
export class MeetingFlowConfirmComponent extends BaseClass {
    @Input() public show_close: boolean = false;

    public readonly loading = this._event_form.loading;

    public readonly postForm = async () => {
        await this._event_form.postForm().catch((_) => {
            notifyError(_);
            throw _;
        });
        this.dismiss(true);
    };
    public readonly cancelPost = () => this._event_form.cancelPostForm();
    public readonly dismiss = (e?) => this._sheet_ref?.dismiss(e);

    private _space = this.event.resources[0];

    public async ngOnInit() {
        this._space =
            (await this._space_pipe.transform(this.event.resources[0].email)) ||
            this._space;
    }

    public get event(): CalendarEvent {
        return this._event_form.form.value as any;
    }

    public get space() {
        return this._space;
    }

    public get level() {
        return this._org.levelWithID(this.space.zones);
    }

    public get location() {
        const building = this._org.buildings.find((_) =>
            this.space.zones.includes(_.id)
        );
        return building?.address || building?.display_name || building?.name;
    }

    constructor(
        private _event_form: EventFormService,
        private _org: OrganisationService,
        private _space_pipe: SpacePipe,
        @Optional() private _sheet_ref: MatBottomSheetRef
    ) {
        super();
    }
}
