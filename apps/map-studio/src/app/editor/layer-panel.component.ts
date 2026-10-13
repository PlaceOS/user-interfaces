import { Component, inject, signal } from '@angular/core';
import { IconComponent } from '@placeos/components';

import { EditorStateService } from './editor-state.service';

@Component({
    selector: 'map-studio-layer-panel',
    template: `
        <div class="flex h-full flex-col">
            <div
                class="border-base-300 flex items-center justify-between border-b px-3 py-2.5"
            >
                <span class="text-xs font-bold">Layers</span>
                <span
                    class="bg-base-200 text-base-content/60 rounded-full px-2 py-0.5 text-xs font-semibold"
                >
                    {{ state.layers().length }}
                </span>
            </div>

            <div class="flex-1 overflow-y-auto">
                @for (
                    layer of state.sorted_layers();
                    track layer.id;
                    let i = $index
                ) {
                    <div
                        class="border-base-300 hover:bg-base-200 border-b px-2 py-1.5"
                        [class]="
                            layer.id === state.active_layer_id()
                                ? 'bg-primary/10 border-l-primary border-l-2'
                                : ''
                        "
                    >
                        <div class="flex items-center gap-1">
                            <button
                                class="text-base-content/60 hover:bg-base-300 hover:text-base-content flex size-7 shrink-0 items-center justify-center rounded text-base"
                                [class.opacity-40]="!layer.visible"
                                [title]="
                                    layer.visible ? 'Hide layer' : 'Show layer'
                                "
                                [attr.aria-label]="
                                    (layer.visible ? 'Hide ' : 'Show ') +
                                    layer.name +
                                    ' layer'
                                "
                                (click)="
                                    toggle($event, layer.id, {
                                        visible: !layer.visible,
                                    })
                                "
                            >
                                <icon>
                                    {{
                                        layer.visible
                                            ? 'visibility'
                                            : 'visibility_off'
                                    }}
                                </icon>
                            </button>
                            <button
                                class="min-w-0 flex-1 truncate text-left text-xs font-medium"
                                title="Make this the active layer"
                                (click)="state.setActiveLayer(layer.id)"
                            >
                                {{ layer.name }}
                            </button>
                            <div class="flex items-center">
                                <button
                                    class="hover:bg-base-300 flex size-7 shrink-0 items-center justify-center rounded text-base"
                                    [class]="
                                        confirm_delete() === layer.id
                                            ? 'text-error font-bold'
                                            : 'text-base-content/40 hover:text-error'
                                    "
                                    [title]="
                                        confirm_delete() === layer.id
                                            ? 'Confirm deleting ' + layer.name
                                            : 'Delete ' + layer.name
                                    "
                                    [attr.aria-label]="
                                        confirm_delete() === layer.id
                                            ? 'Confirm deleting ' +
                                              layer.name +
                                              ' layer'
                                            : 'Delete ' + layer.name + ' layer'
                                    "
                                    (click)="remove($event, layer.id)"
                                    (blur)="confirm_delete.set('')"
                                >
                                    <icon>close</icon>
                                </button>
                                <button
                                    class="text-base-content/40 hover:bg-base-300 hover:text-base-content flex size-7 shrink-0 items-center justify-center rounded text-base disabled:opacity-20"
                                    [title]="'Move ' + layer.name + ' up'"
                                    [attr.aria-label]="
                                        'Move ' + layer.name + ' up'
                                    "
                                    [disabled]="i === 0"
                                    (click)="move($event, layer.id, 'up')"
                                >
                                    <icon>arrow_upward</icon>
                                </button>
                            </div>
                        </div>

                        <!-- Secondary row, indented past the toggles as in the
                             reference panel, so opacity reads as a detail -->
                        <div class="flex items-center gap-1">
                            <button
                                class="text-base-content/60 hover:bg-base-300 hover:text-base-content flex size-7 shrink-0 items-center justify-center rounded text-base"
                                [class.text-primary]="layer.locked"
                                [title]="
                                    layer.locked ? 'Unlock layer' : 'Lock layer'
                                "
                                [attr.aria-label]="
                                    (layer.locked ? 'Unlock ' : 'Lock ') +
                                    layer.name +
                                    ' layer'
                                "
                                (click)="
                                    toggle($event, layer.id, {
                                        locked: !layer.locked,
                                    })
                                "
                            >
                                <icon>
                                    {{ layer.locked ? 'lock' : 'lock_open' }}
                                </icon>
                            </button>
                            <input
                                type="range"
                                class="accent-primary h-3.5 min-w-0 flex-1"
                                min="0"
                                max="1"
                                step="0.05"
                                [value]="layer.opacity"
                                [title]="opacityLabel(layer.opacity)"
                                [attr.aria-label]="
                                    layer.name +
                                    ' ' +
                                    opacityLabel(layer.opacity)
                                "
                                (input)="setOpacity($event, layer.id)"
                            />
                            <button
                                class="text-base-content/40 hover:bg-base-300 hover:text-base-content flex size-7 shrink-0 items-center justify-center rounded text-base disabled:opacity-20"
                                [title]="'Move ' + layer.name + ' down'"
                                [attr.aria-label]="
                                    'Move ' + layer.name + ' down'
                                "
                                [disabled]="
                                    i === state.sorted_layers().length - 1
                                "
                                (click)="move($event, layer.id, 'down')"
                            >
                                <icon>arrow_downward</icon>
                            </button>
                        </div>
                    </div>
                }
            </div>

            <div class="border-base-300 flex gap-2 border-t p-2">
                <input
                    class="border-base-300 min-w-0 flex-1 rounded border px-2 py-1 text-xs"
                    placeholder="New layer name..."
                    aria-label="New layer name"
                    [value]="new_name()"
                    (input)="new_name.set(asValue($event))"
                    (keydown.enter)="add()"
                />
                <button
                    btn
                    class="min-h-0! px-2! py-1! text-xs whitespace-nowrap"
                    (click)="add()"
                >
                    Add
                </button>
            </div>
        </div>
    `,
    imports: [IconComponent],
})
export class LayerPanelComponent {
    public readonly state = inject(EditorStateService);

    public readonly new_name = signal('');
    public readonly confirm_delete = signal('');

    public readonly asValue = (event: Event) =>
        (event.target as HTMLInputElement).value;

    public readonly opacityLabel = (opacity: number) =>
        `Opacity: ${Math.round(opacity * 100)}%`;

    public toggle(
        event: Event,
        id: string,
        updates: { visible?: boolean; locked?: boolean },
    ) {
        event.stopPropagation();
        this.state.updateLayer(id, updates);
    }

    public move(event: Event, id: string, direction: 'up' | 'down') {
        event.stopPropagation();
        this.state.moveLayer(id, direction);
    }

    public setOpacity(event: Event, id: string) {
        event.stopPropagation();
        this.state.updateLayer(id, {
            opacity: Number((event.target as HTMLInputElement).value),
        });
    }

    /** First click arms the delete, second confirms it */
    public remove(event: Event, id: string) {
        event.stopPropagation();
        if (this.confirm_delete() !== id) {
            this.confirm_delete.set(id);
            return;
        }
        this.state.deleteLayer(id);
        this.confirm_delete.set('');
    }

    public add() {
        const name =
            this.new_name().trim() || `Layer ${this.state.layers().length + 1}`;
        this.state.addLayer(name);
        this.new_name.set('');
    }
}
