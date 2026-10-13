import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';

import { DebugOverlayComponent } from '../app/debug-overlay.component';

describe('DebugOverlayComponent', () => {
    let spectator: Spectator<DebugOverlayComponent>;

    const create_component = createComponentFactory({
        component: DebugOverlayComponent,
        shallow: true,
    });

    function build_component(editing = false) {
        spectator = create_component({
            props: {
                overlay_id: 'test-overlay',
                label: 'test overlay',
                icon: 'info',
                editing,
                reset_count: 0,
                initial_position: { x: 0.25, y: 0.75 },
            },
        });
    }

    function pointerEvent(
        current_target: HTMLElement,
        client_x: number,
        client_y: number,
        shift_key = false,
    ): PointerEvent {
        return {
            button: 0,
            clientX: client_x,
            clientY: client_y,
            currentTarget: current_target,
            pointerId: 1,
            shiftKey: shift_key,
            preventDefault: vi.fn(),
            stopPropagation: vi.fn(),
        } as unknown as PointerEvent;
    }

    beforeEach(() => {
        localStorage.clear();
        build_component();
    });

    afterEach(() => vi.restoreAllMocks());

    it('should use the configured initial position', () => {
        expect(spectator.component.position()).toEqual({ x: 0.25, y: 0.75 });
        expect(spectator.component.origin()).toEqual({ x: 0.25, y: 0.75 });
        expect(spectator.element.style.left).toBe('25%');
        expect(spectator.element.style.top).toBe('75%');
        expect(spectator.element.style.transform).toBe('translate(-25%, -75%)');
    });

    it('should only show layout controls while editing', async () => {
        expect(
            spectator.query('button[aria-label="Hide test overlay"]'),
        ).toBeFalsy();

        spectator.setInput('editing', true);
        await spectator.fixture.whenStable();

        expect(
            spectator.query('button[aria-label="Hide test overlay"]'),
        ).toBeTruthy();
        expect(
            spectator.query('button[aria-label="Move test overlay origin"]'),
        ).toBeTruthy();
        expect(
            spectator
                .query('[inert]')
                ?.classList.contains('pointer-events-none'),
        ).toBe(true);
        expect(spectator.query('[inert]')?.classList).toContain('opacity-80');
    });

    it('should place the hide control away from the nearest screen edge', async () => {
        spectator.setInput('editing', true);
        await spectator.fixture.whenStable();
        const hide_control = spectator.query(
            'button[aria-label="Hide test overlay"]',
        );

        expect(hide_control?.classList).toContain('bottom-full');
        expect(hide_control?.classList).toContain('mb-2');

        spectator.component.position.set({ x: 0.25, y: 0.25 });
        await spectator.fixture.whenStable();

        expect(hide_control?.classList).toContain('top-full');
        expect(hide_control?.classList).toContain('mt-2');
    });

    it('should store and restore its minimized state', async () => {
        spectator.setInput('editing', true);
        await spectator.fixture.whenStable();
        spectator.click('button[aria-label="Hide test overlay"]');

        expect(spectator.component.minimized()).toBe(true);
        expect(
            JSON.parse(
                localStorage.getItem('SIGNAGE.debug-overlay.test-overlay') ||
                    '{}',
            ),
        ).toEqual({
            minimized: true,
            origin: { x: 0.25, y: 0.75 },
            position: { x: 0.25, y: 0.75 },
        });

        spectator.fixture.destroy();
        build_component();

        expect(spectator.component.minimized()).toBe(true);
        expect(
            spectator.query('button[aria-label="Show test overlay"]'),
        ).toBeFalsy();

        spectator.setInput('editing', true);
        await spectator.fixture.whenStable();

        expect(
            spectator.query('button[aria-label="Show test overlay"]'),
        ).toBeTruthy();
    });

    it('should reset its position, origin, and visibility', async () => {
        spectator.component.position.set({ x: 0.8, y: 0.2 });
        spectator.component.origin.set({ x: 0.7, y: 0.3 });
        spectator.component.setMinimized(true);

        spectator.setInput('reset_count', 1);
        await spectator.fixture.whenStable();

        expect(spectator.component.position()).toEqual({ x: 0.25, y: 0.75 });
        expect(spectator.component.origin()).toEqual({ x: 0.25, y: 0.75 });
        expect(spectator.component.minimized()).toBe(false);
        expect(
            localStorage.getItem('SIGNAGE.debug-overlay.test-overlay'),
        ).toBeNull();
    });

    it('should preserve the placement of stored layouts without an origin', () => {
        spectator.fixture.destroy();
        localStorage.setItem(
            'SIGNAGE.debug-overlay.test-overlay',
            JSON.stringify({
                minimized: false,
                position: { x: 0.6, y: 0.4 },
            }),
        );

        build_component();

        expect(spectator.component.position()).toEqual({ x: 0.6, y: 0.4 });
        expect(spectator.component.origin()).toEqual({ x: 0.6, y: 0.4 });
        expect(spectator.element.style.transform).toBe('translate(-60%, -40%)');
    });

    it('should store a dragged position within the parent bounds', async () => {
        spectator.setInput('editing', true);
        await spectator.fixture.whenStable();
        const parent = spectator.element.parentElement;
        expect(parent).toBeTruthy();
        vi.spyOn(parent!, 'getBoundingClientRect').mockReturnValue(
            DOMRect.fromRect({ width: 1000, height: 800 }),
        );
        vi.spyOn(spectator.element, 'getBoundingClientRect').mockReturnValue(
            DOMRect.fromRect({ width: 100, height: 100 }),
        );
        const drag_handle = spectator.query(
            'div[aria-label="Move test overlay"]',
        ) as HTMLDivElement;
        spectator.component.startDrag(pointerEvent(drag_handle, 100, 100));
        spectator.component.moveDrag(pointerEvent(drag_handle, 190, 30));
        spectator.component.finishDrag(pointerEvent(drag_handle, 190, 30));

        expect(spectator.component.position().x).toBeCloseTo(0.34);
        expect(spectator.component.position().y).toBeCloseTo(0.6625);
        expect(
            JSON.parse(
                localStorage.getItem('SIGNAGE.debug-overlay.test-overlay') ||
                    '{}',
            ).position,
        ).toEqual(spectator.component.position());
    });

    it('should snap the origin to the grid while dragging with Shift', async () => {
        spectator.setInput('editing', true);
        await spectator.fixture.whenStable();
        const parent = spectator.element.parentElement;
        expect(parent).toBeTruthy();
        vi.spyOn(parent!, 'getBoundingClientRect').mockReturnValue(
            DOMRect.fromRect({ width: 1000, height: 800 }),
        );
        vi.spyOn(spectator.element, 'getBoundingClientRect').mockReturnValue(
            DOMRect.fromRect({ x: 225, y: 525, width: 100, height: 100 }),
        );
        const drag_handle = spectator.query(
            'div[aria-label="Move test overlay"]',
        ) as HTMLDivElement;

        spectator.component.startDrag(pointerEvent(drag_handle, 250, 600));
        spectator.component.moveDrag(pointerEvent(drag_handle, 333, 542, true));
        spectator.component.finishDrag(
            pointerEvent(drag_handle, 333, 542, true),
        );

        expect(spectator.component.position()).toEqual({
            x: 0.325,
            y: 0.675,
        });
    });

    it('should use the smaller grid below laptop widths', async () => {
        vi.spyOn(window, 'innerWidth', 'get').mockReturnValue(800);
        spectator.setInput('editing', true);
        await spectator.fixture.whenStable();
        const parent = spectator.element.parentElement;
        expect(parent).toBeTruthy();
        vi.spyOn(parent!, 'getBoundingClientRect').mockReturnValue(
            DOMRect.fromRect({ width: 1000, height: 800 }),
        );
        vi.spyOn(spectator.element, 'getBoundingClientRect').mockReturnValue(
            DOMRect.fromRect({ x: 225, y: 525, width: 100, height: 100 }),
        );
        const drag_handle = spectator.query(
            'div[aria-label="Move test overlay"]',
        ) as HTMLDivElement;

        spectator.component.startDrag(pointerEvent(drag_handle, 250, 600));
        spectator.component.moveDrag(pointerEvent(drag_handle, 333, 542, true));

        expect(spectator.component.position()).toEqual({ x: 0.35, y: 0.7 });
    });

    it('should move the origin without moving the element', async () => {
        spectator.setInput('editing', true);
        await spectator.fixture.whenStable();
        const parent = spectator.element.parentElement;
        expect(parent).toBeTruthy();
        vi.spyOn(parent!, 'getBoundingClientRect').mockReturnValue(
            DOMRect.fromRect({ width: 1000, height: 800 }),
        );
        vi.spyOn(spectator.element, 'getBoundingClientRect').mockReturnValue(
            DOMRect.fromRect({ x: 225, y: 525, width: 100, height: 100 }),
        );
        const origin_handle = spectator.query(
            'button[aria-label="Move test overlay origin"]',
        ) as HTMLButtonElement;

        spectator.component.startOriginDrag(
            pointerEvent(origin_handle, 250, 600),
        );
        spectator.component.moveOriginDrag(
            pointerEvent(origin_handle, 305, 545),
        );
        spectator.component.finishOriginDrag(
            pointerEvent(origin_handle, 305, 545),
        );
        await spectator.fixture.whenStable();

        expect(spectator.component.origin()).toEqual({ x: 0.8, y: 0.2 });
        expect(spectator.component.position()).toEqual({
            x: 0.305,
            y: 0.68125,
        });
        expect(spectator.element.style.transform).toBe('translate(-80%, -20%)');
    });
});
