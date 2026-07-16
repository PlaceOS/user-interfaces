import { signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/vitest';
import { IconComponent } from '@placeos/components';
import { MockComponent, MockProvider } from 'ng-mocks';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SettingsService } from '@placeos/common';
import { CheckinQRScanComponent } from '../../app/checkin/checkin-qr-scan.component';
import { CheckinStateService } from '../../app/checkin/checkin-state.service';

describe('CheckinQRScanComponent', () => {
    let spectator: SpectatorRouting<CheckinQRScanComponent>;
    const event = signal<any>({});
    const state = {
        event,
        guest: signal({}),
        loadGuestAndEvent: vi.fn(async () => null),
        setError: vi.fn(),
        metadata: '',
    };
    const createComponent = createRoutingFactory({
        component: CheckinQRScanComponent,
        data: { flow: 'checkin' },
        declarations: [MockComponent(IconComponent)],
        providers: [
            MockProvider(CheckinStateService, state as any),
            MockProvider(SettingsService, { get: vi.fn() }),
        ],
        imports: [
            MatFormFieldModule,
            MatInputModule,
            FormsModule,
            MatProgressSpinnerModule,
        ],
    });

    beforeEach(() => {
        event.set({});
        state.loadGuestAndEvent.mockClear();
        state.setError.mockClear();
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it.todo('should check QR code');
    it('keeps an already checked-in visitor out of the check-in flow', async () => {
        event.set({ checked_in_at: Date.now() });

        await spectator.component.checkEmail('visitor@example.com');

        expect(state.setError).toHaveBeenCalledWith(
            'You are already checked in.',
        );
        expect(spectator.inject(Router).navigate).toHaveBeenCalledWith([
            '/checkin',
            'error',
        ]);
    });

    it('sends a checked-in visitor to checkout confirmation', async () => {
        (spectator.component as any).flow = 'checkout';
        event.set({ checked_in_at: Date.now() });

        await spectator.component.checkEmail('visitor@example.com');

        expect(spectator.inject(Router).navigate).toHaveBeenCalledWith([
            '/checkout',
            'confirm',
        ]);
    });

    it('keeps a visitor who has not checked in out of checkout', async () => {
        (spectator.component as any).flow = 'checkout';
        event.set({});

        await spectator.component.checkEmail('visitor@example.com');

        expect(state.setError).toHaveBeenCalledWith(
            'You have not checked in yet.',
        );
        expect(spectator.inject(Router).navigate).toHaveBeenCalledWith([
            '/checkout',
            'error',
        ]);
    });
});
