import { PushNotificationService } from '../lib/push-notification.service';

describe('PushNotificationService', () => {
    /** Fake browser Notification API with the given starting permission. */
    function stubNotifications(
        permission: NotificationPermission,
        request: () => Promise<NotificationPermission> = async () => permission,
    ) {
        const created: { title: string; options: NotificationOptions }[] = [];
        class FakeNotification {
            static permission = permission;
            static requestPermission = vi.fn(request);
            onclick: (() => void) | null = null;
            close = vi.fn();
            constructor(title: string, options: NotificationOptions) {
                created.push({ title, options });
            }
        }
        vi.stubGlobal('Notification', FakeNotification);
        return { created, FakeNotification };
    }

    afterEach(() => vi.unstubAllGlobals());

    it('should not send notifications until permission is granted', async () => {
        const { created } = stubNotifications('default', async () => 'granted');
        const service = new PushNotificationService();

        expect(service.notify('Before')).toBeNull();
        expect(await service.requestPermission()).toBe(true);
        expect(service.enabled()).toBe(true);
        expect(service.notify('After', { tag: 'booking-1' })).not.toBeNull();
        expect(created).toEqual([
            { title: 'After', options: { tag: 'booking-1' } },
        ]);
    });

    it('should stay disabled when the user denies permission', async () => {
        stubNotifications('default', async () => 'denied');
        const service = new PushNotificationService();

        expect(await service.requestPermission()).toBe(false);
        expect(service.permission()).toBe('denied');
        expect(service.notify('Title')).toBeNull();
    });

    it('should report a failed permission request as not granted', async () => {
        stubNotifications('default', () =>
            Promise.reject(new Error('blocked')),
        );

        expect(await new PushNotificationService().requestPermission()).toBe(
            false,
        );
    });

    it('should focus the window and close the notification on click', () => {
        stubNotifications('granted');
        const focus = vi.spyOn(window, 'focus').mockImplementation(() => {});
        const notification = new PushNotificationService().notify('Title');

        notification.onclick(new Event('click'));

        expect(focus).toHaveBeenCalled();
        expect(notification.close).toHaveBeenCalled();
        focus.mockRestore();
    });
});
