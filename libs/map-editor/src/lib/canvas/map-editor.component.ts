import {
    ChangeDetectionStrategy,
    Component,
    computed,
    input,
    output,
} from '@angular/core';
import { MapEditorSession } from '../session';
import { EDITOR_ICONS } from './icons';
import { MapEditorCanvasComponent } from './map-canvas.component';
import {
    BrowserNotifier,
    DEFAULT_MAP_EDITOR_STRINGS,
    formatString,
    MapEditorNotifier,
    MapEditorStrings,
    resolveStrings,
} from './ports';
import { PropertiesStripComponent } from './properties-strip.component';

/**
 * The editing surface: a toolbar, the canvas, the properties strip and a
 * right column for whatever the host projects with the `panel` attribute.
 */
@Component({
    selector: 'map-editor',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [MapEditorCanvasComponent, PropertiesStripComponent],
    template: `
        <div class="toolbar" role="toolbar">
            <button
                type="button"
                class="tool"
                [title]="strings().zoom_out"
                [attr.aria-label]="strings().zoom_out"
                (click)="canvas.zoomOut()"
            >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path [attr.d]="icons.zoom_out" />
                </svg>
            </button>
            <span class="zoom" aria-live="polite"
                >{{ canvas.zoom_percent() }}%</span
            >
            <button
                type="button"
                class="tool"
                [title]="strings().zoom_in"
                [attr.aria-label]="strings().zoom_in"
                (click)="canvas.zoomIn()"
            >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path [attr.d]="icons.zoom_in" />
                </svg>
            </button>
            <button
                type="button"
                class="tool"
                [title]="strings().zoom_fit"
                [attr.aria-label]="strings().zoom_fit"
                (click)="canvas.fit()"
            >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path [attr.d]="icons.zoom_fit" />
                </svg>
            </button>
            <span class="divider"></span>
            <button
                type="button"
                class="tool"
                [disabled]="!session().can_undo()"
                [title]="undoTitle()"
                [attr.aria-label]="undoTitle()"
                (click)="session().undo()"
            >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path [attr.d]="icons.undo" />
                </svg>
            </button>
            <button
                type="button"
                class="tool"
                [disabled]="!session().can_redo()"
                [title]="redoTitle()"
                [attr.aria-label]="redoTitle()"
                (click)="session().redo()"
            >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path [attr.d]="icons.redo" />
                </svg>
            </button>
            <span class="spacer"></span>
            <span class="muted">{{ elementCount() }}</span>
            <span class="status" [class.dirty]="session().dirty()">
                <span class="dot"></span>
                {{ session().dirty() ? strings().unsaved : strings().saved }}
            </span>
            @if (show_studio()) {
                <button
                    type="button"
                    class="action"
                    (click)="open_studio.emit()"
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path [attr.d]="icons.open" />
                    </svg>
                    {{ strings().open_studio }}
                </button>
            }
            @if (show_save()) {
                <button
                    type="button"
                    class="action primary"
                    [disabled]="!session().dirty()"
                    (click)="save.emit()"
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path [attr.d]="icons.save" />
                    </svg>
                    {{ strings().save }}
                </button>
            }
        </div>
        <div class="body">
            <div class="main">
                <map-editor-canvas
                    #canvas
                    class="canvas"
                    [session]="session()"
                    [strings]="strings()"
                    [notifier]="notifier()"
                />
                <map-editor-properties
                    [session]="session()"
                    [strings]="strings()"
                    [notifier]="notifier()"
                />
            </div>
            <aside class="panel">
                <ng-content select="[panel]" />
            </aside>
        </div>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                height: 100%;
                width: 100%;
                min-height: 0;
                overflow: hidden;
                background: var(--base-100, #fff);
                color: var(--base-content, #1f2937);
            }

            .toolbar {
                display: flex;
                align-items: center;
                gap: 0.25rem;
                padding: 0.375rem 0.75rem;
                border-bottom: 1px solid var(--base-300, #d4d4d8);
                font-size: 0.875rem;
            }

            .tool,
            .action {
                display: inline-flex;
                align-items: center;
                gap: 0.35rem;
                height: 2rem;
                padding: 0 0.5rem;
                border: none;
                border-radius: 0.375rem;
                background: transparent;
                color: inherit;
                font: inherit;
                font-size: 0.875rem;
                cursor: pointer;
            }

            .tool:hover:not(:disabled),
            .action:hover:not(:disabled) {
                background: var(--base-200, #f4f4f5);
            }

            .tool:disabled,
            .action:disabled {
                opacity: 0.35;
                cursor: default;
            }

            .tool:focus-visible,
            .action:focus-visible {
                outline: 2px solid var(--primary, #2563eb);
            }

            .action.primary {
                background: var(--primary, #2563eb);
                color: var(--primary-content, #fff);
            }

            .action.primary:hover:not(:disabled) {
                background: var(--primary, #2563eb);
                filter: brightness(1.1);
            }

            svg {
                width: 1.25rem;
                height: 1.25rem;
                fill: currentColor;
            }

            .zoom {
                min-width: 3.25rem;
                text-align: center;
                font-variant-numeric: tabular-nums;
            }

            .divider {
                width: 1px;
                height: 1.5rem;
                margin: 0 0.25rem;
                background: var(--base-300, #d4d4d8);
            }

            .spacer {
                flex: 1;
            }

            .muted {
                opacity: 0.6;
            }

            .status {
                display: inline-flex;
                align-items: center;
                gap: 0.35rem;
                margin: 0 0.5rem;
                opacity: 0.7;
            }

            .status .dot {
                width: 0.5rem;
                height: 0.5rem;
                border-radius: 999px;
                background: var(--success, #16a34a);
            }

            .status.dirty .dot {
                background: var(--warning, #f59e0b);
            }

            .body {
                display: flex;
                flex: 1;
                min-height: 0;
            }

            .main {
                display: flex;
                flex: 1;
                flex-direction: column;
                min-width: 0;
                min-height: 0;
            }

            .canvas {
                flex: 1;
                min-height: 0;
            }

            .panel {
                display: flex;
                flex-direction: column;
                width: 24rem;
                min-height: 0;
                border-left: 1px solid var(--base-300, #d4d4d8);
                background: var(--base-100, #fff);
            }

            .panel:empty {
                display: none;
            }
        `,
    ],
})
export class MapEditorComponent {
    public readonly session = input.required<MapEditorSession>();
    public readonly strings = input<
        MapEditorStrings,
        Partial<MapEditorStrings>
    >(DEFAULT_MAP_EDITOR_STRINGS, { transform: resolveStrings });
    public readonly notifier = input<MapEditorNotifier>(new BrowserNotifier());
    public readonly show_save = input(false);
    public readonly show_studio = input(false);

    public readonly save = output<void>();
    public readonly open_studio = output<void>();

    public readonly icons = EDITOR_ICONS;

    public readonly elementCount = computed(() => {
        const session = this.session();
        session.version();
        return formatString(this.strings().elements, {
            count: session.index().stats.elements,
        });
    });

    public readonly undoTitle = computed(() => {
        const label = this.session().undo_label();
        const base = this.strings().undo;
        return label ? `${base}: ${label}` : base;
    });

    public readonly redoTitle = computed(() => {
        const label = this.session().redo_label();
        const base = this.strings().redo;
        return label ? `${base}: ${label}` : base;
    });
}
