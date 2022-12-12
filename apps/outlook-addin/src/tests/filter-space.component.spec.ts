import { FilterSpaceComponent } from '../app/rooms/filter-space/filter-space.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockProvider, ngMocks } from 'ng-mocks';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
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
import { EventFormService } from '@placeos/events';
import { FeaturesFilterService } from '../app/rooms/features-filter.service';
import { ComponentsModule, InteractiveMapComponent } from '@placeos/components';
import {
    mockSpace,
    mockSpaceWithViews,
    mockEventFlowOptions,
    mockForm,
} from './test-mocks';
import { OrganisationService } from '@placeos/organisation';

describe('FindSpaceComponent', () => {
    const formModel = mockForm;
    const fb = new FormBuilder();
    const form = fb.group(formModel);

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
            MockProvider(MatBottomSheet, {
                open: jest.fn(() => {}),
                afterDismissed: jest.fn(),
            } as any),
            MockProvider(OrganisationService, { building_list: of([]) }),
            MockProvider(MAT_BOTTOM_SHEET_DATA, {}),
            MockProvider(MatBottomSheetRef, {
                dismiss: jest.fn(),
            }),
            MockProvider(FeaturesFilterService, {
                features$: of([
                    {
                        name: 'Video Conference (VC)',
                        id: 'VidConf',
                        value: false,
                    },
                    {
                        name: 'Conference Phone',
                        id: 'ConfPhone',
                        value: false,
                    },
                    {
                        name: 'Wireless Content Sharing',
                        id: 'Wireless',
                        value: false,
                    },
                    { name: 'Video Wall', id: 'VidWall', value: false },
                    { name: 'Whiteboard', id: 'Whiteboard', value: false },
                    { name: 'Jamboard', id: 'Jamboard', value: false },
                    { name: 'Projector', id: 'Projector', value: false },
                    { name: 'Views', id: 'Views', value: false },
                ]),
                applyFilter: jest.fn(),
                getSelectedFeatures: jest.fn(),
            }),
            MockProvider(EventFormService, {
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
            } as any),
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
                !event_service.form.contains('title') ||
                !event_service.form.contains('date') ||
                !event_service.form.contains('duration')
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
        spectator.component.getSelectedFeatures();
        spectator.detectChanges();
        expect(get_features_spy).toHaveBeenCalled();
        spectator.component.applyFilters();
        spectator.detectChanges();
        expect(check_boxes).toBeTruthy();
        expect(spectator.debugElement.nativeElement.innerHTML).toContain(
            'mat-checkbox'
        );

        spectator.click('button.filter-button');
        spectator.detectChanges();

        expect(update_features_spy).toHaveBeenCalled();
    });
});
