import { Component, Input, Optional } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CateringOrder } from '@placeos/catering';
import { AsyncHandler, notifyError, openConfirmModal } from '@placeos/common';
import { CalendarEvent, EventFormService } from '@placeos/events';
import { OrganisationService } from '@placeos/organisation';
import { Space } from '@placeos/spaces';
import { SpacePipe } from 'libs/spaces/src/lib/space.pipe';

@Component({
    selector: 'meeting-flow-confirm-modal',
    template: `
        <div
            header
            class="p-4 flex items-center justify-center border-b border-grey-200 relative"
        >
            <button
                icon
                name="close-meeting-confirm"
                matRipple
                mat-dialog-close
                *ngIf="show_close"
                class="absolute left-2 top-1/2 -translate-y-1/2"
            >
                <app-icon>close</app-icon>
            </button>
            <h2 class="text-xl font-medium" i18n>Confirm Meeting booking</h2>
            <mat-spinner
                diameter="32"
                class="absolute right-2 top-1/2 -translate-y-1/2"
                [class.opacity-0]="!(loading | async)"
            ></mat-spinner>
        </div>
        <main class="min-w-[48rem] divide-y divide-gray-300 p-4 space-y-4">
            <div class="flex divide-x divide-gray-300">
                <div class="pr-4 py-4 pl-16 relative space-y-2 flex-1">
                    <div
                        class="absolute top-4 left-4 flex items-center justify-center rounded-full border border-success text-success text-2xl"
                    >
                        <app-icon>done</app-icon>
                    </div>
                    <h3 class="text-xl !mt-0">{{ event.title }}</h3>
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
                <div
                    class="pr-4 py-4 pl-16 relative space-y-2 flex-1"
                    *ngIf="event.resources.length"
                >
                    <div
                        class="absolute top-4 left-4 flex items-center justify-center rounded-full border border-success text-success text-2xl"
                    >
                        <app-icon>done</app-icon>
                    </div>
                    <h3 class="text-xl !mt-0" i18n>Booked Room</h3>
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
            </div>
            <div
                class="pr-4 py-4 pl-16 relative space-y-2"
                *ngIf="event.attendees.length"
            >
                <div
                    class="absolute top-4 left-4 flex items-center justify-center rounded-full border border-success text-success text-2xl"
                >
                    <app-icon>done</app-icon>
                </div>
                <h3 class="text-xl !mt-0" i18n>
                    {{ event.attendees.length }} { event.attendees.length,
                    plural, =1 { Attendee } other { Attendees } }
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
            <div
                class="flex divide-x divide-gray-300"
                *ngIf="event.catering?.length || event.assets?.length"
            >
                <div
                    class="pr-4 py-4 pl-16 relative space-y-2 flex-1"
                    *ngIf="event.catering?.length"
                >
                    <div
                        class="absolute top-4 left-4 flex items-center justify-center rounded-full border border-success text-success text-2xl"
                    >
                        <app-icon>done</app-icon>
                    </div>
                    <h3 class="text-xl !mt-0" i18n>Catering</h3>
                    <div class="space-y-2">
                        <div
                            class="flex items-center space-x-2"
                            *ngFor="let item of catering_order"
                        >
                            <div
                                count
                                class="flex items-center justify-center min-w-[2rem] h-8 rounded-full bg-gray-200"
                            >
                                ×{{ item.quantity }}
                            </div>
                            <div name class="flex-1">{{ item.name }}</div>
                            <div class="flex items-center space-x-2">
                                <div
                                    class="flex items-center text-xs px-2 py-1 rounded-2xl bg-gray-100"
                                    [matTooltip]="opt.name"
                                    *ngFor="let opt of item.option_list"
                                >
                                    <div class="font-medium">
                                        {{ opt.name }}
                                    </div>
                                    <!-- <div
                                        class="font-mono ml-2"
                                        *ngIf="opt.unit_price"
                                    >
                                        +{{
                                            opt.unit_price / 100
                                                | currency: code
                                        }}
                                    </div> -->
                                </div>
                            </div>
                            <div
                                price
                                class="font-mono text-right p-2 text-sm"
                                *ngIf="item.quantity > 1"
                            >
                                {{
                                    item.unit_price_with_options / 100
                                        | currency: code
                                }}
                                ea
                            </div>
                            <div
                                total-price
                                class="font-mono min-w-[6rem] text-right p-2"
                            >
                                {{ item.total_cost / 100 | currency: code }}
                            </div>
                        </div>
                        <div class="w-full bg-gray-200 flex justify-end p-2">
                            <div class="font-medium">Total:</div>
                            <div class="font-mono text-right min-w-[6rem]">
                                {{
                                    catering_order.total_cost / 100
                                        | currency: code
                                }}
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="pr-4 py-4 pl-16 relative space-y-2 flex-1"
                    *ngIf="event.assets?.length"
                >
                    <div
                        class="absolute top-4 left-4 flex items-center justify-center rounded-full border border-success text-success text-2xl"
                    >
                        <app-icon>done</app-icon>
                    </div>
                    <h3 class="text-xl !mt-0" i18n>Assets</h3>
                    <div
                        class="flex items-center"
                        *ngFor="let item of event.assets"
                    >
                        <div
                            count
                            class="flex items-center justify-center w-12 h-12 rounded-full"
                        >
                            {{ item.amount }}
                        </div>
                        <div name class="flex-1">{{ item.name }}</div>
                    </div>
                </div>
            </div>
            <div class="pr-4 py-4 pl-16 relative space-y-2" *ngIf="event.body">
                <div
                    class="absolute top-4 left-4 flex items-center justify-center rounded-full border border-success text-success text-2xl"
                >
                    <app-icon>done</app-icon>
                </div>
                <h3 class="text-xl !mt-0" i18n>Notes</h3>
                <div [innerHTML]="event.body | sanitize"></div>
            </div>
        </main>
        <footer
            class="p-2 border-t border-gray-200 flex items-center justify-end"
        >
            <button
                btn
                name="confirm-meeting"
                matRipple
                class="w-32"
                *ngIf="!(loading | async)"
                (click)="postForm()"
                i18n
            >
                Confirm
            </button>
            <!-- <button
                btn
                matRipple
                class="inverse w-32"
                *ngIf="loading | async"
                (click)="cancelPost()"
                i18n
            >
                Undo
            </button> -->
        </footer>
    `,
    styles: [``],
    providers: [SpacePipe],
})
export class MeetingFlowConfirmModalComponent extends AsyncHandler {
    @Input() public show_close: boolean = false;

    public readonly loading = this._event_form.loading;
    public readonly catering_order =
        this.event.catering[0]?.items || this.event.catering || [];

    public readonly postForm = async () => {
        if (!this.space) {
            const result = await openConfirmModal(
                {
                    title: 'Make Booking without a Room',
                    content:
                        'You are creating a booking without a room, are you sure?',
                    icon: { content: 'event_available' },
                },
                this._dialog
            );
            if (result.reason !== 'done') return;
        }
        const resp = await this._event_form.postForm().catch((_) => {
            notifyError(_);
            return false;
        });
        if (resp) this.dismiss(true);
    };
    public readonly cancelPost = () => this._event_form.cancelPostForm();
    public readonly dismiss = (e?) => this._dialog_ref?.close(e);

    private _space = this.event.resources[0];

    public async ngOnInit() {
        this._space =
            (await this._space_pipe.transform(
                this.event.resources[0]?.email
            )) || this._space;
    }

    public get event() {
        return this._event_form.form.getRawValue() as any;
    }

    public get space(): Space {
        return this.event.resources[0];
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

    public get code() {
        return this._org.currency_code;
    }

    constructor(
        private _event_form: EventFormService,
        private _org: OrganisationService,
        private _space_pipe: SpacePipe,
        @Optional()
        private _dialog_ref: MatDialogRef<MeetingFlowConfirmModalComponent>,
        private _dialog: MatDialog
    ) {
        super();
    }
}
