import { FormControl, FormGroup } from '@angular/forms';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { createRoutingFactory, Spectator } from '@ngneat/spectator/jest';
import { BookingFormService } from '@placeos/bookings';
import {
    Building,
    BuildingLevel,
    Desk,
    OrganisationService,
} from '@placeos/organisation';
import { PlaceZone } from '@placeos/ts-client';
import { NewDeskFlowConfirmComponent } from 'apps/workplace/src/app/book/new-desk-flow/new-desk-flow-confirm.component';

describe('NewDeskFlowConfirmComponent', () => {
    let spectator: Spectator<NewDeskFlowConfirmComponent>;
    const createComponent = createRoutingFactory({
        component: NewDeskFlowConfirmComponent,
        providers: [
            {
                provide: BookingFormService,
                useValue: {
                    form: new FormGroup({
                        date: new FormControl(new Date()),
                        duration: new FormControl(60),
                        assets: new FormControl([]),
                        booking_asset: new FormControl(
                            new Desk({
                                id: '1',
                                name: 'Desk name',
                                features: ['sitting'],
                                zone: new PlaceZone({
                                    id: '1',
                                    parent_id: '2',
                                }),
                            })
                        ),
                    }),
                    postForm: jest.fn(),
                },
            },
            {
                provide: OrganisationService,
                useValue: {
                    buildings: [new Building({ id: '2', name: 'Block A' })],
                    levels: [new BuildingLevel({ id: '1', name: 'L1' })],
                },
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
