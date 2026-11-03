import {
    Component,
    ElementRef,
    effect,
    inject,
    input,
    OnInit,
    signal,
    viewChild,
} from '@angular/core';
import { ControlValueAccessor, FormsModule } from '@angular/forms';
import { PlaceSystem, querySystems } from '@placeos/ts-client';

import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AsyncHandler, provideValueAccessor } from '@placeos/common';
import { IconComponent } from '@placeos/components';
import { inGroupScope } from '../support-groups';
import { SupportGroupsService } from '../support-groups.service';

@Component({
    selector: 'system-search-field',
    template: `
        <div class="item-search-field flex max-h-full flex-col" form-field>
            <mat-form-field appearance="outline" class="no-subscript">
                <input
                    matInput
                    name="item-search"
                    #input
                    [(ngModel)]="search_str"
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
            <mat-autocomplete #auto="matAutocomplete">
                @for (option of item_list(); track option.id) {
                    <!-- onSelectionChange also fires for keyboard selection -->
                    <mat-option
                        [value]="option.name || option.id"
                        (onSelectionChange)="
                            $event.isUserInput && setValue(option)
                        "
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
                    <div name>{{ item_name()[option.id] }}</div>
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
        provideValueAccessor(() => SystemSearchFieldComponent),
    ],
    imports: [
        CommonModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatProgressSpinnerModule,
        IconComponent,
    ],
})
export class SystemSearchFieldComponent
    extends AsyncHandler
    implements OnInit, ControlValueAccessor
{
    private _last_query = '';
    /** Name of the items being query'd */
    public readonly name = input<string>(undefined);
    /** Placeholder to display on the form input */
    public readonly placeholder = input<string>(undefined);
    /** Function for filtering out options */
    public readonly exclude = input<
        (_: PlaceSystem, search: string) => boolean
    >(
        (v, search) =>
            (v.name || '').toLowerCase().indexOf(search) < 0 &&
            (v.email || '').toLowerCase().indexOf(search) < 0 &&
            (v.description || '').toLowerCase().indexOf(search) < 0,
    );
    /** Whether item list is loading */
    public readonly loading = signal(false);
    private _groups = inject(SupportGroupsService);
    /** Service used for searching items. By default, the systems of the
     * selected support group. */
    public readonly query_fn = input<(_: string) => Promise<PlaceSystem[]>>(
        (q) => {
            const group_id = this._groups.group_id();
            const scope = this._groups.scope();
            if (scope && !scope.reachable.size) return Promise.resolve([]);
            return querySystems({ q, ...(group_id ? { group_id } : {}) }).then(
                (resp) =>
                    resp.data.filter((system) =>
                        inGroupScope(system.zones || [], scope),
                    ),
            );
        },
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

    /** Map of item names to their IDs */
    public readonly item_name = signal<Record<string, string>>({});

    private readonly _search_query = effect(() => {
        const query = this.search_str();
        this.timeout('search', () => this._loadSearchResults(query), 400);
    });

    public ngOnInit(): void {
        this.timeout('init', () => {
            this.search_str.set('');
        });
    }

    private async _loadSearchResults(query: string) {
        if (query === this._last_query) return;
        this._last_query = query;
        this.loading.set(true);
        const raw_list = await this.query_fn()(query).catch(() => []);
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
                if (this.active_item()) {
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
        const list = this.item_list();
        for (const item of list) {
            // shown as text, so a name can't add markup to the page
            map[item.id] =
                (item as any).custom_name || item.name || '<Unnamed>';
        }
        this.item_name.set(map);
    }
}
