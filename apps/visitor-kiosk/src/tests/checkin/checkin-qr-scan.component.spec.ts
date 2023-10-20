import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { IconComponent } from '@placeos/components';
import { MockComponent, MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import { CheckinQRScanComponent } from '../../app/checkin/checkin-qr-scan.component';
import { CheckinStateService } from '../../app/checkin/checkin-state.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

describe('CheckinQRScanComponent', () => {
    let spectator: SpectatorRouting<CheckinQRScanComponent>;
    const createComponent = createRoutingFactory({
        component: CheckinQRScanComponent,
        declarations: [MockComponent(IconComponent)],
        providers: [
            MockProvider(CheckinStateService, {
                event: of({}),
                guest: of({}),
            } as any),
        ],
        imports: [
            MatFormFieldModule,
            MatInputModule,
            FormsModule,
            MatProgressSpinnerModule,
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it.todo('should check QR code');
    it.todo('should allow checking email');
    it.todo('should handle errors');
});
