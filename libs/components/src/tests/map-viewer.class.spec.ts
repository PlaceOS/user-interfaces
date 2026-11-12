vi.mock('@placeos/ts-client', { spy: true });

import * as client from '@placeos/ts-client';
import { getMapDetails, MapViewer } from '../lib/map-viewer.class';

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

    it('triggers map actions after a slow tap with a little movement', () => {
        const container = document.createElement('div');
        Object.defineProperties(container, {
            clientWidth: { value: 100 },
            clientHeight: { value: 100 },
        });
        const viewer = new MapViewer(container);
        const callback = vi.fn();
        viewer.map = {
            raw_data: '',
            element_bounds: new Map([['level-1', { x: 0, y: 0, w: 1, h: 1 }]]),
            aspect_ratio: 1,
        };
        viewer.map_image = document.createElement('canvas');
        viewer.setActions([{ ref: 'level-1', events: ['click'], callback }]);
        const pointer = (type: string, x: number, target: EventTarget) =>
            target.dispatchEvent(
                Object.assign(
                    new MouseEvent(type, {
                        bubbles: true,
                        button: 0,
                        clientX: x,
                        clientY: 0,
                    }),
                    { pointerId: 1 },
                ),
            );
        const now = vi.spyOn(Date, 'now').mockReturnValue(1000);
        pointer('pointerdown', 0, container);
        now.mockReturnValue(1300);
        pointer('pointermove', 2, window);
        pointer('pointerup', 2, window);
        pointer('click', 2, container);
        expect(callback).toHaveBeenCalledOnce();
        viewer.destroy();
    });

    it('parses the map SVG once when only the styles change', () => {
        vi.stubGlobal('requestAnimationFrame', (fn: FrameRequestCallback) => {
            fn(0);
            return 1;
        });
        // jsdom blobs cannot be read back, so keep the parts
        const blobs: string[][] = [];
        vi.stubGlobal(
            'Blob',
            class {
                constructor(parts: string[]) {
                    blobs.push(parts);
                }
            },
        );
        const create = URL.createObjectURL;
        URL.createObjectURL = () => 'blob:map';
        const parse = vi.spyOn(DOMParser.prototype, 'parseFromString');
        const viewer = new MapViewer(document.createElement('div'));
        viewer.map = {
            raw_data:
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"><rect id="desk"/></svg>',
            element_bounds: new Map(),
            aspect_ratio: 1,
        };
        viewer.setStyles({ '#desk': 'fill: red' });
        viewer.setStyles({ '#desk': 'fill: blue' });
        expect(parse).toHaveBeenCalledTimes(1);
        const svg = blobs.at(-1).join('');
        expect(svg).toContain('<rect id="desk"');
        expect(svg).toMatch(
            /<style xmlns="http:\/\/www.w3.org\/2000\/svg">svg #desk \{ fill: blue \}\n<\/style><\/svg>$/,
        );
        URL.createObjectURL = create;
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

describe('MapViewer zoom and pan', () => {
    let container: HTMLDivElement;
    let viewer: MapViewer;

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
        // Drawing needs a real canvas, so frames never run
        vi.stubGlobal('requestAnimationFrame', () => 1);
        container = document.createElement('div');
        Object.defineProperties(container, {
            clientWidth: { value: 100 },
            clientHeight: { value: 100 },
        });
        vi.spyOn(container, 'getBoundingClientRect').mockReturnValue({
            left: 0,
            top: 0,
            width: 100,
            height: 100,
        } as DOMRect);
        viewer = new MapViewer(container);
        viewer.map = {
            raw_data: '',
            element_bounds: new Map(),
            aspect_ratio: 1,
        };
        viewer.map_image = document.createElement('canvas');
    });

    afterEach(() => {
        viewer.destroy();
        vi.unstubAllGlobals();
        vi.restoreAllMocks();
    });

    const wheel = (deltaY: number, clientX = 75, clientY = 50) =>
        container.dispatchEvent(
            new WheelEvent('wheel', { deltaY, clientX, clientY }),
        );
    const pointer = (type: string, x: number, target: EventTarget) =>
        target.dispatchEvent(
            Object.assign(
                new MouseEvent(type, {
                    bubbles: true,
                    button: 0,
                    clientX: x,
                    clientY: 50,
                }),
                { pointerId: 1 },
            ),
        );

    it('should keep the map point under the cursor in place on wheel zoom', () => {
        // At zoom 1 the map fits 90% of the 100px view: 90px per map unit
        const point_under_cursor = 0.5 + 25 / 90;
        wheel(-1);

        expect(viewer.zoom).toBeCloseTo(1.03, 6);
        expect(viewer.center.x + 25 / (90 * viewer.zoom)).toBeCloseTo(
            point_under_cursor,
            6,
        );
        expect(viewer.center.y).toBeCloseTo(0.5, 6);
    });

    it('should keep zoom and center within the map bounds', () => {
        wheel(1);
        expect(viewer.zoom).toBe(1);
        expect(viewer.center).toEqual({ x: 0.5, y: 0.5 });

        viewer.setZoom(50);
        expect(viewer.zoom).toBe(10);
        viewer.setZoom(0);
        expect(viewer.zoom).toBe(1);
        viewer.setCenter({ x: -1, y: 2 });
        expect(viewer.center).toEqual({ x: 0, y: 1 });
    });

    it('should pan with a drag unless panning or zooming is disabled', () => {
        pointer('pointerdown', 50, container);
        pointer('pointermove', 32, window);
        pointer('pointerup', 32, window);
        expect(viewer.center.x).toBeCloseTo(0.5 + 18 / 90, 6);

        viewer.setOptions({ disable_pan: true, disable_zoom: true });
        const center = { ...viewer.center };
        pointer('pointerdown', 50, container);
        pointer('pointermove', 32, window);
        pointer('pointerup', 32, window);
        wheel(-1);
        expect(viewer.center).toEqual(center);
        expect(viewer.zoom).toBe(1);
    });
});

describe('getMapDetails', () => {
    beforeEach(() => {
        // jsdom has no layout, so measure shapes from their own attributes
        Object.defineProperty(SVGElement.prototype, 'getBBox', {
            configurable: true,
            value(this: SVGElement) {
                const size = (name: string) =>
                    parseFloat(this.getAttribute(name) || '0');
                return {
                    x: size('x'),
                    y: size('y'),
                    width: size('width'),
                    height: size('height'),
                };
            },
        });
    });

    afterEach(() => {
        Reflect.deleteProperty(SVGElement.prototype, 'getBBox');
        vi.unstubAllGlobals();
        vi.restoreAllMocks();
    });

    it('removes active content before the map SVG enters the page', async () => {
        const probe = window as unknown as Record<string, unknown>;
        delete probe.__map_xss;
        vi.spyOn(client, 'authority').mockReturnValue(
            {} as ReturnType<typeof client.authority>,
        );
        vi.spyOn(client, 'token').mockReturnValue('');
        const svg =
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100" onload="window.__map_xss = 1">' +
            '<script>window.__map_xss = 2</script>' +
            '<foreignObject><img src="x" onerror="window.__map_xss = 3"/></foreignObject>' +
            '<a href=" java\tscript:alert(1)"><rect id="desk" x="20" y="10" width="40" height="20" onclick="alert(1)"/></a>' +
            '</svg>';
        vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response(svg)));
        const appended = vi.spyOn(document.body, 'appendChild');

        const details = await getMapDetails('/maps/active-content.svg');
        await new Promise((resolve) => setTimeout(resolve, 40));

        const inserted = (appended.mock.calls[0][0] as HTMLElement).innerHTML;
        expect(inserted).toContain('id="desk"');
        expect(inserted).not.toMatch(
            /onload|onclick|onerror|script|foreignObject/i,
        );
        expect(probe.__map_xss).toBeUndefined();
        expect(details.element_bounds.get('desk')).toEqual({
            x: 0.1,
            y: 0.1,
            w: 0.2,
            h: 0.2,
        });
        expect(details.aspect_ratio).toBe(2);
        expect(details.raw_data).toBe(svg);
    });

    it('drops the least recently used map when the cache is full', async () => {
        vi.spyOn(client, 'authority').mockReturnValue(
            {} as ReturnType<typeof client.authority>,
        );
        vi.spyOn(client, 'token').mockReturnValue('');
        const fetch_map = vi.fn(() =>
            Promise.resolve(
                new Response('<svg xmlns="http://www.w3.org/2000/svg"/>'),
            ),
        );
        vi.stubGlobal('fetch', fetch_map);

        for (let i = 0; i <= 10; i++) {
            await getMapDetails(`/maps/cache-${i}.svg`);
        }
        await getMapDetails('/maps/cache-10.svg');
        expect(fetch_map).toHaveBeenCalledTimes(11);
        await getMapDetails('/maps/cache-0.svg');
        expect(fetch_map).toHaveBeenCalledTimes(12);
    });
});
