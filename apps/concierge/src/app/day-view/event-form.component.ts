import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    input,
    signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormField } from '@angular/forms/signals';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AssetListFieldComponent } from '@placeos/assets';
import {
    CateringListFieldComponent,
    CateringOrderStateService,
} from '@placeos/catering';
import { SettingsService } from '@placeos/common';
import { TranslatePipe } from '@placeos/components';
import { EventFormService } from '@placeos/events';
import {
    DurationFieldComponent,
    SpaceListFieldComponent,
    UserListFieldComponent,
} from '@placeos/form-fields';

import { MeetingFormDetailsComponent } from 'libs/events/src/lib/meeting-form-details.component';

@Component({
    selector: 'event-form',
    template: `
        @if (form()) {
            <form>
                <meeting-form-details [form]="form()"></meeting-form-details>
                @if (!hide_attendees) {
                    <div class="flex flex-1 flex-col">
                        <label for="attendees">
                            {{ 'CALENDAR_EVENT.ATTENDEES' | translate
                            }}<span>*</span>:
                        </label>
                        <a-user-list-field
                            [formField]="form().attendees"
                            [time]="model().date"
                            [guests]="allow_externals"
                        ></a-user-list-field>
                    </div>
                }
                <div class="flex flex-1 flex-col">
                    <label for="space">
                        {{ 'RESOURCE.ROOM' | translate }}<span>*</span>
                    </label>
                    <space-list-field
                        class="w-full"
                        [formField]="form().resources"
                        [multiday]="allow_multiday"
                    ></space-list-field>
                </div>
                @if (has_catering()) {
                    <div class="py-2">
                        <label for="catering">Catering:</label>
                        <catering-list-field
                            [formField]="form().catering"
                            [options]="{
                                date: model().date,
                                duration: model().duration,
                                all_day: model().all_day,
                                zone_id:
                                    model().resources?.[0]?.level?.parent_id,
                            }"
                        ></catering-list-field>
                        @if (model().catering?.length && has_codes()) {
                            <mat-form-field
                                appearance="outline"
                                class="mt-2 w-full"
                            >
                                <mat-select
                                    [formField]="form().catering_charge_code"
                                    placeholder="Charge Code"
                                >
                                    <input
                                        class="border-base-200 bg-base-100 sticky top-0 z-50 w-full rounded-none border-x-0 border-t-0 border-b px-4 py-3 text-base focus:border-b"
                                        [(ngModel)]="code_filter"
                                        [ngModelOptions]="{ standalone: true }"
                                        placeholder="Search charge codes..."
                                    />
                                    <mat-option class="hidden"></mat-option>
                                    @for (
                                        code of filtered_codes();
                                        track code
                                    ) {
                                        <mat-option [value]="code">
                                            {{ code }}
                                        </mat-option>
                                    }
                                </mat-select>
                                <mat-error>
                                    Catering charge code is required
                                </mat-error>
                            </mat-form-field>
                        }
                        @if (model().catering?.length) {
                            <mat-form-field
                                appearance="outline"
                                class="w-full"
                                [class.mt-2]="
                                    !(model().catering?.length && has_codes())
                                "
                            >
                                <textarea
                                    matInput
                                    [formField]="form().catering_notes"
                                    placeholder="Extra catering details..."
                                ></textarea>
                                <mat-error>
                                    Catering Order notes are required
                                </mat-error>
                            </mat-form-field>
                        }
                    </div>
                }
                @if (has_assets) {
                    <div class="mb-4 flex flex-1 flex-col">
                        <label for="space">Assets:</label>
                        <asset-list-field
                            [date]="model().date"
                            [duration]="model().duration"
                            [formField]="form().assets"
                        ></asset-list-field>
                    </div>
                }
                @if (allow_setup_breakdown) {
                    <div class="flex space-x-2">
                        <div class="flex flex-1 flex-col space-y-2">
                            <label for="setup">Setup Duration</label>
                            <a-duration-field
                                [formField]="form().setup_time"
                                [min]="0"
                                [custom_options]="[5, 10]"
                            ></a-duration-field>
                        </div>
                        <div class="flex flex-1 flex-col space-y-2">
                            <label for="breakdown">Breakdown Duration</label>
                            <a-duration-field
                                [min]="0"
                                [formField]="form().breakdown_time"
                                [custom_options]="[5, 10]"
                            ></a-duration-field>
                        </div>
                    </div>
                }
            </form>
        }
    `,
    styles: [``],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        FormsModule,
        FormField,
        MatFormFieldModule,
        MatInputModule,
        DurationFieldComponent,
        MatSelectModule,
        TranslatePipe,
        UserListFieldComponent,
        SpaceListFieldComponent,
        AssetListFieldComponent,
        CateringListFieldComponent,
        MeetingFormDetailsComponent,
    ],
})
export class EventFormComponent {
    private _settings = inject(SettingsService);
    private _event_form = inject(EventFormService);
    private _catering = inject(CateringOrderStateService);

    public readonly form = input<EventFormService['form']>(undefined);
    public readonly code_filter = signal('');

    /** Raw value signal for the event form (mirrors the bound form). */
    public get model() {
        return this._event_form.model;
    }

    private readonly _charge_codes = this._catering.charge_codes;

    public readonly has_catering = computed(
        () => this._catering.available_menu().length > 0,
    );

    public readonly has_codes = computed(
        () => this._catering.charge_codes().length > 0,
    );

    public readonly filtered_codes = computed(() =>
        this._charge_codes().filter((_) =>
            _.toLowerCase().includes(this.code_filter().toLowerCase()),
        ),
    );

    public get hide_attendees() {
        return !!this._settings.get('app.events.hide_attendees');
    }

    public get allow_externals() {
        return !!this._settings.get('app.events.allow_externals');
    }

    public get allow_multiday() {
        return (
            !!this._settings.get('app.events.allow_multiday') ||
            this._event_form.is_multiday
        );
    }

    public get has_assets() {
        return !!this._settings.get('app.events.has_assets');
    }

    public get allow_setup_breakdown() {
        return !!this._settings.get('app.events.allow_setup_breakdown');
    }
}
