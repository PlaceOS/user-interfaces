import { TestBed } from '@angular/core/testing';
import { MapService, OrganisationService } from '@placeos/common';
import { MapsPeopleService } from 'libs/common/src/lib/mapspeople.service';

import { MapsIndoorsComponent } from '../lib/maps-indoors.component';

describe('MapsIndoorsComponent', () => {
    const map = { setZoom: vi.fn(), setCenter: vi.fn() };
    const getLocations = vi.fn();
    const sdk = {
        setDisplayRule: vi.fn(),
        addListener: vi.fn(),
        setZoom: vi.fn(),
        setFloor: vi.fn(),
        deallocate: vi.fn(),
    };

    beforeEach(() => {
        vi.useFakeTimers();
        vi.clearAllMocks();
        (window as any).mapsindoors = {
            mapView: {
                MapboxView: class {
                    getMap = () => map;
                },
            },
            directions: {
                MapboxProvider: class {},
                DirectionsRenderer: class {},
            },
            services: {
                DirectionsService: class {},
                LocationsService: { getLocations },
            },
            MapsIndoors: class {
                addListener = sdk.addListener;
                setZoom = sdk.setZoom;
                setFloor = sdk.setFloor;
                deallocate = sdk.deallocate;
                setDisplayRule = sdk.setDisplayRule;
            },
        };
        TestBed.configureTestingModule({
            imports: [MapsIndoorsComponent],
            providers: [
                {
                    provide: MapsPeopleService,
                    useValue: {
                        is_ready: true,
                        map_service: MapService.Mapbox,
                        map_token: 'token',
                    },
                },
                {
                    provide: OrganisationService,
                    useValue: { building: null, buildings: [] },
                },
            ],
        });
    });

    afterEach(() => {
        vi.useRealTimers();
        delete (window as any).mapsindoors;
    });

    it('applies zoom input changes and frees the map on destroy', () => {
        const fixture = TestBed.createComponent(MapsIndoorsComponent);
        // The parent's default zoom is not a map zoom level
        fixture.componentRef.setInput('zoom', 1);
        fixture.detectChanges();
        // A zoom click before the map reports its zoom is in the parent's scale
        fixture.componentRef.setInput('zoom', 1.1);
        fixture.detectChanges();
        vi.advanceTimersByTime(1000);
        expect(sdk.setZoom).not.toHaveBeenCalled();
        fixture.componentRef.setInput('zoom', 20);
        fixture.detectChanges();
        expect(sdk.setZoom).toHaveBeenCalledWith(20);
        fixture.destroy();
        expect(sdk.deallocate).toHaveBeenCalled();
    });

    it('sets the floor when the level changes in the same building', () => {
        const fixture = TestBed.createComponent(MapsIndoorsComponent);
        fixture.detectChanges();
        const component = fixture.componentInstance as any;
        component._floor_list = [
            { index: '1', externalId: 'map-1' },
            { index: '2', externalId: 'map-2' },
        ];
        component._last_building = 'bld-1';
        fixture.componentRef.setInput('zone', {
            id: 'lvl-2',
            parent_id: 'bld-1',
            map_id: 'map-2',
        });
        fixture.detectChanges();
        expect(sdk.setFloor).toHaveBeenCalledWith('2');
    });

    it('looks up styled locations at the same time and applies only the latest run', async () => {
        sessionStorage.removeItem('PLACEOS.mapsindoors.resources');
        const pending: (() => void)[] = [];
        getLocations.mockImplementation(
            ({ q }) =>
                new Promise((resolve) =>
                    pending.push(() =>
                        resolve([
                            { id: `loc-${q}`, properties: { externalId: q } },
                        ]),
                    ),
                ),
        );
        const fixture = TestBed.createComponent(MapsIndoorsComponent);
        fixture.detectChanges();
        const styles = (fill: string) => ({
            styles: { '#a': { fill }, '#b': { fill }, '#c': { fill } },
        });
        fixture.componentRef.setInput('metadata', styles('red'));
        fixture.detectChanges();
        expect(getLocations).toHaveBeenCalledTimes(3);
        // A newer change starts before the first lookups finish
        fixture.componentRef.setInput('metadata', styles('blue'));
        fixture.detectChanges();
        pending.forEach((resolve) => resolve());
        await vi.runAllTimersAsync();
        const fills = sdk.setDisplayRule.mock.calls.map(
            ([, rule]) => rule?.polygonFillColor,
        );
        expect(fills).toEqual(['blue', 'blue', 'blue']);
    });
});
