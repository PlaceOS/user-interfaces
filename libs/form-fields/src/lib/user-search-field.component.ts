/* eslint-disable @typescript-eslint/member-ordering */
import {
    Component,
    OnInit,
    forwardRef,
    Input,
    ViewChild,
    ElementRef,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Subject, Observable, of, forkJoin } from 'rxjs';
import {
    switchMap,
    debounceTime,
    distinctUntilChanged,
    map,
    catchError,
} from 'rxjs/operators';

import { AsyncHandler, flatten, SettingsService } from '@placeos/common';
import { searchGuests } from 'libs/users/src/lib/guests.fn';
import { searchStaff } from 'libs/users/src/lib/staff.fn';
import { User } from 'libs/users/src/lib/user.class';
import { authority, queryUsers } from '@placeos/ts-client';

@Component({
    selector: 'a-user-search-field',
    template: `
        <mat-form-field appearance="outline" class="w-full no-subscript">
            <input
                #input
                matInput
                keyboard
                name="user-search"
                [(ngModel)]="search_str"
                (ngModelChange)="search$.next($event || '')"
                [disabled]="disabled"
                [placeholder]="placeholder || 'Search for user...'"
                [matAutocomplete]="auto"
                (keyup.enter)="
                    validate && validate(search_str) ? setValue(search_str) : ''
                "
                (blur)="resetSearchString()"
                (focus)="cancelReset()"
            />
            <app-icon matPrefix class="text-2xl relative">search</app-icon>
            <mat-spinner *ngIf="loading" matSuffix diameter="16"></mat-spinner>
        </mat-form-field>
        <mat-autocomplete
            #auto="matAutocomplete"
            (optionSelected)="setValue($event.option.value)"
        >
            <mat-option
                *ngFor="let option of user_list"
                (click)="setValue(option); blurInput()"
            >
                <div class="leading-tight">{{ option.name }}</div>
                <div class="text-xs opacity-60">
                    {{ option.email }}
                </div>
            </mat-option>
            <mat-option
                *ngIf="search_str && validate && validate(search_str)"
                class="relative pointer-events-none"
            >
                <div
                    class="absolute inset-0 px-4 pointer-events-auto"
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
                    <div class="pointer-events-none" i18n>
                        Add external attendee "{{ search_str }}"
                    </div>
                </div>
            </mat-option>
            <mat-option
                *ngIf="!user_list?.length && (search_str || error)"
                [disabled]="!empty_fn"
                (click)="empty_fn()"
            >
                {{ search_str ? 'No users found.' : '' }} {{ error }}
            </mat-option>
        </mat-autocomplete>
    `,
    styles: [
        `
            :host {
                display: block;
            }
            app-icon {
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
})
export class UserSearchFieldComponent
    extends AsyncHandler
    implements OnInit, ControlValueAccessor
{
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
                  map((_) => _.data.map((_) => new User(_)))
              )
            : searchStaff(q);
    /** Currently selected user */
    public active_user: User;
    /** User list to display */
    public user_list: User[];
    /** Whether user list is loading */
    public loading: boolean;
    /** Current display value of the search input field  */
    public search_str: string;
    /** Subject holding the value of the search */
    public search$ = new Subject<string>();
    /** List of users from an API search */
    public search_results$: Observable<User[]> = this.search$.pipe(
        debounceTime(400),
        distinctUntilChanged(),
        switchMap((query) => {
            this.loading = true;
            return this.options && this.options.length > 0
                ? of(this.options)
                : query.length >= 3
                ? !this.guests
                    ? this.query_fn(query)
                    : forkJoin([searchStaff(query), searchGuests(query)])
                : of([]);
        }),
        catchError((_) => of([])),
        map((list: User[]) => {
            this.loading = false;
            list = flatten(list);
            const search = (this.search_str || '').toLowerCase();
            return list.filter(
                (item) => !this.filter || this.filter(item, search)
            );
        })
    );

    constructor(private _settings: SettingsService) {
        super();
    }

    /** Form control on change handler */
    private _onChange: (_: User) => void;
    /** Form control on touch handler */
    private _onTouch: (_: User) => void;

    @ViewChild('input', { read: ElementRef })
    private _input_el: ElementRef<HTMLInputElement>;

    public cancelReset = () => this.clearTimeout('reset');

    public blurInput = () => {
        this.timeout('blur', () => this._input_el?.nativeElement?.blur());
    };

    public ngOnInit(): void {
        // Process API results
        this.subscription(
            'search_results',
            this.search_results$.subscribe((list) => (this.user_list = list))
        );
        this.resetSearchString();
    }

    /**
     * Reset the search string back to the name of the active user
     */
    public resetSearchString() {
        this.timeout(
            'reset',
            () => (this.search_str = this.active_user?.name || ''),
            100
        );
    }

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    public setValue(new_value: User | string, email?: string): void {
        if (!new_value) return;
        if (
            typeof new_value === 'string' &&
            (new_value as any) === this.search_str
        ) {
            new_value = new User({
                name: (this.search_str || email || '').split('@')[0],
                email: this.search_str || email || '',
            });
        }
        const user = new_value as any;
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

    /**
     * Registers a callback function that is called when the control's value changes in the UI.
     * @param fn The callback function to register
     */
    public registerOnChange(fn: (_: User) => void): void {
        this._onChange = fn;
    }

    /**
     * Registers a callback function is called by the forms API on initialization to update the form model on blur.
     * @param fn The callback function to register
     */
    public registerOnTouched(fn: (_: User) => void): void {
        this._onTouch = fn;
    }
}
