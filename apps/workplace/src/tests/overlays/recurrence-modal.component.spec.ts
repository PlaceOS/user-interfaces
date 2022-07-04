import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { IconComponent } from '@placeos/components';
import { DateFieldComponent } from '@placeos/form-fields';
import { MockComponent } from 'ng-mocks';

import { RecurrenceModalComponent } from '../../app/overlays/recurrence-modal.component';

describe('RecurrenceModalComponent', () => {
    let spectator: Spectator<RecurrenceModalComponent>;
    const createComponent = createComponentFactory({
        component: RecurrenceModalComponent,
        providers: [
            { provide: MAT_DIALOG_DATA, useValue: { details: {}, date: 0 } },
        ],
        declarations: [
            MockComponent(DateFieldComponent),
            MockComponent(IconComponent),
        ],
        imports: [
            MatFormFieldModule,
            MatSelectModule,
            FormsModule,
            ReactiveFormsModule,
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it.todo('should handle submitting form');
});
