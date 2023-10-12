import { createRoutingFactory, Spectator } from '@ngneat/spectator/jest';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MockComponent, MockProvider } from 'ng-mocks';
import { SpaceFiltersDisplayComponent } from '../../lib/space-select-modal/space-filters-display.component';
import { EventFormService } from '@placeos/events';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Building, OrganisationService } from '@placeos/organisation';
import { IconComponent } from '@placeos/components';
import { SettingsService } from '@placeos/common';

describe('SpaceFiltersDisplayComponent', () => {
    let spectator: Spectator<SpaceFiltersDisplayComponent>;
    const createComponent = createRoutingFactory({
        component: SpaceFiltersDisplayComponent,
        providers: [
            MockProvider(MatBottomSheet, { open: jest.fn() }),
            MockProvider(EventFormService, {
                form: new FormGroup({}),
                options: new BehaviorSubject({ features: ['Whiteboard'] }),
                setOptions: jest.fn(),
            } as any),
            MockProvider(OrganisationService, {
                levelWithID: jest.fn(),
                building: new Building({ name: 'Test' }),
            }),
            MockProvider(SettingsService, { get: jest.fn() }),
        ],
        declarations: [MockComponent(IconComponent)],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should allow user to open edit filters', () => {
        expect(spectator.inject(MatBottomSheet).open).not.toBeCalled();
        expect('button[name="edit-space-filters"]').toExist();
        spectator.click('button[name="edit-space-filters"]');
        expect(spectator.inject(MatBottomSheet).open).toBeCalled();
    });

    it('should allow toggling results view', () => {
        expect('button[name="view-space-map"]').toExist();
        expect('button[name="view-space-list"]').toExist();
        spectator.click('button[name="view-space-map"]');
    });

    it('should show selected filters', () => {
        expect('[filter-item][zone]').toExist();
        expect('[filter-item][date]').toExist();
        expect('[filter-item][time]').toExist();
        expect('[filter-item][count]').toExist();
    });

    it('should allow removing filters', async () => {
        expect('[filter-item] button').toExist();
        spectator.click('[filter-item] button');
        spectator.detectChanges();
        await spectator.fixture.whenStable();
        expect(spectator.inject(EventFormService).setOptions).toBeCalledWith({
            features: [],
        });
    });
});
