import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    Building
} from '@placeos/organisation';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { AddBuildingModalComponent } from '../components/add-building-modal.component';
import { BuildingsService } from '../services/buildings.service';

@Component({
    selector: 'building-list',
    template: `
        <sidebar class="h-full"></sidebar>
        <main class="flex flex-col flex-1 relative h-full bg-white dark:bg-neutral-600 pt-4 overflow-y-auto">
            <section>

                <div class="flex flex-col">
                    <div class="flex w-full items-center justify-between py-4 bg-white max-w-[68rem] m-auto">
                        <span class="text-2xl">{{building_count}} Building{{building_count > 1 ? 's':''}}</span>
                        <button
                            mat-button
                            (click)="addBuilding()">
                            <span>Add Building</span>
                            <mat-icon>add</mat-icon>
                        </button>
                    </div>
                    <div *ngFor="let building of buildings$ | async">
                        <building-list-item
                            [building]="building"
                            (deleteBuildingEvent)="deleteBuilding($event)"
                        ></building-list-item>
                    </div>
                </div>
            </section>
        </main>
    `,
    styles: [
        `
            :host {
                display: flex;
                height: 100%;
                width: 100%;
            }
            /* section {
                margin-top: -20px;
                margin-right: 0;
                width: 100%;
                
            }
            .heading-wrapper {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin: 20px 0px 0px 200px;
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
                margin: 20px;
                padding: 0px 20px;
            } */
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
