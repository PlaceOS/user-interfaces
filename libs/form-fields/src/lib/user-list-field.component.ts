import { COMMA, ENTER } from '@angular/cdk/keycodes';
import {
    Component,
    computed,
    debounced,
    ElementRef,
    forwardRef,
    inject,
    input,
    model,
    output,
    resource,
    signal,
    viewChild,
} from '@angular/core';
import { outputToObservable } from '@angular/core/rxjs-interop';
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
import { first } from 'rxjs/operators';

import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
    toVisitorInternalOrExternal,
    User,
    type AttendeeFlags,
    type VisitorInternalOrExternal,
} from '@placeos/common';
import { authority, queryUsers } from '@placeos/ts-client';

import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { UserAvatarComponent } from 'libs/components/src/lib/user-avatar.component';
import { searchGuests } from 'libs/users/src/lib/guests.fn';
import { NewUserModalComponent } from 'libs/users/src/lib/new-user-modal.component';
import { searchStaff } from 'libs/users/src/lib/staff.fn';
import { USER_DOMAIN } from 'libs/users/src/lib/user.utilities';

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
                    <mat-chip-grid #chipList aria-label="User selection">
                        @for (item of active_list(); track $index) {
                            <mat-chip-row
                                user
                                [class.bg-base-200]="!item.is_external"
                                [class.bg-warning]="item.is_external"
                                (removed)="removeUser($index)"
                                [matTooltip]="item.email"
                            >
                                <div
                                    class="flex items-center space-x-2"
                                    [class.text-base-content!]="
                                        !item.is_external
                                    "
                                    [class.text-warning-content!]="
                                        item.is_external
                                    "
                                >
                                    <div>{{ item.name || item.email }}</div>
                                </div>
                                <button
                                    matChipRemove
                                    remove
                                    [class.text-base-content!]="
                                        !item.is_external
                                    "
                                    [class.text-warning-content!]="
                                        item.is_external
                                    "
                                    [attr.aria-label]="
                                        'COMMON.REMOVE_ITEM'
                                            | translate
                                                : {
                                                      item:
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
                        [ngModel]="search()"
                        (ngModelChange)="updateSearch($event)"
                        [matAutocomplete]="auto"
                        [matChipInputFor]="chipList"
                        [matChipInputSeparatorKeyCodes]="separatorKeysCodes"
                        (matChipInputTokenEnd)="addUserFromEmail($event.value)"
                    />
                    @if (loading()) {
                        <mat-spinner diameter="24" matSuffix></mat-spinner>
                    }
                </mat-form-field>
                <mat-autocomplete #auto="matAutocomplete">
                    @if (search_valid_email()) {
                        <mat-option (click)="addUserFromEmail()">
                            {{
                                'FORM.USER_LIST_ADD_EXTERNAL'
                                    | translate: { email: search() }
                            }}
                        </mat-option>
                    }
                    @for (user of user_list(); track user) {
                        <mat-option
                            (click)="addUser(user)"
                            class="leading-tight"
                        >
                            <div class="flex items-center space-x-2">
                                <a-user-avatar class="-ml-2" [user]="user" />
                                <div class="leading-tight">
                                    <div>{{ user.name }}</div>
                                    <div class="text-xs opacity-30">
                                        {{ user.email }}
                                        @if (
                                            user.username &&
                                            user.username !== user.email
                                        ) {
                                            (<span class="truncate">{{
                                                user.username
                                            }}</span
                                            >)
                                        }
                                    </div>
                                </div>
                            </div>
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
                    <!--
                        The button is the control. The file input on top takes mouse clicks
                        and dropped files, and the button opens it for keyboard users
                    -->
                    <button
                        btn
                        matRipple
                        type="button"
                        name="upload-csv"
                        class="inverse relative flex-1 sm:flex-none"
                        (click)="
                            $event.target !== file_input && file_input.click()
                        "
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
                            #file_input
                            tabindex="-1"
                            aria-hidden="true"
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
                    <ng-content />
                </div>
            }
            @if (show_international() && active_list().length) {
                <div class="mt-2 flex flex-col">
                    <label>{{
                        'BOOKINGS.INTERNATIONAL_VISITORS' | translate
                    }}</label>
                    <div class="flex flex-wrap gap-x-4 gap-y-2">
                        @for (
                            item of active_list();
                            track item.id || item.email
                        ) {
                            <mat-checkbox
                                [ngModel]="getAttendeeInternational(item)"
                                (ngModelChange)="
                                    setAttendeeInternational(item, $event)
                                "
                                [ngModelOptions]="{
                                    standalone: true,
                                }"
                            >
                                {{ item.name || item.email }}
                            </mat-checkbox>
                        }
                    </div>
                </div>
            }
            @if (show_internal_or_external() && active_list().length) {
                <div class="mt-2 flex flex-col">
                    <label>{{
                        'BOOKINGS.VISITOR_INTERNAL_OR_EXTERNAL' | translate
                    }}</label>
                    <div class="flex flex-col gap-y-2">
                        @for (
                            item of active_list();
                            track item.id || item.email
                        ) {
                            <div class="flex flex-wrap items-center gap-x-4">
                                <span>{{ item.name || item.email }}</span>
                                <mat-radio-group
                                    [ngModel]="getAttendeeType(item)"
                                    (ngModelChange)="
                                        setAttendeeType(item, $event)
                                    "
                                    [ngModelOptions]="{
                                        standalone: true,
                                    }"
                                >
                                    <mat-radio-button value="internal">
                                        {{ 'COMMON.TYPE_INTERNAL' | translate }}
                                    </mat-radio-button>
                                    <mat-radio-button value="external">
                                        {{ 'COMMON.TYPE_EXTERNAL' | translate }}
                                    </mat-radio-button>
                                </mat-radio-group>
                            </div>
                        }
                    </div>
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
        MatCheckboxModule,
        MatRadioModule,
        FormsModule,
        MatRippleModule,
        TranslatePipe,
        IconComponent,
        MatTooltipModule,
        UserAvatarComponent,
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
    /**
     * Whether each selected user can be flagged as international and marked
     * internal or external. Values are stored on the user's `extension_data`.
     */
    public readonly flags = input(false);
    /** Whether as custom template will be provided outside the component */
    public readonly custom_template = input(false);
    /** Function for filtering the results of the user list */
    public readonly filter = input<(_: any) => boolean>(undefined);
    /** Emitter for action to make a new user */
    public readonly new_user = output<void>();
    /** Whether user should download the CSV template */
    public readonly download = output<void>();

    readonly separatorKeysCodes = [ENTER, COMMA] as const;

    public readonly search = signal('');

    private readonly _search_el =
        viewChild<ElementRef<HTMLInputElement>>('search_field');
    private readonly _use_basic_user_search = this._settings.signal(
        'basic_user_search',
        false,
    );
    private readonly _allow_international = this._settings.signal(
        'events.allow_international',
        false,
    );
    private readonly _allow_internal_or_external = this._settings.signal(
        'events.allow_attendee_internal_or_external',
        false,
    );

    /** Whether the per-user international checkbox block should show */
    public readonly show_international = computed(
        () => this.flags() && !!this._allow_international(),
    );
    /** Whether the per-user internal/external radio block should show */
    public readonly show_internal_or_external = computed(
        () => this.flags() && !!this._allow_internal_or_external(),
    );

    private async searchStaff(
        q: string,
        signal?: AbortSignal,
    ): Promise<User[]> {
        // Preserve the shared attendee search, including directory guests,
        // independently of staff/host directory restrictions.
        return this._use_basic_user_search()
            ? queryUsers({ q, authority_id: authority()?.id }).then((_) =>
                  _.data.map((u) => new User(u)),
              )
            : searchStaff(q, { signal, exclude_guests: false });
    }

    private readonly _debounced_search = debounced(this.search, 300);
    private readonly _user_search = resource({
        params: () => ({ q: this._debounced_search.value() }),
        loader: async ({ params: { q }, abortSignal }): Promise<User[]> => {
            if (!q) return [];
            try {
                if (!this.guests())
                    return await this.searchStaff(q, abortSignal);
                const [staff_results, guests] = await Promise.all([
                    this.searchStaff(q, abortSignal),
                    searchGuests(q),
                ]);
                const staff = this.guests_only() ? [] : staff_results;
                const visitors_list = [];
                const visitors = this._settings.get('visitor-invitees') || [];
                for (const item of visitors) {
                    if (typeof item !== 'string') continue;
                    const [email, name, company, international] =
                        item.split('|');
                    visitors_list.push({
                        email,
                        name,
                        company,
                        international: international === '1',
                    });
                }
                return unique(
                    staff.concat(guests).concat(visitors_list),
                    'email',
                );
            } catch {
                return [];
            }
        },
    });
    /** User list to display */
    public readonly user_list = computed(() =>
        [...(this._user_search.value() ?? [])].sort((a, b) =>
            a.name.localeCompare(b.name),
        ),
    );
    /** Whether user list is loading */
    public readonly loading = computed(() => this._user_search.isLoading());
    /** List of active selected users on the list */
    public readonly active_list = signal<User[]>([]);

    /** Form control on change handler */
    private _onChange: (_: User[]) => void;
    /** Form control on touch handler */
    private _onTouch: (_: User[]) => void;

    public readonly validFn = (s) => validateEmail(s);
    public readonly emptyClick = () => this.openNewUserModal(new User());

    public readonly search_valid_email = computed(() =>
        validateEmail(this.search()),
    );

    constructor() {
        super();
    }

    public updateSearch(new_value = '') {
        this.timeout('search', () => this.search.set(new_value));
    }

    public addUserFromEmail(email = '') {
        if (!email) email = this.search();
        if (!validateEmail(email)) return;
        const user = new User({ id: email, email, name: email.split('@')[0] });
        this.addUser(user);
        const { name, organisation } = user;
        const visitor_details = `${email}|${name}|${organisation}|0`;
        const old_visitors = this._settings.get('visitor-invitees') || [];
        this._settings.saveUserSetting('visitor-invitees', [
            ...old_visitors.filter((_) => !_.includes(email)),
            visitor_details,
        ]);
        this.timeout(
            'clear_search',
            () => {
                this.search.set('');
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
        const user_id = user.id || user.email;
        const list = this.active_list().filter(
            (_) => (_.id || _.email) !== user_id,
        );
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
                this.search.set('');
                this._search_el().nativeElement.value = '';
            },
            100,
        );
    }

    /**
     * Remove the user at the given position in the list.
     *
     * Removal is positional rather than identity based. Visitor lists are built
     * from booking data where `id`/`email` can be blank or shared between
     * entries, and an identity filter then drops every matching row instead of
     * the one the user clicked. (PPT-2634)
     * @param index Index of the user in `active_list`
     */
    public removeUser(index: number) {
        const list = [...this.active_list()];
        if (index < 0 || index >= list.length) return;
        list.splice(index, 1);
        this.setValue(list);
    }

    /** Whether the given user is flagged as an international visitor */
    public getAttendeeInternational(item: User): boolean {
        return !!item?.extension_data?.international;
    }

    /** Internal/external type of the given user. Defaults to `internal` */
    public getAttendeeType(item: User): VisitorInternalOrExternal {
        return toVisitorInternalOrExternal(
            item?.extension_data?.visitor_internal_or_external,
        );
    }

    /** Flag the given user as international, or not */
    public setAttendeeInternational(item: User, international: boolean) {
        this._setAttendeeFlags(item, { international: !!international });
    }

    /** Set the internal/external type of the given user */
    public setAttendeeType(item: User, type: VisitorInternalOrExternal) {
        this._setAttendeeFlags(item, {
            visitor_internal_or_external: toVisitorInternalOrExternal(type),
        });
    }

    /**
     * Replace the user with a copy that holds the new flags, and emit the
     * updated list. The user is copied, not changed, because it can be shared
     * with a cached event, and a cancelled edit must not change that event.
     */
    private _setAttendeeFlags(item: User, flags: AttendeeFlags) {
        if (!item) return;
        this.setValue(
            this.active_list().map((user) =>
                user === item
                    ? new User({
                          ...user,
                          extension_data: { ...user.extension_data, ...flags },
                      })
                    : user,
            ),
        );
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
        this.active_list.set(new_value || []);
        if (this._onChange) {
            this._onChange(new_value || []);
        }
    }

    /* istanbul ignore next */
    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: User[]) {
        this.active_list.set(value || []);
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
        const event = ref.componentInstance?.event;
        if (!event) return;
        outputToObservable(event)
            .pipe(first((_) => _.reason === 'done'))
            .subscribe((event) => {
                this.addUser(event.metadata);
                ref.close();
            });
    }
}
