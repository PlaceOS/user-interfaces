import { Component, Input } from "@angular/core";
import { Question, QuestionType } from "../types";

@Component({
    selector: 'base-question',
    styles: [],
    template: ``
})

export class BaseQuestionComponent{
    @Input() preview: boolean = false;
    // @Input() readonly: boolean = false;
    @Input() set value(value:Question){
        if(value){
            this.question = value;
        }
        this.hasValue = !!value;
    }

    protected hasValue = false;
    protected question:Question;

    protected readonly placeholderTitle = 'Enter your question here';

    constructor(){}
}