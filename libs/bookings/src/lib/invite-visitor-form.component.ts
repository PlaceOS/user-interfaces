import { Component, EventEmitter, Output } from '@angular/core';
import { Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { notifyError } from 'libs/common/src/lib/notifications';
import { getInvalidFields } from 'libs/common/src/lib/general';
import { OrganisationService } from 'libs/organisation/src/lib/organisation.service';
import { BookingFormService } from './booking-form.service';
import { Booking } from './booking.class';

@Component({
    selector: `invite-visitor-form`,
    template: `
        <ng-container *ngIf="!sent; else send_state">
            <div
                class="relative flex flex-col bg-white dark:bg-neutral-700 overflow-auto"
                *ngIf="!(loading | async); else load_state"
            >
                <div class="w-full border-b border-gray-200 dark:border-neutral-500 px-4 py-2">
                    <h2 class="text-2xl">Invite Visitor</h2>
                </div>
                <form *ngIf="form" [formGroup]="form" class="p-4">
                    <div class="flex flex-col" *ngIf="buildings?.length > 1">
                        <label for="building">Building<span>*</span></label>
                        <mat-form-field appearance="outline">
                            <mat-select
                                [ngModel]="form.value.zones[0]"
                                (ngModelChange)="
                                    form.patchValue({ zones: [$event] })
                                "
                                [ngModelOptions]="{ standalone: true }"
                                name="building"
                                placeholder="Select building"
                            >
                                <mat-option
                                    *ngFor="let bld of buildings | async"
                                    [value]="bld.id"
                                >
                                    {{ bld.display_name || bld.name }}
                                </mat-option>
                            </mat-select>
                        </mat-form-field>
                    </div>
                    <div class="flex flex-col">
                        <label for="date">Date<span>*</span></label>
                        <a-date-field
                            name="date"
                            formControlName="date"
                        ></a-date-field>
                    </div>
                    <div class="flex items-center space-x-2">
                        <div class="flex-1 flex flex-col w-1/3">
                            <label for="start-time">
                                Start Time<span>*</span>
                            </label>
                            <a-time-field
                                name="start-time"
                                formControlName="date"
                            ></a-time-field>
                        </div>
                        <div class="flex-1 flex flex-col w-1/3">
                            <label for="end-time">End Time<span>*</span></label>
                            <a-duration-field
                                name="end-time"
                                formControlName="duration"
                                [time]="form.value.date"
                            ></a-duration-field>
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <label for="visitor-name"
                            >Visitor Name<span>*</span></label
                        >
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="visitor-name"
                                formControlName="asset_name"
                                placeholder="Name of the visitor"
                            />
                        </mat-form-field>
                    </div>
                    <div class="flex flex-col">
                        <label for="visitor-email">
                            Visitor Email<span>*</span>
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="visitor-email"
                                type="email"
                                formControlName="asset_id"
                                placeholder="Email of the visitor"
                            />
                            <mat-error>A valid email is required</mat-error>
                        </mat-form-field>
                    </div>
                    <div class="flex flex-col">
                        <label for="reason">Reason for visit</label>
                        <mat-form-field appearance="outline">
                            <input
                                name="reason"
                                matInput
                                formControlName="description"
                                placeholder="e.g. Meeting Catchup"
                            />
                        </mat-form-field>
                    </div>
                </form>
                <div class="sticky p-4 border-t border-gray-200 dark:border-neutral-500 bottom-0">
                    <button
                        mat-button
                        send
                        class="w-full sm:w-auto"
                        (click)="sendInvite()"
                    >
                        Send Visitor Invite
                    </button>
                </div>
            </div>
        </ng-container>
        <ng-template #send_state>
            <div
                sent
                class="absolute inset-0 bg-white dark:bg-neutral-700 flex flex-col items-center justify-center text-center"
            >
                <div class="w-full max-w-[512px] flex-1 h-1/2 space-y-2 m-8">
                    <h2 class="text-3xl">
                        Visitor invite sent to {{ last_success?.asset_name || last_success?.asset_id }}
                    </h2>
                    <img class="mx-auto" src="assets/icons/sent.svg" />
                    <p>
                        Invite has been sent so <i>{{ last_success?.asset_name || last_success?.asset_id }}</i> to attend
                        {{ building?.display_name || building?.name }} from 
                        {{ last_success?.date | date: 'mediumDate' }} at
                        {{ last_success?.date | date: 'shortTime' }}
                    </p>
                </div>
                <div
                    class="w-full p-2 border-t border-gray-200 dark:border-neutral-500 flex items-center justify-center"
                >
                    <button
                        mat-button
                        class="w-full max-w-[512px]"
                        (click)="done.emit()"
                    >
                        Great, thanks
                    </button>
                </div>
            </div>
        </ng-template>
        <ng-template #load_state>
            <div
                loading
                class="relative flex flex-col items-center justify-center rounded overflow-hidden w-full h-full min-h-[18rem]"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p>Sending invitation...</p>
            </div>
        </ng-template>
    `,
    styles: [``],
})
export class InviteVisitorFormComponent {
    @Output() public done = new EventEmitter<void>();

    public sent = false;
    public booking?: Booking;
    public readonly loading = this._service.loading;
    public readonly buildings = this._org.building_list;
    public readonly last_success =  this._service.last_success;

    public get building() {
        return this._org.building;
    }

    public get form() {
        return this._service.form;
    }

    constructor(
        private _service: BookingFormService,
        private _org: OrganisationService
    ) {}

    public async ngOnInit() {
        await this._org.initialised.pipe(first(_ => _)).toPromise();
        this._service.setOptions({ type: 'visitor' });
        this.form.patchValue({ zones: [this._org.building?.id] });
        this.form
            .get('asset_id')
            .setValidators([Validators.required, Validators.email]);
    }

    public async sendInvite() {
        this.form.markAllAsTouched();
        if (!this.form.valid) {
            return notifyError(
                `Some fields are invalid. [${getInvalidFields(this.form)}]`
            );
        }
        this.booking = await this._service.postForm();
        this.sent = true;
    }
}
