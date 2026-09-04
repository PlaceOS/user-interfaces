import {
    Component,
    computed,
    effect,
    inject,
    OnInit,
    signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormField } from '@angular/forms/signals';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BookingFormService } from '@placeos/bookings';
import {
    currentUser,
    OrganisationService,
    settingSignal,
    SettingsService,
    User,
} from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import {
    DateFieldComponent,
    DurationFieldComponent,
    HostSelectFieldComponent,
    TimeFieldComponent,
    UserSearchFieldComponent,
} from '@placeos/form-fields';
import { addHours, addMinutes } from 'date-fns';

type VisitorFormType = 'single' | 'group';

@Component({
    selector: 'visitor-flow-details',
    template: `
        <div class="w-full p-4">
            <!-- Mobile select dropdown -->
            @if (!is_edit()) {
                <div class="mb-4 flex w-full sm:hidden">
                    <mat-form-field
                        appearance="outline"
                        class="no-subscript w-full"
                    >
                        <mat-select
                            [ngModel]="active_form()"
                            (ngModelChange)="setActiveForm($event)"
                            [ngModelOptions]="{ standalone: true }"
                        >
                            <mat-select-trigger>
                                <div class="flex items-center space-x-2">
                                    <icon class="text-xl">{{
                                        form_type_config()[active_form()].icon
                                    }}</icon>
                                    <span>{{
                                        form_type_config()[active_form()].label
                                            | translate
                                    }}</span>
                                </div>
                            </mat-select-trigger>
                            <mat-option value="single">
                                <div class="flex items-center space-x-2">
                                    <icon class="text-xl">person</icon>
                                    <span>{{
                                        'BOOKINGS.VISITOR_SINGLE' | translate
                                    }}</span>
                                </div>
                            </mat-option>
                            <mat-option value="group">
                                <div class="flex items-center space-x-2">
                                    <icon class="text-xl">group</icon>
                                    <span>{{
                                        'BOOKINGS.VISITOR_MULTIPLE' | translate
                                    }}</span>
                                </div>
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                </div>
                <!-- Desktop button toggle -->
                <div
                    class="bg-base-200 hidden w-full items-center space-x-1 rounded-lg p-1 sm:flex"
                >
                    <button
                        btn
                        matRipple
                        class="border-base-300 hover:bg-base-300 flex-1 space-x-2 border"
                        [class.clear]="active_form() !== 'single'"
                        (click)="setActiveForm('single')"
                    >
                        <icon class="text-xl">person</icon>
                        <div>{{ 'BOOKINGS.VISITOR_SINGLE' | translate }}</div>
                    </button>
                    <button
                        btn
                        matRipple
                        class="border-base-300 hover:bg-base-300 flex-1 space-x-2 border"
                        [class.clear]="active_form() !== 'group'"
                        (click)="setActiveForm('group')"
                    >
                        <icon class="text-xl">group</icon>
                        <div>{{ 'BOOKINGS.VISITOR_MULTIPLE' | translate }}</div>
                    </button>
                </div>
            }
            <div class="mt-4">
                @if (buildings()?.length > 1) {
                    <div class="flex flex-col">
                        <label for="building">
                            {{ 'RESOURCE.BUILDING' | translate }}<span>*</span>
                        </label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                [ngModel]="selected_building_id()"
                                (ngModelChange)="setBuilding($event)"
                                [ngModelOptions]="{
                                    standalone: true,
                                }"
                                name="building"
                                placeholder="Select building"
                            >
                                @for (bld of buildings(); track bld) {
                                    <mat-option [value]="bld.id">
                                        {{ bld.display_name || bld.name }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                }
                <div class="relative flex flex-col">
                    <label for="date">
                        {{ 'FORM.DATE' | translate }}<span>*</span>
                    </label>
                    <a-date-field [formField]="form.date"></a-date-field>
                    @if (allow_all_day()) {
                        <mat-checkbox
                            [formField]="form.all_day"
                            class="absolute -top-2 right-2"
                        >
                            {{ 'COMMON.ALL_DAY' | translate }}
                        </mat-checkbox>
                    }
                </div>
                @if (!is_all_day()) {
                    <div
                        class="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2"
                    >
                        <div class="flex-1">
                            <label for="time">
                                {{ 'FORM.TIME_START' | translate
                                }}<span>*</span>
                            </label>
                            <a-time-field
                                name="time"
                                [ngModel]="model().date"
                                (ngModelChange)="
                                    model.update((m) => ({
                                        ...m,
                                        date: $event,
                                    }))
                                "
                                [ngModelOptions]="{ standalone: true }"
                                [disabled]="is_edit_in_progress()"
                                [range]="effective_bookable_hours()"
                                [min_duration]="effective_min_duration()"
                                [use_24hr]="use_24hr()"
                                [timezone]="timezone"
                            />
                        </div>
                        <div class="flex-1">
                            <label for="duration">
                                {{ 'FORM.DURATION' | translate }}<span>*</span>
                            </label>
                            <a-duration-field
                                [formField]="form.duration"
                                [time]="model().date"
                                [max]="max_duration()"
                                [min]="min_duration()"
                                [step]="duration_step()"
                                [custom_options]="custom_duration_options()"
                                [end_time]="effective_bookable_hours()?.end"
                                [use_24hr]="use_24hr()"
                                [timezone]="timezone"
                            />
                        </div>
                    </div>
                }
                @if (can_book_for_anyone()) {
                    <div class="flex w-full flex-col">
                        <label for="host">
                            {{ 'FORM.HOST' | translate }}<span>*</span>
                        </label>
                        <a-user-search-field
                            class="mb-4"
                            [formField]="form.user"
                        ></a-user-search-field>
                    </div>
                } @else if (can_book_for_others()) {
                    <div class="flex w-full flex-col">
                        <label for="host">
                            {{ 'FORM.HOST' | translate }}<span>*</span>
                        </label>
                        <host-select-field
                            [formField]="form.user"
                        ></host-select-field>
                    </div>
                }
                <div class="flex flex-col">
                    <label for="reason">{{
                        'BOOKINGS.VISITOR_REASON' | translate
                    }}</label>
                    <mat-form-field appearance="outline" class="w-full">
                        <input
                            matInput
                            [formField]="form.title"
                            [placeholder]="
                                'BOOKINGS.VISITOR_REASON_PLACEHOLDER'
                                    | translate
                            "
                        />
                    </mat-form-field>
                </div>
            </div>
        </div>
    `,
    styles: [``],
    imports: [
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        DateFieldComponent,
        DurationFieldComponent,
        TimeFieldComponent,
        FormsModule,
        FormField,
        TranslatePipe,
        IconComponent,
        UserSearchFieldComponent,
        HostSelectFieldComponent,
        MatCheckboxModule,
    ],
})
export class VisitorFlowDetailsComponent implements OnInit {
    private _booking_form = inject(BookingFormService);
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);

    private _options = this._booking_form.options;

    private _sync_group = effect(() => {
        const is_group = this._options()?.group === true;
        if (is_group && this.active_form() !== 'group') {
            this.active_form.set('group');
        }
    });

    public readonly active_form = signal<VisitorFormType>('single');
    public readonly form_type_config = signal({
        single: { icon: 'person', label: 'BOOKINGS.VISITOR_SINGLE' },
        group: { icon: 'group', label: 'BOOKINGS.VISITOR_MULTIPLE' },
    });

    public readonly is_edit = computed(() => !!this.model()?.id);
    public readonly selected_building_id = computed(() => {
        return this._resolveSelectedBuildingId(this.model()?.zones || []);
    });

    public readonly duration_step = computed(
        () =>
            settingSignal('visitors.duration_step')() ||
            settingSignal('bookings.duration_step', 15)(),
    );
    public readonly min_duration = computed(
        () =>
            settingSignal('visitors.min_duration')() ||
            settingSignal('bookings.min_duration', 30)(),
    );
    public readonly max_duration = computed(
        () =>
            settingSignal('visitors.max_duration')() ||
            settingSignal('bookings.max_duration', 180)(),
    );
    public readonly custom_duration_options = computed<number[]>(
        () =>
            settingSignal<number[]>('visitors.custom_duration_options')() ||
            settingSignal<number[]>('bookings.custom_duration_options', [])(),
    );
    public readonly effective_min_duration = computed(() =>
        Math.min(this.min_duration(), ...this.custom_duration_options()),
    );

    public readonly bookable_hours = settingSignal<
        { start: number; end: number } | undefined
    >('visitors.bookable_hours', undefined);

    private readonly _fallback_bookable_hours = settingSignal<
        { start: number; end: number } | undefined
    >('bookings.bookable_hours', undefined);

    public readonly effective_bookable_hours = computed(
        () => this.bookable_hours() ?? this._fallback_bookable_hours(),
    );

    public readonly allow_all_day = settingSignal(
        'visitors.allow_all_day',
        false,
    );
    public readonly is_all_day = computed(
        () => this.allow_all_day() && !!this.model()?.all_day,
    );
    public readonly is_edit_in_progress = computed(() => {
        if (!this.is_edit()) return false;
        const booking_date = Number(this.model()?.date || 0);
        if (!booking_date) return false;
        const duration = Number(this.model()?.duration || 0);
        const end_date = this.is_all_day()
            ? addHours(booking_date, 24).valueOf()
            : addMinutes(booking_date, duration).valueOf();
        return Date.now() >= booking_date && Date.now() < end_date;
    });

    public readonly can_book_for_others = computed(() => {
        return (
            settingSignal('visitors.can_book_for_others')() ??
            settingSignal('bookings.can_book_for_others')()
        );
    });

    public readonly can_book_for_anyone = computed(() => {
        return (
            settingSignal('visitors.can_book_for_anyone')() ??
            settingSignal('bookings.can_book_for_anyone')()
        );
    });

    public readonly use_24hr = settingSignal('use_24_hour_time', false);
    public readonly buildings = this._org.active_buildings;

    public get form() {
        return this._booking_form.form;
    }

    public get model() {
        return this._booking_form.model;
    }

    public get timezone() {
        return this._settings.get('app.bookings.use_building_timezone') ||
            this._settings.get('app.visitors.use_building_timezone')
            ? this._org.building.timezone
            : '';
    }

    public ngOnInit() {
        const value = this.model();
        if (value.all_day && !this.allow_all_day()) {
            this.model.update((m) => ({ ...m, all_day: false }));
        }
        const has_assets = Array.isArray(value.assets) && value.assets.length;
        const is_group =
            !!value.asset_id &&
            (value.asset_id === 'multiple@place.tech' || has_assets > 1);
        this.active_form.set(is_group ? 'group' : 'single');
        this._booking_form.setOptions({ group: is_group });
        const zones = this.model()?.zones || [];
        if (!this.model().id)
            this.model.update((m) => ({ ...m, title: 'Visit' }));
        if (!this.model()?.user_email) {
            this.model.update((m) => ({ ...m, user: currentUser() }));
        }
        if (!zones.length && this._org.building?.id) {
            const default_zones = [
                this._org.organisation?.id,
                this._org.region?.id,
                this._org.building.id,
            ].filter((_) => _);
            this.model.update((m) => ({ ...m, zones: default_zones }));
            return;
        }
        // Editing a booking from another building: match the active building to
        // it so saving doesn't tag the booking with the previously active one.
        const building = this._org.buildings.find(
            (bld) => bld.id === this.selected_building_id(),
        );
        if (building && building.id !== this._org.building?.id) {
            this._org.building = building;
        }
    }

    public setActiveForm(form: VisitorFormType) {
        if (this.is_edit() || this.active_form() === form) return;
        this.active_form.set(form);
        this._booking_form.setOptions({ group: form === 'group' });
        const value = this.model();

        if (form === 'single') {
            const [visitor] = (value.assets || []) as User[];
            const use_selected_visitor =
                !!visitor?.email &&
                (!value.asset_id || value.asset_id === 'multiple@place.tech');
            this.model.update((m) => ({
                ...m,
                user: currentUser(),
                assets: [],
                asset_id: use_selected_visitor
                    ? visitor.email
                    : value.asset_id === 'multiple@place.tech'
                      ? ''
                      : value.asset_id,
                asset_name: use_selected_visitor
                    ? visitor.name || visitor.email
                    : value.asset_name || '',
                company: use_selected_visitor
                    ? (visitor as any).company || visitor.organisation || ''
                    : value.company || '',
                phone: use_selected_visitor
                    ? visitor.phone || value.phone || ''
                    : value.phone || '',
            }));
        } else {
            const assets = [...(value.assets || [])];
            if (value.asset_id && value.asset_id !== 'multiple@place.tech') {
                assets.unshift(
                    new User({
                        name: value.asset_name || value.asset_id,
                        email: value.asset_id,
                        organisation: value.company || '',
                        phone: value.phone || '',
                    }),
                );
            }
            const unique_assets = assets.filter(
                (item, index, list) =>
                    !!item?.email &&
                    list.findIndex((_) => _.email === item.email) === index,
            );
            this.model.update((m) => ({
                ...m,
                user: currentUser(),
                asset_id: 'multiple@place.tech',
                assets: unique_assets,
            }));
        }
    }

    public setBuilding(building_id: string) {
        if (!building_id) {
            this.model.update((m) => ({ ...m, zones: [] }));
            return;
        }
        const building = this._org.find(building_id);
        // Saving merges the active building's zones into the booking, so the
        // active building has to move too or the booking keeps the old one.
        if (building && building.id !== this._org.building?.id) {
            this._org.building = building as any;
        }
        const zones = [
            this._org.organisation?.id,
            building?.parent_id,
            building_id,
        ].filter((_) => _);
        this.model.update((m) => ({ ...m, zones }));
    }

    private _resolveSelectedBuildingId(zone_list: string[]) {
        const level = this._org.levelWithID(zone_list);
        const building =
            this._org.buildings.find((bld) => zone_list.includes(bld.id)) ||
            this._org.buildings.find((bld) => level?.parent_id === bld.id);
        return building?.id || this._org.building?.id || zone_list[0] || '';
    }
}
