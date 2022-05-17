import { createRoutingFactory, Spectator } from '@ngneat/spectator/jest';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MockComponent } from 'ng-mocks';
import { SpaceFiltersDisplayComponent } from '../../lib/space-select-modal/space-filters-display.component';
import { EventFormService } from '@placeos/events';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Building, OrganisationService } from '@placeos/organisation';

describe('SpaceFiltersDisplayComponent', () => {
    let spectator: Spectator<SpaceFiltersDisplayComponent>;
    const createComponent = createRoutingFactory({
        component: SpaceFiltersDisplayComponent,
        providers: [
            {
                provide: MatBottomSheet,
                useValue: {
                    open: jest.fn(),
                },
            },
            {
                provide: EventFormService,
                useValue: {
                    form: new FormGroup({}),
                    options: new BehaviorSubject({ features: ['Whiteboard'] }),
                    setOptions: jest.fn(),
                },
            },
            {
                provide: OrganisationService,
                useValue: {
                    levelWithID: jest.fn(),
                    building: new Building({ name: 'Test' }),
                },
            },
        ],
        declarations: [],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should allow user to open edit filters', () => {
        expect(spectator.inject(MatBottomSheet).open).not.toBeCalled();
        expect('button[filters]').toExist();
        spectator.click('button[filters]');
        expect(spectator.inject(MatBottomSheet).open).toBeCalled();
    });

    it('should allow toggling results view', () => {
        expect('button[map]').toExist();
        expect('button[list]').toExist();
        spectator.click('button[map]');
    });

    it('should show selected filters', () => {
        expect('[filter-item][zone]').toExist();
        expect('[filter-item][date]').toExist();
        expect('[filter-item][time]').toExist();
        expect('[filter-item][count]').toExist();
    });

    it('should allow removing filters', () => {
        expect('[filter-item] button').toExist();
        spectator.click('[filter-item] button');
        spectator.detectChanges();
        expect(spectator.inject(EventFormService).setOptions).toBeCalledWith({
            features: [],
        });
    });
});
