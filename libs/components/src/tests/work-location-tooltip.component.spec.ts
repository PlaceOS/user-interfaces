import { MatDialog } from '@angular/material/dialog';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { Spectator, createComponentFactory } from '@ngneat/spectator/vitest';
import {
    LocaleService,
    StaffUser,
    WorktimePreference,
    setCurrentUser,
    setNotifyOutlet,
} from '@placeos/common';
import { format } from 'date-fns';

// The real user store drives `currentUser()`. `reloadUserData()` is a real
// workspace fn that reloads via ts-client `users.current()`, so we stub
// that call and assert on it as the reload proxy.
vi.mock('@placeos/ts-client', { spy: true });

import * as ts_client from '@placeos/ts-client';
import { users } from '@placeos/ts-client';
import { mockReply } from '@placeos/ts-client/compat';

import { WFHSettingsModalComponent } from 'libs/users/src/lib/wfh-settings-modal.component';
import { WorkLocationTooltipComponent } from '../lib/work-location-tooltip.component';

describe('WorkLocationTooltipComponent', () => {
    let spectator: Spectator<WorkLocationTooltipComponent>;
    // The template shows the current minute. A fixed time makes each run
    // the same. The time is in the middle of a minute.
    const frozen_time = new Date(2026, 2, 4, 10, 15, 30);
    const today = frozen_time.getDay();
    const test_user = new StaffUser({
        id: 'user-1',
        name: 'Alice Tester',
        email: 'alice@test.com',
        work_preferences: [
            {
                day_of_week: today,
                blocks: [
                    { start_time: 0, end_time: 12, location: 'wfo' },
                    { start_time: 12, end_time: 24, location: 'wfh' },
                ],
            },
        ] as any,
        work_overrides: {},
    });
    const createComponent = createComponentFactory({
        component: WorkLocationTooltipComponent,
        providers: [
            { provide: LocaleService, useValue: { get: (key: string) => key } },
            provideNoopAnimations(),
        ],
    });

    // Freeze the clock for all of the file, not for each test. After a save,
    // `reloadUserData()` loads the user 300 ms later. The new user starts a
    // change check. With the real clock, that check can read a different
    // minute and fail with NG0100. Only Date is faked, so the real timers in
    // the tests still run.
    beforeAll(() => {
        vi.useFakeTimers({ toFake: ['Date'] });
        vi.setSystemTime(frozen_time);
    });

    afterAll(() => {
        vi.useRealTimers();
    });

    /**
     * Wait for the user reload that a successful save starts, and for the
     * change check of the new user. `reloadUserData()` uses a module timer,
     * which fixture teardown does not stop. Each test that saves calls this
     * before it ends, so that no reload goes into the next test.
     */
    async function settleUserReload() {
        // The reload timer is 300 ms. The longer limit is for a busy CPU.
        await vi.waitFor(
            () => expect(ts_client.users.current).toHaveBeenCalledTimes(1),
            { timeout: 3_000 },
        );
        await vi.mocked(ts_client.users.current).mock.results[0].value;
        // Let the reload apply the user, then let the view update
        await new Promise((resolve) => setTimeout(resolve));
        await spectator.fixture.whenStable();
    }

    beforeEach(() => {
        vi.clearAllMocks();
        vi.mocked(users.update).mockResolvedValue(mockReply({} as any));
        // Resolve reloads with the same user so the real user pipeline stays
        // consistent instead of erroring on a rejected request.
        vi.mocked(ts_client.users.current).mockResolvedValue(
            mockReply(test_user as any),
        );
        setCurrentUser(test_user);
        spectator = createComponent();
    });

    it("should render blocks for today's work preference", () => {
        expect(spectator.component.active_preference.blocks).toHaveLength(2);
        expect(spectator.queryAll('button[aria-haspopup="menu"]')).toHaveLength(
            2,
        );
        expect('p.text-center').not.toExist();
    });

    it('should show an empty state when today has no work blocks', () => {
        // Tear down the block-populated fixture before rendering the empty one
        // so the shared user store change is not checked against the old view.
        spectator.fixture.destroy();
        setCurrentUser(
            new StaffUser({
                id: 'user-1',
                work_preferences: [],
                work_overrides: {},
            }),
        );
        spectator = createComponent();
        expect('p.text-center').toExist();
        expect(spectator.element.textContent).toContain('event_busy');
        expect(spectator.queryAll('button[aria-haspopup="menu"]')).toHaveLength(
            0,
        );
    });

    it('should open the WFH settings modal to edit preferences', () => {
        const open_spy = vi
            .spyOn(MatDialog.prototype, 'open')
            .mockReturnValue(null);
        spectator.click('button[icon]');
        expect(open_spy).toHaveBeenCalledWith(WFHSettingsModalComponent);
    });

    it('should save a location override for the selected block', async () => {
        vi.mocked(ts_client.users.current).mockClear();
        await spectator.component.setLocation(1, 'sick');
        const date = format(Date.now(), 'yyyy-MM-dd');
        expect(spectator.component.overrides()[date].blocks[1].location).toBe(
            'sick',
        );
        expect(spectator.component.overrides()[date].blocks[0].location).toBe(
            'wfo',
        );
        expect(users.update).toHaveBeenCalledWith({
            id: 'user-1',
            body: expect.objectContaining({
                work_overrides: expect.objectContaining({
                    [date]: expect.anything(),
                }),
            }),
        });
        // `reloadUserData()` reloads via `users.current()` after a delay.
        await settleUserReload();
    });

    it('should update the location label when the user reloads', async () => {
        expect(spectator.element.textContent).not.toContain(
            'COMMON.WORK_HOURS_SICK',
        );
        const date = format(Date.now(), 'yyyy-MM-dd');
        setCurrentUser(
            new StaffUser({
                ...test_user,
                work_overrides: {
                    [date]: {
                        day_of_week: today as WorktimePreference['day_of_week'],
                        blocks: [
                            { start_time: 0, end_time: 12, location: 'sick' },
                            { start_time: 12, end_time: 24, location: 'wfh' },
                        ],
                    },
                },
            }),
        );
        // No manual change detection, as in a zoneless app
        await spectator.fixture.whenStable();
        expect(spectator.element.textContent).toContain(
            'COMMON.WORK_HOURS_SICK',
        );
    });

    it('should show an error and keep the overrides when the save fails', async () => {
        const snackbar = {
            open: vi.fn(() => ({
                onAction: () => ({ subscribe: () => undefined }),
                dismiss: () => undefined,
            })),
        };
        setNotifyOutlet(snackbar as never);
        vi.mocked(users.update).mockRejectedValue(new Error('500'));

        await spectator.component.setLocation(1, 'sick');

        expect(snackbar.open).toHaveBeenCalled();
        expect(spectator.component.overrides()).toEqual({});
        expect(ts_client.users.current).not.toHaveBeenCalled();
    });

    it('should prune stale overrides when saving a new one', async () => {
        setCurrentUser(
            new StaffUser({
                ...test_user,
                work_overrides: {
                    '2020-01-01': {
                        day_of_week: 3,
                        blocks: [
                            { start_time: 9, end_time: 17, location: 'wfh' },
                        ],
                    },
                },
            }),
        );
        spectator = createComponent();
        await spectator.component.setLocation(0, 'wfh');
        const date = format(Date.now(), 'yyyy-MM-dd');
        expect(spectator.component.overrides()['2020-01-01']).toBeUndefined();
        expect(spectator.component.overrides()[date]).toBeTruthy();
        await settleUserReload();
    });
});
