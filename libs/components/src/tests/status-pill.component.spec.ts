import { SpectatorHost, createHostFactory } from '@ngneat/spectator/vitest';

import { StatusPillComponent } from '../lib/status-pill.component';

describe('StatusPillComponent', () => {
    let spectator: SpectatorHost<StatusPillComponent>;
    const createHost = createHostFactory({
        component: StatusPillComponent,
    });

    beforeEach(
        () =>
            (spectator = createHost(
                `<status-pill [status]="status" [label]="label">Room Booked</status-pill>`,
                { hostProps: { status: 'success', label: '' } },
            )),
    );

    it('should project content into the pill', () => {
        expect('status-pill > div').toContainText('Room Booked');
    });

    it('should show the matching icon and colour for each status', () => {
        expect('icon').toContainText('check_circle');
        expect(spectator.query('status-pill > div')).toHaveClass(
            'bg-success-light',
        );

        spectator.setHostInput({ status: 'error' });
        expect('icon').toContainText('cancel');
        expect(spectator.query('status-pill > div')).toHaveClass(
            'bg-error-light',
        );

        spectator.setHostInput({ status: 'warning' });
        expect('icon').toContainText('warning');
        expect(spectator.query('status-pill > div')).toHaveClass(
            'bg-warning-light',
        );

        spectator.setHostInput({ status: 'info' });
        expect('icon').toContainText('info');
        expect(spectator.query('status-pill > div')).toHaveClass(
            'bg-info-light',
        );
    });

    it('should mute the pill for neutral status', () => {
        spectator.setHostInput({ status: 'neutral' });
        expect('icon').toContainText('block');
        expect(spectator.query('status-pill > div')).toHaveClass('bg-base-200');
        expect(spectator.queryAll('.opacity-40').length).toBeGreaterThan(0);
    });

    it('should fallback to the warning icon for unknown status values', () => {
        spectator.setHostInput({ status: 'something-else' });
        expect('icon').toContainText('warning');
    });

    it('should name the status icon for assistive technology', () => {
        expect(spectator.component.status_label()).toBe('COMMON.APPROVED');
        spectator.setHostInput({ status: 'info' });
        expect(spectator.component.status_label()).toBe('COMMON.WAITLISTED');
        spectator.setHostInput({ label: 'Cancelled' });
        expect('icon').toHaveAttribute('aria-label', 'Cancelled');
    });
});
