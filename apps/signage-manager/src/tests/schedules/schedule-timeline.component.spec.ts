import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { SignagePlaylist } from '@placeos/ts-client';
import { ScheduleTimelineComponent } from '../../app/schedules/schedule-timeline.component';
import {
    ScheduleTimelineRow,
    TimelineBlock,
} from '../../app/schedules/signage-schedule.util';

function block(overrides: Partial<TimelineBlock> = {}): TimelineBlock {
    return {
        playlist: { id: 'pl-1', name: 'News', enabled: true } as any,
        day_index: 1,
        start_minutes: 540,
        duration_minutes: 120,
        all_day: false,
        takeover: false,
        bg_color: '#dbeafe',
        text_color: '#1e40af',
        label: '09:00 – 11:00',
        lane: 0,
        ...overrides,
    };
}

function row(
    overrides: Partial<ScheduleTimelineRow> = {},
): ScheduleTimelineRow {
    return {
        id: 'd-1',
        name: 'Foyer',
        subtitle: '',
        icon: 'tv',
        route: ['/displays', 'd-1'],
        blocks: [],
        lane_count: 1,
        search_index: '',
        ...overrides,
    };
}

describe('ScheduleTimelineComponent', () => {
    let fixture: ComponentFixture<ScheduleTimelineComponent>;

    function make(rows: ScheduleTimelineRow[] = []) {
        fixture = TestBed.createComponent(ScheduleTimelineComponent);
        fixture.componentRef.setInput('rows', rows);
        return fixture.componentInstance;
    }

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ScheduleTimelineComponent],
            providers: [provideRouter([])],
        }).compileComponents();
    });

    afterEach(() => fixture?.destroy());

    it('places blocks in their lanes and grows the row to fit', () => {
        const component = make([
            row({
                lane_count: 3,
                blocks: [
                    block({ lane: 0 }),
                    block({
                        lane: 1,
                        playlist: new SignagePlaylist({ id: 'b' }),
                    }),
                    block({
                        lane: 2,
                        playlist: new SignagePlaylist({ id: 'c' }),
                    }),
                ],
            }),
        ]);
        const [view] = component.view_rows();

        expect(view.blocks.map(({ top }) => top)).toEqual([
            0.375, 3.625, 6.875,
        ]);
        expect(view.height).toBe(10.5);
    });

    it('sizes blocks by the minutes they cover on screen', () => {
        const component = make([
            row({
                blocks: [
                    block({ start_minutes: 720, duration_minutes: 5 }),
                    block({ start_minutes: 0, all_day: true }),
                ],
            }),
        ]);
        const [short, all_day] = component.view_rows()[0].blocks;

        expect(short.left).toBe(50);
        expect(short.width).toBe(1.04);
        expect(all_day.width).toBe(100);
    });

    it('describes takeover, approval and source in text, not colour only', () => {
        const component = make([
            row({
                blocks: [
                    block({
                        takeover: true,
                        source_type: 'zone',
                        source_label: 'Level 1',
                    }),
                ],
            }),
        ]);
        fixture.componentRef.setInput('playlist_approval_status', {
            'pl-1': false,
        });
        const [view] = component.view_rows()[0].blocks;

        expect(view.bg_color).toBe('#fef3c7');
        expect(view.aria_label).toBe(
            'Foyer, News, 09:00 – 11:00, Takeover playback, Awaiting approval, via Level 1',
        );
    });

    it('shows a takeover label on takeover blocks', async () => {
        make([
            row({
                blocks: [
                    block(),
                    block({
                        takeover: true,
                        playlist: new SignagePlaylist({ id: 'b' }),
                    }),
                ],
            }),
        ]);
        await fixture.whenStable();
        const blocks: HTMLElement[] = Array.from(
            fixture.nativeElement.querySelectorAll('[schedule-block]'),
        );

        expect(
            blocks.map((item) =>
                item.textContent.includes('Takeover playback'),
            ),
        ).toEqual([false, true]);
    });

    it('describes display status in text and never shows an invalid date', async () => {
        const now = Math.floor(Date.now() / 1000);
        const component = make([
            row({ id: 'online', signage_last_seen: now }),
            row({ id: 'offline', signage_last_seen: now - 3600 }),
            row({ id: 'never' }),
        ]);
        const statuses = component.row_status();
        await fixture.whenStable();

        expect(statuses.get('online')?.online).toBe(true);
        expect(statuses.get('offline')?.online).toBe(false);
        expect(statuses.get('never')?.label).toBe('Offline · Never seen');
        const status = fixture.nativeElement.querySelector('[row-status]');
        expect(status.getAttribute('tabindex')).toBe('0');
        expect(status.getAttribute('aria-label')).toBeTruthy();
    });

    it('does not report connectivity in the zones view', () => {
        const component = make([row({ signage_last_seen: 1 })]);
        fixture.componentRef.setInput('view_tab', 'zones');
        expect(component.row_status().size).toBe(0);
    });

    it('formats an hour into a lowercase am/pm label', () => {
        const component = make();
        expect(component.formatHour(0).toLowerCase()).toContain('am');
        expect(component.formatHour(13).toLowerCase()).toContain('pm');
    });
});
