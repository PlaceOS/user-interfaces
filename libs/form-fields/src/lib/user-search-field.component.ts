/* eslint-disable @typescript-eslint/member-ordering */
import {
    Component,
    ElementRef,
    forwardRef,
    inject,
    Input,
    OnInit,
    signal,
    viewChild,
} from '@angular/core';
import {
    ControlValueAccessor,
    FormsModule,
    NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { authority, queryUsers } from '@placeos/ts-client';
import { forkJoin, Observable, of, Subject } from 'rxjs';
import {
    catchError,
    debounceTime,
    distinctUntilChanged,
    map,
    switchMap,
} from 'rxjs/operators';

import { AsyncHandler, flatten, SettingsService } from '@placeos/common';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { searchGuests } from 'libs/users/src/lib/guests.fn';
import { searchStaff } from 'libs/users/src/lib/staff.fn';
import { User } from 'libs/users/src/lib/user.class';

@Component({
    selector: 'a-user-search-field',
    template: `
        <mat-form-field appearance="outline" class="no-subscript w-full">
            <input
                #input
                matInput
                keyboard
                name="user-search"
                [ngModel]="search_str()"
                (ngModelChange)="search$.next($event); search_str.set($event)"
                [disabled]="disabled"
                [placeholder]="placeholder || ('FORM.USER_SEARCH' | translate)"
                [matAutocomplete]="auto"
                (keyup.enter)="
                    validate && validate(search_str())
                        ? setValue(search_str())
                        : ''
                "
                (blur)="resetSearchString()"
                (focus)="cancelReset()"
            />
            <icon matPrefix class="relative text-2xl">search</icon>
            @if (loading()) {
                <mat-spinner matSuffix diameter="16" />
            }
        </mat-form-field>
        <mat-autocomplete
            #auto="matAutocomplete"
            (optionSelected)="setValue($event.option.value)"
        >
            @for (option of user_list; track option) {
                <mat-option (click)="setValue(option); blurInput()">
                    <div class="leading-tight">{{ option.name }}</div>
                    <div class="w-full text-xs opacity-60">
                        {{ option.email }}
                        @if (
                            option.username && option.username !== option.email
                        ) {
                            <span>
                                (<span class="truncate">{{
                                    option.username
                                }}</span
                                >)
                            </span>
                        }
                    </div>
                </mat-option>
            }
            @if (search_str && validate && validate(search_str())) {
                <mat-option class="pointer-events-none relative">
                    <div
                        class="pointer-events-auto absolute inset-0 px-4"
                        (mousedown)="
                            $event.stopPropagation(); $event.preventDefault()
                        "
                        (touchstart)="
                            $event.stopPropagation(); $event.preventDefault()
                        "
                        (click)="
                            setValue(search_str);
                            $event.stopPropagation();
                            $event.preventDefault()
                        "
                    >
                        <div class="pointer-events-none">
                            {{
                                'FORM.USER_ADD_EXTERNAL'
                                    | translate: { name: search_str }
                            }}
                        </div>
                    </div>
                </mat-option>
            }
            @if (!user_list?.length && (search_str || error)) {
                <mat-option [disabled]="!empty_fn" (click)="empty_fn()">
                    {{ (search_str ? 'FORM.USER_EMPTY' : '') | translate }}
                    {{ error }}
                </mat-option>
            }
        </mat-autocomplete>
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
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatAutocompleteModule,
        FormsModule,
        IconComponent,
        TranslatePipe,
    ],
})
export class UserSearchFieldComponent
    extends AsyncHandler
    implements OnInit, ControlValueAccessor
{
    private _settings = inject(SettingsService);

    /** Whether form field is disabled */
    @Input() public disabled: boolean;
    /** Placeholder text to display */
    @Input() public placeholder: string;
    /** Limit available options to these */
    @Input() public options: User[];
    /** Whether guests should also show when searching for users */
    @Input() public guests: boolean;
    /** Message to display when no user matches have been found */
    @Input() public error = '';
    /** Function to validate the search string */
    @Input() public validate: (s: string) => boolean;
    /** Function to call when empty list option is clicked */
    @Input() public empty_fn: () => void;
    /** Function for filtering the results of the user list */
    @Input() public filter: (_: any, s?: string) => boolean;

    @Input() public query_fn: (_: string) => Observable<User[]> = (q) =>
        this._settings.get('app.basic_user_search')
            ? queryUsers({ q, authority_id: authority()?.id }).pipe(
                  map((_) => _.data.map((_) => new User(_))),
                  catchError(() => of([])),
              )
            : searchStaff(q).pipe(catchError(() => of([])));
    /** Currently selected user */
    public active_user: User;
    /** User list to display */
    public user_list: User[];
    /** Whether user list is loading */
    public loading = signal(false);
    /** Current display value of the search input field  */
    public search_str = signal('');
    /** Subject holding the value of the search */
    public search$ = new Subject<string>();
    /** List of users from an API search */
    public search_results$: Observable<User[]> = this.search$.pipe(
        debounceTime(400),
        distinctUntilChanged(),
        switchMap((query) => {
            this.loading.set(true);
            return this.options && this.options.length > 0
                ? of(this.options)
                : query.length >= 3
                  ? !this.guests
                      ? this.query_fn(query)
                      : forkJoin([
                            searchStaff(query).pipe(catchError(() => of([]))),
                            searchGuests(query).pipe(catchError(() => of([]))),
                        ])
                  : of([]);
        }),
        catchError(() => of([])),
        map((list: User[]) => {
            this.loading.set(false);
            list = flatten(list);
            const search = this.search_str().toLowerCase();
            return list.filter(
                (item) => !this.filter || this.filter(item, search),
            );
        }),
    );

    constructor() {
        super();
    }

    private _onChange: (_: User) => void;
    private _onTouch: (_: User) => void;
    public readonly registerOnChange = (fn) => (this._onChange = fn);
    public readonly registerOnTouched = (fn) => (this._onTouch = fn);

    private readonly _input_el = viewChild('input', { read: ElementRef });

    public cancelReset = () => this.clearTimeout('reset');

    public blurInput = () => {
        this.timeout('blur', () => this._input_el()?.nativeElement?.blur());
    };

    public ngOnInit(): void {
        // Process API results
        this.subscription(
            'search_results',
            this.search_results$.subscribe((list) => (this.user_list = list)),
        );
        this.resetSearchString();
    }

    /**
     * Reset the search string back to the name of the active user
     */
    public resetSearchString() {
        this.timeout(
            'reset',
            () => this.search_str.set(this.active_user?.name || ''),
            100,
        );
    }

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    public setValue(new_value: User | string, email?: string): void {
        if (!new_value) return;
        if (typeof new_value === 'string' && new_value === this.search_str()) {
            new_value = new User({
                name: (this.search_str() || email || '').split('@')[0],
                email: this.search_str() || email || '',
            });
        }
        const user = new_value as User;
        if (!('name' in user) && !('email' in user)) return;
        this.active_user = user;
        if (this._onChange) this._onChange(user);
        this.resetSearchString();
    }

    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: User) {
        this.active_user = value;
        this.resetSearchString();
    }

    public setDisabledState(disabled: boolean) {
        this.disabled = disabled;
    }
}
