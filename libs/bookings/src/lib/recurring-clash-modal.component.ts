import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Output, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialog,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { DialogEvent } from '@placeos/common';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { first } from 'rxjs/operators';
import { BookingClash } from './bookings.fn';

export interface RecurringClashModalData {
    clashes: BookingClash[];
}

export async function openRecurringClashModal(
    data: RecurringClashModalData,
    dialog: MatDialog,
): Promise<{ reason: 'done' | '' | null }> {
    const ref = dialog.open<
        RecurringClashModalComponent,
        RecurringClashModalData
    >(RecurringClashModalComponent, {
        data,
    });
    return Promise.race([
        ref.componentInstance.event
            .pipe(first((_) => _.reason === 'done'))
            .toPromise(),
        ref.afterClosed().toPromise(),
    ]);
}

@Component({
    selector: 'placeos-recurring-clash-modal',
    template: `
        <div class="relative">
            <header
                class="sticky top-0 z-10 m-2 h-14 w-[calc(100%-1rem)] min-w-[20rem] rounded-sm border-none bg-base-200 p-2"
            >
                <h2 class="px-2 text-xl font-medium">
                    {{ 'BOOKINGS.RECURRING_CLASHES_TITLE' | translate }}
                </h2>
            </header>
            <main
                class="flex max-h-[60vh] w-full max-w-[calc(100vw-2rem)] flex-col items-center space-y-4 overflow-auto px-4 py-2 sm:max-w-md"
            >
                <div
                    class="flex items-center space-x-2 rounded-xl border border-base-200 bg-warning p-2 text-warning-content shadow-sm"
                >
                    <icon class="text-5xl">warning</icon>
                    <p>
                        {{ 'BOOKINGS.RECURRING_CLASHES_MSG' | translate }}
                    </p>
                </div>
                <div
                    class="max-h-48 w-full overflow-auto rounded-sm border border-base-300 bg-base-100"
                >
                    <table class="w-full text-sm">
                        <thead class="sticky top-0 bg-base-200">
                            <tr>
                                <th class="p-2 text-left">
                                    {{ 'FORM.DATE' | translate }}
                                </th>
                                <th class="p-2 text-left">
                                    {{ 'COMMON.TIME' | translate }}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            @for (clash of clashes; track clash.booking_start) {
                                <tr class="border-t border-base-300">
                                    <td class="p-2">
                                        {{
                                            clash.booking_start * 1000
                                                | date: 'EEE, MMM d, yyyy'
                                        }}
                                    </td>
                                    <td class="p-2">
                                        {{
                                            clash.booking_start * 1000
                                                | date: 'h:mm a'
                                        }}
                                        -
                                        {{
                                            clash.booking_end * 1000
                                                | date: 'h:mm a'
                                        }}
                                    </td>
                                </tr>
                            }
                        </tbody>
                    </table>
                </div>
                <p class="text-base-content/70 text-center text-xs">
                    {{ 'BOOKINGS.RECURRING_CLASHES_CONFIRM' | translate }}
                </p>
            </main>
            <footer
                class="sticky bottom-0 m-2 flex items-center justify-center space-x-2 rounded-sm border-none bg-base-200 p-2"
            >
                <button
                    btn
                    matRipple
                    class="inverse flex-1 bg-base-100"
                    mat-dialog-close
                >
                    {{ 'COMMON.CANCEL' | translate }}
                </button>
                <button btn matRipple class="flex-1" (click)="onConfirm()">
                    {{ 'BOOKINGS.CONTINUE_BOOKING' | translate }}
                </button>
            </footer>
        </div>
    `,
    styles: [``],
    imports: [
        IconComponent,
        MatDialogModule,
        MatRippleModule,
        TranslatePipe,
        DatePipe,
    ],
})
export class RecurringClashModalComponent {
    @Output() public event = new EventEmitter<DialogEvent>();

    private _data = inject<RecurringClashModalData>(MAT_DIALOG_DATA);
    private _dialog_ref =
        inject<MatDialogRef<RecurringClashModalComponent>>(MatDialogRef);

    public get clashes(): BookingClash[] {
        return this._data.clashes || [];
    }

    public onConfirm() {
        this.event.emit({ reason: 'done' });
        this._dialog_ref.close({ reason: 'done' });
    }
}
