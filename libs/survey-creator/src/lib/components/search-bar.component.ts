import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { SurveyCreatorService } from '../survey-creator.service';
import { SearchService } from '../search.service';
import { Question, Tag } from '../survey-types';
import { isThisSecond } from 'date-fns/esm';

@Component({
    selector: 'search-bar',
    template: `
        <section class="search-bar-wrapper">
            <div class="search-input-box">
                <span>
                    <input-title
                        #searchQuery
                        class="search-input"
                        [placeholder]="'Search here'"
                        [fontSize]="12"
                        (change)="updateQuery($event)"
                        [value]="query"
                        (onblur)="(clearQuery)"
                    >
                    </input-title>
                    <mat-icon
                        *ngIf="query?.length"
                        aria-hidden="false"
                        aria-label="Material icon for deleting question"
                        class="icon close-icon "
                        (click)="clearQuery()"
                        >close</mat-icon
                    >
                </span>

                <span>
                    <button mat-icon-button>
                        <mat-icon
                            aria-hidden="false"
                            aria-label="Material icon for search field"
                            class="icon"
                            (click)="search()"
                            >search</mat-icon
                        >
                    </button>
                </span>
            </div>
            <div class="button-selection">
                <div *ngFor="let tag of searchService.tags">
                    <button-with-icon
                        [button_title]="tag.name"
                        [icon]="tag.icon"
                        (click)="applyTag(tag.name)"
                        [clicked]="tag.apply"
                    ></button-with-icon>
                </div>
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
                position: relative;
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
            .close-icon {
                position: absolute;
                right: 50px;
            }
            .button-selection {
                display: flex;
                flex-direction: row;
                width: 100%;
                margin-left: 10px;
            }
            .search-input {
                width: 300px;
            }
            .clicked {
                display: flex;
                background-color: pink;
            }
        `,
    ],
})
export class SearchBarComponent implements OnInit {
    query: string = '';

    public Tag: Tag;
    clicked: boolean;
    constructor(
        public surveyCreatorService: SurveyCreatorService,
        public searchService: SearchService
    ) {}

    ngOnInit(): void {}

    applyTag(tag: string): void {
        this.searchService.filterByTags(tag);
        this.clicked = !this.clicked;
    }
    search() {
        this.searchService.searchQuestions(this.query);
    }
    updateQuery(event) {
        this.query = event.target.value;
        if (this.query?.length == 0) {
            this.searchService.searchQuestions(this.query);
        }
    }
    clearQuery() {
        this.query = null;
        this.searchService.searchQuestions('');
    }
}
