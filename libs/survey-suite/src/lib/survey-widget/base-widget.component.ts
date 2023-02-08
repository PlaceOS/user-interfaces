import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Question, UISurveyAnswer } from '../types';
import { AsyncHandler } from '@placeos/common';
import { makeHTMLId } from '../helper';

@Component({
    selector: 'base-widget',
    styles: [],
    template: ``,
})
export class BaseWidget extends AsyncHandler {
    private readonly _data = new BehaviorSubject<UISurveyAnswer[]>([]);
    public readonly data$ = this._data.asObservable();
    private set data(value: UISurveyAnswer[]) {
        this._data.next(value);
    }

    protected hasData: boolean = false;
    protected widget_id: string;

    @Input() question: Question;
    @Input() set value(value: UISurveyAnswer[]) {
        if (value) {
            this.data = value;
        }
        this.hasData = !!value;
    }

    constructor() {
        super();
        this.widget_id = 'e-' + makeHTMLId(7);
    }
}
