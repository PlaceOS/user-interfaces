import { ShapeKind } from './constants';
import { Target } from './map-document';
import { Point } from './matrix';

export type { Target };

export const OP_KINDS = [
    'set_attr',
    'set_style_rule',
    'set_text',
    'transform',
    'delete',
    'duplicate',
    'insert_shape',
    'set_id',
    'reorder',
    'group',
    'ungroup',
    'replace_element',
    'replace_path',
    'no_change',
    'ask',
] as const;

export type OpKind = (typeof OP_KINDS)[number];

export interface NameValue {
    name: string;
    value: string;
}

interface BaseOp {
    op: OpKind;
    /** One sentence shown in the review row. */
    why: string;
}

export interface SetAttrOp extends BaseOp {
    op: 'set_attr';
    target: Target;
    name: string;
    value: string | null;
}

export interface SetStyleRuleOp extends BaseOp {
    op: 'set_style_rule';
    selector: string;
    declarations: NameValue[];
}

export interface SetTextOp extends BaseOp {
    op: 'set_text';
    target: Target;
    text: string;
}

export interface TransformOp extends BaseOp {
    op: 'transform';
    target?: Target | null;
    targets?: Target[] | null;
    translate?: Point | null;
    scale?: Point | null;
    rotate?: number | null;
    origin?: Point | null;
}

export interface DeleteOp extends BaseOp {
    op: 'delete';
    target?: Target | null;
    targets?: Target[] | null;
}

export interface DuplicateOp extends BaseOp {
    op: 'duplicate';
    target: Target;
    new_id?: string | null;
    translate: Point;
    count?: number | null;
    id_pattern?: string | null;
}

export interface InsertShapeOp extends BaseOp {
    op: 'insert_shape';
    parent?: Target | null;
    after?: Target | null;
    kind: ShapeKind;
    attrs: NameValue[];
    new_id?: string | null;
    text?: string | null;
}

export interface SetIdOp extends BaseOp {
    op: 'set_id';
    target: Target;
    new_id: string | null;
}

export interface ReorderOp extends BaseOp {
    op: 'reorder';
    target: Target;
    before?: Target | null;
    after?: Target | null;
    position?: 'first' | 'last' | null;
}

export interface GroupOp extends BaseOp {
    op: 'group';
    targets: Target[];
    new_id?: string | null;
}

export interface UngroupOp extends BaseOp {
    op: 'ungroup';
    target: Target;
}

export interface ReplaceElementOp extends BaseOp {
    op: 'replace_element';
    target: Target;
    markup: string;
}

export interface ReplacePathOp extends BaseOp {
    op: 'replace_path';
    target: Target;
    d: string;
}

export interface NoChangeOp extends BaseOp {
    op: 'no_change';
    reason: string;
}

export interface AskOp extends BaseOp {
    op: 'ask';
    question: string;
}

export type MapOp =
    | SetAttrOp
    | SetStyleRuleOp
    | SetTextOp
    | TransformOp
    | DeleteOp
    | DuplicateOp
    | InsertShapeOp
    | SetIdOp
    | ReorderOp
    | GroupOp
    | UngroupOp
    | ReplaceElementOp
    | ReplacePathOp
    | NoChangeOp
    | AskOp;

export const PROPOSAL_SCHEMA_VERSION = 1;

/** What the model returns and what the server stores in `result`. */
export interface ProposalEnvelope {
    schema_version: typeof PROPOSAL_SCHEMA_VERSION;
    summary: string;
    ops: MapOp[];
    questions: string[];
}

export function isOpKind(value: unknown): value is OpKind {
    return (
        typeof value === 'string' &&
        (OP_KINDS as readonly string[]).includes(value)
    );
}

/** Every target an op names, in order; empty for ops without targets. */
export function targetsOf(op: MapOp): Target[] {
    switch (op.op) {
        case 'set_attr':
        case 'set_text':
        case 'duplicate':
        case 'set_id':
        case 'reorder':
        case 'ungroup':
        case 'replace_element':
        case 'replace_path':
            return [op.target];
        case 'transform':
        case 'delete':
            return [...(op.target ? [op.target] : []), ...(op.targets || [])];
        case 'group':
            return [...op.targets];
        default:
            return [];
    }
}

export function describeTarget(target: Target | null | undefined): string {
    if (!target) return '(no target)';
    if (target.id && target.a) return `${target.id} (${target.a})`;
    return target.id || target.a || '(no target)';
}
