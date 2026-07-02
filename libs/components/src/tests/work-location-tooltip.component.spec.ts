import { MatDialog } from '@angular/material/dialog';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import {
    LocaleService,
    StaffUser,
    currentUser,
    reloadUserData,
} from '@placeos/common';
import { updateUser } from '@placeos/ts-client';
import { format } from 'date-fns';

jest.mock('@placeos/ts-client', () => ({
    ...jest.requireActual('@placeos/ts-client'),
    updateUser: jest.fn(async () => ({})),
}));

jest.mock('@placeos/common', () => ({
    ...jest.requireActual('@placeos/common'),
    currentUser: jest.fn(),
    reloadUserData: jest.fn(),
}));

import { WFHSettingsModalComponent } from 'libs/users/src/lib/wfh-settings-modal.component';
import { WorkLocationTooltipComponent } from '../lib/work-location-tooltip.component';

describe('WorkLocationTooltipComponent', () => {
    let spectator: Spectator<WorkLocationTooltipComponent>;
    const today = new Date().getDay();
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

    beforeEach(() => {
        jest.clearAllMocks();
        jest.mocked(currentUser).mockReturnValue(test_user);
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it("should render blocks for today's work preference", () => {
        expect(spectator.component.active_preference.blocks).toHaveLength(2);
        expect(spectator.queryAll('button[aria-haspopup="menu"]')).toHaveLength(2);
        expect('p.text-center').not.toExist();
    });

    it('should show an empty state when today has no work blocks', () => {
        jest.mocked(currentUser).mockReturnValue(
            new StaffUser({
                id: 'user-1',
                work_preferences: [],
                work_overrides: {},
            }),
        );
        spectator = createComponent();
        expect('p.text-center').toExist();
        expect(spectator.element.textContent).toContain('event_busy');
        expect(spectator.queryAll('button[aria-haspopup="menu"]')).toHaveLength(0);
    });

    it('should open the WFH settings modal to edit preferences', () => {
        const open_spy = jest
            .spyOn(MatDialog.prototype, 'open')
            .mockReturnValue(null);
        spectator.click('button[icon]');
        expect(open_spy).toHaveBeenCalledWith(WFHSettingsModalComponent);
    });

    it('should save a location override for the selected block', async () => {
        await spectator.component.setLocation(1, 'sick');
        const date = format(Date.now(), 'yyyy-MM-dd');
        expect(spectator.component.overrides()[date].blocks[1].location).toBe(
            'sick',
        );
        expect(spectator.component.overrides()[date].blocks[0].location).toBe(
            'wfo',
        );
        expect(updateUser).toHaveBeenCalledWith(
            'user-1',
            expect.objectContaining({
                work_overrides: expect.objectContaining({
                    [date]: expect.anything(),
                }),
            }),
        );
        expect(reloadUserData).toHaveBeenCalled();
    });

    it('should prune stale overrides when saving a new one', async () => {
        jest.mocked(currentUser).mockReturnValue(
            new StaffUser({
                ...test_user,
                work_overrides: {
                    '2020-01-01': {
                        day_of_week: 3,
                        blocks: [
                            { start_time: 9, end_time: 17, location: 'wfh' },
                        ],
                    },
                } as any,
            }),
        );
        spectator = createComponent();
        await spectator.component.setLocation(0, 'wfh');
        const date = format(Date.now(), 'yyyy-MM-dd');
        expect(spectator.component.overrides()['2020-01-01']).toBeUndefined();
        expect(spectator.component.overrides()[date]).toBeTruthy();
    });
});
