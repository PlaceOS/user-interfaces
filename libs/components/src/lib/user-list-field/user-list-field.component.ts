import { Component, OnInit, forwardRef, Output, EventEmitter, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseClass, csvToJson, downloadFile, notifyError } from '@user-interfaces/common';
import { Subject, Observable } from 'rxjs';
import {
    switchMap,
    debounceTime,
    distinctUntilChanged,
    map,
    filter,
} from 'rxjs/operators';

import { User } from '../../../../users/src/lib/user.class';
import { StaffService } from '../../../../users/src/lib/staff.service';
import { GuestsService } from '../../../../users/src/lib/guests.service';


@Component({
    selector: 'a-user-list-field',
    templateUrl: './user-list-field.component.html',
    styleUrls: ['./user-list-field.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => UserListFieldComponent),
            multi: true,
        },
    ],
})
export class UserListFieldComponent extends BaseClass implements OnInit, ControlValueAccessor {
    /** Whether form field is disabled */
    @Input() public disabled: boolean;
    /** Number of characters needed before a search will start */
    @Input() public limit: number = 3;
    /** Emitter for action to make a new user */
    @Output() public new_user = new EventEmitter<void>();

    /** User list to display */
    public user_list: User[];
    /** List of active selected users on the list */
    public active_list: User[];
    /** Whether user list is loading */
    public loading: boolean;
    /** String  */
    public search_str: string;
    /** List of users from an API search */
    public search_results$: Observable<User[]>;
    /** Subject holding the value of the search */
    public search$ = new Subject<string>();

    /** Form control on change handler */
    private _onChange: (_: User[]) => void;
    /** Form control on touch handler */
    private _onTouch: (_: User[]) => void;

    constructor(private _users: StaffService, private _guests: GuestsService) {
        super();
    }

    public ngOnInit() {
        // Listen for input changes
        this.search_results$ = this.search$.pipe(
            debounceTime(400),
            distinctUntilChanged(),
            filter((query) => query.length >= this.limit),
            switchMap((query) => {
                this.loading = true;
                return Promise.all([
                    this._users.query({
                        q: query,
                        cache: 60 * 1000,
                    }),
                    this._guests.query({ q: query }),
                ])
                    .then(([users, guests]) => [
                        ...users,
                        ...guests.map((i) => {
                            i.visit_expected = true;
                            return i;
                        }),
                    ])
                    .catch(() => []);
            }),
            map((list: User[]) => {
                this.loading = false;
                const search = this.search_str.toLowerCase();
                return list.filter(
                    (item) =>
                        item.name.toLowerCase().includes(search) ||
                        item.email.toLowerCase().includes(search)
                );
            })
        );
        // Process API results
        this.subscription(
            'search_results',
            this.search_results$.subscribe((list) => (this.user_list = list))
        );
    }

    /**
     * Add user to the user list
     * @param user
     */
    public addUser(user: User) {
        /* istanbul ignore else */
        if (!this.active_list) {
            this.active_list = [];
        }
        const index = this.active_list.findIndex((a_user) => a_user.email === user.email);
        /* istanbul ignore else */
        if (index < 0) {
            this.active_list = [...this.active_list, user];
        }
        this.setValue(this.active_list);
        this.search_str = '';
    }

    /**
     * Remove user from the user list
     * @param user
     */
    public removeUser(user: User) {
        this.active_list = this.active_list.filter((a_user) => a_user.email !== user.email);
        this.setValue(this.active_list);
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
                reader.addEventListener('error', (_) => notifyError('Error reading file.'));
            }
        }
    }

    /**
     * Process raw CSV data and save user data to attendee list
     * @param data CSV data
     */
    private processCsvData(data: string) {
        const list = csvToJson(data) || [];
        const id = this._users.current.staff_id;
        list.forEach((el) => {
            el.name = el.name || `${el.first_name} ${el.last_name}`;
            const display = (el.name || `${Math.floor(Math.random() * 9999_9999)}`)
                .split(' ')
                .join('_')
                .toLowerCase();
            /* istanbul ignore else */
            if (!el.email) {
                el.email = `${display}+${id}@guest.com`;
            }
            el.visit_expected = !el.email.endsWith('pwc.com');
            this.addUser(new User(el));
        });
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
}
