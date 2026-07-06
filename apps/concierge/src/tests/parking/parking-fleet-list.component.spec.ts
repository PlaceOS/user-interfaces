import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockProvider } from 'ng-mocks';

import { ParkingFleetListComponent } from '../../app/parking/parking-fleet-list.component';
import { ParkingStateService } from '../../app/parking/parking-state.service';

describe('ParkingFleetListComponent', () => {
    let spectator: Spectator<ParkingFleetListComponent>;
    const edit_fleet_vehicle = vi.fn();
    const remove_fleet_vehicle = vi.fn();
    const fleet_vehicles = signal([
        {
            id: 'vehicle-1',
            name: 'Van 1',
            plate_number: 'ABC123',
            car_model: 'Transit',
            car_colour: 'white',
            notes: '',
        },
    ]);

    const createComponent = createComponentFactory({
        component: ParkingFleetListComponent,
        shallow: true,
        providers: [
            MockProvider(ParkingStateService, {
                fleet_vehicles: fleet_vehicles as any,
                options: signal({
                    date: Date.now(),
                    search: '',
                    zones: [],
                    period: 'day',
                    request_filter: 'all',
                }) as any,
                loading: signal([]) as any,
                editFleetVehicle: edit_fleet_vehicle,
                removeFleetVehicle: remove_fleet_vehicle,
            } as any),
        ],
    });

    beforeEach(() => {
        edit_fleet_vehicle.mockClear();
        remove_fleet_vehicle.mockClear();
        spectator = createComponent();
    });

    it('should expose the fleet vehicle list from state', () => {
        expect(spectator.component.fleet_list()).toHaveLength(1);
        expect(spectator.component.fleet_list()[0].id).toBe('vehicle-1');
    });

    it('should delegate editing a vehicle to the state service', () => {
        const vehicle = fleet_vehicles()[0];

        spectator.component.editFleetVehicle(vehicle);

        expect(edit_fleet_vehicle).toHaveBeenCalledWith(vehicle);
    });

    it('should delegate removing a vehicle to the state service', () => {
        const vehicle = fleet_vehicles()[0];

        spectator.component.removeFleetVehicle(vehicle);

        expect(remove_fleet_vehicle).toHaveBeenCalledWith(vehicle);
    });
});
