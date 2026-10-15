import {
    ChangeDetectionStrategy,
    Component,
    computed,
    ElementRef,
    HostListener,
    inject,
    input,
    output,
    signal,
} from '@angular/core';
import { ANNOTATION_COLOURS, AnnotationTool } from '../ai/annotations';
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
 * The editing surface: the canvas with floating tools over it, the
 * properties strip under it and a right column for whatever the host
 * projects with the `panel` attribute.
 */
@Component({
    selector: 'map-editor',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [MapEditorCanvasComponent, PropertiesStripComponent],
    template: `
        <div class="body">
            <div class="main">
                <div class="well">
                    <map-editor-canvas
                        #canvas
                        class="canvas"
                        [session]="session()"
                        [strings]="strings()"
                        [notifier]="notifier()"
                        [(annotation_tool)]="annotation_tool"
                        [(annotations_visible)]="annotations_visible"
                        [annotation_colour]="annotation_colour()"
                    />
                    <div
                        class="float rail"
                        role="toolbar"
                        aria-orientation="vertical"
                        [attr.aria-label]="strings().tools_label"
                    >
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
                        <span class="divider" aria-hidden="true"></span>
                        @for (tool of annotation_tools; track tool.kind) {
                            <button
                                type="button"
                                class="tool"
                                [class.active]="annotation_tool() === tool.kind"
                                [attr.aria-pressed]="
                                    annotation_tool() === tool.kind
                                "
                                [title]="strings()[tool.label]"
                                [attr.aria-label]="strings()[tool.label]"
                                (click)="annotation_tool.set(tool.kind)"
                            >
                                <svg viewBox="0 0 24 24" aria-hidden="true">
                                    <path [attr.d]="icons[tool.icon]" />
                                </svg>
                            </button>
                        }
                        <div class="colour">
                            <button
                                type="button"
                                class="tool"
                                aria-haspopup="menu"
                                [attr.aria-expanded]="colour_menu()"
                                [title]="colourTitle()"
                                [attr.aria-label]="colourTitle()"
                                (click)="colour_menu.set(!colour_menu())"
                            >
                                <span
                                    class="dot"
                                    [style.background]="selectedColour()"
                                    aria-hidden="true"
                                ></span>
                            </button>
                            @if (colour_menu()) {
                                <div
                                    class="menu"
                                    role="menu"
                                    [attr.aria-label]="
                                        strings().annotation_colour
                                    "
                                >
                                    @for (
                                        colour of annotation_colours;
                                        track colour.name
                                    ) {
                                        <button
                                            type="button"
                                            role="menuitemradio"
                                            [attr.aria-checked]="
                                                annotation_colour() ===
                                                colour.name
                                            "
                                            (click)="pickColour(colour.name)"
                                        >
                                            <span
                                                class="dot small"
                                                [style.background]="
                                                    colour.value
                                                "
                                                aria-hidden="true"
                                            ></span>
                                            <span class="name">{{
                                                strings()[colour.name]
                                            }}</span>
                                            @if (
                                                annotation_colour() ===
                                                colour.name
                                            ) {
                                                <svg
                                                    viewBox="0 0 24 24"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        [attr.d]="icons.check"
                                                    />
                                                </svg>
                                            }
                                        </button>
                                    }
                                </div>
                            }
                        </div>
                        <span class="divider" aria-hidden="true"></span>
                        <button
                            type="button"
                            class="tool"
                            [disabled]="!session().annotations().length"
                            [title]="strings().undo_mark"
                            [attr.aria-label]="strings().undo_mark"
                            (click)="session().undoAnnotation()"
                        >
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path [attr.d]="icons.backspace" />
                            </svg>
                        </button>
                        <button
                            type="button"
                            class="tool"
                            [disabled]="!session().annotations().length"
                            [title]="strings().clear_marks"
                            [attr.aria-label]="strings().clear_marks"
                            (click)="session().clearAnnotations()"
                        >
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path [attr.d]="icons.ink_eraser" />
                            </svg>
                        </button>
                        <button
                            type="button"
                            class="tool"
                            [class.pressed]="annotations_visible()"
                            [disabled]="!session().annotations().length"
                            [attr.aria-pressed]="annotations_visible()"
                            [title]="strings().show_marks"
                            [attr.aria-label]="strings().show_marks"
                            (click)="
                                annotations_visible.set(!annotations_visible())
                            "
                        >
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    [attr.d]="
                                        annotations_visible()
                                            ? icons.visible
                                            : icons.hidden
                                    "
                                />
                            </svg>
                            <span class="sr">{{ strings().show_marks }}</span>
                        </button>
                    </div>
                    @if (session().preview(); as preview) {
                        <div class="float summary" role="status">
                            <span class="title">{{ preview.title }}</span>
                            <span class="muted note">{{ preview.note }}</span>
                            @for (tally of preview.counts; track tally.category) {
                                <span class="tally" [attr.data-category]="tally.category">
                                    <span class="ring" aria-hidden="true"></span>
                                    {{ tally.label }}
                                </span>
                            }
                        </div>
                    }
                    @if (
                        annotation_tool() !== 'select' ||
                        session().annotations().length
                    ) {
                        <p class="float hint" aria-live="polite">
                            {{ strings().annotation_hint }}
                            @if (session().annotations().length) {
                                <b>{{ marksCount() }}</b>
                            }
                        </p>
                    }
                    <div
                        class="float zoom"
                        role="group"
                        [attr.aria-label]="strings().zoom_label"
                    >
                        <span class="muted count">{{ elementCount() }}</span>
                        <span class="vdivider" aria-hidden="true"></span>
                        <button
                            type="button"
                            class="tool"
                            [title]="strings().zoom_out"
                            [attr.aria-label]="strings().zoom_out"
                            (click)="canvas.zoomOut()"
                        >
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path [attr.d]="icons.remove" />
                            </svg>
                        </button>
                        <span class="zoom-value" aria-live="polite"
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
                                <path [attr.d]="icons.add" />
                            </svg>
                        </button>
                        <span class="vdivider" aria-hidden="true"></span>
                        <button
                            type="button"
                            class="tool"
                            [title]="strings().zoom_fit"
                            [attr.aria-label]="strings().zoom_fit"
                            (click)="canvas.fit()"
                        >
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path [attr.d]="icons.fit_screen" />
                            </svg>
                        </button>
                    </div>
                    @if (show_save() || show_studio()) {
                        <div class="float actions toolbar">
                            @if (show_save()) {
                                <span
                                    class="status"
                                    role="status"
                                    aria-live="polite"
                                    [class.dirty]="session().dirty()"
                                >
                                    <span class="status-dot"></span>
                                    {{
                                        session().dirty()
                                            ? strings().unsaved
                                            : strings().saved
                                    }}
                                </span>
                            }
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
                    }
                </div>
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
                font-size: 0.875rem;
            }

            .body {
                display: flex;
                flex: 1;
                min-height: 0;
            }

            .main {
                position: relative;
                display: flex;
                flex: 1;
                flex-direction: column;
                min-width: 0;
                min-height: 0;
            }

            .well {
                position: relative;
                flex: 1;
                min-height: 0;
            }

            .canvas {
                position: absolute;
                inset: 0;
            }

            .panel {
                display: flex;
                flex-direction: column;
                width: 24rem;
                min-height: 0;
                border-left: 1px solid var(--base-200, #e5e7eb);
                background: var(--base-100, #fff);
            }

            .panel:empty {
                display: none;
            }

            .float {
                position: absolute;
                z-index: 10;
                display: flex;
                align-items: center;
                gap: 0.125rem;
                padding: 0.25rem;
                border: 1px solid var(--base-300, #d4d4d8);
                border-radius: 0.75rem;
                background: var(--base-100, #fff);
                box-shadow:
                    0 4px 6px -1px rgb(0 0 0 / 0.1),
                    0 2px 4px -2px rgb(0 0 0 / 0.1);
            }

            .rail {
                top: 1rem;
                left: 1rem;
                flex-direction: column;
            }

            .zoom {
                right: 1rem;
                bottom: 1rem;
            }

            .actions {
                top: 1rem;
                right: 1rem;
                gap: 0.5rem;
                padding: 0.25rem 0.25rem 0.25rem 0.75rem;
            }

            .summary {
                top: 1rem;
                left: 50%;
                transform: translateX(-50%);
                gap: 0.875rem;
                padding: 0.5rem 0.875rem;
                white-space: nowrap;
            }

            .summary .title {
                font-weight: 500;
            }

            .tally {
                display: inline-flex;
                align-items: center;
                gap: 0.25rem;
            }

            .ring {
                width: 0.875rem;
                height: 0.875rem;
                border-radius: 999px;
                border: 2px solid var(--info, #2563eb);
            }

            .tally[data-category='added'] .ring {
                border-color: var(--success, #16a34a);
            }

            .tally[data-category='removed'] .ring {
                border-color: var(--error, #dc2626);
                border-style: dashed;
            }

            .hint {
                left: 1rem;
                bottom: 1rem;
                display: block;
                max-width: 32rem;
                margin: 0;
                padding: 0.5rem 0.75rem;
                font-size: 0.75rem;
                line-height: 1rem;
            }

            .hint b {
                margin-left: 0.375rem;
                font-weight: 500;
            }

            .tool {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                width: 2.5rem;
                height: 2.5rem;
                padding: 0;
                border: none;
                border-radius: 0.5rem;
                background: transparent;
                color: inherit;
                font: inherit;
                cursor: pointer;
            }

            .tool:hover:not(:disabled),
            .tool.pressed {
                background: var(--base-200, #f4f4f5);
            }

            .tool:disabled {
                opacity: 0.35;
                pointer-events: none;
            }

            .tool.active {
                background: var(--secondary, #1f2155);
                color: var(--secondary-content, #fff);
            }

            .tool:focus-visible,
            .action:focus-visible,
            .menu button:focus-visible {
                outline: 2px solid var(--primary, #2563eb);
                outline-offset: 2px;
            }

            svg {
                width: 1.25rem;
                height: 1.25rem;
                flex: none;
                fill: currentColor;
            }

            .sr {
                position: absolute;
                width: 1px;
                height: 1px;
                margin: -1px;
                padding: 0;
                overflow: hidden;
                clip: rect(0 0 0 0);
                white-space: nowrap;
                border: 0;
            }

            .divider {
                width: 1.5rem;
                height: 1px;
                margin: 0.25rem 0;
                background: var(--base-300, #d4d4d8);
            }

            .vdivider {
                width: 1px;
                height: 1.5rem;
                margin: 0 0.125rem;
                background: var(--base-300, #d4d4d8);
            }

            .colour {
                position: relative;
            }

            .dot {
                display: block;
                width: 1.125rem;
                height: 1.125rem;
                border-radius: 999px;
                border: 2px solid var(--base-100, #fff);
                box-shadow: 0 0 0 1px var(--base-300, #d4d4d8);
            }

            .dot.small {
                width: 1rem;
                height: 1rem;
            }

            .menu {
                position: absolute;
                top: 0;
                left: calc(100% + 0.5rem);
                z-index: 20;
                display: flex;
                flex-direction: column;
                min-width: 9rem;
                padding: 0.25rem;
                border: 1px solid var(--base-300, #d4d4d8);
                border-radius: 0.75rem;
                background: var(--base-100, #fff);
                box-shadow:
                    0 4px 6px -1px rgb(0 0 0 / 0.1),
                    0 2px 4px -2px rgb(0 0 0 / 0.1);
            }

            .menu button {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                height: 2.25rem;
                padding: 0 0.625rem;
                border: none;
                border-radius: 0.5rem;
                background: transparent;
                color: inherit;
                font: inherit;
                text-align: left;
                cursor: pointer;
            }

            .menu button:hover {
                background: var(--base-200, #f4f4f5);
            }

            .menu .name {
                flex: 1;
            }

            .menu svg {
                width: 1rem;
                height: 1rem;
            }

            .count {
                padding: 0 0.5rem;
                font-size: 0.75rem;
                white-space: nowrap;
            }

            .zoom-value {
                min-width: 2.75rem;
                text-align: center;
                font-weight: 500;
                font-variant-numeric: tabular-nums;
            }

            .muted {
                opacity: 0.72;
            }

            .status {
                display: inline-flex;
                align-items: center;
                gap: 0.375rem;
                margin-right: 0.25rem;
                white-space: nowrap;
            }

            .status-dot {
                width: 0.5rem;
                height: 0.5rem;
                border-radius: 999px;
                background: var(--success, #16a34a);
            }

            .status.dirty .status-dot {
                background: var(--warn, #f59e0b);
            }

            .action {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: 0.5rem;
                min-height: 2.5rem;
                padding: 0 0.875rem;
                border: 1px solid transparent;
                border-radius: 0.5rem;
                background: transparent;
                color: inherit;
                font: inherit;
                font-weight: 500;
                white-space: nowrap;
                cursor: pointer;
            }

            .action:hover:not(:disabled) {
                background: var(--base-200, #f4f4f5);
            }

            .action.primary {
                border-color: var(--secondary, #1f2155);
                background: var(--secondary, #1f2155);
                color: var(--secondary-content, #fff);
            }

            .action.primary:hover:not(:disabled) {
                filter: brightness(1.1);
            }

            .action:disabled {
                opacity: 0.3;
                pointer-events: none;
            }

            @media (prefers-reduced-motion: no-preference) {
                .tool,
                .action,
                .menu button {
                    transition:
                        background-color 120ms,
                        box-shadow 120ms,
                        outline-color 120ms;
                }
            }

            @media (max-width: 767px) {
                .body {
                    flex-direction: column;
                }

                .well {
                    min-height: 420px;
                }

                .panel {
                    width: auto;
                    border-left: none;
                    border-top: 1px solid var(--base-200, #e5e7eb);
                }

                .summary .note {
                    display: none;
                }
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
    public readonly annotation_tool = signal<AnnotationTool>('select');
    public readonly annotations_visible = signal(true);
    public readonly annotation_colour = signal('red');
    public readonly colour_menu = signal(false);
    public readonly annotation_colours = ANNOTATION_COLOURS;
    public readonly annotation_tools = [
        { kind: 'select', label: 'select_tool', icon: 'select' },
        { kind: 'ellipse', label: 'circle_tool', icon: 'circle' },
        { kind: 'box', label: 'rectangle_tool', icon: 'rectangle' },
        { kind: 'path', label: 'freehand_tool', icon: 'freehand' },
        { kind: 'arrow', label: 'arrow_tool', icon: 'arrow' },
    ] as const;
    public readonly selectedColour = computed(
        () =>
            ANNOTATION_COLOURS.find(
                (colour) => colour.name === this.annotation_colour(),
            )?.value,
    );
    public readonly colourTitle = computed(() => {
        const strings = this.strings();
        const name = strings[this.annotation_colour() as keyof MapEditorStrings];
        return `${strings.annotation_colour}: ${name}`;
    });
    public readonly marksCount = computed(() =>
        formatString(this.strings().marks_attached, {
            count: this.session().annotations().length,
        }),
    );

    private readonly _host = inject<ElementRef<HTMLElement>>(ElementRef);

    public pickColour(name: string): void {
        this.annotation_colour.set(name);
        this.colour_menu.set(false);
    }

    /** Kept for hosts that still bind a `<select>` to the colour. */
    public setAnnotationColour(event: Event): void {
        this.annotation_colour.set((event.target as HTMLSelectElement).value);
    }

    @HostListener('document:pointerdown', ['$event'])
    public closeColourMenu(event: Event): void {
        if (!this.colour_menu()) return;
        const menu = this._host.nativeElement.querySelector('.colour');
        if (menu && event.target instanceof Node && menu.contains(event.target))
            return;
        this.colour_menu.set(false);
    }

    @HostListener('document:keydown.escape')
    public closeColourMenuOnEscape(): void {
        if (this.colour_menu()) this.colour_menu.set(false);
    }

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
