import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { PanelViewDetailsComponent } from '../../app/new-panel/panel-view-details.component';
import { PanelStateService } from '../../app/panel-state.service';

describe('PanelViewDetailsComponent', () => {
    let spectator: Spectator<PanelViewDetailsComponent>;
    const space = signal(null);
    const createComponent = createComponentFactory({
        component: PanelViewDetailsComponent,
        providers: [
            {
                provide: PanelStateService,
                useValue: {
                    space,
                    current: signal(null),
                    settings: signal({}),
                    setting: jest.fn(),
                    system: 'test-system',
                },
            },
        ],
    });

    beforeEach(() => {
        space.set(null);
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should display system name', () => {
        space.set({ display_name: 'Test Room' });
        spectator.detectChanges();
        expect('[name]').toContainText('Test Room');
    });

    it('should display QR code when enabled', () => {
        const service = spectator.inject(PanelStateService);
        (service.setting as jest.Mock).mockReturnValue(true);
        spectator.detectChanges();
        expect(spectator.component.checkin).toBe(true);
    });

    it('should hide QR code when disabled', () => {
        const service = spectator.inject(PanelStateService);
        (service.setting as jest.Mock).mockReturnValue(false);
        spectator.detectChanges();
        expect(spectator.component.checkin).toBe(false);
    });
});
