import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { SignagePlaylistService } from '../../app/playlists/signage-playlist.service';
import { AssignedPlaylistsPanelComponent } from '../../app/shared/assigned-playlists-panel.component';

const NOW_S = Math.floor(Date.now() / 1000);

describe('AssignedPlaylistsPanelComponent', () => {
    const playlist_approval_status = signal<Record<string, boolean>>({});
    const playlist_approval_requested_status = signal<Record<string, boolean>>(
        {},
    );
    const playlist_stub = {
        playlist_approval_status,
        playlist_approval_requested_status,
        playlist_thumbnail_media: signal<Record<string, string[]>>({}),
        queuePlaylistMeta: vi.fn(),
    };

    async function make(playlists: unknown[], can_update = true) {
        await TestBed.configureTestingModule({
            imports: [AssignedPlaylistsPanelComponent],
            providers: [
                provideRouter([]),
                { provide: SignagePlaylistService, useValue: playlist_stub },
            ],
        }).compileComponents();
        const fixture = TestBed.createComponent(
            AssignedPlaylistsPanelComponent,
        );
        fixture.componentRef.setInput('playlists', playlists);
        fixture.componentRef.setInput('can_update', can_update);
        fixture.componentRef.setInput('add_label', 'ADD');
        fixture.componentRef.setInput('remove_label', 'REMOVE');
        fixture.componentRef.setInput('empty_label', 'EMPTY');
        await fixture.whenStable();
        return fixture;
    }

    beforeEach(() => {
        playlist_approval_status.set({});
        playlist_approval_requested_status.set({});
    });

    it('classifies playlist status by validity window and approval state', async () => {
        playlist_approval_status.set({ p_wait: false, p_review: false });
        playlist_approval_requested_status.set({ p_review: true });
        const component = (await make([])).componentInstance;

        expect(
            component.getStatus({ id: 'p', valid_until: NOW_S - 10 } as any),
        ).toBe('expired');
        expect(
            component.getStatus({ id: 'p', valid_from: NOW_S + 10 } as any),
        ).toBe('pending');
        expect(component.getStatus({ id: 'p_wait' } as any)).toBe(
            'awaiting_approval',
        );
        expect(component.getStatus({ id: 'p_review' } as any)).toBe(
            'awaiting_review',
        );
        expect(component.getStatus({ id: 'p' } as any)).toBeNull();
    });

    it('shows the disabled and status badges of each playlist', async () => {
        const fixture = await make([
            { id: 'p1', name: 'Old', enabled: false, valid_until: NOW_S - 10 },
        ]);
        const element: HTMLElement = fixture.nativeElement;

        expect(
            element.querySelector('[data-playlist-status="disabled"]'),
        ).not.toBeNull();
        expect(
            element.querySelector('[data-playlist-status="expired"]'),
        ).not.toBeNull();
    });

    it('emits the id of the playlist to remove', async () => {
        const fixture = await make([
            { id: 'p1', name: 'Lobby', enabled: true },
        ]);
        const remove = vi.fn();
        fixture.componentInstance.remove.subscribe(remove);

        const element: HTMLElement = fixture.nativeElement;
        element
            .querySelector<HTMLButtonElement>('button[aria-label="REMOVE"]')
            ?.click();

        expect(remove).toHaveBeenCalledWith('p1');
    });
});
