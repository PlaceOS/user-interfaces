import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PlaylistSelectModalComponent } from '../../app/shared/playlist-select-modal.component';
import { SignageService } from '../../app/signage.service';

describe('PlaylistSelectModalComponent', () => {
    const playlists = signal<any[]>([]);
    const service = { playlists };

    beforeEach(async () => {
        jest.clearAllMocks();
        playlists.set([
            { id: 'p1', name: 'Morning Loop' },
            { id: 'p2', name: 'Evening News', description: 'After hours' },
            { id: 'p3', name: 'Weekend' },
        ]);
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

    it('returns every playlist when no search term is entered', () => {
        const fixture = TestBed.createComponent(PlaylistSelectModalComponent);
        expect(fixture.componentInstance.filtered_playlists().length).toBe(3);
    });

    it('filters playlists by name case-insensitively', () => {
        const fixture = TestBed.createComponent(PlaylistSelectModalComponent);
        const component = fixture.componentInstance;

        component.search.set('EVENING');

        expect(component.filtered_playlists().map((_) => _.id)).toEqual(['p2']);
    });

    it('reacts to updated playlist state', () => {
        const fixture = TestBed.createComponent(PlaylistSelectModalComponent);
        const component = fixture.componentInstance;

        component.search.set('week');
        expect(component.filtered_playlists().map((_) => _.id)).toEqual(['p3']);

        playlists.set([{ id: 'p9', name: 'Weekday Special' }]);
        expect(component.filtered_playlists().map((_) => _.id)).toEqual(['p9']);
    });
});
