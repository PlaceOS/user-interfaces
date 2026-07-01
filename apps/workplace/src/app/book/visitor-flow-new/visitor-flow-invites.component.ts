import {
    Component,
    computed,
    inject,
    Injector,
    OnInit,
    signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormField } from '@angular/forms/signals';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
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
                                                    item.organisation
                                                        ? '| ' +
                                                          item.organisation
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
                                                    item.organisation
                                                        ? '| ' +
                                                          item.organisation
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
            </div>
        </div>
    `,
    styles: [``],
    imports: [
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatAutocompleteModule,
        MatRippleModule,
        UserListFieldComponent,
        TranslatePipe,
        FormField,
        FormsModule,
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
    public readonly visitors = signal<User[]>([]);
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
            ({ email, name, company }: any) =>
                email?.toLowerCase()?.includes(s) ||
                name?.toLowerCase()?.includes(s) ||
                company?.toLowerCase()?.includes(s),
        );
    });

    public readonly allow_pass_number = settingSignal(
        'visitors.allow_pass_number',
        false,
    );

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
        const visitors = this._settings.get('visitor-invitees') || [];
        this.visitors.set(this.parseRecentVisitors(visitors));

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

    public setVisitor(item: any) {
        const asset_id = this.normalizeEmail(item?.asset_id || item?.email);
        const asset_name = item?.asset_name || item?.name || asset_id;
        const company = item?.company || item?.organisation || '';
        if (!asset_id) return;

        this.model.update((m) => ({
            ...m,
            asset_id,
            asset_name,
            company,
            phone: item.phone,
        }));

        // Save to visitor history
        const visitor_details = `${asset_id}|${asset_name}|${company}|${
            item.phone || ''
        }`;
        const old_visitors = this._settings.get('visitor-invitees') || [];
        const old_visitor_records = this.parseRecentVisitors(old_visitors)
            .filter((visitor) => visitor.email !== asset_id)
            .map((visitor) => {
                return `${visitor.email}|${visitor.name || ''}|${
                    (visitor as any).company || ''
                }|${visitor.phone || ''}`;
            });
        this._settings.saveUserSetting('visitor-invitees', [
            ...old_visitor_records,
            visitor_details,
        ]);
    }

    private toSafeValue(value: any): string {
        if (!value || value === 'null' || value === 'undefined') return '';
        return `${value}`.trim();
    }

    private normalizeEmail(value: any): string {
        const email = this.toSafeValue(value)
            .replace(/^mailto:/i, '')
            .replace(/[<>"']/g, '');
        return email.toLowerCase();
    }

    private parseRecentVisitors(visitor_history: string[]): User[] {
        const unique_visitors = new Map<string, User>();
        for (let index = visitor_history.length - 1; index >= 0; index--) {
            const item = visitor_history[index];
            if (typeof item !== 'string') continue;
            const [email, name, company, phone] = item.split('|');
            const parsed_visitor = {
                email: this.normalizeEmail(email),
                name: this.toSafeValue(name),
                company: this.toSafeValue(company),
                phone: this.toSafeValue(phone),
            };
            const email_key = parsed_visitor.email;
            if (!email_key || unique_visitors.has(email_key)) continue;
            unique_visitors.set(email_key, parsed_visitor as any);
        }
        return [...unique_visitors.values()].reverse();
    }
}
