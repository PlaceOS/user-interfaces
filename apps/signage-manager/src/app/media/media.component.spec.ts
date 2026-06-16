import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { SignageService } from '../signage.service';
import { MediaSectionComponent } from './media.component';

@Component({
    selector: 'nav-sidebar',
    template: '',
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: true,
})
class NavSidebarStubComponent {}

@Component({
    selector: 'media-list-header',
    template: '',
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: true,
})
class MediaListHeaderStubComponent {}

@Component({
    selector: 'media-list',
    template: '',
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: true,
})
class MediaListStubComponent {
    @Input() public playlist_count = 0;
}

@Component({
    selector: 'playlist-sidebar',
    template: '',
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: true,
})
class PlaylistSidebarStubComponent {}

@Component({
    selector: 'nav-footer',
    template: '',
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: true,
})
class NavFooterStubComponent {}

@Component({
    selector: 'icon',
    template: '<ng-content />',
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: true,
})
class IconStubComponent {}

describe('MediaSectionComponent', () => {
    const preview_files = jest.fn();
    const service_stub = {
        playlists: of([]),
        previewFiles: preview_files,
    };

    beforeEach(async () => {
        preview_files.mockReset();
        await TestBed.configureTestingModule({
            imports: [MediaSectionComponent],
            providers: [{ provide: SignageService, useValue: service_stub }],
        })
            .overrideComponent(MediaSectionComponent, {
                set: {
                    imports: [
                        NavSidebarStubComponent,
                        MediaListHeaderStubComponent,
                        MediaListStubComponent,
                        PlaylistSidebarStubComponent,
                        NavFooterStubComponent,
                        IconStubComponent,
                    ],
                },
            })
            .compileComponents();
    });

    it('shows the upload overlay for file drags', () => {
        const fixture = TestBed.createComponent(MediaSectionComponent);
        const component = fixture.componentInstance;
        const prevent_default = jest.fn();

        component.handleDragEnter({
            dataTransfer: { types: ['Files'] },
            preventDefault: prevent_default,
        } as any);

        expect(prevent_default).toHaveBeenCalled();
        expect(component.show_dropzone()).toBe(true);
    });

    it('ignores drags that do not contain files', () => {
        const fixture = TestBed.createComponent(MediaSectionComponent);
        const component = fixture.componentInstance;
        const prevent_default = jest.fn();

        component.handleDragEnter({
            dataTransfer: { types: ['text/plain'] },
            preventDefault: prevent_default,
        } as any);

        expect(prevent_default).not.toHaveBeenCalled();
        expect(component.show_dropzone()).toBe(false);
    });

    it('hides the upload overlay when the file drag leaves the window', () => {
        const fixture = TestBed.createComponent(MediaSectionComponent);
        const component = fixture.componentInstance;
        component.handleDragEnter({
            dataTransfer: { types: ['Files'] },
            preventDefault: jest.fn(),
        } as any);

        component.handleDragLeave({
            clientX: 0,
            clientY: 0,
            dataTransfer: { types: ['Files'] },
        } as any);

        expect(component.show_dropzone()).toBe(false);
    });

    it('forwards dropped files to the signage service', async () => {
        const fixture = TestBed.createComponent(MediaSectionComponent);
        const component = fixture.componentInstance;
        const prevent_default = jest.fn();
        const stop_propagation = jest.fn();
        const files = {
            0: new File(['image'], 'poster.png', { type: 'image/png' }),
            length: 1,
            item: (index: number) =>
                index === 0
                    ? new File(['image'], 'poster.png', { type: 'image/png' })
                    : null,
        } as unknown as FileList;

        await component.handleDrop({
            dataTransfer: { files, types: ['Files'] },
            preventDefault: prevent_default,
            stopPropagation: stop_propagation,
        } as any);

        expect(prevent_default).toHaveBeenCalled();
        expect(stop_propagation).toHaveBeenCalled();
        expect(preview_files).toHaveBeenCalledWith(files);
        expect(component.show_dropzone()).toBe(false);
    });
});
