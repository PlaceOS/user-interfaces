import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatRippleModule } from '@angular/material/core';
import { BookingFormService } from '@placeos/bookings';
import {
    AsyncHandler,
    getInvalidFields,
    i18n,
    nextValueFrom,
    notifyError,
} from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { DeskFlowAutoAssignComponent } from './desk-flow-auto-assign.component';
import { DeskFlowDetailsComponent } from './desk-flow-details.component';
import { DeskFlowSelectComponent } from './desk-flow-select.component';

@Component({
    selector: 'desk-flow-new',
    template: `
        <div
            class="relative z-0 flex h-full w-full flex-col overflow-auto bg-base-200"
        >
            <div
                class="mx-auto min-h-full w-[64rem] max-w-full flex-1 space-y-4 px-4 pt-4"
            >
                <desk-flow-auto-assign />
                <div
                    class="flex w-full flex-col overflow-hidden rounded-xl border border-base-300 bg-base-100"
                >
                    <div
                        class="gradient relative flex items-center space-x-2 border-l-8 border-base-content px-4 py-3 text-xl font-medium"
                    >
                        <icon>info</icon>
                        <div>
                            {{ 'BOOKINGS.DESK_DETAILS_HEADER' | translate }}
                        </div>
                    </div>
                    <desk-flow-details />
                    <desk-flow-select />
                </div>
                <div
                    class="sticky bottom-0 z-20 flex justify-between rounded-t-xl border-x border-t border-base-300 bg-base-100 p-3"
                >
                    <div></div>
                    <button btn matRipple (click)="confirmBooking()">
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">task_alt</icon>
                            <div class="flex-1 pr-4">
                                {{ 'COMMON.CONFIRM' | translate }}
                            </div>
                            <icon class="text-2xl">keyboard_arrow_right</icon>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    `,
    styles: [
        `
            :host {
                width: 100%;
                height: 100%;
            }

            .gradient {
                background: linear-gradient(
                    105deg,
                    var(--base-200) 0%,
                    var(--base-200) 50%,
                    var(--base-100) 100%
                );
            }
        `,
    ],
    imports: [
        IconComponent,
        TranslatePipe,
        MatRippleModule,
        DeskFlowAutoAssignComponent,
        DeskFlowDetailsComponent,
        DeskFlowSelectComponent,
    ],
})
export class DeskFlowNewComponent extends AsyncHandler implements OnInit {
    private _booking_form = inject(BookingFormService);

    public readonly view = signal(0);

    private readonly form_value = toSignal(
        this._booking_form.form.valueChanges,
        {
            initialValue: this._booking_form.form.value,
        },
    );

    public readonly has_title = computed(
        () => !!this.form_value()?.title?.trim(),
    );

    public readonly has_item = computed(
        () =>
            !!this.form_value()?.resources &&
            this.form_value()?.resources.length > 0,
    );

    public ngOnInit() {
        this._booking_form.form.patchValue({ booking_type: 'desk' });
        this._booking_form.setOptions({ type: 'desk' });
    }

    public async confirmBooking() {
        this._booking_form.form.markAllAsTouched();
        if (!this._booking_form.form.valid) {
            return notifyError(
                i18n('FORM.INVALID_FIELDS', {
                    field_list: getInvalidFields(this._booking_form.form)
                        .join(', ')
                        .replace('asset_id', i18n('RESOURCE.DESK')),
                }),
            );
        }
        try {
            if ((await nextValueFrom(this._booking_form.options))?.group) {
                await this._booking_form.postFormForGroup();
            } else {
                await this._booking_form.postForm();
            }
        } catch (e) {
            notifyError(
                typeof e === 'string'
                    ? e
                    : i18n(`BOOKINGS.DESK_AVAILABLE_ERROR`),
            );
        }
    }
}
