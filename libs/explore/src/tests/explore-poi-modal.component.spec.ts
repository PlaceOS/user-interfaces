import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Spectator, createComponentFactory } from '@ngneat/spectator/vitest';
import { ngMocks } from 'ng-mocks';

import {
    ExplorePointOfInterestModalComponent,
    POI,
} from '../lib/explore-poi-modal.component';

function createPOI(overrides: Partial<POI> = {}): POI {
    return {
        id: 'poi-1',
        name: 'Reception',
        level_id: 'level-1',
        location: 'center',
        short_link_id: 'abc',
        ...overrides,
    };
}

describe('ExplorePointOfInterestModalComponent', () => {
    let spectator: Spectator<ExplorePointOfInterestModalComponent>;
    const createComponent = createComponentFactory({
        component: ExplorePointOfInterestModalComponent,
        ...ngMocks.guts(null),
    });

    function setup(data: POI) {
        spectator = createComponent({
            providers: [{ provide: MAT_DIALOG_DATA, useValue: data }],
        });
        spectator.detectChanges();
    }

    it('should create component', () => {
        setup(createPOI());
        expect(spectator.component).toBeTruthy();
    });

    it('should render the point of interest name', () => {
        setup(createPOI({ name: 'Main Lobby' }));
        expect(spectator.query('header h2')).toHaveText('Main Lobby');
    });

    it('should show an empty state when no details are available', () => {
        setup(createPOI());
        expect(spectator.query('main p')).toHaveText(
            'No available details for this point of interest.',
        );
    });

    it('should render an image when provided', () => {
        setup(createPOI({ image: 'https://example.com/poi.png' }));
        const img = spectator.query('main img') as HTMLImageElement;
        expect(img).toBeTruthy();
        expect(img.getAttribute('src')).toBe('https://example.com/poi.png');
        expect(spectator.query('main p')).toBeFalsy();
    });

    it('should render extra detail rows', () => {
        setup(
            createPOI({
                extra_details: [
                    ['Phone', '1234'],
                    ['Email', 'info@place.tech'],
                ],
            }),
        );
        const rows = spectator.queryAll('main .text-sm > div');
        expect(rows.length).toBe(2);
        expect(rows[0]).toContainText('Phone');
        expect(rows[0]).toContainText('1234');
        expect(rows[1]).toContainText('info@place.tech');
    });

    it('should render read-aloud controls when media is available', () => {
        setup(
            createPOI({
                media_url: 'https://example.com/audio.mp3',
                media_type: 'audio',
            }),
        );
        expect(spectator.query('audio')).toBeTruthy();
        expect(spectator.query('main')).toContainText('Read Aloud');
    });

    it('should toggle playback state when the play button is clicked', () => {
        setup(
            createPOI({
                media_url: 'https://example.com/video.mp4',
                media_type: 'video',
            }),
        );
        const media_el = spectator.query('video') as HTMLVideoElement;
        // jsdom does not implement media playback, stub it out.
        media_el.play = vi.fn(() => Promise.resolve());
        media_el.pause = vi.fn();

        expect(spectator.component.playing()).toBe(false);
        spectator.component.togglePlay();
        expect(media_el.play).toHaveBeenCalled();
        expect(spectator.component.playing()).toBe(true);

        spectator.component.togglePlay();
        expect(media_el.pause).toHaveBeenCalled();
        expect(spectator.component.playing()).toBe(false);
    });
});
