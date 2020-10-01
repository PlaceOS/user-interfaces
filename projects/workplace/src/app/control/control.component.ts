import { Component, OnInit } from '@angular/core';

import { BaseClass } from 'src/app/common/base.class';
import { SettingsService } from 'src/app/common/settings.service';

@Component({
    selector: 'app-control',
    templateUrl: './control.component.html',
    styleUrls: ['./control.component.scss']
})
export class ControlComponent extends BaseClass implements OnInit {
    /** Whether to show the overlay menu */
    public show_menu: boolean;

    constructor(private _settings: SettingsService) {
        super();
    }

    public ngOnInit(): void {
        this._settings.title = 'Control';
    }
}
