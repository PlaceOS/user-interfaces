import { ComponentType } from '@angular/cdk/portal';
import { Component, inject, input, viewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenu, MatMenuModule } from '@angular/material/menu';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { AppSettingsZone } from './app-settings.utilities';

/** App Settings modals that a zone menu can open. */
export type AppSettingsKind =
    | 'workplace'
    | 'concierge'
    | 'booking-panel'
    | 'visitor-kiosk';

/** Lazy loaders, so each modal stays in its own chunk. */
const APP_SETTINGS_MODALS: Record<
    AppSettingsKind,
    () => Promise<ComponentType<unknown>>
> = {
    workplace: async () =>
        (await import('./workplace-settings-form-modal.component'))
            .WorkplaceSettingsFormModalComponent,
    concierge: async () =>
        (await import('./concierge-settings-form-modal.component'))
            .ConciergeSettingsFormModalComponent,
    'booking-panel': async () =>
        (await import('./booking-panel-settings-modal.component'))
            .BookingPanelSettingsModalComponent,
    'visitor-kiosk': async () =>
        (await import('./visitor-kiosk-settings-form-modal.component'))
            .VisitorKioskSettingsFormModalComponent,
};

/** Open the `kind` App Settings modal for `zone`. */
export async function openAppSettings(
    dialog: MatDialog,
    kind: AppSettingsKind,
    zone: AppSettingsZone,
): Promise<void> {
    const modal = await APP_SETTINGS_MODALS[kind]();
    dialog.open(modal, { data: { zone } });
}

/**
 * Menu with an item for each App Settings modal of `zone`. Open it with a
 * trigger bound to its `menu`:
 *
 * ```html
 * <button [matMenuTriggerFor]="settings_menu.menu()">...</button>
 * <app-settings-menu #settings_menu [zone]="zone" />
 * ```
 */
@Component({
    selector: 'app-settings-menu',
    template: `
        <mat-menu>
            @for (item of ITEMS; track item.kind) {
                <button mat-menu-item (click)="open(item.kind)">
                    <div class="flex items-center space-x-2">
                        <icon class="text-xl">{{ item.icon }}</icon>
                        <div>{{ item.label | translate }}</div>
                    </div>
                </button>
            }
        </mat-menu>
    `,
    imports: [MatMenuModule, IconComponent, TranslatePipe],
})
export class AppSettingsMenuComponent {
    private _dialog = inject(MatDialog);

    public readonly zone = input.required<AppSettingsZone>();
    public readonly menu = viewChild.required(MatMenu);

    public readonly ITEMS: readonly {
        kind: AppSettingsKind;
        icon: string;
        label: string;
    }[] = [
        {
            kind: 'workplace',
            icon: 'meeting_room',
            label: 'APP.CONCIERGE.APP_SETTINGS_WORKPLACE',
        },
        {
            kind: 'concierge',
            icon: 'support_agent',
            label: 'APP.CONCIERGE.APP_SETTINGS_CONCIERGE',
        },
        {
            kind: 'booking-panel',
            icon: 'event_busy',
            label: 'APP.CONCIERGE.APP_SETTINGS_BOOKING_PANEL',
        },
        {
            kind: 'visitor-kiosk',
            icon: 'qr_code',
            label: 'APP.CONCIERGE.APP_SETTINGS_VISITOR_KIOSK',
        },
    ];

    public open(kind: AppSettingsKind) {
        return openAppSettings(this._dialog, kind, this.zone());
    }
}
