import { Component } from '@angular/core';
import { notifyError, notifySuccess } from '@placeos/common';
import { Desk, OrganisationService } from '@placeos/organisation';
import { updateMetadata } from '@placeos/ts-client';
import { take } from 'rxjs/operators';
import { DesksStateService } from './desks-state.service';

@Component({
    selector: 'desks-manage',
    template: `
        <custom-table
            class="min-w-[72rem] block"
            [dataSource]="desks"
            [filter]="(filters | async)?.search"
            [columns]="[
                'id',
                'bookable',
                'name',
                'groups',
                'features',
                'actions'
            ]"
            [display_column]="[
                'ID',
                'Bookable',
                'Name',
                'Groups',
                'Features',
                ' '
            ]"
            [column_size]="['8r', '6r', '12r', 'flex', '16r', '10r']"
            [template]="{
                id: text_edit_template,
                name: text_edit_template,
                bookable: bookable_edit_template,
                groups: list_edit_template,
                features: list_edit_template,
                actions: action_template
            }"
            [empty]="
                (filters | async)?.search
                    ? 'No matching desks'
                    : 'No desks for selected level'
            "
        ></custom-table>
        <ng-template
            #list_edit_template
            let-data="data"
            let-row="row"
            let-key="key"
        >
            <item-list-field
                class="w-full"
                hide-outline
                [placeholder]="key === 'groups' ? 'User Groups' : 'Features'"
                [ngModel]="(changes[row.id] ? changes[row.id][key] : null) ?? data"
                (ngModelChange)="
                    changes[row.id] && changes[row.id][key]
                        ? ''
                        : (changes[row.id] = {});
                    changes[row.id][key] = $event
                "
            >
            </item-list-field>
        </ng-template>
        <ng-template
            #text_edit_template
            let-data="data"
            let-row="row"
            let-key="key"
        >
            <div class="w-full h-12" hide-outline>
                <mat-form-field class="h-12 w-full" appearance="outline">
                    <input
                        matInput
                        [placeholder]="key"
                        [ngModel]="(changes[row.id] ? changes[row.id][key] : null) ?? data"
                        (ngModelChange)="
                            changes[row.id] && changes[row.id][key]
                                ? ''
                                : (changes[row.id] = {});
                            changes[row.id][key] = $event
                        "
                    />
                </mat-form-field>
            </div>
        </ng-template>
        <ng-template #bookable_edit_template let-data="data" let-row="row">
            <div class="flex items-center justify-center pl-4">
                <mat-checkbox
                    [ngModel]="changes[row.id]?.bookable ?? data"
                    (ngModelChange)="
                        changes[row.id]
                            ? (changes[row.id].bookable = $event)
                            : (changes[row.id] = { bookable: $event })
                    "
                ></mat-checkbox>
            </div>
        </ng-template>
        <ng-template #action_template let-row="row">
            <div class="flex items-center justify-end space-x-2">
                <div
                    class="p-2 text-2xl text-pending"
                    [class.opacity-0]="!changes[row.id]"
                    matTooltip="Desk has unsaved changes"
                >
                    <app-icon>warning</app-icon>
                </div>
                <button mat-icon-button (click)="removeDesk(row)">
                    <app-icon>delete</app-icon>
                </button>
                <button
                    mat-icon-button
                    [disabled]="!row.qr_code"
                    [matMenuTriggerFor]="menu"
                >
                    <app-icon *ngIf="row.qr_code">qr_code</app-icon>
                </button>
                <mat-menu #menu="matMenu">
                    <div class="p-2 mx-4 my-2 rounded-lg border border-black">
                        <img class="w-48" [src]="row.qr_code" />
                    </div>
                    <div mat-menu-item class="underline">
                        <button mat-button class="w-full">Print QR Code</button>
                    </div>
                </mat-menu>
            </div>
        </ng-template>
        <div
            class="fixed bottom-2 left-1/2 transform -translate-x-1/2 p-4 rounded bg-white shadow"
            *ngIf="changed > 0"
        >
            <p class="mb-2 text-xl">
                {{ changed }} Desk(s) with unsaved changes
            </p>
            <div class="flex items-center justify-center">
                <button save mat-button (click)="save()">Save Changes</button>
            </div>
        </div>
        <div
            class="absolute inset-0 flex flex-col items-center justify-center space-y-2 bg-white bg-opacity-60"
            *ngIf="loading"
        >
            <mat-spinner diameter="32"></mat-spinner>
            <p>{{ loading }}</p>
        </div>
    `,
    styles: [``],
})
export class DesksManageComponent {
    public changes = {};
    public loading: string;
    public readonly filters = this._state.filters;
    public readonly desks = this._state.desks;

    public get changed() {
        return Object.keys(this.changes).length;
    }

    public async save() {
        this.loading = 'Saving changes to desks...';
        const desks = await this.desks.pipe(take(1)).toPromise();
        const updated_desks = desks.map((_) =>
            new Desk({ ..._, ...(this.changes[_.id] || {}) }).toJSON()
        );
        const filters = await this.filters.pipe(take(1)).toPromise();
        const level = this._org.levelWithID(filters.zones);
        await updateMetadata(level.id, {
            name: 'desks',
            description: 'desks',
            details: updated_desks,
        })
            .toPromise()
            .catch((e) => {
                this.loading = '';
                notifyError(`Error saving desk data. Error: ${e.message || e}`);
                throw e;
            });
        notifySuccess('Successfully updated desks');
        this.loading = '';
        this.changes = {};
    }

    constructor(
        private _state: DesksStateService,
        private _org: OrganisationService
    ) {}
}
