import { Component, EventEmitter, Output } from '@angular/core';
import { Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { notifyError } from 'libs/common/src/lib/notifications';
import { getInvalidFields } from 'libs/common/src/lib/general';
import { OrganisationService } from 'libs/organisation/src/lib/organisation.service';
import { BookingFormService } from './booking-form.service';
import { Booking } from './booking.class';
import { BaseClass, SettingsService } from '@placeos/common';
import { User } from '@placeos/users';

@Component({
    selector: `invite-visitor-form`,
    template: `
        <ng-container *ngIf="!sent; else send_state">
            <div
                class="relative flex flex-col bg-white dark:bg-neutral-700 overflow-auto max-h-full"
                *ngIf="!(loading | async); else load_state"
            >
                <div
                    class="w-full border-b border-gray-200 dark:border-neutral-500 px-4 py-2"
                >
                    <h2 class="text-2xl" i18n>Invite Visitor</h2>
                </div>
                <form *ngIf="form" [formGroup]="form" class="p-4">
                    <div class="flex flex-col" *ngIf="buildings?.length > 1">
                        <label for="building" i18n
                            >Building<span>*</span></label
                        >
                        <mat-form-field appearance="outline">
                            <mat-select
                                [ngModel]="form.value.zones[0]"
                                (ngModelChange)="
                                    form.patchValue({ zones: [$event] })
                                "
                                [ngModelOptions]="{ standalone: true }"
                                name="building"
                                placeholder="Select building"
                                i18n-placeholder
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
                        <label for="date" i18n>Date<span>*</span></label>
                        <a-date-field
                            name="date"
                            formControlName="date"
                        ></a-date-field>
                    </div>
                    <div class="flex items-center space-x-2">
                        <div class="flex-1 flex flex-col w-1/3">
                            <label for="start-time" i18n>
                                Start Time<span>*</span>
                            </label>
                            <a-time-field
                                name="start-time"
                                formControlName="date"
                            ></a-time-field>
                        </div>
                        <div class="flex-1 flex flex-col w-1/3">
                            <label for="end-time" i18n
                                >End Time<span>*</span></label
                            >
                            <a-duration-field
                                name="end-time"
                                formControlName="duration"
                                [time]="form.value.date"
                            ></a-duration-field>
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <label for="visitor-name" i18n
                            >Visitor Name<span>*</span></label
                        >
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="visitor-name"
                                formControlName="asset_name"
                                placeholder="Name of the visitor"
                                (focus)="filterVisitors(form.value.asset_name)"
                                [matAutocomplete]="name_auto"
                            />
                        </mat-form-field>
                        <mat-autocomplete #name_auto="matAutocomplete">
                            <mat-option
                                *ngFor="let item of filtered_visitors"
                                [value]="item.name"
                                (click)="setVisitor(item)"
                            >
                                <div class="flex flex-col leading-tight">
                                    <div>{{ item.name }}</div>
                                    <div class="text-xs opacity-60">
                                        {{ item.email }}
                                        {{
                                            item.company
                                                ? '| ' + item.company
                                                : ''
                                        }}
                                    </div>
                                </div>
                            </mat-option>
                        </mat-autocomplete>
                    </div>
                    <div class="flex flex-col">
                        <label for="visitor-email" i18n>
                            Visitor Email<span>*</span>
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="visitor-email"
                                type="email"
                                formControlName="asset_id"
                                placeholder="Email of the visitor"
                                (focus)="filterVisitors(form.value.asset_id)"
                                [matAutocomplete]="email_auto"
                            />
                            <mat-error i18n
                                >A valid email is required</mat-error
                            >
                        </mat-form-field>
                        <mat-autocomplete #email_auto="matAutocomplete">
                            <mat-option
                                *ngFor="let item of filtered_visitors"
                                [value]="item.email"
                                (click)="setVisitor(item)"
                            >
                                <div class="flex flex-col leading-tight">
                                    <div>{{ item.name }}</div>
                                    <div class="text-xs opacity-60">
                                        {{ item.email }}
                                        {{
                                            item.company
                                                ? '| ' + item.company
                                                : ''
                                        }}
                                    </div>
                                </div>
                            </mat-option>
                        </mat-autocomplete>
                    </div>
                    <div class="flex flex-col">
                        <label for="visitor-name" i18n>Company</label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="company"
                                formControlName="company"
                                placeholder="Company of the visitor"
                            />
                        </mat-form-field>
                    </div>
                    <div class="flex flex-col">
                        <label for="reason" i18n>Reason for visit</label>
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
                <div
                    class="sticky p-4 border-t bg-white border-gray-200 dark:border-neutral-500 bottom-0"
                >
                    <button
                        mat-button
                        send
                        class="w-full sm:w-auto"
                        (click)="sendInvite()"
                        i18n
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
                <div class="w-full max-w-[32rem] flex-1 h-1/2 space-y-2 m-8">
                    <h2 class="text-3xl" i18n>
                        Visitor invite sent to
                        {{ last_success?.asset_name || last_success?.asset_id }}
                    </h2>
                    <img class="mx-auto" src="assets/icons/sent.svg" />
                    <p i18n>
                        Invite has been sent to
                        <i>{{
                            last_success?.asset_name || last_success?.asset_id
                        }}</i>
                        to attend
                        {{ building?.display_name || building?.name }} from
                        {{ last_success?.date | date: 'mediumDate' }} at
                        {{ last_success?.date | date: 'shortTime' }}
                    </p>
                </div>
                <div
                    class="w-full p-2 border-t border-gray-200 dark:border-neutral-500"
                >
                    <div
                        class="mx-auto flex items-center space-x-2 w-full max-w-[32rem]"
                    >
                        <button
                            mat-button
                            class="flex-1"
                            (click)="onDone()"
                            i18n
                        >
                            Great, thanks
                        </button>
                        <button
                            mat-button
                            class="flex-1"
                            (click)="sent = false"
                            i18n
                        >
                            Book Another Visitor
                        </button>
                    </div>
                </div>
            </div>
        </ng-template>
        <ng-template #load_state>
            <div
                loading
                class="relative flex flex-col items-center justify-center rounded overflow-hidden w-full h-full min-h-[18rem]"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p i18n>Sending invitation...</p>
            </div>
        </ng-template>
    `,
    styles: [``],
})
export class InviteVisitorFormComponent extends BaseClass {
    @Output() public done = new EventEmitter<void>();

    public sent = false;
    public booking?: Booking;
    public readonly loading = this._service.loading;
    public readonly buildings = this._org.active_buildings;
    public readonly last_success = this._service.last_success;
    public visitors = [];
    public filtered_visitors = [];

    public get building() {
        return this._org.building;
    }

    public get form() {
        return this._service.form;
    }

    constructor(
        private _service: BookingFormService,
        private _settings: SettingsService,
        private _org: OrganisationService
    ) {
        super();
    }

    public async ngOnInit() {
        this.sent = false;
        await this.initFormZone();
        this.form
            .get('asset_id')
            .setValidators([Validators.required, Validators.email]);
        const visitors = this._settings.get('visitor-invitees') || [];
        for (const item of visitors) {
            const [email, name, company] = item.split('|');
            this.visitors.push({ email, name, company });
        }
        this.filterVisitors('');
        this.subscription(
            'email',
            this.form
                .get('asset_id')
                .valueChanges.subscribe((_) => this.filterVisitors(_))
        );
        this.subscription(
            'name',
            this.form
                .get('asset_name')
                .valueChanges.subscribe((_) => this.filterVisitors(_))
        );
    }

    public setVisitor(item) {
        this.form.patchValue({
            asset_id: item.email,
            asset_name: item.name,
            company: item.company,
        });
    }

    public filterVisitors(filter: string) {
        const s = filter.toLowerCase();
        this.filtered_visitors = this.visitors.filter(
            ({ email, name, company }) =>
                email.toLowerCase().includes(s) ||
                name.toLowerCase().includes(s) ||
                company.toLowerCase().includes(s)
        );
    }

    public onDone() {
        this.done.emit();
        this.sent = false;
    }

    public async sendInvite() {
        this.form.markAllAsTouched();
        if (!this.form.valid) {
            return notifyError(
                `Some fields are invalid. [${getInvalidFields(this.form)}]`
            );
        }
        const { asset_id, asset_name, company } = this.form.value;
        const visitor_details = `${asset_id}|${asset_name}|${company}`;
        const old_visitors = this._settings.get('visitor-invitees') || [];
        this._settings.saveUserSetting('visitor-invitees', [
            ...old_visitors.filter((_) => !_.includes(asset_id)),
            visitor_details,
        ]);
        const value = this.form.value;
        this.form.patchValue({
            name: value.asset_name,
            attendees: [
                new User({
                    name: value.asset_name,
                    email: value.asset_id,
                    organisation: value.company,
                }),
            ],
        });
        this.booking = await this._service.postForm().catch((e) => {
            notifyError(e);
            throw e;
        });
        await this.initFormZone();
        this.sent = true;
    }

    private async initFormZone() {
        await this._org.initialised.pipe(first((_) => _)).toPromise();
        this._service.setOptions({ type: 'visitor' });
        this.form.patchValue({ zones: [this._org.building?.id] });
    }
}
