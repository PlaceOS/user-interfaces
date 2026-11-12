import { Injector } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import {
    OrganisationService,
    setCurrentUser,
    settingSignal,
    SettingsService,
} from '@placeos/common';
import { EventFormService, generateEventForm } from '@placeos/events';
import {
    DateFieldComponent,
    DurationFieldComponent,
    HostSelectFieldComponent,
    RecurrenceFieldComponent,
    TimeFieldComponent,
    UserSearchFieldComponent,
} from '@placeos/form-fields';
import { MockComponents, MockProvider } from 'ng-mocks';
import { MeetingFlowDetailsComponent } from '../../../app/book/meeting-flow-new/meeting-flow-details.component';

const FIELDS = [
    DateFieldComponent,
    DurationFieldComponent,
    HostSelectFieldComponent,
    RecurrenceFieldComponent,
    TimeFieldComponent,
    UserSearchFieldComponent,
];

describe('MeetingFlowDetailsComponent', () => {
    let spectator: Spectator<MeetingFlowDetailsComponent>;

    const createComponent = createComponentFactory({
        component: MeetingFlowDetailsComponent,
        detectChanges: false,
        overrideComponents: [
            [
                MeetingFlowDetailsComponent,
                {
                    remove: { imports: FIELDS },
                    add: { imports: MockComponents(...FIELDS) },
                },
            ],
        ],
        providers: [
            {
                provide: EventFormService,
                useFactory: () => {
                    const injector = TestBed.inject(Injector);
                    const refs = TestBed.runInInjectionContext(() =>
                        generateEventForm(undefined, undefined, injector),
                    );
                    return {
                        model: refs.model,
                        form: refs.form,
                        filters: () => ({}),
                        is_multiday: false,
                        setFilters: vi.fn(),
                    };
                },
            },
            MockProvider(SettingsService, {
                get: vi.fn(() => false),
                signal: vi.fn(() => () => false),
            } as any),
            MockProvider(OrganisationService, {
                building: { timezone: '' },
            } as any),
            MockProvider(Router),
            MockProvider(ActivatedRoute, {}),
        ],
    });

    function render(anyone: boolean, others: boolean) {
        settingSignal('events.can_book_for_anyone').set(anyone);
        settingSignal('events.can_book_for_others').set(others);
        spectator = createComponent();
        spectator.detectChanges();
    }

    beforeEach(() => setCurrentUser({ email: 'me@example.com' } as any));

    afterEach(() => {
        settingSignal('events.can_book_for_anyone').set(false);
        settingSignal('events.can_book_for_others').set(false);
    });

    it.each([
        { anyone: false, others: false, search: 0, select: 0 },
        { anyone: true, others: false, search: 1, select: 0 },
        { anyone: true, others: true, search: 1, select: 0 },
        { anyone: false, others: true, search: 0, select: 1 },
    ])(
        'shows the host field for can_book_for_anyone $anyone and can_book_for_others $others',
        ({ anyone, others, search, select }) => {
            render(anyone, others);
            expect(spectator.queryAll('a-user-search-field')).toHaveLength(
                search,
            );
            expect(spectator.queryAll('host-select-field')).toHaveLength(
                select,
            );
        },
    );
});
