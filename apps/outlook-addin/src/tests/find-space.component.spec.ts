import { FindSpaceComponent } from '../app/rooms/find-space/find-space.component';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { MockComponent, MockInstance, ngMocks } from 'ng-mocks';
import { By } from '@angular/platform-browser';
import { of, Observable } from 'rxjs';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BookModule } from '../app/rooms/book.module';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatBottomSheetModule,
    MatBottomSheet,
} from '@angular/material/bottom-sheet';

import { OrganisationService } from '@placeos/organisation';
import { SpacesService } from '@placeos/spaces';
import { EventFormService } from '@placeos/events';
import { FilterSpaceComponent } from '../app/rooms/filter-space/filter-space.component';
import { FindSpaceItemComponent } from '../app/rooms/find-space-item/find-space-item.component';
import { FeaturesFilterService } from '../app/rooms/features-filter.service';
import { MapService } from '../app/rooms/map.service';
import { RoomConfirmService } from '../app/rooms/room-confirm.service';
import { ComponentsModule, InteractiveMapComponent } from '@placeos/components';
import { mockSpace, mockForm, mockEventFlowOptions } from './test-mocks';

describe('FindSpaceComponent', () => {
    const formModel = mockForm;
    const fb = new FormBuilder();
    const form = fb.group(formModel);

    let spectator: SpectatorRouting<FindSpaceComponent>;

    const createComponent = createRoutingFactory({
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
                useValue: {
                    initialised: of(true),
                    features_loaded$: of(true),
                    building_list: of([
                        {
                            id: 1,
                            name: 'test-building',
                            zone_id: 'zone-1',
                        },
                        {
                            id: 1,
                            name: 'test-building',
                            zone_id: 'zone-1',
                        },
                    ]),
                    active_building: of({
                        id: 1,
                        name: 'test-building',
                        zone_id: 'zone-1',
                    }),
                    building: null,
                    levelsForBuilding: jest.fn(),
                },
            },
            {
                provide: SpacesService,
                useValue: {
                    initialised: of(true),
                    features: of(['Whiteboard', 'Jamboard']),
                },
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
            {
                provide: FeaturesFilterService,
                useValue: {
                    features_loaded$: of(true),
                    locatable_spaces$: of([
                        {
                            id: '123',
                            name: 'Space-1',
                            map_id: 'map-id-1',
                            level: {
                                id: '123',
                                parent_id: '',
                                name: 'Building-1',
                                display_name: '',
                                capacity: 40,
                                number: 'url',
                                map_id: 'map-id-1',
                                tags: ['tag-1'],
                                settings: {},
                                locations: [] as any,
                            },
                            zones: ['zone-1'],
                        },
                        {
                            id: '123',
                            name: 'Space-1',
                            map_id: 'map-id-1',
                            level: {
                                id: '123',
                                parent_id: '',
                                name: 'Building-1',
                                display_name: '',
                                capacity: 40,
                                number: 'url',
                                map_id: 'map-id-1',
                                tags: ['tag-1'],
                                settings: {},
                                locations: [] as any,
                            },
                            zones: ['zone-1'],
                        },
                    ]),
                    maps_list$: of({
                        map_id: 'map-1',
                        level: 'Level 1',
                    }),
                    map_features: [
                        {
                            track_id: '123',
                            location: { x: 0.3, y: 0.8 },
                        },
                    ],
                    locateSpaces: jest.fn(),
                },
            },
            {
                provide: MapService,
                useValue: {
                    features_loaded$: of(true),
                    locateSpaces: jest.fn(),
                    locatable_spaces$: of([
                        {
                            id: '123',
                            name: 'Space-1',
                            map_id: 'map-id-1',
                            level: {
                                id: '123',
                                parent_id: '',
                                name: 'Building-1',
                                display_name: '',
                                capacity: 40,
                                number: 'url',
                                map_id: 'map-id-1',
                                tags: ['tag-1'],
                                settings: {},
                                locations: [] as any,
                            },
                            zones: ['zone-1'],
                        },
                        {
                            id: '123',
                            name: 'Space-1',
                            map_id: 'map-id-1',
                            level: {
                                id: '123',
                                parent_id: '',
                                name: 'Building-1',
                                display_name: '',
                                capacity: 40,
                                number: 'url',
                                map_id: 'map-id-1',
                                tags: ['tag-1'],
                                settings: {},
                                locations: [] as any,
                            },
                            zones: ['zone-1'],
                        },
                    ]),
                    maps_list$: of({
                        map_id: 'map-1',
                        level: 'Level 1',
                    }),
                    map_features: [
                        {
                            track_id: '123',
                            location: { x: 0.3, y: 0.8 },
                        },
                    ],
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
            MockComponent(FindSpaceItemComponent),
            MockComponent(InteractiveMapComponent),
            MockComponent(FilterSpaceComponent),
        ],
    });

    beforeEach(() => {
        spectator = createComponent();
        spectator.inject(FeaturesFilterService);
        const org_service: any = spectator.inject(OrganisationService);
        const map_service: any = spectator.inject(MapService);
        const event_service: any = spectator.inject(EventFormService);
        const feature_filter_service: any = spectator.inject(
            FeaturesFilterService
        );

        org_service.levelsForBuilding.mockImplementation((bld) => {
            return [
                {
                    id: '123',
                    parent_id: '',
                    name: 'Building-1',
                    display_name: '',
                    capacity: 40,
                    number: 'url',
                    map_id: 'map-id-1',
                    tags: ['tag-1'],
                    settings: {},
                    locations: [] as any,
                },
                {
                    id: '123',
                    parent_id: '',
                    name: 'Building-1',
                    display_name: '',
                    capacity: 40,
                    number: 'url',
                    map_id: 'map-id-1',
                    tags: ['tag-1'],
                    settings: {},
                    locations: [] as any,
                },
            ];
        });
        map_service.locateSpaces.mockImplementation((spaces) => {
            map_service.locatable_spaces$ = of(spaces);
        });

        feature_filter_service.locateSpaces.mockImplementation((spaces) => {
            feature_filter_service.locatable_spaces$ = of(spaces);
        });

        event_service.setOptions.mockImplementation(() => {
            return of(mockEventFlowOptions);
        });

        event_service.setView.mockImplementation((_) => {
            event_service.view = _;
            spectator.detectChanges();
        });
        event_service.newForm.mockImplementation((_) => {
            event_service.form = fb.group(formModel);
        });
        event_service.storeForm.mockImplementation((_) => {
            if (
                event_service.form.contains('title') ||
                event_service.form.contains('date') ||
                event_service.form.contains('duration')
            )
                return null;
        });
    });

    afterEach(() => {
        jest.clearAllMocks();
        jest.resetModules();
        ngMocks.reset();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
    it('should open the Filter modal when clicked', () => {
        const event_service = spectator.inject(EventFormService);
        event_service.newForm();
        const mat_bottom_sheet = spectator.inject(MatBottomSheet);
        (mat_bottom_sheet.open as any).mockImplementation(
            (template, config) => {
                return '' as any;
            }
        );
        const component_filter_spy = jest.spyOn(
            spectator.component,
            'openFilter'
        );

        expect(component_filter_spy).not.toHaveBeenCalled();
        expect(mat_bottom_sheet.open).not.toHaveBeenCalled();

        spectator.click('button.filter-button');
        spectator.detectChanges();

        expect(component_filter_spy).toBeCalled();
        expect(mat_bottom_sheet.open).toBeCalled();
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
        (spectator.component.spaces$ as any) = of([mockSpace, mockSpace]);
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

    it('should display map elements in Map View via click', () => {
        (spectator.component.spaces$ as any) = of([mockSpace, mockSpace]);
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

        const spaceItems = ngMocks.findAll(FindSpaceItemComponent);
        const mapItems = ngMocks.findAll(InteractiveMapComponent);

        expect(mapItems).toBeTruthy();
        expect(spaceItems.length).toBe(0);
    });

    it('should display the correct number of spaces in search results', () => {
        (spectator.component.spaces$ as any) = of([
            mockSpace,
            mockSpace,
            mockSpace,
        ]);
        spectator.detectChanges();

        expect(spectator.debugElement.nativeElement.outerHTML).toContain(
            '3 results found'
        );

        (spectator.component.spaces$ as any) = of([mockSpace]);
        spectator.detectChanges();
        expect(spectator.debugElement.nativeElement.outerHTML).toContain(
            '1 results found'
        );
    });
});
