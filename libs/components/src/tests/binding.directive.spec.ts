import {
    createDirectiveFactory,
    SpectatorDirective,
} from '@ngneat/spectator/jest';
import { BehaviorSubject, of } from 'rxjs';

import { BindingDirective } from '../lib/binding.directive';

jest.mock('@placeos/ts-client', () => ({
    ...jest.requireActual('@placeos/ts-client'),
    authority: jest.fn(),
    getModule: jest.fn(),
    onlineState: jest.fn(),
    waitForSignal: jest.fn(),
}));

import { fakeAsync } from '@angular/core/testing';
import * as ts_client from '@placeos/ts-client';

describe('BindingDirective', () => {
    let spectator: SpectatorDirective<BindingDirective>;
    const createDirective = createDirectiveFactory(BindingDirective);

    beforeEach(() => {
        jest.clearAllMocks();
        jest.mocked(ts_client.authority).mockReturnValue(true as any);
        jest.mocked(ts_client.onlineState).mockReturnValue(of(true) as any);
        jest.mocked(ts_client.waitForSignal).mockResolvedValue(true as any);
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

    it('should listen to binding changes', fakeAsync(() => {
        const value = new BehaviorSubject('');
        jest.mocked(ts_client.getModule).mockReturnValue({
            variable: jest.fn(() => ({
                bindThenSubscribe: jest.fn((callback) => {
                    const sub = value.subscribe(callback);
                    return sub;
                }),
            })),
        } as any);
        spectator.setHostInput({
            sys: 'system-1',
            mod: 'System',
            index: 2,
            bind: 'power',
        });
        spectator.tick(1000);
        expect(ts_client.getModule).toHaveBeenCalledWith(
            'system-1',
            'System',
            2,
        );
        spectator.directive.modelChange.subscribe((value) => {
            if (!value) return;
            expect(value).toBe('Testing');
        });
        value.next('Testing');
        spectator.tick(1000);
    }));

    it('should allow performing executions', fakeAsync(() => {
        const execute = jest.fn(async (_) => null);
        jest.mocked(ts_client.getModule).mockReturnValue({
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
        spectator.tick(1000);
        expect(ts_client.getModule).toHaveBeenCalledWith(
            'system-1',
            'System',
            1,
        );
        expect(execute).toHaveBeenCalledWith('power', []);
        spectator.setHostInput({ params: [false], model: 2 });
        spectator.detectChanges();
        spectator.tick(1000);
        expect(execute).toHaveBeenCalledWith('power', [false]);
    }));

    it('should allow executing on parent element DOM events', fakeAsync(() => {
        const execute = jest.fn(async (_) => null);
        jest.mocked(ts_client.getModule).mockReturnValue({
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
        spectator.tick(1000);
        expect(execute).toHaveBeenCalledWith('power', []);
        spectator.setHostInput({ on_event: 'random_event', params: ['Jim'] });
        spectator.triggerEventHandler('[binding]', 'random_event', {});
        spectator.tick(1000);
        expect(execute).toHaveBeenCalledWith('power', ['Jim']);
    }));
});
