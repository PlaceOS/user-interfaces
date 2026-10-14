import { Injector, signal, WritableSignal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import {
    BookingForm,
    BookingFormValue,
    BookingFormService,
    generateBookingForm,
} from '@placeos/bookings';
import { settingSignal, SettingsService, User } from '@placeos/common';
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
        settingSignal('visitors.allow_international', false).set(false);
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
            company: 'Initech',
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
            company: 'Initech',
            phone: '+61400111111',
        });
        expect(save_user_setting).toHaveBeenCalledWith('visitor-invitees', [
            'carol@place.tech|Carol|Initech|0|+61400111111',
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

    describe('international visitors', () => {
        const enableInternational = () =>
            settingSignal('visitors.allow_international', false).set(true);

        it('exposes the international setting for template display', () => {
            expect(spectator.component.allow_international()).toBe(false);
            enableInternational();
            expect(spectator.component.allow_international()).toBe(true);
        });

        it('hides the section when the setting is off', () => {
            model.update((m) => ({
                ...m,
                asset_id: 'alice@place.tech',
                asset_name: 'Alice Smith',
            }));
            spectator.detectChanges();
            expect(spectator.query('.international-visitors')).toBeNull();
        });

        it('hides the section when no visitor has been entered', () => {
            enableInternational();
            spectator.detectChanges();
            expect(spectator.query('.international-visitors')).toBeNull();
        });

        it('shows the section with the visitor name when the setting is on', () => {
            enableInternational();
            model.update((m) => ({
                ...m,
                asset_id: 'alice@place.tech',
                asset_name: 'Alice Smith',
            }));
            spectator.detectChanges();
            const names = spectator
                .queryAll('.international-visitors .visitor-name')
                .map((el) => el.textContent.trim());
            expect(names).toEqual(['Alice Smith']);
        });

        it('binds the single visitor checkbox to the booking flag', () => {
            enableInternational();
            model.update((m) => ({
                ...m,
                asset_id: 'alice@place.tech',
                asset_name: 'Alice Smith',
                international: true,
            }));
            spectator.detectChanges();
            const input = spectator.query(
                '.international-visitors input[type="checkbox"]',
            ) as HTMLInputElement;
            expect(input).toBeTruthy();
            expect(input.checked).toBe(true);
            input.click();
            spectator.detectChanges();
            expect(model().international).toBe(false);
        });

        it('lists group members alphabetically by first name', () => {
            enableInternational();
            options.set({ type: 'visitor', group: true });
            model.update((m) => ({
                ...m,
                asset_id: 'multiple@place.tech',
                assets: [
                    new User({ name: 'Zoe Amos', email: 'zoe@place.tech' }),
                    new User({ name: 'Adam Zeta', email: 'zeta@place.tech' }),
                    new User({ name: 'Adam Brown', email: 'adam@place.tech' }),
                ],
            }));
            spectator.detectChanges();
            const names = spectator
                .queryAll('.international-visitors .visitor-name')
                .map((el) => el.textContent.trim());
            expect(names).toEqual(['Adam Brown', 'Adam Zeta', 'Zoe Amos']);
            expect(
                spectator.queryAll('.international-visitors mat-checkbox')
                    .length,
            ).toBe(3);
        });

        it('stores a group member flag against that member only', () => {
            enableInternational();
            options.set({ type: 'visitor', group: true });
            model.update((m) => ({
                ...m,
                asset_id: 'multiple@place.tech',
                assets: [
                    new User({ name: 'Zoe Amos', email: 'zoe@place.tech' }),
                    new User({ name: 'Adam Brown', email: 'adam@place.tech' }),
                ],
            }));
            spectator.detectChanges();
            spectator.component.setInternational('adam@place.tech', true);
            const adam = (model().assets || []).find(
                (asset) => asset.email === 'adam@place.tech',
            );
            const zoe = (model().assets || []).find(
                (asset) => asset.email === 'zoe@place.tech',
            );
            expect(adam?.extension_data?.international).toBe(true);
            expect(zoe?.extension_data?.international).toBeFalsy();
        });

        it('reads a member flag back from the stored extension data', () => {
            enableInternational();
            options.set({ type: 'visitor', group: true });
            model.update((m) => ({
                ...m,
                asset_id: 'multiple@place.tech',
                assets: [
                    new User({
                        name: 'Zoe Amos',
                        email: 'zoe@place.tech',
                        extension_data: { international: true },
                    }),
                    new User({ name: 'Adam Brown', email: 'adam@place.tech' }),
                ],
            }));
            spectator.detectChanges();
            const flags = spectator
                .queryAll('.international-visitors input[type="checkbox"]')
                .map((input: HTMLInputElement) => input.checked);
            expect(flags).toEqual([false, true]);
        });

        it('stores the group flag when a checkbox is clicked', () => {
            enableInternational();
            options.set({ type: 'visitor', group: true });
            model.update((m) => ({
                ...m,
                asset_id: 'multiple@place.tech',
                assets: [
                    new User({ name: 'Zoe Amos', email: 'zoe@place.tech' }),
                    new User({ name: 'Adam Brown', email: 'adam@place.tech' }),
                ],
            }));
            spectator.detectChanges();
            const input = spectator.query(
                '.international-visitors input[type="checkbox"]',
            ) as HTMLInputElement;
            input.click();
            spectator.detectChanges();
            const adam = (model().assets || []).find(
                (asset) => asset.email === 'adam@place.tech',
            );
            const zoe = (model().assets || []).find(
                (asset) => asset.email === 'zoe@place.tech',
            );
            expect(adam?.extension_data?.international).toBe(true);
            expect(zoe?.extension_data?.international).toBeFalsy();
            expect(input.checked).toBe(true);
        });
    });
});
