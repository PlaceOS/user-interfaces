import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { SettingsService } from "@placeos/common";

@Component({
    selector: 'new-desk-select-modal',
    styles: [],
    template: `
        <div
            class="absolute inset-0 sm:relative sm:inset-none bg-white flex flex-col"
        >
            <header class="flex items-center space-x-4 w-full">
                <button mat-icon-button mat-dialog-close class="bg-black/20">
                    <app-icon>close</app-icon>
                </button>
                <h3>Find Desk</h3>
            </header>
            <main
                class="flex-1 flex items-center divide-x divide-gray-200 min-h-[65vh] h-[65vh] w-full"
            >
                <div class="flex flex-col items-center flex-1 h-full">
                    <!-- TODO: desk filters -->
                    <desk-filters-display
                        class="w-full border-b border-gray-200"
                        [(view)]="view"
                    ></desk-filters-display>
                    <desk-list class="flex-1 h-1/2"></desk-list>
                    <!-- desk list view -->
                </div>
            </main>
        </div>

    `
})
export class NewDeskSelectModalComponent{

    public view = 'list';

    constructor(
        private _settings: SettingsService,
        @Inject(MAT_DIALOG_DATA) data: any){
        
    }

}