import { MatTooltipModule } from '@angular/material/tooltip';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { setNotifyOutlet, StaffUser } from '@placeos/common';
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

    it('should show when user sets', () => {
        expect('[details]').not.toExist();
        spectator.setInput({
            user: new StaffUser({ name: 'Jim', email: 'jim@test.com' }),
        });
        spectator.detectChanges();
        expect('[details]').toExist();
    });

    it('should check out an onsite user and check in an offsite user', async () => {
        const state = spectator.inject(StaffStateService);
        const user = new StaffUser({ name: 'Jim', email: 'jim@test.com' });
        vi.mocked(state.checkin).mockResolvedValue(undefined);
        vi.mocked(state.checkout).mockResolvedValue(undefined);
        spectator.setInput({ user, onsite: true });

        spectator.click('action-icon');
        await vi.waitFor(() =>
            expect(state.checkout).toHaveBeenCalledWith(user),
        );

        spectator.setInput({ onsite: false });
        spectator.click('action-icon');
        await vi.waitFor(() =>
            expect(state.checkin).toHaveBeenCalledWith(user),
        );
    });

    it('should notify and stop loading when a check-in fails', async () => {
        const snackbar = {
            open: vi.fn(() => ({ onAction: () => ({ subscribe: vi.fn() }) })),
        };
        setNotifyOutlet(snackbar as any, true);
        vi.mocked(
            spectator.inject(StaffStateService).checkin,
        ).mockRejectedValue('Offline');
        spectator.setInput({
            user: new StaffUser({ name: 'Jim', email: 'jim@test.com' }),
        });

        await spectator.component.checkin();

        expect(snackbar.open).toHaveBeenCalledWith(
            'APP.CONCIERGE.DIRECTORY_CHECKIN_ERROR',
            expect.anything(),
            expect.objectContaining({ panelClass: ['error'] }),
        );
        expect(spectator.component.loading()).toBe(false);
        setNotifyOutlet(null, true);
    });
});
