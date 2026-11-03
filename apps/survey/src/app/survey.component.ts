import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { SurveyOutletComponent } from '@placeos/components';

@Component({
    selector: 'app-survey',
    template: `
        <div class="bg-base-200 absolute inset-0">
            <survey-outlet (not_found)="notFound()"></survey-outlet>
        </div>
    `,
    styles: [],
    imports: [SurveyOutletComponent],
})
export class SurveyComponent {
    private _router = inject(Router);

    public notFound() {
        this._router.navigate(['/not-found']);
    }
}
