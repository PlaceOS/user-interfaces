import { signal } from '@angular/core';
import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import { createSettingsServiceMock } from '@placeos/common/tests';
import { MockComponent, MockPipe } from 'ng-mocks';

import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { BookingFormService } from '../lib/booking-form.service';
import { DeskFiltersDisplayComponent } from '../lib/desk-select-modal/desk-filters-display.component';

describe('DeskFiltersDisplayComponent', () => {
    let spectator: Spectator<DeskFiltersDisplayComponent>;
    const options = signal<any>({});
    const model = signal<any>({ date: 0, duration: 60, all_day: false });
    const set_options = jest.fn((o) => options.update((v) => ({ ...v, ...o })));
    const set_feature = jest.fn();

    const createComponent = createComponentFactory({
        component: DeskFiltersDisplayComponent,
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
        declarations: [
            MockComponent(IconComponent),
            MockPipe(TranslatePipe, (v) => v),
        ],
    });

    beforeEach(() => {
        jest.clearAllMocks();
        options.set({});
        model.set({ date: 0, duration: 60, all_day: false });
        spectator = createComponent();
    });

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should render the date and time range chips', () => {
        model.set({
            date: new Date('2026-07-02T09:00:00Z').valueOf(),
            duration: 120,
            all_day: false,
        });
        spectator.detectChanges();
        expect(spectator.query('[filter-item][date]')).toExist();
        expect(spectator.query('[filter-item][time]')).toExist();
        expect(spectator.query('[filter-item][time]')).toContainText('—');
    });

    it('should show ALL_DAY label when the booking is all day', () => {
        model.set({ date: 0, duration: 60, all_day: true });
        spectator.detectChanges();
        expect(spectator.query('[filter-item][time]')).toContainText(
            'COMMON.ALL_DAY',
        );
    });

    it('should render a chip per selected feature', () => {
        options.set({ features: ['monitor', 'sit-stand'] });
        spectator.detectChanges();
        const chips = spectator.queryAll('[filter-item][features]');
        expect(chips.length).toBe(2);
        expect(chips[0]).toContainText('monitor');
    });

    it('should remove a feature when its close button is clicked', () => {
        options.set({ features: ['monitor'] });
        spectator.detectChanges();
        spectator.click('button[name="remove-desk-filter"]');
        expect(set_feature).toHaveBeenCalledWith('monitor', false);
    });

    it('should show a favourites-only chip when show_fav is set', () => {
        options.set({ show_fav: true });
        spectator.detectChanges();
        expect(spectator.query('button[name="remove-desk-favs-filter"]')).toExist();
        spectator.click('button[name="remove-desk-favs-filter"]');
        expect(set_options).toHaveBeenCalledWith({ show_fav: false });
    });

    it('should compute the end time from date and duration', () => {
        model.set({ date: 1_000_000, duration: 30, all_day: false });
        spectator.detectChanges();
        expect(spectator.component.end()).toBe(1_000_000 + 30 * 60 * 1000);
    });
});
