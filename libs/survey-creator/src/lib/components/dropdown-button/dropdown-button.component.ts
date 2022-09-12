import { Component, OnInit, Input } from '@angular/core';
import { QuestionType } from '../../survey-types';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
    selector: 'dropdown-button',
    template: `
        <button class="button-with-icon">
            <span class="">
                <mat-icon
                    aria-hidden="false"
                    aria-label="Material icon for button"
                    class="icon"
                    >arrow_drop_down</mat-icon
                >
            </span>
            <span class="button-title"> {{ selection }} </span>
        </button>
    `,
    styles: [``],
})
export class DropdownButtonComponent implements OnInit {
    @Input() selection: QuestionType = QuestionType.text;
    constructor() {}

    ngOnInit(): void {}

    selectType() {
        console.log('clicked');
    }
}
