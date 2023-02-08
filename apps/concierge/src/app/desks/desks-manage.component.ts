import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    AsyncHandler,
    csvToJson,
    loadTextFileFromInputEvent,
    notifyError,
    notifySuccess,
    openConfirmModal,
    randomInt,
    unique,
} from '@placeos/common';
import { Desk, OrganisationService } from '@placeos/organisation';
import { updateMetadata } from '@placeos/ts-client';
import { generateQRCode } from 'libs/common/src/lib/qr-code';
import { combineLatest } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { DesksStateService } from './desks-state.service';

const QR_CODES = {};

@Component({
    selector: 'desks-manage',
    template: `
        <div
            class="w-full h-full overflow-auto relative"
            (dragenter)="handleDrag('enter', $event)"
            (window:dragend)="handleDrag('end', $event)"
        >
            <custom-table
                class="min-w-[72rem] block"
                [dataSource]="desks"
                [filter]="(filters | async)?.search"
                [columns]="[
                    'map_id',
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
                    map_id: text_edit_template,
                    name: text_edit_template,
                    bookable: bookable_edit_template,
                    groups: list_edit_template,
                    features: list_edit_template,
                    actions: action_template
                }"
                [pagination]="true"
                [page_size]="30"
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
                    [placeholder]="
                        key === 'groups' ? 'User Groups' : 'Features'
                    "
                    [name]="key"
                    [ngModel]="
                        (changes[row.id] ? changes[row.id][key] : null) || data
                    "
                    (ngModelChange)="setRowValue(row.id, key, $event)"
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
                            [name]="key"
                            [ngModel]="
                                (changes[row.id]
                                    ? changes[row.id][key]
                                    : null) || data
                            "
                            (ngModelChange)="setRowValue(row.id, key, $event)"
                        />
                    </mat-form-field>
                </div>
            </ng-template>
            <ng-template #bookable_edit_template let-data="data" let-row="row">
                <div class="flex items-center justify-center pl-4">
                    <mat-checkbox
                        [ngModel]="changes[row.id]?.bookable ?? data"
                        (ngModelChange)="
                            setRowValue(row.id, 'bookable', $event)
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
                    <button icon (click)="removeDesk(row)">
                        <app-icon>delete</app-icon>
                    </button>
                    <button
                        icon
                        matRipple
                        [matMenuTriggerFor]="menu"
                        (click)="loadQrCode(row)"
                    >
                        <app-icon>qr_code</app-icon>
                    </button>
                    <mat-menu #menu="matMenu">
                        <div
                            class="p-2 mx-4 my-2 rounded-lg border border-black"
                        >
                            <img class="w-48" [src]="row.qr_code" />
                        </div>
                        <div mat-menu-item class="underline">
                            <button btn matRipple class="w-full">
                                Print QR Code
                            </button>
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
                    <button save btn matRipple (click)="save()">
                        Save Changes
                    </button>
                </div>
            </div>
            <div
                class="absolute inset-0 flex flex-col items-center justify-center space-y-2 bg-white bg-opacity-60"
                *ngIf="loading"
            >
                <mat-spinner diameter="32"></mat-spinner>
                <p>{{ loading }}</p>
            </div>
            <div
                *ngIf="dragging"
                class="absolute inset-0 bg-black/60 flex items-center justify-center"
            >
                <div class="bg-white p-4 rounded shadow">
                    <div
                        class="border-4 border-gray-300 border-dashed rounded flex flex-col items-center justify-center w-64 h-64"
                    >
                        Drop CSV file to add desks
                    </div>
                </div>
                <input
                    type="file"
                    class="absolute inset-0 opacity-0"
                    (change)="loadCSVData($event)"
                />
            </div>
        </div>
    `,
    styles: [``],
})
export class DesksManageComponent extends AsyncHandler {
    public changes = {};
    public loading: string;
    public dragging = false;
    public readonly filters = this._state.filters;
    public readonly desks = combineLatest([
        this._state.desks,
        this._state.new_desks,
    ]).pipe(map(([d, n]) => d.concat(n)));

    public get changed() {
        return (
            (Object.keys(this.changes).length || 0) +
            (this._state.new_desk_count || 0)
        );
    }

    public setRowValue(id: string, key: string, value: any) {
        if (!this.changes[id]) this.changes[id] = {};
        this.changes[id][key] = value;
    }

    public async removeDesk(desk: Desk) {
        const resp = await openConfirmModal(
            {
                title: 'Remove desk',
                content: `Remove desk ${desk.name}?`,
                icon: { content: 'delete' },
            },
            this._dialog
        );
        if (resp.reason !== 'done') return;
        resp.close();
        const desks = await this.desks.pipe(take(1)).toPromise();
        const updated_desks = desks.filter((_) => _.id !== desk.id);
        const filters = await this.filters.pipe(take(1)).toPromise();
        const level = this._org.levelWithID(filters.zones);
        this.loading = 'Removing desk...';
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

    public async save() {
        this.loading = 'Saving changes to desks...';
        const desks = await this.desks.pipe(take(1)).toPromise();
        const updated_desks = unique(
            desks.map((_) =>
                new Desk({ ..._, ...(this.changes[_.id] || {}) }).toJSON()
            ),
            'id'
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
                const msg =
                    e?.status === 403
                        ? 'You do not have the required permissions to save desk changes.'
                        : e.message || e;
                notifyError(`Error saving desk data. Error: ${msg}`);
                throw e;
            });
        notifySuccess('Successfully updated desks');
        this._state.clearNewDesks();
        this.loading = '';
        this.changes = {};
    }

    public loadQrCode(item: any) {
        item.qr_code = generateQRCode(
            `${
                location.origin
            }/workplace/#/book/code?asset_id=${encodeURIComponent(item.id)}`
        );
    }

    constructor(
        private _state: DesksStateService,
        private _org: OrganisationService,
        private _dialog: MatDialog
    ) {
        super();
    }

    public async loadCSVData(event: InputEvent) {
        this.loading = 'Loading CSV file...';
        this.dragging = false;
        const data = await loadTextFileFromInputEvent(event).catch(([m, e]) => {
            notifyError(m);
            throw e;
        });
        try {
            const list = csvToJson(data) || [];
            this._state.addDesks(
                list.map(
                    (_) =>
                        new Desk({
                            ..._,
                            id: _.id || `desk-${randomInt(999_999)}`,
                        })
                )
            );
        } catch (e) {
            console.error(e);
        }
        this.loading = '';
    }

    public handleDrag(type: 'enter' | 'leave' | 'end', event: DragEvent) {
        this.dragging = type === 'enter';
    }
}
