import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseClass } from '@user-interfaces/common';

import { SpaceFlowService } from './space-flow.service';

@Component({
    selector: 'space-flow',
    providers: [SpaceFlowService],
    template: `
        <header>
            <a-topbar-header [(menu)]="show_menu"></a-topbar-header>
        </header>
        <main class="flex flex-1 relative">
            <ng-container [ngSwitch]="page">
                <space-flow-form *ngSwitchDefault></space-flow-form>
                <space-flow-listing *ngSwitchCase="'find'"></space-flow-listing>
                <space-flow-confirm *ngSwitchCase="'confirm'"></space-flow-confirm>
            </ng-container>
        </main>
        <footer class="flex">
            <a-footer-menu class="w-full"></a-footer-menu>
        </footer>
        <a-overlay-menu [(show)]="show_menu"></a-overlay-menu>
        <ng-container *ngIf="success">
            <div name="success" class="fixed inset-0 flex flex-col items-center justify-center">
                <div class="text-4xl rounded-full bg-white text-success mb-4">
                    <app-icon [icon]="{ class: 'material-icons', content: 'done' }"></app-icon>
                </div>
                <div class="text-center text-lg text-white mb-4">Thank you, you room booking was successful!<br/>An event has been added to your calendar</div>
                <div class="flex items-center">
                    <a button mat-button [routerLink]="['/book', 'spaces']" [queryParams]="{}">New Booking</a>
                    <a button mat-button style="margin-left: .5rem" [routerLink]="['/schedule']" [queryParams]="{}">My Day</a>
                </div>
            </div>
        </ng-container>
    `,
    styles: [
        `
            :host {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                overflow: hidden;
                display: flex;
                flex-direction: column;
            }

            [button] {
                width: 10em;
            }

            [name="success"] {
                background-color: #00539f;
            }
        `,
    ],
})
export class SpaceFlowComponent extends BaseClass {
    /** Whether overlay menu should be shown */
    public show_menu: boolean;
    /** Currently active page in the flow */
    public page: string;
    /** Whether last booking was a success */
    public success: boolean;

    constructor(private _route: ActivatedRoute, private _service: SpaceFlowService) {
        super();
    }

    public ngOnInit(): void {
        this.subscription(
            'route.params',
            this._route.paramMap.subscribe((params) =>
                params.has('step') ? (this.page = params.get('step')) : ''
            )
        );
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) =>{
                this.success = !!params.has('success');
                if (this.success) {
                    this._service.clearState();
                }
            })
        );
        this._service.loadState();
    }
}
