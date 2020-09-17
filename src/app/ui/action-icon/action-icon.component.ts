import { Component, OnInit, Input } from '@angular/core';
import { ApplicationIcon } from '../../common/types';

@Component({
    selector: 'action-icon',
    templateUrl: './action-icon.component.html',
    styleUrls: ['./action-icon.component.scss']
})
export class ActionIconComponent implements OnInit {
    /** Icon to display */
    @Input() public icon: ApplicationIcon;
    /** Whether action is being processed */
    @Input() public loading: boolean;
    /** State of the action */
    @Input() public state: 'success' | 'error' | '' = '';

    constructor() {}

    ngOnInit(): void {}
}
