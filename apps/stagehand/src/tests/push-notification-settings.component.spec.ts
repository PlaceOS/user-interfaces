import { signal } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
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
            requestPermission: jest.fn().mockResolvedValue(true),
            setSeverityEnabled: jest.fn(),
        };
        spectator = create_component({
            providers: [
                { provide: AlertNotificationService, useValue: push },
            ],
        });
    });

    it('should create the component', () => {
        expect(spectator.component).toBeTruthy();
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

    it('should render a toggle for every severity when enabled', () => {
        spectator.detectChanges();
        const toggles = spectator.queryAll('mat-slide-toggle');
        expect(toggles.length).toBe(4);
    });

    it('should update the severity when a toggle is switched', () => {
        spectator.detectChanges();
        spectator.component.toggleSeverity('high', true);
        expect(push.setSeverityEnabled).toHaveBeenCalledWith('high', true);
    });

    it('should request permission when asked', async () => {
        await spectator.component.requestPermission();
        expect(push.requestPermission).toHaveBeenCalledTimes(1);
    });
});
