import { Component, OnInit, inject } from '@angular/core';
import { DesksService } from '@placeos/bookings';

@Component({
    selector: 'app-explore',
    template: `
        @if (!hide_nav) {
            <topbar />
        }
        <div class="flex h-1/2 flex-1 flex-col-reverse bg-base-200 sm:flex-row">
            <main
                class="relative z-0 flex h-1/2 flex-1 flex-col overflow-hidden sm:h-auto"
            >
                <explore-map-view></explore-map-view>
            </main>
        </div>

        @if (!hide_nav) {
            <footer-menu />
        }
    `,
    styles: [
        `
            :host {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                overflow: hidden;
                display: flex;
                flex-direction: column;
            }
        `,
    ],
    standalone: false,
})
export class ExploreComponent implements OnInit {
    private _desks = inject(DesksService);

    public get hide_nav() {
        return localStorage.getItem('PlaceOS.hide_nav') === 'true';
    }

    public ngOnInit() {
        this._desks.error_on_host = false;
    }
}
