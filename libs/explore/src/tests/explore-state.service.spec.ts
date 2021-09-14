import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { SettingsService } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { SpacesService } from '@placeos/spaces';
import { of } from 'rxjs';
import { take } from 'rxjs/operators';

import { ExploreStateService } from '../lib/explore-state.service';

describe('ExploreStateService', () => {
    let spectator: SpectatorService<ExploreStateService>;
    const createService = createServiceFactory({
        service: ExploreStateService,
        providers: [
            {
                provide: OrganisationService,
                useValue: {
                    initialised: of(true),
                    active_building: of({ id: 'bld-1' }),
                    levelsForBuilding: jest.fn(() => [
                        { id: 'lvl-1' },
                        { id: 'lvl-2' },
                    ]),
                    levelWithID: jest.fn((l) =>
                        [{ id: 'lvl-1' }, { id: 'lvl-2' }].find((lvl) =>
                            l.includes(lvl.id)
                        )
                    ),
                },
            },
            {
                provide: SpacesService,
                useValue: {
                    list: of([
                        { id: 'space-1', zones: ['bld-1', 'lvl-1'] },
                        { id: 'space-2', zones: ['bld-2', 'lvl-2'] },
                    ]),
                },
            },
            { provide: SettingsService, useValue: { get: jest.fn() } },
        ],
    });

    beforeEach(() => (spectator = createService()));

    it('should create service', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should list spaces for active level', async () => {
        let level = await spectator.service.level.pipe(take(1)).toPromise();
        expect(level).toEqual({ id: 'lvl-1' });
        let spaces = await spectator.service.spaces.pipe(take(1)).toPromise();
        expect(spaces).toHaveLength(1);
        expect(spaces[0]).toEqual({ id: 'space-1', zones: ['bld-1', 'lvl-1'] });
        spectator.service.setLevel('lvl-2');
        level = await spectator.service.level.pipe(take(1)).toPromise();
        expect(level).toEqual({ id: 'lvl-2' });
        spaces = await spectator.service.spaces.pipe(take(1)).toPromise();
        expect(spaces).toHaveLength(1);
        expect(spaces[0]).toEqual({ id: 'space-2', zones: ['bld-2', 'lvl-2'] });
    });

    it('should handle changes to map features', async () => {
        let feats = await spectator.service.map_features
            .pipe(take(1))
            .toPromise();
        expect(feats).toEqual([]);
        spectator.service.setFeatures('spaces', [{ id: 'first' }]);
        feats = await spectator.service.map_features.pipe(take(1)).toPromise();
        expect(feats).toEqual([{ id: 'first' }]);
        spectator.service.setFeatures('other', [{ id: 'second' }]);
        feats = await spectator.service.map_features.pipe(take(1)).toPromise();
        expect(feats).toEqual([{ id: 'first' }, { id: 'second' }]);
    });

    it('should handle changes to map actions', async () => {
        let actions = await spectator.service.map_actions
            .pipe(take(1))
            .toPromise();
        expect(actions).toEqual([]);
        spectator.service.setActions('spaces', [{ id: 'first' }]);
        actions = await spectator.service.map_actions.pipe(take(1)).toPromise();
        expect(actions).toEqual([{ id: 'first' }]);
        spectator.service.setActions('other', [{ id: 'second' }]);
        actions = await spectator.service.map_actions.pipe(take(1)).toPromise();
        expect(actions).toEqual([{ id: 'first' }, { id: 'second' }]);
    });

    it('should handle changes to map labels', async () => {
        let labels = await spectator.service.map_labels
            .pipe(take(1))
            .toPromise();
        expect(labels).toEqual([]);
        spectator.service.setLabels('spaces', [{ id: 'first' }]);
        labels = await spectator.service.map_labels.pipe(take(1)).toPromise();
        expect(labels).toEqual([{ id: 'first' }]);
        spectator.service.setLabels('zones', [{ id: 'second' }]);
        labels = await spectator.service.map_labels.pipe(take(1)).toPromise();
        expect(labels).toEqual([{ id: 'first' }]);
        spectator.service.setOptions({ disable: [] });
        labels = await spectator.service.map_labels.pipe(take(1)).toPromise();
        expect(labels).toEqual([{ id: 'first' }, { id: 'second' }]);
    });

    it('should handle changes to map styles', async () => {
        const DEFAULTS = {
            '#zones': { display: 'none' },
            '#Zones': { display: 'none' },
            text: { display: 'none' },
        };
        let styles = await spectator.service.map_styles
            .pipe(take(1))
            .toPromise();
        expect(styles).toEqual({ ...DEFAULTS });
        spectator.service.setStyles('spaces', { space1: {} });
        styles = await spectator.service.map_styles.pipe(take(1)).toPromise();
        expect(styles).toEqual({ ...DEFAULTS, space1: {} });
        spectator.service.setStyles('other', { zones1: {} });
        styles = await spectator.service.map_styles.pipe(take(1)).toPromise();
        expect(styles).toEqual({ ...DEFAULTS, space1: {}, zones1: {} });
    });
});
