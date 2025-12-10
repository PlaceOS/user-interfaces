import { computed, Injectable, signal } from '@angular/core';
import { log } from './general';

export interface PushNotificationOptions extends NotificationOptions {
    /** Whether notification requires user interaction to dismiss */
    requireInteraction?: boolean;
}

@Injectable({
    providedIn: 'root',
})
export class PushNotificationService {
    /** Whether browser supports notifications */
    public readonly supported = signal('Notification' in window);

    /** Current permission status */
    public readonly permission = signal<NotificationPermission>(
        this.supported() ? Notification.permission : 'denied',
    );

    /** Whether notifications are enabled (permission granted) */
    public readonly enabled = computed(() => this.permission() === 'granted');

    constructor() {
        log(
            'PushNotification',
            `Service initialized. Supported: ${this.supported()}, Permission: ${this.permission()}, Enabled: ${this.enabled()}`,
        );
    }

    /** Request notification permission from user */
    public async requestPermission(): Promise<boolean> {
        if (!this.supported()) {
            log(
                'PushNotification',
                'Notifications not supported in this browser',
            );
            return false;
        }

        try {
            const result = await Notification.requestPermission();
            this.permission.set(result);
            log(
                'PushNotification',
                `Permission ${result}, enabled: ${this.enabled()}`,
            );
            return result === 'granted';
        } catch (e) {
            log('PushNotification', 'Failed to request permission', e);
            return false;
        }
    }

    /**
     * Send a push notification
     * @param title Notification title
     * @param options Notification options (body, icon, tag, etc.)
     * @returns The notification instance or null if not sent
     */
    public notify(
        title: string,
        options: PushNotificationOptions = {},
    ): Notification | null {
        if (!this.enabled()) {
            log('PushNotification', 'Notification skipped - not enabled');
            return null;
        }

        try {
            const notification = new Notification(title, {
                ...options,
                tag: options.tag || `notification-${Date.now()}`,
            });

            notification.onclick = () => {
                window.focus();
                notification.close();
            };

            log('PushNotification', `Notification sent: ${title}`);
            return notification;
        } catch (e) {
            log('PushNotification', 'Failed to send notification', e);
            return null;
        }
    }
}
