import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { IconComponent } from '@placeos/components';
import { CounterComponent } from '@placeos/form-fields';
import { MockComponent } from 'ng-mocks';

import { CateringItemModalComponent } from '../lib/catering-item-modal.component';
import { CateringItem } from '../lib/catering-item.class';

describe('CateringItemModalComponent', () => {
    let spectator: Spectator<CateringItemModalComponent>;
    const createComponent = createComponentFactory({
        component: CateringItemModalComponent,
        declarations: [
            MockComponent(IconComponent),
            MockComponent(CounterComponent),
        ],
        providers: [
            {
                provide: MAT_DIALOG_DATA,
                useValue: {
                    item: new CateringItem(),
                    catergories: {},
                },
            },
        ],
        imports: [
            MatAutocompleteModule,
            MatChipsModule,
            MatFormFieldModule,
            MatInputModule,
            MatCheckboxModule,
            ReactiveFormsModule,
            MatProgressSpinnerModule,
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should submit updated item option details', (done) => {
        spectator.component.event.subscribe((e) => {
            expect(e.reason).toBe('done');
            expect(e.metadata.item).toBeTruthy();
            expect(e.metadata.item.name).toBe('Test');
            done();
        });
        spectator.typeInElement('Test', 'input[name="name"]');
        spectator.detectChanges();
        spectator.click('footer button');
    });
});
