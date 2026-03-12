import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatRippleModule } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingFormService } from '@placeos/bookings';
import {
    AsyncHandler,
    firstTruthyValueFrom,
    getInvalidFields,
    i18n,
    notifyError,
    notifySuccess,
    OrganisationService,
} from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { firstValueFrom, map } from 'rxjs';
import { DeskFlowAutoAssignComponent } from './desk-flow-auto-assign.component';
import { DeskFlowDetailsComponent } from './desk-flow-details.component';
import { DeskFlowSelectComponent } from './desk-flow-select.component';
import { NewDeskFlowSuccessComponent } from './desk-flow-success.component';

@Component({
    selector: 'desk-flow-new',
    template: `
        @if (view() !== 'success') {
            <div
                class="bg-base-200 relative z-0 flex h-full w-full flex-col overflow-auto"
            >
                <div
                    class="mx-auto min-h-full w-[80rem] max-w-full flex-1 space-y-4 px-4 pt-4"
                >
                    @if (!is_edit_mode()) {
                        <desk-flow-auto-assign class="block" />
                    }
                    <div
                        class="border-base-300 bg-base-100 flex w-full flex-col overflow-hidden rounded-xl border"
                    >
                        <div
                            class="gradient border-base-content relative flex items-center space-x-2 border-l-8 px-4 py-3 text-xl font-medium"
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
                        class="border-base-300 bg-base-100 sticky bottom-0 z-20 flex justify-between rounded-t-xl border-x border-t p-3"
                    >
                        <div></div>
                        <button
                            btn
                            matRipple
                            (click)="confirmBooking()"
                            [disabled]="loading()"
                        >
                            <div class="flex items-center space-x-2">
                                @if (loading()) {
                                    <icon class="animate-spin text-2xl"
                                        >progress_activity</icon
                                    >
                                } @else {
                                    <icon class="text-2xl">task_alt</icon>
                                }
                                <div class="flex-1 pr-4">
                                    {{
                                        loading()
                                            ? ('COMMON.CONFIRMING' | translate)
                                            : ('COMMON.CONFIRM' | translate)
                                    }}
                                </div>
                                @if (!loading()) {
                                    <icon class="text-2xl"
                                        >keyboard_arrow_right</icon
                                    >
                                }
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        } @else {
            <desk-flow-success />
        }
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
        NewDeskFlowSuccessComponent,
    ],
})
export class DeskFlowNewComponent extends AsyncHandler implements OnInit {
    private _booking_form = inject(BookingFormService);
    private _org = inject(OrganisationService);
    private _router = inject(Router);
    private _route = inject(ActivatedRoute);

    public readonly view = this._booking_form.view;
    public readonly loading = signal(false);
    public readonly options = toSignal(this._booking_form.options);

    public readonly form_value = toSignal(
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

    public readonly is_edit_mode = computed(() => !!this.form_value()?.id);

    public ngOnInit() {
        const { booking_type } = this._booking_form.form.getRawValue();
        if (booking_type !== 'desk') {
            this._booking_form.form.patchValue({ booking_type: 'desk' });
            this._booking_form.setOptions({ type: 'desk' });
        }
        this.subscription(
            'route.params',
            this._route.paramMap.subscribe((param) => {
                if (param.has('step'))
                    this._booking_form.setView(param.get('step') as any);
            }),
        );
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe(async (params) => {
                if (!params.has('asset_id')) return;
                const asset_id = params.get('asset_id');
                const form = this._booking_form.form.getRawValue();
                if (
                    asset_id === form.asset_id &&
                    (form.resources || []).some(({ id }) => id === asset_id)
                ) {
                    return;
                }
                await firstTruthyValueFrom(
                    this._booking_form.loading.pipe(map((_) => !_)),
                );
                const resources = await firstValueFrom(
                    this._booking_form.resources,
                );
                const resource = resources.find((item) => item.id === asset_id);
                if (!resource) return;
                const building = resource.zone?.parent_id
                    ? this._org.find(resource.zone.parent_id)
                    : null;
                if (building) {
                    this._org.building = building;
                }
                this._booking_form.setOptions({
                    type: 'desk',
                    ...(resource.zone?.id ? { zones: [resource.zone.id] } : {}),
                });
                this._booking_form.form.patchValue({
                    booking_type: 'desk',
                    resources: [resource],
                    asset_id: resource.id,
                });
            }),
        );
    }

    public async confirmBooking() {
        const { asset_id, resources } = this._booking_form.form.getRawValue();
        if (resources?.length && asset_id !== resources[0].id) {
            this._booking_form.form.patchValue({ asset_id: resources[0].id });
        }
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
        this.loading.set(true);
        try {
            await (this.options()?.group
                ? this._booking_form.postFormForGroup()
                : this._booking_form.postForm());
            notifySuccess(i18n('APP.CONCIERGE.DESKS_BOOKING_SUCCESS'));
            this._router.navigate(['/book/desk/success']);
        } catch (e) {
            notifyError(
                typeof e === 'string'
                    ? e
                    : i18n(`BOOKINGS.DESK_AVAILABLE_ERROR`),
            );
        } finally {
            this.loading.set(false);
        }
    }
}
