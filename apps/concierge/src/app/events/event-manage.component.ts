import { COMMA, ENTER, SPACE } from '@angular/cdk/keycodes';
import { Component } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingFormService, showBooking } from '@placeos/bookings';
import {
    AsyncHandler,
    SettingsService,
    getInvalidFields,
    notifyError,
    randomString,
    unique,
} from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { first } from 'rxjs/operators';
import { EventStateService } from './event-state.service';
import { differenceInMinutes, format, formatDuration } from 'date-fns';

const EMPTY = [];

@Component({
    selector: 'app-event-manage',
    template: `
        <div
            class="absolute inset-0 bg-base-100 overflow-auto"
            *ngIf="!loading; else load_state"
        >
            <a
                icon
                matRipple
                class="absolute top-2 right-2"
                [routerLink]="['/entertainment', 'events']"
            >
                <app-icon>close</app-icon>
            </a>
            <form
                class="flex flex-col w-[40rem] max-w-full mx-auto px-4"
                [formGroup]="form"
            >
                <h3 class="py-4 text-2xl font-medium">
                    {{ form.value.id ? 'Edit' : 'New' }} Group Event
                </h3>
                <section class="flex flex-col space-y-2">
                    <label for="title">Event Title<span>*</span></label>
                    <mat-form-field appearance="outline" class="w-full">
                        <input
                            matInput
                            name="title"
                            formControlName="title"
                            placeholder="e.g. Team Meeting"
                        />
                        <mat-error>
                            {{ 'FORM.TITLE_ERROR' | translate }}
                        </mat-error>
                    </mat-form-field>
                    <div class="flex items-center flex-wrap sm:space-x-2">
                        <div class="flex-1 min-w-[256px] relative">
                            <label for="date">
                                {{ 'FORM.DATE' | translate }}<span>*</span>
                            </label>
                            <a-date-field
                                name="date"
                                formControlName="date"
                                [to]="end_date"
                            >
                                {{ 'FORM.DATE_ERROR' | translate }}
                            </a-date-field>
                            <mat-checkbox
                                formControlName="all_day"
                                *ngIf="allow_all_day"
                                class="absolute -top-2 right-2"
                            >
                                {{ 'FORM.ALL_DAY' | translate }}
                            </mat-checkbox>
                        </div>
                        <div
                            class="flex-1 min-w-[256px] relative"
                            *ngIf="allow_multiday"
                        >
                            <label for="date">
                                {{ 'FORM.END_DATE' | translate }}<span>*</span>
                            </label>
                            <a-date-field
                                name="date"
                                formControlName="date_end"
                                [from]="start_date"
                                [to]="end_date"
                            >
                                {{ 'FORM.DATE_ERROR' | translate }}
                            </a-date-field>
                        </div>
                    </div>
                    <div
                        class="flex items-center space-x-2"
                        *ngIf="!form.value.all_day"
                    >
                        <div class="flex-1 w-1/3">
                            <label for="start-time">
                                {{ 'FORM.START_TIME' | translate }}
                                <span>*</span>
                            </label>
                            <a-time-field
                                name="start-time"
                                [ngModel]="form.getRawValue().date"
                                (ngModelChange)="
                                    form.patchValue({ date: $event })
                                "
                                [ngModelOptions]="{ standalone: true }"
                                [use_24hr]="use_24hr"
                            ></a-time-field>
                        </div>
                        <div class="flex-1 w-1/3" *ngIf="allow_multiday">
                            <label for="end-time">
                                {{ 'FORM.END_TIME' | translate }}<span>*</span>
                            </label>
                            <a-time-field
                                name="end-time"
                                [ngModel]="form.value.date_end"
                                (ngModelChange)="
                                    form.patchValue({ date_end: $event })
                                "
                                [ngModelOptions]="{ standalone: true }"
                                [from]="
                                    form?.getRawValue()?.date + 30 * 60 * 1000
                                "
                                [use_24hr]="use_24hr"
                                [extra_info_fn]="duration_info"
                            ></a-time-field>
                        </div>
                        <div class="flex-1 w-1/3" *ngIf="!allow_multiday">
                            <label for="end-time">
                                {{ 'FORM.END_TIME' | translate }}<span>*</span>
                            </label>
                            <a-duration-field
                                name="end-time"
                                formControlName="duration"
                                [time]="form?.getRawValue()?.date"
                                [max]="max_duration"
                                [use_24hr]="use_24hr"
                            ></a-duration-field>
                        </div>
                    </div>
                    <label for="host">Organiser<span>*</span></label>
                    <a-user-search-field
                        class="block"
                        name="host"
                        formControlName="user"
                    ></a-user-search-field>
                    <label for="location">Location</label>
                    <mat-form-field appearance="outline" class="w-full">
                        <input
                            matInput
                            name="location"
                            formControlName="location"
                            placeholder="e.g. 1 Apple Park Way, Cupertino, California"
                        />
                        <mat-error>
                            {{ 'FORM.LOCATION_ERROR' | translate }}
                        </mat-error>
                    </mat-form-field>
                    <label for="title">Event Description</label>
                    <rich-text-input
                        formControlName="description"
                    ></rich-text-input>
                    <div class="py-4">
                        <mat-checkbox formControlName="featured">
                            Featured
                        </mat-checkbox>
                    </div>
                    <label for="tags">Tags</label>
                    <mat-form-field appearance="outline">
                        <mat-chip-grid #chipList aria-label="Event Tags">
                            <mat-chip-row
                                *ngFor="let tag of tag_list"
                                [selectable]="true"
                                [removable]="true"
                                (removed)="removeTag(tag)"
                            >
                                {{ tag }}
                                <app-icon matChipRemove>close</app-icon>
                            </mat-chip-row>
                            <input
                                placeholder="New feature..."
                                [matChipInputFor]="chipList"
                                [matChipInputSeparatorKeyCodes]="separators"
                                [matChipInputAddOnBlur]="true"
                                (matChipInputTokenEnd)="addTag($event)"
                            />
                        </mat-chip-grid>
                    </mat-form-field>
                    <label for="tags">Images</label>
                    <image-list-field
                        formControlName="images"
                    ></image-list-field>
                </section>
                <div
                    class="flex justify-end space-x-2 sticky bottom-0 w-full bg-base-100 py-4"
                >
                    <a
                        btn
                        matRipple
                        class="inverse w-32"
                        [routerLink]="['/entertainment', 'events']"
                    >
                        Cancel
                    </a>
                    <button btn matRipple class="w-32" (click)="save()">
                        Save
                    </button>
                </div>
            </form>
        </div>
        <ng-template #load_state>
            <div
                class="absolute inset-0 bg-base-100 flex flex-col items-center justify-center space-y-4"
            >
                <mat-spinner diameter="48"></mat-spinner>
                <p>Saving event...</p>
            </div>
        </ng-template>
    `,
    styles: [``],
})
export class EventManageComponent extends AsyncHandler {
    public loading = false;
    public readonly form = this._form_state.form;
    public readonly separators: number[] = [ENTER, COMMA, SPACE];

    public get tag_list() {
        return this.form.controls.tags.value || EMPTY;
    }

    public get max_duration() {
        return this._settings.get('app.events.max_duration') || 480;
    }

    public get use_24hr() {
        return this._settings.get('app.use_24_hour_time');
    }

    public readonly duration_info = (time: number) => {
        const date = this.form.getRawValue().date;
        if (format(date, 'yyyy-MM-dd') !== format(time, 'yyyy-MM-dd'))
            return '';
        const diff = differenceInMinutes(time, date);
        return ` (${formatDuration({
            hours: Math.floor(diff / 60),
            minutes: diff % 60,
        })})`;
    };

    constructor(
        private _form_state: BookingFormService,
        private _state: EventStateService,
        private _route: ActivatedRoute,
        private _router: Router,
        private _org: OrganisationService,
        private _settings: SettingsService
    ) {
        super();
    }

    public async ngOnInit() {
        await this._org.initialised.pipe(first((_) => _)).toPromise();
        this._form_state.setOptions({ type: 'group-event' });
        this.form.patchValue({
            booking_type: 'group-event',
            asset_id: `GE:${randomString(10)}`,
            permission: 'OPEN',
            zones: unique([
                this._org.organisation.id,
                this._org.building.id,
                this._org.building.parent_id,
            ]),
            location:
                this._org.building.address || this._org.building.display_name,
        });
        this.subscription(
            'route.params',
            this._route.paramMap.subscribe(async (params) => {
                if (params.has('id')) {
                    const event = await showBooking(
                        params.get('id')
                    ).toPromise();
                    if (!event)
                        return this._router.navigate([
                            '/entertainment',
                            'events',
                        ]);
                    this._form_state.newForm(event);
                }
            })
        );
    }

    /**
     * Add a feature to the list of features for the item
     * @param event Input event
     */
    public addTag(event: MatChipInputEvent): void {
        if (!this.form || !this.form.controls.tags) return;
        const input = event.chipInput.inputElement;
        const value = event.value;
        const feature_list = this.tag_list;
        if ((value || '').trim()) {
            feature_list.push(value);
            this.form.controls.tags.setValue(feature_list);
        }
        if (input) input.value = '';
    }

    /**
     * Remove tag from the list
     * @param existing_tag Feature to remove
     */
    public removeTag(existing_tag: string): void {
        if (!this.form || !this.form.controls.tags) return;
        const tag_list = this.tag_list;
        const index = tag_list.indexOf(existing_tag);

        if (index >= 0) {
            tag_list.splice(index, 1);
            this.form.controls.tags.setValue(tag_list);
        }
    }

    public async save() {
        this.form.markAllAsTouched();
        if (!this.form.valid) {
            return notifyError(
                `Some form fields are invalid. [${getInvalidFields(this.form)}]`
            );
        }
        this.loading = true;
        const res = await this._form_state
            .postForm()
            .catch((e) => notifyError(e));
        this._state.changed();
        this.loading = false;
        if (res) this._router.navigate(['/entertainment', 'events']);
    }
}
