import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AsyncHandler, SettingsService } from '@placeos/common';
import { SignageService } from './signage.service';

@Component({
    selector: 'signage-panel',
    template: `
        <media-player
            [playlist]="playlist | async"
            [controls]="debug()"
            [animation_time]="animation_time"
        />
    `,
    styles: `
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }
    `,
    standalone: false,
})
export class SignagePanelComponent extends AsyncHandler implements OnInit {
    private _router = inject(Router);
    private _route = inject(ActivatedRoute);
    private _signage = inject(SignageService);
    private _settings = inject(SettingsService);

    public readonly playlist = this._signage.playlist;
    public readonly debug = signal(false);

    public get animation_time() {
        return this._settings.get('app.default_animation_time');
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
                if (params.has('debug')) this.debug.set(true);
            }),
        );
    }
}
