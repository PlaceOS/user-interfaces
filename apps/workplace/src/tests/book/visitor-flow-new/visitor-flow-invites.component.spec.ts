import { Injector, signal, WritableSignal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import {
    BookingForm,
    BookingFormValue,
    BookingFormService,
    generateBookingForm,
} from '@placeos/bookings';
import { settingSignal, SettingsService } from '@placeos/common';
import { mockComponent } from '@placeos/common/tests';
import { UserListFieldComponent } from '@placeos/form-fields';

import { VisitorFlowInvitesComponent } from '../../../app/book/visitor-flow-new/visitor-flow-invites.component';

describe('VisitorFlowInvitesComponent', () => {
    let spectator: Spectator<VisitorFlowInvitesComponent>;
    let options: WritableSignal<any>;
    let form: BookingForm;
    let model: WritableSignal<BookingFormValue>;
    let stored_visitors: string[];
    let save_user_setting: any;

    const createComponent = createComponentFactory({
        component: VisitorFlowInvitesComponent,
        declarations: [mockComponent(UserListFieldComponent)],
        providers: [
            {
                provide: SettingsService,
                useValue: {
                    get: vi.fn((key: string) =>
                        key === 'visitor-invitees' ? stored_visitors : undefined,
                    ),
                    saveUserSetting: (...args: any[]) =>
                        save_user_setting(...args),
                },
            },
            {
                provide: BookingFormService,
                useFactory: () => {
                    options = signal<any>({ type: 'visitor', group: false });
                    const injector = TestBed.inject(Injector);
                    const refs = TestBed.runInInjectionContext(() =>
                        generateBookingForm(undefined, injector),
                    );
                    form = refs.form;
                    model = refs.model;
                    model.update((m) => ({
                        ...m,
                        id: '',
                        title: '',
                        description: '',
                        asset_id: '',
                        asset_name: '',
                        company: '',
                        phone: '',
                        assets: [],
                    }));
                    return { form, model, options };
                },
            },
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        stored_visitors = [];
        save_user_setting = vi.fn();
        settingSignal('visitors.allow_pass_number', false).set(false);
        settingSignal('bookings.multiple_visitors', false).set(false);
        spectator = createComponent({ detectChanges: false });
    });

    it('treats the form as single-visitor mode when not grouped', () => {
        options.set({ type: 'visitor', group: false });
        expect(spectator.component.is_single()).toBe(true);
    });

    it('treats the form as multi-visitor mode when grouped', () => {
        options.set({ type: 'visitor', group: true });
        expect(spectator.component.is_single()).toBe(false);
    });

    it('defaults the booking title and description on init when empty', () => {
        spectator.component.ngOnInit();
        expect(model().title).toBe('Visit');
        expect(model().description).toBe('Visit');
    });

    it('does not overwrite an existing booking title on init', () => {
        model.update((m) => ({ ...m, id: 'booking-1', title: 'Client Visit' }));
        spectator.component.ngOnInit();
        expect(model().title).toBe('Client Visit');
    });

    it('seeds a placeholder asset id when initialising in group mode', () => {
        options.set({ type: 'visitor', group: true });
        spectator.component.ngOnInit();
        expect(model().asset_id).toBe('multiple@place.tech');
    });

    it('parses and de-duplicates recent visitors from settings on init', () => {
        stored_visitors = [
            'Alice@Place.Tech|Alice|Acme|+61400000001',
            'bob@place.tech|Bob|Globex|+61400000002',
            'alice@place.tech|Alice Again|Acme|+61400000003',
        ];
        spectator.component.ngOnInit();
        const visitors = spectator.component.visitors();
        expect(visitors).toHaveLength(2);
        const alice = visitors.find((v) => v.email === 'alice@place.tech');
        expect(alice).toBeTruthy();
        expect(alice.name).toBe('Alice Again');
    });

    it('filters recent visitors by the current search term', () => {
        stored_visitors = [
            'alice@place.tech|Alice|Acme|',
            'bob@place.tech|Bob|Globex|',
        ];
        spectator.component.ngOnInit();
        spectator.component.search_term.set('globex');
        expect(spectator.component.filtered_visitors()).toHaveLength(1);
        expect(spectator.component.filtered_visitors()[0].email).toBe(
            'bob@place.tech',
        );
    });

    it('applies a selected visitor to the booking model', () => {
        spectator.component.setVisitor({
            email: 'Carol@Place.Tech',
            name: 'Carol',
            organisation: 'Initech',
            phone: '+61400111111',
        });
        expect(model().asset_id).toBe('carol@place.tech');
        expect(model().asset_name).toBe('Carol');
        expect(model().company).toBe('Initech');
        expect(model().phone).toBe('+61400111111');
    });

    it('records the selected visitor in the recent visitor history', () => {
        spectator.component.setVisitor({
            email: 'carol@place.tech',
            name: 'Carol',
            organisation: 'Initech',
            phone: '+61400111111',
        });
        expect(save_user_setting).toHaveBeenCalledWith('visitor-invitees', [
            'carol@place.tech|Carol|Initech|+61400111111',
        ]);
    });

    it('ignores a selection with no resolvable email', () => {
        spectator.component.setVisitor({ name: 'Nobody' });
        expect(model().asset_id).toBe('');
        expect(save_user_setting).not.toHaveBeenCalled();
    });

    it('exposes the pass-number setting for template display', () => {
        expect(spectator.component.allow_pass_number()).toBe(false);
        settingSignal('visitors.allow_pass_number', false).set(true);
        expect(spectator.component.allow_pass_number()).toBe(true);
    });
});
