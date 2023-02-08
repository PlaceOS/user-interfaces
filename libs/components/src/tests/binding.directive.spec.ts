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

    it('should listen to binding changes', fakeAsync(() => {
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
        spectator.tick(1000);
        expect(ts_client.getModule).toHaveBeenCalledWith(
            'system-1',
            'System',
            2
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
        (ts_client as any).getModule = jest.fn(() => ({
            execute,
        }));
        spectator.setInput({ sys: 'system-1', mod: 'System', exec: 'power' });
        spectator.detectChanges();
        expect(execute).not.toHaveBeenCalled();
        spectator.setInput({ model: true });
        spectator.detectChanges();
        spectator.tick(1000);
        expect(ts_client.getModule).toHaveBeenCalledWith(
            'system-1',
            'System',
            1
        );
        expect(execute).toHaveBeenCalledWith('power', []);
        spectator.setInput({ params: [false], model: 2 });
        spectator.detectChanges();
        spectator.tick(1000);
        expect(execute).toHaveBeenCalledWith('power', [false]);
    }));

    it('should allow executing on parent element DOM events', fakeAsync(() => {
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
        spectator.tick(1000);
        expect(execute).toHaveBeenCalledWith('power', []);
        spectator.setInput({ on_event: 'random_event', params: ['Jim'] });
        spectator.triggerEventHandler('[binding]', 'random_event', {});
        spectator.tick(1000);
        expect(execute).toHaveBeenCalledWith('power', ['Jim']);
    }));
});
