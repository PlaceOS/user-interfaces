import {
    Component,
    computed,
    inject,
    Injector,
    OnInit,
    signal,
} from '@angular/core';
import { FormField } from '@angular/forms/signals';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { BookingFormService } from '@placeos/bookings';
import {
    AsyncHandler,
    onFieldChange,
    settingSignal,
    SettingsService,
    User,
} from '@placeos/common';
import { TranslatePipe } from '@placeos/components';
import { UserListFieldComponent } from '@placeos/form-fields';
import {
    normaliseVisitorEmail,
    parseRecentVisitors,
    RecentVisitor,
    recentVisitorEntry,
} from './recent-visitors';

@Component({
    selector: 'visitor-flow-invites',
    template: `
        <div class="w-full px-4 pt-4">
            <div>
                @if (is_single()) {
                    <div
                        class="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2"
                    >
                        <div class="flex flex-1 flex-col">
                            <label for="visitor-name">
                                {{ 'BOOKINGS.VISITOR_NAME' | translate }}
                                <span>*</span>
                            </label>
                            <mat-form-field appearance="outline" class="w-full">
                                <input
                                    matInput
                                    [formField]="form.asset_name"
                                    [placeholder]="
                                        'BOOKINGS.VISITOR_NAME_PLACEHOLDER'
                                            | translate
                                    "
                                    (focus)="
                                        search_term.set(model().asset_name || '')
                                    "
                                    [matAutocomplete]="name_auto"
                                />
                            </mat-form-field>
                            <mat-autocomplete #name_auto="matAutocomplete">
                                @for (item of filtered_visitors(); track item) {
                                    <mat-option
                                        [value]="item.name"
                                        (click)="setVisitor(item)"
                                    >
                                        <div
                                            class="flex flex-col leading-tight"
                                        >
                                            <div>{{ item.name }}</div>
                                            <div class="text-xs opacity-60">
                                                {{ item.email }}
                                                {{
                                                    item.company
                                                        ? '| ' + item.company
                                                        : ''
                                                }}
                                            </div>
                                        </div>
                                    </mat-option>
                                }
                            </mat-autocomplete>
                        </div>
                        <div class="flex flex-1 flex-col">
                            <label for="visitor-email">
                                {{ 'BOOKINGS.VISITOR_EMAIL' | translate }}
                                <span>*</span>
                            </label>
                            <mat-form-field appearance="outline" class="w-full">
                                <input
                                    matInput
                                    type="email"
                                    [formField]="form.asset_id"
                                    [placeholder]="
                                        'BOOKINGS.VISITOR_EMAIL_PLACEHOLDER'
                                            | translate
                                    "
                                    (focus)="
                                        search_term.set(model().asset_id || '')
                                    "
                                    [matAutocomplete]="email_auto"
                                />
                                <mat-error>
                                    {{ 'FORM.EMAIL_REQUIRED' | translate }}
                                </mat-error>
                            </mat-form-field>
                            <mat-autocomplete #email_auto="matAutocomplete">
                                @for (item of filtered_visitors(); track item) {
                                    <mat-option
                                        [value]="item.email"
                                        (click)="setVisitor(item)"
                                    >
                                        <div
                                            class="flex flex-col leading-tight"
                                        >
                                            <div>{{ item.name }}</div>
                                            <div class="text-xs opacity-60">
                                                {{ item.email }}
                                                {{
                                                    item.company
                                                        ? '| ' + item.company
                                                        : ''
                                                }}
                                            </div>
                                        </div>
                                    </mat-option>
                                }
                            </mat-autocomplete>
                        </div>
                    </div>
                    <div
                        class="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2"
                    >
                        <div class="flex flex-1 flex-col">
                            <label for="company">{{
                                'COMMON.ORGANISATION' | translate
                            }}</label>
                            <mat-form-field appearance="outline" class="w-full">
                                <input
                                    matInput
                                    [formField]="form.company"
                                    [placeholder]="
                                        'COMMON.ORGANISATION' | translate
                                    "
                                />
                            </mat-form-field>
                        </div>
                        <div class="flex flex-1 flex-col">
                            <label for="phone">{{
                                'BOOKINGS.VISITOR_PHONE' | translate
                            }}</label>
                            <mat-form-field appearance="outline" class="w-full">
                                <input
                                    matInput
                                    type="tel"
                                    [formField]="form.phone"
                                    [placeholder]="
                                        'BOOKINGS.VISITOR_PHONE_PLACEHOLDER'
                                            | translate
                                    "
                                />
                            </mat-form-field>
                        </div>
                    </div>
                } @else {
                    <div class="flex flex-col">
                        <label for="visitor-name">
                            {{ 'BOOKINGS.VISITOR_LIST' | translate }}
                            <span>*</span>
                        </label>
                        <a-user-list-field
                            [formField]="form.assets"
                            [guests_only]="true"
                        ></a-user-list-field>
                    </div>
                }
                @if (allow_pass_number()) {
                    <div class="flex flex-col">
                        <label for="pass">{{
                            'BOOKINGS.VISITOR_PASS' | translate
                        }}</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                [formField]="form.pass_number"
                                [placeholder]="
                                    'BOOKINGS.VISITOR_PASS_PLACEHOLDER'
                                        | translate
                                "
                            />
                        </mat-form-field>
                    </div>
                }
                @if (allow_international() && invited_visitors().length) {
                    <div class="international-visitors flex flex-col">
                        <label>{{
                            'BOOKINGS.INTERNATIONAL_VISITORS' | translate
                        }}</label>
                        <div class="flex flex-wrap gap-x-4 gap-y-2">
                            @for (
                                visitor of invited_visitors();
                                track visitor.key
                            ) {
                                <div class="flex items-center space-x-2">
                                    <span class="visitor-name">{{
                                        visitor.name
                                    }}</span>
                                    @if (is_single()) {
                                        <mat-checkbox
                                            [formField]="form.international"
                                            [attr.aria-label]="visitor.name"
                                        ></mat-checkbox>
                                    } @else {
                                        <mat-checkbox
                                            [checked]="visitor.international"
                                            (change)="
                                                setInternational(
                                                    visitor.key,
                                                    $event.checked
                                                )
                                            "
                                            [attr.aria-label]="visitor.name"
                                        ></mat-checkbox>
                                    }
                                </div>
                            }
                        </div>
                    </div>
                }
                @if (
                    allow_visitor_internal_or_external() &&
                    invited_visitors().length
                ) {
                    <div class="visitor-internal-or-external flex flex-col">
                        <label>{{
                            'BOOKINGS.VISITOR_INTERNAL_OR_EXTERNAL' | translate
                        }}</label>
                        <div class="flex flex-col gap-y-2">
                            @for (
                                visitor of invited_visitors();
                                track visitor.key
                            ) {
                                <div
                                    class="flex flex-wrap items-center gap-x-4"
                                >
                                    <span class="visitor-name">{{
                                        visitor.name
                                    }}</span>
                                    <mat-radio-group
                                        [value]="
                                            visitor.visitor_internal_or_external
                                        "
                                        (change)="
                                            setVisitorInternalOrExternal(
                                                visitor.key,
                                                $event.value
                                            )
                                        "
                                        [attr.aria-label]="visitor.name"
                                    >
                                        <mat-radio-button value="internal">
                                            {{
                                                'COMMON.TYPE_INTERNAL'
                                                    | translate
                                            }}
                                        </mat-radio-button>
                                        <mat-radio-button value="external">
                                            {{
                                                'COMMON.TYPE_EXTERNAL'
                                                    | translate
                                            }}
                                        </mat-radio-button>
                                    </mat-radio-group>
                                </div>
                            }
                        </div>
                    </div>
                }
            </div>
        </div>
    `,
    styles: [``],
    imports: [
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatAutocompleteModule,
        MatCheckboxModule,
        MatRadioModule,
        MatRippleModule,
        UserListFieldComponent,
        TranslatePipe,
        FormField,
    ],
})
export class VisitorFlowInvitesComponent
    extends AsyncHandler
    implements OnInit
{
    private _booking_form = inject(BookingFormService);
    private _settings = inject(SettingsService);
    private _injector = inject(Injector);

    public readonly search_term = signal<string>('');
    public readonly visitors = signal<RecentVisitor[]>([]);
    public readonly options = this._booking_form.options;

    public readonly is_single = computed(() => {
        // The toggle controls the mode - check if group option is set
        const is_group_mode = this.options()?.group === true;
        // Return true if NOT in group mode (i.e., in single mode)
        return !is_group_mode;
    });

    public readonly filtered_visitors = computed(() => {
        const s = this.search_term().toLowerCase();
        return this.visitors().filter(
            ({ email, name, company }) =>
                email.toLowerCase().includes(s) ||
                name.toLowerCase().includes(s) ||
                company.toLowerCase().includes(s),
        );
    });

    public readonly allow_pass_number = settingSignal(
        'visitors.allow_pass_number',
        false,
    );

    public readonly allow_international = settingSignal(
        'visitors.allow_international',
        false,
    );

    public readonly allow_visitor_internal_or_external = settingSignal(
        'visitors.allow_visitor_internal_or_external',
        false,
    );

    /** Every invited visitor, ordered by first name, with their visitor flags. */
    public readonly invited_visitors = computed(() => {
        const model = this.model();
        const visitors = this.is_single()
            ? [
                  {
                      key: model.asset_id || model.asset_name || 'visitor',
                      name: model.asset_name || model.asset_id || '',
                      international: !!model.international,
                      visitor_internal_or_external:
                          model.visitor_internal_or_external === 'external'
                              ? 'external'
                              : 'internal',
                  },
              ]
            : (model.assets || []).map((item) => ({
                  key: item.email || item.id,
                  name: item.name || item.email || '',
                  international: !!item.extension_data?.international,
                  visitor_internal_or_external:
                      item.extension_data?.visitor_internal_or_external ===
                      'external'
                          ? 'external'
                          : 'internal',
              }));
        return visitors
            .filter((visitor) => !!`${visitor.name}`.trim())
            .sort((a, b) => a.name.localeCompare(b.name));
    });

    public readonly multiple = settingSignal(
        'bookings.multiple_visitors',
        false,
    );

    public get form() {
        return this._booking_form.form;
    }

    public get model() {
        return this._booking_form.model;
    }

    public ngOnInit() {
        // The booking form schema already declares the required + email
        // validators for `asset_id` on visitor bookings, so no manual
        // validator wiring is needed here.

        // Load previous visitors from settings
        this.visitors.set(
            parseRecentVisitors(
                this._settings.get('visitor-invitees'),
            ).reverse(),
        );

        // Initialize search term
        this.search_term.set('');

        // Track form changes for autocomplete
        const email_handle = onFieldChange(
            this.model,
            (m) => m.asset_id,
            (_) => this.search_term.set(_ || ''),
            this._injector,
        );
        this.subscription('email', () => email_handle.destroy());
        const name_handle = onFieldChange(
            this.model,
            (m) => m.asset_name,
            (_) => this.search_term.set(_ || ''),
            this._injector,
        );
        this.subscription('name', () => name_handle.destroy());

        if (
            !this.model().id &&
            !this.model().title &&
            !this.model().description
        ) {
            this.model.update((m) => ({
                ...m,
                title: 'Visit',
                description: 'Visit',
            }));
        }

        // Initialize based on current mode
        const is_group = this.options()?.group === true;
        if (is_group && !this.model().asset_id) {
            this.model.update((m) => ({
                ...m,
                asset_id: 'multiple@place.tech',
            }));
        }
    }

    public setVisitor(item: Partial<RecentVisitor>) {
        const asset_id = normaliseVisitorEmail(item?.email);
        if (!asset_id) return;
        const visitor: Partial<RecentVisitor> = {
            ...item,
            email: asset_id,
            name: item.name || asset_id,
            company: item.company || '',
        };

        this.model.update((m) => ({
            ...m,
            asset_id,
            asset_name: visitor.name,
            company: visitor.company,
            phone: item.phone,
            international: !!item.international,
            visitor_internal_or_external:
                item.visitor_internal_or_external === 'external'
                    ? 'external'
                    : 'internal',
        }));

        // Save to visitor history
        const old_visitors = parseRecentVisitors(
            this._settings.get('visitor-invitees'),
        )
            .filter((_) => _.email !== asset_id)
            .reverse();
        this._settings.saveUserSetting(
            'visitor-invitees',
            [...old_visitors, visitor].map(recentVisitorEntry),
        );
    }

    /** Store the internal/external type against a visitor. A single
     * visitor updates the form value, a group member its own record. */
    public setVisitorInternalOrExternal(
        key: string,
        visitor_internal_or_external: string,
    ) {
        const type =
            visitor_internal_or_external === 'external'
                ? 'external'
                : 'internal';
        if (this.is_single()) {
            this.model.update((m) => ({
                ...m,
                visitor_internal_or_external: type,
            }));
            return;
        }
        this.model.update((m) => ({
            ...m,
            assets: (m.assets || []).map((item) => {
                const item_key = item.email || item.id;
                if (item_key !== key) return item;
                return new User({
                    ...item,
                    extension_data: {
                        ...(item.extension_data || {}),
                        visitor_internal_or_external: type,
                    },
                });
            }),
        }));
    }

    /** Store the international flag against a group member. A single
     * visitor binds the checkbox to `form.international` instead. */
    public setInternational(key: string, international: boolean) {
        this.model.update((m) => ({
            ...m,
            assets: (m.assets || []).map((item) => {
                const item_key = item.email || item.id;
                if (item_key !== key) return item;
                return new User({
                    ...item,
                    extension_data: {
                        ...(item.extension_data || {}),
                        international,
                    },
                });
            }),
        }));
    }
}
