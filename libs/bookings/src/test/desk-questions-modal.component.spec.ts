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

    it('should block submission and show the failure state for any yes answer', () => {
        const emit = vi.spyOn(spectator.component.event, 'emit');
        expect('[failure]').not.toExist();

        spectator.component.model.update((m) => ({ ...m, contact: true }));
        spectator.click('footer button');
        spectator.detectChanges();

        expect(spectator.component.failure()).toBe(true);
        expect('[failure]').toExist();
        expect(emit).not.toHaveBeenCalled();
    });

    it('should emit done when every answer is no', () => {
        const emit = vi.spyOn(spectator.component.event, 'emit');

        spectator.click('footer button');

        expect(spectator.component.failure()).toBe(false);
        expect(emit).toHaveBeenCalledWith({ reason: 'done' });
    });
});
