import { Component, Inject } from '@angular/core';
import { POIManagementService } from './poi-management.service';
import { Building, OrganisationService } from '@placeos/organisation';
import { SettingsService } from '@placeos/common';

@Component({
    selector: '[app-poi-manager]',
    template: `
        <app-topbar></app-topbar>
        <div class="flex flex-1 h-px">
            <app-sidebar></app-sidebar>
            <main class="flex flex-col flex-1 w-1/2 h-full">
                <header
                    class="flex items-center justify-between px-8 py-8"
                    [class.mb-2]="
                        !use_region || (buildings | async)?.length <= 1
                    "
                >
                    <h2 class="text-2xl font-medium">
                        Point of Interest Management
                    </h2>
                    <button btn matRipple (click)="new()">
                        Add Point of Interest
                    </button>
                </header>
                <div
                    class="flex items-center justify-between mb-2 px-8"
                    *ngIf="use_region && (buildings | async)?.length > 1"
                >
                    <mat-form-field appearance="outline" class="w-64">
                        <mat-select
                            name="building"
                            [ngModel]="building"
                            (ngModelChange)="building = $event"
                            [ngModelOptions]="{ standalone: true }"
                            [placeholder]="
                                building?.display_name || building?.name
                            "
                        >
                            <mat-option
                                *ngFor="let bld of buildings | async"
                                [value]="bld"
                            >
                                {{ bld.display_name || bld.name }}
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                </div>
                <poi-list class="block w-full relative flex-1 h-1/2"></poi-list>
            </main>
        </div>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                height: 100%;
                width: 100%;
                background-color: var(--b1);
            }

            sidebar {
                height: 100%;
            }

            main {
                display: flex;
                flex-direction: column;
                flex: 1;
                min-width: 50%;
                height: 100%;
            }
        `,
    ],
})
export class POIManagerComponent {
    public readonly new = () => this._state.editPointOfInterest();

    public readonly buildings = this._org.active_buildings;

    public get building() {
        return this._org.building;
    }

    public set building(bld: Building) {
        this._org.building = bld;
    }

    public get use_region() {
        return !!this._settings.get('app.use_region');
    }

    constructor(
        private _org: OrganisationService,
        private _state: POIManagementService,
        private _settings: SettingsService
    ) {}
}
