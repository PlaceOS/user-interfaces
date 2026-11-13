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

    // Every error name the state service sets has its own explanation
    it.each([
        ['guest', 'Your details could not be retrieved'],
        ['meeting', 'Meeting details have changed'],
        ['link', 'Your link has expired'],
        ['checked_in', 'already checked in'],
        ['cancelled', 'Meeting was cancelled'],
        ['checkin', 'We could not check you in'],
        ['update', 'We could not save your details'],
    ])('should explain the "%s" error', (error_name, message) => {
        expect(renderWith(error_name)).toContain(message);
    });

    it('should show only the heading for an unknown error', () => {
        const text = renderWith('something-else');
        expect(text).toBe('Unable to continue');
    });
});
