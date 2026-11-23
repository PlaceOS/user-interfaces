import { checkRequest, type Schema } from '@placeos/ts-client';

type SchemaNode = Schema<unknown>['node'];

/** Upper bound for the depth of a schema. The schemas of the client are less deep. */
const DEPTH_MAX = 32;

/** Marks a value that does not fit a node, so that the caller leaves it out */
const SKIP: unique symbol = Symbol('skip');

/**
 * The request body for `schema` from app data, such as the JSON of a
 * `Booking` or `CalendarEvent` class. The client rejects a body with a field
 * that the schema does not have, while the server ignored these fields in
 * 6.x. This keeps the fields of the schema and removes the others:
 *
 * - Object fields that the schema does not have are removed, also in nested
 *   objects. `undefined`, and `null` for a field that is not nullable, are
 *   removed too, so the server uses its default.
 * - A JSON field gets a plain JSON copy, as class instances are not JSON.
 * - An integer field accepts a string of digits, such as a booking id.
 * - A literal field accepts a different case, such as `PRIVATE` for `private`.
 * - A union value that fits one of its branches stays unchanged. Else the
 *   value is fitted to each branch, and the first result that fits its
 *   branch is used. When no result fits, the result for the first branch is
 *   used, so the client rejects it with the path of the field.
 *
 * Other values that do not match stay unchanged, so the client rejects them
 * with the path of the field.
 * @param schema Request body schema of the operation, such as `Booking`
 * @param value App data to send
 */
export function requestBody<I>(schema: Schema<unknown, I>, value: unknown): I {
    const body = fit(schema.node, value, 0);
    // `fit` built the body from the nodes of `schema`, so it has the shape of
    // `I`. The client checks it again before it sends the request.
    return (body === SKIP ? {} : body) as I;
}

function fit(node: SchemaNode, value: unknown, depth: number): unknown {
    if (depth > DEPTH_MAX) throw new Error('Request schema is too deep');
    if (value === undefined) return SKIP;
    switch (node.kind) {
        case 'nullable':
            return value === null ? null : fit(node.inner, value, depth + 1);
        case 'json':
            return JSON.parse(JSON.stringify(value));
        case 'integer':
            if (typeof value === 'string' && /^-?\d+$/.test(value)) {
                return Number(value);
            }
            return value === null ? SKIP : value;
        case 'literal':
            if (typeof value === 'string' && !node.values.has(value)) {
                const lower = value.toLowerCase();
                if (node.values.has(lower)) return lower;
            }
            return value === null ? SKIP : value;
        case 'array':
            if (!Array.isArray(value)) return value === null ? SKIP : value;
            return value
                .map((item) => fit(node.items, item, depth + 1))
                .filter((item) => item !== SKIP);
        case 'record':
            if (!isRecord(value)) return value === null ? SKIP : value;
            return fitEntries(
                Object.keys(value),
                value,
                () => node.values,
                depth,
            );
        case 'object':
            if (!isRecord(value)) return value === null ? SKIP : value;
            return fitEntries(
                node.fields.map((_) => _.key),
                value,
                (key) => node.fields.find((_) => _.key === key).node,
                depth,
            );
        case 'union': {
            // A value that fits a branch already stays as it is. Fitting it
            // could match an earlier branch and drop fields of its own.
            const fits = node.variants.some(
                (variant) => checkRequest({ node: variant }, value).ok,
            );
            if (fits) return value;
            const options = node.variants.map((variant) =>
                fit(variant, value, depth + 1),
            );
            const match = options.find(
                (option, index) =>
                    option !== SKIP &&
                    checkRequest({ node: node.variants[index] }, option).ok,
            );
            return match ?? options[0];
        }
        default:
            return value === null ? SKIP : value;
    }
}

/** The fitted fields of `value` for `keys`, without the ones to skip */
function fitEntries(
    keys: readonly string[],
    value: Readonly<Record<string, unknown>>,
    nodeFor: (key: string) => SchemaNode,
    depth: number,
): Record<string, unknown> {
    const output: Record<string, unknown> = {};
    for (const key of keys) {
        if (!Object.hasOwn(value, key)) continue;
        const item = fit(nodeFor(key), value[key], depth + 1);
        if (item !== SKIP) output[key] = item;
    }
    return output;
}

function isRecord(value: unknown): value is Readonly<Record<string, unknown>> {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
}
