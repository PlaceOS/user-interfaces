import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { Asset } from '@placeos/assets';
import { BookingFormService, generateBookingForm } from '@placeos/bookings';
import { SettingsService } from '@placeos/common';
import { IconComponent } from '@placeos/components';
import { OrganisationService } from '@placeos/organisation';
import { NewDeskFlowConfirmComponent } from 'apps/workplace/src/app/book/new-desk-flow/new-desk-flow-confirm.component';
import { MockComponent, MockProvider } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';

describe('NewDeskFlowConfirmComponent', () => {
    let spectator: SpectatorRouting<NewDeskFlowConfirmComponent>;
    const createComponent = createRoutingFactory({
        component: NewDeskFlowConfirmComponent,
        providers: [
            MockProvider(BookingFormService, {
                form: generateBookingForm(),
                postForm: jest.fn(),
                options: new BehaviorSubject<any>({}),
            }),
            MockProvider(OrganisationService, {}),
            MockProvider(MatBottomSheetRef, { dismiss: jest.fn() }),
            MockProvider(MatDialog, { open: jest.fn() }),
            MockProvider(SettingsService, {
                get: jest.fn(),
                time_format: 'h:mm a',
            }),
        ],
        declarations: [MockComponent(IconComponent)],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should show desk details', () => expect('[details]').toExist());

    it('should show assets if available', () => {
        expect('[request]').not.toExist();
        spectator
            .inject(BookingFormService)
            .form.patchValue({ assets: [new Asset()] });
        spectator.detectChanges();
        expect('[assets]').toExist();
    });

    it('should allow posting booking', async () => {
        expect('button[name="confirm-desk"]').toExist();
        spectator.click('button[name="confirm-desk"]');
        await spectator.fixture.whenStable();
        expect(
            spectator.inject(BookingFormService).postForm
        ).toHaveBeenCalledTimes(1);
        expect(
            spectator.inject(MatBottomSheetRef).dismiss
        ).toHaveBeenCalledWith(true);
    });

    it('should allow closing', () => {
        spectator.setInput({ show_close: true });
        expect('button[name="close-desk-confirm"]').toExist();
        spectator.click('button[name="close-desk-confirm"]');
        expect(spectator.inject(MatBottomSheetRef).dismiss).toBeCalled();
    });
});
