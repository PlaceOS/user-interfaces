import {
    Component,
    forwardRef,
    Output,
    EventEmitter,
    Input,
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
import { first } from 'rxjs/operators';

import { NewUserModalComponent, User, USER_DOMAIN } from '@placeos/users';
import { MatDialog } from '@angular/material/dialog';

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
                <a-user-search-field
                    [(ngModel)]="search_user"
                    [guests]="guests"
                    [filter]="filter"
                    error="Click on Add External to add an attendee."
                    [empty_fn]="emptyClick"
                    [validate]="validFn"
                    (ngModelChange)="addUser($event)"
                ></a-user-search-field>
            </div>
            <div class="flex items-center" *ngIf="!hide_actions">
                <button
                    mat-button
                    type="button"
                    name="new-contact"
                    class="clear underline flex-1"
                    (click)="openNewUserModal()"
                    i18n="Add new external attendee"
                >
                    Add External
                </button>
                <button
                    mat-button
                    type="button"
                    class="clear underline flex-1 relative"
                    name="upload-csv"
                    i18n="Upload attendee list from CSV file"
                >
                    Upload CSV
                    <input
                        class="opacity-0 absolute inset-0"
                        type="file"
                        (change)="addUsersFromFile($event)"
                    />
                </button>
                <button
                    mat-button
                    type="button"
                    class="clear underline flex-1"
                    name="download-template"
                    (click)="downloadCSVTemplate()"
                    i18n="Download template CSV file"
                >
                    CSV Template
                </button>
            </div>
            <div
                class="flex flex-col py-2"
                *ngIf="active_list?.length; else empty_state"
            >
                <div
                    user
                    *ngFor="let user of active_list"
                    class="flex items-center space-x-2 p-2 hover:bg-black hover:bg-opacity-5 rounded"
                    (click)="user.is_external ? openNewUserModal(user) : ''"
                >
                    <a-user-avatar
                        [user]="user"
                        [icon]="!user.is_external"
                        [matTooltip]="
                            user.is_external
                                ? 'External Attendee'
                                : 'Staff Attendee'
                        "
                        matTooltipPosition="right"
                    >
                        <div class="h-full w-full bg-success text-white">
                            <app-icon>done</app-icon>
                        </div>
                    </a-user-avatar>
                    <div class="flex-1 w-1/4">
                        <div class="truncate">{{ user.name }}</div>
                        <div class="text-xs truncate">{{ user.email }}</div>
                    </div>
                    <button
                        mat-icon-button
                        type="button"
                        (click)="
                            user.required = !user.required;
                            $event.stopPropagation();
                            setValue(active_list)
                        "
                        [class.bg-success]="user.required"
                        [class.text-white]="user.required"
                        matTooltip="Required"
                        matTooltipPosition="left"
                    >
                        <app-icon>{{
                            user.required ? 'person' : 'person_outline'
                        }}</app-icon>
                    </button>
                    <button
                        mat-icon-button
                        type="button"
                        [disabled]="!user.is_external"
                        (click)="
                            user.visit_expected = !user.visit_expected;
                            $event.stopPropagation();
                            setValue(active_list)
                        "
                        [class.bg-success]="
                            user.is_external && user.visit_expected
                        "
                        [class.text-white]="
                            user.is_external && user.visit_expected
                        "
                        matTooltip="Physical visit expected"
                        matTooltipPosition="left"
                    >
                        <app-icon>meeting_room</app-icon>
                    </button>
                    <button
                        mat-icon-button
                        type="button"
                        [disabled]="!user.is_external"
                        (click)="
                            user.assistance_required = !user.assistance_required;
                            $event.stopPropagation();
                            setValue(active_list)
                        "
                        [class.bg-success]="user.assistance_required"
                        [class.text-white]="user.assistance_required"
                        matTooltip="Assistance Required"
                        matTooltipPosition="left"
                    >
                        <app-icon *ngIf="user.is_external"
                            >contact_support</app-icon
                        >
                    </button>
                    <button
                        mat-icon-button
                        type="button"
                        (click)="removeUser(user); $event.stopPropagation()"
                    >
                        <app-icon>close</app-icon>
                    </button>
                </div>
            </div>
        </div>
        <ng-template #empty_state>
            <div class="m-2 opacity-50 text-center" i18n="Attendee empty state">
                None
            </div>
        </ng-template>
    `,
    styles: [
        `
            button {
                background: transparent;
                border-top: none !important;
                border-bottom: none !important;
            }

            [search] {
                height: 3.5rem;
                margin-top: -0.25rem;
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
    implements ControlValueAccessor {
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

    public search_user: User;

    /** User list to display */
    public user_list: User[] = [];
    /** List of active selected users on the list */
    public active_list: User[] = [];
    /** Whether user list is loading */
    public loading: boolean;

    /** Form control on change handler */
    private _onChange: (_: User[]) => void;
    /** Form control on touch handler */
    private _onTouch: (_: User[]) => void;

    public readonly validFn = (s) => validateEmail(s);
    public readonly emptyClick = () => this.openNewUserModal(new User());

    constructor(
        private _dialog: MatDialog,
        private _settings: SettingsService
    ) {
        super();
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
        this.timeout('clear_user', () => (this.search_user = null), 10);
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
