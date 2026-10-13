import { Component, inject, viewChildren } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CustomTooltipComponent, IconComponent } from '@placeos/components';

import { AMENITY_ICONS, DESK_LAYOUTS, FURNITURE_ASSETS } from './constants';
import { EditorStateService } from './editor-state.service';

type PickerKind = 'amenity' | 'furniture' | 'desk-layout';

const LABELS: Record<PickerKind, string> = {
    amenity: 'Amenity',
    furniture: 'Furniture',
    'desk-layout': 'Desk Group',
};

const ICONS: Record<PickerKind, string> = {
    amenity: 'add_location',
    furniture: 'chair',
    'desk-layout': 'grid_view',
};

@Component({
    selector: 'map-studio-asset-picker',
    template: `
        <div class="flex shrink-0 items-center gap-0.5">
            @for (kind of kinds; track kind) {
                <button
                    customTooltip
                    xPosition="start"
                    [content]="menu"
                    [data]="{ $implicit: kind }"
                    [class]="buttonClass(state.placing()?.kind === kind)"
                    [title]="'Place ' + labelFor(kind)"
                >
                    <icon class="text-base">{{ iconFor(kind) }}</icon>
                    {{ labelFor(kind) }}
                    <icon class="text-sm">expand_more</icon>
                </button>
            }
        </div>

        <ng-template #menu let-kind>
            <div
                class="bg-base-100 border-base-300 pointer-events-auto mt-1 max-h-80 w-64 overflow-y-auto rounded-lg border p-2 shadow-lg"
            >
                <div class="mb-1 px-1 text-xs font-bold">
                    {{ labelFor(kind) }}
                </div>
                @if (kind === 'desk-layout') {
                    @for (layout of desk_layouts; track layout.id) {
                        <button
                            class="hover:bg-base-200 flex w-full items-center gap-2 rounded px-2 py-1.5 text-left text-xs"
                            (click)="pick(kind, layout.id)"
                        >
                            <span class="flex min-w-0 flex-1 flex-col gap-1">
                                <span class="font-medium">
                                    {{ layout.label }}
                                </span>
                                <span
                                    class="inline-grid w-fit gap-px"
                                    [style.grid-template-columns]="
                                        'repeat(' + layout.cols + ', 0.5rem)'
                                    "
                                    aria-hidden="true"
                                >
                                    @for (cell of layout.cells; track $index) {
                                        <span
                                            class="bg-primary block h-1.5 w-2 rounded-[1px]"
                                            [class.opacity-40]="
                                                $index >= layout.cols
                                            "
                                        ></span>
                                    }
                                </span>
                            </span>
                            <span class="text-base-content/60 shrink-0">
                                {{ layout.cols * layout.rows }} desks
                            </span>
                        </button>
                    }
                } @else {
                    <div class="grid grid-cols-2 gap-1">
                        @for (asset of assetsFor(kind); track asset.id) {
                            <button
                                class="hover:bg-base-200 flex items-center gap-1.5 rounded px-1.5 py-1 text-left text-xs"
                                (click)="pick(kind, asset.id)"
                            >
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    class="shrink-0"
                                    [innerHTML]="artFor(asset.svg)"
                                ></svg>
                                <span class="truncate">{{ asset.label }}</span>
                            </button>
                        }
                    </div>
                }
            </div>
        </ng-template>
    `,
    imports: [CustomTooltipComponent, IconComponent],
})
export class AssetPickerComponent {
    public readonly state = inject(EditorStateService);
    private readonly _sanitizer = inject(DomSanitizer);

    private readonly _tooltips = viewChildren(CustomTooltipComponent);

    public readonly kinds: PickerKind[] = [
        'amenity',
        'furniture',
        'desk-layout',
    ];
    public readonly desk_layouts = DESK_LAYOUTS.map((layout) => ({
        ...layout,
        cells: Array.from({ length: layout.cols * layout.rows }),
    }));

    /** Same shape as the editor toolbar's buttons */
    public readonly buttonClass = (active: boolean) =>
        'inline-flex shrink-0 items-center gap-1 rounded-md border px-2 py-1.5 text-xs font-medium leading-none whitespace-nowrap ' +
        (active
            ? 'bg-primary/10 text-primary border-primary/30'
            : 'text-base-content/60 hover:bg-base-200 hover:text-base-content border-transparent');

    public readonly labelFor = (kind: PickerKind) => LABELS[kind];

    public readonly iconFor = (kind: PickerKind) => ICONS[kind];

    public readonly assetsFor = (kind: PickerKind) =>
        kind === 'amenity' ? AMENITY_ICONS : FURNITURE_ASSETS;

    public readonly artFor = (svg: string): SafeHtml =>
        this._sanitizer.bypassSecurityTrustHtml(
            svg.replace(/currentColor/g, '#334155'),
        );

    public pick(kind: PickerKind, id: string) {
        this.state.startPlacing(kind, id);
        for (const tooltip of this._tooltips()) tooltip.close();
    }
}
