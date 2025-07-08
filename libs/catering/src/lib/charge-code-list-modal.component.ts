import { Component, OnInit, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
    csvToJson,
    downloadFile,
    nextValueFrom,
    notifyError,
    unique,
} from '@placeos/common';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { CateringStateService } from './catering-state.service';

@Component({
    selector: 'charge-code-list-modal',
    template: `
        <header
            class="sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded border-none bg-base-200 p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{ 'CATERING.CHARGE_CODES_EDIT' | translate }}
            </h2>
            @if (!loading()) {
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            }
        </header>
        @if (!loading()) {
            <main
                class="flex max-h-[65vh] min-h-[20rem] flex-col overflow-auto"
            >
                @if (charge_codes().length) {
                    @for (code of charge_codes(); track i; let i = $index) {
                        <div
                            class="flex w-full items-center space-x-2 px-2 py-1 hover:bg-base-200"
                        >
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript flex-1"
                            >
                                <input
                                    matInput
                                    [(ngModel)]="charge_codes()[i]"
                                    [placeholder]="
                                        'CATERING.CHARGE_CODES' | translate
                                    "
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
                                <icon class="text-2xl">delete</icon>
                            </button>
                        </div>
                    }
                } @else {
                    <main
                        class="flex h-full min-h-[20rem] w-full flex-col items-center justify-center space-y-2"
                    >
                        <p class="opacity-30">
                            {{ 'CATERING.CHARGE_CODE_EMPTY' | translate }}
                        </p>
                    </main>
                }
            </main>
        } @else {
            <main
                class="flex flex-col items-center justify-center space-y-2 p-20"
            >
                <mat-spinner diameter="32"></mat-spinner>
                <p>{{ 'CATERING.CHARGE_CODE_SAVE' | translate }}</p>
            </main>
        }
        @if (!loading()) {
            <footer
                class="flex items-center space-x-2 border-t border-base-200 p-2"
            >
                <button btn matRipple class="inverse relative w-48">
                    {{ 'CATERING.CHARGE_CODES_IMPORT' | translate }}
                    <input
                        class="absolute inset-0 opacity-0"
                        type="file"
                        (change)="addCodesFromFile($event)"
                    />
                </button>
                <button
                    icon
                    matRipple
                    (click)="downloadTemplate()"
                    [matTooltip]="'CATERING.CHARGE_CODE_DOWNLOAD' | translate"
                    class="h-12 w-12 rounded border border-secondary text-secondary"
                >
                    <icon>download</icon>
                </button>
                <button btn matRipple class="w-48" (click)="newCode()">
                    {{ 'CATERING.CHARGE_CODES_ADD' | translate }}
                </button>
                <button btn matRipple class="w-48" (click)="saveChargeCodes()">
                    {{ 'COMMON.SAVE' | translate }}
                </button>
            </footer>
        }
    `,
    styles: [``],
    imports: [
        TranslatePipe,
        MatProgressSpinnerModule,
        MatRippleModule,
        IconComponent,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
    ],
})
export class ChargeCodeListModalComponent implements OnInit {
    private _state = inject(CateringStateService);
    private _dialog_ref =
        inject<MatDialogRef<ChargeCodeListModalComponent>>(MatDialogRef);

    public readonly charge_codes = signal<string[]>([]);
    public readonly loading = signal<boolean>(false);

    public async ngOnInit() {
        this.charge_codes.set(
            (await nextValueFrom(this._state.charge_codes)) || [],
        );
    }

    public newCode() {
        this.charge_codes.update((l) => {
            l.push('');
            return l;
        });
    }

    public removeCode(index: number) {
        this.charge_codes.update((l) => {
            l.splice(index, 1);
            return l;
        });
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
                if (
                    file.type !== 'text/csv' &&
                    file.type !== 'text/tab-separated-values'
                ) {
                    notifyError('Only CSV and TSV files are accepted.');
                    return;
                }
                const reader = new FileReader();
                reader.readAsText(file, 'UTF-8');
                reader.addEventListener('load', (evt) => {
                    const list =
                        csvToJson((evt.srcElement as any).result) || [];
                    this.charge_codes.update((l) => {
                        for (const { code, description } of list) {
                            l.push(code);
                        }
                        l = unique(l);
                        return l;
                    });
                    event.target.value = '';
                });
                reader.addEventListener('error', (_) =>
                    notifyError('Error reading file.'),
                );
            }
        }
    }

    public downloadTemplate() {
        const template = `code,description\ncode-1,Some Code\ncode-2,Another Code`;
        downloadFile('template.csv', template);
    }

    public async saveChargeCodes() {
        this.loading.set(true);
        const cleaned_codes = this.charge_codes().filter((_) => _ && _.trim());
        await this._state.saveSettings({ charge_codes: cleaned_codes });
        this._dialog_ref.close();
    }
}
