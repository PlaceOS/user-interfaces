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

    async function make() {
        await TestBed.configureTestingModule({
            imports: [TemplateEditModalComponent],
            providers: [
                {
                    provide: MAT_DIALOG_DATA,
                    useValue: {
                        template: new SignageTemplate({
                            id: 'template-1',
                            name: 'Welcome',
                            background_item_id: 'media-1',
                        }),
                        onEdit,
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
