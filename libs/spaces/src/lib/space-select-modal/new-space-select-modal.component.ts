import { Component } from "@angular/core";
import { Space } from "../space.class";

@Component({
    selector: 'new-space-select-modal',
    template: `
        <div class="">
            <header class="flex items-center space-x-2">
                <button mat-icon-button mat-dialog-close>
                    <app-icon>close</app-icon>
                </button>
                <h3>Find Space</h3>
            </header>
            <main class="flex items-center">
                <space-filters></space-filters>
                <div class="flex flex-col items-center flex-1 w-1/2">
                    <space-filters-display></space-filters-display>
                    <space-list class="flex-1 h-1/2"></space-list>
                </div>
                <space-details></space-details>
            </main>
            <footer class="flex items-center justify-end p-2 space-x-2 border-t border-gray-200">
                <button mat-button return class="inverse sm:hidden" mat-dialog-close>Back</button>
                <button mat-button save [mat-dialog-close]="selected">View List</button>
            </footer>
        </div>
    `,
    styles: [``]
})
export class NewSpaceSelectModalComponent {
    public displayed?: Space;
    public selected: Space[] = [];
}
