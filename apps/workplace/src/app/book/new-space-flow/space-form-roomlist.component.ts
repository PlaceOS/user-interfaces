import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'space-form-roomlist',
    template: `
        <div *ngIf="form" [formGroup]="form">
            <div class="flex items-center flex-wrap sm:space-x-2">
                <div class="flex-1 min-w-[256px] space-y-2">
                    <label>Select Room Size<span>*</span></label>
                    <div class="flex items-center">
                        <mat-radio-group
                            aria-label="Select Room Size"
                            class="space-x-4"
                            [(ngModel)]="room_size"
                            [ngModelOptions]="{ standalone: true }"
                        >
                            <mat-radio-button [value]="2">
                                1-2 People
                            </mat-radio-button>
                            <mat-radio-button [value]="9">
                                3-9 People
                            </mat-radio-button>
                            <mat-radio-button [value]="100">
                                10+ People
                            </mat-radio-button>
                        </mat-radio-group>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <
        </div>
        <button mat-button class="w-full inverse">
            <div class="flex items-center justify-center space-x-2">
                <app-icon>search</app-icon>
                <span>Add Space</span>
            </div>
        </button>
    `,
    styles: [],
})
export class SpaceFormRoomlistComponent {
    @Input() public form: FormGroup;
    public room_size = 2;
}
