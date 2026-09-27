import { signal } from '@angular/core';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import { OrganisationService, SettingsService, Space } from '@placeos/common';
import { SpacesService } from '@placeos/events';
import { MockProvider } from 'ng-mocks';

import { AppTimetableComponent } from '../app/timetable.component';

describe('AppTimetableComponent', () => {
    let spectator: SpectatorRouting<AppTimetableComponent>;
    const createComponent = createRoutingFactory({
        component: AppTimetableComponent,
        detectChanges: false,
        providers: [
            MockProvider(SettingsService, {
                get: vi.fn(),
                time_format_signal: signal('h:mm a'),
            }),
            MockProvider(OrganisationService, {
                active_building: signal(null),
            }),
            MockProvider(SpacesService, {
                initialised: signal(false),
            }),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should position the current-time marker within the configured period', () => {
        spectator.component.date.set(new Date(2026, 0, 1, 10).valueOf());
        spectator.component.offset.set(9);
        spectator.component.length.set(8);

        expect(spectator.component.current_offset()).toBe(12.5);
    });

    it('should split columns into pages that fit the grid', () => {
        const { component } = spectator;
        component.spaces.set(
            ['a', 'b', 'c', 'd', 'e'].map((id) => ({ id }) as Space),
        );
        component.missing_ids.set(['unknown']);
        component.page_interval.set(20);
        // Room for four 320px columns after the 64px hour column
        component.grid_width.set(64 + 4 * 320 + 10);

        expect(component.page_count()).toBe(2);
        component.page.set(1);
        expect(component.visible_columns().map(({ id }) => id)).toEqual([
            'e',
            'unknown',
        ]);
        expect(component.page_padding().length).toBe(2);

        component.page_interval.set(0);
        expect(component.visible_columns().length).toBe(6);
    });

    it('should cover the grid at night and shift the UI unless e-ink', () => {
        const { component } = spectator;
        component.offset.set(8);
        component.length.set(10);
        component.night_mode.set(true);
        component.burn_in_protection.set(true);

        component.date.set(new Date(2026, 0, 1, 20).valueOf());
        expect(component.night()).toBe(true);
        component.date.set(new Date(2026, 0, 1, 10).valueOf());
        expect(component.night()).toBe(false);

        expect(component.pixel_shift()).toMatch(/^translate\(/);
        component.eink.set(true);
        expect(component.pixel_shift()).toBeNull();
    });
});
