import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import {
    Building,
    BuildingLevel,
    OrganisationService,
} from '@placeos/organisation';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddBuildingModalComponent } from '../components/add-building-modal.component';
import { BuildingsService } from '../services/buildings.service';

@Component({
    selector: 'building-list',
    template: `
        <section>
            <header class="heading-wrapper">
                <div class="left-wrapper">
                    <span class="heading">{{ building_count }} </span>
                    <span *ngIf="building_count == 1" class="heading"
                        >Building</span
                    >
                    <span *ngIf="building_count != 1" class="heading">
                        Buildings</span
                    >
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
            <main>
                <div *ngFor="let building of buildings$ | async">
                    <building-list-item
                        [building]="building"
                        (deleteBuildingEvent)="deleteBuilding($event)"
                    ></building-list-item>
                </div>
            </main>
        </section>
    `,
    styles: [
        `
            section {
                background-color: #fff;
            }
            main {
                padding-bottom: 30px;
            }
            .heading-wrapper {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin: 20px 0px 0px 200px;
                width: 80%;
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
    buildingsSubscription: Subscription = new Subscription();
    private _buildings: BehaviorSubject<Building | any> = new BehaviorSubject<
        Building | any
    >(null);
    buildings$: Observable<Building | any> = this._buildings.asObservable();

    dialogConfig = {
        width: '430px',
        height: '730px',
    };

    constructor(
        public addDialog: MatDialog,
        public buildingsService: BuildingsService
    ) {}

    ngOnInit(): void {
        this.buildings$ = this.buildingsService.buildings$;

        this.buildingsSubscription = this.buildings$.subscribe(
            (buildings) => (this.building_count = buildings?.length)
        );
    }

    addBuilding(): void {
        this.addDialog.open(AddBuildingModalComponent, this.dialogConfig);
    }

    ngOnDestroy(): void {
        this.buildingsSubscription?.unsubscribe();
    }
}
