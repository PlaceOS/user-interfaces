import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScheduleTimelineComponent } from '../../app/schedules/schedule-timeline.component';
import {
    ScheduleBlock,
    ScheduleTimelineRow,
} from '../../app/schedules/signage-schedule.util';

function block(overrides: Partial<ScheduleBlock> = {}): ScheduleBlock {
    return {
        playlist: { id: 'pl-1', name: 'News', enabled: true } as any,
        day_index: 0,
        start_minutes: 540,
        duration_minutes: 120,
        all_day: false,
        bg_color: '#dbeafe',
        text_color: '#1e40af',
        label: '9:00am - 11:00am',
        ...overrides,
    };
}

function row(overrides: Partial<ScheduleTimelineRow> = {}): ScheduleTimelineRow {
    return {
        id: 'd-1',
        name: 'Foyer',
        description: '',
        subtitle: '',
        icon: 'tv',
        route: ['/displays', 'd-1'],
        blocks: [],
        search_index: '',
        updated_at: 0,
        ...overrides,
    };
}

describe('ScheduleTimelineComponent', () => {
    let fixture: ComponentFixture<ScheduleTimelineComponent>;

    function make() {
        fixture = TestBed.createComponent(ScheduleTimelineComponent);
        fixture.componentRef.setInput('selected_date', new Date());
        return fixture.componentInstance;
    }

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ScheduleTimelineComponent],
        })
            .overrideComponent(ScheduleTimelineComponent, {
                set: { template: '' },
            })
            .compileComponents();
    });

    it('converts minutes-into-day to a horizontal percentage', () => {
        const component = make();
        expect(component.timeToOffset(720)).toBe(50);
        expect(component.timeToOffset(0)).toBe(0);
        expect(component.timeToOffset(-30)).toBe(0);
    });

    it('clamps a block duration to a single day when converting width', () => {
        const component = make();
        expect(component.durationToOffset(720)).toBe(50);
        expect(component.durationToOffset(3000)).toBe(100);
        expect(component.durationToOffset(-10)).toBe(0);
    });

    it('renders all-day blocks across the whole timeline', () => {
        const component = make();
        expect(component.visibleDuration(block({ all_day: true }))).toBe(1440);
    });

    it('enforces a minimum visible duration and trims overrun past midnight', () => {
        const component = make();
        expect(
            component.visibleDuration(
                block({ start_minutes: 600, duration_minutes: 5 }),
            ),
        ).toBe(15);
        expect(
            component.visibleDuration(
                block({ start_minutes: 1380, duration_minutes: 120 }),
            ),
        ).toBe(60);
    });

    it('detects blocks awaiting approval', () => {
        const component = make();
        fixture.componentRef.setInput('playlist_approval_status', {
            'pl-1': false,
        });
        expect(component.requiresApproval(block())).toBe(true);

        fixture.componentRef.setInput('playlist_approval_status', {
            'pl-1': true,
        });
        expect(component.requiresApproval(block())).toBe(false);
    });

    it('uses amber colours for blocks awaiting approval, else the block palette', () => {
        const component = make();
        const item = block({ bg_color: '#d1fae5', text_color: '#065f46' });

        fixture.componentRef.setInput('playlist_approval_status', {
            'pl-1': false,
        });
        expect(component.blockBackgroundColor(item)).toBe('#fef3c7');
        expect(component.blockTextColor(item)).toBe('#92400e');
        expect(component.blockBorderColor(item)).toBe('#f59e0b');

        fixture.componentRef.setInput('playlist_approval_status', {});
        expect(component.blockBackgroundColor(item)).toBe('#d1fae5');
        expect(component.blockTextColor(item)).toBe('#065f46');
        expect(component.blockBorderColor(item)).toBe('#065f46');
    });

    it('reports display connectivity from the last-seen timestamp', () => {
        const component = make();
        fixture.componentRef.setInput('view_tab', 'displays');
        const recent = row({ signage_last_seen: Math.floor(Date.now() / 1000) });
        const stale = row({
            signage_last_seen: Math.floor(Date.now() / 1000) - 3600,
        });
        expect(component.displayRowStatus(recent)).toBe('success');
        expect(component.displayRowStatus(stale)).toBe('error');
    });

    it('does not report connectivity in the zones view', () => {
        const component = make();
        fixture.componentRef.setInput('view_tab', 'zones');
        expect(
            component.displayRowStatus(
                row({ signage_last_seen: Math.floor(Date.now() / 1000) }),
            ),
        ).toBe('');
    });

    it('builds an aria label from the row, playlist and time', () => {
        const component = make();
        expect(component.blockAriaLabel(row(), block())).toBe(
            'Foyer, News, 9:00am - 11:00am',
        );
        expect(
            component.blockAriaLabel(row(), block({ all_day: true })),
        ).toContain('Foyer, News,');
    });

    it('only clears the hovered row when it matches the leaving row', () => {
        const component = make();
        component.hovered_row.set(2);
        component.clearHoveredRow(1);
        expect(component.hovered_row()).toBe(2);
        component.clearHoveredRow(2);
        expect(component.hovered_row()).toBe(-1);
    });

    it('formats an hour into a lowercase am/pm label', () => {
        const component = make();
        expect(component.formatHour(0).toLowerCase()).toContain('am');
        expect(component.formatHour(13).toLowerCase()).toContain('pm');
    });
});
