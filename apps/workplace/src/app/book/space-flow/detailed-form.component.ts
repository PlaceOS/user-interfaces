import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CateringOrder, CateringStateService } from '@placeos/catering';
import { SettingsService } from '@placeos/common';
import { EventFlowOptions } from '@placeos/events';
import { OrganisationService } from '@placeos/organisation';

@Component({
    selector: 'detailed-book-space-form',
    template: `
        <form *ngIf="form" [formGroup]="form">
            <section class="mb-4 border-b border-base-200">
                <div
                    class="flex flex-col sm:flex-row space-x-0 sm:space-x-2 w-[640px] max-w-[calc(100%-2rem)] mx-auto"
                >
                    <div class="flex flex-col flex-1 w-full sm:w-1/3">
                        <label for="date">Date</label>
                        <a-date-field name="date" formControlName="date">
                            Date and time must be in the future
                        </a-date-field>
                    </div>
                    <div class="flex flex-col flex-1 w-full sm:w-1/3">
                        <label for="start-time">Start Time</label>
                        <a-time-field
                            name="start-time"
                            [ngModel]="form.value.date"
                            (ngModelChange)="form.patchValue({ date: $event })"
                            [ngModelOptions]="{ standalone: true }"
                        ></a-time-field>
                    </div>
                    <div class="flex flex-col flex-1 w-full sm:w-1/3 relative">
                        <label for="end-time">End Time</label>
                        <a-duration-field
                            name="end-time"
                            formControlName="duration"
                            [time]="form.value.date"
                            [max]="max_duration"
                        >
                        </a-duration-field>
                        <mat-checkbox
                            formControlName="all_day"
                            *ngIf="allow_all_day"
                            class="absolute top-0 right-0"
                        >
                            All Day
                        </mat-checkbox>
                    </div>
                </div>
                <div
                    class="flex flex-col sm:flex-row space-x-0 sm:space-x-2 w-[640px] max-w-[calc(100%-2rem)] mx-auto"
                >
                    <div
                        class="flex flex-col flex-1 w-full"
                        *ngIf="show_features && features?.length"
                    >
                        <label for="building">Building</label>
                        <mat-form-field
                            overlay
                            buildings
                            class="w-full h-[3.25rem]"
                            *ngIf="(buildings | async)?.length > 1"
                            appearance="outline"
                        >
                            <mat-select
                                placeholder="Select Building..."
                                [ngModel]="building"
                                (ngModelChange)="setBuilding($event)"
                                [ngModelOptions]="{ standalone: true }"
                            >
                                <mat-option
                                    *ngFor="let bld of buildings | async"
                                    [value]="bld"
                                >
                                    {{ bld.display_name || bld.name }}
                                </mat-option>
                            </mat-select>
                        </mat-form-field>
                    </div>
                    <div
                        class="flex flex-col flex-1 w-full"
                        *ngIf="show_features && features?.length"
                    >
                        <label for="features">Features</label>
                        <mat-form-field
                            class="w-full h-[3.25rem]"
                            overlay
                            appearance="outline"
                        >
                            <mat-select
                                [placeholder]="'Any ' + features_label"
                                multiple
                                [ngModel]="options?.features"
                                (ngModelChange)="
                                    optionsChange.emit({ features: $event })
                                "
                                [ngModelOptions]="{ standalone: true }"
                            >
                                <mat-option
                                    *ngFor="let item of features"
                                    [value]="item"
                                >
                                    {{ item }}
                                </mat-option>
                            </mat-select>
                        </mat-form-field>
                    </div>
                </div>
            </section>
            <section
                class="mb-4 border-b border-base-200"
                *ngIf="can_book_for_others || !hide_attendees"
            >
                <div
                    class="flex flex-col w-[640px] max-w-[calc(100%-2rem)] mx-auto"
                    *ngIf="can_book_for_others"
                >
                    <label for="host">Host<span>*</span></label>
                    <host-select-field
                        name="host"
                        formControlName="organiser"
                    ></host-select-field>
                </div>
                <div
                    class="flex flex-col w-[640px] max-w-[calc(100%-2rem)] mx-auto mb-2"
                    *ngIf="!hide_attendees"
                >
                    <label for="attendees">Attendees</label>
                    <a-user-list-field
                        name="attendees"
                        [hide_actions]="hide_actions"
                        formControlName="attendees"
                    ></a-user-list-field>
                </div>
            </section>
            <section class="mb-4 border-b border-base-200">
                <div class="w-[640px] max-w-[calc(100%-2rem)] mx-auto">
                    <div class="flex flex-col">
                        <label for="title"
                            >Meeting Subject <span>*</span></label
                        >
                        <mat-form-field appearance="outline">
                            <input
                                name="title"
                                matInput
                                formControlName="title"
                                placeholder="Meeting title"
                            />
                            <mat-error>Meeting Subject is required</mat-error>
                        </mat-form-field>
                    </div>
                    <div
                        class="flex flex-col resize-y mb-4"
                        *ngIf="!hide_notes"
                    >
                        <label for="notes">Notes</label>
                        <rich-text-input
                            name="notes"
                            formControlName="body"
                            placeholder="Add meeting notes here..."
                        ></rich-text-input>
                    </div>
                    <div class="flex flex-col mb-4" *ngIf="has_catering">
                        <label>Catering</label>
                        <an-action-field (onAction)="editCatering()">
                            <div
                                class="opacity-40"
                                *ngIf="!form?.value.catering?.length"
                            >
                                Add catering
                            </div>
                            <div
                                class="flex items-center"
                                *ngIf="form?.value.catering?.length"
                            >
                                <div class="flex-1 w-1/2">
                                    {{ form?.value.catering[0].item_count }}
                                    item(s)
                                </div>
                                <div class="text-xs opacity-60 px-4">
                                    {{
                                        form?.value.catering[0].total_cost / 100
                                            | currency: code
                                    }}
                                </div>
                            </div>
                        </an-action-field>
                    </div>
                </div>
            </section>
        </form>
    `,
    styles: [``],
})
export class DetailBookSpaceFormComponent {
    @Input() public form: FormGroup;
    @Input() public options: EventFlowOptions;
    @Input() public features: string[] = [];
    @Output() public optionsChange = new EventEmitter<EventFlowOptions>();

    public readonly buildings = this._org.building_list;
    public readonly setBuilding = (b) => (this._org.building = b);

    public get building() {
        return this._org.building;
    }

    public get has_catering() {
        return !!this._settings.get('app.events.has_catering');
    }

    public get hide_actions() {
        return !!this._settings.get('app.events.hide_user_actions');
    }

    public get hide_notes() {
        return !!this._settings.get('app.events.hide_notes');
    }

    public get hide_attendees() {
        return !!this._settings.get('app.events.hide_attendees');
    }

    public get can_book_for_others() {
        return this._settings.get('app.events.can_book_for_others');
    }

    public get allow_all_day() {
        return this._settings.get('app.events.allow_all_day');
    }

    public get max_duration() {
        return this._settings.get('app.events.max_duration') || 4 * 60;
    }

    public get show_features() {
        return !!this._settings.get('app.events.features_on_form');
    }

    public get features_label() {
        return this._settings.get('app.events.features_label') || 'feature';
    }

    public get code() {
        return this._org.currency_code;
    }

    public readonly editCatering = async () =>
        this.form.patchValue({
            catering: [
                await this._catering.manageCateringOrder(
                    (this.form.value.catering
                        ? this.form.value.catering[0]
                        : null) || new CateringOrder()
                ),
            ],
        });

    constructor(
        private _catering: CateringStateService,
        private _org: OrganisationService,
        private _settings: SettingsService
    ) {}
}
