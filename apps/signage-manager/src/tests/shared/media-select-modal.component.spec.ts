import { TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SignageMedia } from '@placeos/ts-client';
import { MediaSelectModalComponent } from '../../app/shared/media-select-modal.component';
import { SignageService } from '../../app/signage.service';

describe('MediaSelectModalComponent', () => {
    const flush = () => new Promise((resolve) => setTimeout(resolve));
    const queryMedia = vi.fn();

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
                    provide: SignageService,
                    useValue: { queryMedia },
                },
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
        expect(fixture.componentInstance.selected_id).toBe('media-2');
        expect(
            fixture.componentInstance.list.items().map((item) => item.id),
        ).toEqual(['media-1', 'media-2']);
    });
});
