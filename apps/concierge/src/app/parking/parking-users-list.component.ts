import { Component } from '@angular/core';
import { ParkingStateService, ParkingUser } from './parking-state.service';
import { FormControl, FormGroup } from '@angular/forms';
import { map, take } from 'rxjs/operators';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { randomInt } from '@placeos/common';

const generateUserForm = (user?: ParkingUser) =>
    new FormGroup({
        id: new FormControl(user.id || ''),
        email: new FormControl(user.email || ''),
        name: new FormControl(user.name || ''),
        transponder: new FormControl(user.transponder || ''),
        designation: new FormControl(user.designation || ''),
        car_model: new FormControl(user.car_model || ''),
        car_colour: new FormControl(user.car_colour || ''),
        plate_number: new FormControl(user.plate_number || ''),
        phone: new FormControl(user.phone || ''),
        notes: new FormControl(user.notes || ''),
    });

@Component({
    selector: 'parking-users-list',
    template: `
        <div class="absolute inset-0 overflow-auto px-2">
            <custom-table
                class="block min-w-[96rem]"
                [dataSource]="user_list"
                [columns]="[
                    'email',
                    'transponder',
                    'designation',
                    'car_model',
                    'car_colour',
                    'plate_number',
                    'phone',
                    'notes',
                    'actions'
                ]"
                [display_column]="['', '', '', '', '', '', '', '', ' ']"
                [column_size]="[
                    '14r',
                    '10r',
                    '10r',
                    '10r',
                    '10r',
                    '10r',
                    '10r',
                    'flex'
                ]"
                [template]="{
                    email: text_input_template,
                    name: text_input_template,
                    transponder: text_input_template,
                    designation: text_input_template,
                    car_model: text_input_template,
                    car_colour: text_input_template,
                    plate_number: text_input_template,
                    phone: text_input_template,
                    notes: text_input_template,
                    actions: action_template
                }"
                [filter]="(options | async).search"
                [class.opacity-50]="(loading | async)?.includes('users')"
            ></custom-table>
            <ng-template
                #text_input_template
                let-form="row"
                let-key="key"
                let-name="name"
            >
                <input
                    [ngModel]="form.value[key]"
                    (ngModelChange)="form.get(key).setValue($event)"
                    [placeholder]="name"
                    class="relative -top-px border-none px-2 py-4 -m-2 text-base w-full !outline-none focus:border-b border-blue-600"
                />
            </ng-template>
            <ng-template #action_template let-form="row">
                <div class="w-full flex items-center justify-end">
                    <app-icon
                        *ngIf="
                            deletion.has(form.value.id) ||
                            form.dirty ||
                            isNew(form.value.id)
                        "
                        [class.text-red-600]="deletion.has(form.value.id)"
                        [class.text-yellow-400]="!deletion.has(form.value.id)"
                    >
                        warning
                    </app-icon>
                    <button
                        btn
                        icon
                        *ngIf="!deletion.has(form.value.id)"
                        (click)="markForDelete(form.value.id)"
                        [matTooltip]="
                            isNew(form.value.id)
                                ? 'Remove New User'
                                : 'Mark for Deletion'
                        "
                    >
                        <app-icon>delete</app-icon>
                    </button>
                    <button
                        btn
                        icon
                        *ngIf="deletion.has(form.value.id) || form.dirty"
                        matTooltip="Clear Changes"
                        (click)="clearChanges(id)"
                    >
                        <app-icon>clear_all</app-icon>
                    </button>
                </div>
            </ng-template>
        </div>
        <button
            btn
            icon
            matRipple
            class="absolute bottom-2 left-2 bg-primary text-white"
            (click)="newUser()"
        >
            <app-icon>add</app-icon>
        </button>
        <div
            class="absolute bottom-2 right-2 bg-base-100 border border-base-200 p-2 text-base rounded shadow space-y-2"
            *ngIf="
                deletion.entries.length ||
                (change_count | async) ||
                (new_items | async).length
            "
        >
            <div
                class="flex items-center space-x-2 p-2"
                *ngIf="deletion.entries.length"
            >
                <app-icon class="text-red-600 text-2xl">warning</app-icon>
                <div>{{ deletion.entries.length }} users pending deletion</div>
            </div>
            <div
                class="flex items-center space-x-2 p-2"
                *ngIf="(new_items | async).length"
            >
                <app-icon class="text-yellow-400 text-2xl">warning</app-icon>
                <div>
                    {{ (new_items | async).length }} new users pending save
                </div>
            </div>
            <div
                class="flex items-center space-x-2 p-2"
                *ngIf="change_count | async"
            >
                <app-icon class="text-yellow-400 text-2xl">warning</app-icon>
                <div>{{ change_count | async }} users with pending changes</div>
            </div>
            <button btn class="w-full">Save Changes</button>
        </div>
    `,
    styles: [``],
})
export class ParkingUsersListComponent {
    public readonly options = this._state.options;
    public readonly loading = this._state.loading;
    public readonly forms = this._state.users.pipe(
        map((_) => _.map((u) => generateUserForm(u)))
    );
    public readonly new_items = new BehaviorSubject<FormGroup[]>([]);
    public readonly user_list = combineLatest([
        this.forms,
        this.new_items,
    ]).pipe(map(([a, b]) => [...a, ...b]));
    public readonly change_count = this.user_list.pipe(
        map((_) => _.filter((f) => f.dirty || !this.isNew(f.value.id)).length)
    );
    public deletion = new Set<string>();

    public isNew(id: string) {
        return !!this.new_items.getValue().find((_) => _.value.id === id);
    }

    constructor(private _state: ParkingStateService) {}

    public markForDelete(id) {
        if (this.isNew(id)) {
            this.new_items.next(
                this.new_items.getValue().filter((_) => _.value.id !== id)
            );
        } else this.deletion.add(id);
    }

    public async clearChanges(id) {
        if (this.isNew(id)) {
            const new_items = this.new_items.getValue();
            const item = new_items.find((_) => _.value.id === id);
            if (item) {
                item.reset({ id });
            }
        } else {
            const list = await this.user_list.pipe(take(1)).toPromise();
            const users = await this._state.users.pipe(take(1)).toPromise();
            const item = list.find((_) => _.value.id === id);
            const user = users.find((_) => _.id === id);
            if (item && user) item.reset(user);
        }
    }

    public newUser() {
        const form = generateUserForm({
            id: `parking-${randomInt(99999999, 10000000)}`,
        } as any);
        this.new_items.next([...this.new_items.getValue(), form]);
    }

    public async saveChanges() {
        const list = await this.user_list.pipe(take(1)).toPromise();
        const users = list
            .map((_) => _.value)
            .filter((_) => !this.deletion.has(_.id));
        await this._state.saveUsers(users);
    }
}
