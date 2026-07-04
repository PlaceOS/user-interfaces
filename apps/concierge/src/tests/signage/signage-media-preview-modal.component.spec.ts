import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { SignageMediaPreviewModalComponent } from '../../app/signage/signage-media-preview-modal.component';

describe('SignageMediaPreviewModalComponent', () => {
    let spectator: Spectator<SignageMediaPreviewModalComponent>;
    let data: any;

    const createComponent = createComponentFactory({
        component: SignageMediaPreviewModalComponent,
        detectChanges: false,
    });

    function build() {
        spectator = createComponent({
            providers: [{ provide: MAT_DIALOG_DATA, useValue: data }],
        });
    }

    beforeEach(() => {
        data = {
            url: 'http://example.com/image.png',
            type: 'image',
            name: 'Poster',
            save: true,
        };
    });

    it('should expose the resource, name and type from the dialog data', () => {
        build();

        expect(spectator.component.resource()).toBe(
            'http://example.com/image.png',
        );
        expect(spectator.component.name()).toBe('Poster');
        expect(spectator.component.type()).toBe('image');
    });

    it('should allow saving when the save flag is set', () => {
        build();

        expect(spectator.component.can_save()).toBe(true);
    });

    it('should disable saving when the save flag is false', () => {
        data.save = false;
        build();

        expect(spectator.component.can_save()).toBe(false);
    });

    it('should emit the save event when triggered', () => {
        build();
        const on_save = jest.fn();
        spectator.component.save.subscribe(on_save);

        spectator.component.save.emit(true);

        expect(on_save).toHaveBeenCalledWith(true);
    });
});
