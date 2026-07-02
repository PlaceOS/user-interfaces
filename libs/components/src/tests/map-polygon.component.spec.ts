import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { MAP_FEATURE_DATA } from '@placeos/common';

import { MapPolygonComponent } from '../lib/map-polygon.component';

describe('MapPolygonComponent', () => {
    let spectator: Spectator<MapPolygonComponent>;

    const POINTS: [number, number][] = [
        [0.25, 0.25],
        [0.75, 0.25],
        [0.75, 0.75],
        [0.25, 0.75],
    ];

    const createComponent = createComponentFactory({
        component: MapPolygonComponent,
        providers: [
            {
                provide: MAP_FEATURE_DATA,
                useValue: {
                    name: 'Test Region',
                    color: '#123456',
                    points: POINTS,
                },
            },
        ],
    });

    it('should create component', () => {
        spectator = createComponent();
        expect(spectator.component).toBeTruthy();
    });

    it('should display the region name', () => {
        spectator = createComponent();
        expect('[text]').toContainText('Test Region');
    });

    it('should normalise points to the bounding box of the region', () => {
        spectator = createComponent();
        expect(spectator.component.width()).toBe(5000);
        expect(spectator.component.height()).toBe(5000);
        expect(spectator.component.points()).toBe('0,0 250,0 250,250 0,250');
        expect(spectator.query('polygon').getAttribute('points')).toBe(
            '0,0 250,0 250,250 0,250',
        );
    });

    it('should derive fill and stroke from the region colour', () => {
        spectator = createComponent();
        expect(spectator.component.fill()).toBe('#12345688');
        expect(spectator.component.stroke()).toBe('#123456');
    });

    it('should fallback to the default colour when none is set', () => {
        spectator = createComponent({
            providers: [
                {
                    provide: MAP_FEATURE_DATA,
                    useValue: { name: 'No Colour', points: POINTS },
                },
            ],
        });
        expect(spectator.component.fill()).toBe('#e5393588');
        expect(spectator.component.stroke()).toBe('#e53935');
    });

    it('should replace NaN with 0 for degenerate point ranges', () => {
        spectator = createComponent();
        spectator.component.processPoints([
            [0.5, 0.2],
            [0.5, 0.8],
        ]);
        expect(spectator.component.points()).toBe('0,0 0,300');
    });
});
