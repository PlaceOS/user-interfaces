import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';

import { BaseCheckinComponent, CheckinStage } from '../base-checkin';
import { CateringItem } from '@user-interfaces/catering';
import { notifyError, notifySuccess, SettingsService } from '@user-interfaces/common';
import { GuestsService } from '@user-interfaces/users';


@Component({
    selector: 'checkin-visitor-preferences',
    templateUrl: './visitor-preferences.component.html',
    styleUrls: ['./visitor-preferences.component.scss'],
})
export class VisitorPreferencesComponent extends BaseCheckinComponent implements OnInit {
    public refreshmentNotes = '';

    public drinks = [];
    // private cateringOptions: ICateringOptionMap = null;

    private raw_catering: CateringItem[] = null;

    public form: FormGroup = null;

    constructor(protected _router: Router, protected _settings: SettingsService, private _guests: GuestsService) {
        super(_router, _settings);
        this.stage = CheckinStage.Preferences;
    }

    public ngOnInit() {
        this.buildForm();
        this.timeout('load_catering', async () => this.loadCatering());
    }

    public get selected_drink(): FormControl {
        return this.form ? (this.form.controls.drink as FormControl) : new FormControl(null);
    }

    public get options(): { [key: string]: AbstractControl } {
        return this.form ? (this.form.controls.options as FormGroup).controls : {};
    }

    public buildForm() {
        const drink = this.selected_drink.value;
        this.form = new FormGroup({
            drink: new FormControl(drink),
            options: new FormGroup({}),
        });
        if (!!drink) {
            for (const opt of drink.options) {
                (this.form.controls.options as FormGroup).addControl(opt, new FormControl());
            }
            this.setDefaults();
        }
    }

    private setDefaults() {

    }

    private async loadCatering() {

    }

    public async continue() {
        if (this.selected_drink) {
            await this.addDrink();
        }
        this.next();
    }

    private async addDrink() {
        const { drink, options } = this.form.value;
        const order = [];
        if (!!drink) {
            order.push(drink.name);
            const keys = Object.keys(options);
            for (const key of keys) {
                const selected = options[key];
                if (selected.length > 0) {
                    order.push(`${key}: ${(selected instanceof Array) ? selected.join(', ') : selected}`);
                }
            }
        }
        if (order.length > 0) {
            try {
                const visitor = this.visitor;
                const extension_data = visitor.extension_data || {};
                extension_data.preferred_beverage = order.join(', ');
                await this._guests.updateMetadata(this.visitor.email, {
                    ...visitor,
                    extension_data,
                });
                notifySuccess('Updated drink preference');
            } catch (e) {
                console.error(e);
                notifyError('Failed to update drink preference');
            }
        }
        // this.service.Visitors.editMetaData(raw_data);
    }

    public multiselectChange(event: any, key: string, ctrl: AbstractControl) {
        console.log(`multiselectChange key:${key} event:`, event);
        let formVal = this.options[key].value;
        const eventVal = event.source.value;
        if (!!event.checked) {
            formVal.push(eventVal);
            formVal = formVal.filter((el, i, r) => r.indexOf(el) === i);
        } else {
            formVal = formVal.filter((f) => f !== eventVal);
        }
        this.options[key].setValue(formVal);
    }

    public is_selected(key: string, opt: string): boolean {
        const formVal = this.options[key].value;
        return formVal.indexOf(opt) > -1;
    }
}
