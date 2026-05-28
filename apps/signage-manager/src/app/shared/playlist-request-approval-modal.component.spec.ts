import { TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PlaylistRequestApprovalModalComponent } from './playlist-request-approval-modal.component';

describe('PlaylistRequestApprovalModalComponent', () => {
    const dialog_ref = { close: jest.fn() };

    beforeEach(async () => {
        jest.clearAllMocks();
        await TestBed.configureTestingModule({
            imports: [PlaylistRequestApprovalModalComponent],
            providers: [
                {
                    provide: MAT_DIALOG_DATA,
                    useValue: {
                        playlist: { id: 'playlist-1', name: 'Lobby Loop' },
                        approvers: [
                            { id: 'person-1', name: 'Person One' },
                            { id: 'person-2', name: 'Person Two' },
                        ],
                    },
                },
                { provide: MatDialogRef, useValue: dialog_ref },
            ],
        }).compileComponents();
    });

    it('defaults approval requests to anyone', () => {
        const fixture = TestBed.createComponent(
            PlaylistRequestApprovalModalComponent,
        );
        const component = fixture.componentInstance;

        component.submit();

        expect(dialog_ref.close).toHaveBeenCalledWith({
            approver_id: '',
            message: '',
        });
    });

    it('returns the selected approver id', () => {
        const fixture = TestBed.createComponent(
            PlaylistRequestApprovalModalComponent,
        );
        const component = fixture.componentInstance;
        component.selected_approver_id.set('person-2');
        component.message.set(' Please review ');

        component.submit();

        expect(dialog_ref.close).toHaveBeenCalledWith({
            approver_id: 'person-2',
            message: 'Please review',
        });
    });
});
