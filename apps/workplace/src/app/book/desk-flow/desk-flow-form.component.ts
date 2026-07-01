import { Component, computed, inject, OnInit } from '@angular/core';
import {
    MatBottomSheet,
    MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { MatRippleModule } from '@angular/material/core';
import { Router } from '@angular/router';
import { BookingFormService } from '@placeos/bookings';
import {
    getInvalidSignalFields,
    i18n,
    notifyError,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { isBefore, startOfMinute } from 'date-fns';
import { NewDeskFlowConfirmComponent } from './desk-flow-confirm.component';
import { NewDeskFormDetailsComponent } from './desk-form-details.component';

@Component({
    selector: 'desk-flow-form',
    styles: [],
    template: `
        <div class="relative h-full w-full">
            <div
                class="bg-base-200 h-full w-full"
                [class.overflow-auto]="!show_reserved_desk_overlay()"
                [class.overflow-hidden]="show_reserved_desk_overlay()"
            >
                <div
                    class="border-base-200 bg-base-100 mx-auto w-3xl max-w-full border sm:my-4"
                >
                    <h2
                        class="border-base-200 w-full border-b p-4 text-2xl font-medium sm:px-16 sm:py-4"
                    >
                        {{ 'BOOKINGS.DESK_TITLE' | translate }}
                    </h2>
                    <desk-form-details
                        class="block p-0 sm:px-16 sm:py-4"
                        [form]="form"
                        [model_input]="model"
                    ></desk-form-details>
                    <div class="border-base-200 w-full border-b sm:mb-2"></div>
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
            @if (show_reserved_desk_overlay()) {
                <div
                    name="reserved-desk-overlay"
                    class="bg-base-200/80 absolute inset-0 z-20 flex items-center justify-center p-4 backdrop-blur-sm"
                >
                    <div
                        class="bg-base-100 border-base-200 flex w-[26rem] max-w-full flex-col items-center space-y-2 rounded-lg border p-8 text-center shadow-lg"
                    >
                        <icon class="text-info text-6xl">chair_alt</icon>
                        <h3 class="text-xl font-medium">
                            {{ 'BOOKINGS.DESK_RESERVED_TITLE' | translate }}
                        </h3>
                        <p class="opacity-60">
                            {{ 'BOOKINGS.DESK_RESERVED_MESSAGE' | translate }}
                        </p>
                    </div>
                </div>
            }
        </div>
    `,
    imports: [
        TranslatePipe,
        NewDeskFormDetailsComponent,
        MatRippleModule,
        IconComponent,
    ],
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

    /**
     * Blanket-block the form only when the user has a reserved desk and booking
     * with a reserved desk is disallowed entirely. When it is allowed, a
     * `prevent_self_booking_if_assigned_resource` restriction blocks only their
     * own bookings (enforced at submit), so the form stays open for booking on
     * behalf of others.
     */
    public readonly show_reserved_desk_overlay = computed(
        () =>
            this._state.has_assigned_desk() &&
            !this._state.allowsBookingWithReservedResource('desk'),
    );

    public get form() {
        return this._state.form;
    }

    public get model() {
        return this._state.model;
    }

    public readonly clearForm = () => {
        this.level = this._org.building.id;
        this._state.clearForm();
    };

    public readonly viewConfirm = async () => {
        // Auto-allocate a desk if the setting is enabled and none selected
        if (this._state.auto_allocation) {
            try {
                await this._state.autoAllocateDesk();
            } catch (e) {
                return notifyError(
                    typeof e === 'string'
                        ? e
                        : i18n('BOOKINGS.DESK_AVAILABLE_ERROR'),
                );
            }
        }
        const { asset_id, resources } = this.model();
        if (resources?.length && asset_id !== resources[0].id) {
            this.model.update((m) => ({ ...m, asset_id: resources[0].id }));
        }
        if (!this.form().valid())
            return notifyError(
                i18n('FORM.INVALID_FIELDS', {
                    field_list: getInvalidSignalFields(
                        this.form,
                        this.model,
                    ).join(', '),
                }),
            );
        this.sheet_ref = this._bottom_sheet.open(NewDeskFlowConfirmComponent);
        this.sheet_ref.instance.show_close.set(true);
        this.sheet_ref.afterDismissed().subscribe((value) => {
            if (value) {
                this._state.setView('success');
                this._router.navigate(['/book', 'desk', 'success']);
            }
        });
    };

    public async ngOnInit() {
        await this._org.waitUntilInitialised();
        await this._waitForActiveLevels();
        this._state.setOptions({ type: 'desk' });
        this.level = this._org.building?.id;
        this.levels = [
            { id: this._org.building?.id, name: 'Any Level' },
            ...this._org.levelsForBuilding(this._org.building),
        ];
        if (!this.model().id && isBefore(this.model().date, Date.now())) {
            this.model.update((m) => ({
                ...m,
                date: startOfMinute(Date.now()).valueOf(),
            }));
        }
        if (!this.model().id) {
            this.model.update((m) => ({
                ...m,
                duration:
                    this._settings.get('app.desks.default_duration') || 60,
            }));
        }
    }

    private async _waitForActiveLevels() {
        while (!this._org.active_levels()?.length) {
            await new Promise((resolve) => setTimeout(resolve, 50));
        }
    }
}
