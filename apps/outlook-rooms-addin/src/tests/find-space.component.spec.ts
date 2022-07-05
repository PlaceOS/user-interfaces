import { FindSpaceComponent } from '../app/rooms/find-space/find-space.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { of, Observable } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BookModule } from '../app/rooms/book.module';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { OrganisationService } from '@placeos/organisation';
import { SpacesService } from '@placeos/spaces';
import { EventFormService } from '@placeos/events';
import { Location } from '@angular/common';
import { FilterSpaceComponent } from '../app/rooms/filter-space/filter-space.component';
import { FindSpaceItemComponent } from '../app/rooms/find-space-item/find-space-item.component';
import { RoomDetailsComponent } from '../app/rooms/room-details/room-details.component';
import { FeaturesFilterService } from '../app/rooms/features-filter.service';
import { MapService } from '../app/rooms/map.service';
import { RoomConfirmService } from '../app/rooms/room-confirm.service';
import {
    MatBottomSheetModule,
    MatBottomSheet,
} from '@angular/material/bottom-sheet';
import { MockComponent, MockInstance, ngMocks } from 'ng-mocks';
import {
    mockOrgService,
    mockSpacesService,
    mockEventFormService,
    mockFeatureFilterService,
    mockMapService,
    mockRoomConfirmService,
    mockRouterStub,
    mockSpace,
} from './test-mocks';

import { InteractiveMapComponent } from '@placeos/components';

describe('FindSpaceComponent', () => {
    const OrgServiceStub = mockOrgService;
    const SpacesServiceStub = mockSpacesService;
    const EventServiceStub = mockEventFormService;
    const FeatureFilterServiceStub = mockFeatureFilterService;
    const MapServiceStub = mockMapService;
    const RoomConfirmServiceStub = mockRoomConfirmService;
    const RouterStub = mockRouterStub;

    let spectator: Spectator<FindSpaceComponent>;
    let debugEl: DebugElement;

    const createComponent = createComponentFactory({
        component: FindSpaceComponent,
        imports: [
            ReactiveFormsModule,
            FormsModule,
            MatFormFieldModule,
            BookModule,
            CommonModule,
            BrowserModule,
            MatBottomSheetModule,
        ],
        providers: [
            {
                provide: MatBottomSheet,
                useValue: {
                    open: jest.fn((FilterSpaceComponent) => {}),
                    afterDismissed: jest.fn(),
                },
            },
            {
                provide: OrganisationService,
                useClass: OrgServiceStub,
            },
            {
                provide: SpacesService,
                useClass: SpacesServiceStub,
            },
            {
                provide: EventFormService,
                useClass: EventServiceStub,
            },
            { provide: Location, useValue: RouterStub },
            {
                provide: FeaturesFilterService,
                useClass: FeatureFilterServiceStub,
            },
            {
                provide: MapService,
                useClass: MapServiceStub,
            },
            { provide: RoomConfirmService, useClass: RoomConfirmServiceStub },
            {
                provide: InteractiveMapComponent,
                useValue: {
                    click: jest.fn(() => {}),
                    updateFeaturesList: jest.fn(() => {}),
                    updateView: jest.fn(() => {}),
                    createViewer: jest.fn(() => {}),
                },
            },
        ],
        declarations: [
            MockComponent(FindSpaceItemComponent),
            MockComponent(InteractiveMapComponent),
            MockComponent(FilterSpaceComponent),
        ],
    });

    beforeEach(() => {
        spectator = createComponent();
        debugEl = spectator.debugElement;
        spectator.inject(InteractiveMapComponent);
        spectator.inject(EventFormService);
        spectator.inject(FeaturesFilterService);

        MockInstance(FindSpaceItemComponent);
        MockInstance(FilterSpaceComponent);
        MockInstance(RoomDetailsComponent);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
    it('should open the Filter modal when clicked', async () => {
        const mat_bottom_sheet = spectator.inject(MatBottomSheet);
        (mat_bottom_sheet as any).afterDismissed.mockImplementation(() => ({
            value: of(true),
        }));
        const open_filter_spy = jest.spyOn(
            spectator.component.bottomSheet,
            'open'
        );
        const component_filter_spy = jest.spyOn(
            spectator.component,
            'openFilter'
        );

        expect(component_filter_spy).not.toHaveBeenCalled();
        expect(open_filter_spy).not.toHaveBeenCalled();
        const button = spectator.debugElement.query(
            By.css('button.filter-button')
        );
        expect(button.nativeElement.innerHTML).toContain('Filter');
        await button.nativeElement.click();
        spectator.detectChanges();

        expect(component_filter_spy).toBeCalled();
        expect(open_filter_spy).toBeCalled();
    });

    it('should open the room detail modal when List item is clicked', async () => {
        const room_confirm_service = spectator.inject(RoomConfirmService);
        const room_confirm_service_spy = jest.spyOn(
            room_confirm_service,
            'openRoomDetail'
        );
        const component_open_spy = jest.spyOn(
            spectator.component,
            'openRoomDetails'
        );
        await spectator.component.ngOnInit();

        spectator.component.selected_space = mockSpace;
        expect(component_open_spy).not.toHaveBeenCalled();
        expect(room_confirm_service_spy).not.toHaveBeenCalled();

        spectator.component.show_room_details$ = of(true);
        spectator.detectChanges();
        const button = spectator.debugElement.query(
            By.css('button.open-details-button')
        );
        expect(button.nativeElement.innerHTML).toContain('View Room');
        await button.nativeElement.click();

        spectator.detectChanges();
        expect(component_open_spy).toBeCalled();
        expect(room_confirm_service_spy).toBeCalled();
    });

    it('should show a default List view on page load', async () => {
        spectator.detectChanges();
        await spectator.component.ngOnInit();
        const spaceItems = ngMocks.findAll(FindSpaceItemComponent);
        const mapItems = ngMocks.findAll(InteractiveMapComponent);
        expect(spectator.component.space_view).toBe('listView');
        expect(spaceItems.length).toBeTruthy();
        expect(mapItems.length).toBe(0);
    });

    it('should display map elements in Map View', async () => {
        spectator.component.space_view = 'mapView';
        spectator.component.selected_level = of([
            {
                map_id: 'map-1',
                level: 'Level 1',
            },
        ]);
        spectator.detectChanges();

        const spaceItems = ngMocks.findAll(FindSpaceItemComponent);
        const mapItems = ngMocks.findAll(InteractiveMapComponent);
        expect(mapItems.length).toBeTruthy();
        expect(spaceItems.length).toBe(0);
        ngMocks.reset();
    });

    it('should open the room detail modal when a Map Area is clicked', async () => {
        spectator = createComponent();
        const map_mock = spectator.inject(InteractiveMapComponent);

        jest.spyOn(map_mock, 'click' as any).mockImplementation(() => {
            spectator.component.openRoomDetails();
        });

        const component_open_spy = jest.spyOn(
            spectator.component,
            'openRoomDetails'
        );

        spectator.component.space_view = 'mapView';
        spectator.component.selected_level = of([
            {
                map_id: 'map-1',
                level: 'Level 1',
            },
        ]);
        spectator.component.map_actions$ = of({
            id: 'map-1',
            action: 'click',
            callback: () => {
                spectator.component.openRoomDetails();
            },
        }) as any;
        spectator.component.selected_space = mockSpace;

        spectator.detectChanges();
        expect(component_open_spy).not.toHaveBeenCalled();

        (map_mock as any).click();
        spectator.detectChanges();

        expect(component_open_spy).toBeCalled();
    });
});
