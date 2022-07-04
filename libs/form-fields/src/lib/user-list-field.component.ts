import {
    Component,
    forwardRef,
    Output,
    EventEmitter,
    Input,
    ViewChild,
    ElementRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
    BaseClass,
    csvToJson,
    currentUser,
    downloadFile,
    notifyError,
    SettingsService,
} from '@placeos/common';
import {
    catchError,
    debounceTime,
    first,
    map,
    mergeMap,
    switchMap,
    take,
    tap,
} from 'rxjs/operators';

import {
    NewUserModalComponent,
    searchGuests,
    searchStaff,
    User,
    USER_DOMAIN,
} from '@placeos/users';
import { MatDialog } from '@angular/material/dialog';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { BehaviorSubject, of, zip } from 'rxjs';

function validateEmail(email) {
    const re =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

@Component({
    selector: 'a-user-list-field',
    template: `
        <div
            class="mb-4bg-white text-black"
            form-field
            [attr.disabled]="disabled"
        >
            <div search>
                <mat-form-field
                    class="w-full"
                    appearance="outline"
                    matAutocompleteOrigin
                    #origin="matAutocompleteOrigin"
                >
                    <mat-chip-list #chipList aria-label="User selection">
                        <mat-chip
                            user
                            *ngFor="let user of active_list"
                            (removed)="removeUser(user)"
                        >
                            <app-icon class="mr-2">business</app-icon>
                            {{ user.name || user.email }}
                            <button remove matChipRemove>
                                <app-icon>cancel</app-icon>
                            </button>
                        </mat-chip>
                        <input
                            #search_field
                            placeholder="Type a name or email"
                            name="user_email"
                            [ngModel]="search$ | async"
                            (ngModelChange)="updateSearch($event)"
                            [matAutocomplete]="auto"
                            [matChipInputFor]="chipList"
                            [matChipInputSeparatorKeyCodes]="separatorKeysCodes"
                            (matChipInputTokenEnd)="
                                addUserFromEmail($event.value)
                            "
                        />
                        <mat-spinner
                            *ngIf="loading"
                            diameter="24"
                            matSuffix
                        ></mat-spinner>
                    </mat-chip-list>
                </mat-form-field>
                <mat-autocomplete #auto="matAutocomplete">
                    <mat-option
                        *ngIf="search_valid_email"
                        (click)="addUserFromEmail()"
                    >
                        Add external user with email "{{ search$.getValue() }}"
                    </mat-option>
                    <mat-option
                        *ngFor="let user of user_list$ | async"
                        (click)="addUser(user)"
                        class="leading-tight"
                    >
                        {{ user.name }}<br />
                        <span class="text-xs">{{ user.email }}</span>
                    </mat-option>
                </mat-autocomplete>
            </div>
            <div
                class="flex items-center space-x-2 -mt-4"
                actions
                *ngIf="!hide_actions"
            >
                <button
                    mat-button
                    type="button"
                    name="new-contact"
                    class="inverse flex-1 sm:flex-none"
                    (click)="openNewUserModal()"
                    i18n="Add new external attendee"
                >
                    <div class="flex items-center justify-center">
                        Add&nbsp;<span class="hidden sm:inline">External</span>
                    </div>
                </button>
                <button
                    mat-button
                    type="button"
                    name="upload-csv"
                    class="inverse flex-1 sm:flex-none"
                    i18n="Upload attendee list from CSV file"
                >
                    <div class="flex items-center justify-center">
                        Upload&nbsp;<span class="hidden sm:inline">CSV</span>
                    </div>
                    <input
                        class="opacity-0 absolute inset-0"
                        type="file"
                        (change)="addUsersFromFile($event)"
                    />
                </button>
                <button
                    mat-button
                    type="button"
                    name="download-template"
                    class="inverse flex-1 sm:flex-none"
                    (click)="downloadCSVTemplate()"
                    i18n="Download template CSV file"
                >
                    <div class="flex items-center justify-center">
                        <span class="hidden sm:inline">CSV</span>&nbsp;Template
                    </div>
                </button>
            </div>
        </div>
    `,
    styles: [
        `
            [search] {
            }
        `,
    ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => UserListFieldComponent),
            multi: true,
        },
    ],
})
export class UserListFieldComponent
    extends BaseClass
    implements ControlValueAccessor
{
    /** Whether form field is disabled */
    @Input() public disabled: boolean;
    /** Number of characters needed before a search will start */
    @Input() public limit = 3;
    /** Whether guests should also show when searching for users */
    @Input() public guests = false;
    /** Whether optional actions should be shown */
    @Input('hideActions') public hide_actions = false;
    /** Function for filtering the results of the user list */
    @Input() public filter: (_: any) => boolean;
    /** Emitter for action to make a new user */
    @Output() public new_user = new EventEmitter<void>();

    readonly separatorKeysCodes = [ENTER, COMMA] as const;

    /** Whether user list is loading */
    public loading = false;
    public readonly search$ = new BehaviorSubject('');

    @ViewChild('search_field') private _search_el: ElementRef<HTMLInputElement>;

    /** User list to display */
    public user_list$ = this.search$.pipe(
        debounceTime(300),
        switchMap((_) => {
            this.loading = true;
            return _
                ? this.guests
                    ? zip([searchStaff(_), searchGuests(_)]).pipe(
                          map(([staff, guests]) =>
                              (staff as any).concat(guests)
                          ),
                          catchError((_) => [])
                      )
                    : searchStaff(_).pipe(catchError((_) => []))
                : of([]);
        }),
        tap((_) => (this.loading = false))
    );
    /** List of active selected users on the list */
    public active_list: User[] = [];

    /** Form control on change handler */
    private _onChange: (_: User[]) => void;
    /** Form control on touch handler */
    private _onTouch: (_: User[]) => void;

    public readonly validFn = (s) => validateEmail(s);
    public readonly emptyClick = () => this.openNewUserModal(new User());

    public get search_valid_email() {
        return validateEmail(this.search$.getValue());
    }

    constructor(
        private _dialog: MatDialog,
        private _settings: SettingsService
    ) {
        super();
    }

    public updateSearch(new_value: string = '') {
        this.timeout('search', () => this.search$.next(new_value));
    }

    public addUserFromEmail(email: string = '') {
        if (!email) email = this.search$.getValue();
        if (!validateEmail(email)) return;
        this.addUser(new User({ id: email, email, name: email.split('@')[0] }));
        this.timeout('clear_search', () => {
            this.search$.next('');
            this._search_el.nativeElement.value = '';
        }, 100);
    }

    /**
     * Add user to the user list
     * @param user
     */
    public addUser(user: User) {
        const list = this.active_list.filter((_) => _.email !== user.email);
        this.setValue([
            ...list,
            new User({
                ...user,
                id: user.id || user.email,
                visit_expected:
                    (!user.id && user.is_external !== true
                        ? user.visit_expected
                        : null) ?? true,
            }),
        ]);
        this.timeout('clear_search', () => {
            this.search$.next('');
            this._search_el.nativeElement.value = '';
        }, 100);
    }

    /**
     * Remove user from the user list
     * @param user
     */
    public removeUser(user: User) {
        const list = this.active_list.filter(
            (a_user) => a_user.email !== user.email
        );
        this.setValue(list);
    }

    /**
     * Load CSV file and populate the user list with the contents
     * @param event File input field event
     */
    public addUsersFromFile(event) {
        /* istanbul ignore else */
        if (event.target) {
            const file = event.target.files[0];
            /* istanbul ignore else */
            if (file) {
                const reader = new FileReader();
                reader.readAsText(file, 'UTF-8');
                reader.addEventListener('load', (evt) => {
                    this.processCsvData((evt.srcElement as any).result);
                    event.target.value = '';
                });
                reader.addEventListener('error', (_) =>
                    notifyError('Error reading file.')
                );
            }
        }
    }

    /**
     * Process raw CSV data and save user data to attendee list
     * @param data CSV data
     */
    private processCsvData(data: string) {
        const list = csvToJson(data) || [];
        const id = currentUser()?.staff_id || 'unknown';
        for (const el of list) {
            el.name = el.name || `${el.first_name} ${el.last_name}`;
            const display = (
                el.name || `${Math.floor(Math.random() * 9999_9999)}`
            )
                .split(' ')
                .join('_')
                .toLowerCase();
            /* istanbul ignore else */
            if (!el.email) {
                el.email = `${display}+${id}@guest.${USER_DOMAIN}`;
            }
            const internal_emails = this._settings.get(
                'app.booking.internal_emails'
            ) || ['place.tech'];
            el.visit_expected =
                el.visit_expected ??
                !internal_emails.find((_) => el.email.endsWith(_));

            /** Convert phone to string. PWCME-544 */
            el.phone = '' + el.phone;

            this.addUser(new User(el));
        }
    }

    /* istanbul ignore next */
    /** Download template CSV file */
    public downloadCSVTemplate() {
        const template = `Organisation,First Name,Last Name,Email,Phone,Assistance Required,Visit Expected\nFake Org,John,Smith,john.smith@example.com,01234567898,false,true`;
        downloadFile('template.csv', template);
    }

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    public setValue(new_value: User[]): void {
        this.active_list = new_value;
        if (this._onChange) {
            this._onChange(new_value);
        }
    }

    /* istanbul ignore next */
    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: User[]) {
        this.active_list = value;
    }

    public setDisabledState(disabled: boolean) {
        this.disabled = disabled;
    }

    /* istanbul ignore next */
    /**
     * Registers a callback function that is called when the control's value changes in the UI.
     * @param fn The callback function to register
     */
    public registerOnChange(fn: (_: User[]) => void): void {
        this._onChange = fn;
    }

    /* istanbul ignore next */
    /**
     * Registers a callback function is called by the forms API on initialization to update the form model on blur.
     * @param fn The callback function to register
     */
    public registerOnTouched(fn: (_: User[]) => void): void {
        this._onTouch = fn;
    }

    public displayFn(item): string {
        return item?.name || '';
    }

    /**
     * Open modal to add or update user details
     */
    public openNewUserModal(user: User = new User()) {
        const ref = this._dialog.open<NewUserModalComponent>(
            NewUserModalComponent,
            {
                width: 'auto',
                height: 'auto',
                data: { user },
            }
        );
        ref.componentInstance?.event
            .pipe(first((_) => _.reason === 'done'))
            .subscribe((event) => {
                this.addUser(event.metadata);
                ref.close();
            });
    }
}
