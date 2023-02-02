import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { UISurveyAnswer } from '../types';
import { BaseWidget } from './base-widget.component';

@Component({
    selector: 'table-widget',
    styles: [
        `
            :host {
                display: flex;
                height: 100%;
                width: 100%;
                padding-bottom: 0.5rem;
            }

            blockquote:after, blockquote:before {
                font-size: 1.3rem;  
            } 

            blockquote:after {                                                       
                content: close-quote;
                vertical-align: bottom;
                margin-left: 0.25rem;
            }

            blockquote:before {                                     
                content: open-quote;
                vertical-align: top;
                margin-right: 0.25rem;
            }
        `,
    ],
    template: `
        <div
            class="flex flex-col min-h-0 max-h-[22rem] h-full w-full overflow-y-auto relative"
        >
            <ng-container *ngIf="chart_data$ | async as data">
                <div *ngFor="let d of data" class="flex flex-1 p-2 border-b mx-4">
                    <blockquote>
                        <span class="text-gray-700">{{d}}</span>
                    </blockquote>
                </div>
            </ng-container>
        </div>
    `,
})
export class TableWidgetComponent extends BaseWidget {
    public chart_data$ = this.data$.pipe(
        map((data: UISurveyAnswer[]) =>
            data.reduce((acc, curr) => (acc.push(curr.answer_json), acc), [])
        )
    );

    constructor() {
        super();
    }
}
