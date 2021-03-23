import {
    Component,
    EventEmitter,
    Input,
    OnChanges,
    Output,
    SimpleChanges,
} from '@angular/core';
import { unique } from '@user-interfaces/common';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { ControlStateService, RoomInput } from '../control-state.service';

@Component({
    selector: 'source-select',
    template: `
        <div class="flex flex-col items-center text-black p-4">
            <h3 class="font-medium text-xl mb-2">
                Select input source for {{ (details | async)?.name || '= No Name =' }}
            </h3>
            <div class="flex divide divide-gray-200">
                <div *ngFor="let type of input_types | async" class="flex flex-col p-2 space-y-2">
                    <h4 class="text-center underline">{{ type }}</h4>
                    <button
                        mat-button
                        class="w-48"
                        [class.inverse]="input.id === (details | async)?.source"
                        *ngFor="let input of (input_map | async)[type]"
                        (click)="selectSource(input)"
                    >
                        <div class="truncate">{{ input.name }}</div>
                    </button>
                </div>
            </div>
        </div>
    `,
    styles: [``],
})
export class SourceSelectComponent implements OnChanges {
    // ID of the selected output
    @Input() public output: string;
    /** Emitter for changes to the selected input source */
    @Output() public source = new EventEmitter();
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
        this._state.input_list,
    ]).pipe(
        map(([id, list]) =>
            list.filter((_) => !_.outputs || _.outputs.includes(id))
        )
    );
    /** Available types of inputs */
    public readonly input_types = this.input_list.pipe(
        map((list) => unique(list.map((_) => _.type)))
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
            }, {})
        )
    );

    constructor(private _state: ControlStateService) {}

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.output) {
            this.output_id.next(this.output || '');
        }
    }

    public async selectSource(input: RoomInput) {
        this.loading = true;
        await this._state.setRoute(input.id, this.output);
        this.loading = false;
        this.source.emit(input);
        console.log('Input routed:', input, this.output);
    }
}
