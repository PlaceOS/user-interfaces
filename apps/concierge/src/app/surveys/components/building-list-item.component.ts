import { Component, OnInit, Input } from '@angular/core';
import { Building } from '@placeos/organisation';
import { Router, ActivatedRoute } from '@angular/router';
import { BuildingListItemService } from '../services/building-list-item.service';
import { shareReplay } from 'rxjs/operators';
import { SettingsService } from '@placeos/common';

@Component({
    selector: 'building-list-item',
    template: `
        <section
            class="building-wrapper bg-base-100 my-4 mx-auto rounded-md overflow-hidden"
        >
            <div *ngIf="building.image" class="image-container">
                <img
                    auth
                    class="flex object-fill "
                    [source]="building.image"
                    alt="image of building"
                />
            </div>
            <div *ngIf="!building.image" class="image-container">
                <span> <app-icon class="domain-icon">domain</app-icon></span>
            </div>
            <div class="details-container my-4 mx-8 w-full relative">
                <div class="location-wrapper">
                    <app-icon
                        class="location-icon"
                        aria-hidden="false"
                        aria-label="Material icon of location pointer"
                        >location_on</app-icon
                    >
                    <span> {{ building.address }} </span>
                </div>

                <span class="building-title">
                    {{ building.display_name }}
                </span>
                <ng-container
                    *ngIf="!(loading$ | async)?.length; else loadState"
                >
                    <ng-container *ngIf="stats$ | async as stats">
                        <div class="flex py-4 justify-end space-x-2">
                            <div class="flex flex-col items-center flex-1">
                                <h3>Live Surveys</h3>
                                <p class="text-4xl">
                                    {{ stats?.lives || 0 }}
                                </p>
                            </div>
                            <div class="flex flex-col items-center flex-1">
                                <h3>Draft Surveys</h3>
                                <p class="text-4xl">
                                    {{ stats?.drafts || 0 }}
                                </p>
                            </div>
                            <div class="flex flex-col items-center flex-1">
                                <h3>Total Answers</h3>
                                <p class="text-4xl">
                                    {{ stats?.responses || 0 }}
                                </p>
                            </div>
                        </div>
                    </ng-container>
                </ng-container>
                <div class="flex justify-end w-full mt-4">
                    <button btn matRipple class="inverse" (click)="navigate()">
                        <span class="ml-2">View</span>
                        <app-icon class="ml-1 text-2xl">chevron_right</app-icon>
                    </button>
                </div>
            </div>
        </section>
        <ng-template #loadState>
            <div class="flex absolute inset-0 opacity-60 bg-base-100 z-10">
                <div class="flex flex-col m-auto items-center">
                    <mat-spinner [diameter]="32"></mat-spinner>
                    <span>{{ loading$ | async }}</span>
                </div>
            </div>
        </ng-template>
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
                background-color: var(--b1);
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
                background-color: var(--b1);
                border-radius: 2px;
                margin: 20px 0px 20px 20px;
                justify-content: center;
                padding-left: 20px;
            }
            .view-button span {
                display: inline-flex;
            }
            .view-button app-icon {
                display: flex;
                justify-content: center;
                align-items: center;
            } */
        `,
    ],
    providers: [BuildingListItemService],
})
export class BuildingListItemComponent implements OnInit {
    @Input() building: Building | any;

    loading$ = this.service.loading$.pipe(shareReplay(1));
    stats$ = this.service.stats$.pipe(shareReplay(1));

    constructor(
        private _settings: SettingsService,
        private router: Router,
        private service: BuildingListItemService
    ) {}

    ngOnInit(): void {
        this.service.initStats(this.building.id);
    }

    navigate(): void {
        this.router.navigate([
            this._settings.get('app.default_route').includes('new')
                ? '/surveys/new'
                : '/survey',
            'survey-list',
            this.building.id,
        ]);
    }
}
