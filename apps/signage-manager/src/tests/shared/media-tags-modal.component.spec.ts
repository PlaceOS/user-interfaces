import { TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MediaTagsModalComponent } from '../../app/shared/media-tags-modal.component';

describe('MediaTagsModalComponent', () => {
    const dialog_ref = { close: vi.fn() };

    beforeEach(async () => {
        vi.clearAllMocks();
        await TestBed.configureTestingModule({
            imports: [MediaTagsModalComponent],
            providers: [
                { provide: MatDialogRef, useValue: dialog_ref },
                { provide: MAT_DIALOG_DATA, useValue: { tags: ['lobby'] } },
            ],
        })
            .overrideComponent(MediaTagsModalComponent, {
                set: { template: '', imports: [] },
            })
            .compileComponents();
    });

    it('returns the tags entered by the user', () => {
        const component = TestBed.createComponent(
            MediaTagsModalComponent,
        ).componentInstance;
        component.tags.set(['lobby', 'news']);

        component.addTags();

        expect(dialog_ref.close).toHaveBeenCalledWith(['lobby', 'news']);
    });

    it('does not close without tags', () => {
        const component = TestBed.createComponent(
            MediaTagsModalComponent,
        ).componentInstance;

        component.addTags();

        expect(dialog_ref.close).not.toHaveBeenCalled();
    });

    it('offers the tags already in use as suggestions', () => {
        const component = TestBed.createComponent(
            MediaTagsModalComponent,
        ).componentInstance;

        expect(component.tag_options).toEqual(['lobby']);
    });
});
