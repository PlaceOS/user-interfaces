import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {
    Building,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import { TranslatePipe } from '@placeos/components';
import { ApplicationSidebarComponent } from '../ui/app-sidebar.component';
import { ApplicationTopbarComponent } from '../ui/app-topbar.component';
import { POIListComponent } from './poi-list.component';
import { POIManagementService } from './poi-management.service';

@Component({
    selector: '[app-poi-manager]',
    template: `
        <app-topbar class="print:hidden" />
        <div class="flex h-px flex-1 print:hidden">
            <app-sidebar></app-sidebar>
            <main class="flex h-full w-1/2 flex-1 flex-col">
                <header
                    class="flex items-center justify-between px-8 py-8"
                    [class.mb-2]="!use_region || buildings().length <= 1"
                >
                    <h2 class="text-2xl font-medium">
                        {{ 'APP.CONCIERGE.POI_HEADER' | translate }}
                    </h2>
                    <button btn matRipple (click)="new()">
                        {{ 'APP.CONCIERGE.POI_ADD' | translate }}
                    </button>
                </header>
                @if (use_region && buildings().length > 1) {
                    <div class="mb-2 flex items-center justify-between px-8">
                        <mat-form-field appearance="outline" class="w-64">
                            <mat-label>{{ 'RESOURCE.BUILDING' | translate }}</mat-label>
                            <mat-select
                                name="building"
                                [ngModel]="building"
                                (ngModelChange)="building = $event"
                                [ngModelOptions]="{ standalone: true }"
                                [placeholder]="
                                    building?.display_name || building?.name
                                "
                            >
                                @for (bld of buildings(); track bld) {
                                    <mat-option [value]="bld">
                                        {{ bld.display_name || bld.name }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                }
                <poi-list class="relative block h-1/2 w-full flex-1"></poi-list>
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
                background-color: var(--base-100);
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
    imports: [
        ApplicationTopbarComponent,
        ApplicationSidebarComponent,
        TranslatePipe,
        MatRippleModule,
        MatFormFieldModule,
        MatSelectModule,
        FormsModule,
        POIListComponent,
    ],
})
export class POIManagerComponent {
    private _org = inject(OrganisationService);
    private _state = inject(POIManagementService);
    private _settings = inject(SettingsService);

    public readonly new = () => this._state.editPointOfInterest();

    public readonly buildings = toSignal(this._org.active_buildings, {
        initialValue: [],
    });

    public get building() {
        return this._org.building;
    }

    public set building(bld: Building) {
        this._org.building = bld;
    }

    public get use_region() {
        return !!this._settings.get('app.use_region');
    }
}
