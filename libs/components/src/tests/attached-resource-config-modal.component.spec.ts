import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent, MockModule, MockProvider } from 'ng-mocks';
import { AttachedResourceConfigModalComponent } from '../lib/attached-resource-config-modal.component';
import { IconComponent } from '../lib/icon.component';

describe('AttachedResourceConfigModalComponent', () => {
    let spectator: Spectator<AttachedResourceConfigModalComponent>;
    const createComponent = createComponentFactory({
        component: AttachedResourceConfigModalComponent,
        declarations: [MockComponent(IconComponent)],
        providers: [
            MockProvider(MAT_DIALOG_DATA, {
                config: [],
                catergories: {},
            }),
        ],
        imports: [
            MockModule(MatSelectModule),
            MockModule(MatFormFieldModule),
            MockModule(MatInputModule),
            MockModule(FormsModule),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    //TODO: add test to check adding new rulesets and rules
});
