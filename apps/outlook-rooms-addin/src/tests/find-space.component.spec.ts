import { FindSpaceComponent } from '../app/rooms/find-space/find-space.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import {
    FormsModule,
    ReactiveFormsModule,
    FormBuilder,
    Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BookModule } from '../app/rooms/book.module';
import { OrganisationService } from '@placeos/organisation';
import { SpacesService } from '@placeos/spaces';
import { EventFormService } from '@placeos/events';
import { Location } from '@angular/common';
import { FilterSpaceComponent } from '../app/rooms/filter-space/filter-space.component';
import { FindSpaceItemComponent } from '../app/rooms/find-space-item/find-space-item.component';
import { FeaturesFilterService } from '../app/rooms/features-filter.service';
import { MapService } from '../app/rooms/map.service';
import { RoomConfirmService } from '../app/rooms/room-confirm.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MockComponent } from 'ng-mocks';
import {
    mockMatDialogRef,
    mockOrgService,
    mockSpacesService,
    mockEventFormService,
    mockFeatureFilterService,
    mockMapService,
    mockRoomConfirmService,
    mockRouterStub,
} from './test-mocks';

describe('FindSpaceComponent', () => {
    const MatDialogStub = mockMatDialogRef;
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
        ],
        providers: [
            {
                provide: MatBottomSheet,
                useClass: MatDialogStub,
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
        declarations: [MockComponent(FindSpaceItemComponent)],
    });

    beforeEach(() => {
        spectator = createComponent();
        debugEl = spectator.debugElement;
        const event_service = spectator.inject(EventFormService);
        const org_service = spectator.inject(OrganisationService);
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should have a default list view of space items', () => {
        const event_service = spectator.inject(EventFormService);
        spectator.component.ngOnInit();
        const SpaceItems = debugEl.query(By.css('find-space-item'));
        expect(FindSpaceItemComponent).toBeTruthy();
        expect(spectator.component.space_view).toBe('listView');
    });

    // it('should open the Filter modal when clicked', () => {});

    // it('should display room details in modal when clicked', () => {});

    // it('should filter spaces based on features', () => {});
});
