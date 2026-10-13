import { signal } from '@angular/core';
import { Spectator, createComponentFactory } from '@ngneat/spectator/vitest';

import { EnrolmentErrorComponent } from '../app/enrolment-error.component';
import { EnrolmentStateService } from '../app/enrolment-state.service';

describe('EnrolmentErrorComponent', () => {
    let spectator: Spectator<EnrolmentErrorComponent>;
    const error = signal('');

    const createComponent = createComponentFactory({
        component: EnrolmentErrorComponent,
        providers: [
            { provide: EnrolmentStateService, useValue: { error } },
        ],
        detectChanges: false,
    });

    function renderWith(error_name: string) {
        error.set(error_name);
        spectator = createComponent();
        spectator.detectChanges();
        return spectator.element.textContent?.replace(/\s+/g, ' ').trim() ?? '';
    }

    it('should always show the failure heading', () => {
        expect(renderWith('')).toContain('Unable to continue');
    });

    it('should explain a failed guest lookup', () => {
        expect(renderWith('guest')).toContain(
            'Your details could not be retrieved',
        );
    });

    it('should explain changed meeting details', () => {
        expect(renderWith('meeting')).toContain('Meeting details have changed');
    });

    it('should explain an expired link', () => {
        expect(renderWith('link')).toContain('Your link has expired');
    });

    it('should explain an existing checkin', () => {
        expect(renderWith('checked_in')).toContain('already checked in');
    });

    it('should explain a cancelled meeting', () => {
        expect(renderWith('cancelled')).toContain('Meeting was cancelled');
    });

    it('should show no explanation for an unknown error', () => {
        const text = renderWith('something-else');
        expect(text).toBe('Unable to continue');
    });
});
