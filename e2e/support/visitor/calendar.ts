/**
 * Driving the `date-calendar` widget.
 *
 * The same widget appears twice in the flows this suite covers — the schedule's
 * sidebar, and behind the date button on the invite form — so the awkward part
 * is written once here.
 *
 * WHY IT IS AWKWARD: the grid is 42 day cells with nothing on them but a day
 * number, and day numbers repeat (the 1st of next month sits in the same grid as
 * the 1st of this one). The month label and the weekday headings are locale
 * text, so they cannot be matched on either.
 *
 * What CAN be relied on: exactly one cell carries the "today" ring, drawn from a
 * value the component captured when the page loaded, and the cells are
 * consecutive days. So read that one cell, work out which real date it means,
 * and count from there.
 */
import { Locator, Page, expect } from '@playwright/test';

const DAY_MS = 86_400_000;

/**
 * Whole days from one moment to another, counted in LOCAL calendar days.
 *
 * Rounded rather than truncated because a DST boundary makes a day 23 or 25
 * hours long, and the grid still advances by exactly one cell.
 */
export function daysApart(from_ms: number, to_ms: number): number {
    const from = new Date(from_ms);
    const to = new Date(to_ms);
    from.setHours(0, 0, 0, 0);
    to.setHours(0, 0, 0, 0);
    return Math.round((to.valueOf() - from.valueOf()) / DAY_MS);
}

/**
 * Click the cell for `timestamp_ms` in an already-visible calendar.
 *
 * `calendar` must be the `date-calendar` element itself, so this works whether
 * it is inline (the schedule) or inside an overlay (the invite form).
 */
export async function pickCalendarDay(
    page: Page,
    calendar: Locator,
    timestamp_ms: number,
    options: {
        /**
         * True for a calendar that lives in a pop-up and closes when a day is
         * clicked — the invite form's. The clicked cell is then gone, so the
         * pop-up closing is what proves the click landed. The schedule's
         * calendar is permanent and marks the day instead.
         */
        closes_on_pick?: boolean;
    } = {},
): Promise<number> {
    await expect(
        calendar,
        'the calendar is not on screen — the schedule renders it only in `day` ' +
            'period and from the `sm` breakpoint up, and the invite form only ' +
            'once its date button has been clicked',
    ).toBeVisible({ timeout: 30_000 });

    const cells = calendar.locator('button[name="schedule-set-date"]');
    // The ring is the only child div carrying `border-secondary`; every cell
    // also holds a plain ripple div, so the class matters.
    const today_index = await cells.evaluateAll((els) =>
        els.findIndex((el) => !!el.querySelector('div.border-secondary')),
    );
    if (today_index < 0) {
        throw new Error(
            'no "today" cell in the calendar, so there is nothing to count from. ' +
                'The grid only marks today while it is showing this month, and ' +
                'nothing here navigates months.',
        );
    }

    const day_of_month = Number(
        ((await cells.nth(today_index).textContent()) ?? '').trim(),
    );
    const browser_now = await page.evaluate(() => Date.now());
    // The ring means the day the PAGE loaded, which is today unless the run has
    // just crossed midnight, in which case it means yesterday.
    const anchor = [0, -1]
        .map((offset) => {
            const day = new Date(browser_now);
            day.setHours(0, 0, 0, 0);
            day.setDate(day.getDate() + offset);
            return day;
        })
        .find((day) => day.getDate() === day_of_month);
    if (!anchor) {
        throw new Error(
            `the calendar marks day ${day_of_month} as today, which is neither ` +
                `today nor yesterday by the browser clock ` +
                `(${new Date(browser_now).toString()}). The two should never be more ` +
                `than a midnight apart.`,
        );
    }

    const index = today_index + daysApart(anchor.valueOf(), timestamp_ms);
    const count = await cells.count();
    if (index < 0 || index >= count) {
        throw new Error(
            `${new Date(timestamp_ms).toDateString()} is outside the ${count} days the ` +
                `calendar is showing. Only the displayed month and a few days either ` +
                `side can be reached; anything further needs the ` +
                `\`schedule-next-month\`/\`schedule-previous-month\` chevrons first ` +
                `(whose names are the wrong way round — the "next" one goes back).`,
        );
    }

    const cell = cells.nth(index);
    await expect(
        cell,
        `the calendar will not accept ${new Date(timestamp_ms).toDateString()} — the ` +
            'cell is disabled, so a `from`/`to` bound is in the way',
    ).toBeEnabled();
    await cell.click();
    if (options.closes_on_pick) {
        await expect(
            calendar,
            'the date pop-up stayed open, so the day was probably not accepted',
        ).toBeHidden({ timeout: 10_000 });
        return index;
    }
    // `bg-secondary` is how the component marks the selected day. Waiting on it
    // proves the click landed before anything reads the result.
    await expect(cell, 'the calendar did not select the day').toHaveClass(/bg-secondary/);
    return index;
}

/** Which cell the calendar currently shows as selected, or -1. */
export async function selectedCalendarIndex(calendar: Locator): Promise<number> {
    return calendar
        .locator('button[name="schedule-set-date"]')
        .evaluateAll((els) => els.findIndex((el) => el.className.includes('bg-secondary')));
}

/** The day number written on a cell, for diagnostics. */
export async function calendarDayLabel(
    calendar: Locator,
    index: number,
): Promise<string> {
    if (index < 0) return 'none';
    const text = await calendar
        .locator('button[name="schedule-set-date"]')
        .nth(index)
        .textContent();
    return (text ?? '').trim() || 'blank';
}
