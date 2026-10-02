import { TestBed } from '@angular/core/testing';

import { ImageGenLayerComponent } from '../../app/image-gen/image-gen-layer.component';
import { ImageGenLayerState } from '../../app/image-gen/image-gen.types';

interface Box {
    left: number;
    top: number;
    width: number;
    height: number;
}

/** the private parts these tests drive directly */
interface LayerInternals {
    _boxes: Map<string, Box>;
    _logos: Record<'on_light' | 'on_dark', HTMLImageElement | null>;
    _logoFor: (
        state: ImageGenLayerState,
        context: CanvasRenderingContext2D,
        box: Box,
    ) => HTMLImageElement | null;
}

function layerState(
    changes: Partial<ImageGenLayerState> = {},
): ImageGenLayerState {
    return {
        blocks: [],
        logo: false,
        logo_position: 'bottom-right',
        logo_scale: 0.14,
        logo_choice: 'auto',
        ...changes,
    };
}

describe('ImageGenLayerComponent', () => {
    async function make(template?: string) {
        TestBed.configureTestingModule({ imports: [ImageGenLayerComponent] });
        if (template !== undefined) {
            TestBed.overrideComponent(ImageGenLayerComponent, {
                set: { template },
            });
        }
        await TestBed.compileComponents();
        const fixture = TestBed.createComponent(ImageGenLayerComponent);
        fixture.componentRef.setInput('image_url', '');
        fixture.componentRef.setInput('state', layerState());
        return fixture;
    }

    it('does not export a blank canvas before the artwork loads', async () => {
        const fixture = await make('');
        fixture.componentRef.setInput('image_url', 'blob:artwork');

        await expect(fixture.componentInstance.toBlob()).resolves.toBeNull();
    });

    it('reads the corner behind an auto logo once per artwork and position', async () => {
        const fixture = await make('');
        const layer = fixture.componentInstance as unknown as LayerInternals;
        layer._logos.on_light = new Image();
        const getImageData = vi.fn(() => ({
            data: new Uint8ClampedArray(16),
        }));
        const context = {
            getImageData,
        } as unknown as CanvasRenderingContext2D;
        const box = { left: 10, top: 10, width: 20, height: 10 };

        layer._logoFor(layerState(), context, box);
        layer._logoFor(layerState(), context, box);
        expect(getImageData).toHaveBeenCalledTimes(1);

        layer._logoFor(layerState(), context, { ...box, top: 0 });
        expect(getImageData).toHaveBeenCalledTimes(2);
    });

    it('keeps a block on the artwork when nudged past the edge', async () => {
        const fixture = await make();
        const block = {
            id: 'block-1',
            text: 'Hello',
            role: 'headline' as const,
            x: 0.49,
            y: 0,
            align: 'left' as const,
            colour: '#FFFFFF',
            font: '',
            panel: false,
        };
        fixture.componentRef.setInput('state', layerState({ blocks: [block] }));
        fixture.detectChanges();
        // the default canvas is 300 by 150, so this block can reach x 0.5
        (fixture.componentInstance as unknown as LayerInternals)._boxes.set(
            block.id,
            { left: 147, top: 0, width: 150, height: 30 },
        );
        const changed = vi.fn();
        fixture.componentInstance.changed.subscribe(changed);

        fixture.componentInstance.onKeyDown(
            new KeyboardEvent('keydown', { key: 'ArrowRight', shiftKey: true }),
        );

        expect(changed).toHaveBeenCalledWith(
            expect.objectContaining({
                blocks: [expect.objectContaining({ x: 0.5, y: 0 })],
            }),
        );
    });
});
