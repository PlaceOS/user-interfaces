import { TestBed } from '@angular/core/testing';
import {
    MAT_DIALOG_DATA,
    MatDialog,
    MatDialogRef,
} from '@angular/material/dialog';
import { HotkeysService, setNotifyOutlet } from '@placeos/common';
import { SignageMedia, SignageTemplate } from '@placeos/ts-client';
import { of } from 'rxjs';
import { MediaSelectModalComponent } from '../../app/shared/media-select-modal.component';
import { TemplateEditModalComponent } from '../../app/shared/template-edit-modal.component';

describe('TemplateEditModalComponent', () => {
    const selected_media = new SignageMedia({
        id: 'media-2',
        name: 'Office photo',
        media_type: 'image',
    });
    const dialog = {
        open: vi.fn(() => ({ afterClosed: () => of(selected_media) })),
    };
    const dialog_ref = {
        disableClose: false,
        close: vi.fn(),
    };
    const onEdit = vi.fn();
    const onAdd = vi.fn();

    async function make(id = 'template-1', merge = false) {
        await TestBed.configureTestingModule({
            imports: [TemplateEditModalComponent],
            providers: [
                {
                    provide: MAT_DIALOG_DATA,
                    useValue: {
                        template: new SignageTemplate({
                            id,
                            merge,
                            name: 'Welcome',
                            background_item_id: 'media-1',
                        }),
                        onEdit,
                        onAdd,
                    },
                },
                { provide: MatDialog, useValue: dialog },
                { provide: MatDialogRef, useValue: dialog_ref },
                {
                    provide: HotkeysService,
                    useValue: { listen: vi.fn(() => ({ unsubscribe() {} })) },
                },
            ],
        })
            .overrideComponent(TemplateEditModalComponent, {
                set: { template: '', imports: [] },
            })
            .compileComponents();
        return TestBed.createComponent(TemplateEditModalComponent)
            .componentInstance;
    }

    beforeEach(() => {
        vi.clearAllMocks();
        dialog_ref.disableClose = false;
        onEdit.mockResolvedValue(new SignageTemplate({ id: 'template-1' }));
        onAdd.mockResolvedValue(new SignageTemplate({ id: 'template-1' }));
        setNotifyOutlet(
            {
                open: vi.fn(() => ({
                    onAction: () => ({
                        subscribe: () => ({ unsubscribe() {} }),
                    }),
                    dismiss() {},
                })),
            } as any,
            true,
        );
        TestBed.resetTestingModule();
    });

    it.each([
        ['', ''],
        ['', undefined],
        ['', null],
        ['template-1', ''],
        ['template-1', undefined],
        ['template-1', null],
    ])(
        'omits empty fields when saving template %j with value %j',
        async (id, value) => {
            const component = await make(id);
            component.model.update((model) => ({
                ...model,
                description: value as string,
                background_item_id: value as string,
            }));

            await component.saveTemplate();

            const payload = {
                name: 'Welcome',
                full_screen_takeover: false,
                merge: false,
            };
            if (id) {
                expect(onEdit).toHaveBeenCalledWith(id, payload);
            } else {
                expect(onAdd).toHaveBeenCalledWith(payload);
            }
            expect(component.model().description).toBe(value);
            expect(component.model().background_item_id).toBe(value);
        },
    );

    it.each(['', 'template-1'])(
        'saves both merge values for template %j',
        async (id) => {
            const component = await make(id, true);
            expect(component.form.merge().value()).toBe(true);

            for (const merge of [false, true]) {
                component.form.merge().value.set(merge);
                await component.saveTemplate();
                const payload = expect.objectContaining({ merge });
                if (id) {
                    expect(onEdit).toHaveBeenLastCalledWith(id, payload);
                } else {
                    expect(onAdd).toHaveBeenLastCalledWith(payload);
                }
            }
        },
    );

    it('selects, saves, and clears a background media item', async () => {
        const component = await make();

        expect(component.model().background_item_id).toBe('media-1');

        await component.selectBackground();

        expect(dialog.open).toHaveBeenCalledWith(
            MediaSelectModalComponent,
            expect.objectContaining({ data: { selected_id: 'media-1' } }),
        );
        expect(component.model().background_item_id).toBe('media-2');
        expect(component.selected_background()).toBe(selected_media);

        await component.saveTemplate();

        expect(onEdit).toHaveBeenCalledWith(
            'template-1',
            expect.objectContaining({ background_item_id: 'media-2' }),
        );

        component.clearBackground();

        expect(component.model().background_item_id).toBe('');
        expect(component.selected_background()).toBeNull();
    });
});
