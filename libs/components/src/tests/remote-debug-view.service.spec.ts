import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { OrganisationService } from '@placeos/common';
import * as ts_client from '@placeos/ts-client';

import { RemoteDebugViewService } from '../lib/remote-debug-view.service';

vi.mock('@placeos/ts-client', { spy: true });

describe('RemoteDebugViewService', () => {
    it('should not give ts-client a call while the websocket is down', async () => {
        const execute = vi.fn(async () => 'cmd-1');
        vi.mocked(ts_client.showMetadata).mockResolvedValue({
            details: { remote_debug: { id: 'sys-debug' } },
        } as never);
        vi.mocked(ts_client.getModule).mockReturnValue({
            execute,
            variable: () => ({ bindThenSubscribe: () => () => undefined }),
        } as never);
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: OrganisationService,
                    useValue: {
                        initialised: signal(false),
                        organisation: { id: 'org-1' },
                    },
                },
            ],
        });
        const service = TestBed.inject(RemoteDebugViewService);
        await service.load();
        // ts-client would keep the call and send it after it connects again
        vi.mocked(ts_client.is_connected).mockReturnValue(false);

        await expect(
            service.call('send_command', ['DEV-1', 'reload']),
        ).rejects.toThrow('needs a connection');

        expect(service.state()).toBe('ready');
        expect(execute).not.toHaveBeenCalled();
        TestBed.resetTestingModule();
    });
});
