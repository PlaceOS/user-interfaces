import { Component, EventEmitter, Input, Output } from "@angular/core";
import { BookingFormService } from "@placeos/bookings";
import { BaseClass } from "@placeos/common";

@Component({
    selector: 'desk-filters-display',
    styles: [`
        [filter-item] {
            display: flex;
            align-items: center;
            padding: 0 1rem;
            height: 2rem;
            font-size: 0.875rem;
            border: 1px solid rgba(0, 0, 0, 0.2);
            border-radius: 1.25rem;
            margin-right: 0.5rem;
            margin-bottom: 0.5rem;
        }

        [filter-item]:hover {
            background: rgba(0, 0, 0, 0.1);
        }

        [filter-item] > * + * {
            margin-left: 0.5rem;
        }
    `],
    template: `
    <section actions class="sm:hidden space-x-2 flex flex-row items-center p-2">
        <button
            mat-button
            filters
            class="flex-1 w-1/2"
        >
            Filters
        </button>
        <div class="flex items-center">
                <button
                    mat-button
                    map
                    class="rounded-l rounded-r-none"
                    [class.inverse]="view !== 'map'"
                    (click)="view = 'map'; viewChange.emit(view)"
                >
                    Map
                </button>
                <button
                    mat-button
                    list
                    class="rounded-r rounded-l-none"
                    [class.inverse]="view !== 'list'"
                    (click)="view = 'list'; viewChange.emit(view)"
                >
                    List
                </button>
            </div>
    </section>
    <section filters class="flex items-center flex-wrap p-2">
        <!-- TODO: filter chips -->
        <div filter-item date>{{ start | date: 'mediumDate' }}</div>
        <div filter-item time>
            {{ start | date: 'shortTime' }} &mdash;
            {{ end | date: 'shortTime' }}
        </div>
    </section>
    `
})
export class DeskFiltersDisplayComponent extends BaseClass {
    @Input() public view: 'map' | 'list' = 'list';
    @Output() public viewChange = new EventEmitter<'map' | 'list'>();
    public readonly options = this._state.options;

    public get start(){
        return this._state.form.value.date;
    }

    public get end(){
        const {date, duration} = this._state.form.value;
        return date + duration * 60 * 1000;
    }

    constructor(
        private _state: BookingFormService
    ){
        super();
    }
}