import { Injectable, signal } from '@angular/core';
import {
    PushNotificationService as BasePushNotificationService,
    log,
    settingSignal,
} from '@placeos/common';

export type AlertSeverity = 'critical' | 'high' | 'medium' | 'low';

export interface AlertNotificationConfig {
    /** Enable push notifications for critical alerts */
    critical: boolean;
    /** Enable push notifications for high severity alerts */
    high: boolean;
    /** Enable push notifications for medium severity alerts */
    medium: boolean;
    /** Enable push notifications for low severity alerts */
    low: boolean;
}

const STORAGE_KEY = 'stagehand_push_notification_config';
const DEFAULT_CONFIG: AlertNotificationConfig = {
    critical: true,
    high: false,
    medium: false,
    low: false,
};

/**
 * Stagehand-specific push notification service that extends the base service
 * with alert severity configuration
 */
@Injectable({
    providedIn: 'root',
})
export class AlertNotificationService extends BasePushNotificationService {
    /** User's notification preferences per severity */
    public readonly config = signal<AlertNotificationConfig>(DEFAULT_CONFIG);

    /** Default config from settings (can be overridden by zone metadata) */
    private _default_config = settingSignal<Partial<AlertNotificationConfig>>(
        'push_notification_defaults',
        {},
    );

    constructor() {
        super();
        const zone_defaults = this._default_config();
        this.config.set({
            ...DEFAULT_CONFIG,
            ...zone_defaults,
            ...this._loadStoredConfig(),
        });
        log('PUSH', `Alert config:`, this.config());
    }

    /** Update notification config for a severity level */
    public setSeverityEnabled(severity: AlertSeverity, enabled: boolean): void {
        this.config.update((config) => {
            const updated = { ...config, [severity]: enabled };
            this._saveConfig(updated);
            return updated;
        });
    }

    /** Update the entire notification config */
    public setConfig(config: AlertNotificationConfig): void {
        this.config.set(config);
        this._saveConfig(config);
    }

    /** Check if notifications should be sent for a given severity */
    public shouldNotify(severity: AlertSeverity): boolean {
        const is_enabled = this.enabled();
        const config = this.config();
        const severity_enabled = config[severity] ?? false;
        log(
            'PUSH',
            `shouldNotify check - enabled: ${is_enabled}, severity: ${severity}, severity_enabled: ${severity_enabled}`,
        );
        if (!is_enabled) return false;
        return severity_enabled;
    }

    /**
     * Send notification for an alert object
     */
    public notifyAlert(alert: {
        subject: string;
        body: string;
        severity: AlertSeverity;
        location?: string;
        device?: string;
    }): Notification | null {
        log('PUSH', `notifyAlert called with:`, alert);

        if (!this.shouldNotify(alert.severity)) {
            return null;
        }

        const title = `[${alert.severity.toUpperCase()}] ${alert.subject}`;
        let body = alert.body || '';
        if (alert.location) {
            body += `\nLocation: ${alert.location}`;
        }
        if (alert.device) {
            body += `\nDevice: ${alert.device}`;
        }

        return this.notify(title, {
            body,
            icon: this._getIconForSeverity(alert.severity),
            tag: `stagehand-alert-${alert.severity}-${Date.now()}`,
            requireInteraction: alert.severity === 'critical',
        });
    }

    /** Get icon path based on severity */
    private _getIconForSeverity(_severity: AlertSeverity): string {
        return '/assets/icons/icon-192x192.png';
    }

    /** Load preferences that the user has explicitly saved. */
    private _loadStoredConfig(): Partial<AlertNotificationConfig> {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored) {
                const parsed: unknown = JSON.parse(stored);
                if (typeof parsed !== 'object' || parsed === null) return {};
                const values = parsed as Record<string, unknown>;
                return {
                    ...(typeof values.critical === 'boolean'
                        ? { critical: values.critical }
                        : {}),
                    ...(typeof values.high === 'boolean'
                        ? { high: values.high }
                        : {}),
                    ...(typeof values.medium === 'boolean'
                        ? { medium: values.medium }
                        : {}),
                    ...(typeof values.low === 'boolean'
                        ? { low: values.low }
                        : {}),
                };
            }
        } catch (e) {
            log('PUSH', 'Failed to load config from storage', e);
        }
        return {};
    }

    /** Save config to localStorage */
    private _saveConfig(config: AlertNotificationConfig): void {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
        } catch (e) {
            log('PUSH', 'Failed to save config to storage', e);
        }
    }
}
