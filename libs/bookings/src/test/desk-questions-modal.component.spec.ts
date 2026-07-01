import { MatRadioModule } from '@angular/material/radio';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { MockComponent } from 'ng-mocks';

import { DeskQuestionsModalComponent } from '../lib/desk-questions-modal.component';

jest.mock('@placeos/common');

import * as common_mod from '@placeos/common';

describe('DeskQuestionsModalComponent', () => {
    let spectator: Spectator<DeskQuestionsModalComponent>;
    const createComponent = createComponentFactory({
        component: DeskQuestionsModalComponent,
        declarations: [MockComponent(IconComponent)],
        imports: [MatRadioModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should check for validation', (done) => {
        (common_mod as any).notifyError = jest.fn();
        spectator.component.model.update((m) => ({ ...m, contact: true }));
        spectator.click('footer button');
        expect(spectator.component.failure()).toBeTruthy();
        spectator.component.model.update((m) => ({ ...m, contact: false }));
        spectator.component.event.subscribe(() => done());
        spectator.component.submit();
    });

    it('should show failure state', () => {
        expect('[failure]').not.toExist();
        spectator.component.model.update((m) => ({ ...m, unwell: true }));
        spectator.component.submit();
        spectator.detectChanges();
        expect('[failure]').toExist();
    });
});
