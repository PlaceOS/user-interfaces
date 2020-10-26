import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'checkin-preferences',
    template: `
        <div class="bg-white rounded shadow overflow-hidden relative flex flex-col items-center my-4 p-4 mx-auto">
            <h3 class="text-xl">Would you like a drink?</h3>
            <form *ngIf="form" [formGroup]="form">

            </form>
            <button mat-button (click)="next()">Update</button>
            <a
                mat-icon-button
                class="absolute top-0 right-0"
                [routerLink]="['/welcome']"
            >
                <app-icon className="material-icons">close</app-icon>
            </a>
        </div>
    `,
    styles: [
        `
            .absolute {
                position: absolute;
            }
        `,
    ],
})
export class CheckinPreferencesComponent {

    public form: FormGroup;

    constructor(private _router: Router) {}

    public next() {
        this._router.navigate(['/welcome']);
    }
}
