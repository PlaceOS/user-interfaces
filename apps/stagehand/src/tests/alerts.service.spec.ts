import {
    createServiceFactory,
    SpectatorService,
} from '@ngneat/spectator/vitest';
import { OrganisationService } from '@placeos/common';
import { token } from '@placeos/ts-client';
import { MockProvider } from 'ng-mocks';

import { AlertsService } from '../app/alerts.service';

const { mock_mqtt_handlers, mock_mqtt_client, mock_mqtt_connect } = vi.hoisted(
    () => {
        const handlers: Record<string, (...args: any[]) => void> = {};
        const client: any = {
            on: vi.fn((event: string, cb: (...args: any[]) => void) => {
                handlers[event] = cb;
                return client;
            }),
            subscribe: vi.fn(),
            unsubscribe: vi.fn(),
            end: vi.fn(),
        };
        const connect = vi.fn(() => client);
        return {
            mock_mqtt_handlers: handlers,
            mock_mqtt_client: client,
            mock_mqtt_connect: connect,
        };
    },
);

vi.mock('mqtt', () => ({
    default: { connect: mock_mqtt_connect },
}));

vi.mock('@placeos/ts-client', { spy: true });

/** Flush the chained awaits inside AlertsService.init() */
const flush = async () => {
    for (let i = 0; i < 8; i++) await Promise.resolve();
};

/** Build a broker topic string as emitted by PlaceOS state channels */
const state_topic = (system: string, module: string, index: string) =>
    `placeos/org-1/state/bld-1/lvl-1/area-1/b/${system}/drv-1/${module}/${index}/connected`;

const message = (value: any, timestamp = 111) =>
    Buffer.from(JSON.stringify({ value, timestamp }));

describe('AlertsService', () => {
    let spectator: SpectatorService<AlertsService>;

    const create_service = createServiceFactory({
        service: AlertsService,
        providers: [
            MockProvider(OrganisationService, {
                waitUntilInitialised: () => Promise.resolve(),
                organisation: { id: 'org-1' } as any,
            }),
        ],
    });

    beforeEach(() => {
        vi.mocked(token).mockReturnValue('jwt-token');
        for (const key of Object.keys(mock_mqtt_handlers))
            delete mock_mqtt_handlers[key];
        mock_mqtt_connect.mockClear();
        mock_mqtt_client.subscribe.mockClear();
        mock_mqtt_client.on.mockClear();
        spectator = create_service();
    });

    it('should create the service and connect to the broker after org init', async () => {
        expect(spectator.service).toBeTruthy();
        await flush();
        expect(mock_mqtt_connect).toHaveBeenCalledTimes(1);
        const [, options] = mock_mqtt_connect.mock.calls[0] as any;
        expect(options).toEqual(
            expect.objectContaining({
                username: 'jwt-token',
                password: 'jwt-token',
            }),
        );
    });

    it('should subscribe to the organisation state topic on connect', async () => {
        await flush();
        mock_mqtt_handlers['connect']();
        expect(mock_mqtt_client.subscribe).toHaveBeenCalledWith(
            'placeos/org-1/state/+/+/+/+/+/+/+/+/connected',
        );
    });

    it('should add an alert and mark the module disconnected on a disconnect message', async () => {
        await flush();
        mock_mqtt_handlers['message'](
            state_topic('sys-1', 'Display', '1'),
            message(false),
        );

        const alerts = spectator.service.alerts();
        expect(alerts).toHaveLength(1);
        expect(alerts[0]).toEqual(
            expect.objectContaining({
                id: 'sys-1+Display_1',
                severity: 'high',
                type: 'control',
                subject: 'Disconnected',
                location: 'sys-1',
                status: 'open',
            }),
        );
        expect(alerts[0].body).toContain('Display_1');

        const state = spectator.service.system_state() as any;
        expect(state['sys-1'].disconnected).toContain('Display_1');
        expect(state['sys-1'].connected).not.toContain('Display_1');
    });

    it('should clear a prior alert when the module reconnects', async () => {
        await flush();
        mock_mqtt_handlers['message'](
            state_topic('sys-1', 'Display', '1'),
            message(false),
        );
        expect(spectator.service.alerts()).toHaveLength(1);

        mock_mqtt_handlers['message'](
            state_topic('sys-1', 'Display', '1'),
            message(true),
        );

        expect(spectator.service.alerts()).toHaveLength(0);
        const state = spectator.service.system_state() as any;
        expect(state['sys-1'].connected).toContain('Display_1');
        expect(state['sys-1'].disconnected).not.toContain('Display_1');
    });

    it('should track disconnects for independent modules separately', async () => {
        await flush();
        mock_mqtt_handlers['message'](
            state_topic('sys-1', 'Display', '1'),
            message(false),
        );
        mock_mqtt_handlers['message'](
            state_topic('sys-1', 'Audio', '2'),
            message(false),
        );

        const ids = spectator.service.alerts().map((a) => a.id);
        expect(ids).toEqual(
            expect.arrayContaining(['sys-1+Display_1', 'sys-1+Audio_2']),
        );
        const state = spectator.service.system_state() as any;
        expect(state['sys-1'].disconnected).toEqual(
            expect.arrayContaining(['Display_1', 'Audio_2']),
        );
    });
});
