import { Clipboard } from '@angular/cdk/clipboard';
import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { i18n, notifySuccess } from '@placeos/common';
import {
    IconComponent,
    SimpleTableComponent,
    TranslatePipe,
} from '@placeos/components';
import { ApplicationSidebarComponent } from '../ui/app-sidebar.component';
import { ApplicationTopbarComponent } from '../ui/app-topbar.component';
import { SearchbarComponent } from '../ui/searchbar.component';
import { MapRow } from './map-list.utilities';
import { MapManagementService } from './map-management.service';

@Component({
    selector: '[app-map-manager]',
    template: `
        <app-topbar />
        <div class="flex h-px flex-1">
            <app-sidebar></app-sidebar>
            <main class="flex h-full w-1/2 flex-1 flex-col">
                <div class="flex items-center space-x-2 px-8 pt-4">
                    <h2 class="text-2xl font-medium">
                        {{ 'APP.CONCIERGE.MAPS_HEADER' | translate }}
                    </h2>
                    <div class="w-2 flex-1"></div>
                    <searchbar (modelChange)="setSearch($event)"></searchbar>
                    <button
                        btn
                        matRipple
                        class="w-52 whitespace-nowrap"
                        (click)="openStudio()"
                    >
                        <div class="flex items-center space-x-2">
                            <icon>open_in_new</icon>
                            <div class="pr-2">
                                {{
                                    'APP.CONCIERGE.MAPS_OPEN_STUDIO' | translate
                                }}
                            </div>
                        </div>
                    </button>
                </div>
                <div class="bg-base-100 flex h-20 items-center space-x-2 px-8">
                    <mat-form-field
                        appearance="outline"
                        class="no-subscript w-60"
                    >
                        <mat-select
                            [ngModel]="options().building || ''"
                            (ngModelChange)="setBuilding($event)"
                            [placeholder]="
                                'APP.CONCIERGE.MAPS_ALL_BUILDINGS' | translate
                            "
                        >
                            <mat-option value="">
                                {{
                                    'APP.CONCIERGE.MAPS_ALL_BUILDINGS'
                                        | translate
                                }}
                            </mat-option>
                            @for (building of buildings(); track building.id) {
                                <mat-option [value]="building.id">
                                    {{ building.display_name || building.name }}
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                    <div class="w-2 flex-1"></div>
                    <div class="text-sm opacity-60">
                        {{
                            'APP.CONCIERGE.MAPS_COUNT'
                                | translate: { count: rows().length }
                        }}
                    </div>
                </div>
                <div class="content-area relative flex-1">
                    <div class="absolute inset-0 overflow-auto px-8">
                        <simple-table
                            class="block min-w-3xl text-sm"
                            [data]="rows()"
                            [empty_message]="
                                'APP.CONCIERGE.MAPS_EMPTY' | translate
                            "
                            [columns]="[
                                {
                                    key: 'map_id',
                                    name: ' ',
                                    content: thumbnail_template,
                                    size: '7rem',
                                    sortable: false,
                                },
                                {
                                    key: 'name',
                                    name:
                                        'APP.CONCIERGE.LEVELS_NAME' | translate,
                                    content: name_template,
                                },
                                {
                                    key: 'building',
                                    name: 'RESOURCE.BUILDING' | translate,
                                    size: '14rem',
                                },
                                {
                                    key: 'map_short',
                                    name:
                                        'APP.CONCIERGE.LEVELS_MAP_URL'
                                        | translate,
                                    content: url_template,
                                    size: '18rem',
                                },
                                {
                                    key: 'actions',
                                    name: ' ',
                                    content: action_template,
                                    size: '13rem',
                                    sortable: false,
                                },
                            ]"
                            [sortable]="true"
                        ></simple-table>
                        <div class="h-20 w-full"></div>
                    </div>
                </div>
            </main>
        </div>
        <ng-template #thumbnail_template let-row="row">
            <div
                class="bg-base-200 m-2 flex h-14 w-24 items-center justify-center overflow-hidden rounded"
            >
                @if (!broken().has(row.id)) {
                    <img
                        class="max-h-full max-w-full"
                        loading="lazy"
                        [src]="row.map_id"
                        [alt]="row.name"
                        (error)="markBroken(row.id)"
                    />
                } @else {
                    <icon class="text-2xl opacity-40">map</icon>
                }
            </div>
        </ng-template>
        <ng-template #name_template let-row="row" let-data="data">
            <button
                class="px-4 py-2 text-left leading-tight"
                (click)="copyToClipboard(row.id)"
            >
                <div>{{ data }}</div>
                <div class="font-mono text-[0.625rem] opacity-30">
                    {{ row.id }}
                </div>
            </button>
        </ng-template>
        <ng-template #url_template let-row="row" let-data="data">
            <div class="flex items-center gap-1 px-2">
                <span class="truncate font-mono text-xs" [title]="row.map_id">
                    {{ data }}
                </span>
                <button
                    icon
                    matRipple
                    [matTooltip]="'APP.CONCIERGE.MAPS_COPY_URL' | translate"
                    (click)="copyToClipboard(row.map_id)"
                >
                    <icon>content_copy</icon>
                </button>
            </div>
        </ng-template>
        <ng-template #action_template let-row="row">
            <div class="flex items-center justify-end gap-2 p-2">
                <button
                    btn
                    matRipple
                    class="w-32 whitespace-nowrap"
                    (click)="editMap(row)"
                >
                    <div class="flex items-center space-x-2">
                        <icon>edit</icon>
                        <div class="pr-2">
                            {{ 'APP.CONCIERGE.MAPS_EDIT' | translate }}
                        </div>
                    </div>
                </button>
                <button icon default matRipple [matMenuTriggerFor]="menu">
                    <icon>more_vert</icon>
                </button>
                <mat-menu #menu="matMenu">
                    <button mat-menu-item (click)="openStudio()">
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">open_in_new</icon>
                            <span>{{
                                'APP.CONCIERGE.MAPS_OPEN_STUDIO' | translate
                            }}</span>
                        </div>
                    </button>
                    <button mat-menu-item (click)="editLevel(row)">
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">tune</icon>
                            <span>{{
                                'APP.CONCIERGE.MAPS_EDIT_LEVEL' | translate
                            }}</span>
                        </div>
                    </button>
                </mat-menu>
            </div>
        </ng-template>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                height: 100%;
                width: 100%;
                background-color: var(--base-100);
            }

            mat-form-field {
                height: 3.25rem;
            }
        `,
    ],
    imports: [
        ApplicationTopbarComponent,
        ApplicationSidebarComponent,
        SearchbarComponent,
        SimpleTableComponent,
        IconComponent,
        TranslatePipe,
        FormsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatMenuModule,
        MatRippleModule,
        MatTooltipModule,
    ],
})
export class MapManagerComponent {
    private readonly _manager = inject(MapManagementService);
    private readonly _router = inject(Router);
    private readonly _clipboard = inject(Clipboard);

    public readonly rows = this._manager.rows;
    public readonly options = this._manager.options;
    public readonly buildings = this._manager.buildings;
    public readonly broken = signal<ReadonlySet<string>>(new Set());

    public readonly building_count = computed(() => this.buildings().length);

    public setSearch(search: string) {
        this._manager.setSearchString(search);
    }

    public setBuilding(building: string) {
        this._manager.setFilters({ building: building || undefined });
    }

    public editMap(row: MapRow) {
        this._router.navigate(['/map-management', row.id]);
    }

    public editLevel(row: MapRow) {
        this._manager.editLevel(row.level);
    }

    public openStudio() {
        this._manager.openStudio();
    }

    public markBroken(id: string) {
        this.broken.update((set) => new Set([...set, id]));
    }

    public copyToClipboard(value: string) {
        if (this._clipboard.copy(value)) {
            notifySuccess(i18n('APP.CONCIERGE.MAPS_COPIED'));
        }
    }
}
