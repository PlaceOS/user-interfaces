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
    const event = signal<any>({});
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

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
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
            'You are already checked in.',
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
            'You have not checked in yet.',
        );
        expect(spectator.inject(Router).navigate).toHaveBeenCalledWith([
            '/checkout',
            'error',
        ]);
    });
});
