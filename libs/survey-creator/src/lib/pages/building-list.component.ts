import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'building-list',
    template: `
        <section>
            <header class="heading-wrapper">
                <div class="left-wrapper">
                    <span class="heading">{{ building_count }} </span>
                    <span class="heading"> Buildings</span>
                </div>

                <button
                    mat-button
                    class="add-button"
                    color="primary"
                    (click)="addBuilding()"
                >
                    Add Building
                    <mat-icon>add</mat-icon>
                </button>
            </header>
        </section>
    `,
    styles: [
        `
            .heading-wrapper {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin: 20px 0px 0px 20px;
                width: 90%;
            }
            .heading {
                font-size: 20px;
                font-weight: 500;
            }
            .add-button {
                display: flex;
                color: #fff;
                background-color: #292f5b;
                border-radius: 2px;
                margin: 20px 0px 20px 20px;
                padding: 0px 20px;
            }
        `,
    ],
})
export class BuildingListComponent implements OnInit {
    building_count: number = 0;
    constructor() {}

    ngOnInit(): void {}

    addBuilding(): void {}
}
