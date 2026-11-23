import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { OrganisationService } from '@placeos/common';
import { mockData } from '@placeos/common/tests';
import * as ts_client from '@placeos/ts-client';
import { mockReply } from '@placeos/ts-client/compat';

import { RemoteDebugViewService } from '../lib/remote-debug-view.service';
import { startTestPlaceClient } from './test-place-client';

vi.mock('@placeos/ts-client', { spy: true });

describe('RemoteDebugViewService', () => {
    it('should not give ts-client a call while the websocket is down', async () => {
        const client = startTestPlaceClient();
        vi.mocked(ts_client.metadata.show).mockResolvedValue(
            mockReply({
                bindings: mockData(ts_client.MetadataInterface, {
                    name: 'bindings',
                    details: { remote_debug: { id: 'sys-debug' } },
                }),
            }),
        );
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
        expect(service.state()).toBe('ready');
        // ts-client would keep the call and send it after it connects again
        client.setStatus({ kind: 'waiting', attempt: 1, delay_ms: 1000 });

        await expect(
            service.call('send_command', ['DEV-1', 'reload']),
        ).rejects.toThrow('needs a connection');

        expect(service.state()).toBe('ready');
        expect(client.exec).not.toHaveBeenCalled();
        TestBed.resetTestingModule();
    });
});
