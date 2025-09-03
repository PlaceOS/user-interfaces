import { COMMA, ENTER } from '@angular/cdk/keycodes';
import {
    Component,
    ElementRef,
    forwardRef,
    inject,
    input,
    model,
    output,
    viewChild,
} from '@angular/core';
import {
    ControlValueAccessor,
    FormsModule,
    NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {
    AsyncHandler,
    csvToJson,
    currentUser,
    downloadFile,
    notifyError,
    SettingsService,
    unique,
} from '@placeos/common';
import { BehaviorSubject, combineLatest, of } from 'rxjs';
import {
    catchError,
    debounceTime,
    first,
    map,
    switchMap,
    tap,
} from 'rxjs/operators';

import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { authority, queryUsers } from '@placeos/ts-client';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { searchGuests } from 'libs/users/src/lib/guests.fn';
import { NewUserModalComponent } from 'libs/users/src/lib/new-user-modal.component';
import { searchStaff } from 'libs/users/src/lib/staff.fn';
import { User } from 'libs/users/src/lib/user.class';
import { USER_DOMAIN } from 'libs/users/src/lib/user.utilities';
import { PlaceUserPipe } from './place-user.pipe';

function validateEmail(email) {
    const re =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

const ACCEPTED_FILE_TYPES = ['text/csv', 'text/plain'];
const DENIED_FILE_TYPES = [
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
];

@Component({
    selector: 'a-user-list-field',
    template: `
        <div class="mb-4" form-field [attr.disabled]="disabled()">
            <div search>
                <mat-form-field
                    class="w-full"
                    appearance="outline"
                    matAutocompleteOrigin
                    #origin="matAutocompleteOrigin"
                >
                    <mat-chip-grid #chipList aria-label="User Seleciom">
                        @for (item of active_list; track item.id) {
                            <mat-chip-row
                                user
                                [class.bg-warning]="item.is_external"
                                (removed)="removeUser(item)"
                            >
                                <div class="flex items-center space-x-2">
                                    <div>{{ item.name || item.email }}</div>
                                    @if (!item.is_external) {
                                        <icon
                                            [matTooltip]="
                                                (
                                                    item?.email
                                                    | placeuser
                                                    | async
                                                )?.location_name_time(time())
                                            "
                                        >
                                            {{
                                                (
                                                    item?.email
                                                    | placeuser
                                                    | async
                                                )?.location_icon(time())
                                            }}
                                        </icon>
                                    }
                                </div>
                                <button
                                    matChipRemove
                                    remove
                                    [attr.aria-label]="
                                        'COMMON.REMOVE_ITEM'
                                            | translate
                                                : {
                                                      name:
                                                          item.name ||
                                                          item.email,
                                                  }
                                    "
                                >
                                    <icon>cancel</icon>
                                </button>
                            </mat-chip-row>
                        }
                    </mat-chip-grid>
                    <input
                        #search_field
                        [placeholder]="'FORM.USER_LIST_PLACEHOLDER' | translate"
                        name="user_email"
                        [ngModel]="search$ | async"
                        (ngModelChange)="updateSearch($event)"
                        [matAutocomplete]="auto"
                        [matChipInputFor]="chipList"
                        [matChipInputSeparatorKeyCodes]="separatorKeysCodes"
                        (matChipInputTokenEnd)="addUserFromEmail($event.value)"
                    />
                    @if (loading) {
                        <mat-spinner diameter="24" matSuffix></mat-spinner>
                    }
                </mat-form-field>
                <mat-autocomplete #auto="matAutocomplete">
                    @if (search_valid_email) {
                        <mat-option (click)="addUserFromEmail()">
                            {{
                                'FORM.USER_LIST_ADD_EXTERNAL'
                                    | translate: { email: search$.getValue() }
                            }}
                        </mat-option>
                    }
                    @for (user of user_list$ | async; track user) {
                        <mat-option
                            (click)="addUser(user)"
                            class="leading-tight"
                        >
                            {{ user.name }}<br />
                            <span class="w-full text-xs"
                                >{{ user.email }}
                                @if (
                                    user.username &&
                                    user.username !== user.email
                                ) {
                                    <span>
                                        (<span class="truncate">{{
                                            user.username
                                        }}</span
                                        >)
                                    </span>
                                }
                            </span>
                        </mat-option>
                    }
                </mat-autocomplete>
            </div>
            @if (!hide_actions()) {
                <div class="-mt-4 flex items-center space-x-2" actions>
                    <button
                        btn
                        matRipple
                        type="button"
                        name="new-contact"
                        class="inverse flex-1 sm:flex-none"
                        (click)="openNewUserModal()"
                    >
                        <div class="flex items-center justify-center">
                            <span class="hidden sm:inline">
                                {{ 'FORM.USER_BTN_ADD_EXTERNAL' | translate }}
                            </span>
                            <span class="inline sm:hidden">
                                {{
                                    'FORM.USER_BTN_ADD_EXTERNAL_SIMPLE'
                                        | translate
                                }}
                            </span>
                        </div>
                    </button>
                    <button
                        btn
                        matRipple
                        type="button"
                        name="upload-csv"
                        class="inverse relative flex-1 sm:flex-none"
                    >
                        <div class="flex items-center justify-center">
                            <span class="hidden sm:inline">
                                {{ 'FORM.USER_BTN_UPLOAD' | translate }}
                            </span>
                            <span class="inline sm:hidden">
                                {{ 'FORM.USER_BTN_UPLOAD_SIMPLE' | translate }}
                            </span>
                        </div>
                        <input
                            class="absolute inset-0 opacity-0"
                            type="file"
                            (change)="addUsersFromFile($event)"
                        />
                    </button>
                    <button
                        btn
                        matRipple
                        type="button"
                        name="download-template"
                        class="inverse flex-1 sm:flex-none"
                        (click)="downloadCSVTemplate(); download.emit()"
                    >
                        <div class="flex items-center justify-center">
                            <span class="hidden sm:inline">
                                {{ 'FORM.USER_BTN_TEMPLATE' | translate }}
                            </span>
                            <span class="inline sm:hidden">
                                {{
                                    'FORM.USER_BTN_TEMPLATE_SIMPLE' | translate
                                }}
                            </span>
                        </div>
                    </button>
                </div>
            }
        </div>
    `,
    styles: [``],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => UserListFieldComponent),
            multi: true,
        },
    ],
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatChipsModule,
        MatAutocompleteModule,
        FormsModule,
        MatRippleModule,
        TranslatePipe,
        IconComponent,
        PlaceUserPipe,
        MatTooltipModule,
    ],
})
export class UserListFieldComponent
    extends AsyncHandler
    implements ControlValueAccessor
{
    private _dialog = inject(MatDialog);
    private _settings = inject(SettingsService);

    public readonly time = input(Date.now());
    /** Whether form field is disabled */
    public readonly disabled = model<boolean>(undefined);
    /** Number of characters needed before a search will start */
    public readonly limit = input(3);
    /** Whether guests should also show when searching for users */
    public readonly guests = input(false);
    /** Whether guests should also show when searching for users */
    public readonly guests_only = input(false);
    /** Whether optional actions should be shown */
    public readonly hide_actions = input(false);
    /** Whether as custom template will be provided outside the component */
    public readonly custom_template = input(false);
    /** Function for filtering the results of the user list */
    public readonly filter = input<(_: any) => boolean>(undefined);
    /** Emitter for action to make a new user */
    public readonly new_user = output<void>();
    /** Whether user should download the CSV template */
    public readonly download = output<void>();

    readonly separatorKeysCodes = [ENTER, COMMA] as const;

    /** Whether user list is loading */
    public loading = false;
    public readonly search$ = new BehaviorSubject('');

    private readonly _search_el =
        viewChild<ElementRef<HTMLInputElement>>('search_field');

    private searchStaff(q: string) {
        return this._settings.get('app.basic_user_search')
            ? queryUsers({ q, authority_id: authority()?.id }).pipe(
                  map((_) => _.data.map((u) => new User(u))),
              )
            : searchStaff(q);
    }

    /** User list to display */
    public user_list$ = this.search$.pipe(
        debounceTime(300),
        switchMap((_) => {
            this.loading = true;
            return (
                _
                    ? this.guests()
                        ? combineLatest([
                              this.searchStaff(_),
                              searchGuests(_),
                          ]).pipe(
                              map(([staff, guests]) => {
                                  if (this.guests_only()) staff = [];
                                  const visitors_list = [];
                                  const visitors =
                                      this._settings.get('visitor-invitees') ||
                                      [];
                                  for (const item of visitors) {
                                      const [email, name, company] =
                                          item.split('|');
                                      visitors_list.push({
                                          email,
                                          name,
                                          company,
                                      });
                                  }
                                  return unique(
                                      (staff as any)
                                          .concat(guests)
                                          .concat(visitors_list),
                                      'email',
                                  );
                              }),
                          )
                        : this.searchStaff(_)
                    : of([])
            ).pipe(catchError((_) => of([])));
        }),
        tap((_) => (this.loading = false)),
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

    constructor() {
        super();
    }

    public updateSearch(new_value = '') {
        this.timeout('search', () => this.search$.next(new_value));
    }

    public addUserFromEmail(email = '') {
        if (!email) email = this.search$.getValue();
        if (!validateEmail(email)) return;
        const user = new User({ id: email, email, name: email.split('@')[0] });
        this.addUser(user);
        const { name, organisation } = user;
        const visitor_details = `${email}|${name}|${organisation}`;
        const old_visitors = this._settings.get('visitor-invitees') || [];
        this._settings.saveUserSetting('visitor-invitees', [
            ...old_visitors.filter((_) => !_.includes(email)),
            visitor_details,
        ]);
        this.timeout(
            'clear_search',
            () => {
                this.search$.next('');
                this._search_el().nativeElement.value = '';
            },
            100,
        );
    }

    /**
     * Add user to the user list
     * @param user
     */
    public addUser(user: User) {
        const list = this.active_list?.filter((_) => _.id !== user.id) || [];
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
        this.timeout(
            'clear_search',
            () => {
                this.search$.next('');
                this._search_el().nativeElement.value = '';
            },
            100,
        );
    }

    /**
     * Remove user from the user list
     * @param user
     */
    public removeUser(user: User) {
        const list = this.active_list.filter((a_user) => a_user.id !== user.id);
        this.setValue(list);
    }

    /**
     * Load CSV file and populate the user list with the contents
     * @param event File input field event
     */
    public addUsersFromFile(event) {
        /* istanbul ignore else */
        if (event.target) {
            const file: File = event.target.files[0];
            /* istanbul ignore else */
            if (file) {
                if (
                    !ACCEPTED_FILE_TYPES.includes(file.type) ||
                    DENIED_FILE_TYPES.includes(file.type)
                ) {
                    notifyError('Only CSV files are supported');
                    return;
                }
                const reader = new FileReader();
                reader.readAsText(file, 'UTF-8');
                reader.addEventListener('load', (evt) => {
                    this.processCsvData((evt.srcElement as any).result);
                    event.target.value = '';
                });
                reader.addEventListener('error', (_) =>
                    notifyError('Error reading file.'),
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
                'app.bookings.internal_emails',
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
        if (this.custom_template()) return;
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
        this.disabled.set(disabled);
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
            },
        );
        ref.componentInstance?.event
            .pipe(first((_) => _.reason === 'done'))
            .subscribe((event) => {
                this.addUser(event.metadata);
                ref.close();
            });
    }
}
