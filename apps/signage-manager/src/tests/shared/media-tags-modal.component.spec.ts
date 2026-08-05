import { TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';
import { MediaTagsModalComponent } from '../../app/shared/media-tags-modal.component';

describe('MediaTagsModalComponent', () => {
    const dialog_ref = { close: vi.fn() };

    beforeEach(async () => {
        vi.clearAllMocks();
        await TestBed.configureTestingModule({
            imports: [MediaTagsModalComponent],
            providers: [{ provide: MatDialogRef, useValue: dialog_ref }],
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
});
