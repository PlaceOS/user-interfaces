import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BaseClass } from 'src/app/common/base.class';
import { SettingsService } from 'src/app/common/settings.service';

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.template.html',
    styleUrls: ['./welcome.styles.scss'],
})
export class WelcomeComponent extends BaseClass implements OnInit, OnDestroy {
    public model: any = {};
    public background: string;

    constructor(
        private route: ActivatedRoute,
        private _router: Router,
        private _settings: SettingsService
    ) {
        super();
    }

    public ngOnInit() {
        this.subscription('route.params', this.route.paramMap.subscribe((params) => {
            if (params.has('level')) {
                this.model.level = params.get('level');
            }
        }));
        this.subscription('level', this._settings.listen('KIOSK.level').subscribe((lvl) => {
            this.model.level = lvl;
        }));
        this.background = this._settings.get('app.home.background');
    }

    public goto(id: string) {
        if (id) {
            const route = [id];
            if (id === 'explore') {
                route.push(this.model.level);
            }
            this._router.navigate(route);
        }
    }
}
