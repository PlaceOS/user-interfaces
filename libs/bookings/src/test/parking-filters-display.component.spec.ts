import { signal } from '@angular/core';
import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { OrganisationService } from '@placeos/common';
import { createSettingsServiceMock } from '@placeos/common/tests';
import { MockComponent } from 'ng-mocks';

import { SettingsService } from 'libs/common/src/lib/settings.service';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { BookingFormService } from '../lib/booking-form.service';
import { ParkingFiltersDisplayComponent } from '../lib/parking-select-modal/parking-filters-display.component';

describe('ParkingFiltersDisplayComponent', () => {
    let spectator: Spectator<ParkingFiltersDisplayComponent>;
    const base_date = new Date(2026, 5, 15, 9, 0, 0, 0).valueOf();
    const options = signal<any>({ zone_id: 'lvl-1', features: [] });
    const model = signal<any>({ date: base_date, duration: 120 });
    const setOptions = jest.fn((value) => options.set(value));

    const org_mock = {
        levelWithID: jest.fn((ids: string[]) =>
            ids?.[0] === 'lvl-1'
                ? { id: 'lvl-1', display_name: 'Level One', name: 'lvl-1' }
                : null,
        ),
        building: { id: 'bld-1', display_name: 'Building One', name: 'bld-1' },
    };

    const createComponent = createComponentFactory({
        component: ParkingFiltersDisplayComponent,
        providers: [
            {
                provide: BookingFormService,
                useValue: { options, model, setOptions },
            },
            { provide: OrganisationService, useValue: org_mock },
            { provide: SettingsService, useValue: createSettingsServiceMock() },
        ],
        declarations: [MockComponent(IconComponent)],
    });

    beforeEach(() => {
        jest.clearAllMocks();
        options.set({ zone_id: 'lvl-1', features: [] });
        model.set({ date: base_date, duration: 120 });
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should display the level location resolved from the zone', () => {
        expect(spectator.query('[filter-item][zone]')).toContainText(
            'Level One',
        );
    });

    it('should fall back to the building location when no level matches', () => {
        options.set({ zone_id: 'unknown', features: [] });
        spectator.detectChanges();
        expect(spectator.query('[filter-item][zone]')).toContainText(
            'Building One',
        );
    });

    it('should compute the end time from the model duration', () => {
        expect(spectator.component.start()).toBe(base_date);
        expect(spectator.component.end()).toBe(base_date + 120 * 60 * 1000);
    });

    it('should render a chip per selected feature', () => {
        options.set({ zone_id: 'lvl-1', features: ['EV', 'Accessible'] });
        spectator.detectChanges();
        const chips = spectator.queryAll('[filter-item]:not([zone]):not([date]):not([time])');
        expect(chips.length).toBe(2);
        expect(spectator.query('section')).toContainText('EV');
        expect(spectator.query('section')).toContainText('Accessible');
    });

    it('should remove a feature when its chip button is clicked', () => {
        options.set({ zone_id: 'lvl-1', features: ['EV', 'Accessible'] });
        spectator.detectChanges();
        const buttons = spectator.queryAll(
            '[filter-item]:not([zone]):not([date]):not([time]) button',
        );
        spectator.click(buttons[0]);
        expect(setOptions).toHaveBeenCalledWith(
            expect.objectContaining({ features: ['Accessible'] }),
        );
    });
});
