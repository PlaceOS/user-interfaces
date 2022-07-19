import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { Asset } from '@placeos/assets';
import { BookingFormService, generateBookingForm } from '@placeos/bookings';
import { OrganisationService } from '@placeos/organisation';
import { NewDeskFlowConfirmComponent } from 'apps/workplace/src/app/book/new-desk-flow/new-desk-flow-confirm.component';

describe('NewDeskFlowConfirmComponent', () => {
    let spectator: SpectatorRouting<NewDeskFlowConfirmComponent>;
    const createComponent = createRoutingFactory({
        component: NewDeskFlowConfirmComponent,
        providers: [
            {
                provide: BookingFormService,
                useValue: {
                    form: generateBookingForm(),
                    postForm: jest.fn(),
                },
            },
            {
                provide: OrganisationService,
                useValue: {},
            },
            {
                provide: MatBottomSheetRef,
                useValue: { dismiss: jest.fn() },
            },
            { provide: MatDialog, useValue: { open: jest.fn() } },
        ],
        declarations: [],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should show desk details', () => expect('[details]').toExist());

    it('should show assets if available', () => {
        expect('[assets]').not.toExist();
        spectator.inject(BookingFormService).form.patchValue({assets: [new Asset()]});
        spectator.detectChanges();
        expect('[assets]').toExist();
    })

    it('should allow posting booking', () => {
        expect('button[confirm]').toExist();
        spectator.click('button[confirm]');
        expect(
            spectator.inject(BookingFormService).postForm
        ).toHaveBeenCalledTimes(1);
        expect(
            spectator.inject(MatBottomSheetRef).dismiss
        ).toHaveBeenCalledWith(true);
    });

    it('should allow closing', () => {
        spectator.setInput({ show_close: true });
        expect('button[close]').toExist();
        spectator.click('button[close]');
        expect(spectator.inject(MatBottomSheetRef).dismiss).toBeCalled();
    });
});
