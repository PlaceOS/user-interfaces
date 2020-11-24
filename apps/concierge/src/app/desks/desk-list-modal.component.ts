import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { updateMetadata } from '@placeos/ts-client';
import {
    csvToJson,
    downloadFile,
    jsonToCsv,
    notifyError,
    notifySuccess,
} from '@user-interfaces/common';
import { Building, BuildingLevel, Desk } from '@user-interfaces/organisation';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

export interface DeskListModalData {
    building: Building;
    level: BuildingLevel;
    desks: Desk[];
}

@Component({
    selector: 'desk-list-modal',
    template: `
        <header class="flex items-center">
            <h2 style="margin-right: 1rem;">
                <strong>List of Desks</strong> -
                {{ building.display_name || building.name }},
                {{ level.display_name || level.name }}
            </h2>
            <button mat-icon-button mat-dialog-close>
                <app-icon className="material-icons">close</app-icon>
            </button>
        </header>
        <ng-container *ngIf="!loading; else load_state">
            <main class="flex flex-col">
                <div
                    class="flex items-center p-2 space-x-2 w-full border-b border-gray-300"
                >
                    <searchbar [model]="filter$ | async" (modelChange)="filter$.next($event)"></searchbar>
                    <div class="flex-1 w-0"></div>
                    <button mat-button class="relative">
                        Upload List
                        <input
                            type="file"
                            class="absolute inset-0 opacity-0"
                            (change)="upload($event)"
                        />
                    </button>
                    <button mat-button (click)="download()">
                        Download List
                    </button>
                </div>
                <div class="flex flex-col flex-1 w-full">
                    <div
                        class="flex items-center p-2 border-b border-gray-300 font-medium"
                    >
                        <div class="w-40 p-1 flex-1" flex>ID</div>
                        <div class="w-32 p-1">Name</div>
                        <div class="w-32 p-1">Safe</div>
                        <div class="w-32 p-1">LoS</div>
                    </div>
                    <div table class="flex-1 overflow-auto">
                        <div
                            class="flex item-center p-2 border-b border-gray-200"
                            *ngFor="let desk of desk_list | async"
                        >
                            <div class="w-40 p-1 flex-1" flex>
                                {{ desk.id }}
                            </div>
                            <div class="w-32 p-1">{{ desk.name }}</div>
                            <div class="w-32 p-1">
                                <mat-checkbox
                                    [(ngModel)]="desk.bookable"
                                ></mat-checkbox>
                            </div>
                            <div class="w-32">
                                <input
                                    class="border-none bg-none w-full p-1"
                                    [(ngModel)]="desk.group"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer
                class="flex items-center justify-center space-x-2 p-2 border-t border-gray-300"
            >
                <button mat-button class="w-32" (click)="save()">Save</button>
            </footer>
        </ng-container>
        <ng-template #load_state>
            <main
                class="w-64 h-48 mx-auto flex flex-col items-center justify-center"
            >
                <mat-spinner class="m-4" [diameter]="48"></mat-spinner>
                <p>{{ loading }}</p>
            </main>
        </ng-template>
    `,
    styles: [
        `
            main {
                max-height: 65vh;
            }

            [table] {
                height: 1px;
                max-height: 50vh;
            }
        `,
    ],
})
export class DeskListModalComponent {
    public readonly building = this._data.building;
    public readonly level = this._data.level;
    public readonly desks$ = new BehaviorSubject(this._data.desks);
    public readonly filter$ = new BehaviorSubject('');

    public loading: string;

    public desk_list = combineLatest([this.filter$, this.desks$]).pipe(
        map((details) => {
            const [filter, desks] = details;
            return desks.filter(
                (desk) =>
                    desk.name.toLowerCase().includes(filter.toLowerCase()) ||
                    desk.id.toLowerCase().includes(filter.toLowerCase())
            );
        })
    );

    constructor(@Inject(MAT_DIALOG_DATA) private _data: DeskListModalData, private _dialog_ref: MatDialogRef<DeskListModalComponent>) {}

    /** Download Desks list */
    public download() {
        const data = this.desks$.getValue().map((i) => i.format());
        const csv = jsonToCsv(data);
        const name = this.level.display_name.split(' ').join('-').toLowerCase();
        downloadFile(`desks_${name}.csv`, csv);
    }

    /** Upload Desks list from csv */
    public upload(event) {
        if (event.target) {
            const file = event.target.files[0];
            if (file) {
                this.loading = 'Uploading...';
                const reader = new FileReader();
                reader.readAsText(file, 'UTF-8');
                reader.onload = () => {
                    this.processCSV(reader.result as string);
                    this.loading = '';
                };
                reader.onerror = (evt) => {
                    this.loading = '';
                    notifyError('Error reading file.');
                };
            }
        }
    }

    public async save() {
        this.loading = 'Saving changes to desks...';
        await updateMetadata(this.level.id, {
            name: 'desks',
            description: 'desks',
            details: this.desks$.getValue(),
        }).toPromise().catch(e => {
            this.loading = '';
            notifyError(`Error saving desk data. Error: ${e.message || e}`);
            throw e;
        });
        notifySuccess(
            'Successfully updated desks'
        );
        this.loading = '';
        this._dialog_ref.close();
    }

    /** Process csv */
    private processCSV(csv: string) {
        const data = csvToJson(csv);
        this.desks$.next(data.map((i) => new Desk(i)));
        notifySuccess(
            'Upload was sucessful. Click Save Button to save the changes'
        );
    }

}
