import { NgTemplateOutlet } from '@angular/common';
import {
    Component,
    contentChild,
    Directive,
    inject,
    input,
    TemplateRef,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
    IconComponent,
    LoadErrorComponent,
    TranslatePipe,
} from '@placeos/components';
import { IntersectDirective } from './intersect.directive';
import { PagedSearch } from './paged-search';

/**
 * Marks the item template of a `<picker-modal>`. Bind the list to type the
 * item: `<ng-template [pickerItem]="list" let-item>`.
 */
@Directive({ selector: 'ng-template[pickerItem]' })
export class PickerItemDirective<T extends { id: string }> {
    /** List of the items, which sets the item type */
    public readonly pickerItem = input.required<PagedSearch<T>>();
    public readonly template =
        inject<TemplateRef<{ $implicit: T }>>(TemplateRef);

    public static ngTemplateContextGuard<T extends { id: string }>(
        _directive: PickerItemDirective<T>,
        context: unknown,
    ): context is { $implicit: T } {
        return true;
    }
}

/**
 * Frame of a dialog that picks one item from a searchable, paged list: the
 * header with a close button, the search field, the list with its loading,
 * error and empty states, and the sentinel that loads the next page.
 *
 * Give the item button as an `<ng-template [pickerItem]="list" let-item>`
 * child. It usually closes the dialog with `[mat-dialog-close]`. A dialog
 * that picks several items can put a footer after the `<picker-modal>`.
 */
@Component({
    selector: 'picker-modal',
    template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{ heading() | translate }}
            </h2>
            <button
                icon
                type="button"
                matRipple
                mat-dialog-close
                [attr.aria-label]="close_label() | translate"
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
                    [(ngModel)]="list().search"
                    [placeholder]="search_label() | translate"
                    [attr.aria-label]="search_label() | translate"
                />
            </mat-form-field>
            @if (list().items().length > 0) {
                @for (entry of list().items(); track entry.id) {
                    <ng-container
                        [ngTemplateOutlet]="item_template().template"
                        [ngTemplateOutletContext]="{ $implicit: entry }"
                    />
                }
                @if (list().has_more()) {
                    <div
                        class="h-px w-full"
                        intersect
                        (intersect)="list().loadMore()"
                    ></div>
                } @else if (list().error()) {
                    <load-error (retry)="list().retry()" />
                }
            } @else if (list().loading()) {
                <div
                    class="bg-base-200 flex h-[calc(100%-3.5rem)] w-full flex-col items-center justify-center rounded-lg p-16"
                >
                    <div class="text-base-content/70">
                        {{ 'COMMON.LOADING' | translate }}
                    </div>
                </div>
            } @else if (list().error()) {
                <load-error (retry)="list().retry()" />
            } @else {
                <div
                    class="bg-base-200 flex h-[calc(100%-3.5rem)] w-full flex-col items-center justify-center space-y-4 rounded-lg p-16"
                >
                    <icon class="text-base-content/70 text-8xl">{{
                        empty_icon()
                    }}</icon>
                    <div class="text-base-content/70">
                        {{ empty_label() | translate }}
                    </div>
                </div>
            }
        </main>
    `,
    // Lays the header and the main out as children of the dialog component
    host: { class: 'contents' },
    imports: [
        NgTemplateOutlet,
        FormsModule,
        MatRippleModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        IconComponent,
        LoadErrorComponent,
        TranslatePipe,
        IntersectDirective,
    ],
})
export class PickerModalComponent<T extends { id: string }> {
    public readonly list = input.required<PagedSearch<T>>();
    /** Translation key of the dialog title */
    public readonly heading = input.required<string>();
    /** Translation key of the close button's accessible name */
    public readonly close_label = input.required<string>();
    /** Translation key of the search field's placeholder and name */
    public readonly search_label = input.required<string>();
    /** Material icon of the empty state */
    public readonly empty_icon = input.required<string>();
    /** Translation key of the empty state */
    public readonly empty_label = input.required<string>();

    public readonly item_template =
        contentChild.required<PickerItemDirective<T>>(PickerItemDirective);
}
