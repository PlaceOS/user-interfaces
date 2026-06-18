import { signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    MatBottomSheet,
    MatBottomSheetModule,
} from '@angular/material/bottom-sheet';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { ngMocks } from 'ng-mocks';
import { MapService } from '../app/rooms/map.service';

import { mockComponent } from '@placeos/common/tests';
import { MapPinComponent } from '@placeos/components';
import { RoomConfirmService } from '../app/rooms/room-confirm.service';
import { RoomTileComponent } from '../app/rooms/room-tile.component';
import { mockSpace } from './test-mocks';

describe('MapService', () => {
    let spectator: SpectatorService<MapService>;

    const createService = createServiceFactory({
        service: MapService,
        imports: [
            ReactiveFormsModule,
            FormsModule,
            MatFormFieldModule,
            CommonModule,
            BrowserModule,
            BrowserAnimationsModule,
            MatBottomSheetModule,
            mockComponent(RoomTileComponent),
            mockComponent(MapPinComponent),
        ],
        providers: [
            {
                provide: MatBottomSheet,
                useValue: {
                    open: jest.fn((RoomTileComponent) => {}),
                    afterDismissed: jest.fn(),
                },
            },
            {
                provide: RoomConfirmService,
                useValue: {
                    selected_space: signal(mockSpace),
                    openRoomDetail: jest.fn((param) => {}),
                    handleBookEvent: jest.fn((space, flat) => {}),
                },
            },
        ],
    });

    beforeEach(() => {
        spectator = createService();
    });

    afterEach(() => {
        jest.clearAllMocks();
        jest.resetModules();
        ngMocks.reset();
    });

    it('should create service', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should return a selected space', () => {
        expect(spectator.service.selected_space()).toBe(mockSpace);
    });

    it('should return a list of map IDs with no duplicates', async () => {
        const available_spaces = [mockSpace, mockSpace, mockSpace, mockSpace];
        const map_list_spy = jest.spyOn(spectator.service, 'loadMap');
        await spectator.service.locateSpaces(available_spaces);
        const maps_list = spectator.service.maps_list();

        expect(maps_list.length).toBe(1); //4 spaces with the same map_ID were passed through, only 1 should be returned
        expect(map_list_spy).toHaveBeenCalled();
    });

    it('should have a flag indicating whether the map has loaded', async () => {
        expect(spectator.service.map_loaded()).toBe(false);

        await spectator.service.loadMap();
        expect(spectator.service.map_loaded()).toBe(true);
    });

    it('should create map actions for all available spaces', async () => {
        const available_spaces = [mockSpace, mockSpace, mockSpace, mockSpace];
        await spectator.service.locateSpaces(available_spaces);
        const map_actions = spectator.service.map_actions();

        expect(map_actions.length).toBe(available_spaces.length);

        expect(map_actions.every((map) => map.action == 'click')).toBeTruthy();

        map_actions.forEach((map) => {
            expect(map.callback).toBeInstanceOf(Function);
        });
    });

    it('should contain a method to open a room tile when clicked', async () => {
        const mat_bottom_sheet = spectator.inject(MatBottomSheet);
        (mat_bottom_sheet as any).open.mockImplementation(
            (RoomDetailsComponent) => {},
        );
        const room_confirm_service = spectator.inject(RoomConfirmService);

        const room_confirm_service_spy = jest.spyOn(
            room_confirm_service,
            'handleBookEvent',
        );

        await spectator.service.openRoomTile(mockSpace);
        expect(room_confirm_service_spy).toHaveBeenCalled();
        expect(mat_bottom_sheet.open).toHaveBeenCalled();
    });

    it('should only process map features after the map has been loaded', async () => {
        const map_load_spy = jest.spyOn(spectator.service, 'loadMap');

        const process_features_spy = jest.spyOn(
            spectator.service,
            'processFeature',
        );

        const available_spaces = [mockSpace, mockSpace];

        await spectator.service.locateSpaces(available_spaces);
        expect(map_load_spy).toHaveBeenCalled();

        expect(process_features_spy).not.toHaveBeenCalled();

        setTimeout(() => {
            expect(process_features_spy).toHaveBeenCalled();
        }, 2000);
    });
});
