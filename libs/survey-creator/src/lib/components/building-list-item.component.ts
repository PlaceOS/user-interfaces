import { Component, OnInit, Input } from '@angular/core';
import { Building } from '@placeos/organisation';

@Component({
    selector: 'building-list-item',
    template: `
        <section class="building-wrapper">
            <div class="image-container"><img />Placeholder Image</div>
            <div class="details-container">
                <div class="location-wrapper">
                    <mat-icon
                        class="location-icon"
                        aria-hidden="false"
                        aria-label="Material icon of location pointer"
                        >location_on</mat-icon
                    >
                    <span> Location </span>
                </div>

                <span class="building-title">
                    {{ building.name }}
                </span>
                <ul class="details-text">
                    <li>surveys live</li>
                    <li>draft</li>
                    <li>responses</li>
                </ul>
            </div>
            <div class="button-container"><button>View</button></div>
        </section>
    `,
    styles: [
        `
            .building-wrapper {
                display: flex;
                flex-direction: row;
                position: relative;
                justify-content: flex-start;
                height: 260px;
                min-width: 1100px;
                width: 80%;
                margin: 25px 200px;
                border: 1px solid #e6e6e6;
                box-shadow: 0px 2px 4px rgba(5, 28, 44, 0.1);
                border-radius: 6px;
            }
            .image-container {
                display: flex;
                height: 100%;
                width: 380px;
                background-color: gray;
            }
            .details-container {
                display: flex;
                flex-direction: column;

                min-width: 600px;
                margin: 30px;
            }
            .location-wrapper {
                display: flex;
                flex-direction: row;
                align-items: center;
                margin-bottom: 20px;
            }
            .location-icon {
                color: #5295f7;
                margin-right: 10px;
            }
            .building-title {
                font-size: 18px;
                font-weight: 500;
            }
            .details-text {
                display: flex;
                flex-direction: column;
                font-size: 14px;
                font-weight: 400;
                color: #020202;
                margin-bottom: 10px;
                justify-content: space-between;
                height: 70px;
            }
            .button-container {
                display: flex;
                position: absolute;
                bottom: 20px;
                right: 20px;
            }
        `,
    ],
})
export class BuildingListItemComponent implements OnInit {
    @Input() building: Building;
    constructor() {}

    ngOnInit(): void {}
}
