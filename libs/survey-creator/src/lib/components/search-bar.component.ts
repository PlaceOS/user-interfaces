import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { SurveyCreatorService } from '../survey-creator.service';
import { Question } from '../survey-types';

@Component({
    selector: 'search-bar',
    template: `
        <section class="search-bar-wrapper">
            <div class="search-input-box">
                <span>
                    <input-title
                        [placeholder]="'Search here'"
                        [fontSize]="12"
                    ></input-title>
                </span>
                <span>
                    <mat-icon
                        aria-hidden="false"
                        aria-label="Material icon for search field"
                        class="icon"
                        >search</mat-icon
                    >
                </span>
            </div>
            <div class="button-selection">
                <button-with-icon
                    [button_title]="'Desk'"
                    [icon]="'desk'"
                ></button-with-icon>
                <button-with-icon
                    [button_title]="'Room'"
                    [icon]="'meeting_room'"
                ></button-with-icon>
                <button-with-icon
                    [button_title]="'Parking'"
                    [icon]="'directions_car'"
                ></button-with-icon>
            </div>
        </section>
    `,
    styles: [
        `
            .search-bar-wrapper {
                display: flex;
                flex-direction: column;
                background-color: #fff;
                border: 1px solid rgba(0, 0, 0, 0.12);
            }

            .search-input-box {
                display: flex;
                border: 1px solid rgba(0, 0, 0, 0.12);
                border-radius: 5px;
                font-size: 12px;
                color: #808080;
                margin: 10px 20px;
                align-items: center;
                justify-content: space-between;
            }

            .search-input-box span {
                display: inline-flex;
                align-items: center;
                vertical-align: middle;
            }

            .icon {
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 10px;
            }

            .button-selection {
                display: flex;
                margin-left: 10px;
            }

            .question-list {
                background-color: #f5f5f5;
            }
        `,
    ],
})
export class SearchBarComponent implements OnInit {
    @Input() query: string;

    constructor(public surveyCreatorService: SurveyCreatorService) {}

    ngOnInit(): void {}
}
