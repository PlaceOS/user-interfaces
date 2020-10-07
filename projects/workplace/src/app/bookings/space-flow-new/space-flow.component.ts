import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseClass } from 'src/app/common/base.class';
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
            </ng-container>
        </main>
        <footer class="flex">
            <a-footer-menu class="w-full"></a-footer-menu>
        </footer>
        <a-overlay-menu [(show)]="show_menu"></a-overlay-menu>
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
        `,
    ],
})
export class SpaceFlowComponent extends BaseClass {
    /** Whether overlay menu should be shown */
    public show_menu: boolean;
    /** Currently active page in the flow */
    public page: string;

    constructor(private _route: ActivatedRoute) {
        super();
    }

    public ngOnInit(): void {
        this.subscription(
            'route.params',
            this._route.paramMap.subscribe((params) =>
                params.has('page') ? (this.page = params.get('page')) : ''
            )
        );
    }
}
