import { TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SignageMedia } from '@placeos/ts-client';
import { SignageMediaService } from '../../app/media/signage-media.service';
import { MediaSelectModalComponent } from '../../app/shared/media-select-modal.component';

describe('MediaSelectModalComponent', () => {
    const flush = () => new Promise((resolve) => setTimeout(resolve));
    const queryMedia = vi.fn();
    const close = vi.fn();
    const office = new SignageMedia({ id: 'media-1', name: 'Office photo' });
    const welcome = new SignageMedia({ id: 'media-2', name: 'Welcome video' });

    beforeEach(async () => {
        vi.clearAllMocks();
        queryMedia.mockReturnValue(
            Promise.resolve({
                data: [
                    new SignageMedia({ id: 'media-2', name: 'Welcome video' }),
                    new SignageMedia({ id: 'media-1', name: 'Office photo' }),
                ],
                total: 2,
                next: null,
            }),
        );
        await TestBed.configureTestingModule({
            imports: [MediaSelectModalComponent],
            providers: [
                {
                    provide: MAT_DIALOG_DATA,
                    useValue: { selected_id: 'media-2' },
                },
                {
                    provide: SignageMediaService,
                    useValue: { queryMedia },
                },
                { provide: MatDialogRef, useValue: { close } },
            ],
        })
            .overrideComponent(MediaSelectModalComponent, {
                set: { template: '', imports: [] },
            })
            .compileComponents();
    });

    it('loads searchable media in name order', async () => {
        const fixture = TestBed.createComponent(MediaSelectModalComponent);
        fixture.detectChanges();
        await flush();

        expect(queryMedia).toHaveBeenCalledWith('');
        expect(fixture.componentInstance.isSelected(welcome)).toBe(true);
        expect(
            fixture.componentInstance.list.items().map((item) => item.id),
        ).toEqual(['media-1', 'media-2']);
    });

    it('closes with the clicked item', () => {
        const modal = TestBed.createComponent(
            MediaSelectModalComponent,
        ).componentInstance;

        modal.pick(office);

        expect(close).toHaveBeenCalledWith(office);
    });

    it('closes with every picked item when picking several', () => {
        TestBed.overrideProvider(MAT_DIALOG_DATA, {
            useValue: { multiple: true },
        });
        const modal = TestBed.createComponent(
            MediaSelectModalComponent,
        ).componentInstance;

        modal.pick(welcome);
        modal.pick(office);
        modal.pick(welcome);
        modal.pick(welcome);
        modal.confirm();

        expect(close).toHaveBeenCalledExactlyOnceWith([office, welcome]);
    });
});
