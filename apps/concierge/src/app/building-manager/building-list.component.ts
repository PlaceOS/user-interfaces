import { Component } from '@angular/core';
import { BuildingManagementService } from './building-management.service';
import {
    EncryptionLevel,
    PlaceSettings,
    addSettings,
    querySettings,
    showSettings,
    updateSettings,
} from '@placeos/ts-client';
import { map } from 'rxjs/operators';
import * as yaml from 'js-yaml';
import { notifySuccess } from '@placeos/common';

@Component({
    selector: 'building-list',
    template: `
        <div class="absolute inset-0 overflow-auto px-4">
            <custom-table
                class="block min-w-[60rem] w-full h-full"
                [dataSource]="buildings"
                [columns]="[
                    'display_name',
                    'address',
                    'timezone',
                    'region',
                    'level_count',
                    'actions'
                ]"
                [display_column]="[
                    'Name',
                    'Location',
                    'Timezone',
                    'Region',
                    'Levels',
                    ' '
                ]"
                [column_size]="['12r', 'flex', '12r', '10r', '6r', '3.75r']"
                [template]="{
                    images: image_template,
                    zones: level_template,
                    actions: action_template
                }"
                empty="No buildings"
            ></custom-table>
        </div>
        <ng-template #level_template let-data="data">
            {{ (data | level)?.display_name || (data | level)?.name }}
        </ng-template>
        <ng-template #image_template let-data="data">
            <img
                auth
                *ngIf="data.length"
                [source]="data[0]"
                class="max-h-[3rem] max-w-[8rem]"
            />
            <span *ngIf="!data.length" class="opacity-30">No Images</span>
        </ng-template>
        <ng-template #action_template let-row="row">
            <div class="w-full flex justify-end space-x-2">
                <button btn icon matRipple [matMenuTriggerFor]="menu">
                    <app-icon>more_vert</app-icon>
                </button>
                <mat-menu #menu="matMenu">
                    <button mat-menu-item (click)="editBuildingMetadata(row)">
                        <div class="flex items-center space-x-2">
                            <app-icon class="text-xl">edit_square</app-icon>
                            <span>App Configuration</span>
                        </div>
                    </button>
                    <button mat-menu-item (click)="editBuilding(row)">
                        <div class="flex items-center space-x-2">
                            <app-icon class="text-xl">edit</app-icon>
                            <span>Edit Building</span>
                        </div>
                    </button>
                    <button
                        mat-menu-item
                        (click)="loadSettings($event, row.id)"
                        (mouseenter)="
                            !settings[row.id]
                                ? loadSettings($event, row.id)
                                : ''
                        "
                        [matMenuTriggerFor]="auto_release_menu"
                    >
                        <div class="flex items-center space-x-2">
                            <app-icon
                                className="material-symbols-rounded"
                                class="text-xl"
                                >release_alert</app-icon
                            >
                            <span>Auto-release Settings</span>
                        </div>
                        <mat-menu #auto_release_menu="matMenu">
                            <div
                                *ngIf="settings[row.id]"
                                (click)="$event.stopPropagation()"
                                class="px-2"
                            >
                                <label>Before Event</label>
                                <a-duration-field
                                    [min]="0"
                                    [(ngModel)]="settings[row.id].time_before"
                                ></a-duration-field>
                                <label>After Event</label>
                                <a-duration-field
                                    [min]="0"
                                    [(ngModel)]="settings[row.id].time_after"
                                ></a-duration-field>
                                <label>Event Types</label>
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full"
                                >
                                    <mat-select
                                        multiple
                                        [(ngModel)]="settings[row.id].resources"
                                        placeholder="Set Event Types..."
                                    >
                                        <mat-option value="room"
                                            >Rooms</mat-option
                                        >
                                        <mat-option value="desk"
                                            >Desks</mat-option
                                        >
                                        <mat-option value="visitor"
                                            >Visitors</mat-option
                                        >
                                        <mat-option value="parking"
                                            >Parking</mat-option
                                        >
                                    </mat-select>
                                </mat-form-field>
                            </div>
                            <button
                                btn
                                matRipple
                                class="w-[calc(100%-1rem)] mx-auto"
                                (click)="saveSettings(row.id)"
                            >
                                Save
                            </button>
                        </mat-menu>
                    </button>
                    <button mat-menu-item (click)="removeBuilding(row)">
                        <div class="flex items-center space-x-2 text-red-500">
                            <app-icon class="text-error text-xl"
                                >delete</app-icon
                            >
                            <span>Delete Building</span>
                        </div>
                    </button>
                </mat-menu>
            </div>
        </ng-template>
    `,
    styles: [``],
})
export class BuildingListComponent {
    public readonly buildings = this._manager.filtered_buildings;
    public settings = {};

    public readonly editBuilding = (building) =>
        this._manager.editBuilding(building);

    public readonly editBuildingMetadata = (building) =>
        this._manager.editBuildingMetadata(building);

    public readonly removeBuilding = (building) =>
        this._manager.removeBuilding(building);

    constructor(private _manager: BuildingManagementService) {}

    public async loadSettings(event: Event, id: string) {
        event.preventDefault();
        event.stopPropagation();
        this.settings[id] = {};
        const settings = await querySettings({ parent_id: id })
            .pipe(map((_) => _.data))
            .toPromise();
        const unencrypted = settings.find(
            (_) => _.encryption_level === EncryptionLevel.None
        );
        if (!unencrypted) return;
        try {
            this.settings[id] =
                yaml.load(unencrypted.settings_string)?.auto_release || {};
        } catch {}
        console.log(
            'Settings:',
            this.settings[id],
            unencrypted.settings_string
        );
    }

    public async saveSettings(id: string) {
        const settings = await querySettings({ parent_id: id })
            .pipe(map((_) => _.data))
            .toPromise();
        let unencrypted = settings.find(
            (_) => _.encryption_level === EncryptionLevel.None
        );
        if (!unencrypted) {
            unencrypted = new PlaceSettings({
                parent_id: id,
                encryption_level: EncryptionLevel.None,
                settings_string: '',
            });
        }
        let old_settings = {};
        try {
            old_settings = yaml.load(unencrypted.settings_string) || {};
        } catch {}
        (unencrypted as any).settings_string = yaml.dump({
            ...old_settings,
            auto_release: this.settings[id],
        });
        unencrypted.id
            ? await updateSettings(unencrypted.id, unencrypted).toPromise()
            : await addSettings(unencrypted).toPromise();
        notifySuccess('Auto-release settings updated');
    }
}
