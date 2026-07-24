import { MatTooltipModule } from '@angular/material/tooltip';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { StaffUser } from '@placeos/common';
import { mockComponent } from '@placeos/common/tests';
import {
    ActionIconComponent,
    IconComponent,
    UserAvatarComponent,
} from '@placeos/components';
import { StaffDetailsComponent } from '../../app/staff/staff-details.component';
import { StaffStateService } from '../../app/staff/staff-state.service';

describe('StaffDetailsComponent', () => {
    let spectator: Spectator<StaffDetailsComponent>;
    const createComponent = createComponentFactory({
        component: StaffDetailsComponent,
        providers: [
            {
                provide: StaffStateService,
                useValue: {
                    checkin: vi.fn(),
                    checkout: vi.fn(),
                },
            },
        ],
        declarations: [
            mockComponent(ActionIconComponent),
            mockComponent(IconComponent),
            mockComponent(UserAvatarComponent),
        ],
        imports: [MatTooltipModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show when user sets', () => {
        expect('[details]').not.toExist();
        spectator.setInput({
            user: new StaffUser({ name: 'Jim', email: 'jim@test.com' }),
        });
        spectator.detectChanges();
        expect('[details]').toExist();
    });

    it.todo('should allow user to checkin');
    it.todo('should allow user to checkout');
});
