import { Component, Input } from '@angular/core';
import { Question } from '../types';

@Component({
    selector: 'base-question',
    styles: [],
    template: ``,
})
export class BaseQuestionComponent {
    @Input() public preview = false;
    // @Input() readonly: boolean = false;
    @Input() public set value(value: Question) {
        if (value) this.question = value;
        this._has_value = !!value;
    }

    protected _has_value = false;
    protected question: Question;

    protected readonly placeholderTitle = 'Enter your question here';
}
