import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    AsyncHandler,
    SettingsService,
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
        <div class="w-full h-4"></div>
        <div
            class="w-full relative pl-8 pb-4"
            [style.margin-bottom]="changed > 0 ? '4rem' : ''"
            (dragenter)="handleDrag('enter', $event)"
            (window:dragend)="handleDrag('end', $event)"
        >
            <custom-table
                class="min-w-[76rem] block"
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
                [column_size]="['12r', '6r', '12r', 'flex', '16r', '10r']"
                [template]="{
                    map_id: text_edit_template,
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
                [reset_page]="page_reset"
                [pagination]="true"
                [page_size]="20"
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
                        class="p-2 text-2xl text-warning"
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
                        customTooltip
                        [content]="qr_menu"
                        (click)="loadQrCode(row)"
                    >
                        <app-icon>qr_code</app-icon>
                    </button>
                    <ng-template #qr_menu>
                        <div class="bg-base-100 py-2 shadow rounded">
                            <div class="" printable>
                                <a
                                    [href]="row.qr_link | safe: 'url'"
                                    target="_blank"
                                    ref="noopener noreferrer"
                                    class="block p-2 mx-4 my-2 rounded-lg border border-base-200 bg-base-100"
                                >
                                    <img class="w-48" [src]="row.qr_code" />
                                </a>
                                <div
                                    class="w-[calc(100%-2rem)] text-center mt-2 font-mono text-sm bg-base-200 rounded p-2 mx-4"
                                >
                                    {{ row.name || row.id }}
                                </div>
                            </div>
                            <button
                                btn
                                matRipple
                                class="w-[calc(100%-2rem)] mx-4 my-2"
                                (click)="print()"
                            >
                                Print QR Code
                            </button>
                        </div>
                    </ng-template>
                </div>
            </ng-template>
            <div
                class="absolute inset-0 flex flex-col items-center justify-center space-y-2 bg-base-100 bg-opacity-60"
                *ngIf="loading"
            >
                <mat-spinner diameter="32"></mat-spinner>
                <p>{{ loading }}</p>
            </div>
            <div
                *ngIf="dragging"
                class="absolute inset-0 bg-neutral flex items-center justify-center"
            >
                <div class="bg-base-100 p-4 rounded shadow">
                    <div
                        class="border-4 border-base-200 border-dashed rounded flex flex-col items-center justify-center w-64 h-64"
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
        <div
            class="fixed bottom-0 left-64 right-0 p-2 bg-base-100 shadow border-t border-base-200 flex items-center justify-center space-x-4"
            *ngIf="changed > 0"
        >
            <p class="flex-1 text-center pl-8">
                {{ changed }} Desk(s) with unsaved changes
            </p>
            <div class="flex items-center justify-center space-x-2">
                <button clear btn matRipple class="inverse" (click)="clear()">
                    Clear Changes
                </button>
                <button save btn matRipple (click)="save()">
                    Save Changes
                </button>
            </div>
        </div>
    `,
    styles: [``],
})
export class DesksManageComponent extends AsyncHandler {
    public changes: Record<string, Partial<Desk>> = {};
    public loading: string;
    public dragging = false;
    public page_reset = 0;
    public readonly filters = this._state.filters;
    public readonly desks = combineLatest([
        this._state.new_desks,
        this._state.desks,
    ]).pipe(map(([d, n]) => d.concat(n)));

    public get changed() {
        return Object.keys(this.changes).length || 0;
    }

    constructor(
        private _state: DesksStateService,
        private _org: OrganisationService,
        private _dialog: MatDialog,
        private _settings: SettingsService,
        private _element: ElementRef
    ) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'new_desks',
            this._state.new_desks.subscribe((desks) => {
                this.page_reset = Date.now();
                const el = this._element?.nativeElement?.parentElement;
                if (el) el.scrollTop = 0;
                for (const desk of desks) {
                    this.changes[desk.id] = {};
                }
            })
        );
    }

    public setRowValue<K extends keyof Desk>(
        id: string,
        key: K,
        value: Desk[K]
    ): void {
        if (!this.changes[id]) this.changes[id] = {};
        this.changes[id][key] = value;
    }

    public async removeDesk(desk: Desk) {
        const new_desks = await this._state.new_desks.pipe(take(1)).toPromise();
        if (new_desks.find((_) => _.id === desk.id)) {
            delete this.changes[desk.id];
            return this._state.removeNewDesk(desk);
        }
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
        delete this.changes[desk.id];
        notifySuccess('Successfully updated desks');
        this._state.setFilters({});
        this.loading = '';
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

    public clear() {
        this._state.clearNewDesks();
        this.changes = {};
    }

    public get kiosk_url() {
        const path =
            this._settings.get('app.workplace_url_path') || '/workplace';
        return `${window.location.origin}${path}`;
    }

    public loadQrCode(item: any) {
        const link = `${
            this.kiosk_url
        }/#/book/code?asset_id=${encodeURIComponent(item.id)}`;
        item.qr_link = link;
        item.qr_code = generateQRCode(link);
    }

    public print() {
        window.print();
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
