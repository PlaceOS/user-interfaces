import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { notifyError } from '@user-interfaces/common';
import { CheckinStateService } from './checkin-state.service';

@Component({
    selector: '[checkin-covid]',
    template: `
        <div class="bg-white rounded p-4 relative">
            <h3 class="text-xl font-medium mb-4">COVID Disclaimer</h3>
            <ol class="list-decimal list-inside">
                <li>
                    Do you have any of the following symptoms?<br /><br />
                    <ul class="list-disc list-inside px-4 mb-4">
                        <li>Fever</li>
                        <li>Cough</li>
                        <li>Shortness of breath</li>
                        <li>Chills</li>
                        <li>Body aches</li>
                        <li>Sore or scratchy throat</li>
                        <li>Headache</li>
                        <li>Runny nose</li>
                        <li>Muscle pain</li>
                        <li>Vomitting</li>
                        <li>Nausea</li>
                        <li>Diarrhoa</li>
                        <li>Loss of taste or smell</li>
                    </ul>
                    <mat-radio-group
                        aria-label="Has Symptoms"
                        [(ngModel)]="symptoms"
                    >
                        <mat-radio-button value="true">Yes</mat-radio-button>
                        <mat-radio-button value="false" class="ml-4"
                            >No</mat-radio-button
                        >
                    </mat-radio-group>
                </li>
                <hr class="my-4" />
                <li>
                    Have you been in contact with a COVID-19 case in the last 14
                    days or been asked to self-isolate by a health offical?<br /><br />
                    <mat-radio-group
                        aria-label="COVID contact or self-isolated"
                        [(ngModel)]="contact"
                    >
                        <mat-radio-button value="true">Yes</mat-radio-button>
                        <mat-radio-button value="false" class="ml-4"
                            >No</mat-radio-button
                        >
                    </mat-radio-group>
                </li>
            </ol>
            <button mat-button (click)="confirm()">Confirm</button>
            <a
                mat-icon-button
                [disabled]="!symptoms && !contact"
                class="absolute top-0 right-0"
                [routerLink]="['/welcome']"
            >
                <app-icon className="material-icons">close</app-icon>
            </a>
        </div>
    `,
    styles: [
        `
            :host {
                position: absolute;
                display: flex;
                align-items: center;
                justify-content: center;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: rgba(0, 0, 0, 0.5);
            }

            :host > div {
                width: 32rem;
                max-width: calc(100vw - 2rem);
            }

            .absolute {
                position: absolute;
            }

            button {
                margin: 1rem 11rem 0;
                width: 8rem;
            }
        `,
    ],
})
export class CheckinCovidComponent {
    public contact: string;
    public symptoms: string;

    constructor(
        private _router: Router,
        private _checkin: CheckinStateService
    ) {}

    public confirm() {
        if (!this.symptoms || !this.contact)
            return notifyError('Please select yes or no for each question');
        this._checkin.updateGuest({
            covid: this.contact === 'true',
            symptoms: this.symptoms === 'true',
        });
        if (this.symptoms === 'false' && this.contact === 'false') {
            this._router.navigate(['/checkin', 'results']);
        } else {
            this._checkin.setError('Please get tested for COVID-19 and self-isolate at home for 14 days');
            this._router.navigate(['/checkin', 'error']);
        }
    }
}
