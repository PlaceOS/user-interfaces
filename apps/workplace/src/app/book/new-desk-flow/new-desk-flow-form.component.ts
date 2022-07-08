import { Component, OnInit } from "@angular/core";
import { MatBottomSheet, MatBottomSheetRef } from "@angular/material/bottom-sheet";
import { Router } from "@angular/router";
import { BookingFormService } from "@placeos/bookings";
import { getInvalidFields, notifyError, SettingsService } from "@placeos/common";
import { OrganisationService } from "@placeos/organisation";
import { first } from 'rxjs/operators';
import { NewDeskFlowConfirmComponent } from "./new-desk-flow-confirm.component";

@Component({
    selector: 'new-desk-flow-form',
    styles: [],
    template: `
        <div class="absolute inset-0 bg-gray-100 overflow-auto">
            <div class="max-w-full w-[768px] mx-auto sm:my-4 bg-white border border-gray-300">
                <h2 class="w-full p-4 sm:py-4 sm:px-16 text-2xl font-medium border-b border-gray-300">
                   Book Desk
                </h2>
                <new-desk-form-details [form]="form"></new-desk-form-details>
                <div class="sm:mb-2 border-b border-gray-300 w-full"></div>
                <!-- <div
                    class="flex flex-col sm:flex-row items-center justify-center space-x-0 space-y-2 sm:space-y-0 sm:space-x-2 w-[640px] max-w-[calc(100%-2rem)] mx-auto mb-4"
                >
                    <button
                        class="sm:flex-1 w-full sm:w-auto h-[2.75rem] inverse"
                        mat-button
                        clear
                        (click)="clearForm()"
                    >
                        <div class="flex items-center justify-center">
                            <app-icon class="text-xl">clear</app-icon>
                            <span class="ml-2 mx-4">{{
                                is_edit ? 'Cancel Edit' : 'Clear Form'
                            }}</span>
                        </div>
                    </button>
                    <button
                        class="sm:flex-1 w-full sm:w-auto h-[2.75rem]"
                        find
                        mat-button
                        (click)="findDesk()"
                    >
                        <div class="flex items-center justify-center">
                            <app-icon class="text-xl">search</app-icon>
                            <span class="ml-2 mx-4">{{
                                is_edit ? 'Update Desk' : 'Find Desk'
                            }}</span>
                        </div>
                    </button>
                </div> -->
                <section class="flex flex-col sm:flex-row items-center sm:space-x-2 p-2 sm:px-16 sm:mb-2">
                    <button
                        mat-button
                        confirm
                        class="w-full sm:w-auto"
                        [disabled]="!form.valid"
                        (click)="viewConfirm()"
                    >
                        Confirm Meeting
                    </button>
                </section>
            </div>
        </div>

    `,
})
export class NewDeskFlowFormComponent implements OnInit{
    public sheet_ref: MatBottomSheetRef<any>;
    public level = '';
    public levels = [];

    public get form() {
        return this._state.form;
    }

    public readonly clearForm = () => {
        this.level = this._org.building.id;
        this._state.clearForm();
    };

    public readonly viewConfirm = () => {
        if (!this.form.valid)
            return notifyError(
                `Some fields are invalid. [${getInvalidFields(this.form).join(
                    ', '
                )}]`
            );
        this.sheet_ref = this._bottom_sheet.open(NewDeskFlowConfirmComponent);
        this.sheet_ref.instance.show_close = true;
        this.sheet_ref.afterDismissed().subscribe((value) => {
            if(value){
                this._router.navigate(['/book','newdesk','success']);
                this._state.setView('success');
            }
        })
    }
    
    constructor(
        private _state: BookingFormService,
        private _router: Router,
        private _org: OrganisationService,
        private _settings: SettingsService,
        private _bottom_sheet: MatBottomSheet
    ) {}

    
    public async ngOnInit() {
        await this._org.initialised.pipe(first((_) => _));
        await this._org.active_levels.pipe(first((_) => _?.length > 0));
        this.level = this._org.building?.id;
        this.levels = [
            { id: this._org.building?.id, name: 'Any Level' },
            ...this._org.levelsForBuilding(this._org.building),
        ];
    }


    // public findDesk() {
    //     this.form.markAllAsTouched();
    //     if (!this.form.valid) return;
    //     this._router.navigate(['/book', 'desks', 'map']);
    // }

    
}