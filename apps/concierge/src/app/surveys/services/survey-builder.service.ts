import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { openConfirmModal, SettingsService } from '@placeos/common';
import { Question, UISurveyObj, UISurveyPage } from '@placeos/survey-suite';
import { Model } from 'survey-core';
import { QuestionBankService } from './question-bank.service';

@Injectable()
export class SurveyBuilderService {
    public selectedPageIndex: number = 0;
    protected survey: UISurveyObj;
    protected surveyModel: Model;

    constructor(
        private bank: QuestionBankService,
        private _settings: SettingsService,
        private _dialog: MatDialog
    ) {
    }

    public get selectedPage() {
        return this.survey?.pages[this.selectedPageIndex];
    }

    public async setUISurvey(survey: UISurveyObj) {
        this.bank.resetTransaction();
        if (!survey) return;
        this.survey = survey;
        const { pages } = survey;
        if (pages?.length > 0) {
            let questions = [];
            pages.forEach((p) => {
                questions = [...questions, ...(p.elements || [])];
            });
            if (questions.length > 0)
                this.bank.setWithdrawnQuestions(questions);
        }
    }

    public getUISurvey() {
        return this.survey;
    }

    public addSurveyPage() {
        if (!this.survey) return;
        let pages = this.survey.pages || [];
        pages.push({
            title: '',
            elements: [],
        });
        this.survey.pages = pages;
        this.selectedPageIndex = pages.length - 1;
    }

    public async confirmDeletePage(index: number) {
        if (index < 1) return;
        const details = await openConfirmModal(
            {
                title: 'Confirm delete page',
                content: `Are you sure you want to delete this page?\n 
                          All marked-for-deletion questions will also be removed.`,
                icon: { class: 'material-icons', content: 'delete' },
            },
            this._dialog
        );
        if (details.reason !== 'done') return;
        details.close();
        this.removeSurveyPage(index);
    }

    public async removeQuestionFromSurvey(index: number) {
        const q = this.selectedPage.elements[index];
        if(q?.deleted){
            const details = await openConfirmModal(
                {
                    title: 'Question marked for deletion',
                    content: `This question has been marked for deletion.\n 
                                You will not be able to add this question back after removing it from the survey.\n 
                                Are you sure you want to delete this question?`,
                    icon: { class: 'material-icons', content: 'delete' },
                },
                this._dialog
            );
            
            if (details.reason !== 'done') return;
            details.close();
        }
        const target = this.selectedPage.elements.splice(index, 1);
        this.bank.depositQuestions(target);
    }

    public onDropQuestionToSurvey(
        event: CdkDragDrop<Question[]>,
        p: UISurveyPage
    ) {
        if (!p) return;
        const { previousIndex, previousContainer, currentIndex, container } =
            event;
        if (container !== previousContainer) {
            //Dropped from question bank
            const q = this.bank.withdrawFilteredQuestion(previousIndex);
            p.elements.splice(currentIndex, 0, q);
        } else {
            //Reorder Question
            const q = p.elements.splice(previousIndex, 1);
            p.elements.splice(currentIndex, 0, q[0]);
        }
    }

    public onPreview() {
        const logo_data = this._settings.get('app.survey.logo');
        let logo = {};
        if (logo_data?.length) {
            logo = {
                logo: logo_data,
                logoWidth: '200px',
                logoPosition: 'right',
            };
        }
        this.surveyModel = new Model({ ...logo, ...this.survey });
    }

    private removeSurveyPage(index: number) {
        if (index === 0) return;
        let pages = this.survey.pages || [];

        /** Check if removed page has any questions and deposit them to bank */
        const target = pages[index];
        if (target?.elements?.length)
            this.bank.depositQuestions(target.elements);

        pages.splice(index, 1);
        this.survey.pages = pages;
        this.selectedPageIndex = 0;
    }
}
