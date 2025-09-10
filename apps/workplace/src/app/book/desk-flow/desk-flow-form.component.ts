import { Component, inject, OnInit } from '@angular/core';
import {
    MatBottomSheet,
    MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import { BookingFormService } from '@placeos/bookings';
import {
    firstTruthyValueFrom,
    getInvalidFields,
    i18n,
    notifyError,
    SettingsService,
} from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { isBefore, startOfMinute } from 'date-fns';
import { lastValueFrom } from 'rxjs';
import { first } from 'rxjs/operators';
import { NewDeskFlowConfirmComponent } from './desk-flow-confirm.component';

@Component({
    selector: 'desk-flow-form',
    styles: [],
    template: `
        <div class="h-full w-full overflow-auto bg-base-200">
            <div
                class="mx-auto w-[48rem] max-w-full border border-base-200 bg-base-100 sm:my-4"
            >
                <h2
                    class="w-full border-b border-base-200 p-4 text-2xl font-medium sm:px-16 sm:py-4"
                >
                    {{ 'BOOKINGS.DESK_TITLE' | translate }}
                </h2>
                <desk-form-details
                    class="block p-0 sm:px-16 sm:py-4"
                    [form]="form"
                ></desk-form-details>
                <div class="w-full border-b border-base-200 sm:mb-2"></div>
                <section
                    class="flex flex-col items-center p-2 sm:mb-2 sm:flex-row sm:space-x-2 sm:px-16"
                >
                    <button
                        btn
                        name="open-desk-confirm"
                        matRipple
                        confirm
                        class="w-full sm:w-auto"
                        (click)="viewConfirm()"
                    >
                        {{ 'BOOKINGS.DESK_CONFIRM' | translate }}
                    </button>
                </section>
            </div>
        </div>
    `,
    standalone: false,
})
export class NewDeskFlowFormComponent implements OnInit {
    private _state = inject(BookingFormService);
    private _router = inject(Router);
    private _org = inject(OrganisationService);
    private _bottom_sheet = inject(MatBottomSheet);
    private _settings = inject(SettingsService);

    public sheet_ref: MatBottomSheetRef<NewDeskFlowConfirmComponent>;
    public level = '';
    public levels = [];

    public get form() {
        return this._state.form;
    }

    public readonly clearForm = () => {
        this.level = this._org.building.id;
        this._state.clearForm();
    };

    public readonly viewConfirm = () => {
        const { asset_id, resources } = this.form.getRawValue();
        if (resources?.length && !asset_id) {
            this.form.patchValue({ asset_id: resources[0].id });
        }
        if (!this.form.valid)
            return notifyError(
                i18n('FORM.INVALID_FIELDS', {
                    field_list: getInvalidFields(this.form).join(', '),
                }),
            );
        this.sheet_ref = this._bottom_sheet.open(NewDeskFlowConfirmComponent);
        this.sheet_ref.instance.show_close.set(true);
        this.sheet_ref.afterDismissed().subscribe((value) => {
            if (value) {
                this._state.setView('success');
                this._router.navigate(['/book', 'desks', 'success']);
            }
        });
    };

    public async ngOnInit() {
        await firstTruthyValueFrom(this._org.initialised);
        await lastValueFrom(
            this._org.active_levels.pipe(first((_) => _?.length > 0)),
        );
        this._state.setOptions({ type: 'desk' });
        this.level = this._org.building?.id;
        this.levels = [
            { id: this._org.building?.id, name: 'Any Level' },
            ...this._org.levelsForBuilding(this._org.building),
        ];
        if (isBefore(this.form.value.date, Date.now())) {
            this.form.patchValue({ date: startOfMinute(Date.now()).valueOf() });
        }
        if (!this.form.value.id) {
            this.form.patchValue({
                duration:
                    this._settings.get('app.desks.default_duration') || 60,
            });
        }
    }
}
