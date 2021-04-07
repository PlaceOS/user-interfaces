import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Subject, Observable, of, forkJoin } from 'rxjs';
import {
    switchMap,
    debounceTime,
    distinctUntilChanged,
    map,
    catchError,
} from 'rxjs/operators';

import { BaseClass, flatten } from '@placeos/common';
import { searchGuests, searchStaff, User } from '@placeos/users';

@Component({
    selector: 'a-user-search-field',
    template: `
        <div class="user-search-field" form-field>
            <mat-form-field overlay appearance="outline">
                <input
                    matInput
                    name="user-search"
                    [(ngModel)]="search_str"
                    (ngModelChange)="search$.next($event)"
                    [disabled]="disabled"
                    [placeholder]="placeholder || 'Search for user...'"
                    [matAutocomplete]="auto"
                    (blur)="resetSearchString()"
                />
                <div class="prefix" matPrefix>
                    <app-icon class="text-2xl relative">search</app-icon>
                </div>
                <div class="suffix" matSuffix *ngIf="loading">
                    <mat-spinner diameter="16"></mat-spinner>
                </div>
            </mat-form-field>
            <mat-autocomplete
                #auto="matAutocomplete"
                (optionSelected)="setValue($event.option.value)"
            >
                <mat-option *ngFor="let option of user_list" [value]="option">
                    <div class="leading-tight">{{ option.name }}</div>
                    <div class="text-xs text-black opacity-60">
                        {{ option.email }}
                    </div>
                </mat-option>
            </mat-autocomplete>
        </div>
    `,
    styles: [
        `
            :host,
            mat-form-field {
                width: 100%;
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
    extends BaseClass
    implements OnInit, ControlValueAccessor {
    /** Whether form field is disabled */
    @Input() public disabled: boolean;
    /** Placeholder text to display */
    @Input() public placeholder: string;
    /** Limit available options to these */
    @Input() public options: User[];
    /** Whether guests should also show when searching for users */
    @Input() public guests: boolean;
    /** Function for filtering the results of the user list */
    @Input() public filter: (_: any) => boolean;
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
                    ? searchStaff(query.slice(0, 3))
                    : forkJoin([
                          searchStaff(query.slice(0, 3)),
                          searchGuests(query.slice(0, 3)),
                      ])
                : of([]);
        }),
        catchError((_) => of([])),
        map((list: User[]) => {
            this.loading = false;
            list = flatten(list);
            const search = this.search_str.toLowerCase();
            return list.filter(
                (item) =>
                    (!this.filter || this.filter(item)) &&
                    (item.name?.toLowerCase().includes(search) ||
                        item.email.toLowerCase().includes(search))
            );
        })
    );


    /** Form control on change handler */
    private _onChange: (_: User) => void;
    /** Form control on touch handler */
    private _onTouch: (_: User) => void;

    public ngOnInit(): void {
        // Process API results
        this.subscription(
            'search_results',
            this.search_results$.subscribe((list) => (this.user_list = list))
        );
    }

    /**
     * Reset the search string back to the name of the active user
     */
    public resetSearchString() {
        this.search_str = this.active_user?.name || '';
    }

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    public setValue(new_value: User): void {
        this.active_user = new_value;
        if (this._onChange) {
            this._onChange(new_value);
        }
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
