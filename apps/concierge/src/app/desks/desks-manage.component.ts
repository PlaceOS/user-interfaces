import { Component, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    AsyncHandler,
    SettingsService,
    csvToJson,
    i18n,
    loadTextFileFromInputEvent,
    notifyError,
    notifySuccess,
    openConfirmModal,
    randomInt,
} from '@placeos/common';
import { Desk, OrganisationService } from '@placeos/organisation';
import { updateMetadata } from '@placeos/ts-client';
import { generateQRCode } from 'libs/common/src/lib/qr-code';
import { take } from 'rxjs/operators';
import { DesksStateService } from './desks-state.service';
import { Clipboard } from '@angular/cdk/clipboard';

const QR_CODES = {};

@Component({
    selector: 'desks-manage',
    template: `
        <div
            class="overflow-auto h-full w-full pb-4"
            (dragenter)="handleDrag('enter', $event)"
            (window:dragend)="handleDrag('end', $event)"
        >
            <simple-table
                class="min-w-[72rem] w-full block text-sm"
                [filter]="(filters | async)?.search"
                [data]="desks"
                [columns]="[
                    {
                        key: 'id',
                        name: 'APP.CONCIERGE.DESKS_ID' | translate,
                        content: name_template,
                        size: '10rem',
                    },
                    {
                        key: 'name',
                        name: 'APP.CONCIERGE.DESKS_NAME' | translate,
                    },
                    {
                        key: 'groups',
                        name: 'COMMON.GROUPS' | translate,
                        content: item_list_template,
                    },
                    {
                        key: 'features',
                        name: 'COMMON.FEATURES' | translate,
                        content: item_list_template,
                    },
                    {
                        key: 'bookable',
                        name: 'COMMON.BOOKABLE' | translate,
                        content: bool_template,
                        size: '5.5rem',
                    },
                    {
                        key: 'actions',
                        name: ' ',
                        content: action_template,
                        size: '8.5rem',
                        sortable: false,
                    },
                ]"
                [sortable]="true"
                [empty_message]="
                    ((filters | async)?.search
                        ? 'APP.CONCIERGE.DESKS_MANAGE_SEARCH_EMPTY'
                        : 'APP.CONCIERGE.DESKS_MANAGE_EMPTY'
                    ) | translate
                "
            ></simple-table>
            <ng-template #name_template let-row="row">
                <button
                    class="flex flex-col px-4 py-2 text-left leading-tight"
                    (click)="copyToClipboard(row.map_id || row.id)"
                >
                    <div>{{ row.id || row.map_id }}</div>
                    <div
                        *ngIf="row.id && row.map_id !== row.id"
                        class="text-[0.625rem] opacity-30 font-mono"
                    >
                        {{ row.map_id }}
                    </div>
                </button>
            </ng-template>
            <ng-template #item_list_template let-data="data">
                <div class="flex flex-wrap p-2">
                    <span
                        class="m-1 py-1 px-2 rounded-2xl text-xs font-mono bg-info text-info-content"
                        *ngFor="let item of data"
                    >
                        {{ item }}
                    </span>
                </div>
            </ng-template>
            <ng-template #bool_template let-data="data">
                <div
                    [class.bg-error]="!data"
                    [class.bg-success]="data"
                    class="rounded h-8 w-8 flex items-center justify-center text-2xl text-white mx-auto"
                >
                    <app-icon>{{ data ? 'done' : 'close' }}</app-icon>
                </div>
            </ng-template>
            <ng-template #action_template let-row="row">
                <div class="flex items-center justify-end space-x-2 p-2">
                    <button
                        icon
                        matRipple
                        customTooltip
                        [content]="qr_menu"
                        [matTooltip]="
                            'APP.CONCIERGE.DESKS_ACTION_PRINT_QR' | translate
                        "
                        (click)="loadQrCode(row)"
                    >
                        <app-icon>qr_code</app-icon>
                    </button>
                    <button
                        icon
                        matRipple
                        [matTooltip]="
                            'APP.CONCIERGE.DESKS_ACTION_EDIT' | translate
                        "
                        (click)="editDesk(row)"
                    >
                        <app-icon>edit</app-icon>
                    </button>
                    <button
                        icon
                        matRipple
                        [matTooltip]="
                            'APP.CONCIERGE.DESKS_ACTION_REMOVE' | translate
                        "
                        (click)="removeDesk(row)"
                    >
                        <app-icon class="text-error">delete</app-icon>
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
                                {{
                                    'APP.CONCIERGE.DESKS_ACTION_PRINT_QR'
                                        | translate
                                }}
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
                        {{ 'APP.CONCIERGE.DESKS_DROP_TEMPLATE' | translate }}
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
    public loading: string;
    public dragging = false;
    public readonly filters = this._state.filters;
    public readonly desks = this._state.desks;

    public readonly editDesk = (desk?: Desk) => this._state.editDesk(desk);

    constructor(
        private _state: DesksStateService,
        private _org: OrganisationService,
        private _dialog: MatDialog,
        private _settings: SettingsService,
        private _element: ElementRef,
        private _clipboard: Clipboard,
    ) {
        super();
    }

    public readonly copyToClipboard = (id: string) => {
        const success = this._clipboard.copy(id);
        if (success) notifySuccess(i18n('APP.CONCIERGE.DESKS_ID_COPIED'));
    };

    public async removeDesk(desk: Desk) {
        const resp = await openConfirmModal(
            {
                title: i18n('APP.CONCIERGE.DESKS_REMOVE_TITLE'),
                content: i18n('APP.CONCIERGE.DESKS_REMOVE_MSG', {
                    name: desk.name,
                }),
                icon: { content: 'delete' },
            },
            this._dialog,
        );
        if (resp.reason !== 'done') return;
        resp.close();
        const desks = await this.desks.pipe(take(1)).toPromise();
        const updated_desks = desks.filter((_) => _.id !== desk.id);
        const filters = await this.filters.pipe(take(1)).toPromise();
        const level = this._org.levelWithID(filters.zones);
        this.loading = i18n('APP.CONCIERGE.DESKS_REMOVE_LOADING');
        await updateMetadata(level.id, {
            name: 'desks',
            description: 'desks',
            details: updated_desks,
        })
            .toPromise()
            .catch((e) => {
                this.loading = '';
                notifyError(
                    i18n('APP.CONCIERGE.DESKS_REMOVE_ERROR', {
                        error: e.message || e,
                    }),
                );
                throw e;
            });
        notifySuccess(i18n('APP.CONCIERGE.DESKS_REMOVE_SUCCESS'));
        this._state.setFilters({});
        this.loading = '';
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
        this.loading = i18n('APP.CONCIERGE.DESKS_UPLOADING');
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
                        }),
                ),
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
