import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { SettingsService } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { Space, SpacesService } from '@placeos/spaces';
import { BehaviorSubject, of } from 'rxjs';
import { take } from 'rxjs/operators';

import { ExploreStateService } from '../lib/explore-state.service';

jest.mock('@placeos/ts-client');

import * as client from '@placeos/ts-client';
import { MockProvider } from 'ng-mocks';

describe('ExploreStateService', () => {
    let spectator: SpectatorService<ExploreStateService>;
    const createService = createServiceFactory({
        service: ExploreStateService,
        providers: [
            MockProvider(OrganisationService, {
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
                active_levels: new BehaviorSubject([
                    { id: 'lvl-1' },
                    { id: 'lvl-2' },
                ]),
            } as any),
            MockProvider(SpacesService, {
                list: of([
                    { id: 'space-1', zones: ['bld-1', 'lvl-1'] },
                    { id: 'space-2', zones: ['bld-2', 'lvl-2'] },
                ]),
            } as any),
            MockProvider(SettingsService, { get: jest.fn() }),
        ],
    });

    beforeEach(() => (spectator = createService()));

    it('should create service', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should list spaces for active level', async () => {
        const space = new Space({ id: 'space-1', zones: ['bld-1', 'lvl-1'] });
        const space2 = new Space({ id: 'space-2', zones: ['bld-2', 'lvl-2'] });
        (client.querySystems as any) = jest.fn(() => of({ data: [space] }));
        let level = await spectator.service.level.pipe(take(1)).toPromise();
        expect(level).toEqual({ id: 'lvl-1' });
        let spaces = await spectator.service.spaces.pipe(take(1)).toPromise();
        expect(spaces).toHaveLength(1);
        expect(spaces[0]).toEqual(space);
        (client.querySystems as any) = jest.fn(() => of({ data: [space2] }));
        spectator.service.setLevel('lvl-2');
        level = await spectator.service.level.pipe(take(1)).toPromise();
        expect(level).toEqual({ id: 'lvl-2' });
        spaces = await spectator.service.spaces.pipe(take(1)).toPromise();
        expect(spaces).toHaveLength(1);
        expect(spaces[0]).toEqual(space2);
    });

    it('should handle changes to map features', async () => {
        let feats = await spectator.service.map_features
            .pipe(take(1))
            .toPromise();
        expect(feats).toEqual([]);
        spectator.service.setFeatures('spaces', [{ id: 'first' } as any]);
        feats = await spectator.service.map_features.pipe(take(1)).toPromise();
        expect(feats).toEqual([{ id: 'first' }]);
        spectator.service.setFeatures('other', [{ id: 'second' } as any]);
        feats = await spectator.service.map_features.pipe(take(1)).toPromise();
        expect(feats).toEqual([{ id: 'first' }, { id: 'second' }]);
    });

    it('should handle changes to map actions', async () => {
        let actions = await spectator.service.map_actions
            .pipe(take(1))
            .toPromise();
        expect(actions).toEqual([]);
        spectator.service.setActions('spaces', [{ id: 'first' } as any]);
        actions = await spectator.service.map_actions.pipe(take(1)).toPromise();
        expect(actions).toEqual([{ id: 'first' }]);
        spectator.service.setActions('other', [{ id: 'second' } as any]);
        actions = await spectator.service.map_actions.pipe(take(1)).toPromise();
        expect(actions).toEqual([{ id: 'first' }, { id: 'second' }]);
    });

    it('should handle changes to map labels', async () => {
        let labels = await spectator.service.map_labels
            .pipe(take(1))
            .toPromise();
        expect(labels).toEqual([]);
        spectator.service.setLabels('spaces', [{ id: 'first' } as any]);
        labels = await spectator.service.map_labels.pipe(take(1)).toPromise();
        expect(labels).toEqual([{ id: 'first' }]);
        spectator.service.setLabels('zones', [{ id: 'second' } as any]);
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
