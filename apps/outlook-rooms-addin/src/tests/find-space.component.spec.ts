import { FindSpaceComponent } from '../app/rooms/find-space/find-space.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent, MockInstance, ngMocks } from 'ng-mocks';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { of, Observable } from 'rxjs';
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
import { Router } from '@angular/router';

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
import { ComponentsModule, InteractiveMapComponent } from '@placeos/components';

import {
    mockOrgService,
    mockSpacesService,
    mockFeatureFilterService,
    mockMapService,
    mockRoomConfirmService,
    mockRouterStub,
    mockSpace,
    mockEventFlowOptions,
} from './test-mocks';

describe('FindSpaceComponent', () => {
    const OrgServiceStub = mockOrgService;
    const SpacesServiceStub = mockSpacesService;
    const FeatureFilterServiceStub = mockFeatureFilterService;
    const MapServiceStub = mockMapService;
    const RoomConfirmServiceStub = mockRoomConfirmService;
    const RouterStub = mockRouterStub;
    let spectator: Spectator<FindSpaceComponent>;

    const createComponent = createComponentFactory({
        component: FindSpaceComponent,
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
                useValue: {
                    setView: jest.fn(() => {}),
                    newForm: jest.fn(() => {}),
                    clearForm: jest.fn(),
                    storeForm: jest.fn(() => {}),
                    loadForm: jest.fn(),
                    postForm: jest.fn(),
                    setOptions: jest.fn(() => {}),
                    view: '',
                    available_spaces: of(mockSpace, mockSpace, mockSpace),
                    options: of(mockEventFlowOptions),
                },
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
            { provide: Router, useValue: { navigate: jest.fn() } },
        ],
        declarations: [
            MockComponent(FindSpaceItemComponent),
            MockComponent(InteractiveMapComponent),
            MockComponent(FilterSpaceComponent),
        ],
    });

    beforeEach(() => {
        jest.clearAllMocks();
        jest.resetModules();
        ngMocks.reset();
        spectator = createComponent();
        spectator.inject(EventFormService);
        spectator.inject(FeaturesFilterService);
        const event_service = spectator.inject(EventFormService);
        event_service.setOptions.mockImplementation(() => {
            return of(mockEventFlowOptions);
        });
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
    it('should open the Filter modal when clicked', () => {
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
        button.nativeElement.click();
        spectator.detectChanges();

        expect(component_filter_spy).toBeCalled();
        expect(open_filter_spy).toBeCalled();
    });

    it('should open the room detail modal when List item is clicked', () => {
        const room_confirm_service = spectator.inject(RoomConfirmService);
        const room_confirm_service_spy = jest.spyOn(
            room_confirm_service,
            'openRoomDetail'
        );
        const component_open_spy = jest.spyOn(
            spectator.component,
            'openRoomDetails'
        );

        spectator.component.selected_space = mockSpace;
        expect(component_open_spy).not.toHaveBeenCalled();
        expect(room_confirm_service_spy).not.toHaveBeenCalled();

        spectator.component.show_room_details$ = of(true);
        spectator.detectChanges();
        const button = spectator.debugElement.query(
            By.css('button.open-details-button')
        );
        expect(button.nativeElement.innerHTML).toContain('View Room');
        button.nativeElement.click();

        spectator.detectChanges();
        expect(component_open_spy).toBeCalled();
        expect(room_confirm_service_spy).toBeCalled();
    });

    it('should show a default List view on page load', () => {
        spectator = createComponent();
        spectator.component.spaces$ = of([mockSpace, mockSpace]);
        spectator.detectChanges();
        const spaceItems = ngMocks.findAll(FindSpaceItemComponent);
        const mapItems = ngMocks.findAll(InteractiveMapComponent);

        expect(spectator.component.space_view).toBe('listView');
        expect(spaceItems.length).toBeTruthy();
        expect(spectator.debugElement.nativeElement.innerHTML).toContain(
            'find-space-item'
        );
        expect(mapItems.length).toBe(0);
        expect(spectator.debugElement.nativeElement.innerHTML).not.toContain(
            'svg'
        );
    });

    it('should display map elements in Map View via click', async () => {
        spectator = createComponent();
        spectator.component.spaces$ = of([mockSpace, mockSpace]);
        spectator.component.selected_level = of([
            {
                map_id: 'map-1',
                level: 'Level 1',
            },
        ]);
        const map_button = spectator.debugElement.queryAll(By.css('button'))[2];
        expect(map_button.nativeElement.innerHTML).toContain('Map');
        map_button.nativeElement.click();
        expect(spectator.component.space_view).toBe('mapView');
        spectator.detectChanges();

        const spaceItems = ngMocks.findAll(FindSpaceItemComponent);
        const mapItems = ngMocks.findAll(InteractiveMapComponent);

        expect(mapItems).toBeTruthy();
        expect(spaceItems.length).toBe(0);
    });

    it('should display the correct number of spaces in search results', () => {
        spectator = createComponent();
        spectator.component.spaces$ = of([mockSpace, mockSpace, mockSpace]);
        spectator.detectChanges();

        expect(spectator.debugElement.nativeElement.outerHTML).toContain(
            '3 results found'
        );

        spectator.component.spaces$ = of([mockSpace]);
        spectator.detectChanges();
        expect(spectator.debugElement.nativeElement.outerHTML).toContain(
            '1 results found'
        );
    });
});
