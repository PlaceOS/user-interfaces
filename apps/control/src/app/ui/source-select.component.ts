import {
    Component,
    OnChanges,
    SimpleChanges,
    inject,
    input,
    output,
} from '@angular/core';
import { unique } from '@placeos/common';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { ControlStateService, RoomInput } from '../control-state.service';

@Component({
    selector: 'source-select',
    template: `
        <div
            class="flex flex-col items-center text-black"
            [class.p-2]="simple()"
            [class.p-4]="!simple()"
        >
            @let source = details | async;
            <h3 class="mb-2 text-xl font-medium">
                {{
                    'APP.CONTROL.SOURCE_INPUT_SELECT'
                        | translate: { name: source?.name || '= No Name =' }
                }}
            </h3>
            @if (!loading) {
                @if ((input_types | async)?.length) {
                    <div
                        class="divide flex"
                        [class.flex-col]="simple()"
                        [class.flex-wrap]="!simple()"
                    >
                        @for (type of input_types | async; track type) {
                            <div group class="flex flex-col space-y-2 p-2">
                                <h4 class="text-center underline">
                                    {{ type }}
                                </h4>
                                @for (
                                    input of (input_map | async)[type];
                                    track input.id || input.name
                                ) {
                                    <button
                                        btn
                                        matRipple
                                        source
                                        class="w-48"
                                        [class.inverse]="
                                            input.id ===
                                            (details | async)?.source
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
                                        : { name: details?.name || 'Unknown' }
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
    standalone: false,
})
export class SourceSelectComponent implements OnChanges {
    private _state = inject(ControlStateService);

    // Whether to use the simple display
    public readonly simple = input(false);
    // ID of the selected output
    public readonly output = input<string>(undefined);
    /** Emitter for changes to the selected input source */
    public readonly source = output<RoomInput>();
    /** Whether routing is loading */
    public loading: boolean;
    // Store for the ID of the selected output
    public readonly output_id = new BehaviorSubject('');
    // Name of the currently selected output
    public readonly details = combineLatest([
        this.output_id,
        this._state.output_list,
    ]).pipe(map(([id, list]) => list.find((_) => _.id === id)));
    /** List of inputs available for selected output */
    public readonly input_list = combineLatest([
        this.output_id,
        this._state.available_inputs,
    ]).pipe(
        map(([id, list]) =>
            list.filter((_) => !_.outputs || _.outputs.includes(id)),
        ),
    );
    /** Available types of inputs */
    public readonly input_types = this.input_list.pipe(
        map((list) => unique(list.map((_) => _.type))),
    );
    /** Mapping of input types to inputs */
    public readonly input_map = combineLatest([
        this.input_list,
        this.input_types,
    ]).pipe(
        map(([list, types]) =>
            types.reduce((m, t) => {
                m[t] = list.filter((_) => _.type === t);
                return m;
            }, {}),
        ),
    );

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.output) {
            this.output_id.next(this.output() || '');
        }
    }

    public async selectSource(input: RoomInput) {
        this.loading = true;
        await this._state.setRoute(input.id, this.output());
        this.loading = false;
        this.source.emit(input);
    }
}
