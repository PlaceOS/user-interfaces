import { Component, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
    IconComponent,
    SimpleTableComponent,
    TranslatePipe,
} from '@placeos/components';
import { ParkingStateService } from './parking-state.service';

@Component({
    selector: 'parking-fleet-list',
    template: `
        <div class="w-fit px-8">
            <mat-progress-bar
                [class.opacity-0]="!loading().includes('fleet')"
                class="w-full"
            />
            <simple-table
                class="block min-w-272 text-sm"
                [data]="fleet_list()"
                [columns]="[
                    {
                        key: 'name',
                        name: 'APP.CONCIERGE.PARKING_FLEET' | translate,
                        content: name_template,
                    },
                    {
                        key: 'car_model',
                        name: 'APP.CONCIERGE.PARKING_FLEET_MODEL' | translate,
                    },
                    {
                        key: 'car_colour',
                        name: 'APP.CONCIERGE.PARKING_CAR_COLOUR' | translate,
                    },
                    {
                        key: 'plate_number',
                        name: 'BOOKINGS.PARKING_PLATE_NUMBER' | translate,
                        content: plate_template,
                    },
                    { key: 'notes', name: 'FORM.NOTES' | translate },
                    {
                        key: 'actions',
                        name: ' ',
                        content: action_template,
                        sortable: false,
                        size: '6rem',
                    },
                ]"
                [filter]="options().search"
                [sortable]="true"
            />
            <ng-template #name_template let-row="row" let-data="data">
                <div class="px-4 py-2 leading-tight">
                    <div>{{ data }}</div>
                    <div class="font-mono text-[0.625rem] opacity-30">
                        {{ row.id }}
                    </div>
                </div>
            </ng-template>
            <ng-template #plate_template let-data="data">
                <div class="p-4 font-mono text-sm uppercase">
                    {{ data }}
                    @if (!data) {
                        <span class="opacity-30">
                            {{ 'COMMON.EMPTY' | translate }}
                        </span>
                    }
                </div>
            </ng-template>
            <ng-template #action_template let-row="row">
                <div class="mx-auto flex items-center gap-2">
                    <button
                        icon
                        default
                        matRipple
                        (click)="editFleetVehicle(row)"
                        [matTooltip]="
                            'APP.CONCIERGE.PARKING_FLEET_EDIT' | translate
                        "
                    >
                        <icon>edit</icon>
                    </button>
                    <button
                        icon
                        default
                        error
                        (click)="removeFleetVehicle(row)"
                        [matTooltip]="
                            'APP.CONCIERGE.PARKING_FLEET_REMOVE' | translate
                        "
                    >
                        <icon>delete</icon>
                    </button>
                </div>
            </ng-template>
            <div class="h-20 w-full"></div>
        </div>
    `,
    styles: [``],
    imports: [
        MatRippleModule,
        MatProgressBarModule,
        MatTooltipModule,
        IconComponent,
        SimpleTableComponent,
        TranslatePipe,
    ],
})
export class ParkingFleetListComponent {
    private _state = inject(ParkingStateService);

    public readonly options = this._state.options;
    public readonly loading = this._state.loading;
    public readonly fleet_list = this._state.fleet_vehicles;

    public readonly editFleetVehicle = (vehicle?) =>
        this._state.editFleetVehicle(vehicle);
    public readonly removeFleetVehicle = (vehicle) =>
        this._state.removeFleetVehicle(vehicle);
}
