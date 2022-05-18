import {
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
} from '@angular/forms';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import { IconComponent } from '@placeos/components';
import { EventFormService } from '@placeos/events';
import {
    DateFieldComponent,
    DurationFieldComponent,
    TimeFieldComponent,
} from '@placeos/form-fields';
import { OrganisationService } from '@placeos/organisation';
import { MockComponent, MockModule } from 'ng-mocks';
import { of } from 'rxjs';
import { SpaceFiltersComponent } from '../../lib/space-select-modal/space-filters.component';
import { SpacesService } from '../../lib/spaces.service';

describe('SpaceFiltersComponent', () => {
    let spectator: Spectator<SpaceFiltersComponent>;
    const createComponent = createComponentFactory({
        component: SpaceFiltersComponent,
        providers: [
            {
                provide: MatBottomSheetRef,
                useValue: { dismiss: jest.fn() },
            },
            {
                provide: SettingsService,
                useValue: { get: jest.fn() },
            },
            {
                provide: OrganisationService,
                useValue: { level_list: of([]) },
            },
            {
                provide: SpacesService,
                useValue: { features: of(['Whiteboard']) },
            },
            {
                provide: EventFormService,
                useValue: {
                    form: new FormGroup({
                        date: new FormControl(),
                        duration: new FormControl(),
                        location: new FormControl(),
                    }),
                },
            },
        ],
        declarations: [
            MockComponent(DateFieldComponent),
            MockComponent(TimeFieldComponent),
            MockComponent(DurationFieldComponent),
            MockComponent(IconComponent)
        ],
        imports: [
            MockModule(MatCheckboxModule),
            MockModule(MatFormFieldModule),
            MockModule(MatSelectModule),
            MockModule(FormsModule),
            MockModule(ReactiveFormsModule),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => expect(spectator.component).toBeTruthy());

    it('should allow changing location', () =>
        expect('[name="location"]').toExist());

    it('should allow date', () => expect('[name="date"]').toExist());

    it('should allow start time', () =>
        expect('[name="start-time"]').toExist());

    it('should allow end time', () => expect('[name="end-time"]').toExist());

    it('should allow toggling favourites', () =>
        expect('[name="fav"]').toExist());

    it('should allow toggling features', () =>
        expect('[name="feat"]').toExist());

    it('should allow closing', () => {
        expect('button[close]').toExist();
        spectator.click('button[close]');
        expect(spectator.inject(MatBottomSheetRef).dismiss).toBeCalled();
    });
});
