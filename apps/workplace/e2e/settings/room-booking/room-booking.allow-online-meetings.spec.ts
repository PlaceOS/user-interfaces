// Setting: events.allow_online_meetings (docs/settings/workplace.md).
// Coverage: 1 unique setting, 2 scenarios.
// MeetingFlowDetailsComponent shows the Teams meeting settings-toggle only when
// the setting is true; it is the only settings-toggle on the details step. The
// toggle is never switched, so meeting_provider stays unset and nothing is sent.
import { expect } from '../../../../../e2e/support/fixtures';
import { openRoom, test, untouchedRoom } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });
for (const enabled of [false, true]) {
    test('room settings: events.allow_online_meetings ' + enabled + ' gates the Teams meeting toggle', async ({ staffPage, audit }) => {
        const details = await openRoom(staffPage, audit, { 'app.events.allow_online_meetings': enabled });
        const toggle = details.locator('settings-toggle');
        await expect(toggle).toHaveCount(enabled ? 1 : 0);
        if (enabled) {
            // Offered but off: the label text is not asserted (TEAMS_MEETING is
            // not in every locale).
            await expect(toggle.locator('button').first()).toBeVisible();
            await expect(toggle.locator('button').first()).toHaveAttribute('aria-checked', 'false');
        }
        await untouchedRoom(staffPage);
    });
}
