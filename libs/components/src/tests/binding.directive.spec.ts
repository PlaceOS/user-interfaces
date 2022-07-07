import {
    createDirectiveFactory,
    SpectatorDirective,
} from '@ngneat/spectator/jest';
import { BehaviorSubject, of } from 'rxjs';

import { BindingDirective } from '../lib/binding.directive';

jest.mock('@placeos/ts-client');

import * as ts_client from '@placeos/ts-client';
import { fakeAsync } from '@angular/core/testing';

describe('BindingDirective', () => {
    let spectator: SpectatorDirective<BindingDirective>;
    const createDirective = createDirectiveFactory(BindingDirective);

    beforeEach(() => {
        spectator = createDirective(
            `<div binding>Testing Binding Directive</div>`
        );
        (ts_client as any).authority = jest.fn(() => true);
        (ts_client as any).onlineState = jest.fn(() => of(true));
    });

    it('should create an instance', () => {
        expect(spectator.directive).toBeTruthy();
    });

    it('should listen to binding changes', (done) => {
        const value = new BehaviorSubject('');
        (ts_client as any).getModule = jest.fn(() => ({
            binding: jest.fn(() => ({
                bind: jest.fn(() => null),
                listen: () => value.asObservable(),
            })),
        }));
        spectator.setInput({
            sys: 'system-1',
            mod: 'System',
            index: 2,
            bind: 'power',
        });
        new Promise<void>((r) => setTimeout(() => r(), 31)).then(() => {
            expect(ts_client.getModule).toHaveBeenCalledWith(
                'system-1',
                'System',
                2
            );
            spectator.directive.modelChange.subscribe((value) => {
                if (!value) return;
                expect(value).toBe('Testing');
                done();
            });
            value.next('Testing');
        });
    });

    it('should allow performing executions', () => {
        const execute = jest.fn(async (_) => null);
        (ts_client as any).getModule = jest.fn(() => ({
            execute,
        }));
        spectator.setInput({ sys: 'system-1', mod: 'System', exec: 'power' });
        spectator.detectChanges();
        expect(execute).not.toHaveBeenCalled();
        spectator.setInput({ model: true });
        spectator.detectChanges();
        expect(ts_client.getModule).toHaveBeenCalledWith(
            'system-1',
            'System',
            1
        );
        expect(execute).toHaveBeenCalledWith('power', []);
        spectator.setInput({ params: [false], model: 2 });
        spectator.detectChanges();
        expect(execute).toHaveBeenCalledWith('power', [false]);
    });

    it('should allow executing on parent element DOM events', () => {
        const execute = jest.fn(async (_) => null);
        (ts_client as any).getModule = jest.fn(() => ({
            execute,
        }));
        spectator.setInput({
            sys: 'system-1',
            mod: 'System',
            exec: 'power',
            on_event: 'click',
        });
        spectator.detectChanges();
        expect(execute).not.toHaveBeenCalled();
        spectator.click('[binding]');
        expect(execute).toHaveBeenCalledWith('power', []);
        spectator.setInput({ on_event: 'random_event', params: ['Jim'] });
        spectator.triggerEventHandler('[binding]', 'random_event', {});
        expect(execute).toHaveBeenCalledWith('power', ['Jim']);
    });
});
