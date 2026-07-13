import {
    createDirectiveFactory,
    SpectatorDirective,
} from '@ngneat/spectator/vitest';
import { BehaviorSubject, of } from 'rxjs';

import { BindingDirective } from '../lib/binding.directive';

vi.mock('@placeos/ts-client', { spy: true });

import * as ts_client from '@placeos/ts-client';

describe('BindingDirective', () => {
    let spectator: SpectatorDirective<BindingDirective>;
    const createDirective = createDirectiveFactory(BindingDirective);

    beforeEach(() => {
        vi.clearAllMocks();
        vi.mocked(ts_client.authority).mockReturnValue(true as any);
        vi.mocked(ts_client.onlineState).mockReturnValue(of(true) as any);
        vi.mocked(ts_client.waitForSignal).mockResolvedValue(true as any);
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

    it('should create an instance', () => {
        expect(spectator.directive).toBeTruthy();
    });

    it('should listen to binding changes', async () => {
        vi.useFakeTimers();
        const value = new BehaviorSubject('');
        vi.mocked(ts_client.getModule).mockReturnValue({
            variable: vi.fn(() => ({
                bindThenSubscribe: vi.fn((callback) => value.subscribe(callback)),
            })),
        } as any);
        spectator.setHostInput({
            sys: 'system-1',
            mod: 'System',
            index: 2,
            bind: 'power',
        });
        await vi.advanceTimersByTimeAsync(1000);
        expect(ts_client.getModule).toHaveBeenCalledWith(
            'system-1',
            'System',
            2,
        );
        const emitted: any[] = [];
        spectator.directive.modelChange.subscribe((v) => emitted.push(v));
        value.next('Testing');
        await vi.advanceTimersByTimeAsync(1000);
        expect(spectator.directive.model()).toBe('Testing');
        expect(emitted).toContain('Testing');
        vi.useRealTimers();
    });

    it('should allow performing executions', async () => {
        vi.useFakeTimers();
        const execute = vi.fn(async (_) => null);
        vi.mocked(ts_client.getModule).mockReturnValue({
            execute,
        } as any);
        spectator.setHostInput({
            sys: 'system-1',
            mod: 'System',
            exec: 'power',
        });
        spectator.detectChanges();
        expect(execute).not.toHaveBeenCalled();
        spectator.setHostInput({ model: true });
        spectator.detectChanges();
        await vi.advanceTimersByTimeAsync(1000);
        expect(ts_client.getModule).toHaveBeenCalledWith(
            'system-1',
            'System',
            1,
        );
        expect(execute).toHaveBeenCalledWith('power', []);
        spectator.setHostInput({ params: [false], model: 2 });
        spectator.detectChanges();
        await vi.advanceTimersByTimeAsync(1000);
        expect(execute).toHaveBeenCalledWith('power', [false]);
        vi.useRealTimers();
    });

    it('should allow executing on parent element DOM events', async () => {
        vi.useFakeTimers();
        const execute = vi.fn(async (_) => null);
        vi.mocked(ts_client.getModule).mockReturnValue({
            execute,
        } as any);
        spectator.setHostInput({
            sys: 'system-1',
            mod: 'System',
            exec: 'power',
            on_event: 'click',
        });
        spectator.detectChanges();
        expect(execute).not.toHaveBeenCalled();
        spectator.click('[binding]');
        await vi.advanceTimersByTimeAsync(1000);
        expect(execute).toHaveBeenCalledWith('power', []);
        spectator.setHostInput({ on_event: 'random_event', params: ['Jim'] });
        spectator.detectChanges();
        // The directive registers a native listener via Renderer2.listen, so
        // dispatch a real event rather than an Angular DebugElement handler.
        spectator
            .query('[binding]')
            .dispatchEvent(new Event('random_event', { bubbles: true }));
        await vi.advanceTimersByTimeAsync(1000);
        expect(execute).toHaveBeenCalledWith('power', ['Jim']);
        vi.useRealTimers();
    });
});
