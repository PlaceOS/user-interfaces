import { signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import { MockModule, MockProvider } from 'ng-mocks';
import { NEVER, of } from 'rxjs';

import {
    markInitialisationComplete,
    OrganisationService,
    RemoteSetupDevice,
    SettingsService,
} from '@placeos/common';
import * as client from '@placeos/ts-client';

import { RemoteSetupFlowComponent } from '../lib/remote-setup-flow.component';

vi.mock('@placeos/ts-client', { spy: true });

const DEVICES: Record<string, RemoteSetupDevice> = {
    'DEV-1': { id: 'DEV-1', app: 'booking-panel', config: null, last_seen: 2 },
    'DEV-2': {
        id: 'DEV-2',
        app: 'control',
        config: { system_id: 'sys-1' },
        last_seen: 3,
    },
    'DEV-3': { id: 'DEV-3', app: 'signage', config: null, last_seen: 1 },
};

describe('RemoteSetupFlowComponent', () => {
    let spectator: SpectatorRouting<RemoteSetupFlowComponent>;
    let listeners: Record<string, (value: unknown) => void>;
    let execute: ReturnType<typeof vi.fn>;

    const createComponent = createRoutingFactory({
        component: RemoteSetupFlowComponent,
        providers: [
            MockProvider(SettingsService, { get: vi.fn() }),
            MockProvider(MatDialog, {
                // A confirm modal that the user confirms at once
                open: vi.fn(() => ({
                    componentInstance: {
                        event: of({ reason: 'done' }),
                        loading: signal(''),
                    },
                    afterClosed: () => NEVER,
                    close: vi.fn(),
                })) as never,
            }),
            MockProvider(OrganisationService, {
                initialised: signal(true).asReadonly(),
                organisation: { id: 'org-1' } as never,
            }),
        ],
        imports: [
            FormsModule,
            MockModule(MatAutocompleteModule),
            MockModule(MatCheckboxModule),
            MockModule(MatFormFieldModule),
            MockModule(MatInputModule),
            MockModule(MatProgressSpinnerModule),
            MockModule(MatSelectModule),
        ],
    });

    /** Open the flow with the driver bindings set */
    function open(query: Record<string, string> = {}) {
        spectator = createComponent({
            props: { apps: ['booking-panel', 'control'] },
            queryParams: query,
        });
        spectator.detectChanges();
        listeners['connected']?.(true);
        listeners['devices']?.(DEVICES);
        spectator.detectChanges();
    }

    beforeEach(() => {
        vi.clearAllMocks();
        listeners = {};
        execute = vi.fn(() => Promise.resolve('cmd-1'));
        vi.mocked(client.authority).mockReturnValue({
            config: { remote_setup: { system_id: 'sys-rs' } },
        } as never);
        vi.mocked(client.getModule).mockReturnValue({
            execute,
            variable: (name: string) => ({
                bindThenSubscribe: (next: (value: unknown) => void) => {
                    listeners[name] = next;
                    return () => delete listeners[name];
                },
            }),
        } as never);
        markInitialisationComplete();
    });

    it('should list the devices of its apps, last seen first', () => {
        open();
        const items = spectator.queryAll('button[device]');
        expect(items.map((el) => el.textContent)).toEqual([
            expect.stringContaining('DEV-2'),
            expect.stringContaining('DEV-1'),
        ]);
    });

    it('should say when the driver is not connected', () => {
        open();
        listeners['connected'](false);
        spectator.detectChanges();
        expect('[unavailable]').toExist();
    });

    it('should say when the device is not known', () => {
        open({ device: 'DEV-404' });
        expect('[missing]').toExist();
    });

    it('should find a typed device ID in any case', () => {
        open({ device: 'dev-1' });
        expect('[missing]').not.toExist();
        expect('button[apply]').toExist();
    });

    it('should not set up a device of another app', () => {
        open({ device: 'DEV-3' });
        expect('[other-app]').toExist();
        expect('button[apply]').not.toExist();
    });

    it('should send the system to the device and show when it is applied', async () => {
        open({ device: 'DEV-1' });
        spectator.component.system_id.set('sys-9');
        spectator.component.event_view.set(true);
        spectator.detectChanges();
        spectator.click('button[apply]');
        await vi.waitFor(() =>
            expect(execute).toHaveBeenCalledWith('configure', [
                'DEV-1',
                { system_id: 'sys-9', event_view: true },
            ]),
        );

        listeners['device_DEV-1']({
            id: 'cmd-1',
            config: { system_id: 'sys-9' },
        });
        spectator.detectChanges();
        expect('[pending]').toExist();

        listeners['device_DEV-1'](null);
        listeners['devices']({
            ...DEVICES,
            'DEV-1': {
                ...DEVICES['DEV-1'],
                config: { system_id: 'sys-9', event_view: true },
                last_command: 'cmd-1',
            },
        });
        spectator.detectChanges();
        expect('[pending]').not.toExist();
        expect('[done]').toExist();
    });

    it('should clear the device after the user confirms', async () => {
        open({ device: 'DEV-2' });
        listeners['clear_list'](['DEV-1']);
        spectator.click('button[clear]');
        await vi.waitFor(() =>
            expect(execute).toHaveBeenCalledWith('clear', ['DEV-2']),
        );
        spectator.detectChanges();
        expect('[done]').not.toExist();

        listeners['clear_list'](['DEV-1', 'DEV-2']);
        spectator.detectChanges();
        expect('[pending]').toExist();

        listeners['clear_list'](['DEV-1']);
        spectator.detectChanges();
        expect('[pending]').not.toExist();
        expect('[done]').toExist();
    });

    it('should clear the devices of an app that show a system', async () => {
        open();
        spectator.component.clear_app.set('control');
        spectator.component.clear_system_id.set('sys-1');
        spectator.detectChanges();
        spectator.click('form[clear-system] button[type="submit"]');
        await vi.waitFor(() =>
            expect(execute).toHaveBeenCalledWith('clear_system', [
                'control',
                'sys-1',
            ]),
        );
    });

    it('should set up a device that the driver does not know', async () => {
        open({ device: 'dev-00000000abcd' });
        expect('[missing]').toExist();
        spectator.component.missing_app.set('control');
        spectator.component.system_id.set('sys-9');
        spectator.detectChanges();
        spectator.click('button[apply]');
        await vi.waitFor(() =>
            expect(execute).toHaveBeenCalledWith('configure', [
                'DEV-00000000ABCD',
                { system_id: 'sys-9' },
            ]),
        );

        listeners['devices']({
            ...DEVICES,
            'DEV-00000000ABCD': {
                id: 'DEV-00000000ABCD',
                app: 'control',
                config: { system_id: 'sys-9' },
                last_seen: 4,
                last_command: 'cmd-1',
            },
        });
        spectator.detectChanges();
        expect('[missing]').not.toExist();
        expect('[done]').toExist();
    });

    it('should clear a device that the driver does not know', async () => {
        open({ device: 'DEV-SET-UP' });
        spectator.click('button[clear]');
        await vi.waitFor(() =>
            expect(execute).toHaveBeenCalledWith('clear', ['DEV-SET-UP']),
        );
    });
});
