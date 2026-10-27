import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';

import { TakePhotoComponent } from '../app/components/take-photo.component';

describe('TakePhotoComponent', () => {
    let spectator: Spectator<TakePhotoComponent>;
    const createComponent = createComponentFactory({
        component: TakePhotoComponent,
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
});
