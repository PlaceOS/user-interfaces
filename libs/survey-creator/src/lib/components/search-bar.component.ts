import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { SurveyCreatorService } from '../survey-creator.service';
import { SearchService } from '../search.service';
import { Question, Tag } from '../survey-types';

@Component({
    selector: 'search-bar',
    template: `
        <section class="search-bar-wrapper">
            <div class="search-input-box">
                <span>
                    <input-title
                        [placeholder]="'Search here'"
                        [fontSize]="12"
                        (change)="updateQuery($event)"
                        (keyup)="search()"
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
                flex-direction: row;
                width: 100%;
                margin-left: 10px;
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
        console.log(this.query, 'key up');
        this.searchService.searchQuestions(this.query);
    }

    updateQuery(event) {
        this.query = event.target.value;
    }
}
