import { Component, EventEmitter, Output } from '@angular/core';
import { Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AsyncHandler, SettingsService, currentUser } from '@placeos/common';
import { notifyError } from 'libs/common/src/lib/notifications';
import { getInvalidFields, randomString } from 'libs/common/src/lib/general';
import { OrganisationService } from 'libs/organisation/src/lib/organisation.service';
import { BookingFormService } from './booking-form.service';
import { Booking } from './booking.class';
import { User } from 'libs/users/src/lib/user.class';

@Component({
    selector: `invite-visitor-form`,
    template: `
        <ng-container *ngIf="!sent; else send_state">
            <div
                class="relative flex flex-col bg-base-100 overflow-auto max-h-full"
                *ngIf="!(loading | async) && !loading_many; else load_state"
            >
                <div class="w-full border-b border-base-200 sm:px-16 px-4 py-4">
                    <h2 class="text-2xl font-medium" i18n>Invite Visitor</h2>
                </div>
                <form
                    *ngIf="form"
                    [formGroup]="form"
                    class="sm:px-16 px-4 py-4"
                >
                    <div class="flex flex-col" *ngIf="buildings?.length > 1">
                        <label for="building" i18n>
                            Building<span>*</span>
                        </label>
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
                                [ngModel]="form.value.date"
                                (ngModelChange)="
                                    form.patchValue({ date: $event })
                                "
                                [ngModelOptions]="{ standalone: true }"
                                [disabled]="form.value.all_day"
                                [use_24hr]="use_24hr"
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
                                [use_24hr]="use_24hr"
                            ></a-duration-field>
                        </div>
                    </div>
                    <ng-container *ngIf="!multiple; else multi_state">
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
                                    (focus)="
                                        filterVisitors(form.value.asset_name)
                                    "
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
                                    (focus)="
                                        filterVisitors(form.value.asset_id)
                                    "
                                    [matAutocomplete]="email_auto"
                                />
                                <mat-error i18n>
                                    A valid email is required
                                </mat-error>
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
                    </ng-container>
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
                    class="sticky sm:px-16 px-4 py-4 border-t bg-base-100 border-base-200 bottom-0"
                >
                    <button
                        btn
                        matRipple
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
                class="absolute inset-0 bg-base-100 flex flex-col items-center justify-center text-center"
            >
                <div class="w-full max-w-[32rem] flex-1 h-1/2 space-y-2 m-8">
                    <h2 class="text-3xl" i18n>
                        Visitor invite sent to
                        <ng-container *ngIf="!multiple">
                            {{
                                last_success?.asset_name ||
                                    last_success?.asset_id
                            }}
                        </ng-container>
                        <ng-container *ngIf="multiple">
                            {{ last_count }} visitor{{
                                last_count == 1 ? '' : 's'
                            }}
                        </ng-container>
                    </h2>
                    <img class="mx-auto" src="assets/icons/sent.svg" />
                    <p i18n>
                        Invite has been sent to
                        <i>
                            <ng-container *ngIf="!multiple">
                                {{
                                    last_success?.asset_name ||
                                        last_success?.asset_id
                                }}
                            </ng-container>
                            <ng-container *ngIf="multiple">
                                {{ last_count }} visitor{{
                                    last_count == 1 ? '' : 's'
                                }}
                            </ng-container>
                        </i>
                        to attend
                        {{ building?.display_name || building?.name }} from
                        {{ last_success?.date | date: 'mediumDate' }} at
                        {{ last_success?.date | date: time_format }}
                    </p>
                </div>
                <div class="w-full p-2 border-t border-base-200">
                    <div
                        class="mx-auto flex items-center space-x-2 w-full max-w-[32rem]"
                    >
                        <button
                            btn
                            matRipple
                            class="flex-1"
                            (click)="onDone()"
                            i18n
                        >
                            Great, thanks
                        </button>
                        <button
                            btn
                            matRipple
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
        <ng-template #multi_state>
            <div class="flex flex-col" [formGroup]="form">
                <label for="visitor-name" i18n>Visitors<span>*</span></label>
                <a-user-list-field
                    formControlName="assets"
                    [guests_only]="true"
                ></a-user-list-field>
            </div>
        </ng-template>
    `,
    styles: [``],
})
export class InviteVisitorFormComponent extends AsyncHandler {
    @Output() public done = new EventEmitter<void>();

    public sent = false;
    public booking?: Booking;
    public readonly loading = this._service.loading;
    public loading_many = false;
    public readonly buildings = this._org.active_buildings;
    public last_success = this._service.last_success;
    public last_count = 0;
    public visitors = [];
    public filtered_visitors = [];

    public get multiple() {
        return this._settings.get('app.bookings.multiple_visitors');
    }

    public get building() {
        return this._org.building;
    }

    public get form() {
        return this._service.form;
    }

    public get time_format() {
        return this._settings.time_format;
    }

    public get use_24hr() {
        return this._settings.get('app.use_24_hour_time');
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
        this._service.clearOldState();
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
        if (this.multiple)
            this.form.patchValue({ asset_id: 'multiple@place.tech' });
    }

    public setVisitor(item) {
        this.form.patchValue({
            asset_id: item.email,
            asset_name: item.name,
            company: item.company,
            phone: item.phone,
        });
    }

    public filterVisitors(filter: string) {
        const s = (filter || '').toLowerCase();
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
        if (
            !this.form.valid ||
            (this.multiple && !this.form.value.assets.length)
        ) {
            return notifyError(
                `Some fields are invalid. [${
                    getInvalidFields(this.form).join(', ') || 'visitors'
                }]`
            );
        }
        const { asset_id, asset_name, company, assets } = this.form.value;
        const visitor_details = `${asset_id}|${asset_name}|${company}`;
        const old_visitors = this._settings.get('visitor-invitees') || [];
        this._settings.saveUserSetting('visitor-invitees', [
            ...old_visitors.filter((_) => !_.includes(asset_id)),
            visitor_details,
        ]);
        await (this.multiple ? this._bookForMany() : this._bookForOne());
        this.last_success = this._service.last_success;
        await this.initFormZone();
        this.sent = true;
    }

    private async initFormZone() {
        await this._org.initialised.pipe(first((_) => _)).toPromise();
        this._service.setOptions({ type: 'visitor' });
        this.form.patchValue({
            booking_type: 'visitor',
            zones: [this._org.building?.id],
        });
        if (this.multiple)
            this.form.patchValue({ asset_id: 'multiple@place.tech' });
    }

    private async _bookForOne() {
        const value = this.form.value;
        this.form.patchValue({
            name: value.asset_name,
            attendees: [
                new User({
                    name: value.asset_name,
                    email: value.asset_id,
                    organisation: value.company,
                    phone: value.phone,
                }),
            ],
        });
        await this._service.postForm().catch((e) => {
            notifyError(e);
            throw e;
        });
    }

    private async _bookForMany() {
        this.loading_many = true;
        const group = `grp-${randomString(8)}`;
        const value = this.form.value;
        const assets = value.assets;
        this.last_count = assets.length;
        for (const user of assets) {
            if (!user.email) continue;
            this.form.patchValue({
                ...value,
                booking_type: 'visitor',
                asset_id: user.email,
                asset_name: user.name,
                user: currentUser(),
                description: group,
                name: user.name,
                assets: [],
                attendees: [
                    new User({
                        name: user.name,
                        email: user.email,
                        organisation: user.company || user.organisation,
                        phone: user.phone,
                    }),
                ],
            });
            await this._service.postForm().catch((e) => {
                notifyError(e);
                this.loading_many = false;
                throw e;
            });
        }
        this.loading_many = false;
    }
}
