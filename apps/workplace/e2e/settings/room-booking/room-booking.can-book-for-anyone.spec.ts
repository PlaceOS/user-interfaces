// Setting: events.can_book_for_anyone (docs/settings/workplace.md), legacy
// meeting form. Coverage: 1 unique setting, 3 scenarios.
// Only the legacy meeting form reads this setting
// (libs/events/src/lib/meeting-form-details.component.ts): the host user search
// field when true, which comes before the events.can_book_for_others host
// select. The routed new flow (meeting-flow-new) has no such field, so every
// scenario sets app.use_legacy_flows true and legacyFlowsGuard routes
// /#/book/meeting/form to the legacy form. Nothing is typed, chosen or sent;
// events.use_bookings true skips the calendar permission lookup, and the parent
// read-only guard fails any write.
import { expect } from '../../../../../e2e/support/fixtures';
import { prepare, test } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });
const SCENARIOS = [
    { anyone: false, others: false, search: 0, select: 0 },
    { anyone: true, others: false, search: 1, select: 0 },
    { anyone: true, others: true, search: 1, select: 0 },
];
for (const scenario of SCENARIOS) {
    test('room settings: events.can_book_for_anyone ' + scenario.anyone + ' with can_book_for_others ' +
        scenario.others + ' sets the legacy host field', async ({ staffPage, audit }) => {
        const fixture = await prepare(staffPage, audit, {
            'app.use_legacy_flows': true,
            'app.features': ['spaces'],
            'app.events.use_bookings': true,
            'app.catering.backend': 'native',
            'app.events.has_assets': false,
            'app.events.can_book_for_anyone': scenario.anyone,
            'app.events.can_book_for_others': scenario.others,
        });
        await staffPage.goto('/#/book/meeting/form');
        await fixture.ready();
        const details = staffPage.locator('meeting-flow-form meeting-form-details');
        await expect(details).toHaveCount(1);
        await expect(details.locator('input#title')).toBeEditable();
        await expect(staffPage.locator('meeting-flow-new')).toHaveCount(0);
        await expect(details.locator('a-user-search-field')).toHaveCount(scenario.search);
        await expect(details.locator('host-select-field')).toHaveCount(scenario.select);
        if (scenario.search) await expect(details.locator('a-user-search-field input').first()).toBeVisible();
        await expect(staffPage.locator('meeting-flow-confirm, meeting-flow-success')).toHaveCount(0);
    });
}
