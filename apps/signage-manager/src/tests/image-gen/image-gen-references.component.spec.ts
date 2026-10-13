import { TestBed } from '@angular/core/testing';

import { ImageGenReferencesComponent } from '../../app/image-gen/image-gen-references.component';

describe('ImageGenReferencesComponent', () => {
    it('emits only the files that fit within the model limit', async () => {
        await TestBed.configureTestingModule({
            imports: [ImageGenReferencesComponent],
        })
            .overrideComponent(ImageGenReferencesComponent, {
                set: { template: '' },
            })
            .compileComponents();
        const fixture = TestBed.createComponent(ImageGenReferencesComponent);
        fixture.componentRef.setInput('items', [
            { id: 'one', name: 'one.png', url: 'blob:one' },
        ]);
        fixture.componentRef.setInput('max', 2);
        const picked = vi.fn();
        fixture.componentInstance.picked.subscribe(picked);
        const input = document.createElement('input');
        const files = [
            new File(['one'], 'two.png', { type: 'image/png' }),
            new File(['two'], 'three.png', { type: 'image/png' }),
        ];
        Object.defineProperty(input, 'files', { value: files });

        fixture.componentInstance.pick({ target: input } as unknown as Event);

        expect(picked).toHaveBeenCalledWith([files[0]]);
    });
});
