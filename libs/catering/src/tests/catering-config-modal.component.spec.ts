import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { IconComponent } from '@placeos/components';
import { MockComponent } from 'ng-mocks';

import { CateringConfigModalComponent } from '../lib/catering-config-modal.component';

describe('CateringConfigModalComponent', () => {
    let spectator: Spectator<CateringConfigModalComponent>;
    const createComponent = createComponentFactory({
        component: CateringConfigModalComponent,
        declarations: [MockComponent(IconComponent)],
        providers: [
            {
                provide: MAT_DIALOG_DATA,
                useValue: {
                    config: [],
                    catergories: {},
                },
            },
        ],
        imports: [
            MatSelectModule,
            MatFormFieldModule,
            MatInputModule,
            ReactiveFormsModule,
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should match snapshot', () => {
        expect(spectator.element).toMatchSnapshot();
    });

    //TODO: add test to check adding new rulesets and rules
});
