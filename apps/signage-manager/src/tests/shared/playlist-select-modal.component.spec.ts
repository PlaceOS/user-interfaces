import { TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SignagePlaylistService } from '../../app/playlists/signage-playlist.service';
import { PlaylistSelectModalComponent } from '../../app/shared/playlist-select-modal.component';

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
                { provide: SignagePlaylistService, useValue: service },
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
        expect(fixture.componentInstance.list.items().map((_) => _.id)).toEqual(
            ['p1', 'p2'],
        );
    });
});

// The real template, so a failed search shows an error and not "no playlists"
describe('PlaylistSelectModalComponent errors', () => {
    const flush = () => new Promise((resolve) => setTimeout(resolve));
    const queryPlaylists = vi.fn();

    beforeEach(async () => {
        vi.clearAllMocks();
        await TestBed.configureTestingModule({
            imports: [PlaylistSelectModalComponent],
            providers: [
                { provide: MAT_DIALOG_DATA, useValue: {} },
                {
                    provide: SignagePlaylistService,
                    useValue: { queryPlaylists },
                },
            ],
        }).compileComponents();
    });

    it('shows a load error with a retry that queries again', async () => {
        queryPlaylists
            .mockReturnValueOnce(Promise.reject(new Error('offline')))
            .mockReturnValueOnce(
                Promise.resolve({
                    data: [{ id: 'p1', name: 'Morning Loop' }],
                    total: 1,
                    next: null,
                }),
            );
        const fixture = TestBed.createComponent(PlaylistSelectModalComponent);
        fixture.detectChanges();
        await flush();
        fixture.detectChanges();

        const element: HTMLElement = fixture.nativeElement;
        const retry =
            element.querySelector<HTMLButtonElement>('load-error button');
        expect(retry).toBeTruthy();

        retry?.click();
        await flush();
        fixture.detectChanges();

        expect(queryPlaylists).toHaveBeenCalledTimes(2);
        expect(element.querySelector('load-error')).toBeNull();
        expect(element.textContent).toContain('Morning Loop');
    });
});
