import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { SettingsService } from '@placeos/common';
import { createSettingsServiceMock } from '@placeos/common/tests';
import { SettingsToggleComponent } from 'libs/components/src/lib/settings-toggle.component';
import { DurationFieldComponent } from 'libs/form-fields/src/lib/duration-field.component';
import { MockComponent, MockProvider } from 'ng-mocks';

import { AssetFiltersComponent } from '../lib/asset-select-modal/asset-filters.component';
import { AssetStateService } from '../lib/asset-state.service';

describe('AssetFiltersComponent', () => {
    let spectator: Spectator<AssetFiltersComponent>;
    let state_options: { date: number; duration: number };
    let settings_mock: ReturnType<typeof createSettingsServiceMock>;
    const category_list = signal<{ id: string; name: string }[]>([]);
    const options = signal<any>({});

    const createComponent = createComponentFactory({
        component: AssetFiltersComponent,
        declarations: [
            MockComponent(SettingsToggleComponent),
            MockComponent(DurationFieldComponent),
        ],
        providers: [
            { provide: SettingsService, useFactory: () => settings_mock },
            MockProvider(AssetStateService, {
                search: signal(''),
                category: signal<string[]>([]),
                category_list: category_list,
                options: options,
                getOptions: () => state_options,
            }),
        ],
    });

    beforeEach(() => {
        settings_mock = createSettingsServiceMock();
        state_options = {
            date: new Date('2026-04-01T09:00:00').valueOf(),
            duration: 60,
        };
        options.set(state_options);
        category_list.set([
            { id: 'cat-1', name: 'Audio' },
            { id: 'cat-2', name: 'Video' },
        ]);
        spectator = createComponent();
    });

    it('should render a toggle for each category', () => {
        spectator.detectChanges();
        // One toggle for the deliver-at-time option plus one per category
        expect(spectator.queryAll('settings-toggle')).toHaveLength(3);
    });

    it('should not generate day options for single-day durations', () => {
        spectator.detectChanges();
        TestBed.tick();

        expect(spectator.component.day_options()).toEqual([]);
    });

    it('should generate day options for multi-day durations', () => {
        // Hide the delivery options so the day picker (mat-select) is not
        // rendered, which the test harness cannot lay out
        spectator.setInput('search', true);
        state_options.duration = 3 * 24 * 60;
        options.set({ ...state_options });
        TestBed.tick();

        // 09:00 on the 1st to 09:00 on the 4th touches four days
        expect(spectator.component.day_options()).toEqual(
            [1, 2, 3, 4].map((day, id) => ({
                id,
                value: new Date(2026, 3, day).valueOf(),
            })),
        );
    });

    it('should limit the delivery time to the booking and the selected day', () => {
        spectator.detectChanges();
        expect(spectator.component.max_offset()).toBe(60);

        spectator.setInput('search', true);
        state_options.duration = 3 * 24 * 60;
        options.set({ ...state_options });
        TestBed.tick();
        // 09:00 to the end of the first day
        expect(spectator.component.max_offset()).toBe(14 * 60 + 59);

        spectator.component.offset_day.set(1);
        expect(spectator.component.max_offset()).toBe(24 * 60 - 1);
    });

    it('should ignore the minimum offset once a later day is selected', () => {
        settings_mock.get.mockImplementation((key: string) =>
            key === 'app.assets.min_offset' ? 15 : undefined,
        );
        spectator = createComponent();
        expect(spectator.component.min_offset()).toBe(15);

        spectator.component.offset_day.set(1);

        expect(spectator.component.min_offset()).toBe(0);
    });
});
