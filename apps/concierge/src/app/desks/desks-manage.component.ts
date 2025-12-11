import { Clipboard } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import { Component, computed, ElementRef, inject, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
    AsyncHandler,
    csvToJson,
    Desk,
    generateQRCode,
    i18n,
    loadTextFileFromInputEvent,
    notifyError,
    notifySuccess,
    OrganisationService,
    randomInt,
    SettingsService,
} from '@placeos/common';
import {
    CustomTooltipComponent,
    IconComponent,
    openConfirmModal,
    PrintableComponent,
    SafePipe,
    SimpleTableComponent,
    TranslatePipe,
} from '@placeos/components';
import { updateMetadata } from '@placeos/ts-client';
import { DesksStateService } from './desks-state.service';

const QR_CODES = {};

@Component({
    selector: 'desks-manage',
    template: `
        <div
            class="h-full w-full overflow-auto pb-4"
            (dragenter)="handleDrag('enter', $event)"
            (window:dragend)="handleDrag('end', $event)"
        >
            <simple-table
                class="block w-full min-w-[72rem] text-sm"
                [filter]="filters().search"
                [data]="desks()"
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
                        key: 'assigned_to',
                        name: 'Assigned',
                        content: assigned_template,
                    },
                    {
                        key: 'features',
                        name: 'COMMON.FEATURES' | translate,
                        content: item_list_template,
                    },
                    {
                        key: 'security',
                        name: 'APP.CONCIERGE.DESKS_SECURITY' | translate,
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
                    (filters().search
                        ? 'APP.CONCIERGE.DESKS_MANAGE_SEARCH_EMPTY'
                        : 'APP.CONCIERGE.DESKS_MANAGE_EMPTY'
                    ) | translate
                "
            ></simple-table>
            <ng-template #name_template let-row="row">
                <button
                    class="flex flex-col px-4 py-2 text-left leading-tight"
                    (click)="copyToClipboard(row.client_id || row.map_id || row.id)"
                >
                    <div>{{ row.client_id || row.id || row.map_id }}</div>
                    @if (row.map_id && row.map_id !== (row.client_id || row.id)) {
                        <div class="font-mono text-[0.625rem] opacity-30">
                            {{ row.map_id }}
                        </div>
                    }
                </button>
            </ng-template>
            <ng-template #item_list_template let-data="data">
                <div class="flex flex-wrap p-2">
                    @for (item of data; track item) {
                        <span
                            class="m-1 rounded-2xl bg-info px-2 py-1 font-mono text-xs text-info-content"
                        >
                            {{ item }}
                        </span>
                    }
                </div>
            </ng-template>
            <ng-template #bool_template let-data="data">
                <div
                    [class.bg-error]="!data"
                    [class.bg-success]="data"
                    class="mx-auto flex h-8 w-8 items-center justify-center rounded text-2xl text-white"
                >
                    <icon>{{ data ? 'done' : 'close' }}</icon>
                </div>
            </ng-template>
            <ng-template #assigned_template let-row="row" let-data="data">
                @if (!data) {
                    <div class="p-4 opacity-30">
                        {{ 'APP.CONCIERGE.UNASSIGNED' | translate }}
                    </div>
                }
                @if (data) {
                    <button
                        class="px-4 py-2 text-left leading-tight"
                        (click)="copyToClipboard(data, 'assigned')"
                    >
                        <div class="">{{ row.assigned_name || data }}</div>
                        @if (row.assigned_name) {
                            <div class="font-mono text-[0.625rem] opacity-30">
                                {{ data }}
                            </div>
                        }
                    </button>
                }
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
                        <icon>qr_code</icon>
                    </button>
                    <button
                        icon
                        matRipple
                        [matTooltip]="
                            'APP.CONCIERGE.DESKS_ACTION_EDIT' | translate
                        "
                        (click)="editDesk(row)"
                    >
                        <icon>edit</icon>
                    </button>
                    <button
                        icon
                        matRipple
                        [matTooltip]="
                            'APP.CONCIERGE.DESKS_ACTION_REMOVE' | translate
                        "
                        (click)="removeDesk(row)"
                    >
                        <icon class="text-error">delete</icon>
                    </button>
                    <ng-template #qr_menu>
                        <div class="rounded bg-base-100 py-2 shadow">
                            <div class="" printable [content]="print_content">
                                <ng-template #print_content>
                                    <a
                                        [href]="row.qr_link | safe: 'url'"
                                        target="_blank"
                                        ref="noopener noreferrer"
                                        class="mx-4 my-2 block rounded-lg border border-base-200 bg-base-100 p-2"
                                    >
                                        <img class="w-48" [src]="row.qr_code" />
                                    </a>
                                    <div
                                        class="mx-4 mt-2 w-[calc(100%-2rem)] rounded bg-base-200 p-2 text-center font-mono text-sm"
                                    >
                                        {{ row.name || row.id }}
                                    </div>
                                </ng-template>
                            </div>
                            <button
                                btn
                                matRipple
                                class="mx-4 my-2 w-[calc(100%-2rem)]"
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
            @if (loading() || stateLoading()) {
                <div
                    class="absolute inset-0 flex flex-col items-center justify-center space-y-2 bg-base-100 bg-opacity-60"
                >
                    <mat-spinner diameter="32"></mat-spinner>
                    @if (loading()) {
                        <p>{{ loading() }}</p>
                    }
                </div>
            }
            @if (dragging()) {
                <div
                    class="absolute inset-0 flex items-center justify-center bg-neutral"
                >
                    <div class="rounded bg-base-100 p-4 shadow">
                        <div
                            class="flex h-64 w-64 flex-col items-center justify-center rounded border-4 border-dashed border-base-200"
                        >
                            {{
                                'APP.CONCIERGE.DESKS_DROP_TEMPLATE' | translate
                            }}
                        </div>
                    </div>
                    <input
                        type="file"
                        class="absolute inset-0 opacity-0"
                        (change)="loadCSVData($event)"
                    />
                </div>
            }
        </div>
    `,
    styles: [``],
    imports: [
        CommonModule,
        SimpleTableComponent,
        TranslatePipe,
        MatProgressSpinnerModule,
        MatRippleModule,
        IconComponent,
        MatTooltipModule,
        CustomTooltipComponent,
        PrintableComponent,
        SafePipe,
    ],
})
export class DesksManageComponent extends AsyncHandler {
    private _state = inject(DesksStateService);
    private _org = inject(OrganisationService);
    private _dialog = inject(MatDialog);
    private _settings = inject(SettingsService);
    private _element = inject(ElementRef);
    private _clipboard = inject(Clipboard);

    public loading = signal<string>('');
    public dragging = signal(false);
    public readonly filters = this._state.filters;
    public readonly stateLoading = this._state.loading;
    public readonly desks = computed(() =>
        this.stateLoading() ? [] : this._state.desks(),
    );

    public readonly editDesk = (desk?: Desk) => this._state.editDesk(desk);

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
        const desks = this.desks();
        const updated_desks = desks.filter((_) => _.id !== desk.id);
        const filters = this.filters();
        const level = this._org.levelWithID(filters.zones);
        this.loading.set(i18n('APP.CONCIERGE.DESKS_REMOVE_LOADING'));
        await updateMetadata(level.id, {
            name: 'desks',
            description: 'desks',
            details: updated_desks,
        })
            .toPromise()
            .catch((e) => {
                this.loading.set('');
                notifyError(
                    i18n('APP.CONCIERGE.DESKS_REMOVE_ERROR', {
                        error: e.message || e,
                    }),
                );
                throw e;
            });
        notifySuccess(i18n('APP.CONCIERGE.DESKS_REMOVE_SUCCESS'));
        this._state.setFilters({});
        this.loading.set('');
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
        this.loading.set(i18n('APP.CONCIERGE.DESKS_UPLOADING'));
        this.dragging.set(false);
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
        this.loading.set('');
    }

    public handleDrag(type: 'enter' | 'leave' | 'end', event: DragEvent) {
        this.dragging.set(type === 'enter');
    }
}
