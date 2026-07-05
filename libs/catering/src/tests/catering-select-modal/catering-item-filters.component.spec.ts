import { signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { SettingsService } from '@placeos/common';
import { createSettingsServiceMock } from '@placeos/common/tests';
import { addDays, addMinutes, startOfDay } from 'date-fns';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { SettingsToggleComponent } from 'libs/components/src/lib/settings-toggle.component';
import { DurationFieldComponent } from 'libs/form-fields/src/lib/duration-field.component';
import { MockComponent, MockProvider } from 'ng-mocks';

import { CateringOrderStateService } from '../../lib/catering-order-modal/catering-order-state.service';
import { CateringItemFiltersComponent } from '../../lib/catering-select-modal/catering-item-filters.component';

describe('CateringItemFiltersComponent', () => {
    let spectator: Spectator<CateringItemFiltersComponent>;
    const base_date = startOfDay(new Date('2026-06-15T00:00:00')).valueOf();
    const filters = signal<any>({
        date: base_date,
        duration: 120,
        search: '',
        tags: [],
        categories: [],
    });
    const setFilters = vi.fn((f) => filters.set({ ...filters(), ...f }));
    const getFilters = vi.fn(() => ({ ...filters() }));
    const categories = signal<string[]>(['Drinks', 'Snacks']);
    const caterers = signal<string[]>(['Cafe']);

    const createComponent = createComponentFactory({
        component: CateringItemFiltersComponent,
        declarations: [
            MockComponent(IconComponent),
            MockComponent(SettingsToggleComponent),
            MockComponent(DurationFieldComponent),
        ],
        providers: [
            MockProvider(CateringOrderStateService, {
                filters,
                setFilters,
                getFilters,
                categories,
                caterers,
            } as any),
            MockProvider(
                SettingsService as any,
                createSettingsServiceMock(),
            ),
        ],
        imports: [
            FormsModule,
            MatFormFieldModule,
            MatInputModule,
            MatSelectModule,
            MatTooltipModule,
        ],
    });

    beforeEach(() => {
        filters.set({
            date: base_date,
            duration: 120,
            search: '',
            tags: [],
            categories: [],
        });
        setFilters.mockClear();
        getFilters.mockClear();
        spectator = createComponent();
    });

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should add a category when toggled on', () => {
        spectator.component.toggleCategory('Drinks');
        expect(setFilters).toHaveBeenCalledWith({ categories: ['Drinks'] });
    });

    it('should remove a category when toggled off', () => {
        filters.set({ ...filters(), categories: ['Drinks'] });
        spectator.component.toggleCategory('Drinks');
        expect(setFilters).toHaveBeenLastCalledWith({ categories: [] });
    });

    it('should add and remove tags', () => {
        spectator.component.toggleTag('Vegan');
        expect(setFilters).toHaveBeenLastCalledWith({ tags: ['Vegan'] });
        filters.set({ ...filters(), tags: ['Vegan'] });
        spectator.component.toggleTag('Vegan');
        expect(setFilters).toHaveBeenLastCalledWith({ tags: [] });
    });

    it('should not compute day options for events within a single day', () => {
        expect(spectator.component.day_options()).toEqual([]);
    });

    it('should compute day options for multi-day events', () => {
        filters.set({ ...filters(), duration: 48 * 60 });
        spectator.component.ngOnInit();
        const options = spectator.component.day_options();
        expect(options.length).toBeGreaterThan(1);
        expect(options[0].id).toBe(0);
        expect(options[0].value).toBe(startOfDay(base_date).valueOf());
    });

    it('should compute the start of the selected offset day', () => {
        spectator.component.offset_day.set(2);
        expect(spectator.component.start_of_date()).toBe(
            startOfDay(addDays(base_date, 2)).valueOf(),
        );
    });

    it('should force the minimum offset to zero on later days', () => {
        spectator.component.offset_day.set(0);
        const first_day_min = spectator.component.min_offset();
        spectator.component.offset_day.set(1);
        expect(spectator.component.min_offset()).toBe(0);
        expect(first_day_min).toBe(0);
    });

    it('should cap the maximum offset to the event duration', () => {
        spectator.component.ngOnInit();
        const end = Math.min(
            addMinutes(base_date, 120).valueOf(),
        );
        expect(spectator.component.max_offset()).toBeLessThanOrEqual(120);
        expect(end).toBeGreaterThan(base_date);
    });
});
