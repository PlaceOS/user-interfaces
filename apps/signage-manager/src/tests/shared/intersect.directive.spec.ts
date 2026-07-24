import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IntersectDirective } from '../../app/shared/intersect.directive';

type ObserverCallback = (entries: { isIntersecting: boolean }[]) => void;

@Component({
    imports: [IntersectDirective],
    template: `<div intersect (intersect)="hits = hits + 1"></div>`,
})
class HostComponent {
    public hits = 0;
}

describe('IntersectDirective', () => {
    let observer_callback: ObserverCallback;
    let observer_options: IntersectionObserverInit | undefined;
    const observe = vi.fn();
    const disconnect = vi.fn();
    const original_observer = (global as any).IntersectionObserver;

    beforeEach(async () => {
        vi.clearAllMocks();
        (global as any).IntersectionObserver = class {
            constructor(
                callback: ObserverCallback,
                options?: IntersectionObserverInit,
            ) {
                observer_callback = callback;
                observer_options = options;
            }
            observe = observe;
            disconnect = disconnect;
        };
        await TestBed.configureTestingModule({
            imports: [HostComponent],
        }).compileComponents();
    });

    afterEach(() => {
        (global as any).IntersectionObserver = original_observer;
    });

    function setup(): ComponentFixture<HostComponent> {
        const fixture = TestBed.createComponent(HostComponent);
        fixture.detectChanges();
        return fixture;
    }

    it('observes the host element with a preloading root margin', () => {
        setup();

        expect(observe).toHaveBeenCalledTimes(1);
        expect(observer_options).toEqual({ rootMargin: '300px' });
    });

    it('emits when at least one entry is intersecting', () => {
        const fixture = setup();

        observer_callback([{ isIntersecting: true }]);

        expect(fixture.componentInstance.hits).toBe(1);
    });

    it('does not emit while nothing is intersecting', () => {
        const fixture = setup();

        observer_callback([{ isIntersecting: false }]);

        expect(fixture.componentInstance.hits).toBe(0);
    });

    it('disconnects the observer when destroyed', () => {
        const fixture = setup();

        fixture.destroy();

        expect(disconnect).toHaveBeenCalledTimes(1);
    });
});
