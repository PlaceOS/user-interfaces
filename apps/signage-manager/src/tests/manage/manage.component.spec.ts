import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ImageGenService } from '../../app/image-gen/image-gen.service';
import { ManageSectionComponent } from '../../app/manage/manage.component';

describe('ManageSectionComponent', () => {
    const enabled = signal(false);

    function make() {
        TestBed.configureTestingModule({
            providers: [{ provide: ImageGenService, useValue: { enabled } }],
        }).overrideComponent(ManageSectionComponent, {
            set: { template: '', imports: [] },
        });
        return TestBed.createComponent(ManageSectionComponent)
            .componentInstance;
    }

    it('shows the branding tab only when image generation is enabled', () => {
        const component = make();
        const routes = () => component.tabs().map(({ route }) => route);

        enabled.set(false);
        expect(routes()).toEqual(['/manage/report']);
        enabled.set(true);
        expect(routes()).toEqual(['/manage/report', '/manage/branding']);
    });
});
