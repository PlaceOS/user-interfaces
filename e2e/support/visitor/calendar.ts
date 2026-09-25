/**
 * Driving the `date-calendar` widget.
 *
 * The same widget appears twice in the flows this suite covers — the schedule's
 * sidebar, and behind the date button on the invite form — so the awkward part
 * is written once here.
 *
 * Day numbers repeat across adjacent months. Resolve the displayed month from
 * its header and anchor it to the rendered, in-month day 1. Its actual position
 * respects the configured week start without parsing translated weekday labels.
 * Re-resolve after selection because the component may rebuild the month grid.
 * Month headers must remain parseable by Date.parse; distant-month navigation
 * is deliberately left to callers.
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

export async function calendarIndexForDate(
    calendar: Locator,
    timestamp_ms: number,
): Promise<number> {
    const month_label = (
        (await calendar.locator('button').first().textContent()) ?? ''
    ).trim();
    const month_start = new Date(Date.parse(`1 ${month_label}`));
    if (Number.isNaN(month_start.valueOf())) {
        throw new Error(
            `the calendar month header is not a parseable month: "${month_label}"`,
        );
    }
    month_start.setHours(0, 0, 0, 0);
    const first_index = await calendar
        .locator('button[name="schedule-set-date"]')
        .evaluateAll((cells) =>
            cells.findIndex(
                (cell) =>
                    cell.textContent?.trim() === '1' &&
                    !cell.classList.contains('text-base-300!'),
            ),
        );
    if (first_index < 0) {
        throw new Error('the calendar has no in-month day 1 to count from');
    }

    return first_index + daysApart(month_start.valueOf(), timestamp_ms);
}

/**
 * Click the cell for `timestamp_ms` in an already-visible calendar.
 *
 * `calendar` must be the `date-calendar` element itself, so this works whether
 * it is inline (the schedule) or inside an overlay (the invite form).
 */
export async function pickCalendarDay(
    _page: Page,
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
): Promise<void> {
    await expect(
        calendar,
        'the calendar is not on screen — the schedule renders it only in `day` ' +
            'period and from the `sm` breakpoint up, and the invite form only ' +
            'once its date button has been clicked',
    ).toBeVisible({ timeout: 30_000 });

    const cells = calendar.locator('button[name="schedule-set-date"]');
    const count = await cells.count();
    const index = await calendarIndexForDate(calendar, timestamp_ms);
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
        return;
    }

    // The calendar can replace all 42 buttons while the schedule reloads. Do
    // not assert against the old `nth(index)` locator: resolve the selected
    // cell again and compare its full local date after the re-render.
    await expect(async () => {
        const selected = await calendar
            .locator('button[name="schedule-set-date"]')
            .evaluateAll((els) =>
                els.findIndex((el) => el.className.includes('bg-secondary')),
            );
        expect(selected, 'the calendar did not select a date').toBe(
            await calendarIndexForDate(calendar, timestamp_ms),
        );
    }).toPass({ timeout: 10_000 });
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
