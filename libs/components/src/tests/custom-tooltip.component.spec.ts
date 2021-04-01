import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { PortalModule } from '@angular/cdk/portal';

import { CustomTooltipComponent } from '../lib/custom-tooltip.component';
import { SanitizePipe } from '../lib/sanitise.pipe';
import { OverlayModule } from '@angular/cdk/overlay';

describe('CustomTooltipComponent', () => {
    let spectator: Spectator<CustomTooltipComponent>;
    const createComponent = createComponentFactory({
        component: CustomTooltipComponent,
        declarations: [SanitizePipe],
        imports: [PortalModule, OverlayModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
