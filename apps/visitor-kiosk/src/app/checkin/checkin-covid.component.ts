import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { Router, RouterModule } from '@angular/router';
import { notifyError } from '@placeos/common';
import { IconComponent } from '@placeos/components';
import { CheckinStateService } from './checkin-state.service';

@Component({
    selector: '[checkin-covid]',
    template: `
        <div
            class="bg-base-100 relative overflow-x-hidden overflow-y-auto rounded-sm p-4"
        >
            <h3 class="mb-4 text-xl font-medium">COVID Disclaimer</h3>
            <ol class="list-inside list-decimal">
                <li>
                    Do you have any of the following symptoms?<br /><br />
                    <ul class="mb-4 list-inside list-disc px-4">
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
            <button btn matRipple (click)="confirm()">Confirm</button>
            <a
                icon
                matRipple
                [attr.disabled]="!symptoms() && !contact()"
                class="absolute top-0 right-0"
                [routerLink]="['/welcome']"
            >
                <icon>close</icon>
            </a>
        </div>
    `,
    styles: [
        `
            :host > div {
                width: 32rem;
                max-width: calc(100vw - 2rem);
                max-height: calc(100% - 2rem);
            }

            button {
                margin: 1rem 11rem 0;
                width: 8rem;
            }
        `,
    ],
    imports: [
        MatRadioModule,
        MatRippleModule,
        IconComponent,
        RouterModule,
        FormsModule,
    ],
})
export class CheckinCovidComponent {
    private _router = inject(Router);
    private _checkin = inject(CheckinStateService);

    public contact = signal<string>('');
    public symptoms = signal<string>('');

    public confirm() {
        const symptoms = this.symptoms();
        const contact = this.contact();
        if (!symptoms || !contact)
            return notifyError('Please select yes or no for each question');
        this._checkin.updateGuest({
            covid: contact === 'true',
            symptoms: symptoms === 'true',
        });
        if (symptoms === 'false' && contact === 'false') {
            this._router.navigate(['/checkin', 'results']);
        } else {
            this._checkin.setError(
                'Please get tested for COVID-19 and self-isolate at home for 14 days',
            );
            this._router.navigate(['/checkin', 'error']);
        }
    }
}
