import { MapViewer } from '../lib/map-viewer.class';

describe('MapViewer overlays', () => {
    beforeEach(() => {
        vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(
            {} as CanvasRenderingContext2D,
        );
        vi.stubGlobal(
            'ResizeObserver',
            class {
                public observe() {}
                public disconnect() {}
            },
        );
    });

    afterEach(() => {
        vi.unstubAllGlobals();
        vi.restoreAllMocks();
    });

    it('sizes a bounds overlay to normalized map coordinates', () => {
        const container = document.createElement('div');
        Object.defineProperties(container, {
            clientWidth: { value: 1000 },
            clientHeight: { value: 500 },
        });
        const viewer = new MapViewer(container);
        viewer.map = {
            raw_data: '',
            element_bounds: new Map(),
            aspect_ratio: 2,
        };

        viewer.setOverlays([
            {
                ref: { x: 0, y: 0, w: 1, h: 1 },
                type: 'box',
                contents: document.createElement('div'),
            },
        ]);

        const overlay = viewer.overlays.firstElementChild as HTMLElement;
        expect(overlay.style.transform).toBe('translate(50px, 25px)');
        expect(overlay.style.width).toBe('900px');
        expect(overlay.style.height).toBe('450px');
        viewer.destroy();
    });
});
