import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { AiImageService } from '../../app/ai/ai-image.service';
import { BrandingComponent } from '../../app/branding/branding.component';
import { SignageService } from '../../app/signage.service';

describe('BrandingComponent', () => {
    it('updates a colour from a typed input event', async () => {
        await TestBed.configureTestingModule({
            imports: [BrandingComponent],
            providers: [
                {
                    provide: AiImageService,
                    useValue: {
                        enabled: signal(true),
                        brand_kit: signal(null),
                    },
                },
                {
                    provide: SignageService,
                    useValue: { is_sys_admin: signal(true) },
                },
            ],
        })
            .overrideComponent(BrandingComponent, { set: { template: '' } })
            .compileComponents();
        const component =
            TestBed.createComponent(BrandingComponent).componentInstance;
        const input = document.createElement('input');
        input.value = '#123456';

        component.setColourFromInput(0, {
            target: input,
        } as unknown as Event);

        expect(component.colours()).toEqual(['#123456']);
    });
});
