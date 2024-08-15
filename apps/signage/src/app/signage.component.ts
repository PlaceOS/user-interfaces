import { Component } from '@angular/core';
import { SignageService } from './signage.service';
import { AsyncHandler } from '@placeos/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'signage-panel',
    template: `
        <media-player
            [playlist]="playlist | async"
            [controls]="debug"
        ></media-player>
    `,
    styles: `
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }
    `,
})
export class SignagePanelComponent extends AsyncHandler {
    public readonly playlist = this._signage.playlist;
    public debug = false;

    constructor(
        private _router: Router,
        private _route: ActivatedRoute,
        private _signage: SignageService,
    ) {
        super();
    }

    public ngOnInit() {
        this.timeout(
            'not-bootstrapped',
            () => this._router.navigate(['/bootstrap']),
            3000,
        );
        this.subscription(
            'route.params',
            this._route.paramMap.subscribe((params) => {
                if (params.has('system_id')) {
                    this._signage.setDisplay(params.get('system_id'));
                    this.clearTimeout('not-bootstrapped');
                }
            }),
        );
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) => {
                if (params.has('debug')) {
                    this.debug = true;
                }
            }),
        );
    }
}
