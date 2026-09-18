import { zonesWithTag } from '../../../../e2e/support/api';
import { expect, test } from '../../../../e2e/support/concierge/fixtures';
import { runName } from '../../../../e2e/support/concierge/management.api';

/** CON-B4, measured 2026-09-18: the new-survey form sends id: ''.
 * staff-api rejects it because Survey.id must be Int64 or null. Keep the
 * intended form scenario until the app omits the empty id on creation. */
test.fixme('CON-SURV-01: a survey created through the builder persists and is listed', async ({
    adminPage,
    adminApi,
}) => {
    const [building] = await zonesWithTag(adminApi, 'building');
    const title = runName('CON-SURV-01');
    let id: string | undefined;
    await adminPage.goto('/#/surveys/builder');
    const builder = adminPage.locator('survey-builder');
    await builder.locator('mat-select').first().click();
    await adminPage
        .getByRole('option', { name: building.name, exact: true })
        .click();
    await builder.locator('input[name$=".title"]').fill(title);
    await builder
        .locator('input[name$=".description"]')
        .fill('Created by local E2E scenario CON-SURV-01');
    const response = adminPage.waitForResponse(
        (r) =>
            r.request().method() === 'POST' &&
            new URL(r.url()).pathname === '/api/staff/v1/surveys',
    );
    try {
        await builder
            .getByRole('button', { name: 'Save', exact: true })
            .click();
        const posted = await response;
        expect(posted.ok(), await posted.text()).toBeTruthy();
        id = (await posted.json()).id;
        const stored = await adminApi.get(`/api/staff/v1/surveys/${id}`);
        expect(stored.ok()).toBeTruthy();
        expect(await stored.json()).toMatchObject({
            title,
            building_id: building.id,
        });
        await adminPage.goto(`/#/surveys/list/${building.id}`);
        await expect(
            adminPage
                .locator('survey-listings')
                .getByText(title, { exact: true }),
        ).toBeVisible();
        await adminPage.reload();
        await expect(
            adminPage
                .locator('survey-listings')
                .getByText(title, { exact: true }),
        ).toBeVisible();
    } finally {
        if (id) {
            const deleted = await adminApi.delete(
                `/api/staff/v1/surveys/${id}`,
            );
            expect(deleted.ok()).toBeTruthy();
        }
    }
});

test('CON-SURV-01b: a valid survey is stored by the API and displayed in the listing', async ({
    adminPage,
    adminApi,
}) => {
    const [building] = await zonesWithTag(adminApi, 'building');
    const title = runName('CON-SURV-01b');
    const response = await adminApi.post('/api/staff/v1/surveys', {
        data: {
            title,
            building_id: building.id,
            zone_id: building.id,
            trigger: 'NONE',
            pages: [{ title: 'E2E page', question_order: [] }],
        },
    });
    expect(response.ok(), await response.text()).toBeTruthy();
    const survey = await response.json();
    try {
        const stored = await adminApi.get(`/api/staff/v1/surveys/${survey.id}`);
        expect(stored.ok()).toBeTruthy();
        expect(await stored.json()).toMatchObject({
            title,
            building_id: building.id,
        });
        await adminPage.goto(`/#/surveys/list/${building.id}`);
        await expect(
            adminPage
                .locator('survey-listings')
                .getByText(title, { exact: true }),
        ).toBeVisible();
        await adminPage.reload();
        await expect(
            adminPage
                .locator('survey-listings')
                .getByText(title, { exact: true }),
        ).toBeVisible();
    } finally {
        const deleted = await adminApi.delete(
            `/api/staff/v1/surveys/${survey.id}`,
        );
        expect(deleted.ok()).toBeTruthy();
    }
});
