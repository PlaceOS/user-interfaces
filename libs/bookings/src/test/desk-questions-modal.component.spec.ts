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
        spectator.component.form.patchValue({ contact: true });
        spectator.click('footer button');
        expect(spectator.component.failure).toBeTruthy();
        spectator.component.form.patchValue({ contact: false });
        spectator.component.event.subscribe(() => done());
        spectator.component.submit();
    });

    it('should show failure state', () => {
        expect('[failure]').not.toExist();
        spectator.component.form.patchValue({ unwell: true });
        spectator.component.submit();
        spectator.detectChanges();
        expect('[failure]').toExist();
    });
});
