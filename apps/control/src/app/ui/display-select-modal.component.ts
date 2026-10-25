import { Component, computed, inject, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { i18n, notifyError } from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { ControlStateService, RoomOutput } from '../control-state.service';
import { errorText } from '../error-text';

export interface DisplaySelectModalData {
    /** ID of the input to show */
    input: string;
}

/**
 * Fullscreen display list for phones.
 * Opens after the user selects a source, and routes that source to the
 * display that the user selects, or to all displays.
 */
@Component({
    selector: 'display-select-modal',
    template: `
        <div
            class="bg-base-100 text-base-content flex h-full w-full flex-col pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]"
        >
            <div
                class="border-base-200 flex items-center gap-2 border-b py-2 pr-2 pl-4"
            >
                <h2 class="min-w-0 flex-1 truncate text-lg font-medium">
                    {{
                        'APP.CONTROL.DISPLAY_SELECT'
                            | translate: { name: input()?.name || '' }
                    }}
                </h2>
                <button
                    icon
                    matRipple
                    mat-dialog-close
                    [attr.aria-label]="'COMMON.CLOSE' | translate"
                >
                    <icon>close</icon>
                </button>
            </div>
            <div class="flex-1 overflow-auto">
                @if (show_present_all()) {
                    <button
                        present-all
                        matRipple
                        class="border-base-200 flex w-full items-center gap-4 border-b px-4 py-3 text-left"
                        [disabled]="loading()"
                        (click)="presentToAll()"
                    >
                        <icon class="text-secondary text-2xl">output</icon>
                        <span class="flex-1 font-medium">
                            {{ 'APP.CONTROL.PRESENT_ALL' | translate }}
                        </span>
                    </button>
                }
                @for (output of outputs(); track output.id) {
                    @let showing = isShowing(output);
                    <button
                        display
                        matRipple
                        class="border-base-200 flex w-full items-center gap-4 border-b px-4 py-3 text-left"
                        [attr.aria-pressed]="showing"
                        [disabled]="loading()"
                        (click)="select(output)"
                    >
                        <icon class="text-2xl opacity-60">tv</icon>
                        <div class="min-w-0 flex-1">
                            <div class="truncate font-medium">
                                {{ output.name }}
                            </div>
                            <div class="truncate text-sm opacity-60">
                                {{
                                    sourceName(output) ||
                                        ('APP.CONTROL.INPUT_EMPTY' | translate)
                                }}
                            </div>
                        </div>
                        @if (showing) {
                            <icon class="text-secondary text-2xl">
                                check_circle
                            </icon>
                        }
                    </button>
                } @empty {
                    <p class="p-8 text-center opacity-60">
                        {{
                            'APP.CONTROL.DISPLAYS_EMPTY'
                                | translate: { name: input()?.name || '' }
                        }}
                    </p>
                }
            </div>
        </div>
    `,
    imports: [MatDialogModule, MatRippleModule, IconComponent, TranslatePipe],
})
export class DisplaySelectModalComponent {
    private _state = inject(ControlStateService);
    private _data = inject<DisplaySelectModalData>(MAT_DIALOG_DATA);
    private _dialog_ref =
        inject<MatDialogRef<DisplaySelectModalComponent>>(MatDialogRef);

    private readonly _inputs = this._state.available_inputs;
    private readonly _outputs = this._state.output_list;
    private readonly _hide_present_all = this._state.hide_present_all;

    /** Whether a routing request is in progress */
    public readonly loading = signal(false);
    /** Details of the input to show */
    public readonly input = computed(() =>
        this._inputs().find((_) => _.id === this._data.input),
    );
    /** Displays that can show the input */
    public readonly outputs = computed(() => {
        const input = this.input();
        return this._outputs().filter(
            (_) => !input?.outputs || input.outputs.includes(_.id),
        );
    });
    public readonly show_present_all = computed(
        () => this._outputs().length > 1 && !this._hide_present_all(),
    );

    /** Whether the display shows the input now */
    public isShowing(output: RoomOutput) {
        const input = this.input();
        return (
            !!output.source &&
            (output.source === input?.id || output.source === input?.ref)
        );
    }

    /** Name of the source that the display shows now */
    public sourceName(output: RoomOutput) {
        if (!output.source) return '';
        return this._inputs().find(
            (_) => _.id === output.source || _.ref === output.source,
        )?.name;
    }

    /** Show the input on the display. Selecting the display again clears it. */
    public select(output: RoomOutput) {
        return this._run(() =>
            this.isShowing(output)
                ? this._state.unroute(output.id)
                : this._state.setRoute(this._data.input, output.id),
        );
    }

    public presentToAll() {
        return this._run(() => this._state.routeToAll(this._data.input));
    }

    /** Run a routing request, then close. Stays open with an error notice on failure. */
    private async _run(request: () => Promise<unknown> | undefined) {
        this.loading.set(true);
        try {
            await request();
        } catch (error) {
            notifyError(
                i18n('APP.CONTROL.ROUTE_ERROR', { error: errorText(error) }),
            );
            return;
        } finally {
            this.loading.set(false);
        }
        this._dialog_ref.close();
    }
}
