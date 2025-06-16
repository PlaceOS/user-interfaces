import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { MockComponent, MockPipe } from 'ng-mocks';
import { first } from 'rxjs/operators';

import { IconComponent } from 'libs/components/src/lib/icon.component';
import { SafePipe } from 'libs/components/src/lib/safe.pipe';
import { ActionFieldComponent } from '../lib/action-field.component';

describe('ActionFieldComponent', () => {
    let spectator: Spectator<ActionFieldComponent>;
    const createComponent = createComponentFactory({
        component: ActionFieldComponent,
        declarations: [MockComponent(IconComponent), MockPipe(SafePipe)],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should emit user click actions', (done) => {
        spectator.component.on_action.pipe(first()).subscribe(() => done());
        expect('[placeholder]').toExist();
        spectator.click('[placeholder]');
    });

    it('should emit user enter keypress ', (done) => {
        spectator.component.on_action.pipe(first()).subscribe(() => done());
        expect('[form-field]').toExist();
        spectator.dispatchKeyboardEvent('[form-field]', 'keydown', 'Enter');
    });
});
