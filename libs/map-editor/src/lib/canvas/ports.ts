/** Every string the editor shows; hosts override any subset. */
export interface MapEditorStrings {
    canvas_label: string;
    zoom_in: string;
    zoom_out: string;
    zoom_fit: string;
    undo: string;
    redo: string;
    elements: string;
    unsaved: string;
    saved: string;
    save: string;
    open_studio: string;
    move_label: string;
    nudge_label: string;
    delete_label: string;
    recolour_label: string;
    rename_label: string;
    text_label: string;
    reset_label: string;
    delete_protected_title: string;
    delete_protected_message: string;
    rename_protected_title: string;
    rename_protected_message: string;
    confirm_delete: string;
    confirm_rename: string;
    no_selection: string;
    multi_selected: string;
    tag: string;
    id: string;
    fill: string;
    stroke: string;
    text: string;
    /** Tooltip on the text field. */
    text_hint: string;
    changed: string;
    reset: string;
    protected_badge: string;
    from_stylesheet: string;
    from_inline_style: string;
    inherited: string;
    default_value: string;
    apply_to_all: string;
    none: string;
}

export const DEFAULT_MAP_EDITOR_STRINGS: MapEditorStrings = {
    canvas_label: 'Map canvas',
    zoom_in: 'Zoom in',
    zoom_out: 'Zoom out',
    zoom_fit: 'Fit map',
    undo: 'Undo',
    redo: 'Redo',
    elements: '{count} elements',
    unsaved: 'Unsaved changes',
    saved: 'No changes',
    save: 'Save',
    open_studio: 'Open in Map Studio',
    move_label: 'Move',
    nudge_label: 'Nudge',
    delete_label: 'Delete',
    recolour_label: 'Recolour',
    rename_label: 'Rename',
    text_label: 'Change text',
    reset_label: 'Reset element',
    delete_protected_title: 'Delete a bound element?',
    delete_protected_message:
        'Bookings or records are linked to: {ids}. Deleting them breaks that link.',
    rename_protected_title: 'Rename a bound element?',
    rename_protected_message:
        'Bookings or records are linked to the id {id}. Renaming it breaks that link.',
    confirm_delete: 'Delete anyway',
    confirm_rename: 'Rename anyway',
    no_selection: 'Click an element on the map to edit it',
    multi_selected: '{count} elements selected',
    tag: 'Element',
    id: 'ID',
    fill: 'Fill',
    stroke: 'Stroke',
    text: 'Text',
    text_hint: 'Enter applies the text, Shift+Enter starts a new line',
    changed: 'Changed',
    reset: 'Reset',
    protected_badge: 'Bound to a record',
    from_stylesheet: 'Set by a stylesheet rule',
    from_inline_style: 'Set by an inline style',
    inherited: 'Inherited from a parent',
    default_value: 'Default',
    apply_to_all: 'Applies to every selected element',
    none: 'none',
};

export function resolveStrings(
    overrides: Partial<MapEditorStrings> = {},
): MapEditorStrings {
    return { ...DEFAULT_MAP_EDITOR_STRINGS, ...overrides };
}

/** Replace `{name}` placeholders. */
export function formatString(
    template: string,
    args: Record<string, string | number>,
): string {
    return template.replace(/\{(\w+)\}/g, (match, name: string) =>
        name in args ? `${args[name]}` : match,
    );
}

export type NotifyKind = 'success' | 'error' | 'warning' | 'info';

export interface NotifyAction {
    label: string;
    run: () => void;
}

/** How the editor asks and tells; hosts supply their dialogs and toasts. */
export interface MapEditorNotifier {
    confirm(
        title: string,
        message: string,
        confirm_text: string,
    ): Promise<boolean>;
    notify(kind: NotifyKind, message: string, action?: NotifyAction): void;
}

/** Window dialogs and the console, for hosts that pass nothing. */
export class BrowserNotifier implements MapEditorNotifier {
    public async confirm(title: string, message: string): Promise<boolean> {
        const ask = (globalThis as { confirm?: (text: string) => boolean })
            .confirm;
        return typeof ask === 'function' ? ask(`${title}\n\n${message}`) : true;
    }

    public notify(kind: NotifyKind, message: string): void {
        if (kind === 'error') console.error(message);
        else console.info(message);
    }
}

/** Records what was asked and answers every confirm the same way. */
export class RecordingNotifier implements MapEditorNotifier {
    public readonly confirms: { title: string; message: string }[] = [];
    public readonly notices: { kind: NotifyKind; message: string }[] = [];

    constructor(private readonly _answer = true) {}

    public async confirm(title: string, message: string): Promise<boolean> {
        this.confirms.push({ title, message });
        return this._answer;
    }

    public notify(kind: NotifyKind, message: string): void {
        this.notices.push({ kind, message });
    }
}
