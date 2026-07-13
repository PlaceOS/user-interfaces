import { SpectatorHost, createHostFactory } from '@ngneat/spectator/vitest';

import { ViewportVisibilityComponent } from '../lib/viewport-visibility.component';

class MockIntersectionObserver {
    public static instances: MockIntersectionObserver[] = [];
    public observe = vi.fn();
    public disconnect = vi.fn();
    public unobserve = vi.fn();

    constructor(
        public callback: IntersectionObserverCallback,
        public options: IntersectionObserverInit,
    ) {
        MockIntersectionObserver.instances.push(this);
    }

    public trigger(is_intersecting: boolean) {
        this.callback(
            [{ isIntersecting: is_intersecting } as IntersectionObserverEntry],
            this as any,
        );
    }
}

describe('ViewportVisibilityComponent', () => {
    let spectator: SpectatorHost<ViewportVisibilityComponent>;
    const createHost = createHostFactory({
        component: ViewportVisibilityComponent,
    });

    beforeAll(() => {
        (window as any).IntersectionObserver = MockIntersectionObserver;
    });

    beforeEach(() => {
        MockIntersectionObserver.instances = [];
        vi.spyOn(console, 'log').mockImplementation(() => null);
    });

    afterEach(() => vi.restoreAllMocks());

    it('should create component and observe the host element', () => {
        spectator = createHost(
            `<div viewport-only><span class="content">Hello</span></div>`,
        );
        expect(spectator.component).toBeTruthy();
        const observer = MockIntersectionObserver.instances[0];
        expect(observer).toBeTruthy();
        expect(observer.observe).toHaveBeenCalledWith(spectator.element);
    });

    it('should pass threshold and root margin options to the observer', () => {
        spectator = createHost(
            `<div viewport-only [threshold]="0.5" [root_margin]="'64px'"></div>`,
        );
        const observer = MockIntersectionObserver.instances[0];
        expect(observer.options).toEqual({
            root: null,
            rootMargin: '64px',
            threshold: 0.5,
        });
    });

    it('should only render content while intersecting the viewport', () => {
        spectator = createHost(
            `<div viewport-only><span class="content">Hello</span></div>`,
        );
        expect('.content').not.toExist();
        const observer = MockIntersectionObserver.instances[0];
        observer.trigger(true);
        spectator.detectChanges();
        expect(spectator.component.visible()).toBe(true);
        expect('.content').toExist();
        observer.trigger(false);
        spectator.detectChanges();
        expect(spectator.component.visible()).toBe(false);
        expect('.content').not.toExist();
    });

    it('should stop observing after first intersection when not continuous', () => {
        spectator = createHost(`<div viewport-only [continuous]="false"></div>`);
        const observer = MockIntersectionObserver.instances[0];
        observer.trigger(false);
        expect(observer.disconnect).not.toHaveBeenCalled();
        observer.trigger(true);
        expect(observer.disconnect).toHaveBeenCalled();
    });

    it('should disconnect the observer on destroy', () => {
        spectator = createHost(`<div viewport-only></div>`);
        const observer = MockIntersectionObserver.instances[0];
        spectator.fixture.destroy();
        expect(observer.disconnect).toHaveBeenCalled();
    });
});
