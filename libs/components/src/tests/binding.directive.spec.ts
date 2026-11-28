import {
    createDirectiveFactory,
    SpectatorDirective,
} from '@ngneat/spectator/vitest';
import { BindingDirective } from '../lib/binding.directive';

import {
    startTestPlaceClient,
    type TestPlaceClient,
} from './test-place-client';

describe('BindingDirective', () => {
    let place: TestPlaceClient;
    beforeEach(() => {
        place = startTestPlaceClient();
    });
    let spectator: SpectatorDirective<BindingDirective>;
    const createDirective = createDirectiveFactory(BindingDirective);

    beforeEach(() => {
        vi.clearAllMocks();
        place.setAuthority({});
        place.setOnline(true);
        spectator = createDirective(
            `
            <div
                binding
                [sys]="sys" [mod]="mod" [index]="index" [bind]="bind"
                [exec]="exec" [(model)]="model" [params]="params"
                [onEvent]="on_event"
            >
                Testing Binding Directive
            </div>
            `,
            {
                hostProps: {
                    sys: '',
                    mod: '',
                    index: 1,
                    bind: '',
                    exec: '',
                    model: false,
                    params: [],
                    on_event: '',
                },
            },
        );
    });

    /** Target of a binding or call on the module `System` */
    const target = (sys: string, name: string, index = 1) => ({
        sys,
        mod: 'System',
        index,
        name,
    });

    it('should listen to binding changes', async () => {
        vi.useFakeTimers();
        spectator.setHostInput({
            sys: 'system-1',
            mod: 'System',
            index: 2,
            bind: 'power',
        });
        await vi.advanceTimersByTimeAsync(1000);
        expect(place.bind).toHaveBeenCalledWith(
            target('system-1', 'power', 2),
            expect.any(Function),
        );
        const emitted: unknown[] = [];
        spectator.directive.modelChange.subscribe((v) => emitted.push(v));
        place.emit('system-1', 'System', 'power', 'Testing', 2);
        await vi.advanceTimersByTimeAsync(1000);
        expect(spectator.directive.model()).toBe('Testing');
        expect(emitted).toContain('Testing');
        vi.useRealTimers();
    });

    it('should allow performing executions', async () => {
        vi.useFakeTimers();
        spectator.setHostInput({
            sys: 'system-1',
            mod: 'System',
            exec: 'power',
        });
        spectator.detectChanges();
        expect(place.exec).not.toHaveBeenCalled();
        spectator.setHostInput({ model: true });
        spectator.detectChanges();
        await vi.advanceTimersByTimeAsync(1000);
        expect(place.exec).toHaveBeenCalledWith(
            target('system-1', 'power'),
            [],
            undefined,
        );
        spectator.setHostInput({ params: [false], model: 2 });
        spectator.detectChanges();
        await vi.advanceTimersByTimeAsync(1000);
        expect(place.commands().at(-1)).toEqual(['power', [false]]);
        vi.useRealTimers();
    });

    it('should allow executing on parent element DOM events', async () => {
        vi.useFakeTimers();
        spectator.setHostInput({
            sys: 'system-1',
            mod: 'System',
            exec: 'power',
            on_event: 'click',
        });
        spectator.detectChanges();
        expect(place.exec).not.toHaveBeenCalled();
        spectator.click('[binding]');
        await vi.advanceTimersByTimeAsync(1000);
        expect(place.commands()).toEqual([['power', []]]);
        spectator.setHostInput({ on_event: 'random_event', params: ['Jim'] });
        spectator.detectChanges();
        // The directive registers a native listener via Renderer2.listen, so
        // dispatch a real event rather than an Angular DebugElement handler.
        spectator
            .query('[binding]')
            .dispatchEvent(new Event('random_event', { bubbles: true }));
        await vi.advanceTimersByTimeAsync(1000);
        expect(place.commands().at(-1)).toEqual(['power', ['Jim']]);
        vi.useRealTimers();
    });

    it('should move or drop the binding when its target changes', async () => {
        vi.useFakeTimers();
        spectator.setHostInput({ sys: 'sys-1', mod: 'System', bind: 'power' });
        await vi.advanceTimersByTimeAsync(50);
        expect(place.listenerCount('sys-1', 'System', 'power')).toBe(1);
        spectator.setHostInput({ sys: 'sys-2' });
        await vi.advanceTimersByTimeAsync(50);
        expect(place.listenerCount('sys-1', 'System', 'power')).toBe(0);
        expect(place.listenerCount('sys-2', 'System', 'power')).toBe(1);
        spectator.setHostInput({ bind: '' });
        expect(place.listenerCount('sys-2', 'System', 'power')).toBe(0);
        vi.useRealTimers();
    });

    it('should not execute values that come from the binding', async () => {
        vi.useFakeTimers();
        spectator.setHostInput({
            sys: 'sys-1',
            mod: 'System',
            bind: 'power',
            exec: 'power',
        });
        await vi.advanceTimersByTimeAsync(1000);
        place.emit('sys-1', 'System', 'power', true);
        await vi.advanceTimersByTimeAsync(100);
        spectator.detectChanges();
        await vi.advanceTimersByTimeAsync(1000);
        expect(spectator.hostComponent['model']).toBe(true);
        expect(place.exec).not.toHaveBeenCalled();
        spectator.setHostInput({ model: null });
        await vi.advanceTimersByTimeAsync(1000);
        expect(place.exec).not.toHaveBeenCalled();
        vi.useRealTimers();
    });

    it('should not bind after it is destroyed', async () => {
        vi.useFakeTimers();
        // Offline: setting the inputs does not bind yet
        place.setOnline(false);
        place.setAuthority(null);
        spectator.setHostInput({ sys: 'sys-1', mod: 'System', bind: 'power' });
        spectator.directive.ngOnInit();
        spectator.fixture.destroy();
        place.setAuthority({});
        place.setOnline(true);
        await vi.advanceTimersByTimeAsync(1000);
        expect(place.bind).not.toHaveBeenCalled();
        vi.useRealTimers();
    });
});
