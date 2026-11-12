import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { BuildingLevel, OrganisationService } from '@placeos/common';

import { levelSelection } from '../../app/ui/level-selection';

describe('levelSelection', () => {
    const level = (id: string) => new BuildingLevel({ id, parent_id: 'bld-1' });
    let active_levels: ReturnType<typeof signal<BuildingLevel[]>>;
    let navigate: ReturnType<typeof vi.fn>;
    let set_filters: ReturnType<
        typeof vi.fn<(filters: { zones: string[] }) => void>
    >;

    const create = () => {
        const selection = TestBed.runInInjectionContext(() =>
            levelSelection(set_filters),
        );
        TestBed.tick();
        return selection;
    };

    beforeEach(() => {
        active_levels = signal([level('lvl-1'), level('lvl-2')]);
        navigate = vi.fn();
        set_filters = vi.fn<(filters: { zones: string[] }) => void>();
        TestBed.configureTestingModule({
            providers: [
                { provide: OrganisationService, useValue: { active_levels } },
                { provide: Router, useValue: { navigate } },
                { provide: ActivatedRoute, useValue: {} },
            ],
        });
    });

    it('should select the first level and write it to the URL and filters', () => {
        const { zones } = create();

        expect(zones()).toEqual(['lvl-1']);
        expect(set_filters).toHaveBeenLastCalledWith({ zones: ['lvl-1'] });
        expect(navigate).toHaveBeenLastCalledWith(
            [],
            expect.objectContaining({ queryParams: { zone_ids: 'lvl-1' } }),
        );
    });

    it('should keep the selected levels that are still active when the levels change', () => {
        const { zones } = create();
        zones.set(['lvl-2', 'lvl-1']);

        active_levels.set([level('lvl-3'), level('lvl-2')]);
        TestBed.tick();

        expect(zones()).toEqual(['lvl-2']);
        expect(set_filters).toHaveBeenLastCalledWith({ zones: ['lvl-2'] });
    });

    it('should fall back to the first level when no selected level is active', () => {
        const { zones } = create();
        zones.set(['lvl-2']);

        active_levels.set([level('lvl-3'), level('lvl-4')]);
        TestBed.tick();

        expect(zones()).toEqual(['lvl-3']);
    });
});
