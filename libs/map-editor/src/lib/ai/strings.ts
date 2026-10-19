import { OpKind } from '../ops';

/** Words the panel shows; a host overrides any of them with its translations. */
export interface MapEditorAiStrings {
    title: string;
    checking: string;
    /** `{reason}` is the server's reason. */
    unavailable: string;
    /** `{model}` and `{provider}`. */
    model_note: string;
    /** Label of the model picker. */
    model_label: string;
    /** `{count}` edits the person may still ask for today. */
    quota_note: string;
    /** `{count}` edits the organisation has left this month. */
    quota_domain_note: string;
    quota_user_exhausted: string;
    quota_domain_exhausted: string;
    composer_label: string;
    composer_placeholder: string;
    reply_placeholder: string;
    send: string;
    /** Tooltip on Send naming its keyboard shortcut. */
    send_shortcut: string;
    cancel: string;
    cancelling: string;
    new_request: string;
    retry: string;
    /** `{count}` selected elements. */
    selection_chip: string;
    clear_selection: string;
    snapshot_attached: string;
    snapshot_failed: string;
    /** `{used}` and `{max}` characters. */
    chars: string;
    too_long: string;
    sending: string;
    running: string;
    /** `{seconds}` since the request was sent. */
    running_long: string;
    /** `{count}` changes in the proposal. */
    proposal_title: string;
    /** `{applied}` of the proposal's `{count}` changes are on the map. */
    preview_partial_title: string;
    questions_title: string;
    /** Shown under a question from the model. */
    questions_hint: string;
    keep: string;
    undo: string;
    reason_prompt: string;
    reasons: {
        wrong_elements: string;
        wrong_values: string;
        too_much: string;
        not_asked: string;
        other: string;
    };
    locked_note: string;
    unticked_note: string;
    /** `{n}` is the 1-based position of the change this one needs. */
    needs: string;
    /** `{n}` is the 1-based position of the one change that needs this one. */
    needed_by_one: string;
    /** `{list}` is the 1-based positions of the changes that need this one. */
    needed_by_many: string;
    /** `{count}` elements a style rule reaches. */
    affects: string;
    before: string;
    after: string;
    show_group: string;
    hide_group: string;
    /** `{count}` and `{kind}` for a collapsed group of rows. */
    group_label: string;
    categories: {
        added: string;
        changed: string;
        removed: string;
        question: string;
        none: string;
    };
    /** One word per operation kind, shown beside the glyph. */
    kinds: Record<OpKind, string>;
    /** Row text per operation kind; `{who}` is the element, see `describeOp`. */
    describe: {
        set_attr: string;
        remove_attr: string;
        set_style_rule: string;
        style_declaration: string;
        set_text: string;
        move: string;
        scale: string;
        rotate: string;
        transform_many: string;
        delete: string;
        delete_many: string;
        duplicate: string;
        duplicate_unnamed: string;
        duplicate_many: string;
        insert_shape: string;
        insert_shape_unnamed: string;
        set_id: string;
        remove_id: string;
        reorder_first: string;
        reorder_last: string;
        reorder_before: string;
        reorder_after: string;
        group: string;
        group_unnamed: string;
        ungroup: string;
        replace_element: string;
        replace_path: string;
        no_change: string;
        ask: string;
        elements: string;
        element: string;
        map_root: string;
    };
    outcomes: {
        previewing: string;
        not_applied: string;
        kept: string;
        /** `{accepted}` of `{total}` rows kept. */
        partial: string;
        undone: string;
        failed: string;
        cancelled: string;
        empty: string;
        questions: string;
    };
    states: {
        not_configured: string;
        model_cannot: string;
        quota: string;
        busy: string;
        generating: string;
        refused: string;
        timeout: string;
        vendor: string;
        invalid: string;
        /** `{count}` changes, `{invalid}` of them locked. */
        partially_invalid: string;
        /** `{summary}` is the model's own sentence. */
        empty: string;
        map_changed: string;
        cancelled: string;
        /** `{count}` changes previewed on the map. */
        applied: string;
        nothing_accepted: string;
        blocked: string;
        selection_refused: string;
        forbidden: string;
        unknown: string;
    };
}

export const DEFAULT_AI_STRINGS: MapEditorAiStrings = {
    title: 'Edit with AI',
    checking: 'Checking what the AI can do here...',
    unavailable: 'AI editing is not available: {reason}',
    model_note: 'Edits by {model}, via {provider}',
    model_label: 'Model',
    quota_note: '{count} edits left today',
    quota_domain_note: '{count} left this month for the organisation',
    quota_user_exhausted: "You have used today's allowance of AI edits.",
    quota_domain_exhausted:
        "This organisation has used this month's allowance of AI edits.",
    composer_label: 'Describe the change',
    composer_placeholder:
        'Describe the change, for example "recolour Meeting 1.01 light blue" or "add six desks along the north wall labelled 1.031 to 1.036"',
    reply_placeholder: 'Answer the question, or change the request',
    send: 'Send',
    send_shortcut: 'Send (Ctrl or ⌘ + Enter)',
    cancel: 'Cancel',
    cancelling: 'Stopping...',
    new_request: 'New request',
    retry: 'Retry',
    selection_chip: '{count} selected',
    clear_selection: 'Clear the selection',
    snapshot_attached: 'Map picture attached',
    snapshot_failed:
        'The map picture could not be prepared or uploaded. Please retry.',
    chars: '{used} / {max}',
    too_long: 'The request is too long.',
    sending: 'Sending...',
    running: 'Reading the map and working out the changes...',
    running_long: 'Still working after {seconds} s',
    proposal_title: '{count} changes',
    preview_partial_title: '{applied} of {count} changes',
    questions_title: 'The AI has a question',
    questions_hint:
        'Click the element on the map to select it, then answer below; the selection is sent with your reply.',
    keep: 'Keep',
    undo: 'Undo',
    reason_prompt: 'What was wrong?',
    reasons: {
        wrong_elements: 'Wrong elements',
        wrong_values: 'Wrong values',
        too_much: 'Too much',
        not_asked: 'Not what I asked',
        other: 'Other',
    },
    locked_note: 'Cannot be applied',
    unticked_note: 'Unticked; tick to apply it',
    needs: 'needs change {n}',
    needed_by_one: 'change {n} needs this',
    needed_by_many: 'changes {list} need this',
    affects: 'affects {count} elements',
    before: 'Before',
    after: 'After',
    show_group: 'Show',
    hide_group: 'Hide',
    group_label: '{count} {kind}',
    categories: {
        added: 'Added',
        changed: 'Changed',
        removed: 'Removed',
        question: 'Question',
        none: 'No change',
    },
    kinds: {
        set_attr: 'Change',
        set_style_rule: 'Rule',
        set_text: 'Text',
        transform: 'Move',
        delete: 'Delete',
        duplicate: 'Duplicate',
        insert_shape: 'Add',
        set_id: 'Rename',
        reorder: 'Reorder',
        group: 'Group',
        ungroup: 'Ungroup',
        replace_element: 'Replace',
        replace_path: 'Redraw',
        no_change: 'No change',
        ask: 'Question',
    },
    describe: {
        set_attr: 'Change {name} of {who} to {value}',
        remove_attr: 'Remove {name} from {who}',
        set_style_rule: 'Rule {selector} {changes}, {affects}',
        style_declaration: '{name} {from} -> {to}',
        set_text: 'Change the text of {who} to "{text}"',
        move: 'Move {who} by {x}, {y}',
        scale: 'Scale {who} by {x}, {y}',
        rotate: 'Rotate {who} by {degrees} degrees',
        transform_many: 'Transform {who}',
        delete: 'Delete {who}',
        delete_many: 'Delete {who}',
        duplicate: 'Duplicate {who} as {new_id}',
        duplicate_unnamed: 'Duplicate {who}',
        duplicate_many: 'Duplicate {who} {count} times as {pattern}',
        insert_shape: 'Add {kind} {new_id} in {parent}',
        insert_shape_unnamed: 'Add {kind} in {parent}',
        set_id: 'Rename {who} to {new_id}',
        remove_id: 'Remove the id of {who}',
        reorder_first: 'Send {who} to the back',
        reorder_last: 'Bring {who} to the front',
        reorder_before: 'Move {who} behind {other}',
        reorder_after: 'Move {who} in front of {other}',
        group: 'Group {who} as {new_id}',
        group_unnamed: 'Group {who}',
        ungroup: 'Ungroup {who}',
        replace_element: 'Replace {who} with new markup',
        replace_path: 'Redraw the outline of {who}',
        no_change: 'No change: {reason}',
        ask: '{question}',
        elements: '{count} elements',
        element: '{count} element',
        map_root: 'the map',
    },
    outcomes: {
        previewing: 'Previewed on the map',
        not_applied: 'Not applied to the map',
        kept: 'Kept',
        partial: 'Kept {accepted} of {total}',
        undone: 'Undone',
        failed: 'Failed',
        cancelled: 'Cancelled',
        empty: 'No changes',
        questions: 'Waiting for your answer',
    },
    states: {
        not_configured: 'No AI provider is configured for this organisation.',
        model_cannot: 'The configured AI model cannot edit maps.',
        quota: 'The AI edit allowance has been used up.',
        busy: 'The AI is busy right now. Try again in a moment.',
        generating: 'Reading the map and working out the changes...',
        refused:
            'The AI provider refused this request. Rewording usually clears it.',
        timeout: 'The AI took too long and the request was stopped.',
        vendor: 'The AI provider returned an error.',
        invalid: "The AI's answer could not be turned into map changes.",
        partially_invalid: '{count} changes, {invalid} cannot be applied',
        empty: 'No changes proposed. The AI said: {summary}',
        map_changed:
            'The map changed since this was proposed; changes whose elements are gone are unticked.',
        cancelled: 'Cancelled.',
        applied: 'Applied {count} changes to the map. Keep them, or undo.',
        nothing_accepted: 'Nothing is ticked, so nothing has been applied.',
        blocked: 'The changes cannot be applied together.',
        selection_refused:
            'That selection cannot be applied: {reason}. Your previous preview is unchanged.',
        forbidden: 'You cannot change this map.',
        unknown: 'Something went wrong.',
    },
};

/** `{key}` placeholders replaced from `values`; unknown keys stay as they are. */
export function format(
    template: string,
    values: Record<string, string | number | null | undefined>,
): string {
    return template.replace(/\{([a-z_]+)\}/g, (match, key: string) => {
        const value = values[key];
        return value === undefined || value === null ? match : String(value);
    });
}

function mergeRecord<T extends Record<string, string>>(
    base: T,
    override: Partial<T> | undefined,
): T {
    return override ? { ...base, ...override } : base;
}

export type MapEditorAiStringsOverride = {
    [K in keyof MapEditorAiStrings]?: MapEditorAiStrings[K] extends string
        ? string
        : Partial<MapEditorAiStrings[K]>;
};

/** The defaults with the host's overrides laid over them, one level deep. */
export function resolveAiStrings(
    override: MapEditorAiStringsOverride | null | undefined,
): MapEditorAiStrings {
    if (!override) return DEFAULT_AI_STRINGS;
    const base = DEFAULT_AI_STRINGS;
    return {
        ...base,
        ...(override as Partial<MapEditorAiStrings>),
        reasons: mergeRecord(base.reasons, override.reasons),
        categories: mergeRecord(base.categories, override.categories),
        kinds: mergeRecord(base.kinds, override.kinds),
        describe: mergeRecord(base.describe, override.describe),
        outcomes: mergeRecord(base.outcomes, override.outcomes),
        states: mergeRecord(base.states, override.states),
    };
}
