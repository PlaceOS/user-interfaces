import { TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
    MediaTagModalComponent,
    type MediaTagModalData,
} from '../../app/shared/media-tag-modal.component';

describe('MediaTagModalComponent', () => {
    const dialog_ref = { close: vi.fn() };

    function make(data: MediaTagModalData) {
        TestBed.configureTestingModule({
            providers: [
                { provide: MatDialogRef, useValue: dialog_ref },
                { provide: MAT_DIALOG_DATA, useValue: data },
            ],
        }).overrideComponent(MediaTagModalComponent, {
            set: { template: '', imports: [] },
        });
        return TestBed.createComponent(MediaTagModalComponent)
            .componentInstance;
    }

    beforeEach(() => vi.clearAllMocks());

    it('returns the trimmed replacement tag', async () => {
        const component = make({
            action: 'rename',
            tag: 'news',
            count: 2,
            can_delete_media: false,
        });
        component.tag_model.update((model) => ({
            ...model,
            new_tag: ' company news ',
        }));

        component.confirm();
        await Promise.resolve();

        expect(dialog_ref.close).toHaveBeenCalledWith({
            action: 'rename',
            new_tag: 'company news',
        });
    });

    it('does not rename a tag to its current name', () => {
        const component = make({
            action: 'rename',
            tag: 'news',
            count: 2,
            can_delete_media: false,
        });

        expect(component.rename_disabled()).toBe(true);
    });

    it('does not rename a tag to an empty value', async () => {
        const component = make({
            action: 'rename',
            tag: 'news',
            count: 2,
            can_delete_media: false,
        });
        component.tag_model.update((model) => ({
            ...model,
            new_tag: '   ',
        }));

        component.confirm();
        await Promise.resolve();

        expect(dialog_ref.close).not.toHaveBeenCalled();
    });

    it('returns whether tagged media should also be removed', async () => {
        const component = make({
            action: 'remove',
            tag: 'news',
            count: 2,
            can_delete_media: true,
        });
        component.tag_model.update((model) => ({
            ...model,
            remove_media: true,
        }));

        component.confirm();
        await Promise.resolve();

        expect(dialog_ref.close).toHaveBeenCalledWith({
            action: 'remove',
            remove_media: true,
        });
    });
});
