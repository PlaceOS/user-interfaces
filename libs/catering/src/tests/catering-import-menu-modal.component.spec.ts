import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { MockComponent } from 'ng-mocks';

import { CateringImportMenuModalComponent } from '../lib/catering-import-menu-modal.component';

describe('CateringImportMenuModalComponent', () => {
    let spectator: Spectator<CateringImportMenuModalComponent>;
    const createComponent = createComponentFactory({
        component: CateringImportMenuModalComponent,
        declarations: [MockComponent(IconComponent)],
        imports: [MatProgressSpinnerModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should allow downloading the template', () => {
        // Stub the implementation so the real file download (an anchor click
        // that jsdom tries to navigate) does not fire; we only assert wiring.
        const spy = vi
            .spyOn(spectator.component, 'downloadTemplate')
            .mockImplementation(() => undefined);
        spectator.click('main button');
        expect(spy).toHaveBeenCalled();
    });
});
