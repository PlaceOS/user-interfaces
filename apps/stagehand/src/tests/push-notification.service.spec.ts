import {
    createServiceFactory,
    SpectatorService,
} from '@ngneat/spectator/vitest';

import { AlertNotificationService } from '../app/push-notification.service';

const STORAGE_KEY = 'stagehand_push_notification_config';

describe('AlertNotificationService', () => {
    let spectator: SpectatorService<AlertNotificationService>;
    let service: AlertNotificationService;

    const create_service = createServiceFactory(AlertNotificationService);

    function build() {
        spectator = create_service();
        service = spectator.service;
    }

    beforeEach(() => {
        localStorage.clear();
    });

    it('should default to critical-only when no config is stored', () => {
        build();
        expect(service.config()).toEqual({
            critical: true,
            high: false,
            medium: false,
            low: false,
        });
    });

    it('should hydrate config from localStorage merged over defaults', () => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ high: true }));
        build();
        expect(service.config()).toEqual({
            critical: true,
            high: true,
            medium: false,
            low: false,
        });
    });

    it('should update a single severity and persist it', () => {
        build();
        service.setSeverityEnabled('high', true);

        expect(service.config().high).toBe(true);
        expect(JSON.parse(localStorage.getItem(STORAGE_KEY)).high).toBe(true);
    });

    it('should replace the whole config via setConfig and persist it', () => {
        build();
        const next = {
            critical: false,
            high: true,
            medium: true,
            low: true,
        };
        service.setConfig(next);

        expect(service.config()).toEqual(next);
        expect(JSON.parse(localStorage.getItem(STORAGE_KEY))).toEqual(next);
    });

    it('should never notify while notifications are disabled', () => {
        build();
        // permission is not granted -> enabled() is false
        expect(service.enabled()).toBe(false);
        expect(service.shouldNotify('critical')).toBe(false);
    });

    it('should notify only for enabled severities once enabled', () => {
        build();
        service.permission.set('granted');
        service.setConfig({
            critical: true,
            high: false,
            medium: false,
            low: false,
        });

        expect(service.shouldNotify('critical')).toBe(true);
        expect(service.shouldNotify('high')).toBe(false);
    });

    it('should not build a notification for a suppressed severity', () => {
        build();
        service.permission.set('granted');
        const notify = vi
            .spyOn(service, 'notify')
            .mockReturnValue({} as any);
        service.setConfig({
            critical: false,
            high: false,
            medium: false,
            low: false,
        });

        const result = service.notifyAlert({
            subject: 'Projector down',
            body: 'No signal',
            severity: 'critical',
        });

        expect(result).toBeNull();
        expect(notify).not.toHaveBeenCalled();
    });

    it('should format the alert title and append location/device', () => {
        build();
        service.permission.set('granted');
        const notify = vi
            .spyOn(service, 'notify')
            .mockReturnValue({} as any);

        service.notifyAlert({
            subject: 'Projector down',
            body: 'No signal',
            severity: 'critical',
            location: 'sys-1',
            device: 'Display_1',
        });

        expect(notify).toHaveBeenCalledTimes(1);
        const [title, options] = notify.mock.calls[0];
        expect(title).toBe('[CRITICAL] Projector down');
        expect(options.body).toContain('Location: sys-1');
        expect(options.body).toContain('Device: Display_1');
        // critical alerts require interaction
        expect(options.requireInteraction).toBe(true);
    });

    it('should not require interaction for non-critical alerts', () => {
        build();
        service.permission.set('granted');
        const notify = vi
            .spyOn(service, 'notify')
            .mockReturnValue({} as any);
        service.setConfig({
            critical: false,
            high: true,
            medium: false,
            low: false,
        });

        service.notifyAlert({
            subject: 'Warm start',
            body: 'device rebooting',
            severity: 'high',
        });

        const [title, options] = notify.mock.calls[0];
        expect(title).toBe('[HIGH] Warm start');
        expect(options.requireInteraction).toBe(false);
    });
});
