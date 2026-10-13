import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { IconComponent } from '@placeos/components';
import { MockComponent } from 'ng-mocks';

import { FacilitiesStatusComponent } from '../../app/facilities/facilities-status.component';

describe('FacilitiesStatusComponent', () => {
    let spectator: Spectator<FacilitiesStatusComponent>;
    const createComponent = createComponentFactory({
        component: FacilitiesStatusComponent,
        declarations: [MockComponent(IconComponent)],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should default total and feedback to empty values', () => {
        expect(spectator.component.total()).toBe(0);
        expect(spectator.component.feedback()).toBe('');
    });

    it('should render the current total in the template', () => {
        spectator.component.total.set(42);
        spectator.detectChanges();
        expect(spectator.query('[class*="text-right"]')?.textContent).toContain(
            '42',
        );
    });
});
