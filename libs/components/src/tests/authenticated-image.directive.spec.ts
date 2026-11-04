import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';

vi.mock('@placeos/ts-client', { spy: true });

import * as ts_client from '@placeos/ts-client';
import { AuthenticatedImageDirective } from '../lib/authenticated-image.directive';

@Component({
    template: `<video auth [source]="source()"></video>`,
    imports: [AuthenticatedImageDirective],
})
class VideoHostComponent {
    public readonly source = signal('/api/engine/v2/uploads/video-1/url');
}

describe('AuthenticatedImageDirective', () => {
    afterEach(() => {
        vi.useRealTimers();
        vi.restoreAllMocks();
        vi.unstubAllGlobals();
    });

    it('streams API video with a refreshed auth cookie, not a download', async () => {
        vi.useFakeTimers();
        vi.mocked(ts_client.authority).mockReturnValue({ id: 'auth' } as any);
        vi.mocked(ts_client.token).mockReturnValue('token-1');
        const fetch_mock = vi.fn();
        vi.stubGlobal('fetch', fetch_mock);
        const set_cookie = vi.spyOn(document, 'cookie', 'set');

        const fixture = TestBed.createComponent(VideoHostComponent);
        fixture.detectChanges();
        await vi.advanceTimersByTimeAsync(0);
        const video: HTMLVideoElement =
            fixture.nativeElement.querySelector('video');

        expect(video.src).toContain('/api/engine/v2/uploads/video-1/url');
        expect(fetch_mock).not.toHaveBeenCalled();
        expect(set_cookie).toHaveBeenCalledTimes(1);
        await vi.advanceTimersByTimeAsync(20_000);
        expect(set_cookie).toHaveBeenCalledTimes(2);

        fixture.destroy();
        await vi.advanceTimersByTimeAsync(60_000);
        expect(set_cookie).toHaveBeenCalledTimes(2);
    });

    it('renews the cookie before media requests and retries a failed load once', async () => {
        vi.useFakeTimers();
        vi.mocked(ts_client.authority).mockReturnValue({ id: 'auth' } as any);
        vi.mocked(ts_client.token).mockReturnValue('token-1');
        const set_cookie = vi.spyOn(document, 'cookie', 'set');
        const load = vi
            .spyOn(HTMLMediaElement.prototype, 'load')
            .mockImplementation(() => undefined);
        const play = vi
            .spyOn(HTMLMediaElement.prototype, 'play')
            .mockResolvedValue(undefined);

        const fixture = TestBed.createComponent(VideoHostComponent);
        fixture.detectChanges();
        await vi.advanceTimersByTimeAsync(0);
        const video: HTMLVideoElement =
            fixture.nativeElement.querySelector('video');
        set_cookie.mockClear();

        // A hidden tab can delay the timer past the cookie life
        video.dispatchEvent(new Event('seeking'));
        expect(set_cookie).toHaveBeenCalledTimes(1);

        // The video was playing when its request failed
        Object.defineProperty(video, 'paused', { get: () => false });
        video.dispatchEvent(new Event('error'));
        video.dispatchEvent(new Event('error'));
        expect(load).toHaveBeenCalledTimes(1);
        expect(play).toHaveBeenCalledTimes(1);
        expect(set_cookie).toHaveBeenCalledTimes(2);
        fixture.destroy();
    });
});
