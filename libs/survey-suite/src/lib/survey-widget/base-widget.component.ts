import { Component, Input } from '@angular/core';
import { AsyncHandler, randomString } from '@placeos/common';
import { BehaviorSubject } from 'rxjs';
import { Question, UISurveyAnswer } from '../types';

@Component({
    selector: 'base-widget',
    styles: [],
    template: ``,
})
export class BaseWidgetComponent extends AsyncHandler {
    private readonly _data = new BehaviorSubject<UISurveyAnswer[]>([]);
    public readonly data$ = this._data.asObservable();
    private set data(value: UISurveyAnswer[]) {
        this._data.next(value);
    }

    protected _has_data = false;
    protected _widget_id: string;

    @Input() public question: Question;
    @Input() public set value(value: UISurveyAnswer[]) {
        if (value) this.data = value;
        this._has_data = !!value;
    }

    constructor() {
        super();
        this._widget_id = 'e-' + randomString(7);
    }
}
