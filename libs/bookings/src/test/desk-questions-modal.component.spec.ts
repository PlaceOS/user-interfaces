import { MatRadioModule } from '@angular/material/radio';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { MockComponent } from 'ng-mocks';

import { DeskQuestionsModalComponent } from '../lib/desk-questions-modal.component';

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

    it('should check for validation', async () => {
        spectator.component.model.update((m) => ({ ...m, contact: true }));
        spectator.click('footer button');
        expect(spectator.component.failure()).toBeTruthy();
        spectator.component.model.update((m) => ({ ...m, contact: false }));
        const emitted = new Promise<void>((resolve) =>
            spectator.component.event.subscribe(() => resolve()),
        );
        spectator.component.submit();
        await emitted;
    });

    it('should show failure state', () => {
        expect('[failure]').not.toExist();
        spectator.component.model.update((m) => ({ ...m, unwell: true }));
        spectator.component.submit();
        spectator.detectChanges();
        expect('[failure]').toExist();
    });
});
