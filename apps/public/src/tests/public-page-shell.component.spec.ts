import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { PublicPageShellComponent } from '../app/public-page-shell.component';

@Component({
    imports: [PublicPageShellComponent],
    template: `
        <placeos-public-page-shell [logo]="logo" [description]="description">
            <p class="projected">Projected body</p>
        </placeos-public-page-shell>
    `,
})
class HostComponent {
    public logo = 'assets/custom-logo.svg';
    public description = 'Custom shell description';
}

describe('PublicPageShellComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HostComponent, PublicPageShellComponent],
        }).compileComponents();
    });

    it('renders the logo, the description and the projected content', () => {
        const fixture = TestBed.createComponent(HostComponent);
        fixture.detectChanges();
        const element: HTMLElement = fixture.nativeElement;
        expect(element.querySelector('img')?.getAttribute('src')).toBe(
            'assets/custom-logo.svg',
        );
        expect(element.textContent).toContain('Custom shell description');
        expect(element.querySelector('.projected')?.textContent).toContain(
            'Projected body',
        );
    });

    it('shows the not-configured message only when not configured', () => {
        const fixture = TestBed.createComponent(PublicPageShellComponent);
        fixture.detectChanges();
        expect(fixture.nativeElement.textContent).not.toContain(
            'not configured yet',
        );
        fixture.componentRef.setInput('configured', false);
        fixture.detectChanges();
        expect(fixture.nativeElement.textContent).toContain(
            'Public events are not configured yet',
        );
    });
});
