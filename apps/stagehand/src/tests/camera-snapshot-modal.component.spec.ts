import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockProvider } from 'ng-mocks';
import type { Mock } from 'vitest';

import {
    CameraSnapshotData,
    CameraSnapshotModalComponent,
} from '../app/camera-snapshot-modal.component';

// The stream player loads `mpegts.js` on demand; tests control it here
const mpegts = vi.hoisted(() => ({
    isSupported: vi.fn(() => false),
    createPlayer: vi.fn(),
}));
vi.mock('mpegts.js', () => ({ default: mpegts }));

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

    // a path ending in /ts or .ts is an mpeg-ts stream
    it.each([
        ['http://host/stream/ts?token=1', true],
        ['http://host/feed.TS#live', true],
        ['http://host/snapshot.jpg', false],
        ['http://host/snap.jpg?format=ts', false],
    ])('should read %s as a stream: %s', (url, expected) => {
        spectator = withData({ camera_snapshot_urls: [url] });
        expect(spectator.component.is_stream_url()).toBe(expected);
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
        expect(spectator.component.has_multiple_feeds()).toBe(false);
        spectator.component.nextFeed();
        expect(spectator.component.feed_index()).toBe(0);
        spectator.component.previousFeed();
        expect(spectator.component.feed_index()).toBe(0);
    });

    describe('stream feeds', () => {
        let player: Record<string, Mock>;

        beforeEach(() => {
            player = {
                attachMediaElement: vi.fn(),
                detachMediaElement: vi.fn(),
                load: vi.fn(),
                play: vi.fn(() => Promise.resolve()),
                destroy: vi.fn(),
            };
            mpegts.isSupported.mockReturnValue(true);
            mpegts.createPlayer.mockReset().mockReturnValue(player);
            spectator = withData({
                camera_snapshot_urls: [
                    'http://host/stream/ts',
                    'http://host/snap.jpg',
                ],
            });
            spectator.detectChanges();
        });

        it('should play a live stream in the video element', async () => {
            await vi.waitFor(() => expect(player.play).toHaveBeenCalled());
            expect(mpegts.createPlayer).toHaveBeenCalledTimes(1);
            expect(mpegts.createPlayer.mock.calls[0][0]).toEqual({
                type: 'mpegts',
                isLive: true,
                url: 'http://host/stream/ts',
            });
            expect(player.attachMediaElement).toHaveBeenCalledWith(
                spectator.query('video'),
            );
        });

        it('should stop the stream when switching to a snapshot feed', async () => {
            await vi.waitFor(() => expect(player.play).toHaveBeenCalled());
            spectator.component.nextFeed();
            spectator.detectChanges();
            expect(player.detachMediaElement).toHaveBeenCalled();
            expect(player.destroy).toHaveBeenCalled();
        });

        it('should stop the stream when the modal closes', async () => {
            await vi.waitFor(() => expect(player.play).toHaveBeenCalled());
            spectator.fixture.destroy();
            expect(player.destroy).toHaveBeenCalled();
        });
    });
});
