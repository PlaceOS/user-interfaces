import { signal } from '@angular/core';
import { Spectator, createComponentFactory } from '@ngneat/spectator/vitest';
import { MockComponent } from 'ng-mocks';

import { IconComponent } from '../lib/icon.component';
import { ServiceWorkerUpdateCardComponent } from '../lib/service-worker-update-card.component';

// The service-worker update state signal is module-private with no exported
// setter, so drive the component's own `update` signal directly.
const update_state = signal<any>(null);

describe('ServiceWorkerUpdateCardComponent', () => {
    let spectator: Spectator<ServiceWorkerUpdateCardComponent>;
    const createComponent = createComponentFactory({
        component: ServiceWorkerUpdateCardComponent,
        declarations: [MockComponent(IconComponent)],
    });

    beforeEach(() => {
        update_state.set(null);
        spectator = createComponent();
        (spectator.component as any).update = update_state;
        spectator.detectChanges();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show nothing while no update is available', () => {
        expect('aside').not.toExist();
    });

    it('should show the update card when an update becomes available', () => {
        update_state.set({
            message: 'New version ready',
            details: 'Reload to apply the update',
            action: 'Reload',
        });
        spectator.detectChanges();
        expect('aside').toExist();
        expect('aside h2').toContainText('New version ready');
        expect('aside p').toContainText('Reload to apply the update');
    });

    it('should fallback to default text when the state has no messages', () => {
        update_state.set({ message: '', details: '', action: '' });
        spectator.detectChanges();
        expect('aside h2').toContainText('Update available');
        expect('aside p').toContainText(
            'Refresh the page to get the new version of the application',
        );
    });

    it('should reload the application when the action is pressed', () => {
        const spy = vi
            .spyOn(spectator.component, 'reloadApp')
            .mockImplementation(() => null);
        update_state.set({
            message: 'New version ready',
            details: '',
            action: 'Reload',
        });
        spectator.detectChanges();
        spectator.click('aside button');
        expect(spy).toHaveBeenCalled();
    });
});
