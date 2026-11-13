import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { BuildingLevel, OrganisationService } from '@placeos/common';
import { ExploreDesksService, ExploreStateService } from '@placeos/explore';
import { MockProvider } from 'ng-mocks';

import { DeskMapViewComponent } from '../../app/desks/desk-map-view.component';
import { DesksStateService } from '../../app/desks/desks-state.service';

describe('DeskMapViewComponent', () => {
    let spectator: Spectator<DeskMapViewComponent>;
    let filters: ReturnType<typeof signal<{ date?: number; zones?: string[] }>>;
    const level = new BuildingLevel({ id: 'lvl-1', parent_id: 'bld-1' });

    const createComponent = createComponentFactory({
        component: DeskMapViewComponent,
        detectChanges: false,
        overrideComponents: [
            [DeskMapViewComponent, { set: { template: '', imports: [] } }],
        ],
        // The component provides its own desks service
        componentProviders: [
            MockProvider(ExploreDesksService, { setOptions: vi.fn() }),
        ],
        providers: [
            MockProvider(ExploreStateService, { setLevel: vi.fn() }),
            MockProvider(OrganisationService, {
                levelWithID: vi.fn((ids: string[]) =>
                    ids?.includes(level.id) ? level : null,
                ),
            }),
        ],
    });

    beforeEach(() => {
        filters = signal({});
        spectator = createComponent({
            providers: [MockProvider(DesksStateService, { filters })],
        });
    });

    afterEach(() => {
        vi.restoreAllMocks();
        vi.clearAllMocks();
    });

    it('should show the desks of the filtered level and day', () => {
        filters.set({ date: 1000, zones: ['lvl-1'] });
        spectator.detectChanges();

        expect(
            spectator.inject(ExploreStateService).setLevel,
        ).toHaveBeenCalledWith('lvl-1');
        expect(
            spectator.inject(ExploreDesksService, true).setOptions,
        ).toHaveBeenCalledWith({ date: 1000, all_day: true, zones: ['lvl-1'] });
    });

    it('should keep the map level and use today when the filters have no level or date', () => {
        vi.spyOn(Date, 'now').mockReturnValue(5000);
        filters.set({ zones: ['bld-1'] });
        spectator.detectChanges();

        expect(
            spectator.inject(ExploreStateService).setLevel,
        ).not.toHaveBeenCalled();
        expect(
            spectator.inject(ExploreDesksService, true).setOptions,
        ).toHaveBeenCalledWith({ date: 5000, all_day: true, zones: ['bld-1'] });
    });
});
