import { Component } from '@angular/core';
import { SignageService } from './signage.service';
import { AsyncHandler } from '@placeos/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'signage-panel',
    template: ` <media-player></media-player> `,
    styles: `
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }
    `,
})
export class SignagePanelComponent extends AsyncHandler {
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
    }
}
