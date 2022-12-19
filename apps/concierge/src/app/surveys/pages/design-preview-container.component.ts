import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Observable, fromEvent, BehaviorSubject, of } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { Question, QuestionType } from '../survey-types';
import { SurveyCreatorService } from '../services/survey-creator.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddQuestionBankComponent } from '../components/add-question-bank.component';
import { EditQuestionBankComponent } from '../components/edit-question-bank.component';
import { SearchService } from '../services/search.service';
import { FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { BuildingsService } from '../services/buildings.service';

@Component({
    selector: 'design-preview-container',
    templateUrl: './design-preview-container.component.html',
    styles: [
        `
            :host {
                display: flex;
                height: 100%;
                width: 100%;
            }
            .page-wrapper {
                background-color: #fff;
                padding: 20px;
            }
            .heading-wrapper {
                display: flex;
                align-items: center;
                justify-content: space-between;
            }

            .left-wrapper {
                display: flex;
                align-items: center;
            }
            .right-wrapper {
                display: flex;
                align-items: center;
            }

            .back-arrow {
                display: flex;
                margin-right: 10px;
            }
            .page-heading {
                line-height: 34px;
                font-size: 26px;
                font-weight: 400;
            }
            .add-button {
                display: flex;
                color: #fff;
                background-color: #292f5b;
                border-radius: 2px;
                margin: 20px 0px 20px 20px;
                padding: 0px 20px;
            }
            .section-wrapper {
                display: flex;
                flex: auto;
                flex-direction: row;
                border: 1px solid gray;
                background-color: #f5f5f5;
            }
            .survey-title-container {
                border-bottom: 2px solid #808080;
                margin: 10px 25px;
            }
            .survey-title {
                border: none;
                padding: 10px 10px;
                margin: 5px;
                font-weight: 500;
                width: 500px;
                font-size: 16px;
            }

            input.ng-invalid {
                border: 1px solid #3b82f6;
                box-shadow: 0px 2px 4px rgba(5, 28, 44, 0.1);
                border-radius: 4px;
            }
            .input-error {
                font-size: 14px;
                color: #3b82f6;
                border: none;
                margin-left: 30px;
            }
            .preview-survey-title {
                padding: 10px 10px;
                border-bottom: 2px solid #808080;
                margin: 20px 25px;
                font-weight: 500;
                align-items: center;
            }
            .preview-survey-title span {
                display: flex;
                margin: -5px 0px 5px 5px;
            }
            .design-preview-section {
                display: flex;
                flex: auto;
                flex-direction: column;
                background-color: #f5f5f5;
                color: #808080;
                border-right: 1px solid #808080;
                min-width: 800px;
            }
            .design-content {
                margin: 0;
                padding: 0;
                background-color: #f5f5f5;
                min-height: 500px;
            }
            .mat-tab-body-wrapper {
                background-color: #fff;
            }
            .question-bank-section {
                display: flex;
                flex-direction: column;
                background-color: #f5f5f5;
            }

            .header {
                display: flex;
                justify-content: space-between;
                height: 49px;
                border-bottom: 1px solid rgb(0, 0, 0, 0.12);
                padding-right: 5px;
                align-items: center;
                background-color: #fff;
            }
            .title {
                font-size: 14px;
                font-weight: 500;
                color: #808080;
                margin: 20px;
            }
            .selected-questions-container {
                display: inline-block;
                width: 100%;
                min-height: 600px;
            }
            .selected-questions-list {
                display: inline-block;
                width: 100%;
                min-height: 600px;
            }
            .preview-questions-container {
                display: flex;
                flex-direction: column;
                width: 100%;
                min-height: 600px;
                margin-top: -10px;
                align-items: center;
            }
            .preview-list {
                width: 600px;
            }
            .none-selected {
                display: flex;
                flex-direction: column;
                color: #808080;
                width: 200px;
                height: 200px;
                text-align: center;
                margin: 200px auto;
            }
            .none-selected img {
                margin: 10px;
            }
            .complete-button {
                display: flex;
                color: #fff;
                border-radius: 2px;
                margin: 20px 0px 20px 20px;
            }
            .dropdown-options {
                display: flex;
                flex-direction: row;
            }
            .dropdown-container {
                display: flex;
                flex-direction: column;
                margin-right: 20px;
            }
            .dropdown-container mat-label {
                font-size: 14px;
                line-height: 24px;
                font-weight: 700;
                margin-left: 2px;
            }
        `,
    ],
})
export class DesignPreviewContainerComponent implements OnInit, AfterViewInit {
    @ViewChild('tabGroup') tabGroup;

    question_bank$: Observable<Question[]>;
    selected_building: any = '';
    selected_location: any = '';
    selected_level: any = '';
    selected_zone: any = '';
    selected_trigger: any = '';
    levels: any[] | '' = [];
    zones: any[] = [];
    buildings: any = [];

    locations = [{ name: 'Sydney' }, { name: 'Melbourne' }];

    triggers = [
        { name: 'Meetings in Zone 1', metadata: '' },
        { name: 'All Monday meetings', metadata: '' },
        { name: 'Meetings on 17/12/2020', metadata: '' },
    ];

    survey_title: FormControl = new FormControl('Survey Title', [
        Validators.required,
        Validators.minLength(1),
    ]);

    enable_preview: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
        false
    );

    enable_preview$: Observable<boolean> = this.enable_preview.asObservable();
    // enable_preview: Observable<boolean> = of(false);
    selected_questions: Question[] =
        this.surveyCreatorService.selected_questions;

    dialogConfig = {
        width: '900px',
        height: '700px',
    };

    constructor(
        public surveyCreatorService: SurveyCreatorService,
        public searchService: SearchService,
        public addDialog: MatDialog,
        private location: Location,
        public router: Router,
        public buildingsService: BuildingsService
    ) {}

    ngOnInit(): void {
        this.buildings = this.buildingsService.buildings;
        this.question_bank$ = this.searchService.question_bank$;

        if (this.surveyCreatorService.current_building) {
            this.selected_building = this.surveyCreatorService.current_building;
            this.selected_location = this.buildings.find(
                (building) =>
                    building.name == this.surveyCreatorService.current_building
            );
        } else {
            this.selected_building = this.buildings[0].name;
            this.selected_location = this.buildings[0].address;
        }

        const current_building = this.buildings.find(
            (building) => (building.name = this.selected_building)
        );
        this.levels = current_building?.levels;
        this.selected_level = this.levels[0];
        this.zones = this.buildings.map((building) =>
            this.zones.push(building.zone)
        );
        this.selected_zone = this.zones[0];
        this.selected_trigger = this.triggers[0];
    }

    ngAfterViewInit(): void {
        // console.log(this.tabGroup.selectedIndex);
    }

    openAddQuestionBankDialog(): void {
        this.addDialog.open(AddQuestionBankComponent, this.dialogConfig);
        this.surveyCreatorService.newForm();
    }

    openEditQuestionBankDialog(): void {
        this.addDialog.open(EditQuestionBankComponent, this.dialogConfig);
    }
    noReturnPredicate() {
        // return false;
    }

    onKey(event: any): void {
        this.survey_title.patchValue(event.target.value);

        this.surveyCreatorService.survey_title.next(event.target.value);
        this.checkTitle();
    }

    tabChanged(event: any): void {
        // console.log(this.tabGroup.selectedIndex);
        // console.log(event.index, 'index');
    }

    checkTitle(): void {
        if (
            this.survey_title.value === 'Survey Title' ||
            !this.survey_title.valid ||
            !this.survey_title
        ) {
            this.survey_title.patchValue('');
            this.enable_preview.next(false);
        }
        if (this.survey_title.valid) {
            this.enable_preview.next(true);
        }
    }

    async complete() {
        await this.surveyCreatorService.submitSurvey();
        this.navigate();
    }

    back(): void {
        if (window.history.length > 0) {
            this.location.back();
        }
    }

    navigate(): void {
        let found_id;
        this.buildingsService.buildings$.subscribe((buildings) => {
            const found_building = buildings.find(
                (item) =>
                    item.display_name ==
                    this.surveyCreatorService.current_building
            );
            found_id = found_building.id;
        });
        if (found_id) {
            this.router.navigate(['surveys', 'survey-list', found_id]);
        }
    }

    updateLocation() {
        return;
    }
    updateLevel() {
        return;
    }
    updateZone() {
        return;
    }
    updateTrigger() {
        return;
    }
}
