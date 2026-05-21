import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { signal } from '@angular/core';
import { fakeAsync, tick } from '@angular/core/testing';
import { OverlayContainer } from '@angular/cdk/overlay';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { BookingFormService } from '@placeos/bookings';
import { Booking, SettingsService } from '@placeos/common';
import { EventFormService } from '@placeos/events';
import { MockProvider } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';
import { LandingStateService } from '../../app/landing/landing-state.service';
import { LandingColleaguesNewComponent } from '../../app/landing-new/landing-colleagues-new.component';
import { TeamScheduleService } from '../../app/team-schedule/team-schedule.service';

describe('LandingColleaguesNewComponent', () => {
    let spectator: Spectator<LandingColleaguesNewComponent>;
    let features: string[] = [];
    const booking_form_service = {
        newForm: jest.fn(),
        setOptions: jest.fn(),
    };
    const settings_service = {
        signal: jest.fn((key: string, default_value?: string[]) =>
            signal(key === 'features' ? features : (default_value ?? [])),
        ),
    };
    const createComponent = createComponentFactory({
        component: LandingColleaguesNewComponent,
        detectChanges: false,
        imports: [NoopAnimationsModule],
        providers: [
            MockProvider(LandingStateService, {
                contacts: new BehaviorSubject([
                    {
                        name: 'Test User',
                        email: 'test@example.com',
                    },
                ]),
                removeContact: jest.fn(),
            }),
            MockProvider(MatDialog, {
                open: jest.fn(),
                closeAll: jest.fn(),
            }),
            MockProvider(EventFormService, {
                newForm: jest.fn(),
            }),
            MockProvider(BookingFormService, booking_form_service),
            MockProvider(Router, { navigate: jest.fn() }),
            MockProvider(TeamScheduleService, {
                isFavorite: jest.fn(() => false),
                isTeamMember: jest.fn(() => false),
                toggleFavoriteByUser: jest.fn(),
                toggleTeamMemberByUser: jest.fn(),
            }),
            {
                provide: SettingsService,
                useValue: settings_service,
            },
        ],
    });

    const open_actions_menu = () => {
        const menu_trigger = spectator
            .queryAll('button')
            .find((button) => button.textContent?.includes('more_vert'));
        spectator.click(menu_trigger as HTMLElement);
        tick(200);
        spectator.detectChanges();
    };

    beforeEach(() => {
        features = [];
        settings_service.signal.mockClear();
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

    it('should hide favorite and team actions when team schedule is disabled', fakeAsync(() => {
        spectator = createComponent();
        spectator.detectChanges();
        open_actions_menu();

        const overlay = spectator
            .inject(OverlayContainer)
            .getContainerElement().textContent;

        expect(overlay).toContain('event');
        expect(overlay).toContain('person_remove');
        expect(overlay).not.toContain('star_outline');
        expect(overlay).not.toContain('group_add');
    }));

    it('should show favorite and team actions when team schedule is enabled', fakeAsync(() => {
        features = ['team-schedule'];
        spectator = createComponent();
        spectator.detectChanges();
        open_actions_menu();

        const overlay = spectator
            .inject(OverlayContainer)
            .getContainerElement().textContent;

        expect(overlay).toContain('star_outline');
        expect(overlay).toContain('group_add');
    }));

    it('should initialise colleague desk bookings with desk booking type', fakeAsync(() => {
        const members = [{ name: 'Test User', email: 'test@example.com' }];
        spectator = createComponent();
        spectator.component.selected_users.set(members as any);

        spectator.component.bookDeskWithSelected();
        tick(300);

        expect(booking_form_service.newForm).toHaveBeenCalledWith(
            'desk',
            expect.objectContaining({ booking_type: 'desk' }) as Booking,
        );
        expect(booking_form_service.setOptions).toHaveBeenCalledWith({
            group: true,
            members,
        });
        expect(spectator.component.selected_users()).toEqual([]);
    }));
});
