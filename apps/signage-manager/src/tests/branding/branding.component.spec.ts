import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { BrandingComponent } from '../../app/branding/branding.component';
import { ImageGenService } from '../../app/image-gen/image-gen.service';
import { SignageContextService } from '../../app/signage-context.service';

describe('BrandingComponent', () => {
    const image_gen_stub = {
        enabled: signal(true),
        brand_kit: signal<Record<string, unknown> | null>(null),
        brand_kit_read: signal<'pending' | 'ok' | 'failed'>('ok'),
        reloadBrandKit: vi.fn(),
        saveBrandKit: vi.fn(),
    };

    async function make() {
        await TestBed.configureTestingModule({
            imports: [BrandingComponent],
            providers: [
                { provide: ImageGenService, useValue: image_gen_stub },
                {
                    provide: SignageContextService,
                    useValue: {
                        is_sys_admin: signal(true),
                        global_features: signal(['branding-editing']),
                    },
                },
            ],
        })
            .overrideComponent(BrandingComponent, { set: { template: '' } })
            .compileComponents();
        return TestBed.createComponent(BrandingComponent).componentInstance;
    }

    beforeEach(() => {
        vi.clearAllMocks();
        image_gen_stub.brand_kit.set(null);
        image_gen_stub.brand_kit_read.set('ok');
        image_gen_stub.saveBrandKit.mockResolvedValue({});
    });

    it('updates a colour from a typed input event', async () => {
        const component = await make();
        const input = document.createElement('input');
        input.value = '#123456';

        component.setColourFromInput(0, {
            target: input,
        } as unknown as Event);

        expect(component.colours()).toEqual(['#123456']);
    });

    it('keeps palette colours past the three it shows when saving', async () => {
        image_gen_stub.brand_kit.set({
            palette: {
                primary: '#111111',
                secondary: '#222222',
                accent: '#333333',
                highlight: '#444444',
            },
        });
        const component = await make();
        await component.ngOnInit();

        expect(component.colours()).toEqual(['#111111', '#222222', '#333333']);
        await component.save();

        expect(image_gen_stub.saveBrandKit).toHaveBeenCalledWith(
            expect.objectContaining({
                palette: {
                    primary: '#111111',
                    secondary: '#222222',
                    accent: '#333333',
                    highlight: '#444444',
                },
            }),
        );
    });

    it('does not allow edits when the brand kit cannot be read', async () => {
        image_gen_stub.brand_kit_read.set('failed');
        image_gen_stub.reloadBrandKit.mockResolvedValue(null);
        const component = await make();
        await component.ngOnInit();

        expect(image_gen_stub.reloadBrandKit).toHaveBeenCalled();
        expect(component.load_state()).toBe('failed');
        expect(component.can_edit()).toBe(false);
    });
});
