import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';
import { ControlAdvancedViewComponent } from '../app/advanced-view.component';

import { ControlPageViewComponent } from '../app/page-view.component';
import { SourceSelectComponent } from '../app/ui/source-select.component';

describe('ControlPageViewComponent', () => {
    let spectator: Spectator<ControlPageViewComponent>;
    const createComponent = createComponentFactory({
        component: ControlPageViewComponent,
        declarations: [
            MockComponent(SourceSelectComponent),
            MockComponent(ControlAdvancedViewComponent),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show basic view', () => {
        expect('source-select').not.toExist();
        spectator.component.view = 'basic';
        spectator.detectChanges();
        expect('source-select').toExist();
    });

    it('should show advanced view', () => {
        expect('control-advanced-view').toExist();
        spectator.component.view = 'basic';
        spectator.detectChanges();
        expect('control-advanced-view').not.toExist();
    })
});
