import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CalendarEvent, MAP_FEATURE_DATA, Space } from '@placeos/common';
import { UserPipe } from 'libs/users/src/lib/user.pipe';
import { MockPipe } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';

import { CustomTooltipComponent } from 'libs/components/src/lib/custom-tooltip.component';
import { startTestPlaceClient } from 'libs/components/src/tests/test-place-client';
import {
    ExploreSpaceInfoComponent,
    SpaceInfoStatus,
} from '../lib/explore-space-info.component';

describe('ExploreSpaceInfoComponent privacy', () => {
    const hide_details = new BehaviorSubject<boolean | undefined>(false);
    const hide_title = new BehaviorSubject<boolean | undefined>(false);
    const status = signal<SpaceInfoStatus>('busy');
    const events = signal<CalendarEvent[]>([]);

    beforeEach(() => {
        status.set('busy');
        events.set([
            new CalendarEvent({
                title: 'Confidential meeting',
                host: 'host@example.test',
                date: Date.now(),
                duration: 60,
            }),
        ]);
        hide_details.next(false);
        hide_title.next(false);
        // A driver binding follows its subject while it is bound.
        // `undefined` is a setting that has not arrived.
        startTestPlaceClient().bind.mockImplementation((target, listener) => {
            const value =
                target.name === 'hide_meeting_title'
                    ? hide_title
                    : hide_details;
            const subscription = value.subscribe((v) => {
                if (v !== undefined) listener({ kind: 'value', value: v });
            });
            return () => subscription.unsubscribe();
        });
        TestBed.configureTestingModule({
            imports: [ExploreSpaceInfoComponent],
            providers: [
                {
                    provide: MAP_FEATURE_DATA,
                    useValue: {
                        space: signal(
                            new Space({
                                id: 'space-privacy',
                                name: 'Test room',
                            }),
                        ),
                        events,
                        status,
                    },
                },
            ],
        }).overrideComponent(ExploreSpaceInfoComponent, {
            remove: { imports: [UserPipe] },
            add: { imports: [MockPipe(UserPipe, () => Promise.resolve(null))] },
        });
    });

    afterEach(() => {
        TestBed.resetTestingModule();
        vi.restoreAllMocks();
    });

    async function openTooltip() {
        const fixture = TestBed.createComponent(ExploreSpaceInfoComponent);
        fixture.componentInstance.show_event_details.set(true);
        await fixture.whenStable();
        const tooltip = fixture.debugElement
            .query(By.directive(CustomTooltipComponent))
            .injector.get(CustomTooltipComponent);
        tooltip.open();
        await new Promise((resolve) => setTimeout(resolve, 75));
        await fixture.whenStable();
        return fixture;
    }

    it.each([
        [false, false],
        [true, false],
        [false, true],
        [true, true],
    ])(
        'applies hide details=%s and hide title=%s to the tooltip',
        async (details, title) => {
            hide_details.next(details);
            hide_title.next(title);
            const fixture = await openTooltip();
            const text = document.querySelector(
                '[name="space-info"]',
            )?.textContent;
            expect(text).toContain('Test room');
            expect(text).toContain('Free');
            expect(text?.includes('Confidential meeting')).toBe(!title);
            expect(text?.includes('host@example.test')).toBe(!details);
            fixture.destroy();
        },
    );

    it('keeps meeting information hidden until privacy settings arrive', async () => {
        hide_details.next(undefined);
        hide_title.next(undefined);
        const fixture = await openTooltip();
        const tooltip = document.querySelector('[name="space-info"]');
        expect(tooltip?.textContent).not.toContain('Confidential meeting');
        expect(tooltip?.textContent).not.toContain('host@example.test');
        expect(tooltip?.textContent).toContain('Free');

        hide_details.next(false);
        hide_title.next(false);
        await fixture.whenStable();
        expect(tooltip?.textContent).toContain('Confidential meeting');
        expect(tooltip?.textContent).toContain('host@example.test');
        fixture.destroy();
    });

    it('updates an open tooltip and releases driver subscriptions on destroy', async () => {
        const fixture = await openTooltip();
        const tooltip = document.querySelector('[name="space-info"]');
        expect(tooltip?.textContent).toContain('Confidential meeting');
        expect(tooltip?.textContent).toContain('host@example.test');

        hide_details.next(true);
        hide_title.next(true);
        await fixture.whenStable();
        expect(tooltip?.textContent).not.toContain('Confidential meeting');
        expect(tooltip?.textContent).not.toContain('host@example.test');
        expect(tooltip?.textContent).toContain('Free');

        hide_details.next(false);
        hide_title.next(false);
        await fixture.whenStable();
        expect(tooltip?.textContent).toContain('Confidential meeting');
        expect(tooltip?.textContent).toContain('host@example.test');

        fixture.componentInstance.show_event_details.set(false);
        await fixture.whenStable();
        expect(tooltip?.textContent).not.toContain('Confidential meeting');
        expect(tooltip?.textContent).not.toContain('host@example.test');
        fixture.componentInstance.show_event_details.set(true);
        fixture.destroy();
        expect(hide_details.observed).toBe(false);
        expect(hide_title.observed).toBe(false);
    });

    it('should show status and booking changes without a new component', async () => {
        const fixture = await openTooltip();
        const tooltip = document.querySelector('[name="space-info"]');
        expect(tooltip?.querySelector('[status]')?.className).toContain('busy');

        status.set('free');
        events.set([]);
        await fixture.whenStable();
        expect(tooltip?.querySelector('[status]')?.className).toContain('free');
        expect(tooltip?.textContent).not.toContain('Confidential meeting');
        fixture.destroy();
    });
});
