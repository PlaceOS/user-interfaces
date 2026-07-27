import { TestBed } from '@angular/core/testing';
import { PlaylistApprovalPreviewComponent } from '../../app/shared/playlist-approval-preview.component';

describe('PlaylistApprovalPreviewComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PlaylistApprovalPreviewComponent],
        }).compileComponents();
    });

    it('uses signage thumbnail endpoints when media has a thumbnail id', () => {
        const fixture = TestBed.createComponent(
            PlaylistApprovalPreviewComponent,
        );
        const component = fixture.componentInstance;

        expect(
            component.thumbnailUrl({
                id: 'media-1',
                name: 'Media 1',
                thumbnail_id: 'thumb-1',
            } as any),
        ).toBe('/api/engine/v2/signage/media/media-1/thumbnail');
    });

    it('falls back to the media thumbnail url for unsaved media', () => {
        const fixture = TestBed.createComponent(
            PlaylistApprovalPreviewComponent,
        );
        const component = fixture.componentInstance;

        expect(
            component.thumbnailUrl({
                name: 'Media 1',
                thumbnail_id: 'thumb-1',
                thumbnail_url: 'https://example.com/thumb.jpg',
            } as any),
        ).toBe('https://example.com/thumb.jpg');
    });

    it('has no thumbnail url when the media has no thumbnail', () => {
        const fixture = TestBed.createComponent(
            PlaylistApprovalPreviewComponent,
        );
        const component = fixture.componentInstance;

        expect(
            component.thumbnailUrl({
                id: 'media-1',
                name: 'Media 1',
                thumbnail_url: '/api/engine/v2/uploads//url',
            } as any),
        ).toBe('');
    });

    it('renders current and previous media lists', () => {
        const fixture = TestBed.createComponent(
            PlaylistApprovalPreviewComponent,
        );
        fixture.componentRef.setInput('versions', [
            {
                id: 'current-version',
                items: ['media-1', 'media-2'],
                updated_at: 1,
            },
            {
                id: 'previous-version',
                items: ['media-3'],
                updated_at: 2,
            },
        ]);
        fixture.componentRef.setInput('media', [
            [
                { id: 'media-1', name: 'Image' },
                { id: 'media-2', name: 'Webpage', media_type: 'webpage' },
            ],
            [{ id: 'media-3', name: 'Video', media_type: 'video' }],
        ]);
        fixture.detectChanges();

        expect(fixture.nativeElement.textContent).toContain(
            'Version to approve',
        );
        expect(fixture.nativeElement.textContent).toContain('Previous version');
        expect(fixture.nativeElement.textContent).toContain('Image');
        expect(fixture.nativeElement.textContent).toContain('Webpage');
        expect(fixture.nativeElement.textContent).toContain('Video');
        expect(fixture.nativeElement.textContent).toContain('http');
        expect(fixture.nativeElement.textContent).toContain('video_library');
    });
});
