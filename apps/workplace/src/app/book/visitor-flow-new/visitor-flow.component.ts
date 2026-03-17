import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatRippleModule } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingFormService } from '@placeos/bookings';
import {
    AsyncHandler,
    Booking,
    getInvalidFields,
    i18n,
    notifyError,
    notifySuccess,
    SettingsService,
    User,
} from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { VisitorFlowDetailsComponent } from './visitor-flow-details.component';
import { VisitorFlowInvitesComponent } from './visitor-flow-invites.component';
import { VisitorFlowRecentComponent } from './visitor-flow-recent.component';
import { VisitorFlowSuccessComponent } from './visitor-flow-success.component';

@Component({
    selector: 'visitor-flow-new',
    template: `
        @if (view() !== 'success') {
            <div class="relative z-0 h-full w-full overflow-auto bg-base-200">
                <div
                    class="mx-auto flex min-h-full w-[80rem] max-w-full flex-col px-4 pt-4"
                >
                    <visitor-flow-recent />
                    <div
                        class="mb-4 flex w-full flex-col overflow-hidden rounded-xl border border-base-300 bg-base-100"
                    >
                        <div
                            class="gradient relative flex items-center space-x-2 border-l-8 border-base-content px-4 py-3 text-xl font-medium"
                        >
                            <icon>info</icon>
                            <div>
                                {{ visit_heading() | translate }}
                            </div>
                        </div>
                        <visitor-flow-details />
                        <div
                            class="gradient relative flex items-center space-x-2 border-l-8 border-base-content px-4 py-3 text-xl font-medium"
                        >
                            <icon>info</icon>
                            <div>
                                {{ 'BOOKINGS.VISITOR_DETAILS_HEADER' | translate }}
                            </div>
                        </div>
                        <visitor-flow-invites />
                    </div>
                    <div
                        class="sticky bottom-0 z-20 mt-auto flex justify-between rounded-t-xl border-x border-t border-base-300 bg-base-100 p-3"
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
            <visitor-flow-success />
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

            .bg-grad {
                background: linear-gradient(
                    105deg,
                    var(--brand-400) 0%,
                    var(--brand-500) 100%
                );
            }
        `,
    ],
    imports: [
        IconComponent,
        TranslatePipe,
        MatRippleModule,
        VisitorFlowDetailsComponent,
        VisitorFlowInvitesComponent,
        VisitorFlowRecentComponent,
        VisitorFlowSuccessComponent,
    ],
})
export class VisitorFlowNewComponent extends AsyncHandler implements OnInit {
    private _booking_form = inject(BookingFormService);
    private _settings = inject(SettingsService);
    private _router = inject(Router);
    private _route = inject(ActivatedRoute);
    private _existing_siblings: Booking[] = [];

    public readonly view = this._booking_form.view;
    public readonly loading = signal(false);

    public readonly form_value = toSignal(
        this._booking_form.form.valueChanges,
        {
            initialValue: this._booking_form.form.value,
        },
    );

    public readonly is_multiple = computed(
        () => !!this.form_value()?.assets?.length,
    );
    public readonly visit_heading = computed(() =>
        this.form_value()?.id
            ? 'BOOKINGS.EDIT_VISITOR_DETAILS'
            : 'BOOKINGS.VISITOR_TIME_HEADER',
    );

    public ngOnInit() {
        this._booking_form.form.patchValue({ booking_type: 'visitor' });
        this._booking_form.setOptions({ type: 'visitor' });
        this.subscription(
            'route.params',
            this._route.paramMap.subscribe((param) => {
                if (param.has('step'))
                    this._booking_form.setView(param.get('step') as any);
            }),
        );
        this._loadGroupVisitors();
    }

    private async _loadGroupVisitors() {
        const value = this._booking_form.form.getRawValue();
        if (!value.id) return;
        const booking = this._booking_form.booking;
        const is_group =
            !!booking?.parent_id ||
            !!booking?.group ||
            !!booking?.extension_data?.group_members?.length;
        if (!is_group) return;
        const siblings =
            await this._booking_form.loadGroupSiblings(booking);
        if (!siblings?.length) return;
        this._existing_siblings = siblings;
        const visitors = siblings.map(
            (s) =>
                new User({
                    name: s.asset_name,
                    email: s.asset_id,
                    organisation: s.extension_data?.company,
                    phone: s.extension_data?.phone,
                }),
        );
        this._booking_form.form.patchValue({
            assets: visitors,
            asset_id: 'multiple@place.tech',
        });
        this._booking_form.setOptions({ group: true });
    }

    public async confirmBooking() {
        this._booking_form.form.markAllAsTouched();

        const is_multiple = this.is_multiple();
        const visitor_reason =
            this.form_value()?.title ||
            this.form_value()?.description ||
            'Visit';

        // Validate form
        if (!this._booking_form.form.valid) {
            return notifyError(
                i18n('FORM.INVALID_FIELDS', {
                    field_list: getInvalidFields(this._booking_form.form)
                        .join(', ')
                        .replace('asset_id', i18n('BOOKINGS.VISITOR')),
                }),
            );
        }

        // Additional validation for multiple visitors
        if (is_multiple && !this.form_value()?.assets?.length) {
            return notifyError(i18n('BOOKINGS.VISITOR_REQUIRED'));
        }

        this.loading.set(true);
        try {
            const asset_name = this.form_value()?.asset_name;
            this._booking_form.form.patchValue({
                title: visitor_reason,
                description: visitor_reason,
            });
            this._booking_form.last_count = is_multiple
                ? this.form_value()?.assets?.length || 1
                : 1;
            this._saveRecentVisitors(is_multiple);
            await (is_multiple ? this._bookForMany() : this._bookForOne());
            const name = is_multiple ? i18n('BOOKINGS.VISITORS') : asset_name;
            notifySuccess(
                i18n(
                    is_multiple
                        ? 'BOOKINGS.VISITOR_SENT_MULTIPLE'
                        : 'BOOKINGS.VISITOR_SENT_SINGLE',
                    { name, count: this._booking_form.last_count },
                ),
            );
            this._router.navigate(['/book/visitor/success']);
        } catch (e) {
            notifyError(
                typeof e === 'string'
                    ? e
                    : i18n(`BOOKINGS.VISITOR_BOOKING_ERROR`),
            );
        } finally {
            this.loading.set(false);
        }
    }

    private _saveRecentVisitors(is_multiple: boolean) {
        const old_visitors: string[] =
            this._settings.get('visitor-invitees') || [];
        const value = this._booking_form.form.getRawValue();
        const toEntry = (
            email: string,
            name = '',
            org = '',
            phone = '',
        ) => `${email}|${name}|${org}|${phone}`;
        if (is_multiple && value.assets?.length) {
            const emails = new Set(
                value.assets.map((a) => a.email).filter(Boolean),
            );
            this._settings.saveUserSetting('visitor-invitees', [
                ...old_visitors.filter(
                    (v) => !emails.has(`${v}`.split('|')[0]),
                ),
                ...value.assets
                    .filter((a) => !!a.email)
                    .map((a) =>
                        toEntry(
                            a.email,
                            a.name,
                            a.organisation,
                            (a as any).phone || '',
                        ),
                    ),
            ]);
        } else {
            const { asset_id, asset_name, company, phone } = value;
            this._settings.saveUserSetting('visitor-invitees', [
                ...old_visitors.filter(
                    (v) => `${v}`.split('|')[0] !== asset_id,
                ),
                toEntry(asset_id, asset_name, company, phone),
            ]);
        }
    }

    private async _bookForOne() {
        const value = this._booking_form.form.value;
        this._booking_form.form.patchValue({
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
        await this._booking_form.postForm();
    }

    private async _bookForMany() {
        const value = this._booking_form.form.getRawValue();
        const visitor_reason = value.title || value.description || 'Visit';
        const assets: User[] = value.assets || [];
        const visitor_members = assets
            .filter((_) => !!_.email)
            .map(
                (user) =>
                    new User({
                        ...user,
                        name: user.name || user.email,
                    } as any),
            );
        this._booking_form.setOptions({
            type: 'visitor',
            group: true,
            members: visitor_members,
        });
        if (value.id) {
            let existing_siblings = this._existing_siblings;
            if (!existing_siblings.length) {
                existing_siblings =
                    await this._booking_form.loadGroupSiblings(
                        new Booking(value),
                    );
            }
            if (!existing_siblings.length) {
                existing_siblings = [new Booking(value)];
            }
            this._existing_siblings = existing_siblings;
            await this._booking_form.editFormForGroup(existing_siblings);
        } else {
            await this._booking_form.postFormForVisitorGroup();
        }
    }
}
