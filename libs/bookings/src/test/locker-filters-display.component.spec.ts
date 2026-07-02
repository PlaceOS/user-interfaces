import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import { createSettingsServiceMock } from '@placeos/common/tests';
import { endOfDay } from 'date-fns';
import { MockComponent } from 'ng-mocks';

import { IconComponent } from 'libs/components/src/lib/icon.component';
import { BookingFormService } from '../lib/booking-form.service';
import { LockerFiltersDisplayComponent } from '../lib/locker-select-modal/locker-filters-display.component';

describe('LockerFiltersDisplayComponent', () => {
    let spectator: Spectator<LockerFiltersDisplayComponent>;
    const options = signal<any>({ features: [] });
    const model = signal<any>({
        date: new Date(2026, 5, 1, 9, 0, 0).valueOf(),
        duration: 60,
        all_day: false,
    });
    const set_options = jest.fn();
    const set_feature = jest.fn();

    const createComponent = createComponentFactory({
        component: LockerFiltersDisplayComponent,
        declarations: [MockComponent(IconComponent)],
        providers: [
            {
                provide: BookingFormService,
                useValue: {
                    options,
                    model,
                    setOptions: set_options,
                    setFeature: set_feature,
                },
            },
            {
                provide: SettingsService,
                useValue: createSettingsServiceMock(),
            },
        ],
    });

    beforeEach(() => {
        jest.clearAllMocks();
        options.set({ features: [] });
        model.set({
            date: new Date(2026, 5, 1, 9, 0, 0).valueOf(),
            duration: 60,
            all_day: false,
        });
        spectator = createComponent();
    });

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should render the selected date and time range', () => {
        expect(spectator.query('[filter-item][date]')).toExist();
        expect(spectator.query('[filter-item][time]')).toExist();
    });

    it('should compute the end time from date and duration', () => {
        const start = new Date(2026, 5, 1, 9, 0, 0).valueOf();
        expect(spectator.component.start()).toBe(start);
        expect(spectator.component.end()).toBe(start + 60 * 60 * 1000);
    });

    it('should compute the end time as end of day for all-day bookings', () => {
        const start = new Date(2026, 5, 1, 9, 0, 0).valueOf();
        model.set({ date: start, duration: 60, all_day: true });
        expect((spectator.component.end() as Date).valueOf()).toBe(
            endOfDay(start).valueOf(),
        );
    });

    it('should render a chip per active feature and allow removing it', () => {
        options.set({ features: ['charging', 'accessible'] });
        spectator.detectChanges();
        expect(spectator.queryAll('[filter-item][features]').length).toBe(2);
        spectator.click(
            spectator.queryAll('button[name="remove-locker-filter"]')[0],
        );
        expect(set_feature).toHaveBeenCalledWith('charging', false);
    });

    it('should render a favourites chip and allow removing it', () => {
        expect(
            spectator.query('button[name="remove-locker-favs-filter"]'),
        ).not.toExist();
        options.set({ features: [], show_fav: true });
        spectator.detectChanges();
        spectator.click('button[name="remove-locker-favs-filter"]');
        expect(set_options).toHaveBeenCalledWith({ show_fav: false });
    });

    it('should render an accessible chip and allow removing it', () => {
        expect(
            spectator.query('button[name="remove-locker-accessible-filter"]'),
        ).not.toExist();
        options.set({ features: [], show_accessible: true });
        spectator.detectChanges();
        spectator.click('button[name="remove-locker-accessible-filter"]');
        expect(set_options).toHaveBeenCalledWith({ show_accessible: false });
    });
});
