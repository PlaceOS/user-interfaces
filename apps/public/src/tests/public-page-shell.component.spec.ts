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

    it('renders the logo from the input', () => {
        const fixture = TestBed.createComponent(HostComponent);
        fixture.detectChanges();
        const img = fixture.nativeElement.querySelector('img');
        expect(img?.getAttribute('src')).toBe('assets/custom-logo.svg');
    });

    it('renders the provided description text', () => {
        const fixture = TestBed.createComponent(HostComponent);
        fixture.detectChanges();
        expect(fixture.nativeElement.textContent).toContain(
            'Custom shell description',
        );
    });

    it('projects content into the shell', () => {
        const fixture = TestBed.createComponent(HostComponent);
        fixture.detectChanges();
        const projected = fixture.nativeElement.querySelector('.projected');
        expect(projected?.textContent).toContain('Projected body');
    });

    it('falls back to the default logo and description', () => {
        const fixture = TestBed.createComponent(PublicPageShellComponent);
        fixture.detectChanges();
        const img = fixture.nativeElement.querySelector('img');
        expect(img?.getAttribute('src')).toBe('assets/logo-light.svg');
        expect(fixture.nativeElement.textContent).toContain(
            'Browse public events',
        );
    });
});
