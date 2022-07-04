import { FormsModule } from '@angular/forms';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { IconComponent } from '@placeos/components';
import { DeskFlowConfirmComponent } from 'apps/workplace/src/app/book/desk-flow/confirm.component';
import { MockComponent } from 'ng-mocks';

describe('DeskFlowConfirmComponent', () => {
    let spectator: SpectatorRouting<DeskFlowConfirmComponent>;
    const createComponent = createRoutingFactory({
        component: DeskFlowConfirmComponent,
        declarations: [MockComponent(IconComponent)],
        imports: [FormsModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
