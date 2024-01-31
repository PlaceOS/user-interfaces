import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SpectatorRouting, createRoutingFactory } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';

import { IconComponent } from '../lib/icon.component';
import { StatusOverlayComponent } from '../lib/status-overlay.component';

describe('StatusOverlayComponent', () => {
    let spectator: SpectatorRouting<StatusOverlayComponent>;
    const createComponent = createRoutingFactory({
        component: StatusOverlayComponent,
        declarations: [MockComponent(IconComponent)],
        imports: [MatProgressSpinnerModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should be able to show a success message', () => {
        expect('[error]').not.toExist();
        spectator.setInput({ error: 'Test Error' });
        spectator.detectChanges();
        expect('[error]').toExist();
        expect('[error]').toContainText('Test Error');
    });

    it('should be able to show links', () => {
        expect('a[btn]').toHaveLength(0);
        spectator.setInput({
            links: [
                { name: 'Test Link 1', route: '/one' },
                { name: 'Test Link 2', route: '/two' },
            ],
        });
        spectator.detectChanges();
        expect('a[btn]').toHaveLength(2);
        expect('a[btn]').toContainText('Test Link 1');
        expect('a[btn]').toContainText('Test Link 2');
    });

    it('should be able to show a loading state', () => {
        expect('mat-spinner').not.toExist();
        spectator.setInput({ loading: 'Test Loading...' });
        spectator.detectChanges();
        expect('mat-spinner').toExist();
        expect('p').toContainText('Test Loading...');
    });
});
