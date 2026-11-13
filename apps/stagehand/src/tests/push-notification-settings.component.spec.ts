import { signal } from '@angular/core';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { IconComponent } from '@placeos/components';
import { MockComponent } from 'ng-mocks';

import { PushNotificationSettingsComponent } from '../app/push-notification-settings.component';
import { AlertNotificationService } from '../app/push-notification.service';

describe('PushNotificationSettingsComponent', () => {
    let spectator: Spectator<PushNotificationSettingsComponent>;
    let push: any;

    const create_component = createComponentFactory({
        component: PushNotificationSettingsComponent,
        imports: [NoopAnimationsModule],
        declarations: [MockComponent(IconComponent)],
        detectChanges: false,
    });

    const toggles = () =>
        spectator.debugElement.queryAll(By.css('mat-slide-toggle'));

    beforeEach(() => {
        push = {
            supported: signal(true),
            permission: signal<NotificationPermission>('granted'),
            enabled: signal(true),
            config: signal({
                critical: true,
                high: false,
                medium: false,
                low: false,
            }),
            requestPermission: vi.fn().mockResolvedValue(true),
            setSeverityEnabled: vi.fn(),
        };
        spectator = create_component({
            providers: [
                { provide: AlertNotificationService, useValue: push },
            ],
        });
    });

    it('should warn when push notifications are unsupported', () => {
        push.supported.set(false);
        spectator.detectChanges();
        expect(spectator.query('main')).toHaveText(
            'Push notifications are not supported',
        );
    });

    it('should warn when notifications have been blocked', () => {
        push.enabled.set(false);
        push.permission.set('denied');
        spectator.detectChanges();
        expect(spectator.query('main')).toHaveText(
            'Notifications have been blocked',
        );
    });

    it('should offer an enable button while permission is not yet granted', () => {
        push.enabled.set(false);
        push.permission.set('default');
        spectator.detectChanges();

        const button = spectator.query('main button');
        expect(button).toHaveText('Enable Notifications');
        spectator.click(button);
        expect(push.requestPermission).toHaveBeenCalledTimes(1);
    });

    it('should show a toggle per severity, switched on for the enabled ones', () => {
        push.config.set({ critical: true, high: false, medium: true, low: false });
        spectator.detectChanges();
        expect(toggles().map((t) => t.componentInstance.checked)).toEqual([
            true,
            false,
            true,
            false,
        ]);
    });

    it('should save the severity a toggle is switched for', () => {
        spectator.detectChanges();
        // critical, high, medium, low
        toggles()[1].triggerEventHandler('change', { checked: true });
        expect(push.setSeverityEnabled).toHaveBeenCalledWith('high', true);
    });
});
