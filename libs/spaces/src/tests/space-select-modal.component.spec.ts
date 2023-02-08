import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { fakeAsync } from '@angular/core/testing';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import { IconComponent } from '@placeos/components';
import { Building, OrganisationService } from '@placeos/organisation';
import { MockComponent, MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import { SpaceSelectItemComponent } from '../lib/space-select-item.component';
import { SpaceSelectModalComponent } from '../lib/space-select-modal.component';

jest.mock('libs/calendar/src/lib/calendar.fn');
jest.mock('libs/bookings/src/lib/booking.utilities');

import * as cal_mod from 'libs/calendar/src/lib/calendar.fn';
import * as book_util from 'libs/bookings/src/lib/booking.utilities';
import { Space } from '../lib/space.class';
import { generateMockSpace } from '../lib/space.utilities';

describe('SpaceSelectModalComponent', () => {
    let spectator: Spectator<SpaceSelectModalComponent>;
    let spaces: Space[];
    const building = new Building({ id: 'zone-1' });
    const createComponent = createComponentFactory({
        component: SpaceSelectModalComponent,
        declarations: [
            MockComponent(IconComponent),
            MockComponent(SpaceSelectItemComponent),
        ],
        providers: [
            MockProvider(OrganisationService, {
                building,
                buildings: [building],
                building_settings: { 'zone-1': {} },
            }),
            MockProvider(SettingsService, { get: jest.fn() }),
            MockProvider(MAT_DIALOG_DATA, {}),
        ],
        imports: [
            MatFormFieldModule,
            MatSelectModule,
            MatProgressSpinnerModule,
        ],
    });

    beforeEach(() => {
        spaces = new Array(30).fill(0).map(
            (_, idx) =>
                new Space(
                    generateMockSpace({
                        zones: idx % 2 === 0 ? ['zone-1'] : ['zone-2'],
                    })
                )
        );
        (cal_mod as any).querySpaceCalendarAvailability = jest.fn(() =>
            of(spaces)
        );
        (book_util as any).filterSpacesRules = jest.fn((l) => l);
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should list spaces', fakeAsync(() => {
        expect(cal_mod.querySpaceCalendarAvailability).toHaveBeenCalled();
        expect('a-space-select-item').toHaveLength(30);
    }));

    it('should allow selecting single spaces', () => {
        const spy = jest.spyOn(spectator.component, 'save');
        spectator.detectChanges();
        spectator.click('a-space-select-item');
        expect(spy).toHaveBeenCalled();
    });

    it('should allow selecting multiple spaces', () => {
        const spy = jest.spyOn(spectator.component, 'save');
        const select_spy = jest.spyOn(spectator.component, 'spaceSelected');
        expect('footer').not.toExist();
        (spectator.inject(SettingsService).get as any).mockImplementation(
            () => true
        );
        spectator.detectChanges();
        expect(spectator.component.spaces).toHaveLength(0);
        expect('a-space-select-item[type="selected"]').not.toExist();
        spectator.click('a-space-select-item');
        expect(spy).not.toHaveBeenCalled();
        expect(select_spy).toHaveBeenCalled();
        expect(spectator.component.spaces).toHaveLength(1);
        spectator.detectChanges();
        expect('a-space-select-item[type="selected"]').toExist();
        expect('footer').toExist();
        spectator.click('footer button');
        expect(spy).toHaveBeenCalled();
    });

    it('should have a loading state', () => {
        expect('[load] p').not.toExist();
        spectator.component.loading = true;
        spectator.detectChanges();
        expect('[load] p').toExist();
        expect('[load] p').toContainText('Finding available spaces...');
        spectator.component.loading = false;
        spectator.detectChanges();
        expect('[load] p').not.toExist();
    });

    it('should have empty state', () => {
        (cal_mod.querySpaceCalendarAvailability as any).mockImplementation(() =>
            of([])
        );
        spectator.component.building.next(building);
        spectator.detectChanges();
        expect('a-space-select-item').not.toExist();
        expect('[empty]').toExist();
    });
});
