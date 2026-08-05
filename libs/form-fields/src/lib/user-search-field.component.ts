/* eslint-disable @typescript-eslint/member-ordering */
import { CommonModule } from '@angular/common';
import {
    Component,
    computed,
    debounced,
    ElementRef,
    forwardRef,
    input,
    model,
    resource,
    signal,
    viewChild,
} from '@angular/core';
import {
    ControlValueAccessor,
    FormsModule,
    NG_VALUE_ACCESSOR,
} from '@angular/forms';
import {
    MatAutocompleteModule,
    MatAutocompleteTrigger,
} from '@angular/material/autocomplete';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AsyncHandler, EMPTY_USER, settingSignal, User } from '@placeos/common';
import { authority, queryUsers, showUser } from '@placeos/ts-client';

import {
    UserAvatarComponent,
    VirtualKeyboardComponent,
} from '@placeos/components';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { searchGuests } from 'libs/users/src/lib/guests.fn';
import { searchStaff } from 'libs/users/src/lib/staff.fn';

@Component({
    selector: 'a-user-search-field',
    template: `
        <div class="flex w-full space-x-2">
            <mat-form-field
                appearance="outline"
                class="w-1/2 flex-1"
                [class.no-subscript]="!error() && !selected_user()"
            >
                <div
                    matPrefix
                    class="mr-2 -ml-1 flex h-8 w-8 items-center justify-center"
                >
                    @if (selected_user(); as user) {
                        <a-user-avatar [user]="user" />
                    } @else {
                        <icon
                            class="block flex w-6 items-center justify-center text-2xl"
                            >search</icon
                        >
                    }
                </div>
                <input
                    #input
                    keyboard
                    matInput
                    [attr.autocomplete]="autocomplete()"
                    [ngModel]="search_term()"
                    (ngModelChange)="search_term.set($event)"
                    [disabled]="disabled()"
                    [matAutocomplete]="auto"
                    [placeholder]="placeholder() | translate"
                    (focus)="selectInputText()"
                    (blur)="resetTerm()"
                />
                @if (loading()) {
                    <mat-spinner matSuffix diameter="24"></mat-spinner>
                }
                <mat-autocomplete
                    #auto="matAutocomplete"
                    [displayWith]="displayFn"
                    (optionSelected)="setValue($event.option.value)"
                >
                    @let user_list = search_results();
                    @let term = search_term();
                    @for (user of user_list; track $index) {
                        <mat-option [value]="user">
                            <div class="flex items-center space-x-2">
                                <a-user-avatar class="-ml-2" [user]="user" />
                                <div class="leading-tight">
                                    <div>{{ user.name }}</div>
                                    <div class="text-xs opacity-30">
                                        {{ user.email }}
                                    </div>
                                </div>
                            </div>
                        </mat-option>
                    }
                    @if (term && validate() && validate()(term)) {
                        <mat-option class="pointer-events-none relative">
                            <div
                                class="pointer-events-auto absolute inset-0 px-4"
                                (mousedown)="stopEvent($event)"
                                (touchstart)="stopEvent($event)"
                                (click)="
                                    setExternalValue(term); stopEvent($event)
                                "
                            >
                                <div class="pointer-events-none">
                                    {{
                                        'FORM.USER_ADD_EXTERNAL'
                                            | translate: { name: term }
                                    }}
                                </div>
                            </div>
                        </mat-option>
                    }
                    @if (
                        term &&
                        allow_externals() &&
                        isValidEmail(term) &&
                        !(validate() && validate()(term))
                    ) {
                        <mat-option class="pointer-events-none relative">
                            <div
                                class="pointer-events-auto absolute inset-0 flex items-center px-4"
                                (mousedown)="stopEvent($event)"
                                (touchstart)="stopEvent($event)"
                                (click)="
                                    setValueFromEmail(term); stopEvent($event)
                                "
                            >
                                {{
                                    'FORM.USER_SET_EXTERNAL'
                                        | translate: { name: term }
                                }}
                            </div>
                        </mat-option>
                    }
                    @if (
                        !user_list?.length &&
                        (search_term() || error()) &&
                        !disable_search()
                    ) {
                        <mat-option
                            [disabled]="!empty_fn()"
                            (click)="empty_fn()()"
                        >
                            {{ (term ? 'FORM.USER_EMPTY' : '') | translate }}
                            {{ error() }}
                        </mat-option>
                    }
                </mat-autocomplete>
                <mat-error>{{ error() }}</mat-error>
            </mat-form-field>
            @if (clear()) {
                <button
                    icon
                    matRipple
                    class="border-secondary text-secondary h-12 w-12 rounded-sm border"
                    (click)="clearUser()"
                >
                    <icon>person_cancel</icon>
                </button>
            }
        </div>
    `,
    styles: [
        `
            :host {
                display: block;
            }
            icon {
                top: 0.15em;
                left: -0.15em;
            }
        `,
    ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => UserSearchFieldComponent),
            multi: true,
        },
    ],
    imports: [
        CommonModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatAutocompleteModule,
        MatRippleModule,
        IconComponent,
        TranslatePipe,
        UserAvatarComponent,
        VirtualKeyboardComponent,
    ],
})
export class UserSearchFieldComponent
    extends AsyncHandler
    implements ControlValueAccessor
{
    /** Native browser autocomplete mode for the search input. */
    public readonly autocomplete = input<string>();
    private use_basic_search = settingSignal('basic_user_search', true);

    public readonly search_term = signal<string>('');
    public readonly loading = computed(() => this._search.isLoading());
    public readonly user = signal<User | null>(null);
    public readonly selected_user = computed<User | null>(() => {
        const term = this.search_term() as string | User;
        return term &&
            typeof term !== 'string' &&
            term.email !== EMPTY_USER.email
            ? term
            : null;
    });

    /** Whether form field is disabled */
    public readonly disabled = model<boolean>(undefined);
    /** Placeholder text to display */
    public readonly placeholder = input<string>('FORM.USER_SEARCH');
    /** Limit available options to these */
    public readonly options = input<User[]>(undefined);
    /** Whether guests should also show when searching for users */
    public readonly guests = input<boolean>(undefined);
    /** Whether only guests should show when searching for users */
    public readonly guests_only = input<boolean>(false);
    /** Whether directory search should be disabled */
    public readonly disable_search = input<boolean>(false);
    /** Whether to show clear button */
    public readonly clear = input<boolean>(false);
    /** Message to display when no user matches have been found */
    public readonly error = input('');
    /** Function to validate the search string */
    public readonly validate = input<(s: string) => boolean>(undefined);
    /** Function to call when empty list option is clicked */
    public readonly empty_fn = input<() => void>(undefined);
    /** Whether to allow selecting an external user from a typed email address */
    public readonly allow_externals = input<boolean>(false);
    /** Function for filtering the results of the user list */
    public readonly filter = input<(_: any, s?: string) => boolean>(undefined);
    /** Function for querying the user list */
    public readonly query_fn = input<(_: string) => Promise<User[]>>(
        async (q) => {
            const guest_query = () => searchGuests(q).catch(() => [] as User[]);
            if (this.guests_only()) return guest_query();
            const staff = this.use_basic_search()
                ? await queryUsers({
                      q,
                      authority_id: authority()?.id,
                      fields: ['id', 'name', 'email'].join(','),
                  })
                      .then((_) => _.data.map((u) => new User(u)))
                      .catch(() => [] as User[])
                : await searchStaff(q).catch(() => [] as User[]);
            if (!this.guests()) return staff;
            return [...staff, ...(await guest_query())];
        },
    );

    private readonly _debounced_term = debounced(this.search_term, 300);
    private readonly _search = resource({
        params: () => ({ term: this._debounced_term.value() }),
        loader: async ({ params: { term } }): Promise<User[]> => {
            if (term && typeof term !== 'string') {
                const user = term as User;
                return user.email === EMPTY_USER.email ? [] : [user];
            }
            if (term === this.user()?.name) return [this.user()];
            if (this.disable_search()) return [];
            const s = `${term || ''}`.toLowerCase();
            if (this.options()?.length) {
                return this.options().filter(
                    (_) =>
                        _.email !== EMPTY_USER.email &&
                        (_.name.toLowerCase().includes(s) ||
                            _.email.toLowerCase().includes(s)),
                );
            }
            if (s.length <= 2) return [];
            const list = await this.query_fn()(s).catch(() => [] as User[]);
            return list
                .filter((_) => !!_ && _.email !== EMPTY_USER.email)
                .sort((a, b) =>
                    (a.name?.toLowerCase() || '').localeCompare(
                        b.name?.toLowerCase(),
                    ),
                );
        },
    });
    public readonly search_results = computed(() => this._search.value() ?? []);

    private _onChange: (_: User) => void;
    private _onTouch: (_: User) => void;
    public readonly registerOnChange = (fn) => (this._onChange = fn);
    public readonly registerOnTouched = (fn) => (this._onTouch = fn);
    public readonly setDisabledState = (s) => this.disabled.set(s);

    private readonly _input_el = viewChild('input', { read: ElementRef });
    private readonly _autocomplete_trigger = viewChild(MatAutocompleteTrigger);

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    public setValue(new_value: User | string, email?: string): void {
        const value =
            typeof new_value === 'string'
                ? new User({ name: new_value, email })
                : new_value;
        this._onChange ? this._onChange(value) : null;
        this._onTouch ? this._onTouch(value) : null;
        this.user.set(value);
        this.search_term.set(value as any);
        if (
            typeof new_value !== 'string' &&
            !this.use_basic_search() &&
            (value?.id || value?.email)
        ) {
            showUser(value.email || value.id)
                .then((details) => {
                    if (!details) return;
                    const updated = new User({
                        ...value,
                        ...new User(details),
                    });
                    this._onChange ? this._onChange(updated) : null;
                    this.user.set(updated);
                    this.search_term.set(updated as any);
                })
                .catch(() => value);
        }
    }

    public setExternalValue(name: string): void {
        this.setValue(name);
        this.dismissAutocomplete();
    }

    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: User) {
        this.user.set(value);
        this.resetTerm();
    }

    public displayFn(user: User): string {
        return user && user.email !== EMPTY_USER.email && user.name
            ? user.name
            : '';
    }

    public stopEvent(event: Event) {
        event.stopPropagation();
        event.preventDefault();
    }

    /** Check if a string is a valid email address */
    public isValidEmail(value: string): boolean {
        const re =
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(value);
    }

    /**
     * Set the value from a typed email address
     * @param email Email address to create a user from
     */
    public setValueFromEmail(email: string): void {
        const name = email.split('@')[0];
        this.setValue(name, email);
        this.dismissAutocomplete();
    }

    public clearUser() {
        this.user.set(null);
        this._onChange ? this._onChange(null) : null;
        this._onTouch ? this._onTouch(null) : null;
        this.resetTerm();
    }

    public blurInput() {
        this._input_el()?.nativeElement?.blur();
    }

    public selectInputText() {
        setTimeout(() => this._input_el()?.nativeElement?.select());
    }

    public dismissAutocomplete() {
        setTimeout(() => {
            this._autocomplete_trigger()?.closePanel();
            this.blurInput();
        });
    }

    public resetTerm() {
        this.search_term.set(this.user() as any);
        const input = this._input_el()?.nativeElement;
        if (input) input.value = this.displayFn(this.user());
    }
}
