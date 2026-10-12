import { TestBed } from '@angular/core/testing';

import {
    ImageGenLayerControlsComponent,
    newTextBlock,
} from '../../app/image-gen/image-gen-layer-controls.component';

describe('ImageGenLayerControlsComponent', () => {
    it('updates a block colour from a typed input event', async () => {
        await TestBed.configureTestingModule({
            imports: [ImageGenLayerControlsComponent],
        })
            .overrideComponent(ImageGenLayerControlsComponent, {
                set: { template: '' },
            })
            .compileComponents();
        const fixture = TestBed.createComponent(ImageGenLayerControlsComponent);
        const block = newTextBlock('headline');
        fixture.componentRef.setInput('state', {
            blocks: [block],
            logo: false,
            logo_position: 'bottom-right',
            logo_scale: 0.14,
            logo_choice: 'auto',
        });
        const changed = vi.fn();
        fixture.componentInstance.changed.subscribe(changed);
        const input = document.createElement('input');
        input.value = '#123456';

        fixture.componentInstance.setBlockColour(block.id, {
            target: input,
        } as unknown as Event);

        expect(changed).toHaveBeenCalledWith(
            expect.objectContaining({
                blocks: [expect.objectContaining({ colour: '#123456' })],
            }),
        );
    });

    it('offers each palette colour once, however the brand kit wrote it', async () => {
        await TestBed.configureTestingModule({
            imports: [ImageGenLayerControlsComponent],
        })
            .overrideComponent(ImageGenLayerControlsComponent, {
                set: { template: '' },
            })
            .compileComponents();
        const fixture = TestBed.createComponent(ImageGenLayerControlsComponent);
        fixture.componentRef.setInput('brand', {
            palette: { primary: '#FFF', secondary: '#0E6E52' },
        });

        expect(fixture.componentInstance.palette()).toEqual([
            '#ffffff',
            '#1b2420',
            '#0e6e52',
        ]);
    });

    it('does not point at the branding page when branding changes are off', async () => {
        await TestBed.configureTestingModule({
            imports: [ImageGenLayerControlsComponent],
        })
            .overrideComponent(ImageGenLayerControlsComponent, {
                set: { template: '' },
            })
            .compileComponents();
        const fixture = TestBed.createComponent(ImageGenLayerControlsComponent);
        fixture.componentRef.setInput('can_set_logo', false);
        expect(fixture.componentInstance.no_logo_note()).toBe(
            'SIGNAGE_MANAGER.IMAGE_GEN_NO_LOGO_ADMIN',
        );

        fixture.componentRef.setInput('branding_editing', false);

        expect(fixture.componentInstance.no_logo_note()).toBe(
            'SIGNAGE_MANAGER.IMAGE_GEN_NO_LOGO_LOCKED',
        );
    });
});
