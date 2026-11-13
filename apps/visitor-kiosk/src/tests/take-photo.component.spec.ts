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

    afterEach(() => {
        vi.unstubAllGlobals();
        vi.restoreAllMocks();
    });

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

    it('captures a square from the center of the frame and stops the camera', async () => {
        const track = { stop: vi.fn() };
        const stream = { getTracks: () => [track] };
        vi.stubGlobal('navigator', {
            mediaDevices: { getUserMedia: vi.fn(async () => stream) },
        });
        const draw_image = vi.fn();
        vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue({
            drawImage: draw_image,
        } as unknown as CanvasRenderingContext2D);
        spectator = createComponent();
        spectator.detectChanges();
        const video = spectator.query<HTMLVideoElement>('video');
        // The camera shows a 1280 x 720 frame
        Object.defineProperties(video, {
            readyState: { value: HTMLMediaElement.HAVE_ENOUGH_DATA },
            videoWidth: { value: 1280 },
            videoHeight: { value: 720 },
        });
        await vi.waitFor(() =>
            expect(spectator.component.loading()).toBe(false),
        );

        spectator.component.takePhoto();

        expect(draw_image).toHaveBeenCalledWith(
            video,
            440,
            160,
            400,
            400,
            0,
            0,
            400,
            400,
        );
        expect(spectator.component.has_photo()).toBe(true);
        expect(track.stop).toHaveBeenCalled();
    });

    describe('with the camera opening', () => {
        let get_user_media: ReturnType<typeof vi.fn>;

        beforeEach(() => {
            // The camera never opens, so no frame is ready
            get_user_media = vi.fn(() => new Promise(() => undefined));
            vi.stubGlobal('navigator', {
                mediaDevices: { getUserMedia: get_user_media },
            });
            spectator = createComponent();
            spectator.detectChanges();
        });

        it('does not take a photo before the camera shows a frame', () => {
            spectator.component.takePhoto();

            expect(spectator.component.has_photo()).toBe(false);
        });

        it('sends the accepted photo as a JPEG', () => {
            const to_data_url = vi
                .spyOn(HTMLCanvasElement.prototype, 'toDataURL')
                .mockReturnValue('data:image/jpeg;base64,photo');
            const captured: (string | null)[] = [];
            spectator.output('captured').subscribe((v) => captured.push(v));

            spectator.component.acceptPhoto();

            expect(to_data_url).toHaveBeenCalledWith('image/jpeg', 0.75);
            expect(captured).toEqual(['data:image/jpeg;base64,photo']);
        });

        it('sends no photo and restarts the camera when the photo fails', () => {
            vi.spyOn(console, 'error').mockImplementation(() => undefined);
            vi.spyOn(
                HTMLCanvasElement.prototype,
                'toDataURL',
            ).mockImplementation(() => {
                throw new Error('Tainted canvas');
            });
            vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(
                {
                    clearRect: vi.fn(),
                } as unknown as CanvasRenderingContext2D,
            );
            const captured: (string | null)[] = [];
            spectator.output('captured').subscribe((v) => captured.push(v));

            spectator.component.acceptPhoto();

            expect(captured).toEqual([null]);
            expect(get_user_media).toHaveBeenCalledTimes(2);
        });
    });
});
