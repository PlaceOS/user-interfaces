import { Component } from '@angular/core';

@Component({
    selector: '[control-page-view]',
    template: `
        <ng-container [ngSwitch]="view">
            <source-select
                *ngSwitchCase="'basic'"
                output="'ALL'"
            ></source-select>
            <control-advanced-view *ngSwitchDefault></control-advanced-view>
        </ng-container>
    `,
    styles: [
        `
            :host {
                width: 100%;
                flex: 1;
                height: 50%;
                overflow: hidden;
                background: #f0f0f0;
                color: rgba(0,0,0,.85);
            }
        `,
    ],
})
export class ControlPageViewComponent {
    public view: 'basic' | 'advanced';
}
