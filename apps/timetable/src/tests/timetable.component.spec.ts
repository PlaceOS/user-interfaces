import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import { OrganisationService, SettingsService, Space } from '@placeos/common';
import { SpacesService } from '@placeos/events';
import { isOnline } from '@placeos/ts-client';
import { MockProvider } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';

import { AppTimetableComponent } from '../app/timetable.component';

vi.mock('@placeos/ts-client', { spy: true });

describe('AppTimetableComponent', () => {
    let spectator: SpectatorRouting<AppTimetableComponent>;
    /** Values returned by `SettingsService.get` */
    let settings: Record<string, unknown> = {};
    let space_list: Space[] = [];
    const time_format = signal<'h:mm a' | 'HH:mm'>('h:mm a');
    const createComponent = createRoutingFactory({
        component: AppTimetableComponent,
        detectChanges: false,
        providers: [
            MockProvider(SettingsService, {
                get: <T>(key: string) => settings[key] as T,
                initialised: new BehaviorSubject(true),
                time_format_signal: time_format,
            }),
            MockProvider(OrganisationService, {
                active_building: signal(null),
                waitUntilInitialised: vi.fn().mockResolvedValue(undefined),
            }),
            MockProvider(SpacesService, {
                initialised: signal(true),
                find: (id: string) => space_list.find((_) => _.id === id),
                filter: (predicate: (_: Space) => boolean) =>
                    space_list.filter(predicate),
            }),
        ],
    });

    /** Create the component with the query params and wait for `ngOnInit` */
    async function init(query: Record<string, string> = {}) {
        const on_init = vi.spyOn(AppTimetableComponent.prototype, 'ngOnInit');
        spectator = createComponent({ queryParams: query });
        // Runs `ngOnInit` and the `toObservable` effect for `SpacesService`
        TestBed.tick();
        const calls = on_init.mock.results.map(({ value }) => value);
        on_init.mockRestore();
        expect(calls).toHaveLength(1);
        await calls[0];
        return spectator.component;
    }

    beforeEach(() => {
        settings = {};
        space_list = [];
        time_format.set('h:mm a');
        vi.mocked(isOnline).mockReturnValue(true);
    });

    afterEach(() => {
        vi.useRealTimers();
        document.body.classList.remove('eink');
    });

    describe('query parameters', () => {
        it('should list sys_ids in order, then bookable zone spaces by name', async () => {
            const space = (id: string, name: string, data = {}) =>
                new Space({ id, name, bookable: true, zones: ['z1'], ...data });
            space_list = [
                space('zulu', 'Zulu'),
                space('alpha', 'Alpha'),
                space('closed', 'Closed', { bookable: false }),
                space('other', 'Other', { zones: ['z2'] }),
                space('listed', 'Listed'),
            ];

            const component = await init({
                sys_ids: 'listed, unknown ,other,',
                zone_ids: 'z1',
            });

            expect(component.columns().map(({ id }) => id)).toEqual([
                'listed',
                'other',
                'alpha',
                'zulu',
                'unknown',
            ]);
            expect(component.missing_ids()).toEqual(['unknown']);
        });

        it.each([
            [{}, {}, { eink: false, page_interval: 20 }],
            [
                { 'app.page_interval': -5 },
                {},
                { eink: false, page_interval: 0 },
            ],
            [
                { 'app.page_interval': 'x' },
                {},
                { eink: false, page_interval: 0 },
            ],
            [{ 'app.eink_mode': true }, {}, { eink: true, page_interval: 60 }],
            [
                { 'app.eink_mode': true, 'app.page_interval': 0 },
                {},
                { eink: true, page_interval: 0 },
            ],
            [
                { 'app.eink_mode': true, 'app.page_interval': 90 },
                { eink: 'false' },
                { eink: false, page_interval: 90 },
            ],
            [
                { 'app.page_interval': 30 },
                { eink: 'true' },
                { eink: true, page_interval: 60 },
            ],
        ])(
            'should read e-ink mode and page interval from %o and query %o',
            async (values, query, expected) => {
                settings = values;
                const component = await init(query);

                expect({
                    eink: component.eink(),
                    page_interval: component.page_interval(),
                }).toEqual(expected);
            },
        );

        it.each([
            [undefined, undefined, 0, 24],
            [8.7, 18, 8, 10],
            [25, 3, 23, 1],
            [-4, 30, 0, 24],
            [10, 6, 10, 1],
        ])(
            'should limit hours from block_start %s and block_end %s',
            async (block_start, block_end, offset, length) => {
                settings = {
                    'app.block_start': block_start,
                    'app.block_end': block_end,
                };
                const component = await init();

                expect(component.offset()).toBe(offset);
                expect(component.length()).toBe(length);
                expect(component.hours()).toEqual(
                    Array.from({ length }, (_, i) => offset + i),
                );
            },
        );
    });

    describe('timers', () => {
        const start = new Date(2026, 0, 1, 10, 0, 30);
        // jsdom has no `scrollBy`
        const scroll = vi.fn();
        const original_scroll = Element.prototype.scrollBy;

        beforeAll(() => (Element.prototype.scrollBy = scroll));
        afterAll(() => (Element.prototype.scrollBy = original_scroll));

        beforeEach(() => {
            scroll.mockClear();
            vi.useFakeTimers({ now: start });
        });

        it('should scroll to the current time after load and after user input stops', async () => {
            const component = await init();

            vi.advanceTimersByTime(500);
            expect(scroll).toHaveBeenCalledTimes(1);

            component.onInteraction();
            vi.advanceTimersByTime(2 * 60 * 1000 - 1);
            expect(scroll).toHaveBeenCalledTimes(1);
            vi.advanceTimersByTime(1);
            expect(scroll).toHaveBeenCalledTimes(2);
            expect(scroll).toHaveBeenLastCalledWith(
                expect.objectContaining({ behavior: 'smooth' }),
            );
        });

        it('should record when the connection drops and clear it on reconnect', async () => {
            const component = await init();
            vi.mocked(isOnline).mockReturnValue(false);

            vi.advanceTimersByTime(2000);
            const offline_at = start.valueOf() + 2000;
            expect(component.offline_since()).toBe(offline_at);

            vi.advanceTimersByTime(2000);
            expect(component.offline_since()).toBe(offline_at);

            vi.mocked(isOnline).mockReturnValue(true);
            vi.advanceTimersByTime(2000);
            expect(component.offline_since()).toBe(0);
        });

        it('should change page after the interval and wait after user input', async () => {
            settings = { 'app.page_interval': 20 };
            space_list = [new Space({ id: 'a' }), new Space({ id: 'b' })];
            const component = await init({ sys_ids: 'a,b' });
            // Room for one column
            component.grid_width.set(400);

            vi.advanceTimersByTime(18_000);
            expect(component.current_page()).toBe(0);
            vi.advanceTimersByTime(2000);
            expect(component.current_page()).toBe(1);

            vi.advanceTimersByTime(10_000);
            component.onInteraction();
            vi.advanceTimersByTime(18_000);
            expect(component.current_page()).toBe(1);
            vi.advanceTimersByTime(2000);
            expect(component.current_page()).toBe(0);
        });

        it('should not change page at night', async () => {
            settings = {
                'app.page_interval': 20,
                'app.night_mode': true,
                'app.block_start': 12,
                'app.block_end': 18,
            };
            space_list = [new Space({ id: 'a' }), new Space({ id: 'b' })];
            const component = await init({ sys_ids: 'a,b' });
            component.grid_width.set(400);

            vi.advanceTimersByTime(60_000);
            expect(component.night()).toBe(true);
            expect(component.current_page()).toBe(0);
        });

        it('should update e-ink panels once per minute', async () => {
            const component = await init({ eink: 'true' });
            spectator.detectChanges();
            expect(document.body.classList).toContain('eink');

            vi.advanceTimersByTime(2000);
            expect(component.date()).toBe(new Date(2026, 0, 1, 10).valueOf());
        });
    });

    describe('template', () => {
        it('should label hours in the configured clock format', async () => {
            settings = { 'app.block_start': 8, 'app.block_end': 14 };
            await init();
            spectator.detectChanges();
            const labels = () =>
                spectator
                    .queryAll('[hour] [text]')
                    .map((_) => _.textContent.replace(/\s+/g, ' ').trim());

            // The first hour has no label, as it sits on the top edge
            expect(labels()).toEqual([
                '',
                '9 AM',
                '10 AM',
                '11 AM',
                '12 PM',
                '1 PM',
            ]);

            time_format.set('HH:mm');
            spectator.detectChanges();
            expect(labels()).toEqual([
                '',
                '09:00',
                '10:00',
                '11:00',
                '12:00',
                '13:00',
            ]);
        });

        it('should show a placeholder for unknown spaces and for no spaces', async () => {
            await init({ sys_ids: 'unknown-id' });
            spectator.detectChanges();
            expect('[missing]').toContainText('Space not found');
            expect('[missing]').toContainText('unknown-id');

            spectator.component.missing_ids.set([]);
            spectator.detectChanges();
            expect('[missing]').not.toExist();
            expect(spectator.element).toContainText(
                'No spaces have been selected',
            );
        });
    });

    it('should position the current-time marker within the configured period', () => {
        spectator = createComponent();
        spectator.component.date.set(new Date(2026, 0, 1, 10).valueOf());
        spectator.component.offset.set(9);
        spectator.component.length.set(8);

        expect(spectator.component.current_offset()).toBe(12.5);
    });

    it('should split columns into pages that fit the grid', () => {
        spectator = createComponent();
        const { component } = spectator;
        component.spaces.set(
            ['a', 'b', 'c', 'd', 'e'].map((id) => ({ id }) as Space),
        );
        component.missing_ids.set(['unknown']);
        component.page_interval.set(20);
        // Room for four 320px columns after the 64px hour column
        component.grid_width.set(64 + 4 * 320 + 10);

        expect(component.page_count()).toBe(2);
        component.page.set(1);
        expect(component.visible_columns().map(({ id }) => id)).toEqual([
            'e',
            'unknown',
        ]);
        expect(component.page_padding().length).toBe(2);

        component.page_interval.set(0);
        expect(component.visible_columns().length).toBe(6);
    });

    it('should cover the grid at night and shift the UI unless e-ink', () => {
        spectator = createComponent();
        const { component } = spectator;
        component.offset.set(8);
        component.length.set(10);
        component.night_mode.set(true);
        component.burn_in_protection.set(true);

        component.date.set(new Date(2026, 0, 1, 20).valueOf());
        expect(component.night()).toBe(true);
        component.date.set(new Date(2026, 0, 1, 10).valueOf());
        expect(component.night()).toBe(false);

        expect(component.pixel_shift()).toMatch(/^translate\(/);
        component.eink.set(true);
        expect(component.pixel_shift()).toBeNull();
    });
});
