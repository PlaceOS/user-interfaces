import { Component, Input } from '@angular/core';
import { AsyncHandler } from '@placeos/common';
import { BehaviorSubject } from 'rxjs';
import { makeHTMLId } from '../helper';
import { Question, UISurveyAnswer } from '../types';

@Component({
    selector: 'base-widget',
    styles: [],
    template: ``,
    standalone: false,
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
