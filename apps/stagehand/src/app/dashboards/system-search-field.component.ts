import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    effect,
    forwardRef,
    input,
    model,
    OnChanges,
    OnInit,
    signal,
    SimpleChanges,
    viewChild,
} from '@angular/core';
import {
    ControlValueAccessor,
    FormsModule,
    NG_VALUE_ACCESSOR,
} from '@angular/forms';
import {
    PlaceDriverRole,
    PlaceModule,
    PlaceSystem,
    querySystems,
} from '@placeos/ts-client';

import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AsyncHandler } from '@placeos/common';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { SanitizePipe } from 'libs/components/src/lib/sanitise.pipe';

@Component({
    selector: 'system-search-field',
    template: `
        <div
            class="item-search-field flex max-h-full flex-col"
            form-field
            [class.disabled]="disabled()"
        >
            <mat-form-field appearance="outline" class="no-subscript">
                <input
                    matInput
                    name="item-search"
                    #input
                    [(ngModel)]="search_str"
                    [disabled]="disabled()"
                    [attr.aria-label]="
                        placeholder()
                            ? placeholder()
                            : 'Search' + (name() ? ' for ' + name() : '')
                    "
                    [placeholder]="
                        placeholder()
                            ? placeholder()
                            : 'Search' +
                              (name() ? ' for ' + name() : '') +
                              '...'
                    "
                    [matAutocomplete]="auto"
                    [matAutocompleteDisabled]="display_list()"
                    (focus)="search_str.set(' ')"
                    (blur)="resetSearchString()"
                />
                <div class="prefix" matPrefix>
                    <icon class="relative -left-0.5 text-2xl">search</icon>
                </div>
                @if (loading()) {
                    <div class="suffix" matSuffix>
                        <mat-spinner diameter="16"></mat-spinner>
                    </div>
                }
            </mat-form-field>
            @if (display_list()) {
                @if (item_list()?.length) {
                    <div class="h-[50vh] flex-1 space-y-2 overflow-auto">
                        @for (option of item_list(); track option) {
                            <button
                                matRipple
                                (click)="
                                    search_str.set(option.name);
                                    setValue(option)
                                "
                                class="hover:bg-base-200 w-full rounded-sm px-4 py-2 text-left"
                            >
                                <div class="leading-tight">
                                    <ng-container
                                        *ngTemplateOutlet="
                                            item_option;
                                            context: { option: option }
                                        "
                                    ></ng-container>
                                </div>
                            </button>
                        }
                    </div>
                } @else {
                    <div
                        class="stagehand-subtle flex min-h-48 flex-col items-center justify-center p-8"
                    >
                        <p class="text-sm">
                            {{
                                search_str?.length
                                    ? 'No matching ' +
                                      (name() || 'item') +
                                      ' for search string'
                                    : 'No ' +
                                      (name() || 'items') +
                                      ' available to search'
                            }}
                        </p>
                    </div>
                }
            }
            <mat-autocomplete #auto="matAutocomplete">
                @for (option of item_list(); track option.id) {
                    <mat-option
                        [value]="option.name || option.id"
                        (click)="search_str.set(option.name); setValue(option)"
                        class="leading-tight"
                    >
                        <ng-container
                            *ngTemplateOutlet="
                                item_option;
                                context: { option: option }
                            "
                        ></ng-container>
                    </mat-option>
                }
            </mat-autocomplete>
            <ng-template #item_option let-option="option">
                <div class="flex h-5 items-center justify-between">
                    <div
                        name
                        [innerHTML]="item_name[option.id] | sanitize"
                    ></div>
                    @if (option.notes) {
                        <code class="truncate text-xs!">{{
                            option.notes
                        }}</code>
                    }
                </div>
                <div class="stagehand-subtle text-xs">
                    {{ option.id }}
                    {{ option.extra ? ' - ' + option.extra : '' }}
                </div>
            </ng-template>
        </div>
    `,
    styles: [
        `
            :host,
            mat-form-field {
                width: 100%;
            }

            .disabled {
                color: rgba(0, 0, 0, 0.35);
            }

            .name {
                display: flex;
                align-items: center;
                height: 1.1em;
                line-height: 1em;
            }

            .email {
                font-size: 0.6em;
                opacity: 0.65;
                line-height: 1.2em;
            }
        `,
    ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SystemSearchFieldComponent),
            multi: true,
        },
    ],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        CommonModule,
        MatAutocompleteModule,
        SanitizePipe,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatProgressSpinnerModule,
        IconComponent,
    ],
})
export class SystemSearchFieldComponent
    extends AsyncHandler
    implements OnInit, OnChanges, ControlValueAccessor
{
    private _changed = signal(0);
    private _last_query = '';
    /** Name of the items being query'd */
    public readonly name = input<string>(undefined);
    /** Placeholder to display on the form input */
    public readonly placeholder = input<string>(undefined);
    /** Limit available options to these */
    public readonly options = input<PlaceSystem[]>(undefined);
    /** Whether the form field should be disabled */
    public readonly disabled = input<boolean>(false);
    public readonly display_list = input<boolean>(false);
    public readonly clear_on_select = input<boolean>(false);
    /** Function for filtering out options */
    public readonly exclude = input<
        (_: PlaceSystem, search: string) => boolean
    >(
        (v, search) =>
            (v.name || '').toLowerCase().indexOf(search) < 0 &&
            (v.email || '').toLowerCase().indexOf(search) < 0 &&
            (v.description || '').toLowerCase().indexOf(search) < 0,
    );
    /** Minimum number of characters needed to start a server query */
    public readonly min_length = input(0, { alias: 'minLength' });
    /** Whether item list is loading */
    public readonly loading = model<boolean>(false);
    /** Service used for searching items */
    public readonly query_fn = input<(_: string) => Promise<PlaceSystem[]>>(
        (_) => querySystems({ q: _ }).then((resp) => resp.data),
    );
    /** Currently selected item */
    public active_item = signal(null);
    /** Item list to display */
    public item_list = signal<PlaceSystem[]>([]);
    /** Current display value of the search input field  */
    public search_str = signal('');
    /** Form control on change handler */
    private _onChange: (_: PlaceSystem) => void;
    /** Form control on touch handler */
    private _onTouch: (_: PlaceSystem) => void;

    private readonly _input_el =
        viewChild<ElementRef<HTMLInputElement>>('input');

    public get items() {
        const options = this.options();
        return options?.length ? options : this.item_list();
    }

    /** Map of item names to their IDs */
    public item_name: Record<string, string> = {};

    private readonly _search_query = effect(() => {
        const query = this.search_str();
        this.options();
        this._changed();
        this.timeout('search', () => this._loadSearchResults(query), 400);
    });

    public ngOnInit(): void {
        this.timeout('init', () => {
            this.search_str.set('');
        });
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.options) this._changed.set(Date.now());
    }

    private async _loadSearchResults(query: string) {
        if (query === this._last_query && !this.options()?.length) return;
        this._last_query = query;
        this.loading.set(true);
        const options = this.options();
        const min_length = this.min_length();
        const raw_list =
            options && options.length > 0
                ? options
                : !min_length || query.length >= min_length
                  ? await this.query_fn()(query).catch(() => [])
                  : [];
        if (query !== this.search_str()) return;
        const search = this.search_str().toLowerCase();
        const exclude = this.exclude();
        const list = raw_list.filter((item: any) =>
            exclude ? !exclude(item, search) : true,
        );
        this.loading.set(false);
        this.item_list.set(list);
        this._updateNameMap();
    }

    /**
     * Reset the search string back to the name of the active item
     */
    public resetSearchString() {
        this.timeout(
            'value',
            () => {
                if (this.clear_on_select()) {
                    this.active_item.set(null);
                    this.search_str.set('');
                } else if (this.active_item()) {
                    this.search_str.set(
                        this.active_item().name || this.search_str(),
                    );
                }
                if (this._input_el()?.nativeElement)
                    this._input_el().nativeElement.value =
                        this.search_str() || '';
            },
            50,
        );
    }

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    public setValue(new_value: PlaceSystem): void {
        this.active_item.set(new_value);
        this.search_str.set(new_value?.name || '');
        if (this._onChange) {
            this._onChange(new_value);
        }
        this.resetSearchString();
    }

    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: PlaceSystem) {
        this.active_item.set(value);
        this.resetSearchString();
    }

    /**
     * Registers a callback function that is called when the
     * control's value changes in the UI.
     * @param fn The callback function to register
     */
    public registerOnChange(fn: (_: PlaceSystem) => void): void {
        this._onChange = fn;
    }

    /**
     * Registers a callback function is called by the forms API
     * on initialization to update the form model on blur.
     * @param fn The callback function to register
     */
    public registerOnTouched(fn: (_: PlaceSystem) => void): void {
        this._onTouch = fn;
    }

    private _updateNameMap() {
        const map = {};
        const list = this.items || [];
        for (const item of list) {
            if (item instanceof PlaceModule) {
                const detail =
                    item.role === PlaceDriverRole.Service
                        ? item.uri
                        : item.role === PlaceDriverRole.Logic
                          ? item.control_system_id
                          : item.ip;
                map[item.id] = `${
                    item.name || '<Unnamed>'
                } <span class="small">${detail}<span>`;
            } else {
                map[item.id] =
                    (item as any).custom_name || item.name || '<Unnamed>';
            }
        }
        this.item_name = map;
    }
}
