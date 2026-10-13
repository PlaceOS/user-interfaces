import {
    ChangeDetectionStrategy,
    Component,
    computed,
    input,
} from '@angular/core';
import { MapEditorSession } from '../session';
import { StyleResolver } from '../style-resolution';
import {
    BrowserNotifier,
    DEFAULT_MAP_EDITOR_STRINGS,
    formatString,
    MapEditorNotifier,
    MapEditorStrings,
    resolveStrings,
} from './ports';
import {
    colourInputValue,
    describeSelection,
    idOp,
    MultiSelectionView,
    normaliseTextInput,
    PaintName,
    paintOps,
    PaintSource,
    resetOps,
    SelectionView,
    SingleSelectionView,
    textOp,
} from './properties';

/** Edits the selected element's id, fill, stroke and text through ops. */
@Component({
    selector: 'map-editor-properties',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <div class="strip" role="group" [attr.aria-label]="strings().tag">
            @if (single(); as item) {
                <div class="field element">
                    <span class="label">{{ strings().tag }}</span>
                    <span class="value">
                        <code>{{ item.tag }}</code>
                        @if (item.label) {
                            <span class="muted">{{ item.label }}</span>
                        }
                    </span>
                    @if (item.protected) {
                        <span class="badge bound">{{
                            strings().protected_badge
                        }}</span>
                    }
                    @if (item.changed) {
                        <span class="badge changed">{{
                            strings().changed
                        }}</span>
                        <button
                            type="button"
                            class="link"
                            (click)="reset(item)"
                        >
                            {{ strings().reset }}
                        </button>
                    }
                </div>
                <label class="field">
                    <span class="label">{{ strings().id }}</span>
                    <input
                        type="text"
                        class="text"
                        [value]="item.id"
                        (change)="commitId(item, $event)"
                    />
                </label>
                <div class="field">
                    <span class="label">{{ strings().fill }}</span>
                    <input
                        type="color"
                        class="swatch"
                        [value]="colourFor(item.fill.effective)"
                        [title]="item.fill.effective || strings().none"
                        (change)="commitPaint([item.anchor], 'fill', $event)"
                    />
                    <input
                        type="text"
                        class="text short"
                        [value]="item.fill.own"
                        [placeholder]="item.fill.effective || strings().none"
                        (change)="commitPaint([item.anchor], 'fill', $event)"
                    />
                    <span class="muted">{{
                        sourceNote(item.fill.source)
                    }}</span>
                </div>
                <div class="field">
                    <span class="label">{{ strings().stroke }}</span>
                    <input
                        type="color"
                        class="swatch"
                        [value]="colourFor(item.stroke.effective)"
                        [title]="item.stroke.effective || strings().none"
                        (change)="commitPaint([item.anchor], 'stroke', $event)"
                    />
                    <input
                        type="text"
                        class="text short"
                        [value]="item.stroke.own"
                        [placeholder]="item.stroke.effective || strings().none"
                        (change)="commitPaint([item.anchor], 'stroke', $event)"
                    />
                    <span class="muted">{{
                        sourceNote(item.stroke.source)
                    }}</span>
                </div>
                @if (item.is_text) {
                    <label class="field grow">
                        <span class="label">{{ strings().text }}</span>
                        <textarea
                            class="text lines"
                            rows="2"
                            [value]="item.text"
                            [title]="strings().text_hint"
                            (keydown.enter)="enterText($event)"
                            (change)="commitText(item, $event)"
                        ></textarea>
                    </label>
                }
            } @else if (multi(); as group) {
                <div class="field element">
                    <span class="value">{{
                        formatCount(strings().multi_selected, group.count)
                    }}</span>
                    @if (group.changed) {
                        <span class="badge changed">{{
                            strings().changed
                        }}</span>
                    }
                </div>
                <div class="field">
                    <span class="label">{{ strings().fill }}</span>
                    <input
                        type="color"
                        class="swatch"
                        [value]="colourFor(group.fill)"
                        (change)="commitPaint(group.anchors, 'fill', $event)"
                    />
                    <input
                        type="text"
                        class="text short"
                        [value]="group.fill"
                        (change)="commitPaint(group.anchors, 'fill', $event)"
                    />
                </div>
                <div class="field">
                    <span class="label">{{ strings().stroke }}</span>
                    <input
                        type="color"
                        class="swatch"
                        [value]="colourFor(group.stroke)"
                        (change)="commitPaint(group.anchors, 'stroke', $event)"
                    />
                    <input
                        type="text"
                        class="text short"
                        [value]="group.stroke"
                        (change)="commitPaint(group.anchors, 'stroke', $event)"
                    />
                    <span class="muted">{{ strings().apply_to_all }}</span>
                </div>
            } @else {
                <span class="hint">{{ strings().no_selection }}</span>
            }
        </div>
    `,
    styles: [
        `
            :host {
                display: block;
            }

            .strip {
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                gap: 0.5rem 1.25rem;
                min-height: 3rem;
                padding: 0.5rem 1rem;
                font-size: 0.875rem;
                border-top: 1px solid var(--base-300, #d4d4d8);
                background: var(--base-100, #fff);
            }

            .field {
                display: inline-flex;
                align-items: center;
                gap: 0.4rem;
            }

            .field.grow {
                flex: 1 1 12rem;
            }

            .field.grow .text {
                flex: 1;
            }

            .label {
                opacity: 0.6;
                font-size: 0.75rem;
                text-transform: uppercase;
                letter-spacing: 0.04em;
            }

            .value {
                display: inline-flex;
                align-items: center;
                gap: 0.4rem;
            }

            .muted {
                opacity: 0.6;
                font-size: 0.75rem;
            }

            .hint {
                opacity: 0.6;
            }

            code {
                font-size: 0.8125rem;
                padding: 0.1rem 0.35rem;
                border-radius: 0.25rem;
                background: var(--base-200, #f4f4f5);
            }

            .text {
                height: 2rem;
                padding: 0 0.5rem;
                border: 1px solid var(--base-300, #d4d4d8);
                border-radius: 0.375rem;
                background: var(--base-100, #fff);
                color: inherit;
                font: inherit;
                font-size: 0.875rem;
                min-width: 6rem;
            }

            .text.lines {
                resize: vertical;
                min-height: 2.6em;
                font: inherit;
                line-height: 1.25;
            }

            .text.short {
                width: 7.5rem;
                min-width: 0;
            }

            .text:focus {
                outline: 2px solid var(--primary, #2563eb);
                outline-offset: -1px;
            }

            .swatch {
                width: 2rem;
                height: 2rem;
                padding: 0;
                border: 1px solid var(--base-300, #d4d4d8);
                border-radius: 0.375rem;
                background: transparent;
                cursor: pointer;
            }

            .badge {
                padding: 0.1rem 0.5rem;
                border-radius: 999px;
                font-size: 0.7rem;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 0.04em;
            }

            .badge.changed {
                background: var(--warning, #f59e0b);
                color: var(--warning-content, #1f1300);
            }

            .badge.bound {
                background: var(--info, #0ea5e9);
                color: var(--info-content, #03202d);
            }

            .link {
                border: none;
                background: none;
                padding: 0;
                color: var(--primary, #2563eb);
                font: inherit;
                font-size: 0.8125rem;
                cursor: pointer;
                text-decoration: underline;
            }
        `,
    ],
})
export class PropertiesStripComponent {
    public readonly session = input.required<MapEditorSession>();
    public readonly strings = input<
        MapEditorStrings,
        Partial<MapEditorStrings>
    >(DEFAULT_MAP_EDITOR_STRINGS, { transform: resolveStrings });
    public readonly notifier = input<MapEditorNotifier>(new BrowserNotifier());

    private readonly _resolver = computed(() => {
        const session = this.session();
        session.version();
        return new StyleResolver(session.doc.root, session.doc.styleRules());
    });

    public readonly view = computed<SelectionView>(() => {
        const session = this.session();
        session.version();
        return describeSelection(
            session,
            session.selection(),
            this._resolver(),
        );
    });

    public readonly single = computed<SingleSelectionView | null>(() => {
        const view = this.view();
        return view.kind === 'single' ? view : null;
    });

    public readonly multi = computed<MultiSelectionView | null>(() => {
        const view = this.view();
        return view.kind === 'multi' ? view : null;
    });

    public colourFor(value: string): string {
        return colourInputValue(value);
    }

    public formatCount(template: string, count: number): string {
        return formatString(template, { count });
    }

    public sourceNote(source: PaintSource): string {
        const strings = this.strings();
        switch (source) {
            case 'stylesheet':
                return strings.from_stylesheet;
            case 'inline':
                return strings.from_inline_style;
            case 'inherited':
                return strings.inherited;
            case 'default':
                return strings.default_value;
            default:
                return '';
        }
    }

    public commitPaint(
        anchors: readonly string[],
        name: PaintName,
        event: Event,
    ): void {
        const value = (event.target as HTMLInputElement).value;
        const strings = this.strings();
        const label =
            anchors.length > 1
                ? `${strings.recolour_label} (${anchors.length})`
                : strings.recolour_label;
        const result = this.session().apply(
            paintOps(anchors, name, value, strings.recolour_label),
            label,
        );
        this._reportRejections(result.rejected.map((entry) => entry.reason));
    }

    public async commitId(
        item: SingleSelectionView,
        event: Event,
    ): Promise<void> {
        const input_element = event.target as HTMLInputElement;
        const value = input_element.value.trim();
        if (value === item.id) return;
        const strings = this.strings();
        if (item.protected) {
            const ok = await this.notifier().confirm(
                strings.rename_protected_title,
                formatString(strings.rename_protected_message, {
                    id: item.id,
                }),
                strings.confirm_rename,
            );
            if (!ok) {
                input_element.value = item.id;
                return;
            }
        }
        const result = this.session().apply(
            [idOp(item.anchor, value, strings.rename_label)],
            strings.rename_label,
        );
        if (result.rejected.length) input_element.value = item.id;
        this._reportRejections(result.rejected.map((entry) => entry.reason));
    }

    /** Enter applies the text; Shift+Enter adds a line. */
    public enterText(event: Event): void {
        const key = event as KeyboardEvent;
        if (key.shiftKey) return;
        event.preventDefault();
        (event.target as HTMLTextAreaElement).blur();
    }

    public commitText(item: SingleSelectionView, event: Event): void {
        const value = normaliseTextInput(
            (event.target as HTMLTextAreaElement).value,
        );
        if (value === item.text) return;
        const strings = this.strings();
        const result = this.session().apply(
            [textOp(item.anchor, value, strings.text_label)],
            strings.text_label,
        );
        this._reportRejections(result.rejected.map((entry) => entry.reason));
    }

    public reset(item: SingleSelectionView): void {
        const strings = this.strings();
        const session = this.session();
        const ops = resetOps(session, item.anchor, strings.reset_label);
        if (!ops.length) return;
        const result = session.apply(ops, strings.reset_label);
        this._reportRejections(result.rejected.map((entry) => entry.reason));
    }

    private _reportRejections(reasons: string[]): void {
        for (const reason of reasons) this.notifier().notify('error', reason);
    }
}
