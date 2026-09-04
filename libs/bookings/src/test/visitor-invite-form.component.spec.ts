import { inject, Injector, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import {
    Booking,
    OrganisationService,
    settingSignal,
    SettingsService,
    User,
} from '@placeos/common';
import { createSettingsServiceMock } from '@placeos/common/tests';
import { MockModule, MockProvider, MockService } from 'ng-mocks';
import type { Mock } from 'vitest';

import { BookingFormService } from '../lib/booking-form.service';
import { generateBookingForm } from '../lib/booking.utilities';
import { VisitorInviteFormComponent } from '../lib/visitor-invite-form.component';

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

describe('VisitorInviteFormComponent', () => {
    let spectator: SpectatorRouting<VisitorInviteFormComponent>;
    const createComponent = createRoutingFactory({
        component: VisitorInviteFormComponent,
        shallow: true,
        providers: [
            {
                provide: BookingFormService,
                useFactory: () => {
                    // `generateBookingForm` calls `form()` which uses
                    // `inject()`, so it must run in an injection context.
                    const { model, form } = generateBookingForm(
                        new Booking(),
                        inject(Injector),
                    );
                    return MockService(BookingFormService, {
                        model,
                        form,
                        clearOldState: vi.fn(),
                        loadForm: vi.fn(),
                        setOptions: vi.fn(),
                        newForm: vi.fn(),
                        postForm: vi.fn(async () => new Booking()),
                        postFormForVisitorGroup: vi.fn(
                            async () => new Booking(),
                        ),
                    });
                },
            },
            MockProvider(
                OrganisationService as any,
                {
                    waitUntilInitialised: vi.fn(async () => {}),
                    active_buildings: signal([]),
                    buildings: [{ id: 'bld-1', name: 'Building One' }],
                    building: { id: 'bld-1', name: 'Building One' },
                    region: { id: 'reg-1', name: 'Region One' },
                } as any,
            ),
            MockProvider(SettingsService as any, createSettingsServiceMock()),
        ],
        imports: [
            ReactiveFormsModule,
            FormsModule,
            MockModule(MatFormFieldModule),
            MockModule(MatSelectModule),
            MockModule(MatInputModule),
            MockModule(MatAutocompleteModule),
            MockModule(MatCheckboxModule),
        ],
    });

    beforeEach(() => {
        settingSignal('visitors.duration_step').set(undefined);
        settingSignal('visitors.min_duration').set(undefined);
        settingSignal('visitors.max_duration').set(undefined);
        settingSignal('visitors.custom_duration_options').set(undefined);
        settingSignal('bookings.duration_step').set(15);
        settingSignal('bookings.min_duration').set(30);
        settingSignal('bookings.max_duration').set(180);
        settingSignal('bookings.custom_duration_options').set([]);
        spectator = createComponent();
    });

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should allow a configured 45 minute visitor duration below the minimum', () => {
        settingSignal('visitors.duration_step').set(30);
        settingSignal('visitors.min_duration').set(60);
        settingSignal('visitors.custom_duration_options').set([45]);

        expect(spectator.component.duration_step()).toBe(30);
        expect(spectator.component.min_duration()).toBe(60);
        expect(spectator.component.custom_duration_options()).toEqual([45]);
        expect(spectator.component.effective_min_duration()).toBe(45);
    });

    it('should filter visitor suggestions by the search term', () => {
        spectator.component.visitors.set([
            { email: 'alice@example.com', name: 'Alice', company: 'Acme' },
            { email: 'bob@example.com', name: 'Bob', company: 'Globex' },
        ] as any);

        spectator.component.search_term.set('glob');
        expect(
            spectator.component.filtered_visitors().map((v) => v.name),
        ).toEqual(['Bob']);

        spectator.component.search_term.set('alice');
        expect(
            spectator.component.filtered_visitors().map((v) => v.name),
        ).toEqual(['Alice']);
    });

    it('should populate the model when a suggested visitor is selected', () => {
        const service = spectator.inject(BookingFormService);
        spectator.component.setVisitor({
            email: 'carol@example.com',
            name: 'Carol',
            company: 'Initech',
            phone: '555',
            international: true,
        });
        expect(service.model().asset_id).toBe('carol@example.com');
        expect(service.model().asset_name).toBe('Carol');
        expect(service.model().company).toBe('Initech');
        expect(service.model().international).toBe(true);
    });

    it('should track international flag per visitor and update the assets', () => {
        const service = spectator.inject(BookingFormService);
        const visitor = new User({
            email: 'dave@example.com',
            name: 'Dave',
        });
        service.model.update((m) => ({ ...m, assets: [visitor] }));

        spectator.component.setVisitorInternational(visitor, true);

        expect(
            spectator.component.visitor_international()['dave@example.com'],
        ).toBe(true);
        expect(
            (service.model().assets[0] as any).extension_data?.international,
        ).toBe(true);
    });

    it('should not send invite when required fields are missing', async () => {
        const service = spectator.inject(BookingFormService);
        const done = vi.fn();
        spectator.component.done.subscribe(done);

        await spectator.component.sendInvite();

        expect(service.postForm).not.toHaveBeenCalled();
        expect(done).not.toHaveBeenCalled();
    });

    it('should load saved visitor suggestions and default reason on init', async () => {
        const settings = spectator.inject(SettingsService);
        (settings.get as Mock).mockImplementation((key: string) =>
            key === 'visitor-invitees'
                ? ['erin@example.com|Erin|Umbrella|1']
                : undefined,
        );

        await spectator.component.ngOnInit();

        expect(spectator.component.visitors()).toEqual([
            {
                email: 'erin@example.com',
                name: 'Erin',
                company: 'Umbrella',
                international: true,
            },
        ]);
        expect(spectator.inject(BookingFormService).model().title).toBe(
            'Visit',
        );
    });

    it('should book multiple visitors as a linked group', async () => {
        const service = spectator.inject(BookingFormService);
        const done = vi.fn();
        spectator.component.done.subscribe(done);
        spectator.component.multiple.set(true);
        await spectator.component.ngOnInit();
        service.model.update((m) => ({
            ...m,
            asset_id: 'multiple@place.tech',
            asset_name: 'Multiple Visitors',
            assets: [
                new User({
                    name: 'Visitor One',
                    email: 'visitor.one@example.com',
                }),
                new User({
                    name: 'Visitor Two',
                    email: 'visitor.two@example.com',
                }),
            ],
        }));

        await spectator.component.sendInvite();

        expect(service.postForm).not.toHaveBeenCalled();
        expect(service.postFormForVisitorGroup).toHaveBeenCalledTimes(1);
        expect(service.setOptions).toHaveBeenCalledWith(
            expect.objectContaining({ type: 'visitor', group: true }),
        );
        const { members } = (service.setOptions as Mock).mock.calls.at(-1)[0];
        expect(members.map((_) => _.email)).toEqual([
            'visitor.one@example.com',
            'visitor.two@example.com',
        ]);
        expect(done).toHaveBeenCalledWith(2);
        spectator.component.multiple.set(false);
    });
});
