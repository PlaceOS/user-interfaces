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
    const set_search = vi.fn();
    const toggle_category = vi.fn();
    const category_list = signal<{ id: string; name: string }[]>([]);
    const options = signal<any>({});

    const createComponent = createComponentFactory({
        component: AssetFiltersComponent,
        declarations: [
            MockComponent(SettingsToggleComponent),
            MockComponent(DurationFieldComponent),
        ],
        providers: [
            MockProvider(SettingsService as any, createSettingsServiceMock()),
            MockProvider(AssetStateService, {
                search: signal('') as any,
                category: signal<string[]>([]) as any,
                category_list: category_list as any,
                options: options as any,
                getOptions: () => state_options as any,
                setSearch: set_search,
                toggleCategory: toggle_category,
            }),
        ],
    });

    beforeEach(() => {
        set_search.mockClear();
        toggle_category.mockClear();
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

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should render a toggle for each category', () => {
        spectator.detectChanges();
        // One toggle for the deliver-at-time option plus one per category
        expect(spectator.queryAll('settings-toggle')).toHaveLength(3);
    });

    it('should delegate search changes to the state service', () => {
        spectator.component.setSearch('projector');
        expect(set_search).toHaveBeenCalledWith('projector');
    });

    it('should delegate category toggles to the state service', () => {
        spectator.component.toggleCategory('cat-1');
        expect(toggle_category).toHaveBeenCalledWith('cat-1');
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

        expect(spectator.component.day_options().length).toBeGreaterThan(1);
    });

    it('should ignore the minimum offset once a later day is selected', () => {
        spectator.component.offset_day.set(1);
        spectator.detectChanges();

        expect(spectator.component.min_offset()).toBe(0);
    });
});
