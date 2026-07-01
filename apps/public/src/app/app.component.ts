import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    imports: [RouterModule],
    selector: 'placeos-root',
    template: ` <router-outlet /> `,
    changeDetection: ChangeDetectionStrategy.Eager,
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
