import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { setNotifyOutlet } from '@placeos/common';
import { MediaListHeaderComponent } from '../../app/media/media-list-header.component';
import { MediaAddModalComponent } from '../../app/shared/media-add-modal.component';
import { SignageService } from '../../app/signage.service';

const notify_open = vi.fn(() => ({
    onAction: () => ({ subscribe: () => ({ unsubscribe: () => {} }) }),
    dismiss: vi.fn(),
}));

describe('MediaListHeaderComponent', () => {
    const filtered_media = signal<any[]>([]);
    const media = signal<any[]>([]);
    const plugins = signal<any[]>([]);
    const widgets = signal<any[]>([]);
    const search_term = signal('');
    const media_view_mode = signal<'grid' | 'list' | 'folder'>('grid');
    const add_from_link = vi.fn().mockResolvedValue(undefined);
    const add_from_plugin = vi.fn().mockResolvedValue(undefined);
    const preview_file = vi.fn();
    const dialog_open = vi.fn();

    const service_stub = {
        filtered_media,
        media,
        plugins,
        widgets,
        search_term,
        media_view_mode,
        media_upload_accept: 'image/*',
        can_create: signal(true),
        addMediaFromLink: add_from_link,
        addMediaFromPlugin: add_from_plugin,
        previewFileFromInput: preview_file,
    };

    async function make() {
        await TestBed.configureTestingModule({
            imports: [MediaListHeaderComponent],
            providers: [
                { provide: SignageService, useValue: service_stub },
                { provide: MatDialog, useValue: { open: dialog_open } },
            ],
        })
            .overrideComponent(MediaListHeaderComponent, {
                set: { template: '' },
            })
            .compileComponents();
        return TestBed.createComponent(MediaListHeaderComponent)
            .componentInstance;
    }

    beforeEach(() => {
        vi.clearAllMocks();
        setNotifyOutlet({ open: notify_open } as any, true);
        filtered_media.set([]);
        media.set([]);
        plugins.set([]);
        widgets.set([]);
    });

    it('reports the filtered and total media counts', async () => {
        media.set([{ id: 'a' }, { id: 'b' }, { id: 'c' }]);
        filtered_media.set([{ id: 'a' }]);
        const component = await make();
        expect(component.item_count()).toBe(1);
        expect(component.total_count()).toBe(3);
    });

    it('adds media from a valid link and clears the field', async () => {
        const component = await make();
        component.link.set('https://example.com/poster.png');
        await component.addFromLink();
        expect(add_from_link).toHaveBeenCalledWith(
            'https://example.com/poster.png',
        );
        expect(component.link()).toBe('');
    });

    it('rejects an invalid link without calling the service', async () => {
        const component = await make();
        component.link.set('not a url');
        await component.addFromLink();
        expect(notify_open).toHaveBeenCalledWith(
            expect.anything(),
            expect.anything(),
            expect.objectContaining({ panelClass: ['error'] }),
        );
        expect(add_from_link).not.toHaveBeenCalled();
    });

    it('ignores an empty link', async () => {
        const component = await make();
        component.link.set('   ');
        await component.addFromLink();
        expect(add_from_link).not.toHaveBeenCalled();
        expect(notify_open).not.toHaveBeenCalledWith(
            expect.anything(),
            expect.anything(),
            expect.objectContaining({ panelClass: ['error'] }),
        );
    });

    it('adds media from the selected plugin and resets the selection', async () => {
        const component = await make();
        const plugin = {
            id: 'plugin-1',
            name: 'Clock',
            plugin_type: 'plugin',
        };
        plugins.set([plugin]);
        component.selected_plugin.set(plugin);
        await component.addFromPlugin();
        expect(add_from_plugin).toHaveBeenCalledWith(plugin);
        expect(component.selected_plugin()).toBeNull();
    });

    it('excludes widget plugins from media items', async () => {
        const component = await make();
        const widget = {
            id: 'widget-1',
            name: 'Clock',
            plugin_type: 'widget',
        };
        plugins.set([
            { id: 'plugin-1', name: 'Weather', plugin_type: 'plugin' },
        ]);
        widgets.set([widget]);

        expect(component.available_plugins().map(({ id }) => id)).toEqual([
            'plugin-1',
        ]);

        component.selected_plugin.set(widget);
        await component.addFromPlugin();
        expect(add_from_plugin).not.toHaveBeenCalled();
    });

    it('does nothing when adding from a plugin with none selected', async () => {
        const component = await make();
        await component.addFromPlugin();
        expect(add_from_plugin).not.toHaveBeenCalled();
    });

    it('opens the add-media modal with the requested mode', async () => {
        const component = await make();
        component.openAdd('link');
        expect(dialog_open).toHaveBeenCalledWith(
            MediaAddModalComponent,
            expect.objectContaining({ data: { mode: 'link' } }),
        );
    });

    it('forwards file input changes to the service', async () => {
        const component = await make();
        const event = { target: {} };
        component.previewFile(event as any);
        expect(preview_file).toHaveBeenCalledWith(event);
    });
});
