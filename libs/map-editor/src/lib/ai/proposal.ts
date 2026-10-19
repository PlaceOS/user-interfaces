import { applyOps } from '../apply';
import { idsIn } from '../ids';
import { MapDocument, Target } from '../map-document';
import { MapOp, OpKind, targetsOf } from '../ops';
import { elementsMatching } from '../style-resolution';
import {
    validateProposal,
    ValidationContext,
    ValidationIssue,
    ValidationResult,
} from '../validate';
import { describeOp, opCategory, OpCategory, opGlyph } from './describe';
import { MapEditorSessionLike } from './session-contract';
import { format, MapEditorAiStrings } from './strings';
import { MapAIJob, MapAIResolveDecision, MapAIResolveRequest } from './types';

/** Rows collapse into groups by kind above this many. */
export const GROUP_THRESHOLD = 20;
const MAX_RULE_ANCHORS = 200;

/** `op-N`, N the op's 1-based position. */
export function opId(index: number): string {
    return `op-${index + 1}`;
}

/** The job's ops with their ids and the server's reasons written onto them. */
export function opsWithServerIssues(
    job: Pick<MapAIJob, 'ops' | 'server_issues'>,
): MapOp[] {
    return (job.ops || []).map((op, index) => {
        if (typeof op !== 'object' || op === null || Array.isArray(op))
            return op;
        const id = opId(index);
        const reason = job.server_issues?.[id];
        return {
            ...op,
            id,
            ...(reason ? { server_issue: reason } : {}),
        } as MapOp;
    });
}

/** Every element an op refers to: its targets plus parent, before and after references. */
export function referencedTargets(op: MapOp): Target[] {
    const targets = [...targetsOf(op)];
    if (op.op === 'insert_shape') {
        if (op.parent) targets.push(op.parent);
        if (op.after) targets.push(op.after);
    } else if (op.op === 'reorder') {
        if (op.before) targets.push(op.before);
        if (op.after) targets.push(op.after);
    }
    return targets;
}

/**
 * For each op, the indices of earlier ops it depends on: an op whose target
 * is an element an earlier op creates (by anchor or by new id) needs that op
 * applied first. Connected ID renames are accepted or rejected together.
 */
export function deriveDependencies(
    doc: MapDocument,
    ops: readonly MapOp[],
): number[][] {
    const trial = doc.clone();
    const original_ids = idsIn(doc.root);
    const original_anchors = new Set(
        doc.elements().map((element) => doc.anchorOf(element)),
    );
    const created_by_anchor = new Map<string, number>();
    const created_by_id = new Map<string, number>();
    const result: number[][] = [];
    ops.forEach((op, index) => {
        const depends = new Set<number>();
        if (typeof op === 'object' && op !== null) {
            for (const target of referencedTargets(op)) {
                if (!target) continue;
                if (target.a && !original_anchors.has(target.a)) {
                    const creator = created_by_anchor.get(target.a);
                    if (creator !== undefined && creator < index)
                        depends.add(creator);
                }
                if (target.id && !original_ids.has(target.id)) {
                    const creator = created_by_id.get(target.id);
                    if (creator !== undefined && creator < index)
                        depends.add(creator);
                }
            }
        }
        result.push([...depends].sort((a, b) => a - b));
        let applied;
        try {
            applied = applyOps(trial, [op], { geometry: trial.geometry });
        } catch {
            return;
        }
        for (const step of applied.applied) {
            for (const anchor of step.created) {
                created_by_anchor.set(anchor, index);
                const id = trial.byAnchor(anchor)?.getAttribute('id');
                if (id && !original_ids.has(id)) created_by_id.set(id, index);
            }
            if (
                step.op.op === 'set_id' &&
                step.op.new_id &&
                !original_ids.has(step.op.new_id)
            ) {
                created_by_id.set(step.op.new_id, index);
            }
        }
    });
    const identity_changes = new Map<string, number[]>();
    ops.forEach((op, index) => {
        if (!op || typeof op !== 'object') return;
        const keys: string[] = [];
        if (op.op === 'set_id' && op.target) {
            const resolution = doc.resolve(op.target);
            const old_id = resolution.ok
                ? resolution.element.getAttribute('id')
                : op.target.id;
            const anchor = resolution.ok
                ? doc.anchorOf(resolution.element)
                : op.target.a;
            if (anchor) keys.push(`anchor:${anchor}`);
            if (old_id) keys.push(`id:${old_id}`);
        }
        if ('new_id' in op && op.new_id) keys.push(`id:${op.new_id}`);
        for (const key of new Set(keys)) {
            const related = identity_changes.get(key) || [];
            for (const other of related) {
                if (op.op !== 'set_id' && ops[other].op !== 'set_id') continue;
                if (!result[index].includes(other)) result[index].push(other);
                if (!result[other].includes(index)) result[other].push(index);
            }
            related.push(index);
            identity_changes.set(key, related);
        }
    });
    const expansion = ops.findIndex(
        (op) => op.op === 'set_attr' && op.name === 'viewBox',
    );
    if (expansion >= 0) {
        const related = ops
            .map((op, index) =>
                op.op !== 'ask' && op.op !== 'no_change' ? index : -1,
            )
            .filter((index) => index >= 0);
        for (const index of related)
            for (const other of related)
                if (index !== other && !result[index].includes(other))
                    result[index].push(other);
    }
    return result.map((needs) => needs.sort((a, b) => a - b));
}

export interface ProposalRow {
    index: number;
    /** `op-N`, what resolve reports. */
    id: string;
    op: MapOp;
    kind: OpKind;
    category: OpCategory;
    glyph: string;
    kind_word: string;
    text: string;
    /** Anchors of the elements the op touches in the live document. */
    anchors: string[];
    issues: ValidationIssue[];
    actionable: boolean;
    locked: boolean;
    checked: boolean;
    /** Applied in the trial, or on the map once previewed. */
    applied: boolean;
    affected?: number;
    note?: string;
    server_issue: string | null;
    depends_on: number[];
    dependents: number[];
}

export interface ProposalGroup {
    key: string;
    label: string;
    category: OpCategory;
    kind: OpKind;
    indices: number[];
    checked: 'all' | 'some' | 'none';
    locked: boolean;
}

export type ProposalVerdict =
    | 'empty'
    | 'questions'
    | 'ready'
    | 'partial'
    | 'blocked'
    | 'nothing_accepted';

export interface Proposal {
    job: MapAIJob;
    /** The job's ops with ids and server reasons on them. */
    ops: MapOp[];
    summary: string;
    questions: string[];
    rows: ProposalRow[];
    batch_issues: ValidationIssue[];
    blocking: boolean;
    element_delta: number;
    byte_delta: number;
    /** The map as it was when the proposal arrived, for the Before thumbnail. */
    before_markup: string | null;
    /** The map with the accepted set applied, for the After thumbnail. */
    trial_markup: string | null;
    verdict: ProposalVerdict;
    /** Indices of the rows that are ticked. */
    accepted: number[];
    /** Actionable rows that cannot be applied. */
    invalid_count: number;
    dependencies: number[][];
    /** Rows unticked only because a row they need was unticked; ticking that row again restores them. */
    held?: number[];
    groups: ProposalGroup[] | null;
}

export interface BuildProposalOptions {
    /** The person's ticks; the validator's defaults when absent. */
    accepted?: ReadonlySet<number>;
    /** Protected ids the person has unlocked. */
    unlocked?: Iterable<string>;
    dependencies?: number[][];
    held?: Iterable<number>;
    /** Serialise the document and the trial for the thumbnails. Default true. */
    trial_markup?: boolean;
}

function sameSet(a: ReadonlySet<number>, b: ReadonlySet<number>): boolean {
    if (a.size !== b.size) return false;
    for (const value of a) if (!b.has(value)) return false;
    return true;
}

/** Drops ticks whose dependencies are unticked, to a fixpoint. */
export function cascadeDependencies(
    accepted: ReadonlySet<number>,
    dependencies: readonly (readonly number[])[],
): Set<number> {
    const next = new Set(accepted);
    let changed = true;
    while (changed) {
        changed = false;
        for (const index of [...next]) {
            const needs = dependencies[index] || [];
            if (needs.some((dependency) => !next.has(dependency))) {
                next.delete(index);
                changed = true;
            }
        }
    }
    return next;
}

function resolvedAnchors(op: MapOp, doc: MapDocument): string[] {
    const anchors = new Set<string>();
    if (op.op === 'set_style_rule') {
        try {
            for (const element of elementsMatching(doc.root, op.selector).slice(
                0,
                MAX_RULE_ANCHORS,
            )) {
                const anchor = doc.anchorOf(element);
                if (anchor) anchors.add(anchor);
            }
        } catch {
            return [];
        }
        return [...anchors];
    }
    const targets =
        op.op === 'insert_shape' ? targetsOf(op) : referencedTargets(op);
    for (const target of targets) {
        const resolution = doc.resolve(target);
        if (resolution.ok) {
            const anchor = doc.anchorOf(resolution.element);
            if (anchor) anchors.add(anchor);
        }
    }
    return [...anchors];
}

export function verdictOf(
    rows: readonly Pick<ProposalRow, 'actionable' | 'op'>[],
    accepted: ReadonlySet<number>,
    blocking: boolean,
    questions: readonly string[],
): ProposalVerdict {
    const actionable = rows.filter((row) => row.actionable).length;
    if (!actionable) {
        return questions.length || rows.some((row) => row.op.op === 'ask')
            ? 'questions'
            : 'empty';
    }
    if (blocking) return 'blocked';
    if (!accepted.size) return 'nothing_accepted';
    return accepted.size < actionable ? 'partial' : 'ready';
}

/** Rows by category and kind, in order of first appearance. */
export function groupRows(
    rows: readonly ProposalRow[],
    strings: MapEditorAiStrings,
): ProposalGroup[] {
    const groups = new Map<string, ProposalGroup>();
    for (const row of rows) {
        const key = `${row.category}:${row.kind}`;
        let group = groups.get(key);
        if (!group) {
            group = {
                key,
                label: '',
                category: row.category,
                kind: row.kind,
                indices: [],
                checked: 'none',
                locked: true,
            };
            groups.set(key, group);
        }
        group.indices.push(row.index);
    }
    return [...groups.values()].map((group) => {
        const members = group.indices.map((index) => rows[index]);
        const tickable = members.filter((row) => row.actionable && !row.locked);
        const ticked = tickable.filter((row) => row.checked).length;
        return {
            ...group,
            label: format(strings.group_label, {
                count: group.indices.length,
                kind: strings.kinds[group.kind] ?? group.kind,
            }),
            locked: tickable.length === 0,
            checked:
                ticked === 0
                    ? 'none'
                    : ticked === tickable.length
                      ? 'all'
                      : 'some',
        };
    });
}

/** The parts of a session a proposal is built and validated against. */
export type ProposalBase = Pick<
    MapEditorSessionLike,
    'doc' | 'index' | 'protected' | 'render_check' | 'geometry'
>;

/**
 * The review model for a finished job: one row per op with its words, the
 * validator's verdict and the dependency links, plus the batch result for
 * the ticked set. Validates once with the validator's defaults, then again
 * when the ticked set differs from what the first trial applied.
 */
export async function buildProposal(
    job: MapAIJob,
    session: ProposalBase,
    strings: MapEditorAiStrings,
    options: BuildProposalOptions = {},
): Promise<Proposal> {
    const ops = opsWithServerIssues(job);
    const index = session.index();
    const describe_context = { doc: session.doc, index, strings };
    const dependencies =
        options.dependencies ?? deriveDependencies(session.doc, ops);
    const base: ValidationContext = {
        protected: session.protected,
        unlocked: options.unlocked,
        render_check: session.render_check,
        geometry: session.geometry,
    };
    const validate = (accepted?: ReadonlySet<number>) =>
        validateProposal(session.doc, ops, { ...base, accepted });

    const complete_validation = await validate();
    let validation: ValidationResult = complete_validation;
    const tickable = (i: number) =>
        !!validation.ops[i] &&
        validation.ops[i].actionable &&
        !validation.ops[i].locked;
    let accepted: Set<number>;
    if (options.accepted) {
        accepted = new Set([...options.accepted].filter(tickable));
    } else {
        accepted = new Set(
            validation.ops
                .filter((op) => op.checked_by_default)
                .map((op) => op.index),
        );
    }
    accepted = cascadeDependencies(accepted, dependencies);
    const applied_in_trial = new Set(
        validation.ops.filter((op) => op.applied).map((op) => op.index),
    );
    if (!sameSet(accepted, applied_in_trial))
        validation = await validate(accepted);

    const dependents = dependencies.map(() => [] as number[]);
    dependencies.forEach((needs, i) => {
        for (const need of needs) dependents[need]?.push(i);
    });

    const rows: ProposalRow[] = validation.ops.map((trial_result, i) => {
        const result = accepted.has(i)
            ? trial_result
            : complete_validation.ops[i];
        const op = ops[i];
        const category = opCategory(op);
        const kind: OpKind = op.op;
        return {
            index: i,
            id: typeof op.id === 'string' && op.id ? op.id : opId(i),
            op,
            kind,
            category,
            glyph: opGlyph(category),
            kind_word: strings.kinds[kind] ?? String(kind),
            text: describeOp(op, describe_context),
            anchors: resolvedAnchors(op, session.doc),
            issues: result.issues,
            actionable: result.actionable,
            locked: result.locked,
            checked: accepted.has(i),
            applied: !validation.blocking && trial_result.applied,
            ...(result.affected !== undefined
                ? { affected: result.affected }
                : {}),
            ...(result.note ? { note: result.note } : {}),
            server_issue:
                typeof op.server_issue === 'string' && op.server_issue
                    ? op.server_issue
                    : null,
            depends_on: dependencies[i] || [],
            dependents: dependents[i] || [],
        };
    });

    const questions = [
        ...(job.questions || []).filter((q) => typeof q === 'string' && q),
        ...ops
            .filter((op) => op.op === 'ask')
            .map((op) => (op.op === 'ask' ? op.question : ''))
            .filter((q) => !!q),
    ];
    const verdict = verdictOf(rows, accepted, validation.blocking, questions);
    return {
        job,
        ops,
        summary: job.summary || '',
        questions: [...new Set(questions)],
        rows,
        batch_issues: validation.issues,
        blocking: validation.blocking,
        element_delta: validation.element_delta,
        byte_delta: validation.byte_delta,
        before_markup:
            options.trial_markup === false ? null : session.doc.serialise(),
        trial_markup:
            options.trial_markup === false
                ? null
                : validation.trial?.serialise() || null,
        verdict,
        accepted: [...accepted].sort((a, b) => a - b),
        invalid_count: rows.filter((row) => row.actionable && row.locked)
            .length,
        dependencies,
        held: [...new Set(options.held ?? [])]
            .filter((i) => !accepted.has(i))
            .sort((a, b) => a - b),
        groups: rows.length > GROUP_THRESHOLD ? groupRows(rows, strings) : null,
    };
}

export function acceptedSet(proposal: Proposal): Set<number> {
    return new Set(proposal.accepted);
}

/**
 * The ticked set after one row changes. Ticking a row ticks the rows it
 * needs and the held rows whose needs are now all ticked; unticking a row
 * unticks the rows that need it.
 */
export function toggleRow(
    proposal: Proposal,
    index: number,
    checked: boolean,
): Set<number> {
    const next = acceptedSet(proposal);
    const row = proposal.rows[index];
    if (!row || !row.actionable || row.locked) return next;
    if (checked) {
        next.add(index);
        const stack = [...row.depends_on];
        while (stack.length) {
            const need = stack.pop() as number;
            const needed = proposal.rows[need];
            if (!needed || needed.locked || !needed.actionable) continue;
            if (next.has(need)) continue;
            next.add(need);
            stack.push(...needed.depends_on);
        }
        restoreHeld(proposal, next);
    } else {
        next.delete(index);
        const stack = [...row.dependents];
        while (stack.length) {
            const dependent = stack.pop() as number;
            if (!next.has(dependent)) continue;
            next.delete(dependent);
            stack.push(...(proposal.rows[dependent]?.dependents || []));
        }
    }
    return next;
}

function restoreHeld(proposal: Proposal, next: Set<number>): void {
    const held = (proposal.held ?? []).filter((i) => !next.has(i));
    let restored = true;
    while (restored) {
        restored = false;
        for (const index of held) {
            const row = proposal.rows[index];
            if (next.has(index) || !row || row.locked || !row.actionable)
                continue;
            if (!row.depends_on.length) continue;
            if (row.depends_on.every((need) => next.has(need))) {
                next.add(index);
                restored = true;
            }
        }
    }
}

/**
 * The held rows after a change of ticks: rows that went off as a side effect
 * join them, rows that are ticked or were unticked directly leave them.
 */
export function heldAfter(
    proposal: Proposal,
    accepted: ReadonlySet<number>,
    unticked: Iterable<number> = [],
): Set<number> {
    const held = new Set(proposal.held ?? []);
    for (const index of proposal.accepted)
        if (!accepted.has(index)) held.add(index);
    for (const index of unticked) held.delete(index);
    for (const index of [...held]) if (accepted.has(index)) held.delete(index);
    return held;
}

/** The ticked set after a whole group changes, member by member. */
export function toggleGroup(
    proposal: Proposal,
    group: ProposalGroup,
    checked: boolean,
): Set<number> {
    let current = proposal;
    let next = acceptedSet(proposal);
    for (const index of group.indices) {
        next = toggleRow(current, index, checked);
        current = {
            ...current,
            accepted: [...next].sort((a, b) => a - b),
        };
    }
    return next;
}

/** applied when every actionable row went on, partial when some did, rejected when none. */
export function decisionFor(proposal: Proposal): MapAIResolveDecision {
    const actionable = proposal.rows.filter((row) => row.actionable);
    const applied = actionable.filter((row) => row.checked && row.applied);
    if (!applied.length) return 'rejected';
    return applied.length === actionable.length ? 'applied' : 'partial';
}

/** The body of `POST /jobs/:id/resolve`. */
export function resolvePayload(
    proposal: Proposal,
    decision: MapAIResolveDecision,
    reasons: readonly string[] = [],
    saved_upload_id: string | null = null,
): MapAIResolveRequest {
    const actionable = proposal.rows.filter((row) => row.actionable);
    const accepted =
        decision === 'rejected'
            ? []
            : actionable
                  .filter((row) => row.checked && row.applied)
                  .map((row) => row.id);
    const rejected = actionable
        .filter((row) => !accepted.includes(row.id))
        .map((row) => row.id);
    return {
        decision,
        accepted_op_ids: accepted,
        rejected_op_ids: rejected,
        ...(reasons.length ? { reasons: [...reasons] } : {}),
        saved_upload_id,
    };
}
