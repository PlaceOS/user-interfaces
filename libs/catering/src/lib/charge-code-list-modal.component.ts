import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { take } from 'rxjs/operators';
import { CateringStateService } from './catering-state.service';

@Component({
    selector: 'charge-code-list-modal',
    template: `
        <header>
            <h2>Edit Charge Codes</h2>
            <button mat-icon-button mat-dialog-close>
                <app-icon>close</app-icon>
            </button>
        </header>
        <main
            *ngIf="!loading; else load_state"
            class="overflow-auto max-h-[65vh] min-h-[20rem] flex flex-col space-y-2"
        >
            <div
                class="flex items-center space-x-2 w-full hover:bg-black/10 px-2 py-1"
                *ngFor="let code of charge_codes; let i = index"
            >
                <mat-form-field appearance="outline" class="h-14 flex-1">
                    <input matInput [(ngModel)]="charge_codes[i]" placeholder="Charge Code" />
                </mat-form-field>
                <button mat-icon-button (click)="removeCode(i)">
                    <app-icon>delete</app-icon>
                </button>
            </div>
        </main>
        <footer class="flex items-center p-2 space-x-2" *ngIf="!loading">
            <button mat-button class="w-48" (click)="newCode()">Add Code</button>
            <button mat-button class="w-48" (click)="saveChargeCodes()">Save Changes</button>
        </footer>
        <ng-template #load_state>
            <main class="flex flex-col items-center justify-center p-20 space-y-2">
                <mat-spinner diameter="32"></mat-spinner>
                <p>Saving changes to charge codes...</p>
            </main>
        </ng-template>
    `,
    styles: [``],
})
export class ChargeCodeListModalComponent {
    public charge_codes: string[] = [];
    public loading = false;

    constructor(
        private _state: CateringStateService,
        private _dialog_ref: MatDialogRef<ChargeCodeListModalComponent>
    ) {}

    public async ngOnInit() {
        this.charge_codes = await this._state.charge_codes
            .pipe(take(1))
            .toPromise();
            
    }

    public newCode() {
        this.charge_codes.push('');
    }

    public removeCode(index: number) {
        this.charge_codes.splice(index, 1);
    }

    public async saveChargeCodes() {
        this.loading = true;
        const cleaned_codes = this.charge_codes.filter(_ => _ && _.trim());
        await this._state.updateChargeCodes(cleaned_codes);
        this._dialog_ref.close();
    }
}
