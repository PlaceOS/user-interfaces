import { SpectatorRouting } from '@ngneat/spectator';
import { createRoutingFactory } from '@ngneat/spectator/vitest';
import { IconComponent } from '@placeos/components';
import { MockComponent } from 'ng-mocks';
import { CheckinErrorComponent } from '../../app/checkin/checkin-error.component';
import { CheckinStateService } from '../../app/checkin/checkin-state.service';

describe('CheckinErrorComponent', () => {
    let spectator: SpectatorRouting<CheckinErrorComponent>;
    const createComponent = createRoutingFactory({
        component: CheckinErrorComponent,
        declarations: [MockComponent(IconComponent)],
        providers: [],
    });

    beforeEach(() => {
        window.PLACEOS_PUBLIC_MODE = false;
        spectator = createComponent();
    });

    it('should show the reason the visitor must see reception', () => {
        spectator.inject(CheckinStateService).setError('Meeting finished');
        spectator.detectChanges();
        expect(spectator.query('p')).toHaveText('Meeting finished');
    });

    it('should show done button when public mode is disabled', () => {
        expect(spectator.query('[btn]')).toBeTruthy();
    });

    it('should hide done button when public mode is enabled', () => {
        window.PLACEOS_PUBLIC_MODE = true;
        spectator.detectChanges();
        expect(spectator.query('[btn]')).toBeFalsy();
    });
});
