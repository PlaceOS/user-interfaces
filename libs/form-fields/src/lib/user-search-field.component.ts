/* eslint-disable @typescript-eslint/member-ordering */
import {
    Component,
    ElementRef,
    forwardRef,
    inject,
    input,
    model,
    signal,
    viewChild,
} from '@angular/core';
import {
    ControlValueAccessor,
    FormsModule,
    NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { authority, queryUsers } from '@placeos/ts-client';
import { BehaviorSubject, forkJoin, Observable, of } from 'rxjs';
import {
    catchError,
    debounceTime,
    map,
    shareReplay,
    startWith,
    switchMap,
    tap,
} from 'rxjs/operators';

import { AsyncHandler, SettingsService } from '@placeos/common';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import { searchGuests } from '@placeos/users';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { searchStaff } from 'libs/users/src/lib/staff.fn';
import { User } from 'libs/users/src/lib/user.class';

@Component({
    selector: 'a-user-search-field',
    template: `
        <div class="flex w-full space-x-2">
            <mat-form-field appearance="outline" class="w-1/2 flex-1">
                <icon
                    matPrefix
                    class="block flex w-6 items-center justify-center text-2xl"
                    >search</icon
                >
                <input
                    matInput
                    [ngModel]="search_term.getValue()"
                    (ngModelChange)="search_term.next($event)"
                    [disabled]="disabled()"
                    [matAutocomplete]="auto"
                    [placeholder]="placeholder() | translate"
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
                    @let user_list = search_results | async;
                    @let term = search_term.getValue();
                    @for (user of user_list; track $index) {
                        <mat-option [value]="user">
                            <div class="leading-tight">
                                <div>{{ user.name }}</div>
                                <div class="text-xs opacity-30">
                                    {{ user.email }}
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
                                    setValue(search_str); stopEvent($event)
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
                        !user_list?.length &&
                        (search_term.getValue() || error())
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
                    class="h-12 w-12 rounded border border-secondary text-secondary"
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
    ],
})
export class UserSearchFieldComponent
    extends AsyncHandler
    implements ControlValueAccessor
{
    private _settings = inject(SettingsService);

    public readonly search_term = new BehaviorSubject<string>('');
    public readonly loading = signal(false);
    public readonly user = signal<User | null>(null);

    /** Whether form field is disabled */
    public readonly disabled = model<boolean>(undefined);
    /** Placeholder text to display */
    public readonly placeholder = input<string>('FORM.USER_SEARCH');
    /** Limit available options to these */
    public readonly options = input<User[]>(undefined);
    /** Whether guests should also show when searching for users */
    public readonly guests = input<boolean>(undefined);
    /** Whether to show clear button */
    public readonly clear = input<boolean>(false);
    /** Message to display when no user matches have been found */
    public readonly error = input('');
    /** Function to validate the search string */
    public readonly validate = input<(s: string) => boolean>(undefined);
    /** Function to call when empty list option is clicked */
    public readonly empty_fn = input<() => void>(undefined);
    /** Function for filtering the results of the user list */
    public readonly filter = input<(_: any, s?: string) => boolean>(undefined);
    /** Function for querying the user list */
    public readonly query_fn = input<(_: string) => Observable<User[]>>((q) =>
        this._settings.get('app.basic_user_search')
            ? queryUsers({ q, authority_id: authority()?.id }).pipe(
                  map((_) => _.data.map((_) => new User(_))),
                  catchError(() => of([])),
              )
            : this.guests()
              ? forkJoin([
                    searchStaff(q).pipe(catchError(() => of([]))),
                    searchGuests(q).pipe(catchError(() => of([]))),
                ])
              : searchStaff(q).pipe(catchError(() => of([]))),
    );

    public readonly search_results = this.search_term.pipe(
        debounceTime(300),
        switchMap((term) => {
            if (term && typeof term !== 'string') return of([term]);
            if (term === this.user()?.name) return of([this.user()]);
            this.loading.set(true);
            const s = (term || '').toLowerCase();
            return this.options()?.length
                ? of(
                      this.options().filter(
                          (_) =>
                              _.name.toLowerCase().includes(s) ||
                              _.email.toLowerCase().includes(s),
                      ),
                  )
                : s.length > 2
                  ? this.query_fn()(s)
                  : of([]);
        }),
        map((_) => _.filter((_) => !!_)),
        tap(() => this.loading.set(false)),
        startWith([]),
        shareReplay(1),
    );

    private _onChange: (_: User) => void;
    private _onTouch: (_: User) => void;
    public readonly registerOnChange = (fn) => (this._onChange = fn);
    public readonly registerOnTouched = (fn) => (this._onTouch = fn);
    public readonly setDisabledState = (s) => this.disabled.set(s);

    private readonly _input_el = viewChild('input', { read: ElementRef });

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
        console.log('Set User:', value);
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
        return user && user.name ? user.name : '';
    }

    public stopEvent(event: Event) {
        event.stopPropagation();
        event.preventDefault();
    }

    public clearUser() {
        this.user.set(null);
        this._onChange ? this._onChange(null) : null;
        this._onTouch ? this._onTouch(null) : null;
        this.resetTerm();
    }

    public resetTerm() {
        this.search_term.next(this.user() as any);
        const input = this._input_el()?.nativeElement;
        if (input) input.value = this.search_term.getValue();
    }
}
