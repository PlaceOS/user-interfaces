export type ProtectedIdKind =
    | 'desk'
    | 'room'
    | 'area'
    | 'locker'
    | 'parking'
    | 'poi'
    | 'other';

/** A map id that a booking, area, locker, parking or point-of-interest record binds to. */
export interface ProtectedId {
    id: string;
    kind: ProtectedIdKind;
    label: string;
}

/** One host-supplied source of protected ids, by name. */
export type ProtectedIdSource = () => Promise<readonly ProtectedId[]>;

export interface ProtectedIdSourceOutcome {
    source: string;
    ids?: readonly ProtectedId[];
    error?: unknown;
}

/**
 * Ids the editor must not break. `complete` is false when any source failed,
 * in which case the host shows "binding check incomplete" and treats the ids
 * that did load as the protected set.
 */
export class ProtectedIdSet {
    private readonly _ids = new Map<string, ProtectedId>();

    constructor(
        ids: Iterable<ProtectedId> = [],
        public readonly complete = true,
        public readonly failed_sources: readonly string[] = [],
    ) {
        for (const entry of ids) {
            if (!entry.id) continue;
            const existing = this._ids.get(entry.id);
            if (!existing) this._ids.set(entry.id, entry);
            else if (!existing.label && entry.label)
                this._ids.set(entry.id, entry);
        }
    }

    public static empty(): ProtectedIdSet {
        return new ProtectedIdSet();
    }

    public get size(): number {
        return this._ids.size;
    }

    public has(id: string | null | undefined): boolean {
        return !!id && this._ids.has(id);
    }

    public get(id: string): ProtectedId | undefined {
        return this._ids.get(id);
    }

    public ids(): ProtectedId[] {
        return [...this._ids.values()];
    }

    public labelOf(id: string): string {
        const entry = this._ids.get(id);
        return entry?.label || id;
    }
}

/** Merge per-source outcomes; a failed source marks the set incomplete. */
export function mergeProtectedIds(
    outcomes: readonly ProtectedIdSourceOutcome[],
): ProtectedIdSet {
    const ids: ProtectedId[] = [];
    const failed: string[] = [];
    for (const outcome of outcomes) {
        if (outcome.error !== undefined || !outcome.ids)
            failed.push(outcome.source);
        else ids.push(...outcome.ids);
    }
    return new ProtectedIdSet(ids, failed.length === 0, failed);
}

/** Run every source, never rejecting; failures are recorded on the set. */
export async function collectProtectedIds(
    sources: Readonly<Record<string, ProtectedIdSource>>,
): Promise<ProtectedIdSet> {
    const names = Object.keys(sources);
    const settled = await Promise.allSettled(
        names.map((name) => sources[name]()),
    );
    return mergeProtectedIds(
        settled.map((result, i) =>
            result.status === 'fulfilled'
                ? { source: names[i], ids: result.value }
                : {
                      source: names[i],
                      error: result.reason ?? new Error('failed'),
                  },
        ),
    );
}
