import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { IconComponent } from '@placeos/components';
import {
    AlertNotificationService,
    AlertSeverity,
} from './push-notification.service';

interface SeverityOption {
    key: AlertSeverity;
    label: string;
    description: string;
    icon: string;
    color_class: string;
}

@Component({
    selector: 'placeos-push-notification-settings',
    template: `
        <div class="w-md max-w-full">
            <header
                class="bg-base-200 sticky top-0 z-10 mx-2 mt-2 h-14 w-[calc(100%-1rem)] rounded-sm border-none p-2"
            >
                <h2 class="px-2 text-xl font-medium">Push Notifications</h2>
                <button icon matRipple mat-dialog-close class="rounded-sm">
                    <icon>close</icon>
                </button>
            </header>

            <main class="p-4">
                @if (!push.supported()) {
                    <div
                        class="bg-warning-light text-warning flex items-center space-x-2 rounded-sm p-3"
                    >
                        <icon>warning</icon>
                        <span class="text-sm"
                            >Push notifications are not supported in this
                            browser</span
                        >
                    </div>
                } @else if (push.permission() === 'denied') {
                    <div
                        class="bg-error-light text-error flex items-center space-x-2 rounded-sm p-3"
                    >
                        <icon>block</icon>
                        <span class="text-sm"
                            >Notifications have been blocked. Please enable them
                            in your browser settings.</span
                        >
                    </div>
                } @else if (!push.enabled()) {
                    <div class="flex flex-col items-center space-y-4 py-4">
                        <icon class="text-base-400 text-6xl"
                            >notifications_off</icon
                        >
                        <p class="text-center text-sm opacity-60">
                            Enable push notifications to receive alerts even
                            when the app is in the background.
                        </p>
                        <button
                            btn
                            matRipple
                            class="w-full"
                            (click)="requestPermission()"
                        >
                            <icon class="mr-2">notifications_active</icon>
                            Enable Notifications
                        </button>
                    </div>
                } @else {
                    <p class="mb-4 text-sm opacity-60">
                        Choose which alert severity levels should trigger push
                        notifications.
                    </p>

                    <div class="space-y-3">
                        @for (option of severity_options; track option.key) {
                            <div
                                class="border-base-300 flex items-center justify-between rounded-sm border p-3"
                            >
                                <div class="flex items-center space-x-3">
                                    <icon
                                        [class]="
                                            'text-3xl ' + option.color_class
                                        "
                                        >{{ option.icon }}</icon
                                    >
                                    <div>
                                        <div class="font-medium">
                                            {{ option.label }}
                                        </div>
                                        <div class="text-xs opacity-50">
                                            {{ option.description }}
                                        </div>
                                    </div>
                                </div>
                                <mat-slide-toggle
                                    [checked]="push.config()[option.key]"
                                    (change)="
                                        toggleSeverity(
                                            option.key,
                                            $event.checked
                                        )
                                    "
                                ></mat-slide-toggle>
                            </div>
                        }
                    </div>

                    <div class="bg-info-light mt-4 rounded-sm p-3">
                        <div class="flex items-center space-x-2">
                            <icon class="text-info text-2xl">info</icon>
                            <span class="text-xs opacity-60"
                                >Notifications will be sent when new alerts
                                matching these severities are detected.</span
                            >
                        </div>
                    </div>
                }
            </main>

            <footer class="border-base-300 flex justify-end border-t p-2">
                <button btn matRipple class="inverse w-40" mat-dialog-close>
                    Close
                </button>
            </footer>
        </div>
    `,
    imports: [
        MatDialogModule,
        MatRippleModule,
        MatSlideToggleModule,
        IconComponent,
        FormsModule,
    ],
})
export class PushNotificationSettingsComponent {
    public readonly push = inject(AlertNotificationService);

    public readonly severity_options: SeverityOption[] = [
        {
            key: 'critical',
            label: 'Critical',
            description: 'Immediate attention required',
            icon: 'dangerous',
            color_class: 'text-error',
        },
        {
            key: 'high',
            label: 'High',
            description: 'Important issues that may need attention',
            icon: 'warning',
            color_class: 'text-warning',
        },
        {
            key: 'medium',
            label: 'Medium',
            description: 'Informational alerts',
            icon: 'error',
            color_class: 'text-info',
        },
        {
            key: 'low',
            label: 'Low',
            description: 'Low priority notifications',
            icon: 'info',
            color_class: 'text-base-400',
        },
    ];

    public async requestPermission(): Promise<void> {
        await this.push.requestPermission();
    }

    public toggleSeverity(severity: AlertSeverity, enabled: boolean): void {
        this.push.setSeverityEnabled(severity, enabled);
    }
}
