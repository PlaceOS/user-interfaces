import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { signal } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { BookingFormService } from '@placeos/bookings';
import { Booking, settingSignal } from '@placeos/common';
import { EventFormService } from '@placeos/events';
import { MockProvider } from 'ng-mocks';
import { LandingStateService } from '../../app/landing/landing-state.service';
import { LandingColleaguesNewComponent } from '../../app/landing-new/landing-colleagues-new.component';
import { TeamScheduleService } from '../../app/team-schedule/team-schedule.service';

describe('LandingColleaguesNewComponent', () => {
    let spectator: Spectator<LandingColleaguesNewComponent>;
    const features = settingSignal<string[]>('features', []);
    const booking_form_service = {
        newForm: vi.fn(),
        setOptions: vi.fn(),
    };
    const createComponent = createComponentFactory({
        component: LandingColleaguesNewComponent,
        detectChanges: false,
        imports: [NoopAnimationsModule],
        providers: [
            MockProvider(LandingStateService, {
                contacts: signal([
                    {
                        name: 'Test User',
                        email: 'test@example.com',
                    },
                ]) as any,
                removeContact: vi.fn(),
            }),
            MockProvider(MatDialog, {
                open: vi.fn(),
                closeAll: vi.fn(),
            }),
            MockProvider(EventFormService, {
                newForm: vi.fn(),
                newFormWith: vi.fn(),
            }),
            MockProvider(BookingFormService, booking_form_service),
            MockProvider(Router, { navigate: vi.fn() }),
            MockProvider(TeamScheduleService, {
                isFavorite: vi.fn(() => false),
                isTeamMember: vi.fn(() => false),
                toggleFavoriteByUser: vi.fn(),
                toggleTeamMemberByUser: vi.fn(),
            }),
        ],
    });

    const open_actions_menu = async () => {
        const menu_trigger = spectator
            .queryAll('button')
            .find((button) => button.textContent?.includes('more_vert'));
        spectator.click(menu_trigger as HTMLElement);
        await spectator.fixture.whenStable();
        spectator.detectChanges();
    };

    beforeEach(() => {
        features.set(['spaces']);
        booking_form_service.newForm.mockClear();
        booking_form_service.setOptions.mockClear();
    });

    afterEach(() => {
        spectator
            ?.inject(OverlayContainer)
            .getContainerElement()
            .replaceChildren();
        spectator?.fixture.destroy();
    });

    it('should hide favorite and team actions when team schedule is disabled', async () => {
        spectator = createComponent();
        spectator.detectChanges();
        await open_actions_menu();

        const overlay = spectator
            .inject(OverlayContainer)
            .getContainerElement().textContent;

        expect(overlay).toContain('event');
        expect(overlay).toContain('person_remove');
        expect(overlay).not.toContain('star_outline');
        expect(overlay).not.toContain('group_add');
    });

    it('should show favorite and team actions when team schedule is enabled', async () => {
        features.set(['spaces', 'team-schedule']);
        spectator = createComponent();
        spectator.detectChanges();
        await open_actions_menu();

        const overlay = spectator
            .inject(OverlayContainer)
            .getContainerElement().textContent;

        expect(overlay).toContain('star_outline');
        expect(overlay).toContain('group_add');
    });

    it('should show the booking actions of the enabled features only', async () => {
        spectator = createComponent();
        spectator.component.selected_users.set([
            { name: 'Test User', email: 'test@example.com' },
        ] as any);
        spectator.detectChanges();
        expect(spectator.query('[name="book-room-selected"]')).toBeTruthy();
        expect(spectator.query('[name="book-desk-selected"]')).toBeFalsy();

        // A desk booking for colleagues is a group booking
        const allow_groups = settingSignal('desks.allow_groups', false);
        allow_groups.set(false);
        features.set(['desks']);
        spectator.detectChanges();
        expect(spectator.query('[name="book-room-selected"]')).toBeFalsy();
        expect(spectator.query('[name="book-desk-selected"]')).toBeFalsy();

        allow_groups.set(true);
        spectator.detectChanges();
        expect(spectator.query('[name="book-desk-selected"]')).toBeTruthy();
        await open_actions_menu();
        expect(
            spectator.inject(OverlayContainer).getContainerElement()
                .textContent,
        ).not.toContain('COLLEAGUES_BOOK_MEETING');
    });

    // No wait before the checks: a prefill on a timer is lost when the form
    // page loads after the timer.
    it('should save the colleague with the meeting form before it opens the form', () => {
        const user = { name: 'Test User', email: 'test@example.com' };
        spectator = createComponent();
        const event_form = spectator.inject(EventFormService);

        spectator.component.bookMeeting(user as any);

        expect(event_form.newFormWith).toHaveBeenCalledWith({
            attendees: [user],
        });
        expect(spectator.inject(Router).navigate).toHaveBeenCalledWith([
            '/book',
            'meeting',
            'form',
        ]);
    });

    it('should save the selected colleagues with the meeting form and clear the selection', () => {
        const attendees = [{ name: 'Test User', email: 'test@example.com' }];
        spectator = createComponent();
        const event_form = spectator.inject(EventFormService);
        spectator.component.selected_users.set(attendees as any);

        spectator.component.bookMeetingWithSelected();

        expect(event_form.newFormWith).toHaveBeenCalledWith({ attendees });
        expect(spectator.component.selected_users()).toEqual([]);
        expect(spectator.inject(Router).navigate).toHaveBeenCalledWith([
            '/book',
            'meeting',
            'form',
        ]);
    });

    it('should initialise colleague desk bookings with desk booking type', async () => {
        const members = [{ name: 'Test User', email: 'test@example.com' }];
        spectator = createComponent();
        spectator.component.selected_users.set(members as any);

        spectator.component.bookDeskWithSelected();
        await new Promise((resolve) => setTimeout(resolve, 300));

        expect(booking_form_service.newForm).toHaveBeenCalledWith(
            'desk',
            expect.objectContaining({ booking_type: 'desk' }) as Booking,
        );
        expect(booking_form_service.setOptions).toHaveBeenCalledWith({
            group: true,
            members,
        });
        expect(spectator.component.selected_users()).toEqual([]);
    });
});
