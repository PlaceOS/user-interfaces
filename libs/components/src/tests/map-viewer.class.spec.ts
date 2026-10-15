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

    it('contains feature stacking within the overlay layer', () => {
        const viewer = new MapViewer(document.createElement('div'));

        expect(viewer.overlays.style.zIndex).toBe('0');

        viewer.destroy();
    });

    it('triggers map actions through interactive overlay content', () => {
        const container = document.createElement('div');
        const overlay_content = document.createElement('button');
        const viewer = new MapViewer(container);
        container.appendChild(overlay_content);
        const callback = vi.fn();
        viewer.map = {
            raw_data: '',
            element_bounds: new Map([['level-1', { x: 0, y: 0, w: 1, h: 1 }]]),
            aspect_ratio: 1,
        };
        viewer.map_image = document.createElement('canvas');
        viewer.setActions([{ ref: 'level-1', events: ['click'], callback }]);

        overlay_content.dispatchEvent(
            new MouseEvent('click', { bubbles: true, clientX: 0, clientY: 0 }),
        );

        expect(callback).toHaveBeenCalledOnce();
        viewer.destroy();
    });

    it('keeps overlay wrappers whose contents stay when the overlays change', () => {
        const viewer = new MapViewer(document.createElement('div'));
        viewer.map = {
            raw_data: '',
            element_bounds: new Map(),
            aspect_ratio: 1,
        };
        const room = document.createElement('div');
        const desk = document.createElement('div');
        const point = { x: 0.5, y: 0.5 };
        viewer.setOverlays([
            { ref: point, type: 'point', contents: room },
            { ref: point, type: 'point', contents: desk, hover: true },
        ]);
        const [room_wrapper, desk_wrapper] = Array.from(
            viewer.overlays.children,
        );
        const removed = vi.spyOn(desk_wrapper, 'remove');

        // An unrelated overlay is added, and the desk is removed
        const pin = document.createElement('div');
        viewer.setOverlays([
            { ref: point, type: 'point', contents: pin },
            { ref: point, type: 'point', contents: room, z_index: 5 },
        ]);

        const wrappers = Array.from(viewer.overlays.children);
        expect(wrappers).toHaveLength(2);
        expect(wrappers[1]).toBe(room_wrapper);
        expect(room.parentElement).toBe(room_wrapper);
        expect((room_wrapper as HTMLElement).style.zIndex).toBe('5');
        expect(wrappers[0].firstChild).toBe(pin);
        expect(removed).toHaveBeenCalled();
        viewer.destroy();
    });
});
