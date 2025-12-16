import { Component, computed, effect, inject, OnInit, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { BookingFormService } from '@placeos/bookings';
import {
    AsyncHandler,
    settingSignal,
    SettingsService,
    User,
} from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { UserListFieldComponent } from '@placeos/form-fields';

@Component({
    selector: 'visitor-flow-invites',
    template: `
        <div class="w-full px-4 pt-4">
            <div [formGroup]="form">
                @if (is_single()) {
                    <div
                        class="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0"
                    >
                        <div class="flex flex-1 flex-col">
                            <label for="visitor-name">
                                {{ 'BOOKINGS.VISITOR_NAME' | translate }}
                                <span>*</span>
                            </label>
                            <mat-form-field appearance="outline" class="w-full">
                                <input
                                    matInput
                                    name="visitor-name"
                                    formControlName="asset_name"
                                    [placeholder]="
                                        'BOOKINGS.VISITOR_NAME_PLACEHOLDER'
                                            | translate
                                    "
                                    (focus)="search_term.set(form.value.asset_name)"
                                    [matAutocomplete]="name_auto"
                                />
                            </mat-form-field>
                            <mat-autocomplete #name_auto="matAutocomplete">
                                @for (item of filtered_visitors(); track item) {
                                    <mat-option
                                        [value]="item.name"
                                        (click)="setVisitor(item)"
                                    >
                                        <div class="flex flex-col leading-tight">
                                            <div>{{ item.name }}</div>
                                            <div class="text-xs opacity-60">
                                                {{ item.email }}
                                                {{
                                                    item.organisation
                                                        ? '| ' + item.organisation
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
                                    name="visitor-email"
                                    type="email"
                                    formControlName="asset_id"
                                    [placeholder]="
                                        'BOOKINGS.VISITOR_EMAIL_PLACEHOLDER'
                                            | translate
                                    "
                                    (focus)="search_term.set(form.value.asset_id)"
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
                                        <div class="flex flex-col leading-tight">
                                            <div>{{ item.name }}</div>
                                            <div class="text-xs opacity-60">
                                                {{ item.email }}
                                                {{
                                                    item.organisation
                                                        ? '| ' + item.organisation
                                                        : ''
                                                }}
                                            </div>
                                        </div>
                                    </mat-option>
                                }
                            </mat-autocomplete>
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <label for="company">{{
                            'BOOKINGS.VISITOR_COMPANY' | translate
                        }}</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                name="company"
                                formControlName="company"
                                [placeholder]="
                                    'BOOKINGS.VISITOR_COMPANY' | translate
                                "
                            />
                        </mat-form-field>
                    </div>
                } @else {
                    <div class="flex flex-col" [formGroup]="form">
                        <label for="visitor-name">
                            {{ 'BOOKINGS.VISITOR_LIST' | translate }}
                            <span>*</span>
                        </label>
                        <a-user-list-field
                            formControlName="assets"
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
                                name="pass"
                                matInput
                                formControlName="pass_number"
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
        ReactiveFormsModule,
        FormsModule,
    ],
})
export class VisitorFlowInvitesComponent
    extends AsyncHandler
    implements OnInit
{
    private _booking_form = inject(BookingFormService);
    private _settings = inject(SettingsService);

    public readonly search_term = signal<string>('');
    public readonly visitors = signal<User[]>([]);
    public readonly options = toSignal(this._booking_form.options, {
        initialValue: { type: 'visitor', group: false }
    });

    public readonly is_single = computed(() => {
        // The toggle controls the mode - check if group option is set
        const is_group_mode = this.options()?.group === true;
        // Return true if NOT in group mode (i.e., in single mode)
        return !is_group_mode;
    });

    constructor() {
        super();
        // Effect to update form when mode changes
        effect(() => {
            const is_group = this.options()?.group === true;
            // Only update if form exists
            if (this.form) {
                if (is_group) {
                    // Group mode: set placeholder for multiple visitors
                    this.form.patchValue({
                        asset_id: 'multiple@place.tech',
                        asset_name: '',
                        company: ''
                    }, { emitEvent: false });
                } else {
                    // Single mode: clear group fields
                    this.form.patchValue({
                        assets: [],
                        asset_id: '',
                        asset_name: ''
                    }, { emitEvent: false });
                }
            }
        });
    }

    public readonly filtered_visitors = computed(() => {
        const s = this.search_term().toLowerCase();
        return this.visitors().filter(
            ({ email, name, company }: any) =>
                email?.toLowerCase()?.includes(s) ||
                name?.toLowerCase()?.includes(s) ||
                company?.toLowerCase()?.includes(s),
        );
    });

    public readonly form_value = toSignal(this.form.valueChanges, {
        initialValue: this.form.value,
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

    public ngOnInit() {
        // Set email validator
        this.form
            .get('asset_id')
            ?.setValidators([Validators.required, Validators.email]);

        // Load previous visitors from settings
        const visitors = this._settings.get('visitor-invitees') || [];
        this.visitors.update((list) => {
            for (const item of visitors) {
                const [email, name, company] = item.split('|');
                list.push({ email, name, company } as any);
            }
            return list;
        });

        // Initialize search term
        this.search_term.set('');

        // Subscribe to form changes for autocomplete
        this.subscription(
            'email',
            this.form
                .get('asset_id')
                ?.valueChanges.subscribe((_) => this.search_term.set(_ || '')),
        );
        this.subscription(
            'name',
            this.form
                .get('asset_name')
                ?.valueChanges.subscribe((_) => this.search_term.set(_ || '')),
        );

        // Set default title
        this.form.patchValue({ title: 'Visit' });

        // Initialize based on current mode
        const is_group = this.options()?.group === true;
        if (is_group) {
            this.form.patchValue({ asset_id: 'multiple@place.tech' });
        }
    }

    public setVisitor(item: any) {
        this.form.patchValue({
            asset_id: item.email,
            asset_name: item.name,
            company: item.company,
            phone: item.phone,
        });

        // Save to visitor history
        const { asset_id, asset_name, company } = item;
        const visitor_details = `${asset_id}|${asset_name}|${company}`;
        const old_visitors = this._settings.get('visitor-invitees') || [];
        this._settings.saveUserSetting('visitor-invitees', [
            ...old_visitors.filter((_: string) => !_.includes(asset_id)),
            visitor_details,
        ]);
    }
}
