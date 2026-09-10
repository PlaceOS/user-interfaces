import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { Building, BuildingLevel, OrganisationService } from '@placeos/common';
import { of } from 'rxjs';
import { ExploreMapControlComponent } from '../lib/explore-map-control.component';
import { ExploreStateService } from '../lib/explore-state.service';

describe('Explore map location selection', () => {
    const building = new Building({ id: 'bld-1', name: 'Ord Street' });
    const level = new BuildingLevel({ id: 'lvl-2', name: 'Level 2' });
    const set_building = vi.fn();

    beforeEach(() => {
        set_building.mockClear();
        TestBed.configureTestingModule({
            imports: [ExploreMapControlComponent],
            providers: [
                {
                    provide: OrganisationService,
                    useValue: {
                        active_buildings: signal([
                            new Building({ id: 'bld-1', name: 'Ord Street' }),
                            new Building({ id: 'bld-2', name: 'Other' }),
                        ]),
                        active_building: signal(building),
                        active_levels: signal([
                            new BuildingLevel({ id: 'lvl-2', name: 'Level 2' }),
                        ]),
                        waitUntilInitialised: () => Promise.resolve(),
                        set building(value: Building) {
                            set_building(value);
                        },
                    },
                },
                {
                    provide: ExploreStateService,
                    useValue: {
                        level: signal(level),
                        setFeatures: vi.fn(),
                        setLevel: vi.fn(),
                    },
                },
                { provide: Router, useValue: { navigate: vi.fn() } },
                {
                    provide: ActivatedRoute,
                    useValue: { queryParamMap: of(convertToParamMap({})) },
                },
            ],
        });
    });

    it('shows the active building and level when options are separate objects', async () => {
        const fixture = TestBed.createComponent(ExploreMapControlComponent);
        await fixture.whenStable();
        const element: HTMLElement = fixture.nativeElement;
        expect(
            element.querySelector('[buildings] mat-select')?.textContent,
        ).toContain('Ord Street');
        expect(
            element.querySelector('[levels] mat-select')?.textContent,
        ).toContain('Level 2');
    });

    it('does not reload the active building when it is selected again', async () => {
        const fixture = TestBed.createComponent(ExploreMapControlComponent);
        await fixture.whenStable();
        fixture.componentInstance.setBuilding(new Building({ id: 'bld-1' }));
        expect(set_building).not.toHaveBeenCalled();
        fixture.componentInstance.setBuilding(new Building({ id: 'bld-2' }));
        expect(set_building).toHaveBeenCalledOnce();
    });
});
