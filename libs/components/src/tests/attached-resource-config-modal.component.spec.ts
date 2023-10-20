import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import {
    AttachedResourceConfigModalComponent,
    IconComponent,
} from '@placeos/components';
import { MockComponent, MockModule, MockProvider } from 'ng-mocks';

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
