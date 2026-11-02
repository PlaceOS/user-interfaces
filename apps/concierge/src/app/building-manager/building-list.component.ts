import { Clipboard } from '@angular/cdk/clipboard';
import { Component, inject } from '@angular/core';
import { i18n, notifySuccess } from '@placeos/common';
import { AppSettingsMenuComponent } from '../ui/app-settings/app-settings-menu.component';
import { BuildingManagementService } from './building-management.service';

import { MatMenuModule } from '@angular/material/menu';
import {
    IconComponent,
    SimpleTableComponent,
    TranslatePipe,
} from '@placeos/components';

@Component({
    selector: 'building-list',
    template: `
        <div class="absolute inset-0 overflow-auto px-8">
            <simple-table
                class="block w-full min-w-248 text-sm"
                [data]="buildings()"
                [empty_message]="'APP.CONCIERGE.BUILDINGS_EMPTY' | translate"
                [columns]="[
                    {
                        key: 'display_name',
                        name: 'APP.CONCIERGE.BUILDINGS_NAME' | translate,
                        content: name_template,
                    },
                    {
                        key: 'location',
                        name: 'Location',
                        size: '13.5rem',
                    },
                    {
                        key: 'timezone',
                        name: 'COMMON.TIMEZONE' | translate,
                        size: '12rem',
                        content: timezone_template,
                    },
                    {
                        key: 'region',
                        name: 'RESOURCE.REGION' | translate,
                        size: '11rem',
                        sortable: false,
                    },
                    {
                        key: 'level_count',
                        name: 'APP.CONCIERGE.BUILDINGS_LEVELS' | translate,
                        size: '5.5rem',
                    },
                    {
                        key: 'actions',
                        name: ' ',
                        content: action_template,
                        size: '3.25rem',
                        sortable: false,
                    },
                ]"
                [sortable]="true"
            ></simple-table>
            <div class="h-20 w-full"></div>
        </div>
        <ng-template #name_template let-row="row" let-data="data">
            <button
                class="px-4 py-2 text-left leading-tight"
                (click)="copyToClipboard(row.id)"
            >
                <div class="">{{ data }}</div>
                <div class="font-mono text-[0.625rem] opacity-70">
                    {{ row.id }}
                </div>
            </button>
        </ng-template>
        <ng-template #timezone_template let-data="data">
            <div class="p-4 font-mono text-xs">{{ data }}</div>
        </ng-template>
        <ng-template #action_template let-row="row">
            <div class="mx-auto flex items-center p-2">
                <button
                    icon
                    default
                    matRipple
                    [matMenuTriggerFor]="menu"
                    [attr.aria-label]="'COMMON.MORE_OPTIONS' | translate"
                >
                    <icon>more_vert</icon>
                </button>
                <mat-menu #menu="matMenu">
                    <button
                        mat-menu-item
                        [matMenuTriggerFor]="app_settings_menu.menu()"
                    >
                        <div class="flex items-center space-x-2">
                            <icon class="text-xl">edit_square</icon>
                            <div>
                                {{ 'APP.CONCIERGE.APP_SETTINGS' | translate }}
                            </div>
                        </div>
                    </button>
                    <app-settings-menu #app_settings_menu [zone]="row" />
                    <button mat-menu-item (click)="editBuilding(row)">
                        <div class="flex items-center space-x-2">
                            <icon class="text-xl">edit</icon>
                            <div>
                                {{ 'APP.CONCIERGE.BUILDINGS_EDIT' | translate }}
                            </div>
                        </div>
                    </button>
                    <button mat-menu-item (click)="setAutoRelease(row)">
                        <div class="flex items-center space-x-2">
                            <icon
                                className="material-symbols-rounded"
                                class="text-xl"
                            >
                                release_alert
                            </icon>
                            <div>
                                {{
                                    'APP.CONCIERGE.BUILDINGS_AUTO_RELEASE'
                                        | translate
                                }}
                            </div>
                        </div>
                    </button>
                    <button mat-menu-item (click)="setInduction(row)">
                        <div class="flex items-center space-x-2">
                            <icon
                                className="material-symbols-rounded"
                                class="text-xl"
                            >
                                badge
                            </icon>
                            <div>
                                {{
                                    'APP.CONCIERGE.BUILDINGS_INDUCTION'
                                        | translate
                                }}
                            </div>
                        </div>
                    </button>
                    <button mat-menu-item (click)="setSupportIssueTypes(row)">
                        <div class="flex items-center space-x-2">
                            <icon
                                className="material-symbols-rounded"
                                class="text-xl"
                            >
                                support_agent
                            </icon>
                            <div>
                                {{
                                    'APP.CONCIERGE.BUILDINGS_SUPPORT_TYPES'
                                        | translate
                                }}
                            </div>
                        </div>
                    </button>
                    <button mat-menu-item (click)="removeBuilding(row)">
                        <div class="flex items-center space-x-2 text-red-500">
                            <icon class="text-error text-xl"> delete </icon>
                            <div>
                                {{
                                    'APP.CONCIERGE.BUILDINGS_REMOVE' | translate
                                }}
                            </div>
                        </div>
                    </button>
                </mat-menu>
            </div>
        </ng-template>
    `,
    styles: [``],
    imports: [
        SimpleTableComponent,
        MatMenuModule,
        TranslatePipe,
        IconComponent,
        AppSettingsMenuComponent,
    ],
})
export class BuildingListComponent {
    private _manager = inject(BuildingManagementService);
    private _clipboard = inject(Clipboard);

    public readonly buildings = this._manager.filtered_buildings;

    public readonly editBuilding = (building) =>
        this._manager.editBuilding(building);

    public readonly removeBuilding = (building) =>
        this._manager.removeBuilding(building);

    public readonly setAutoRelease = (building) =>
        this._manager.setAutoRelease(building);

    public readonly setInduction = (building) =>
        this._manager.setInduction(building);

    public readonly setSupportIssueTypes = (building) =>
        this._manager.setSupportIssueTypes(building);

    public readonly copyToClipboard = (id: string) => {
        const success = this._clipboard.copy(id);
        if (success) notifySuccess(i18n('APP.CONCIERGE.BUILDINGS_COPIED_ID'));
    };
}
