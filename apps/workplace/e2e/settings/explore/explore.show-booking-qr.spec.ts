/**
 * User-owned Setting: explore.show_booking_qr
 * Exact runtime key: app.explore.show_booking_qr
 * Coverage: 1 unique Setting / 2 scenarios
 * ExploreSpacesService.bookSpace chooses ExploreBookQrComponent or
 * ExploreBookingModalComponent after verifying the live room is free.
 * Both paths call EventFormService.newForm, which starts room/rule/calendar
 * and availability GETs. Native availability is pinned and fulfilled as [].
 * A short real map click opens the selected dialog; Save is never clicked.
 * True: loaded local QR image and selected room. False: editable title and
 * selected room in the booking dialog. Both are dismissed using Escape.
 *
 * app.booking_qr_path is a held local control, not covered: the component
 * concatenates origin + path and substitutes the room EMAIL for {{id}}.
 * This does not verify the default path, scan a QR, or follow its destination.
 * Escape avoids relying on the QR component's missing dialog-close import.
 *
 * Source: libs/explore/src/lib/explore-spaces.service.ts;
 * libs/explore/src/lib/explore-book-qr.component.ts;
 * libs/explore/src/lib/explore-booking-modal.component.ts:ngOnInit/save;
 * libs/events/src/lib/event-form.service.ts;
 * libs/bookings/src/lib/bookings.fn.ts.
 *
 * Safety: settings-harness browserOnlyTest. Fresh empty storage, synthetic
 * staff and auth (fake bearer), every API/auth GET answered in the browser,
 * no request or socket forwarded to a backend. Only exact AreaManagement/Bookings
 * bind/unbind tuples are accepted; commands, mutations, redirects and
 * unexpected requests fail the strict teardown audit.
 */
import { expect, type Page } from '@playwright/test';
import {
    browserGet,
    browserOnlyTest,
    type ControlAudit,
    controlAudit,
    controlSocket,
    type DebugWindow,
    exploreBindings,
    exploreRoomReady,
    exploreRoomValues,
    exploreValues,
    openSyntheticExplore,
    roomState,
    type Settings,
    syntheticExplore,
    validPeriod,
} from '../support/settings-harness';

const FAKE_BEARER = 'browser-only-zone-settings-not-a-valid-credential';
const EXPLORE = syntheticExplore('e2e-show-booking-qr-');
const { COLOUR, ROOM, ROOM_FILL, hasParams } = EXPLORE;
const LIVE = EXPLORE.LIVE;
const BASE: Settings = {
    ...EXPLORE.BASE,
    'app.events.use_bookings': true,
    'app.booking_qr_path': '/#/explore?space={{id}}',
    'app.events.allow_all_day': false,
    'app.events.has_assets': false, 'app.events.can_book_for_others': false,
    'app.events.bookable_hours': null, 'app.events.booking_unavailable': false,
    'app.explore.colors': { 'zone-free': COLOUR,
        'space-free': ROOM_FILL, 'space-busy': ROOM_FILL },
};

type Audit = ControlAudit & { room_values: Record<string, unknown> };
const test = browserOnlyTest<Audit>({
    audit: () => ({ ...controlAudit(), room_values: exploreRoomValues() }),
    socket: controlSocket<Audit>({
        bearer: FAKE_BEARER,
        values: exploreValues(EXPLORE, LIVE),
    }),
});

async function openExplore(page: Page, audit: Audit, override: Settings) {
    return openSyntheticExplore(page, audit, EXPLORE, {
        settings: { ...BASE, ...override },
        bearer: FAKE_BEARER,
        rooms: [ROOM],
        // EventFormService.newForm() starts its native availability loader even
        // when the selected dialog is the QR variant. No Save is ever clicked.
        gets: () => browserGet(page, (url) => {
            const period_start = url.searchParams.get('period_start') ?? '';
            const period_end = url.searchParams.get('period_end') ?? '';
            return url.pathname === '/api/staff/v1/bookings' && validPeriod(url) &&
                hasParams(url, { type: 'room', period_start, period_end });
        }, () => {
            audit.fixtures['native room availability'] =
                (audit.fixtures['native room availability'] ?? 0) + 1;
            return [];
        }),
        delivered: exploreBindings(EXPLORE, LIVE, audit.room_values),
    });
}

for (const enabled of [true, false]) {
    test('explore.show_booking_qr=' + enabled + ' opens only the selected room dialog',
        async ({ isolated: { page, audit } }) => {
            await openExplore(page, audit, { 'app.explore.show_booking_qr': enabled });
            const feature = await exploreRoomReady(page, audit.room_values, EXPLORE);
            await expect.poll(async () => (await roomState(page)).events).toHaveLength(0);
            // The renderer must have installed this exact room's actions before
            // clicking it; a visible room alone does not prove action readiness.
            await expect.poll(() => page.locator('explore-map-view').evaluate((element, id) => {
                const view = (window as DebugWindow).ng?.getComponent(element) as {
                    actions(): { id: string; action: string }[];
                } | undefined;
                if (!view) throw new Error('Read-only map actions unavailable');
                return view.actions().filter((action) => action.id === id)
                    .map((action) => action.action).sort();
            }, ROOM.map_id)).toEqual(['mousedown', 'mouseup', 'touchend', 'touchstart']);
            await expect(page.locator('mat-dialog-container')).toHaveCount(0);
            // Down/up is shorter than the source's 300 ms panning threshold.
            await feature.click({ position: { x: 10, y: 10 }, delay: 30 });
            const dialog = page.locator('mat-dialog-container');
            await expect(dialog).toHaveCount(1);
            await expect(dialog).toBeVisible();
            const qr_dialog = dialog.locator('explore-book-qr');
            const booking_dialog = dialog.locator('explore-booking-modal');
            if (enabled) {
                await expect(qr_dialog).toBeVisible();
                await expect(qr_dialog.locator('h2')).toContainText(ROOM.name);
                const image = qr_dialog.locator('main img');
                await expect(image).toHaveCount(1);
                await expect(image).toBeVisible();
                await expect(image).toHaveAttribute('src', /^data:image\/svg\+xml,/);
                await expect.poll(() => image.evaluate((element) => {
                    const image = element as HTMLImageElement;
                    return image.complete && image.naturalWidth > 0 && image.naturalHeight > 0;
                })).toBe(true);
                await expect(booking_dialog).toHaveCount(0);
            } else {
                await expect(booking_dialog).toBeVisible();
                await expect(booking_dialog.locator('[load]')).toHaveCount(0);
                await expect(booking_dialog.locator('input#title')).toBeEditable();
                await expect(booking_dialog.locator('[name="space"]')).toHaveText(ROOM.name);
                await expect(qr_dialog).toHaveCount(0);
            }
            await expect.poll(() => audit.fixtures['native room availability'] ?? 0)
                .toBeGreaterThan(0);
            await page.keyboard.press('Escape');
            await expect(dialog).toHaveCount(0);
            await expect(page).toHaveURL(/#\/explore$/);
            await expect(page.locator('explore-map-view')).toBeVisible();
        });
}

