import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { IconComponent } from '@placeos/components';
import { MockComponent } from 'ng-mocks';
import { of } from 'rxjs';

import { CheckinQRScanComponent } from '../../app/checkin/checkin-qr-scan.component';
import { CheckinStateService } from '../../app/checkin/checkin-state.service';

describe('CheckinQRScanComponent', () => {
    let spectator: SpectatorRouting<CheckinQRScanComponent>;
    const createComponent = createRoutingFactory({
        component: CheckinQRScanComponent,
        declarations: [MockComponent(IconComponent)],
        providers: [
            {
                provide: CheckinStateService,
                useValue: { event: of({}), guest: of({}) },
            },
        ],
        imports: [MatFormFieldModule, MatInputModule, FormsModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it.todo('should check QR code');
    it.todo('should allow checking email');
    it.todo('should handle errors');
});
