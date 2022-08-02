import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { IconComponent } from '@placeos/components';
import { MockComponent } from 'ng-mocks';
import { CateringItem } from '../lib/catering-item.class';

import { CateringItemOptionModalComponent } from '../lib/catering-option-modal.component';

describe('CateringItemOptionModalComponent', () => {
    let spectator: Spectator<CateringItemOptionModalComponent>;
    const createComponent = createComponentFactory({
        component: CateringItemOptionModalComponent,
        declarations: [MockComponent(IconComponent)],
        providers: [
            {
                provide: MAT_DIALOG_DATA,
                useValue: {
                    parent: new CateringItem(),
                    option: {},
                },
            },
        ],
        imports: [
            MatAutocompleteModule,
            MatCheckboxModule,
            MatFormFieldModule,
            MatInputModule,
            MatProgressSpinnerModule,
            ReactiveFormsModule,
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show loading state', () => {
        expect('[loading]').not.toExist();
        spectator.component.loading = true;
        spectator.detectChanges();
        expect('[loading]').toExist();
    });

    it('should submit updated item option details', (done) => {
        spectator.component.event.subscribe((e) => {
            expect(e.reason).toBe('done');
            expect(e.metadata.item.options).toHaveLength(1);
            expect(e.metadata.item.options[0].name).toBe('Test');
            done();
        });
        spectator.typeInElement('Test', 'input[name="name"]');
        spectator.detectChanges();
        spectator.click('footer button');
    });
});
