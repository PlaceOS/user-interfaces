import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { MockComponent } from 'ng-mocks';
import { IconComponent } from '@placeos/components';

import { DeskQuestionsModalComponent } from '../lib/desk-questions-modal.component';

jest.mock('@placeos/common');

import * as common_mod from '@placeos/common';

describe('DeskQuestionsModalComponent', () => {
    let spectator: Spectator<DeskQuestionsModalComponent>;
    const createComponent = createComponentFactory({
        component: DeskQuestionsModalComponent,
        declarations: [MockComponent(IconComponent)],
        imports: [MatRadioModule, ReactiveFormsModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should check for validation', (done) => {
        (common_mod as any).notifyError = jest.fn();
        spectator.component.event.subscribe(() => {
            expect(common_mod.notifyError).toHaveBeenCalledTimes(1);
            done();
        });
        spectator.click('footer button');
        expect(common_mod.notifyError).toHaveBeenCalledWith(
            'All the questions must be answered'
        );
        spectator.component.form.setValue({
            travelled: false,
            unwell: false,
            contact: false,
        });
        spectator.component.submit();
    });

    it('should show failure state', () => {
        expect('[failure]').not.toExist();
        spectator.component.form.setValue({
            travelled: false,
            unwell: true,
            contact: false,
        });
        spectator.component.submit();
        spectator.detectChanges();
        expect('[failure]').toExist();
    });
});
