
import { expect } from '../../../../../e2e/support/fixtures';
import { durationOptions, futureDuration, test, untouchedVisitor, visitor } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });
// VisitorFlowDetailsComponent: visitors.min/max_duration || bookings.min/max_duration.
// Test each global key independently; current/default duration is put on-grid first.
// Tested values avoid the code defaults (bookings.min_duration 30, max_duration 180),
// so an ignored key changes the list, and no two cases share the same overrides.
for (const [key,value,expected] of [
    ['min_duration',60,[60,90,120]], ['min_duration',90,[90,120]],
    ['max_duration',120,[30,60,90,120]], ['max_duration',150,[30,60,90,120,150]],
] as const) {
    test('booking settings: bookings.'+key+' '+value+' bounds visitor fallback duration options', async ({staffPage,audit}) => {
        const form=await visitor(staffPage,audit,{
            'app.visitor.min_duration':null, 'app.visitor.max_duration':null,
            'app.visitors.min_duration':null, 'app.visitors.max_duration':null,
            'app.bookings.min_duration':key==='min_duration'?value:30,
            'app.bookings.max_duration':key==='max_duration'?value:120,
            'app.visitors.duration_step':30,
            'app.visitor.custom_duration_options':null, 'app.visitors.custom_duration_options':null,
            'app.bookings.custom_duration_options':[],
        });
        await futureDuration(staffPage,form);
        await durationOptions(staffPage,form);
        const length=expected[0];
        await staffPage.locator('.cdk-overlay-container button[data-duration="'+length+'"]').click();
        await form.root.locator('a-time-field[name="time"] button[time-field]').click();
        await staffPage.locator('.cdk-overlay-container button[data-time="11:00"]').click();
        const options=await durationOptions(staffPage,form);
        expect(await options.evaluateAll(rows=>rows.map(row=>Number(row.getAttribute('data-duration'))))).toEqual([...expected]);
        await staffPage.keyboard.press('Escape');
        await expect(form.root.locator('a-duration-field button[duration-field]')).toBeEnabled();
        await untouchedVisitor(form);
    });
}
