import { MapService } from '../app/rooms/map.service';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { MockComponent, ngMocks } from 'ng-mocks';
import { of } from 'rxjs';
import { take } from 'rxjs/operators';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BookModule } from '../app/rooms/book.module';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatBottomSheetModule,
    MatBottomSheet,
} from '@angular/material/bottom-sheet';

import { ComponentsModule, MapPinComponent } from '@placeos/components';
import { RoomConfirmService } from '../app/rooms/room-confirm.service';
import { RoomTileComponent } from '../app/rooms/room-tile/room-tile.component';
import { mockSpace } from './test-mocks';

describe('MapService', () => {
    let spectator: SpectatorService<MapService>;

    const createService = createServiceFactory({
        service: MapService,
        imports: [
            ReactiveFormsModule,
            FormsModule,
            MatFormFieldModule,
            BookModule,
            CommonModule,
            BrowserModule,
            BrowserAnimationsModule,
            MatBottomSheetModule,
            ComponentsModule,
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
                    selected_space$: of(mockSpace),
                    openRoomDetail: jest.fn((param) => {}),
                    handleBookEvent: jest.fn((space, flat) => {}),
                },
            },
        ],
        declarations: [
            MockComponent(RoomTileComponent),
            MockComponent(MapPinComponent),
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
        const room_service = spectator.inject(RoomConfirmService);
        room_service.selected_space$ = of(mockSpace);

        spectator.service.selected_space$.subscribe((space) =>
            expect(space).toBe(of(mockSpace))
        );
    });
    it('should return a list of map IDs with no duplicates', async () => {
        const available_spaces = of([
            mockSpace,
            mockSpace,
            mockSpace,
            mockSpace,
        ]);
        let maps_list;
        const map_list_spy = jest.spyOn(spectator.service, 'loadMap');
        await spectator.service.locateSpaces(available_spaces);
        maps_list = await spectator.service.maps_list$
            .pipe(take(1))
            .toPromise();

        expect(maps_list.length).toBe(1); //3 spaces with the same map_ID were passed through, only 1 should be returned
        expect(map_list_spy).toHaveBeenCalled();
    });
    it('should have a flag indicating whether the map has loaded', async () => {
        let flag;
        await spectator.service.map_loaded$.pipe(take(1)).toPromise();
        spectator.service.map_loaded$.subscribe((value) => (flag = value));
        expect(flag).toBe(false);

        await spectator.service.loadMap();
        expect(flag).toBe(true);
    });

    it('should create map actions for all available spaces', async () => {
        let map_actions;
        let spaces_count;
        const available_spaces = of([
            mockSpace,
            mockSpace,
            mockSpace,
            mockSpace,
        ]);

        await spectator.service.locateSpaces(available_spaces);

        map_actions = await spectator.service.map_actions$
            .pipe(take(1))
            .toPromise();

        spaces_count = await available_spaces.pipe(take(1)).toPromise();

        expect(map_actions.length).toBe(spaces_count.length);

        expect(map_actions.every((map) => map.action == 'click')).toBeTruthy();

        map_actions.forEach((map) => {
            expect(map.callback).toBeInstanceOf(Function);
        });
    });
    it('should contain a method to open a room tile when clicked', async () => {
        const mat_bottom_sheet = spectator.inject(MatBottomSheet);
        (mat_bottom_sheet as any).open.mockImplementation(
            (RoomDetailsComponent) => {}
        );
        (mat_bottom_sheet as any).afterDismissed.mockImplementation(() => ({
            value: of(true),
        }));
        const room_confirm_service = spectator.inject(RoomConfirmService);

        const room_confirm_service_spy = jest.spyOn(
            room_confirm_service,
            'handleBookEvent'
        );

        await spectator.service.openRoomTile(mockSpace);
        expect(room_confirm_service_spy).toBeCalled();
        expect(mat_bottom_sheet.open).toHaveBeenCalled();
    });

    it('should only processing map features after the map has been loaded', async () => {
        const map_load_spy = jest.spyOn(spectator.service, 'loadMap');

        const process_features_spy = jest.spyOn(
            spectator.service,
            'processFeature'
        );

        const available_spaces = of([mockSpace, mockSpace]);

        await spectator.service.locateSpaces(available_spaces);
        expect(map_load_spy).toHaveBeenCalled();

        expect(process_features_spy).not.toHaveBeenCalled();

        setTimeout(() => {
            expect(process_features_spy).toHaveBeenCalled();
        }, 2000);
    });
});
