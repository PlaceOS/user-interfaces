import { FilterSpaceComponent } from '../app/rooms/filter-space/filter-space.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent, MockInstance, ngMocks } from 'ng-mocks';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatBottomSheetModule,
    MatBottomSheet,
    MAT_BOTTOM_SHEET_DATA,
    MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';

import { OrganisationService } from '@placeos/organisation';
import { SpacesService } from '@placeos/spaces';
import { EventFormService } from '@placeos/events';
import { Location } from '@angular/common';
import { FindSpaceComponent } from '../app/rooms/find-space/find-space.component';
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
    mockSpaceWithViews,
    mockEventFlowOptions,
    mockFeatures,
    mockGenerateEventForm,
    mockForm,
} from './test-mocks';

describe('FindSpaceComponent', () => {
    const formModel = mockForm;
    const fb = new FormBuilder();
    const form = fb.group(formModel);

    const OrgServiceStub = mockOrgService;
    const SpacesServiceStub = mockSpacesService;
    const FeatureFilterServiceStub = mockFeatureFilterService;
    const MapServiceStub = mockMapService;
    const RoomConfirmServiceStub = mockRoomConfirmService;
    const RouterStub = mockRouterStub;
    let spectator: Spectator<FilterSpaceComponent>;

    const createComponent = createComponentFactory({
        component: FilterSpaceComponent,
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
                provide: MAT_BOTTOM_SHEET_DATA,
                useValue: {},
            },
            {
                provide: MatBottomSheetRef,
                useValue: {
                    dismiss: jest.fn(),
                },
            },
            {
                provide: FeaturesFilterService,
                useValue: {
                    features$: of(mockFeatures),
                    applyFilter: jest.fn(),
                    getSelectedFeatures: jest.fn(),
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
                    available_spaces: of(
                        mockSpace,
                        mockSpace,
                        mockSpace,
                        mockSpaceWithViews
                    ),
                    options: of(mockEventFlowOptions),
                },
            },
        ],
        declarations: [],
    });

    beforeEach(() => {
        spectator = createComponent();
        spectator.inject(FeaturesFilterService);
        const event_service: any = spectator.inject(EventFormService);
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
                event_service.form.controls.title == null ||
                event_service.form.controls.date == null ||
                event_service.form.controls.duration == null
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
    it('should update features based on checkboxes', async () => {
        const filter_service = spectator.inject(FeaturesFilterService);
        const event_service = spectator.inject(EventFormService);
        await event_service.newForm();

        const get_features_spy = jest.spyOn(
            filter_service,
            'getSelectedFeatures'
        );
        const update_features_spy = jest.spyOn(filter_service, 'applyFilter');
        const check_boxes = spectator.debugElement.queryAll(
            By.css('mat-checkbox')
        );

        spectator.component.ngOnInit();
        spectator.detectChanges();
        spectator.component.getSelectedFeatures();
        spectator.detectChanges();
        expect(get_features_spy).toHaveBeenCalled();
        spectator.component.applyFilters();
        spectator.detectChanges();
        expect(check_boxes).toBeTruthy();
        expect(spectator.debugElement.nativeElement.innerHTML).toContain(
            'mat-checkbox'
        );

        const filter_button = spectator.debugElement.query(
            By.css('button.filter-button')
        );

        expect(filter_button.nativeElement.innerHTML).toContain(
            'Apply Filters'
        );
        filter_button.nativeElement.click();
        spectator.detectChanges();

        expect(update_features_spy).toHaveBeenCalled();
    });
});
