import { CommonModule } from '@angular/common';
import {
    Component,
    computed,
    effect,
    ElementRef,
    inject,
    Injector,
    OnInit,
    signal,
    TemplateRef,
    viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormField } from '@angular/forms/signals';
import {
    MatBottomSheet,
    MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { AssetListFieldComponent, AssetStateService } from '@placeos/assets';
import {
    CateringListFieldComponent,
    CateringOrderStateService,
} from '@placeos/catering';
import {
    ANIMATION_SHOW_CONTRACT_EXPAND,
    AsyncHandler,
    currentUser,
    getInvalidSignalFields,
    i18n,
    notifyError,
    notifyWarn,
    onFieldChange,
    OrganisationService,
    settingSignal,
    SettingsService,
    Space,
    UserIdleTimeService,
} from '@placeos/common';
import {
    IconComponent,
    openConfirmModal,
    TranslatePipe,
} from '@placeos/components';
import { EventFormService } from '@placeos/events';
import {
    RichTextInputComponent,
    SpaceListFieldComponent,
    UserListFieldComponent,
} from '@placeos/form-fields';
import { FindAvailabilityModalComponent } from '@placeos/users';

import { MeetingFormDetailsComponent } from 'libs/events/src/lib/meeting-form-details.component';
import { MeetingFlowConfirmModalComponent } from './meeting-flow-confirm-modal.component';
import { MeetingFlowConfirmComponent } from './meeting-flow-confirm.component';

@Component({
    selector: 'meeting-flow-form',
    template: `
        <div class="bg-base-200 h-full w-full overflow-auto">
            <div
                class="border-base-300 bg-base-100 mx-auto w-3xl max-w-full border sm:my-4"
            >
                <h2
                    class="border-base-300 w-full border-b p-4 text-2xl font-medium sm:px-16 sm:py-4"
                >
                    {{
                        (!!model().id
                            ? 'APP.WORKPLACE.MEETING_BOOK_EDIT_HEADER'
                            : 'APP.WORKPLACE.MEETING_BOOK_NEW_HEADER'
                        ) | translate
                    }}
                </h2>
                @if (form) {
                    <form
                        class="divide-base-200 space-y-2 divide-y p-0 sm:px-16 sm:py-4"
                    >
                        <section class="p-2">
                            <h3 class="flex items-center space-x-2">
                                <div
                                    class="bg-base-200 flex h-6 w-6 items-center justify-center rounded-full"
                                >
                                    1
                                </div>
                                <div class="text-xl">
                                    {{ 'COMMON.DETAILS' | translate }}
                                </div>
                                <div class="w-px flex-1"></div>
                                <button
                                    icon
                                    name="toggle-details-meeting"
                                    matRipple
                                    (click)="
                                        hide_block.details = !hide_block.details
                                    "
                                >
                                    <icon>{{
                                        hide_block.details
                                            ? 'expand_more'
                                            : 'expand_less'
                                    }}</icon>
                                </button>
                            </h3>
                            <div
                                class="overflow-hidden"
                                [@show]="hide_block.details ? 'hide' : 'show'"
                            >
                                <meeting-form-details
                                    class="mt-4"
                                    [form]="form"
                                ></meeting-form-details>
                            </div>
                        </section>
                        @if (!hide_attendees) {
                            <section class="p-2">
                                <h3 class="flex items-center space-x-2">
                                    <div
                                        class="bg-base-200 flex h-6 w-6 items-center justify-center rounded-full"
                                    >
                                        2
                                    </div>
                                    <div class="text-xl">
                                        {{
                                            'CALENDAR_EVENT.ATTENDEES'
                                                | translate
                                        }}
                                    </div>
                                    <div class="w-px flex-1"></div>
                                    <button
                                        matRipple
                                        name="find-attendee-availability"
                                        class="text-info bg-none text-xs underline"
                                        (click)="findAvailableTime()"
                                    >
                                        {{ 'COMMON.AVAILABILITY' | translate }}
                                    </button>
                                    <button
                                        icon
                                        name="toggle-attendees-meeting"
                                        matRipple
                                        (click)="
                                            hide_block.attendees =
                                                !hide_block.attendees
                                        "
                                    >
                                        <icon>{{
                                            hide_block.attendees
                                                ? 'expand_more'
                                                : 'expand_less'
                                        }}</icon>
                                    </button>
                                </h3>
                                <div
                                    class="overflow-hidden"
                                    [@show]="
                                        hide_block.attendees ? 'hide' : 'show'
                                    "
                                >
                                    <a-user-list-field
                                        class="mt-4"
                                        [formField]="form.attendees"
                                        [time]="model().date"
                                        [guests]="allow_externals()"
                                    ></a-user-list-field>
                                    @if (can_notify_new_attendees_only()) {
                                        <mat-checkbox
                                            name="notify-new-attendees-only"
                                            [(ngModel)]="
                                                notify_new_attendees_only
                                            "
                                            [ngModelOptions]="{
                                                standalone: true,
                                            }"
                                        >
                                            {{
                                                'CALENDAR_EVENT.NOTIFY_NEW_ATTENDEES_ONLY'
                                                    | translate
                                            }}
                                        </mat-checkbox>
                                    }
                                </div>
                            </section>
                        }
                        <section class="p-2">
                            <h3 class="flex items-center space-x-2">
                                <div
                                    class="bg-base-200 flex h-6 w-6 items-center justify-center rounded-full"
                                >
                                    3
                                </div>
                                <div class="text-xl">
                                    {{ 'RESOURCE.ROOM' | translate }}
                                </div>
                                <div class="w-px flex-1"></div>
                                <button
                                    icon
                                    name="toggle-spaces-meeting"
                                    matRipple
                                    (click)="
                                        hide_block.resources =
                                            !hide_block.resources
                                    "
                                >
                                    <icon>{{
                                        hide_block.resources
                                            ? 'expand_more'
                                            : 'expand_less'
                                    }}</icon>
                                </button>
                            </h3>
                            <div
                                class="flex flex-col items-center overflow-hidden"
                                [@show]="hide_block.resources ? 'hide' : 'show'"
                            >
                                @if (
                                    !strict_capacity_check &&
                                    total_capacity &&
                                    total_capacity <= model().attendees?.length
                                ) {
                                    <div
                                        class="bg-warning text-warning-content mx-auto my-2 inline-flex rounded-sm p-2 text-xs shadow-sm"
                                    >
                                        {{
                                            'CALENDAR_EVENT.CAPACITY_WARNING'
                                                | translate
                                        }}
                                    </div>
                                }
                                <space-list-field
                                    class="w-full"
                                    [formField]="form.resources"
                                    [multiday]="allow_multiday"
                                ></space-list-field>
                            </div>
                        </section>
                        @if (has_catering()) {
                            <section class="p-2">
                                <h3 class="flex items-center space-x-2">
                                    <div
                                        class="bg-base-200 flex h-6 w-6 items-center justify-center rounded-full"
                                    >
                                        4
                                    </div>
                                    <div class="text-xl">
                                        {{ 'RESOURCE.CATERING' | translate }}
                                    </div>
                                    <div class="w-px flex-1"></div>
                                    <button
                                        icon
                                        name="toggle-catering-meeting"
                                        matRipple
                                        (click)="
                                            hide_block.catering =
                                                !hide_block.catering
                                        "
                                    >
                                        <icon>{{
                                            hide_block.catering
                                                ? 'expand_more'
                                                : 'expand_less'
                                        }}</icon>
                                    </button>
                                </h3>
                                <div
                                    class="overflow-hidden"
                                    [@show]="
                                        hide_block.catering ? 'hide' : 'show'
                                    "
                                >
                                    <catering-list-field
                                        [formField]="form.catering"
                                        [options]="{
                                            date: model().date,
                                            duration: model().duration,
                                            all_day: model().all_day,
                                            zone_id: model()?.resources?.length
                                                ? model()?.resources[0]?.level
                                                      ?.parent_id
                                                : '',
                                        }"
                                    ></catering-list-field>
                                    @if (
                                        model().catering?.length && has_codes()
                                    ) {
                                        <mat-form-field
                                            appearance="outline"
                                            class="mt-2 w-full"
                                            (openedChange)="focusInput()"
                                        >
                                            <mat-select
                                                [formField]="
                                                    form.catering_charge_code
                                                "
                                                [placeholder]="
                                                    'CATERING.CHARGE_CODE'
                                                        | translate
                                                "
                                            >
                                                <input
                                                    #input
                                                    class="border-base-200 bg-base-100 sticky top-0 z-50 w-full rounded-none border-x-0 border-t-0 border-b px-4 py-3 text-base focus:border-b"
                                                    [ngModel]="code_filter()"
                                                    (ngModelChange)="
                                                        code_filter.set($event)
                                                    "
                                                    [ngModelOptions]="{
                                                        standalone: true,
                                                    }"
                                                    [placeholder]="
                                                        'CALENDAR_EVENT.CATERING_CHARGE_CODE_SEARCH'
                                                            | translate
                                                    "
                                                />
                                                <mat-option
                                                    class="hidden"
                                                ></mat-option>
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
                                                {{
                                                    'CALENDAR_EVENT.CATERING_CHARGE_CODE_REQUIRED'
                                                        | translate
                                                }}
                                            </mat-error>
                                        </mat-form-field>
                                    }
                                    @if (model().catering?.length) {
                                        <mat-form-field
                                            appearance="outline"
                                            class="w-full"
                                            [class.mt-2]="
                                                !(
                                                    model().catering?.length &&
                                                    has_codes()
                                                )
                                            "
                                        >
                                            <textarea
                                                matInput
                                                [formField]="
                                                    form.catering_notes
                                                "
                                                [placeholder]="
                                                    'CALENDAR_EVENT.CATERING_NOTES'
                                                        | translate
                                                "
                                            ></textarea>
                                            <mat-error>
                                                {{
                                                    'CALENDAR_EVENT.CATERING_NOTES_REQUIRED'
                                                        | translate
                                                }}
                                            </mat-error>
                                        </mat-form-field>
                                    }
                                </div>
                            </section>
                        }
                        @if (has_assets) {
                            <section class="p-2">
                                <h3 class="flex items-center space-x-2">
                                    <div
                                        class="bg-base-200 flex h-6 w-6 items-center justify-center rounded-full"
                                    >
                                        {{ !has_catering() ? '4' : '5' }}
                                    </div>
                                    <div class="text-xl">
                                        {{ 'RESOURCE.ASSETS' | translate }}
                                    </div>
                                    <div class="w-px flex-1"></div>
                                    <button
                                        icon
                                        name="toggle-assets-meeting"
                                        matRipple
                                        (click)="
                                            hide_block.assets =
                                                !hide_block.assets
                                        "
                                    >
                                        <icon>{{
                                            hide_block.assets
                                                ? 'expand_more'
                                                : 'expand_less'
                                        }}</icon>
                                    </button>
                                </h3>
                                <div
                                    class="overflow-hidden"
                                    [@show]="
                                        hide_block.assets ? 'hide' : 'show'
                                    "
                                >
                                    <asset-list-field
                                        [options]="{
                                            date: model().date,
                                            duration: model().duration,
                                            all_day: model().all_day,
                                            zone: model()?.resources?.length
                                                ? model()?.resources[0]?.level
                                                      ?.parent_id
                                                : '',
                                            resources: model()?.resources || [],
                                        }"
                                        [rejected_ids]="invalid_assets()"
                                        [formField]="form.assets"
                                    ></asset-list-field>
                                </div>
                            </section>
                        }
                        @if (!hide_notes) {
                            <section class="p-2">
                                <h3 class="mb-4 flex items-center space-x-2">
                                    <div
                                        class="bg-base-200 flex h-6 w-6 items-center justify-center rounded-full"
                                    >
                                        {{
                                            !has_catering() || !has_assets
                                                ? !has_catering() && !has_assets
                                                    ? '4'
                                                    : '5'
                                                : '6'
                                        }}
                                    </div>
                                    <div class="text-xl">
                                        {{ 'FORM.NOTES' | translate }}
                                    </div>
                                </h3>
                                <div class="flex w-full flex-col">
                                    <label for="notes">
                                        {{
                                            'CALENDAR_EVENT.NOTES_INFO'
                                                | translate
                                        }}
                                    </label>
                                    <rich-text-input
                                        [formField]="form.body"
                                        [placeholder]="
                                            'CALENDAR_EVENT.NOTES_INFO'
                                                | translate
                                        "
                                    ></rich-text-input>
                                </div>
                            </section>
                        }
                        <section
                            class="flex flex-col items-center p-2 sm:flex-row sm:space-x-2"
                        >
                            <button
                                btn
                                name="open-meeting-confirm"
                                matRipple
                                confirm
                                class="mb-2 w-full sm:mb-0 sm:w-auto"
                                (click)="viewConfirm()"
                            >
                                {{ 'CALENDAR_EVENT.CONFIRM' | translate }}
                            </button>
                            <button
                                btn
                                name="clear-form-meeting"
                                matRipple
                                clear-form
                                class="inverse w-full sm:w-auto"
                                (click)="clearForm()"
                            >
                                {{
                                    (!!model().id ? 'FORM.RESET' : 'FORM.CLEAR')
                                        | translate
                                }}
                            </button>
                        </section>
                    </form>
                }
            </div>
        </div>
    `,
    styles: [],
    animations: [ANIMATION_SHOW_CONTRACT_EXPAND],
    imports: [
        CommonModule,
        TranslatePipe,
        IconComponent,
        MatRippleModule,
        MatCheckboxModule,
        RichTextInputComponent,
        AssetListFieldComponent,
        CateringListFieldComponent,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        FormsModule,
        FormField,
        SpaceListFieldComponent,
        UserListFieldComponent,
        MeetingFormDetailsComponent,
        UserListFieldComponent,
    ],
})
export class MeetingFlowFormComponent extends AsyncHandler implements OnInit {
    private _state = inject(EventFormService);
    private _catering = inject(CateringOrderStateService);
    private _assets = inject(AssetStateService);
    private _settings = inject(SettingsService);
    private _router = inject(Router);
    private _dialog = inject(MatDialog);
    private _bottom_sheet = inject(MatBottomSheet);
    private _org = inject(OrganisationService);
    private _idle = inject(UserIdleTimeService);
    private _injector = inject(Injector);

    public sheet_ref: MatBottomSheetRef<any>;
    public dialog_ref: MatDialogRef<any>;
    public hide_block: Record<string, boolean> = {};
    public code_filter = signal('');
    public invalid_assets = signal<string[]>([]);
    public readonly can_notify_new_attendees_only =
        this._state.can_notify_new_attendees_only;
    public readonly notify_new_attendees_only =
        this._state.notify_new_attendees_only;

    public readonly has_catering = computed(
        () => this._catering.available_menu().length > 0,
    );

    public readonly has_codes = computed(
        () => this._catering.charge_codes().length > 0,
    );

    public get model() {
        return this._state.model;
    }

    public readonly filtered_codes = computed(() =>
        this._catering
            .charge_codes()
            .filter((_) =>
                _.toLowerCase().includes(this.code_filter().toLowerCase()),
            ),
    );

    public get form() {
        return this._state.form;
    }

    public get event() {
        return this._state.event;
    }

    public get has_assets() {
        return !!this._settings.get('app.events.has_assets');
    }

    public get hide_notes() {
        return !!this._settings.get('app.events.hide_notes');
    }

    public get hide_attendees() {
        return !!this._settings.get('app.events.hide_attendees');
    }

    public allow_externals = settingSignal('events.allow_externals');

    public get strict_capacity_check() {
        return this._settings.get('app.events.strict_capacity_check');
    }

    public get total_capacity() {
        return this.model().resources?.reduce((c, i) => c + i.capacity, 0) || 0;
    }

    public get allow_multiday() {
        return (
            this._settings.get('app.events.allow_multiday') ||
            this._state.is_multiday
        );
    }

    public get attendee_count() {
        const user = currentUser();
        let count = this.model().attendees?.length || 0;
        if (
            !this.model().attendees.find(
                (_) => _.email.toLowerCase() === user.email.toLowerCase(),
            )
        ) {
            count += 1;
        }
        return count;
    }

    private _space_list = signal<Space[]>([]);

    private _assets_available = signal(false);

    private _catering_available = signal(false);

    constructor() {
        super();
        effect((onCleanup) => {
            const space_list = this._space_list();
            this.model();
            const timeout = setTimeout(
                () => this._checkAssets(space_list),
                300,
            );
            onCleanup(() => clearTimeout(timeout));
        });
        effect((onCleanup) => {
            const space_list = this._space_list();
            this.has_catering();
            this.model();
            const timeout = setTimeout(
                () => this._checkCatering(space_list),
                300,
            );
            onCleanup(() => clearTimeout(timeout));
        });
    }

    public readonly clearForm = () => this._state.resetForm();

    public get allow_daily_allday_recurrence() {
        return this._settings.get('app.events.allow_daily_allday_recurrence');
    }

    public readonly viewConfirm = async () => {
        if (!this.model().host)
            this.model.update((m) => ({ ...m, host: currentUser()?.email }));
        if (
            this.strict_capacity_check &&
            this.attendee_count > this.total_capacity
        ) {
            return notifyError(i18n('CALENDAR_EVENT.CAPACITY_ERROR'));
        }
        if (
            !this.allow_daily_allday_recurrence &&
            this.model().all_day &&
            this.model().recurrence?.pattern === 'daily'
        ) {
            return notifyError(i18n('CALENDAR_EVENT.DAILY_RECURR_ERROR'));
        }
        this.form().markAsTouched();
        if (!this.form().valid())
            return notifyError(
                i18n('FORM.INVALID_FIELDS', {
                    field_list: getInvalidSignalFields(
                        this.form,
                        this.model,
                    ).join(', '),
                }),
            );
        if (
            this._settings.get('app.events.no_standalone') &&
            !this.model().resources.length
        )
            return notifyError(i18n('CALENDAR_EVENT.ROOM_REQUIRED'));
        if (this._settings.get('app.events.booking_unavailable'))
            return this._state.openEventLinkModal();
        if (window.innerWidth >= 768) {
            this.dialog_ref = this._dialog.open(
                MeetingFlowConfirmModalComponent,
            );
            this.dialog_ref.componentInstance.show_close.set(true);
            this.dialog_ref.afterClosed().subscribe((value) => {
                if (value) {
                    this.unsubWith('idle');
                    this._router.navigate(['/book', 'meeting', 'success']);
                    this._state.setView('success');
                }
            });
        } else {
            this.sheet_ref = this._bottom_sheet.open(
                MeetingFlowConfirmComponent,
            );
            this.sheet_ref.instance.show_close.set(true);
            this.sheet_ref.afterDismissed().subscribe((value) => {
                if (value) {
                    this.unsubWith('idle');
                    this._router.navigate(['/book', 'meeting', 'success']);
                    this._state.setView('success');
                }
            });
        }
    };

    private readonly _confirm_ref = viewChild<TemplateRef<any>>('confirm_ref');
    private readonly _input_el =
        viewChild<ElementRef<HTMLInputElement>>('input');

    private _updateValidAssets() {
        if (!this.event?.id) {
            this.invalid_assets.set([]);
            return;
        }
        const requested_assets = this.model().assets || [];
        const linked_bookings = this.event?.linked_bookings || [];
        this.invalid_assets.set(
            requested_assets
                .filter(
                    (_) =>
                        !_._changed &&
                        !linked_bookings.find(
                            (bkn) => bkn.extension_data?.request_id === _.id,
                        ),
                )
                .map((_) => _.id),
        );
    }

    private _checkAssets(space_list: Space[]) {
        if (!space_list?.length || !this.has_assets) {
            this._assets_available.set(false);
            return;
        }
        const value = this.model();
        this._assets.setOptions({
            date: value.date,
            duration: value.duration,
            resources: space_list,
            zone: this._org.levelWithID(space_list[0].zones)?.parent_id,
            tags: [],
            categories: [],
        } as any);
        const items = this._assets.filtered_assets();
        const disabled_rooms = this._assets.disabled_rooms();
        const assets_available = space_list.every(
            (space) =>
                items.filter(
                    (_) =>
                        !(_ as any).hide_for_zones?.find((z) =>
                            space.zones.includes(z),
                        ),
                ).length > 0,
        );
        const available =
            assets_available &&
            !disabled_rooms.find((_) => space_list.find((i) => i.id === _));
        this._assets_available.set(available);
        if (available) return;
        const event = this._state.event;
        const { id, assets, date, date_end } = this.model();
        const has_assets = !!assets?.length;
        const time_changed =
            has_assets &&
            (!id || date !== event.date || date_end !== event.date_end);
        if (time_changed) {
            this.model.update((m) => ({ ...m, assets: [] }));
            if (this.has_assets) {
                notifyWarn(i18n('CALENDAR_EVENT.ASSETS_UNAVAILABLE'));
            }
        }
    }

    private _checkCatering(space_list: Space[]) {
        if (!space_list?.length || !this.has_catering()) {
            this._catering_available.set(false);
            return;
        }
        const value = this.model();
        this._catering.setFilters({
            search: '',
            date: value.date,
            duration: value.duration,
            resources: space_list,
            zone_id: this._org.levelWithID(space_list[0].zones)?.parent_id,
            tags: [],
            categories: [],
        });
        const menu = this._catering.filtered_menu();
        const disabled_rooms = this._catering.availability();
        const can_cater = space_list.every(
            (space) =>
                menu.filter(
                    (_) =>
                        !_.hide_for_zones.find((z) => space.zones.includes(z)),
                ).length > 0,
        );
        const available =
            can_cater &&
            !disabled_rooms.find((_) => space_list.find((i) => i.id === _));
        this._catering_available.set(available);
        if (available) return;
        const event = this._state.event;
        const { id, catering, date, date_end } = this.model();
        const has_catering = !!catering?.length;
        const time_changed =
            has_catering &&
            (!id || date !== event.date || date_end !== event.date_end);
        if (time_changed) {
            this.model.update((m) => ({ ...m, catering: [] }));
            if (this.has_catering()) {
                notifyWarn(i18n('CALENDAR_EVENT.CATERING_UNAVAILABLE'));
            }
        }
    }

    public async ngOnInit() {
        await this._org.waitUntilInitialised();
        // Asset enable/disable is driven by the form schema (assets are
        // disabled until a room/resource is selected); catering visibility is
        // gated in the template by `has_catering`/`_catering_available`.
        this.subscription('asset_changes', {
            unsubscribe: onFieldChange(
                this._state.model,
                (m) => m.assets,
                () => this._updateValidAssets(),
                this._injector,
            ).destroy,
        } as any);
        for (const key of [
            'resources',
            'date',
            'duration',
            'date_end',
        ] as const) {
            this.subscription(`${key}_changes`, {
                unsubscribe: onFieldChange(
                    this._state.model,
                    (m) => (m as any)[key],
                    () =>
                        this.timeout('check_resources', () =>
                            this._space_list.set(this.model().resources || []),
                        ),
                    this._injector,
                ).destroy,
            } as any);
        }
        this._catering.setOptions({ zone: '' });
        this._space_list.set(this.model().resources || []);
        this._idle
            .idleFor((this._settings.get('app.idle_timeout') || 5) * 60 * 1000)
            .then(async () => {
                await openConfirmModal(
                    {
                        title: i18n('APP.WORKPLACE.MEETING_IDLE_TITLE'),
                        content: i18n('APP.WORKPLACE.MEETING_IDLE_MSG'),
                        icon: { content: 'update' },
                        confirm_text: i18n('COMMON.REFRESH'),
                    },
                    this._dialog,
                );
                this._state.newForm();
                location.reload();
            });
        this.timeout(
            'init_valid_assets',
            () => this._updateValidAssets(),
            1000,
        );
    }

    public focusInput() {
        this.timeout(
            'input-focus',
            () => {
                this._input_el().nativeElement.value = '';
                this._input_el()?.nativeElement?.focus();
            },
            300,
        );
    }

    public findAvailableTime() {
        const { attendees, organiser, date, duration } = this.model();
        const ref = this._dialog.open(FindAvailabilityModalComponent, {
            data: {
                users: attendees,
                host: organiser || currentUser(),
                date,
                duration,
            },
        });
        ref.afterClosed().subscribe((d) => {
            if (!d) return;
            this.model.update((m) => ({
                ...m,
                date: ref.componentInstance.date(),
                attendees: ref.componentInstance.users(),
                duration: ref.componentInstance.duration(),
            }));
        });
    }
}
