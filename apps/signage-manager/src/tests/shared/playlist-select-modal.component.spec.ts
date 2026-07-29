import { TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PlaylistSelectModalComponent } from '../../app/shared/playlist-select-modal.component';
import { SignageService } from '../../app/signage.service';

describe('PlaylistSelectModalComponent', () => {
    const flush = () => new Promise((resolve) => setTimeout(resolve));
    const queryPlaylists = vi.fn();
    const service = { queryPlaylists };

    beforeEach(async () => {
        vi.clearAllMocks();
        queryPlaylists.mockReturnValue(
            Promise.resolve({
                data: [
                    { id: 'p2', name: 'Weekend' },
                    { id: 'p1', name: 'Morning Loop' },
                ],
                total: 2,
                next: null,
            }),
        );
        await TestBed.configureTestingModule({
            imports: [PlaylistSelectModalComponent],
            providers: [
                { provide: MAT_DIALOG_DATA, useValue: { media_id: 'media-1' } },
                { provide: SignageService, useValue: service },
            ],
        })
            .overrideComponent(PlaylistSelectModalComponent, {
                set: { template: '', imports: [] },
            })
            .compileComponents();
    });

    it('lists playlists from the backend, ordered by name', async () => {
        const fixture = TestBed.createComponent(PlaylistSelectModalComponent);
        fixture.detectChanges();
        await flush();

        expect(queryPlaylists).toHaveBeenCalledWith('');
        expect(
            fixture.componentInstance.list.items().map((_: any) => _.id),
        ).toEqual(['p1', 'p2']);
    });
});
