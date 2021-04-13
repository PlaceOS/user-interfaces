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
} from '@placeos/common';
import { first } from 'rxjs/operators';

import { NewUserModalComponent, User, USER_DOMAIN } from '@placeos/users';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'a-user-list-field',
    template: `
        <div
            class="mb-4 border border-grey-200 rounded bg-white text-black"
            form-field
            [attr.disabled]="disabled"
        >
            <div search>
                <a-user-search-field
                    [(ngModel)]="search_user"
                    [guests]="guests"
                    [filter]="filter"
                    (ngModelChange)="addUser($event)"
                ></a-user-search-field>
            </div>
            <div class="p-2 -mt-2 border-b border-grey-200">
                <mat-chip-list
                    aria-label="User List"
                    *ngIf="active_list && active_list.length; else empty_state"
                >
                    <mat-chip
                        *ngFor="let user of active_list"
                        [id]="user.email"
                        [attr.color]="
                            !user.is_external ? 'internal' : 'external'
                        "
                        [removable]="true"
                        (removed)="removeUser(user)"
                    >
                        {{ user.name }}
                        <app-icon matChipRemove>close</app-icon>
                    </mat-chip>
                </mat-chip-list>
            </div>
            <div
                class="flex items-center border-t border-gray-300 divide-x divide-gray-300"
                *ngIf="!hide_actions"
            >
                <button
                    mat-button
                    name="new-contact"
                    class="clear underline flex-1"
                    (click)="openNewUserModal()"
                    i18n="Add new external attendee"
                >
                    Add External
                </button>
                <button
                    mat-button
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
                    class="clear underline flex-1"
                    name="download-template"
                    (click)="downloadCSVTemplate()"
                    i18n="Download template CSV file"
                >
                    CSV Template
                </button>
            </div>
        </div>
        <ng-template #empty_state>
            <div class="m-2" i18n="Attendee empty state">No attendees</div>
        </ng-template>
    `,
    styles: [
        `
            button {
                background: transparent;
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

    constructor(private _dialog: MatDialog) {
        super();
    }

    /**
     * Add user to the user list
     * @param user
     */
    public addUser(user: User) {
        console.log('Add User:', user);
        const index = this.active_list.findIndex(
            (a_user) => a_user.email === user.email
        );
        let list = [...this.active_list];
        /* istanbul ignore else */
        if (index < 0) list = [...this.active_list, user];
        this.setValue(list);
        this.search_user = null;
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
        console.log('List:', list);
        for (const el of list) {
            console.log('Element:', el);
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
            el.visit_expected = !el.email.endsWith('place.tech');
            this.addUser(new User(el));
            console.log('List:', this.active_list);
        }
        console.log('Finished processing CSV', this.active_list);
    }

    /* istanbul ignore next */
    /** Download template CSV file */
    public downloadCSVTemplate() {
        const template = `Organisation,First Name,Last Name,Email,Phone,Assistance Required\nFake Org,John,Smith,john.smith@example.com,01234567898, yes`;
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
     * Open modal to change the recurrence details for the booking
     */
    public openNewUserModal() {
        const ref = this._dialog.open<NewUserModalComponent>(
            NewUserModalComponent,
            {
                width: 'auto',
                height: 'auto',
                data: {},
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
