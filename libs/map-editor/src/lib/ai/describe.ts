import { MapDocument, Target } from '../map-document';
import { MapIndex, MapIndexEntry } from '../map-index';
import { describeTarget, MapOp, targetsOf } from '../ops';
import { elementsMatching } from '../style-resolution';
import { format, MapEditorAiStrings } from './strings';

export type OpCategory = 'added' | 'changed' | 'removed' | 'question' | 'none';

export function opCategory(op: MapOp): OpCategory {
    switch (op.op) {
        case 'insert_shape':
        case 'duplicate':
            return 'added';
        case 'delete':
            return 'removed';
        case 'ask':
            return 'question';
        case 'no_change':
            return 'none';
        default:
            return 'changed';
    }
}

const GLYPHS: Record<OpCategory, string> = {
    added: '+',
    changed: '~',
    removed: '−',
    question: '?',
    none: '·',
};

export function opGlyph(category: OpCategory): string {
    return GLYPHS[category];
}

export interface DescribeContext {
    doc: MapDocument;
    index: MapIndex;
    strings: MapEditorAiStrings;
}

export function entryFor(
    target: Target | null | undefined,
    index: MapIndex,
): MapIndexEntry | undefined {
    if (!target) return undefined;
    if (target.a) {
        const by_anchor = index.by_anchor.get(target.a);
        if (by_anchor) return by_anchor;
    }
    if (target.id) {
        return index.entries.find((entry) => entry.id === target.id);
    }
    return undefined;
}

/** The element as the person knows it: `id (label)`, the id, the label, or `tag anchor`. */
export function whoOf(
    target: Target | null | undefined,
    context: DescribeContext,
): string {
    const entry = entryFor(target, context.index);
    const id = entry?.id ?? target?.id ?? null;
    const label = entry?.label ?? null;
    if (id && label && label !== id) return `${id} (${label})`;
    if (id) return id;
    if (label) return label;
    if (entry) return `${entry.tag} ${entry.anchor}`;
    return describeTarget(target);
}

function manyOf(targets: readonly Target[], context: DescribeContext): string {
    if (targets.length === 1) return whoOf(targets[0], context);
    const template =
        targets.length === 1
            ? context.strings.describe.element
            : context.strings.describe.elements;
    return format(template, { count: targets.length });
}

function number(value: number): string {
    return Number.isInteger(value)
        ? String(value)
        : String(Math.round(value * 100) / 100);
}

/** Elements a selector reaches in the live document; 0 when it is not valid. */
export function affectedCount(doc: MapDocument, selector: string): number {
    try {
        return elementsMatching(doc.root, selector).length;
    } catch {
        return 0;
    }
}

/** One line of plain words for the review row. */
export function describeOp(op: MapOp, context: DescribeContext): string {
    const { strings } = context;
    const t = strings.describe;
    switch (op.op) {
        case 'set_attr': {
            const who = whoOf(op.target, context);
            return op.value === null || op.value === undefined
                ? format(t.remove_attr, { name: op.name, who })
                : format(t.set_attr, { name: op.name, who, value: op.value });
        }
        case 'set_style_rule': {
            const current = context.doc
                .styleRules()
                .find((rule) => rule.selectors.includes(op.selector));
            const changes = (op.declarations || [])
                .map((declaration) =>
                    format(t.style_declaration, {
                        name: declaration.name,
                        from: current?.declarations[declaration.name] ?? '-',
                        to: declaration.value,
                    }),
                )
                .join(', ');
            return format(t.set_style_rule, {
                selector: op.selector,
                changes,
                affects: format(strings.affects, {
                    count: affectedCount(context.doc, op.selector),
                }),
            });
        }
        case 'set_text':
            return format(t.set_text, {
                who: whoOf(op.target, context),
                text: op.text,
            });
        case 'transform': {
            const who = manyOf(targetsOf(op), context);
            const moves = !!op.translate;
            const scales = !!op.scale;
            const rotates = typeof op.rotate === 'number' && op.rotate !== 0;
            if (moves && !scales && !rotates && op.translate) {
                return format(t.move, {
                    who,
                    x: number(op.translate[0]),
                    y: number(op.translate[1]),
                });
            }
            if (scales && !moves && !rotates && op.scale) {
                return format(t.scale, {
                    who,
                    x: number(op.scale[0]),
                    y: number(op.scale[1]),
                });
            }
            if (rotates && !moves && !scales) {
                return format(t.rotate, {
                    who,
                    degrees: number(op.rotate as number),
                });
            }
            return format(t.transform_many, { who });
        }
        case 'delete': {
            const targets = targetsOf(op);
            return format(targets.length === 1 ? t.delete : t.delete_many, {
                who: manyOf(targets, context),
            });
        }
        case 'duplicate': {
            const who = whoOf(op.target, context);
            const count = op.count ?? 1;
            if (count > 1) {
                return format(t.duplicate_many, {
                    who,
                    count,
                    pattern: op.id_pattern || op.new_id || '-',
                });
            }
            return op.new_id
                ? format(t.duplicate, { who, new_id: op.new_id })
                : format(t.duplicate_unnamed, { who });
        }
        case 'insert_shape': {
            const parent = op.parent ? whoOf(op.parent, context) : t.map_root;
            return op.new_id
                ? format(t.insert_shape, {
                      kind: op.kind,
                      new_id: op.new_id,
                      parent,
                  })
                : format(t.insert_shape_unnamed, { kind: op.kind, parent });
        }
        case 'set_id': {
            const who = whoOf(op.target, context);
            return op.new_id
                ? format(t.set_id, { who, new_id: op.new_id })
                : format(t.remove_id, { who });
        }
        case 'reorder': {
            const who = whoOf(op.target, context);
            if (op.before)
                return format(t.reorder_before, {
                    who,
                    other: whoOf(op.before, context),
                });
            if (op.after)
                return format(t.reorder_after, {
                    who,
                    other: whoOf(op.after, context),
                });
            return format(
                op.position === 'first' ? t.reorder_first : t.reorder_last,
                { who },
            );
        }
        case 'group': {
            const who = manyOf(op.targets || [], context);
            return op.new_id
                ? format(t.group, { who, new_id: op.new_id })
                : format(t.group_unnamed, { who });
        }
        case 'ungroup':
            return format(t.ungroup, { who: whoOf(op.target, context) });
        case 'replace_element':
            return format(t.replace_element, {
                who: whoOf(op.target, context),
            });
        case 'replace_path':
            return format(t.replace_path, { who: whoOf(op.target, context) });
        case 'no_change':
            return format(t.no_change, { reason: op.reason });
        case 'ask':
            return format(t.ask, { question: op.question });
        default:
            return describeTarget(null);
    }
}
