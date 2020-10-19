import { Output, EventEmitter, Input, Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseClass, SettingsService } from '@user-interfaces/common';
import { CalendarEvent } from '@user-interfaces/events';
import { User } from '@user-interfaces/users';

export enum CheckinStage {
    QRCode = 'qrcode',
    Details = 'details',
    Photo = 'photo',
    VisitorPass = 'visitor-pass',
    Result = 'result',
    Preferences = 'preferences',
    Final = 'final',
    Error = 'error',
}

export const stringToCheckinStage = (val: string): CheckinStage => {
    switch (val) {
        case 'qrcode':
            return CheckinStage.QRCode;
        case 'details':
            return CheckinStage.Details;
        case 'photo':
            return CheckinStage.Photo;
        case 'preferences':
            return CheckinStage.Preferences;
        case 'visitor-pass':
            return CheckinStage.VisitorPass;
        case 'result':
            return CheckinStage.Result;
        case 'error':
            return CheckinStage.Error;
        case 'final':
            return CheckinStage.Final;
        default:
            return null;
    }
};

export interface CheckinEvent {
    stage: CheckinStage;
    booking: CalendarEvent;
    visitor: any;
    host: User;
    error: string;
}

class CheckinStepCalculator {
    private allowedStages = [];

    constructor(private _settings: SettingsService) {
        this.allowedStages = this._settings.get('app.general.checkin.stages');
    }

    public nextStep(currentStage: CheckinStage): CheckinStage {
        const idx = this.allowedStages.findIndex((f) => f === currentStage);
        const filteredStages = this.allowedStages.filter((el, i, r) => i > idx);

        return filteredStages.length > 0 ? stringToCheckinStage(filteredStages[0]) : currentStage;
    }

    public prevStep(currentStage: CheckinStage): CheckinStage {
        const idx = this.allowedStages.findIndex((f) => f === currentStage);
        const filteredStages = this.allowedStages.filter((el, i, r) => i < idx);

        return filteredStages.length > 0
            ? stringToCheckinStage(filteredStages[filteredStages.length - 1])
            : currentStage;
    }
}

@Component({
    selector: 'a-base-checkin-component-that-should-not-be-used',
    template: '',
})
export class BaseCheckinComponent extends BaseClass {
    public enumCheckinStage = CheckinStage;
    protected stepCalculator: CheckinStepCalculator = null;

    @Output() public eventChanged = new EventEmitter<CheckinEvent>();
    @Output() public loading = new EventEmitter();
    @Input() public event: CheckinEvent;

    public get visitor(): any {
        return this.event ? this.event.visitor : null;
    }
    public set visitor(v: any) {
        this.event = { ...this.event, visitor: v };
    }
    public get booking(): CalendarEvent {
        return this.event ? this.event.booking : null;
    }
    public set booking(b: CalendarEvent) {
        this.event = { ...this.event, booking: b };
    }
    public get stage(): CheckinStage {
        return this.event ? this.event.stage : null;
    }
    public set stage(s: CheckinStage) {
        this.event = { ...this.event, stage: s };
    }
    public get host(): User {
        return this.event ? this.event.host : null;
    }
    public set host(h: User) {
        this.event = { ...this.event, host: h };
    }
    public get error(): string {
        return this.event ? this.event.error : null;
    }
    public set error(e: string) {
        this.event = { ...this.event, error: e };
    }

    constructor(protected _router: Router, protected _settings: SettingsService) {
        super();
        this.stepCalculator = new CheckinStepCalculator(this._settings);
    }

    private skipBeverageSelection(): boolean {
        const has_beverage = !!this.visitor.extension_data.preferred_beverage;
        const no_catering = !(this.booking as any).catering.orders.some(s => !!s.charge_code);
        return has_beverage || no_catering;
    }

    public next() {
        const current = this.event && this.event.stage ? this.event.stage : CheckinStage.QRCode;
        let next = this.stepCalculator.nextStep(current) || current;
        if (next === CheckinStage.Preferences && this.skipBeverageSelection()) {
            next = CheckinStage.Final;
        }
        if (!!this.error) {
            next = current !== CheckinStage.Error ? CheckinStage.Error : CheckinStage.Final;
        }
        if (current !== next) {
            if (next === CheckinStage.Final) {
                this.home();
            } else {
                this.emitStage(next);
            }
        }
    }

    private emitStage(stage: CheckinStage) {
        const evt = { ...this.event, stage };
        this.eventChanged.emit(evt);
    }

    public setLoading(state: string | boolean | null = null) {
        this.loading.emit(!state ? false : state);
    }

    public home() {
        this._router.navigate(['/welcome']);
    }
}
