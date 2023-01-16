import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Question } from '@placeos/survey-suite';
import { SurveyBuilderService } from './survey-builder.service';

@Component({
    selector: 'survey-builder',
    templateUrl: './survey-builder.component.html',
    styles: [
        `
            :host {
                display: flex;
                height: 100%;
                width: 100%;
            }
        `,
    ],
})
export class SurveyBuilderComponent implements OnInit {
    page: 'design' | 'preview' = 'design';
    onDrop = (event: CdkDragDrop<Question[]>) =>
        this.service.onDropQuestionToSurvey(event);
    onRemove = (index: number) => this.service.removeQuestionFromSurvey(index);

    constructor(public service: SurveyBuilderService) {}

    ngOnInit(): void {
        this.service.generateNewSurvey();
    }

    switchPage(page:'design' | 'preview'){
        this.page = page;
        if(page === 'preview'){
            this.service.onPreview();
        }
    }

    onTabChange(event: MatTabChangeEvent) {
        if (event.index === 1) {
            this.service.onPreview();
        }
    }
}
