import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'design-preview-container',
    template: `
        <section class="design-preview-section">
            <nav class="tabs-section">
                <mat-tab-group mat-align-tabs="start" animationDuration="0ms">
                    <mat-tab label="Design">
                        <div class="design-content">
                            <div id="survey-title">
                                <input-title
                                    [placeholder]="'Survey Title'"
                                    [fontSize]="20"
                                ></input-title>
                            </div>
                        </div>
                    </mat-tab>
                    <mat-tab label="Preview">Preview</mat-tab>
                </mat-tab-group>
            </nav>
        </section>
    `,

    styles: [
        `
            #survey-title {
                border-bottom: 2px solid #808080;
                margin: 10px 25px;
            }
            .design-preview-section {
                background-color: #f5f5f5;
            }

            .design-content {
                margin: 0;
                padding: 0;
                background-color: #f5f5f5;
            }

            .tabs-section {
                background-color: #fff;
            }

            .mat-tab-body-wrapper {
                background-color: #fff;
            }
        `,
    ],
})
export class DesignPreviewContainerComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
