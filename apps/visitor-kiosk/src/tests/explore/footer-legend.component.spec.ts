import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { IconComponent } from '@placeos/components';
import { MockComponent } from 'ng-mocks';
import { FooterLegendComponent } from '../../app/explore/footer-legend.component';

describe('FooterLegendComponent', () => {
    let spectator: Spectator<FooterLegendComponent>;
    const createComponent = createComponentFactory({
        component: FooterLegendComponent,
        declarations: [MockComponent(IconComponent)],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
