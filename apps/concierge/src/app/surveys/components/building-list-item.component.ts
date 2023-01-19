import { Component, OnInit, Input } from '@angular/core';
import { Building } from '@placeos/organisation';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'building-list-item',
    template: `
        <section
            class="building-wrapper bg-white my-4 mx-auto rounded-md overflow-hidden"
        >
            <!-- <div
                class="options"
                [matMenuTriggerFor]="optionsMenu"
                aria-label="more options"
            >
                <mat-icon>more_horiz</mat-icon>
            </div>
            <mat-menu #optionsMenu="matMenu">
                <div class="menu-wrapper">
                    <button mat-menu-item (click)="editBuilding()">
                        <mat-icon>edit</mat-icon>
                        <span>Edit</span>
                    </button>
                    <button mat-menu-item (click)="deleteBuilding()">
                        <mat-icon>delete_forever</mat-icon>
                        <span>Delete</span>
                    </button>
                </div>
            </mat-menu> -->
            <div *ngIf="building.image" class="image-container">
                <img
                    class="flex object-fill "
                    [src]="building.image"
                    alt="image of building"
                />
            </div>
            <div *ngIf="!building.image" class="image-container">
                <span> <mat-icon class="domain-icon">domain</mat-icon></span>
            </div>
            <div class="details-container">
                <div class="location-wrapper">
                    <mat-icon
                        class="location-icon"
                        aria-hidden="false"
                        aria-label="Material icon of location pointer"
                        >location_on</mat-icon
                    >
                    <span> {{ building.address }} </span>
                </div>

                <span class="building-title">
                    {{ building.display_name }}
                </span>
                <!-- <ul class="details-text mt-3">
                    <li>surveys live: {{ mock_count }}</li>
                    <li>drafts: {{ mock_count - 1 }}</li>
                    <li>responses: {{ mock_count - 3 }}</li>
                </ul> -->
            </div>
            <div class="button-container">
                <button btn matRipple class="inverse" (click)="navigate()">
                    <span class="ml-2">View</span>
                    <app-icon class="ml-1 text-2xl">chevron_right</app-icon>
                </button>
            </div>
        </section>
    `,
    styles: [
        `
            .building-wrapper {
                display: flex;
                position: relative;
                flex-direction: row;
                position: relative;
                justify-content: flex-start;
                height: 260px;
                max-width: 68rem;
                border: 1px solid #e6e6e6;
                box-shadow: 0px 2px 4px rgba(5, 28, 44, 0.1);
            }
            .options {
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: #fff;
                position: absolute;
                height: 48px;
                width: 48px;
                top: 10px;
                left: 10px;
                border: 1px solid #e6e6e6;
                border-radius: 3px;
            }
            .menu-wrapper {
                display: flex;
                flex-direction: column;
                height: 90px;
                width: 135px;
                justify-content: center;
            }
            .image-container {
                display: flex;
                height: 100%;
                width: 380px;
                background-color: rgba(0, 0, 0, 0.22);
                align-items: center;
                justify-content: center;
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
            .domain-icon {
                display: flex;
                color: #fff;
                height: 100%;
                width: 100%;
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
            /* .view-button {
                display: inline-flex;
                color: #292f5b;
                background-color: #fff;
                border-radius: 2px;
                margin: 20px 0px 20px 20px;
                justify-content: center;
                padding-left: 20px;
            }
            .view-button span {
                display: inline-flex;
            }
            .view-button mat-icon {
                display: flex;
                justify-content: center;
                align-items: center;
            } */
        `,
    ],
})
export class BuildingListItemComponent implements OnInit {
    @Input() building: Building | any;
    // @Output() deleteBuildingEvent = new EventEmitter<any>();
    mock_count: number;

    constructor(public router: Router, public route: ActivatedRoute) {}

    ngOnInit(): void {
        this.mock_count = Math.floor(Math.random() * (8 - 3) + 3);
    }

    navigate(): void {
        this.router.navigate(['survey-list', this.building.id], {
            relativeTo: this.route,
        });
    }
}
