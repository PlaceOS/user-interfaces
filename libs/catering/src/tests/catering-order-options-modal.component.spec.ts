import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { IconComponent } from '@placeos/components';
import { MockComponent } from 'ng-mocks';

import { CateringOrderOptionsModalComponent } from '../lib/catering-order-options-modal.component';

describe('CateringOrderOptionsModalComponent', () => {
    let spectator: Spectator<CateringOrderOptionsModalComponent>;
    const createComponent = createComponentFactory({
        component: CateringOrderOptionsModalComponent,
        declarations: [MockComponent(IconComponent)],
        providers: [
            {
                provide: MAT_DIALOG_DATA,
                useValue: {
                    options: [
                        { id: '1', group: 'Single' },
                        { id: '2', group: 'Single' },
                        { id: '3', group: 'Multi', multiple: true },
                        { id: '4', group: 'Multi', multiple: true },
                    ],
                },
            },
        ],
        imports: [MatCheckboxModule, MatRadioModule, FormsModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should allow for multi or single selection', () => {
        expect('[group="Multi"] mat-radio-button').not.toExist();
        expect('[group="Single"] mat-checkbox').not.toExist();
        expect('[group="Single"] mat-radio-button').toExist();
        expect('[group="Multi"] mat-checkbox').toExist();
    });

    it('should submit selected option', (done) => {
        spectator.component.event.subscribe((e) => {
            expect(e.reason).toBe('done');
            expect(e.metadata.options).toHaveLength(1);
            expect(e.metadata.options[0].id).toBe('1');
            done();
        });
        spectator.component.updateGroupOption(
            spectator.component.groups[0],
            '1'
        );
        expect(spectator.component.option_state['1']).toBeTruthy();
        expect(spectator.component.option_state['2']).toBeFalsy();
        spectator.component.saveOptions();
    });
});
