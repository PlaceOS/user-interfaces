import { TestBed } from '@angular/core/testing';

import {
    AiLayerControlsComponent,
    newTextBlock,
} from '../../app/ai/ai-layer-controls.component';

describe('AiLayerControlsComponent', () => {
    it('updates a block colour from a typed input event', async () => {
        await TestBed.configureTestingModule({
            imports: [AiLayerControlsComponent],
        })
            .overrideComponent(AiLayerControlsComponent, {
                set: { template: '' },
            })
            .compileComponents();
        const fixture = TestBed.createComponent(AiLayerControlsComponent);
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
});
