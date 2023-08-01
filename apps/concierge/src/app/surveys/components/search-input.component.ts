import {
    AfterViewInit,
    Component,
    ElementRef,
    EventEmitter,
    Input,
    Output,
    ViewChild,
} from '@angular/core';
import { AsyncHandler } from '@placeos/common';
import { fromEvent, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
    selector: 'search-input',
    styles: [],
    template: `
        <mat-form-field
            appearance="outline"
            subscriptSizing="dynamic"
            class="w-full {{ classNames ? classNames : '' }} "
        >
            <app-icon matPrefix class="-ml-3 mr-1">search</app-icon>
            <input
                matInput
                #searchInput
                autocomplete="off"
                type="text"
                [placeholder]="placeholder"
                [(ngModel)]="search"
            />
            <button
                *ngIf="searchInput.value?.length"
                class="sm text-xs"
                matSuffix
                icon
                matRipple
                aria-label="Clear"
                (click)="clearSearch()"
            >
                <app-icon>close</app-icon>
            </button>
        </mat-form-field>
    `,
})
export class SearchInputComponent
    extends AsyncHandler
    implements AfterViewInit
{
    @Input() placeholder: string = '';
    @Input() classNames: string = '';
    @Input() search: string = '';
    @Output() onSearch: EventEmitter<string> = new EventEmitter<string>();
    @ViewChild('searchInput', { static: true }) input: ElementRef;

    search$: Observable<string>;

    constructor() {
        super();
    }

    clearSearch() {
        this.input.nativeElement.value = '';
        this.onSearch.emit('');
    }

    ngAfterViewInit() {
        this.search$ = fromEvent<any>(this.input.nativeElement, 'keyup').pipe(
            map((event) => event.target.value),
            debounceTime(500),
            distinctUntilChanged()
        );
        this.subscription(
            'search-input',
            this.search$.subscribe((value) => this.onSearch.emit(value))
        );
    }
}
