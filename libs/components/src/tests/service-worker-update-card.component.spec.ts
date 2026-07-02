import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';

jest.mock('@placeos/common', () => {
    const { signal } = require('@angular/core');
    const update_state = signal(null);
    return {
        __update_state: update_state,
        serviceWorkerUpdate: () => update_state.asReadonly(),
    };
});

import * as common from '@placeos/common';
import { IconComponent } from '../lib/icon.component';
import { ServiceWorkerUpdateCardComponent } from '../lib/service-worker-update-card.component';

const update_state = (common as any).__update_state;

describe('ServiceWorkerUpdateCardComponent', () => {
    let spectator: Spectator<ServiceWorkerUpdateCardComponent>;
    const createComponent = createComponentFactory({
        component: ServiceWorkerUpdateCardComponent,
        declarations: [MockComponent(IconComponent)],
    });

    beforeEach(() => {
        update_state.set(null);
        spectator = createComponent();
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
        const spy = jest
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
