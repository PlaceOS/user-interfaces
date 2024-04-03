import { COMMA, ENTER, SPACE } from '@angular/cdk/keycodes';
import { Component } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingFormService, showBooking } from '@placeos/bookings';
import {
    AsyncHandler,
    getInvalidFields,
    notifyError,
    randomString,
    unique,
} from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { first } from 'rxjs/operators';
import { EventStateService } from './event-state.service';

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
                    <div class="flex space-x-2">
                        <div class="flex flex-col flex-1">
                            <label for="date">Start Date<span>*</span></label>
                            <a-date-field
                                name="date"
                                formControlName="date"
                            ></a-date-field>
                        </div>
                        <!-- <div class="flex flex-col flex-1">
                            <label for="organiser"
                                >End Date<span>*</span></label
                            >
                            <a-date-field
                                formControlName="date_end"
                                [from]="form.value.date"
                            ></a-date-field>
                        </div> -->
                    </div>
                    <div class="flex space-x-2">
                        <div class="flex flex-col flex-1">
                            <label for="start">Start<span>*</span></label>
                            <a-time-field
                                name="start"
                                formControlName="date"
                            ></a-time-field>
                        </div>
                        <div class="flex flex-col flex-1">
                            <label for="end">End<span>*</span></label>
                            <a-duration-field
                                name="end"
                                formControlName="duration"
                                [time]="form.value.date"
                            ></a-duration-field>
                        </div>
                    </div>
                    <label for="host">Organiser<span>*</span></label>
                    <a-user-search-field
                        class="block"
                        name="host"
                        formControlName="user"
                    ></a-user-search-field>
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

    constructor(
        private _form_state: BookingFormService,
        private _state: EventStateService,
        private _route: ActivatedRoute,
        private _router: Router,
        private _org: OrganisationService
    ) {
        super();
    }

    public async ngOnInit() {
        await this._org.initialised.pipe(first((_) => _)).toPromise();
        this._form_state.setOptions({ type: 'group-event' });
        this.form.patchValue({
            booking_type: 'group-event',
            asset_id: `GE:${randomString(10)}`,
            zones: unique([
                this._org.organisation.id,
                this._org.building.id,
                this._org.building.parent_id,
            ]),
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
