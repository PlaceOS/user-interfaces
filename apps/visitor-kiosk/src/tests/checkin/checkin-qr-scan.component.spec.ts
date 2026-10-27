import { signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import { IconComponent } from '@placeos/components';
import { MockComponent, MockProvider } from 'ng-mocks';
import { frameLoop } from 'qr/dom.js';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SettingsService } from '@placeos/common';
import { CheckinQRScanComponent } from '../../app/checkin/checkin-qr-scan.component';
import { CheckinStateService } from '../../app/checkin/checkin-state.service';

const qr_mocks = vi.hoisted(() => ({
    camera: {
        readFrame: vi.fn(),
        stop: vi.fn(),
    },
    center_decoder: {
        clear: vi.fn(),
        drawImage: vi.fn(),
    },
    cancel_scan: vi.fn(),
    decoder_count: 0,
    full_decoder: {
        clear: vi.fn(),
    },
    frame_callback: undefined as ((timestamp: number) => void) | undefined,
    rear_camera: vi.fn(),
}));

vi.mock('qr/dom.js', () => ({
    QRCanvas: vi.fn(function QRCanvas() {
        const decoder =
            qr_mocks.decoder_count === 0
                ? qr_mocks.full_decoder
                : qr_mocks.center_decoder;
        qr_mocks.decoder_count += 1;
        return decoder;
    }),
    frameLoop: vi.fn((callback: (timestamp: number) => void) => {
        qr_mocks.frame_callback = callback;
        return qr_mocks.cancel_scan;
    }),
    rearCamera: qr_mocks.rear_camera,
}));

describe('CheckinQRScanComponent', () => {
    let spectator: SpectatorRouting<CheckinQRScanComponent>;
    const event = signal<unknown>({});
    const state = {
        event,
        guest: signal({}),
        loadGuestAndEvent: vi.fn(async () => null),
        setError: vi.fn(),
        metadata: '',
    };
    const createComponent = createRoutingFactory({
        component: CheckinQRScanComponent,
        data: { flow: 'checkin' },
        declarations: [MockComponent(IconComponent)],
        providers: [
            MockProvider(CheckinStateService, state as any),
            MockProvider(SettingsService, { get: vi.fn() }),
        ],
        imports: [
            MatFormFieldModule,
            MatInputModule,
            FormsModule,
            MatProgressSpinnerModule,
        ],
    });

    beforeEach(async () => {
        vi.clearAllMocks();
        qr_mocks.decoder_count = 0;
        qr_mocks.frame_callback = undefined;
        qr_mocks.rear_camera.mockResolvedValue(qr_mocks.camera);
        qr_mocks.camera.readFrame.mockResolvedValue(undefined);
        qr_mocks.center_decoder.drawImage.mockResolvedValue(undefined);
        event.set({});
        spectator = createComponent();
        await vi.waitFor(() => expect(qr_mocks.rear_camera).toHaveBeenCalled());
    });

    it('only shows the scan guide when the camera is ready', async () => {
        await spectator.fixture.whenStable();
        expect(spectator.query('.qr-guide')).toBeNull();

        spectator
            .query<HTMLVideoElement>('video')
            .dispatchEvent(new Event('loadeddata'));
        await spectator.fixture.whenStable();

        expect(spectator.query('.qr-guide')).not.toBeNull();
    });

    it('checks the QR code read from the camera', async () => {
        qr_mocks.camera.readFrame.mockResolvedValue(
            'visit:visitor@example.com,system,123,host@example.com',
        );

        qr_mocks.frame_callback?.(0);

        await vi.waitFor(() =>
            expect(state.loadGuestAndEvent).toHaveBeenCalledWith(
                'visitor@example.com',
                '123',
            ),
        );
        expect(qr_mocks.camera.readFrame).toHaveBeenCalledWith(
            expect.anything(),
            true,
        );
        expect(spectator.inject(Router).navigate).toHaveBeenCalledWith([
            '/checkin',
            'details',
        ]);
    });

    it('accepts the plain email stored in a printed visitor label', async () => {
        await spectator.component.checkQRCode('visitor@example.com');

        expect(state.loadGuestAndEvent).toHaveBeenCalledWith(
            'visitor@example.com',
            undefined,
        );
        expect(spectator.inject(Router).navigate).toHaveBeenCalledWith([
            '/checkin',
            'details',
        ]);
    });

    it('shows visitor details before an induction configured after details', async () => {
        spectator.component.induction_enabled.set(true);
        spectator.component.induction_details.set('Terms and conditions');
        spectator.component.induction_after_details.set(true);

        await spectator.component.checkQRCode(
            'visit:visitor@example.com,system,123,host@example.com',
        );

        expect(spectator.inject(Router).navigate).toHaveBeenCalledWith([
            '/checkin',
            'details',
        ]);
    });

    it('magnifies the center of the frame after a full-frame miss', async () => {
        const video_el = spectator.query<HTMLVideoElement>('video');
        Object.defineProperties(video_el, {
            videoHeight: { configurable: true, value: 720 },
            videoWidth: { configurable: true, value: 1280 },
        });
        const draw_image = vi.fn();
        const context = {
            drawImage: draw_image,
            imageSmoothingEnabled: false,
            imageSmoothingQuality: 'low',
        } as unknown as CanvasRenderingContext2D;
        vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(
            context,
        );
        qr_mocks.center_decoder.drawImage.mockResolvedValue(
            'visit:visitor@example.com,system,123,host@example.com',
        );

        qr_mocks.frame_callback?.(0);

        await vi.waitFor(() =>
            expect(state.loadGuestAndEvent).toHaveBeenCalledWith(
                'visitor@example.com',
                '123',
            ),
        );
        expect(draw_image).toHaveBeenCalledWith(
            video_el,
            400,
            120,
            480,
            480,
            0,
            0,
            720,
            720,
        );
        expect(qr_mocks.center_decoder.drawImage).toHaveBeenCalledWith(
            expect.any(HTMLCanvasElement),
            720,
            720,
        );
        expect(context.imageSmoothingEnabled).toBe(true);
        expect(context.imageSmoothingQuality).toBe('high');
    });

    it('decodes less often while the camera image is still', async () => {
        const video_el = spectator.query<HTMLVideoElement>('video');
        Object.defineProperties(video_el, {
            videoHeight: { configurable: true, value: 720 },
            videoWidth: { configurable: true, value: 1280 },
        });
        let brightness = 100;
        vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue({
            drawImage: vi.fn(),
            getImageData: () => ({
                data: new Uint8ClampedArray(32 * 18 * 4).fill(brightness),
            }),
        } as unknown as CanvasRenderingContext2D);
        const decodesBetween = async (start: number, end: number) => {
            const before = qr_mocks.camera.readFrame.mock.calls.length;
            for (let time = start; time < end; time += 100) {
                qr_mocks.frame_callback?.(time);
                await new Promise((resolve) => setTimeout(resolve));
            }
            return qr_mocks.camera.readFrame.mock.calls.length - before;
        };

        // Every scan decodes for 2 seconds after the first frame
        expect(await decodesBetween(0, 2000)).toBe(20);
        // A still image decodes every 500 ms
        expect(await decodesBetween(2000, 3000)).toBe(2);
        // Motion decodes every scan again
        brightness = 160;
        expect(await decodesBetween(3000, 3500)).toBe(5);
    });

    it('resumes scanning after an invalid QR code', async () => {
        qr_mocks.camera.readFrame.mockResolvedValue('invalid');

        qr_mocks.frame_callback?.(0);

        await vi.waitFor(() => expect(qr_mocks.cancel_scan).toHaveBeenCalled());
        expect(qr_mocks.rear_camera).toHaveBeenCalledTimes(1);
        expect(frameLoop).toHaveBeenCalledTimes(2);
    });
    it('keeps an already checked-in visitor out of the check-in flow', async () => {
        event.set({ checked_in_at: Date.now() });

        await spectator.component.checkEmail('visitor@example.com');

        expect(state.setError).toHaveBeenCalledWith(
            'APP.VISITOR_KIOSK.ALREADY_CHECKED_IN',
        );
        expect(spectator.inject(Router).navigate).toHaveBeenCalledWith([
            '/checkin',
            'error',
        ]);
    });

    it('keeps a rejected visitor out of email check-in', async () => {
        event.set({ rejected: true });

        await spectator.component.checkEmail('visitor@example.com');

        expect(state.setError).toHaveBeenCalledWith(
            'APP.VISITOR_KIOSK.MEETING_REJECTED',
        );
        expect(spectator.inject(Router).navigate).toHaveBeenCalledWith([
            '/checkin',
            'error',
        ]);
    });

    it('sends a checked-in visitor to checkout confirmation', async () => {
        (spectator.component as any).flow = 'checkout';
        event.set({ checked_in_at: Date.now() });

        await spectator.component.checkEmail('visitor@example.com');

        expect(spectator.inject(Router).navigate).toHaveBeenCalledWith([
            '/checkout',
            'confirm',
        ]);
    });

    it('keeps a visitor who has not checked in out of checkout', async () => {
        (spectator.component as any).flow = 'checkout';
        event.set({});

        await spectator.component.checkEmail('visitor@example.com');

        expect(state.setError).toHaveBeenCalledWith(
            'APP.VISITOR_KIOSK.NOT_CHECKED_IN',
        );
        expect(spectator.inject(Router).navigate).toHaveBeenCalledWith([
            '/checkout',
            'error',
        ]);
    });

    it('shows an error and skips the lookup for an invalid email', async () => {
        await spectator.component.checkEmail('visitor');
        spectator.detectChanges();

        expect(state.loadGuestAndEvent).not.toHaveBeenCalled();
        expect(spectator.query('input')).toHaveAttribute(
            'aria-invalid',
            'true',
        );

        spectator.component.setEmail('visitor@');
        spectator.detectChanges();
        expect(spectator.query('input')).toHaveAttribute(
            'aria-invalid',
            'false',
        );
    });
});
