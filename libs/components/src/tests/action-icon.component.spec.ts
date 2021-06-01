import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
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

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show icon', () => {
        expect('app-icon[root]').toExist();
    });

    it('should allow toggling of states', () => {
        expect('.state app-icon').not.toExist();
        spectator.setInput({ state: 'success' });
        spectator.detectChanges();
        expect('.state app-icon').toExist();
        expect('.state app-icon').toContainText('done');
        spectator.setInput({ state: 'error' });
        spectator.detectChanges();
        expect('.state app-icon').toExist();
        expect('.state app-icon').toContainText('close');
        spectator.setInput({ state: '' });
        spectator.detectChanges();
        expect('.state app-icon').not.toExist();
    });

    it('should allow toggling of loading state', () => {
        expect('mat-spinner').not.toExist();
        spectator.setInput({ loading: true });
        spectator.detectChanges();
        expect('mat-spinner').toExist();
        spectator.setInput({ loading: false });
        spectator.detectChanges();
        expect('mat-spinner').not.toExist();
    });
});
