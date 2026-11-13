import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Spectator, createComponentFactory } from '@ngneat/spectator/vitest';
import { MockComponent } from 'ng-mocks';

import { ActionIconComponent } from '../lib/action-icon.component';
import { IconComponent } from '../lib/icon.component';
import { SafePipe } from '../lib/safe.pipe';

describe('ActionIconComponent', () => {
    let spectator: Spectator<ActionIconComponent>;
    const createComponent = createComponentFactory({
        component: ActionIconComponent,
        declarations: [MockComponent(IconComponent), SafePipe],
        imports: [MatProgressSpinnerModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should allow toggling of states', () => {
        expect('.state icon').not.toExist();
        spectator.setInput({ state: 'success' });
        spectator.detectChanges();
        expect('.state icon').toExist();
        expect('.state icon').toContainText('done');
        spectator.setInput({ state: 'error' });
        spectator.detectChanges();
        expect('.state icon').toExist();
        expect('.state icon').toContainText('close');
        spectator.setInput({ state: '' });
        spectator.detectChanges();
        expect('.state icon').not.toExist();
    });

    it('should show a spinner in place of the state and block presses while loading', () => {
        spectator.setInput({ state: 'success', loading: true });
        spectator.detectChanges();
        expect('mat-spinner').toExist();
        expect('.state icon').not.toExist();
        expect('button').toBeDisabled();

        spectator.setInput({ loading: false });
        spectator.detectChanges();
        expect('mat-spinner').not.toExist();
        expect('.state icon').toExist();
        expect('button').not.toBeDisabled();
    });
});
