import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    input,
    output,
    signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { unique } from '@placeos/common';
import { TranslatePipe } from '@placeos/components';
import { ControlStateService, RoomInput } from '../control-state.service';

@Component({
    selector: 'source-select',
    template: `
        <div
            class="flex flex-col items-center text-black"
            [class.p-2]="simple()"
            [class.p-4]="!simple()"
        >
            @let source = details();
            <h3 class="mb-2 text-xl font-medium">
                {{
                    'APP.CONTROL.SOURCE_INPUT_SELECT'
                        | translate: { name: source?.name || '= No Name =' }
                }}
            </h3>
            @if (!loading()) {
                @if (input_types().length) {
                    <div
                        class="divide flex"
                        [class.flex-col]="simple()"
                        [class.flex-wrap]="!simple()"
                    >
                        @for (type of input_types(); track type) {
                            <div group class="flex flex-col space-y-2 p-2">
                                <h4 class="text-center underline">
                                    {{ type }}
                                </h4>
                                @for (
                                    input of input_map()[type];
                                    track input.id || input.name
                                ) {
                                    <button
                                        btn
                                        matRipple
                                        source
                                        class="w-48"
                                        [class.inverse]="
                                            input.id === details()?.source
                                        "
                                        (click)="selectSource(input)"
                                    >
                                        <div class="truncate">
                                            {{ input.name }}
                                        </div>
                                    </button>
                                }
                            </div>
                        }
                    </div>
                } @else {
                    <div
                        class="m-auto flex flex-col items-center justify-center p-8"
                    >
                        <p>
                            {{
                                'APP.CONTROL.SOURCE_INPUTS_EMPTY'
                                    | translate
                                        : { name: source?.name || 'Unknown' }
                            }}
                        </p>
                    </div>
                }
            } @else {
                <div
                    class="m-auto flex flex-col items-center justify-center space-y-2 p-8"
                >
                    <mat-spinner [diameter]="32"></mat-spinner>
                    <p>{{ 'APP.CONTROL.SOURCE_SWITCHING' | translate }}</p>
                </div>
            }
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [TranslatePipe, MatProgressSpinnerModule, MatRippleModule],
})
export class SourceSelectComponent {
    private _state = inject(ControlStateService);

    // Whether to use the simple display
    public readonly simple = input(false);
    // ID of the selected output
    public readonly output = input<string>(undefined);
    /** Emitter for changes to the selected input source */
    public readonly source = output<RoomInput>();
    /** Whether routing is loading */
    public readonly loading = signal(false);
    private readonly _outputs = toSignal(this._state.output_list, {
        initialValue: [],
    });
    private readonly _available_inputs = toSignal(
        this._state.available_inputs,
        {
            initialValue: [],
        },
    );
    // Store for the ID of the selected output
    public readonly output_id = computed(() => this.output() || '');
    // Name of the currently selected output
    public readonly details = computed(() => {
        const id = this.output_id();
        return this._outputs().find((_) => _.id === id);
    });
    /** List of inputs available for selected output */
    public readonly input_list = computed(() => {
        const id = this.output_id();
        return this._available_inputs().filter(
            (_) => !_.outputs || _.outputs.includes(id),
        );
    });
    /** Available types of inputs */
    public readonly input_types = computed(() =>
        unique(this.input_list().map((_) => _.type)),
    );
    /** Mapping of input types to inputs */
    public readonly input_map = computed(() => {
        const list = this.input_list();
        return this.input_types().reduce(
            (map, type) => {
                map[type] = list.filter((_) => _.type === type);
                return map;
            },
            {} as Record<string, RoomInput[]>,
        );
    });

    public async selectSource(input: RoomInput) {
        this.loading.set(true);
        await this._state.setRoute(input.id, this.output());
        this.loading.set(false);
        this.source.emit(input);
    }
}
