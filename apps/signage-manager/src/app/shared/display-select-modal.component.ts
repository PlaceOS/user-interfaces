import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { SignageService } from '../signage.service';

@Component({
    selector: 'display-select-modal',
    template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{ 'SIGNAGE_MANAGER.ADD_DISPLAY_TITLE' | translate }}
            </h2>
            <button
                icon
                type="button"
                matRipple
                mat-dialog-close
                [attr.aria-label]="
                    'SIGNAGE_MANAGER.CLOSE_ADD_DISPLAY' | translate
                "
            >
                <icon>close</icon>
            </button>
        </header>
        <main
            class="h-[65vh] max-w-lg min-w-lg space-y-2 overflow-auto px-4 pt-2 pb-4 text-center max-md:h-auto max-md:max-w-none max-md:min-w-0 max-md:flex-1"
        >
            <mat-form-field
                appearance="outline"
                class="no-subscript bg-base-100 sticky top-0 z-10 w-full"
            >
                <input
                    matInput
                    [ngModel]="search()"
                    (ngModelChange)="search.set($event)"
                    [placeholder]="
                        'SIGNAGE_MANAGER.SEARCH_DISPLAYS' | translate
                    "
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.SEARCH_DISPLAYS' | translate
                    "
                />
            </mat-form-field>
            @if (filtered_displays()?.length > 0) {
                @for (display of filtered_displays(); track display.id) {
                    <button
                        type="button"
                        matRipple
                        class="border-base-300 hover:bg-base-200 z-0 flex h-16 w-full items-center space-x-2 rounded-sm border p-2 text-left"
                        [mat-dialog-close]="display.id"
                    >
                        <icon class="text-base-content/60 shrink-0 text-2xl"
                            >tv</icon
                        >
                        <div class="min-w-0 flex-1">
                            <div class="truncate">
                                {{ display.display_name || display.name }}
                            </div>
                            @if (display.description) {
                                <div
                                    class="text-base-content/70 truncate text-xs"
                                >
                                    {{ display.description }}
                                </div>
                            }
                        </div>
                    </button>
                }
            } @else {
                <div
                    class="bg-base-200 flex h-[calc(100%-3.5rem)] w-full flex-col items-center justify-center space-y-4 rounded-lg p-16"
                >
                    <icon class="text-base-content/70 text-8xl">tv</icon>
                    <div class="text-base-content/70">
                        {{ 'SIGNAGE_MANAGER.NO_DISPLAYS' | translate }}
                    </div>
                </div>
            }
        </main>
    `,
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        FormsModule,
        MatRippleModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        IconComponent,
        TranslatePipe,
    ],
})
export class DisplaySelectModalComponent {
    private readonly _data: { zone_id: string } = inject(MAT_DIALOG_DATA);
    private readonly _service = inject(SignageService);

    private readonly _displays = toSignal(this._service.displays, {
        initialValue: [],
    });

    public readonly search = signal('');

    public readonly filtered_displays = computed(() => {
        const term = this.search().toLowerCase();
        const list = this._displays();
        return list.filter((_) =>
            (_.display_name || _.name).toLowerCase().includes(term),
        );
    });
}
