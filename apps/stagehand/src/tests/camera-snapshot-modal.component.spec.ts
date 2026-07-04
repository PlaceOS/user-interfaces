import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockProvider } from 'ng-mocks';

import {
    CameraSnapshotData,
    CameraSnapshotModalComponent,
} from '../app/camera-snapshot-modal.component';

// Avoid the dynamic `import('mpegts.js')` inside the stream player ever
// touching a real module during tests.
jest.mock(
    'mpegts.js',
    () => ({ default: { isSupported: () => false, createPlayer: jest.fn() } }),
    { virtual: true },
);

describe('CameraSnapshotModalComponent', () => {
    let spectator: Spectator<CameraSnapshotModalComponent>;

    const createComponent = createComponentFactory({
        component: CameraSnapshotModalComponent,
        shallow: true,
        detectChanges: false,
        providers: [MockProvider(MAT_DIALOG_DATA, { room_name: 'Room 1' })],
    });

    const withData = (data: Partial<CameraSnapshotData>) =>
        createComponent({
            providers: [
                {
                    provide: MAT_DIALOG_DATA,
                    useValue: { room_name: 'Room 1', ...data },
                },
            ],
        });

    it('should expose only non-empty snapshot feeds', () => {
        spectator = withData({
            camera_snapshot_urls: ['http://one', '', 'http://two'],
        });
        expect(spectator.component.feed_urls()).toEqual([
            'http://one',
            'http://two',
        ]);
        expect(spectator.component.feed_count()).toBe(2);
        expect(spectator.component.has_multiple_feeds()).toBe(true);
    });

    it('should not report multiple feeds for a single feed', () => {
        spectator = withData({ camera_snapshot_urls: ['http://only'] });
        expect(spectator.component.has_multiple_feeds()).toBe(false);
    });

    it('should detect a mpeg-ts stream url ending in /ts', () => {
        spectator = withData({
            camera_snapshot_urls: ['http://host/stream/ts?token=1'],
        });
        expect(spectator.component.is_stream_url()).toBe(true);
    });

    it('should detect a mpeg-ts stream url ending in .ts', () => {
        spectator = withData({
            camera_snapshot_urls: ['http://host/feed.ts'],
        });
        expect(spectator.component.is_stream_url()).toBe(true);
    });

    it('should treat an image url as a snapshot, not a stream', () => {
        spectator = withData({
            camera_snapshot_urls: ['http://host/snapshot.jpg'],
        });
        expect(spectator.component.is_stream_url()).toBe(false);
    });

    it('should append a timestamp with `?` when the url has no query string', () => {
        spectator = withData({
            camera_snapshot_urls: ['http://host/snapshot.jpg'],
        });
        spectator.component.timestamp.set(1234);
        expect(spectator.component.snapshot_url()).toBe(
            'http://host/snapshot.jpg?t=1234',
        );
    });

    it('should append a timestamp with `&` when the url already has a query string', () => {
        spectator = withData({
            camera_snapshot_urls: ['http://host/snapshot.jpg?size=large'],
        });
        spectator.component.timestamp.set(1234);
        expect(spectator.component.snapshot_url()).toBe(
            'http://host/snapshot.jpg?size=large&t=1234',
        );
    });

    it('should give an empty snapshot url when there are no feeds', () => {
        spectator = withData({ camera_snapshot_urls: [] });
        expect(spectator.component.snapshot_url()).toBe('');
    });

    it('should cycle through feeds with wrap-around navigation', () => {
        spectator = withData({
            camera_snapshot_urls: ['http://a', 'http://b', 'http://c'],
        });
        expect(spectator.component.feed_index()).toBe(0);

        spectator.component.nextFeed();
        expect(spectator.component.feed_index()).toBe(1);

        // wrap forwards past the end back to the start
        spectator.component.nextFeed();
        spectator.component.nextFeed();
        expect(spectator.component.feed_index()).toBe(0);

        // wrap backwards from the start to the end
        spectator.component.previousFeed();
        expect(spectator.component.feed_index()).toBe(2);
    });

    it('should ignore navigation when only one feed exists', () => {
        spectator = withData({ camera_snapshot_urls: ['http://only'] });
        spectator.component.nextFeed();
        expect(spectator.component.feed_index()).toBe(0);
        spectator.component.previousFeed();
        expect(spectator.component.feed_index()).toBe(0);
    });
});
