import { Component, Input, Optional } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CateringItem, CateringOrder } from '@placeos/catering';
import {
    AsyncHandler,
    SettingsService,
    notifyError,
    openConfirmModal,
} from '@placeos/common';
import { EventFormService, formatRecurrence } from '@placeos/events';
import { OrganisationService } from '@placeos/organisation';
import { Space } from '@placeos/spaces';
import { addMinutes, endOfDay, startOfDay } from 'date-fns';
import { AssetRequest } from 'libs/assets/src/lib/asset-request.class';
import { SpacePipe } from 'libs/spaces/src/lib/space.pipe';

@Component({
    selector: 'meeting-flow-confirm-modal',
    template: `
        <div
            header
            class="p-4 flex items-center justify-center border-b border-base-200 relative"
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
        <main
            class="min-w-[48rem] divide-y divide-base-200 p-4 space-y-4 max-h-[65vh] overflow-auto"
        >
            <div class="flex divide-x divide-base-200">
                <div class="pr-4 py-4 pl-16 relative space-y-2 flex-1">
                    <div
                        class="absolute top-4 left-4 flex items-center justify-center rounded-full border border-success text-success text-2xl"
                    >
                        <app-icon>done</app-icon>
                    </div>
                    <h3 class="text-xl !mt-0">
                        {{ event.title || 'Meeting Details' }}
                    </h3>
                    <div class="flex items-center space-x-2">
                        <app-icon>today</app-icon>
                        <div date>{{ event.date | date: 'fullDate' }}</div>
                    </div>
                    <div
                        class="flex items-center space-x-2"
                        *ngIf="event.recurrence?.pattern"
                    >
                        <app-icon>update</app-icon>
                        <div date>{{ formatted_recurrence }}</div>
                    </div>
                    <div class="flex items-center space-x-2">
                        <app-icon>schedule</app-icon>
                        <div time>
                            {{
                                is_multiday
                                    ? (event.date | date: 'MMM d') +
                                      (event.all_day
                                          ? ''
                                          : (event.date
                                            | date: ', ' + time_format)) +
                                      ' - ' +
                                      (event.date_end | date: 'MMM d') +
                                      (event.all_day
                                          ? ''
                                          : (event.date_end
                                            | date: ', ' + time_format))
                                    : event.all_day
                                    ? 'All Day'
                                    : (event.date | date: time_format) +
                                      ' - ' +
                                      (event.date + event.duration * 60 * 1000
                                          | date: time_format + ' (z)')
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
                            <app-icon>layers</app-icon>
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
                            <div class="flex items-center">
                                <app-icon class="mr-2">business</app-icon>
                                {{ user.name || user.email }}
                            </div>
                        </mat-chip>
                    </mat-chip-list>
                </div>
            </div>
            <div
                class="flex divide-x divide-base-200"
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
                    <div class="flex flex-col space-y-2">
                        <div
                            order
                            *ngFor="let order of catering_orders"
                            class="border bg-base-100 rounded-xl overflow-hidden"
                            [class.border-error]="end_time < order.deliver_at"
                            [class.border-base-300]="
                                end_time >= order.deliver_at
                            "
                        >
                            <div class="flex items-center space-x-2 p-3">
                                <div class="flex-1 flex items-center space-x-2">
                                    <div class="text-sm">
                                        Order at
                                        {{
                                            order.deliver_at
                                                | date: 'MMM d, ' + time_format
                                        }}
                                    </div>
                                    <div
                                        class="flex items-center justify-center h-6 w-6 rounded-full bg-error text-error-content"
                                        [matTooltip]="err_tooltip"
                                        *ngIf="end_time < order.deliver_at"
                                    >
                                        <app-icon>priority_high</app-icon>
                                    </div>
                                    <div class="flex-1"></div>
                                    <div
                                        class="text-xs bg-success text-success-content px-2 py-1 rounded"
                                    >
                                        {{ order.item_count }} item(s)
                                    </div>
                                    <div
                                        class="text-xs bg-info text-info-content px-2 py-1 rounded"
                                    >
                                        Total:
                                        {{
                                            order.total_cost / 100
                                                | currency: currency_code
                                        }}
                                    </div>
                                </div>
                            </div>
                            <div
                                class="flex flex-col bg-base-200 divide-y divide-base-100"
                            >
                                <div
                                    class="flex items-center px-3 py-1 space-x-2 hover:opacity-90"
                                    *ngFor="let item of order.items"
                                >
                                    <div class="flex items-center flex-1">
                                        <span class="text-sm">{{
                                            item.name || 'Item'
                                        }}</span>
                                        <span
                                            class="text-xs opacity-60 ml-4 font-normal"
                                            *ngIf="item.option_list?.length"
                                            [matTooltip]="optionList(item)"
                                        >
                                            {{
                                                item.option_list?.length || '0'
                                            }}
                                            option(s)
                                        </span>
                                    </div>
                                    <div
                                        class="rounded bg-success text-success-content text-xs px-2 py-1"
                                    >
                                        x{{ item.quantity }}
                                    </div>
                                    <div
                                        class="rounded bg-info text-info-content text-xs px-2 py-1"
                                    >
                                        {{
                                            item.unit_price_with_options / 100
                                                | currency: currency_code
                                        }}
                                        ea
                                    </div>
                                    <div
                                        class="rounded bg-info text-info-content text-xs px-2 py-1"
                                    >
                                        {{
                                            item.total_cost / 100
                                                | currency: currency_code
                                        }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="pr-4 py-4 pl-16 relative space-y-2 flex-1"
                    *ngIf="assets?.length"
                >
                    <div
                        class="absolute top-4 left-4 flex items-center justify-center rounded-full border border-success text-success text-2xl"
                    >
                        <app-icon>done</app-icon>
                    </div>
                    <h3 class="text-xl !mt-0" i18n>Assets</h3>
                    <div
                        request
                        *ngFor="let request of assets"
                        class="border bg-base-100 rounded-xl overflow-hidden"
                        [class.border-error]="end_time < request.deliver_at"
                        [class.border-base-300]="end_time >= request.deliver_at"
                    >
                        <div class="flex items-center space-x-2 p-3">
                            <div class="flex-1 flex items-center space-x-2">
                                <div class="text-sm">
                                    Requested for
                                    {{
                                        request.deliver_at_time
                                            | date: 'MMM d, ' + time_format
                                    }}
                                </div>
                                <div
                                    class="flex items-center justify-center h-6 w-6 rounded-full bg-error text-error-content"
                                    [matTooltip]="err_tooltip"
                                    *ngIf="end_time < request.deliver_at"
                                >
                                    <app-icon>priority_high</app-icon>
                                </div>
                                <div class="flex-1"></div>
                                <div
                                    class="text-xs bg-success text-success-content px-2 py-1 rounded"
                                >
                                    {{ request.item_count }} item(s)
                                </div>
                            </div>
                        </div>
                        <div
                            class="flex flex-col bg-base-200 divide-y divide-base-100"
                        >
                            <div
                                class="flex items-center px-3 py-1 space-x-2 hover:opacity-90"
                                *ngFor="let item of request.items"
                            >
                                <div class="flex items-center flex-1">
                                    <span class="text-sm">{{
                                        item.name || 'Item'
                                    }}</span>
                                </div>
                                <div
                                    class="rounded bg-success text-success-content text-xs px-2 py-1"
                                >
                                    x{{ item.quantity }}
                                </div>
                            </div>
                        </div>
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
            class="p-2 border-t border-base-200 flex items-center justify-end"
            *ngIf="!(loading | async)"
        >
            <button
                btn
                name="confirm-meeting"
                matRipple
                class="w-32"
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
    public readonly catering_orders;
    public readonly assets;
    public err_tooltip =
        'Delivery time is outside of the event time.\nThis order will be ignored.';

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
            result.close();
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

    public get is_multiday() {
        return this.event.duration > 24 * 60;
    }

    public get time_format() {
        return this._settings.time_format;
    }

    public get end_time() {
        return this.event.all_day
            ? endOfDay(this.event.date_end).valueOf()
            : this.event.date_end;
    }

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

    public get formatted_recurrence() {
        return formatRecurrence({
            ...this.event.recurrence,
            start: this.event.date || this.event.recurrence.start,
        });
    }

    constructor(
        private _event_form: EventFormService,
        private _org: OrganisationService,
        private _space_pipe: SpacePipe,
        @Optional()
        private _dialog_ref: MatDialogRef<MeetingFlowConfirmModalComponent>,
        private _dialog: MatDialog,
        private _settings: SettingsService
    ) {
        super();
        const date = this.event.all_day
            ? startOfDay(this.event.date).valueOf()
            : this.event.date;
        this.catering_orders = this.event.catering?.map(
            (order) =>
                new CateringOrder({
                    ...order,
                    event: {
                        ...this.event,
                        date: date,
                        date_end: addMinutes(
                            date,
                            this.event.duration
                        ).valueOf(),
                    },
                })
        );
        this.assets = this.event.assets?.map(
            (_) => new AssetRequest({ ..._, event: this.event })
        );
    }

    public optionList(item: CateringItem) {
        return item.option_list?.map((_) => _.name).join('\n');
    }
}
