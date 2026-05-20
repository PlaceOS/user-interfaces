import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { BookingFormService } from '@placeos/bookings';
import { SettingsService } from '@placeos/common';
import { ActivatedRoute } from '@angular/router';
import { NEVER, of } from 'rxjs';
import { VisitorFlowNewComponent } from 'apps/workplace/src/app/book/visitor-flow-new/visitor-flow.component';

describe('VisitorFlowNewComponent', () => {
    let spectator: SpectatorRouting<VisitorFlowNewComponent>;
    let form: FormGroup;
    let save_user_setting: jest.Mock;
    let clear_form: jest.Mock;
    let dialog_open: jest.Mock;
    let dialog_close: jest.Mock;

    const createComponent = createRoutingFactory({
        component: VisitorFlowNewComponent,
        shallow: true,
        providers: [
            {
                provide: BookingFormService,
                useFactory: () => {
                    form = new FormGroup({
                        id: new FormControl(''),
                        title: new FormControl('Visit'),
                        description: new FormControl(''),
                        asset_name: new FormControl(''),
                        asset_id: new FormControl(''),
                        company: new FormControl(''),
                        phone: new FormControl(''),
                        assets: new FormControl([]),
                    });
                    return {
                        form,
                        view: () => 'details',
                        booking: null,
                        last_count: 0,
                        setOptions: jest.fn(),
                        setView: jest.fn(),
                        clearForm: (...args: any[]) => clear_form(...args),
                        loadGroupSiblings: jest.fn(async () => []),
                    };
                },
            },
            {
                provide: SettingsService,
                useValue: {
                    get: jest.fn(() => []),
                    saveUserSetting: (...args: any[]) =>
                        save_user_setting(...args),
                },
            },
            {
                provide: ActivatedRoute,
                useValue: {
                    paramMap: of({
                        has: () => false,
                        get: () => null,
                    }),
                },
            } as any,
            {
                provide: MatDialog,
                useValue: {
                    open: (...args: any[]) => dialog_open(...args),
                },
            },
        ],
        mocks: [],
    });

    beforeEach(() => {
        save_user_setting = jest.fn();
        clear_form = jest.fn();
        dialog_close = jest.fn();
        dialog_open = jest.fn(() => ({
            componentInstance: { event: of({ reason: 'done' }) },
            afterClosed: () => NEVER,
            close: dialog_close,
        }));
        spectator = createComponent({ detectChanges: false });
    });

    it('should show visit details heading when creating a booking', () => {
        expect(spectator.component.visit_heading()).toBe(
            'BOOKINGS.VISITOR_TIME_HEADER',
        );
    });

    it('should show edit visitor details heading in the visit details section when editing a booking', () => {
        form.patchValue({ id: 'visitor-booking-3' });

        expect(spectator.component.visit_heading()).toBe(
            'BOOKINGS.EDIT_VISITOR_DETAILS',
        );
    });

    it('should save visitor phone in recent visitors history', () => {
        form.patchValue({
            asset_id: 'visitor.one@example.com',
            asset_name: 'Visitor One',
            company: 'Acme',
            phone: '+61400111222',
        });

        (spectator.component as any)._saveRecentVisitors(false);

        expect(save_user_setting).toHaveBeenCalledWith('visitor-invitees', [
            'visitor.one@example.com|Visitor One|Acme|+61400111222',
        ]);
    });

    it('should allow navigation without prompting when the edit form has no unsaved changes', async () => {
        form.patchValue({ id: 'visitor-booking-3' });

        await expect(spectator.component.canDeactivate()).resolves.toBe(true);

        expect(dialog_open).not.toHaveBeenCalled();
        expect(clear_form).not.toHaveBeenCalled();
    });

    it('should discard dirty edit state after confirming navigation', async () => {
        form.patchValue({ id: 'visitor-booking-3' });
        form.markAsDirty();

        await expect(spectator.component.canDeactivate()).resolves.toBe(true);

        expect(dialog_open).toHaveBeenCalled();
        expect(dialog_close).toHaveBeenCalled();
        expect(clear_form).toHaveBeenCalled();
    });

    it('should keep dirty edit state when navigation is cancelled', async () => {
        dialog_open.mockReturnValue({
            componentInstance: { event: NEVER },
            afterClosed: () => of(null),
            close: jest.fn(),
        });
        form.patchValue({ id: 'visitor-booking-3' });
        form.markAsDirty();

        await expect(spectator.component.canDeactivate()).resolves.toBe(false);

        expect(clear_form).not.toHaveBeenCalled();
    });
});
