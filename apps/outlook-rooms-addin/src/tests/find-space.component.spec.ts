import { FindSpaceComponent } from '../app/rooms/find-space/find-space.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { of, Observable } from 'rxjs';
import {
    FormsModule,
    ReactiveFormsModule,
    FormBuilder,
    Validators,
} from '@angular/forms';
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
import { FeaturesFilterService } from '../app/rooms/features-filter.service';
import { MapService } from '../app/rooms/map.service';
import { RoomConfirmService } from '../app/rooms/room-confirm.service';
import {
    MatBottomSheetModule,
    MatBottomSheet,
    MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { MatDialogRef } from '@angular/material/dialog';
import { MockComponent, MockInstance, ngMocks } from 'ng-mocks';
import {
    mockOrgService,
    mockSpacesService,
    mockEventFormService,
    mockFeatureFilterService,
    mockMapService,
    mockRoomConfirmService,
    mockRouterStub,
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
                    open: jest.fn(),
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
        const event_service = spectator.inject(EventFormService);
        const org_service = spectator.inject(OrganisationService);

        MockInstance(FindSpaceItemComponent);
        MockInstance(InteractiveMapComponent);
        MockInstance(FilterSpaceComponent);
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
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
        await spectator.component.ngOnInit();
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
    });

    it('should open the Filter modal when clicked', async () => {
        const mat_bottom_sheet = spectator.inject(MatBottomSheet);
        (mat_bottom_sheet as any).afterDismissed.mockImplementation(() => ({
            value: of(true),
        }));
        await spectator.component.ngOnInit();
        const filterSpaceComponent = ngMocks.findAll(FilterSpaceComponent);
        expect(filterSpaceComponent.length).toBe(0);

        const open_filter_spy = jest.spyOn(
            spectator.component.bottomSheet,
            'open'
        );

        spectator.component.openFilter();
        spectator.detectChanges();
        expect(open_filter_spy).toBeCalled();

        expect(ngMocks.findAll(FilterSpaceComponent)).toBeTruthy();
    });

    // it('should display room details in modal when clicked', () => {});

    // it('should filter spaces based on features', () => {});
});
