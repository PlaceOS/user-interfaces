import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    imports: [RouterModule],
    selector: 'placeos-root',
    template: ` <router-outlet /> `,
    styles: [
        `
            :host {
                display: block;
                min-height: 100%;
            }
        `,
    ],
})
export class AppComponent {}
