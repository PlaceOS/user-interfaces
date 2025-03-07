import { Component } from '@angular/core';

@Component({
    selector: 'placeos-book',
    template: `
        <topbar *ngIf="!hide_nav"></topbar>
        <div class="flex h-1/2 flex-1 flex-col-reverse sm:flex-row">
            <main class="flex h-1/2 flex-1 flex-col overflow-hidden sm:h-auto">
                <router-outlet></router-outlet>
            </main>
        </div>
        <footer-menu class="z-10" *ngIf="!hide_nav"></footer-menu>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                height: 100%;
                width: 100%;
            }
        `,
    ],
    standalone: false,
})
export class BookComponent {
    public get hide_nav() {
        return localStorage.getItem('PlaceOS.hide_nav') === 'true';
    }
}
