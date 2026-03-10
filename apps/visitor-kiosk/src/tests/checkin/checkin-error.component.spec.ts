import { SpectatorRouting } from '@ngneat/spectator';
import { createRoutingFactory } from '@ngneat/spectator/jest';
import { IconComponent } from '@placeos/components';
import { MockComponent } from 'ng-mocks';
import { CheckinErrorComponent } from '../../app/checkin/checkin-error.component';

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

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
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
