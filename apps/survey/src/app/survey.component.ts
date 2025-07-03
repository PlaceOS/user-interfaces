import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { SurveyOutletComponent } from 'libs/components/src/lib/survey-outlet.component';

@Component({
    selector: 'app-survey',
    template: `
        <div class="absolute inset-0 bg-base-200">
            <survey-outlet (not_found)="notFound()"></survey-outlet>
        </div>
    `,
    styles: [],
    imports: [CommonModule, SurveyOutletComponent, RouterModule],
})
export class SurveyComponent {
    private _router = inject(Router);

    public notFound() {
        this._router.navigate(['/not-found']);
    }
}
