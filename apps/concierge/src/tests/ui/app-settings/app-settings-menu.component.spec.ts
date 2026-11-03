import { MatDialog } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockProvider } from 'ng-mocks';

import {
    AppSettingsMenuComponent,
    openAppSettings,
} from '../../../app/ui/app-settings/app-settings-menu.component';
import { BookingPanelSettingsModalComponent } from '../../../app/ui/app-settings/booking-panel-settings-modal.component';
import { ConciergeSettingsFormModalComponent } from '../../../app/ui/app-settings/concierge-settings-form-modal.component';
import { VisitorKioskSettingsFormModalComponent } from '../../../app/ui/app-settings/visitor-kiosk-settings-form-modal.component';
import { WorkplaceSettingsFormModalComponent } from '../../../app/ui/app-settings/workplace-settings-form-modal.component';

describe('openAppSettings', () => {
    it.each([
        ['workplace', WorkplaceSettingsFormModalComponent],
        ['concierge', ConciergeSettingsFormModalComponent],
        ['booking-panel', BookingPanelSettingsModalComponent],
        ['visitor-kiosk', VisitorKioskSettingsFormModalComponent],
    ] as const)(
        'should open the %s modal for the zone',
        async (kind, modal) => {
            const dialog = { open: vi.fn() } as unknown as MatDialog;
            const zone = { id: 'zone-1', name: 'Zone' };

            await openAppSettings(dialog, kind, zone);

            expect(dialog.open).toHaveBeenCalledWith(modal, { data: { zone } });
        },
    );
});

describe('AppSettingsMenuComponent', () => {
    let spectator: Spectator<AppSettingsMenuComponent>;
    const zone = { id: 'zone-1', name: 'Zone' };

    const createComponent = createComponentFactory({
        component: AppSettingsMenuComponent,
        providers: [MockProvider(MatDialog, { open: vi.fn() })],
        detectChanges: false,
    });

    beforeEach(() => {
        spectator = createComponent();
        spectator.setInput('zone', zone);
        spectator.detectChanges();
    });

    it('should open the chosen modal for its zone', async () => {
        expect(spectator.component.menu()).toBeTruthy();

        await spectator.component.open('concierge');

        expect(spectator.inject(MatDialog).open).toHaveBeenCalledWith(
            ConciergeSettingsFormModalComponent,
            { data: { zone } },
        );
    });
});
