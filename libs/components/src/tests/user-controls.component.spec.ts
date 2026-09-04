import { signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { Spectator, createComponentFactory } from '@ngneat/spectator/vitest';
import {
    LocaleService,
    OrganisationService,
    SettingsService,
    StaffUser,
    setCurrentUser,
    settingSignal,
} from '@placeos/common';
import { logout } from '@placeos/ts-client';

// The real user store drives `currentUser()`; only ts-client `logout` is
// stubbed. `hasNewVersion` has no exported test hook, so the component's own
// getter is overridden per-instance where the update state matters.
vi.mock('@placeos/ts-client', { spy: true });

import { SupportTicketModalComponent } from 'libs/form-fields/src/lib/support-ticket-modal.component';
import { ChangelogService } from '../lib/changelog.service';
import { UserControlsComponent } from '../lib/user-controls.component';

describe('UserControlsComponent', () => {
    let spectator: Spectator<UserControlsComponent>;
    const settings = {
        get: vi.fn((_key?: string) => null as any),
        saveUserSetting: vi.fn(),
        signal: (name: string, default_value: any) =>
            settingSignal(name, default_value),
    };
    const test_user = new StaffUser({
        id: 'user-1',
        name: 'Alice Tester',
        email: 'alice@test.com',
        groups: ['staff'],
    });
    const changelog = {
        available: signal(false).asReadonly(),
        view: vi.fn(),
    };
    const createComponent = createComponentFactory({
        component: UserControlsComponent,
        providers: [
            { provide: SettingsService, useValue: settings },
            {
                provide: OrganisationService,
                useValue: {
                    active_building: signal({
                        name: 'Test Building',
                        display_name: 'Test Building',
                    }),
                    active_region: signal(null),
                    region_list: signal([]),
                },
            },
            {
                provide: LocaleService,
                useValue: { locale: 'en', get: (key: string) => key },
            },
            { provide: ChangelogService, useValue: changelog },
            provideNoopAnimations(),
        ],
    });

    function findButtonWithIcon(icon: string): Element {
        return spectator
            .queryAll('button')
            .find((button) => button.textContent.includes(icon));
    }

    beforeEach(() => {
        vi.clearAllMocks();
        vi.mocked(logout).mockImplementation(() => undefined as any);
        settings.get.mockReturnValue(null);
        setCurrentUser(test_user);
        settingSignal('features', []).set([]);
        settingSignal('locales', []).set([]);
        settingSignal('allow_accessibility_changes', true).set(true);
        settingSignal('show_changelog', true).set(true);
        settingSignal('desks.height_enabled', false).set(false);
        settingSignal('use_region', false).set(false);
        settingSignal('disable_building_select', false).set(false);
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it("should display the current user's details", () => {
        expect(spectator.query('[avatar]').textContent).toContain(
            'Alice Tester',
        );
        expect(spectator.query('[avatar]').textContent).toContain(
            'alice@test.com',
        );
    });

    it('should log the user out on sign out', () => {
        spectator.click('button.inverse');
        expect(logout).toHaveBeenCalled();
    });

    it('should disable the changelog action when no changelog is deployed', () => {
        expect('button[disabled]').toExist();
    });

    it('should only show the new version button when an update exists', () => {
        expect(spectator.queryAll('.mb-4 button')).toHaveLength(1);
        Object.defineProperty(spectator.component, 'has_new_version', {
            get: () => true,
            configurable: true,
        });
        spectator.detectChanges();
        expect(spectator.queryAll('.mb-4 button')).toHaveLength(2);
    });

    it('should open the support ticket modal when feature enabled', () => {
        expect(findButtonWithIcon('support_agent')).toBeFalsy();
        settingSignal('features', []).set(['support-ticket']);
        spectator.detectChanges();
        const open_spy = vi
            .spyOn(MatDialog.prototype, 'open')
            .mockReturnValue(null);
        spectator.click(findButtonWithIcon('support_agent'));
        expect(open_spy).toHaveBeenCalledWith(SupportTicketModalComponent);
    });

    it('should open external support link when configured', () => {
        settingSignal('features', []).set(['support-ticket']);
        spectator.detectChanges();
        settings.get.mockImplementation((key: string) =>
            key === 'app.external_support_url'
                ? 'https://support.example.com'
                : null,
        );
        const window_spy = vi
            .spyOn(window, 'open')
            .mockImplementation(() => null);
        spectator.click(findButtonWithIcon('support_agent'));
        expect(window_spy).toHaveBeenCalledWith(
            'https://support.example.com',
            '_blank',
        );
        window_spy.mockRestore();
    });

    it('should allow hiding the building selector', () => {
        expect(findButtonWithIcon('business')).toBeTruthy();
        expect(spectator.element.textContent).toContain('Test Building');
        settingSignal('disable_building_select', false).set(true);
        spectator.detectChanges();
        expect(findButtonWithIcon('business')).toBeFalsy();
    });

    it("should show today's work location when wfh feature enabled", () => {
        expect(spectator.element.textContent).not.toContain(
            "Today's Work Location",
        );
        setCurrentUser(
            new StaffUser({
                ...test_user,
                work_preferences: [
                    {
                        day_of_week: new Date().getDay(),
                        blocks: [
                            { start_time: 0, end_time: 24, location: 'wfo' },
                        ],
                    },
                ] as any,
            }),
        );
        settingSignal('features', []).set(['wfh']);
        spectator = createComponent();
        expect(spectator.element.textContent).toContain(
            "Today's Work Location",
        );
        expect(spectator.element.textContent).toContain('business');
    });
});
