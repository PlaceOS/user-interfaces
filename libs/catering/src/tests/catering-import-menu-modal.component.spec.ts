import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { IconComponent } from '@placeos/components';
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
        const spy = jest.spyOn(spectator.component, 'downloadTemplate');
        spectator.click('main button');
        expect(spectator.component.downloadTemplate).toHaveBeenCalled();
    });
});
