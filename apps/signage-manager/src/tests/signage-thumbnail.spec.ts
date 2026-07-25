import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import {
    OrganisationService,
    SettingsService,
    UploadsService,
} from '@placeos/common';

import { SignageService } from '../app/signage.service';

vi.mock('@placeos/ts-client', { spy: true });

type SignageServiceTestAccess = SignageService & Record<string, any>;

describe('SignageService thumbnail rendering', () => {
    let context: Record<string, any>;
    let canvas: Record<string, any>;
    /** Order of drawing operations, so a fill after the draw is still caught */
    let operations: string[];

    beforeEach(() => {
        operations = [];
        context = {
            fillStyle: '',
            fillRect: vi.fn(() => operations.push('fillRect')),
            drawImage: vi.fn(() => operations.push('drawImage')),
        };
        canvas = {
            width: 0,
            height: 0,
            getContext: () => context,
            toDataURL: vi.fn(() => 'data:image/jpeg;base64,rendered'),
        };
        vi.spyOn(document, 'createElement').mockImplementation(
            (tag: string) =>
                (tag === 'canvas' ? canvas : {}) as HTMLElement as any,
        );

        TestBed.configureTestingModule({
            providers: [
                SignageService,
                { provide: UploadsService, useValue: {} },
                { provide: SettingsService, useValue: { get: vi.fn() } },
                {
                    provide: OrganisationService,
                    useValue: {
                        initialised: () => false,
                        organisation: { id: 'org-1' },
                    },
                },
                { provide: MatDialog, useValue: { open: vi.fn() } },
            ],
        });
    });

    afterEach(() => vi.restoreAllMocks());

    const render = () => {
        const service = TestBed.inject(
            SignageService,
        ) as unknown as SignageServiceTestAccess;
        return service['_generateThumbnailFromResource'](
            { width: 200, height: 100 } as any,
            200,
            100,
            1280,
            720,
        );
    };

    // JPEG carries no alpha, so a transparent source is written out as black
    // unless the canvas is given a background first.
    it('should fill an opaque background before drawing', () => {
        render();

        expect(context.fillRect).toHaveBeenCalled();
        expect(context.fillStyle).toBe('#ffffff');
        expect(operations).toEqual(['fillRect', 'drawImage']);
    });

    it('should cover the whole thumbnail with the background', () => {
        render();

        expect(context.fillRect).toHaveBeenCalledWith(0, 0, 200, 100);
    });

    describe('video frames', () => {
        // Firefox fires loadeddata before a frame can be painted, so capturing
        // there yields a black thumbnail. Seeking forces a decoded frame.
        function fakeVideo() {
            return {
                muted: false,
                playsInline: false,
                preload: '',
                src: '',
                currentTime: 0,
                duration: 12,
                videoWidth: 640,
                videoHeight: 360,
                onseeked: null as null | (() => void),
                onloadeddata: null as null | (() => void),
                onerror: null as null | (() => void),
                removeAttribute: vi.fn(),
                load: vi.fn(),
            };
        }

        it('should wait for a seek rather than capturing on loadeddata', async () => {
            const video = fakeVideo();
            vi.spyOn(document, 'createElement').mockImplementation(
                (tag: string) => (tag === 'video' ? video : canvas) as any,
            );
            const service = TestBed.inject(
                SignageService,
            ) as unknown as SignageServiceTestAccess;

            const pending = service['_generateVideoThumbnail'](
                new File([], 'clip.mp4'),
                1280,
                720,
            );
            video.onloadeddata!();

            // Nothing drawn yet; the frame is not guaranteed to be paintable
            expect(context.drawImage).not.toHaveBeenCalled();
            expect(video.currentTime).toBeGreaterThan(0);

            video.onseeked!();
            await pending;

            expect(context.drawImage).toHaveBeenCalled();
        });

        it('should capture directly when already at the seek target', async () => {
            const video = fakeVideo();
            video.currentTime = 0.1;
            vi.spyOn(document, 'createElement').mockImplementation(
                (tag: string) => (tag === 'video' ? video : canvas) as any,
            );
            const service = TestBed.inject(
                SignageService,
            ) as unknown as SignageServiceTestAccess;

            const pending = service['_generateVideoThumbnail'](
                new File([], 'clip.mp4'),
                1280,
                720,
            );
            video.onloadeddata!();
            await pending;

            expect(context.drawImage).toHaveBeenCalled();
        });
    });
});
