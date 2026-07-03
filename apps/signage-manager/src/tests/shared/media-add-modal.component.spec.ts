import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { notifyError } from '@placeos/common';
import {
    MediaAddModalComponent,
    MediaAddModalData,
} from '../../app/shared/media-add-modal.component';
import { SignageService } from '../../app/signage.service';

jest.mock('@placeos/common', () => ({
    ...jest.requireActual('@placeos/common'),
    notifyError: jest.fn(),
}));

describe('MediaAddModalComponent', () => {
    const dialog_ref = { close: jest.fn() };
    const plugins = signal<any[]>([]);
    const service = {
        plugins,
        addMediaFromLink: jest.fn().mockResolvedValue(undefined),
        addMediaFromPlugin: jest.fn().mockResolvedValue(undefined),
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
        jest.clearAllMocks();
        plugins.set([]);
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

        expect(notifyError).toHaveBeenCalled();
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
        expect(notifyError).not.toHaveBeenCalled();
    });

    it('enables the add action once a plugin is selected', async () => {
        plugins.set([{ id: 'weather', name: 'Weather' }]);
        const component = await createComponent({ mode: 'plugin' });

        expect(component.can_add()).toBe(false);

        component.selected_plugin.set({ id: 'weather', name: 'Weather' });
        expect(component.can_add()).toBe(true);
    });

    it('adds the selected plugin and closes the dialog', async () => {
        const plugin = { id: 'weather', name: 'Weather' };
        plugins.set([plugin]);
        const component = await createComponent({ mode: 'plugin' });
        component.selected_plugin.set(plugin);

        await component.add();

        expect(dialog_ref.close).toHaveBeenCalled();
        expect(service.addMediaFromPlugin).toHaveBeenCalledWith(plugin);
    });

    it('does nothing in plugin mode when no plugin is selected', async () => {
        const component = await createComponent({ mode: 'plugin' });

        await component.add();

        expect(dialog_ref.close).not.toHaveBeenCalled();
        expect(service.addMediaFromPlugin).not.toHaveBeenCalled();
    });
});
