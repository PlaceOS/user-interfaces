import { TestBed } from '@angular/core/testing';

import { AiLayerComponent } from '../../app/ai/ai-layer.component';

describe('AiLayerComponent', () => {
    it('does not export a blank canvas before the artwork loads', async () => {
        await TestBed.configureTestingModule({ imports: [AiLayerComponent] })
            .overrideComponent(AiLayerComponent, { set: { template: '' } })
            .compileComponents();
        const fixture = TestBed.createComponent(AiLayerComponent);
        fixture.componentRef.setInput('image_url', 'blob:artwork');
        fixture.componentRef.setInput('state', {
            blocks: [],
            logo: false,
            logo_position: 'bottom-right',
            logo_scale: 0.14,
            logo_choice: 'auto',
        });

        await expect(fixture.componentInstance.toBlob()).resolves.toBeNull();
    });
});
