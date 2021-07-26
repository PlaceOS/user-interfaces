import { MatTooltipModule } from '@angular/material/tooltip';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import { ActionIconComponent, IconComponent } from '@placeos/components';
import { MockComponent } from 'ng-mocks';
import { VisitorDetailsComponent } from '../../app/visitors/visitor-details.component';
import { VisitorsStateService } from '../../app/visitors/visitors-state.service';

describe('VisitorDetailsComponent', () => {
    let spectator: Spectator<VisitorDetailsComponent>;
    const createComponent = createComponentFactory({
        component: VisitorDetailsComponent,
        providers: [
            {
                provide: VisitorsStateService,
                useValue: {
                    checkGuestOut: jest.fn(),
                    checkGuestIn: jest.fn(),
                },
            },
            { provide: SettingsService, useValue: { get: jest.fn() } },
        ],
        declarations: [
            MockComponent(ActionIconComponent),
            MockComponent(IconComponent),
        ],
        imports: [MatTooltipModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it.todo('should match snapshot');
    it.todo('should allow toggling remote state');
    it.todo('should checking in visitor');
    it.todo('should checking out visitor');
    it.todo('should update visitor details');
});
