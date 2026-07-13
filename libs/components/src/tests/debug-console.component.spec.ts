import { WritableSignal, signal } from '@angular/core';
import { Spectator, createComponentFactory } from '@ngneat/spectator/vitest';

import { OrganisationService, SettingsService } from '@placeos/common';
import { HotkeysService } from 'libs/common/src/lib/hotkeys.service';
import {
    ClientEvent,
    RemoteLoggingService,
} from 'libs/common/src/lib/remote-logging.service';
import { DebugConsoleComponent } from '../lib/debug-console.component';

describe('DebugConsoleComponent', () => {
    let spectator: Spectator<DebugConsoleComponent>;

    let hotkey_callback: () => void;
    const history = signal<ClientEvent[]>([]);
    const org_mock = {
        initialised: signal(true),
        active_building: signal(null),
        binding: vi.fn(() => 'sys-1'),
    };
    const logging_mock = {
        history: history.asReadonly(),
        setSystem: vi.fn(),
    };
    let setting_signals: Record<string, WritableSignal<any>> = {};
    const settings_mock = {
        signal: vi.fn((name: string, default_value?: any) => {
            if (!setting_signals[name]) {
                setting_signals[name] = signal(default_value);
            }
            return setting_signals[name];
        }),
    };

    const log = (data: Partial<ClientEvent>): ClientEvent =>
        ({
            type: 'console',
            subtype: 'log',
            timestamp: Date.now(),
            data: [],
            ...data,
        }) as any;

    const createComponent = createComponentFactory({
        component: DebugConsoleComponent,
        providers: [
            { provide: OrganisationService, useValue: org_mock },
            { provide: RemoteLoggingService, useValue: logging_mock },
            { provide: SettingsService, useValue: settings_mock },
            {
                provide: HotkeysService,
                useValue: {
                    listen: vi.fn((_combo, next: () => void) => {
                        hotkey_callback = next;
                        return { unsubscribe: vi.fn() };
                    }),
                },
            },
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        setting_signals = {};
        history.set([]);
        org_mock.initialised.set(true);
        spectator = createComponent();
    });

    afterEach(() => vi.useRealTimers());

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should bind the remote logger to the configured system', () => {
        expect(org_mock.binding).toHaveBeenCalledWith('remote_logger');
        expect(logging_mock.setSystem).toHaveBeenCalledWith('sys-1');
    });

    it('should limit displayed logs to the configured amount', () => {
        history.set([
            log({ data: ['first'] }),
            log({ data: ['second'] }),
            log({ data: ['third'] }),
        ]);
        spectator.detectChanges();
        expect(spectator.component.logs()).toHaveLength(3);
        setting_signals['log_limits'].set(2);
        spectator.detectChanges();
        const logs = spectator.component.logs();
        expect(logs).toHaveLength(2);
        expect(logs[0].data).toEqual(['second']);
    });

    it('should filter logs based on type, subtype and data', () => {
        history.set([
            log({ type: 'console', subtype: 'error', data: ['broken'] }),
            log({ type: 'network', subtype: 'info', data: ['request'] }),
        ]);
        spectator.detectChanges();
        expect(spectator.component.filtered_logs()).toHaveLength(2);
        spectator.component.filter.set('error');
        expect(spectator.component.filtered_logs()).toHaveLength(1);
        spectator.component.filter.set('request');
        expect(spectator.component.filtered_logs()).toHaveLength(1);
        expect(spectator.component.filtered_logs()[0].type).toBe('network');
        spectator.component.filter.set('no-match');
        expect(spectator.component.filtered_logs()).toHaveLength(0);
    });

    it('should toggle console visibility with the hotkey', () => {
        expect(spectator.component.show()).toBe(false);
        hotkey_callback();
        expect(spectator.component.show()).toBe(true);
        hotkey_callback();
        expect(spectator.component.show()).toBe(false);
    });

    it('should show the console after holding the activation button', () => {
        vi.useFakeTimers();
        spectator.component.onStart();
        vi.advanceTimersByTime(5000);
        expect(spectator.component.show()).toBe(true);
        // Releasing early should cancel showing the console
        spectator.component.show.set(false);
        spectator.component.onStart();
        vi.advanceTimersByTime(2000);
        spectator.component.onEnd();
        vi.advanceTimersByTime(5000);
        expect(spectator.component.show()).toBe(false);
    });

    it('should identify the type of log data items', () => {
        expect(spectator.component.type('https://place.tech')).toBe('link');
        expect(spectator.component.type('mailto:support@place.tech')).toBe(
            'link',
        );
        expect(spectator.component.type({ key: 'value' })).toBe('object');
        expect(spectator.component.type('plain text')).toBe('string');
    });
});
