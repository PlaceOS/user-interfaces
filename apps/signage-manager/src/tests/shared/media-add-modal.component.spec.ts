import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { setNotifyOutlet } from '@placeos/common';
import {
    MediaAddModalComponent,
    MediaAddModalData,
} from '../../app/shared/media-add-modal.component';
import { SignageService } from '../../app/signage.service';

const notify_open = vi.fn(() => ({
    onAction: () => ({ subscribe: () => ({ unsubscribe: () => {} }) }),
    dismiss: vi.fn(),
}));

describe('MediaAddModalComponent', () => {
    const dialog_ref = { close: vi.fn() };
    const plugins = signal<any[]>([]);
    const widgets = signal<any[]>([]);
    const service = {
        plugins,
        widgets,
        addMediaFromLink: vi.fn().mockResolvedValue(undefined),
        addMediaFromPlugin: vi.fn().mockResolvedValue(undefined),
    };

    async function createComponent(data: MediaAddModalData) {
        await TestBed.configureTestingModule({
            imports: [MediaAddModalComponent],
            providers: [
                { provide: MAT_DIALOG_DATA, useValue: data },
                { provide: MatDialogRef, useValue: dialog_ref },
                { provide: SignageService, useValue: service },
            ],
        })
            .overrideComponent(MediaAddModalComponent, {
                set: { template: '', imports: [] },
            })
            .compileComponents();
        return TestBed.createComponent(MediaAddModalComponent).componentInstance;
    }

    beforeEach(() => {
        vi.clearAllMocks();
        setNotifyOutlet({ open: notify_open } as any, true);
        plugins.set([]);
        widgets.set([]);
        TestBed.resetTestingModule();
    });

    it('enables the add action only once a link has been typed', async () => {
        const component = await createComponent({ mode: 'link' });

        expect(component.can_add()).toBe(false);

        component.link.set('   ');
        expect(component.can_add()).toBe(false);

        component.link.set('https://example.com');
        expect(component.can_add()).toBe(true);
    });

    it('rejects an invalid url without closing the dialog', async () => {
        const component = await createComponent({ mode: 'link' });
        component.link.set('not-a-url');

        await component.add();

        expect(notify_open).toHaveBeenCalledWith(
            expect.anything(),
            expect.anything(),
            expect.objectContaining({ panelClass: ['error'] }),
        );
        expect(dialog_ref.close).not.toHaveBeenCalled();
        expect(service.addMediaFromLink).not.toHaveBeenCalled();
    });

    it('adds a valid link then closes the dialog', async () => {
        const component = await createComponent({ mode: 'link' });
        component.link.set('  https://example.com/promo  ');

        await component.add();

        expect(dialog_ref.close).toHaveBeenCalled();
        expect(service.addMediaFromLink).toHaveBeenCalledWith(
            'https://example.com/promo',
        );
        expect(notify_open).not.toHaveBeenCalledWith(
            expect.anything(),
            expect.anything(),
            expect.objectContaining({ panelClass: ['error'] }),
        );
    });

    it('enables the add action once a plugin is selected', async () => {
        const plugin = {
            id: 'weather',
            name: 'Weather',
            plugin_type: 'plugin',
        };
        plugins.set([plugin]);
        const component = await createComponent({ mode: 'plugin' });

        expect(component.can_add()).toBe(false);

        component.selected_plugin.set(plugin);
        expect(component.can_add()).toBe(true);
    });

    it('adds the selected plugin and closes the dialog', async () => {
        const plugin = {
            id: 'weather',
            name: 'Weather',
            plugin_type: 'plugin',
        };
        plugins.set([plugin]);
        const component = await createComponent({ mode: 'plugin' });
        component.selected_plugin.set(plugin);

        await component.add();

        expect(dialog_ref.close).toHaveBeenCalled();
        expect(service.addMediaFromPlugin).toHaveBeenCalledWith(plugin);
    });

    it('excludes widget plugins from media items', async () => {
        const widget = {
            id: 'widget-1',
            name: 'Clock',
            plugin_type: 'widget',
        };
        plugins.set([
            { id: 'plugin-1', name: 'Weather', plugin_type: 'plugin' },
        ]);
        widgets.set([widget]);
        const component = await createComponent({ mode: 'plugin' });

        expect(component.available_plugins().map(({ id }) => id)).toEqual([
            'plugin-1',
        ]);

        component.selected_plugin.set(widget);
        expect(component.can_add()).toBe(false);
        await component.add();
        expect(dialog_ref.close).not.toHaveBeenCalled();
        expect(service.addMediaFromPlugin).not.toHaveBeenCalled();
    });

    it('does nothing in plugin mode when no plugin is selected', async () => {
        const component = await createComponent({ mode: 'plugin' });

        await component.add();

        expect(dialog_ref.close).not.toHaveBeenCalled();
        expect(service.addMediaFromPlugin).not.toHaveBeenCalled();
    });
});
