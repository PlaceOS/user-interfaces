import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { UISurveyAnswer } from '../types';
import { BaseWidgetComponent } from './base-widget.component';

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

            blockquote:after,
            blockquote:before {
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
            class="relative flex h-full max-h-[22rem] min-h-0 w-full flex-col divide-y divide-base-300 overflow-y-auto"
        >
            @let data = chart_data$ | async;
            @if (data?.length) {
                @for (d of data; track d) {
                    <div class="mx-4 flex flex-1 p-2">
                        <blockquote class="text-sm">
                            {{ d }}
                        </blockquote>
                    </div>
                }
            } @else {
                <p
                    class="mx-4 mb-2 rounded bg-base-300 p-8 text-center opacity-30"
                >
                    No responses
                </p>
            }
        </div>
    `,
    imports: [CommonModule],
})
export class TableWidgetComponent extends BaseWidgetComponent {
    public chart_data$ = this.data$.pipe(
        map((data: UISurveyAnswer[]) =>
            data.reduce((acc, curr) => (acc.push(curr.answer_json), acc), []),
        ),
    );
}
