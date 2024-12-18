import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { csvToJson, notifyError, unique } from '@placeos/common';
import { take } from 'rxjs/operators';
import { CateringStateService } from './catering-state.service';

@Component({
    selector: 'charge-code-list-modal',
    template: `
        <header
            class="sticky top-0 p-2 m-2 w-[calc(100%-1rem)] border-none z-10 bg-base-200 rounded"
        >
            <h2 class="text-xl font-medium px-2">
                {{ 'CATERING.CHARGE_CODES_EDIT' | translate }}
            </h2>
            <button icon matRipple mat-dialog-close *ngIf="!loading">
                <app-icon>close</app-icon>
            </button>
        </header>
        <main
            *ngIf="!loading; else load_state"
            class="overflow-auto max-h-[65vh] min-h-[20rem] flex flex-col"
        >
            @for (code of charge_codes; track code; let i = $index) {
                <div
                    class="flex items-center space-x-2 w-full hover:bg-base-200 px-2 py-1"
                >
                    <mat-form-field
                        appearance="outline"
                        class="flex-1 no-subscript"
                    >
                        <input
                            matInput
                            [(ngModel)]="charge_codes[i]"
                            [placeholder]="'CATERING.CHARGE_CODES' | translate"
                        />
                    </mat-form-field>
                    <button
                        icon
                        matRipple
                        class="h-12 w-12 rounded border border-error text-error"
                        [matTooltip]="
                            'CATERING.CHARGE_CODES_REMOVE' | translate
                        "
                        (click)="removeCode(i)"
                    >
                        <app-icon class="text-2xl">delete</app-icon>
                    </button>
                </div>
            }
        </main>
        <footer
            class="flex items-center p-2 space-x-2 border-t border-base-200"
            *ngIf="!loading"
        >
            <button btn matRipple class="w-48 inverse relative">
                {{ 'CATERING.CHARGE_CODES_IMPORT' | translate }}
                <input
                    class="opacity-0 absolute inset-0"
                    type="file"
                    (change)="addCodesFromFile($event)"
                />
            </button>
            <button btn matRipple class="w-48" (click)="newCode()">
                {{ 'CATERING.CHARGE_CODES_ADD' | translate }}
            </button>
            <button btn matRipple class="w-48" (click)="saveChargeCodes()">
                {{ 'COMMON.SAVE' | translate }}
            </button>
        </footer>
        <ng-template #load_state>
            <main
                class="flex flex-col items-center justify-center p-20 space-y-2"
            >
                <mat-spinner diameter="32"></mat-spinner>
                <p>Saving changes to charge codes...</p>
            </main>
        </ng-template>
    `,
    styles: [``],
})
export class ChargeCodeListModalComponent implements OnInit {
    public charge_codes: string[] = [];
    public loading = false;

    constructor(
        private _state: CateringStateService,
        private _dialog_ref: MatDialogRef<ChargeCodeListModalComponent>,
    ) {}

    public async ngOnInit() {
        this.charge_codes =
            (await this._state.charge_codes.pipe(take(1)).toPromise()) || [];
    }

    public newCode() {
        this.charge_codes.push('');
    }

    public removeCode(index: number) {
        this.charge_codes.splice(index, 1);
    }

    /**
     * Load CSV file and populate the code list with the contents
     * @param event File input field event
     */
    public addCodesFromFile(event) {
        /* istanbul ignore else */
        if (event.target) {
            const file = event.target.files[0];
            /* istanbul ignore else */
            if (file) {
                const reader = new FileReader();
                reader.readAsText(file, 'UTF-8');
                reader.addEventListener('load', (evt) => {
                    const list =
                        csvToJson((evt.srcElement as any).result) || [];
                    for (const { code, description } of list) {
                        this.charge_codes.push(code);
                    }
                    this.charge_codes = unique(this.charge_codes);
                    event.target.value = '';
                });
                reader.addEventListener('error', (_) =>
                    notifyError('Error reading file.'),
                );
            }
        }
    }

    public async saveChargeCodes() {
        this.loading = true;
        const cleaned_codes = this.charge_codes.filter((_) => _ && _.trim());
        await this._state.saveSettings({ charge_codes: cleaned_codes });
        this._dialog_ref.close();
    }
}
