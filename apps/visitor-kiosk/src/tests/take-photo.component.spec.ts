import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { IconComponent } from '@placeos/components';
import { MockComponent } from 'ng-mocks';

import { TakePhotoComponent } from '../app/components/take-photo.component';

describe('TakePhotoComponent', () => {
    let spectator: Spectator<TakePhotoComponent>;
    const createComponent = createComponentFactory({
        component: TakePhotoComponent,
        declarations: [MockComponent(IconComponent)],
        detectChanges: false,
    });

    afterEach(() => vi.unstubAllGlobals());

    it('should stop the camera when the visitor leaves before it opens', async () => {
        const track = { stop: vi.fn() };
        const stream = { getTracks: () => [track] };
        let open_camera: (value: unknown) => void = () => undefined;
        vi.stubGlobal('navigator', {
            mediaDevices: {
                getUserMedia: () =>
                    new Promise((resolve) => (open_camera = resolve)),
            },
        });
        spectator = createComponent();
        spectator.detectChanges();
        spectator.fixture.destroy();
        open_camera(stream);
        await Promise.resolve();
        expect(track.stop).toHaveBeenCalled();
    });

    it('blocks a photo and shows a message when the camera cannot start', async () => {
        vi.spyOn(console, 'error').mockImplementation(() => undefined);
        vi.stubGlobal('navigator', {
            mediaDevices: {
                getUserMedia: vi.fn(async () => {
                    throw new Error('Requested device not found');
                }),
            },
        });
        spectator = createComponent();
        spectator.detectChanges();
        await vi.waitFor(() =>
            expect(spectator.component.camera_error()).toBe(true),
        );
        spectator.detectChanges();

        expect(spectator.component.loading()).toBe(false);
        expect(spectator.query('button.take-photo')).toBeDisabled();
        expect(spectator.element).toHaveText('videocam_off');
    });

    it('stops the camera and shows a message when no frame arrives', async () => {
        vi.useFakeTimers();
        vi.spyOn(console, 'error').mockImplementation(() => undefined);
        const track = { stop: vi.fn() };
        vi.stubGlobal('navigator', {
            mediaDevices: {
                getUserMedia: vi.fn(async () => ({
                    getTracks: () => [track],
                })),
            },
        });
        spectator = createComponent();
        spectator.detectChanges();

        await vi.advanceTimersByTimeAsync(10_000);
        spectator.detectChanges();

        expect(spectator.component.camera_error()).toBe(true);
        expect(spectator.component.loading()).toBe(false);
        expect(track.stop).toHaveBeenCalled();
        expect(spectator.query('button.take-photo')).toBeDisabled();
        vi.useRealTimers();
    });
});
