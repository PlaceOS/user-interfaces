import schema from './ops-schema.json';

export interface OpsJsonSchema {
    title: string;
    properties: {
        ops: { items: { anyOf: OpVariantSchema[] } };
        schema_version: { enum: number[] };
    };
    required: string[];
    additionalProperties: boolean;
    $defs: Record<
        string,
        { properties: Record<string, unknown>; required: string[] }
    >;
}

export interface OpVariantSchema {
    properties: Record<string, unknown> & { op: { enum: string[] } };
    required: string[];
    additionalProperties: boolean;
}

/**
 * The proposal schema in the OpenAI strict dialect: one closed variant per
 * op, every property required, optional fields nullable. The server embeds
 * a verbatim copy of this file and sends it to the vendor as is; the ops it
 * stores back carry `id` and `server_issue` on top of it.
 */
export const OPS_SCHEMA = schema as unknown as OpsJsonSchema;

/** Op kinds the schema accepts, in declaration order. */
export function opKindsInSchema(
    ops_schema: OpsJsonSchema = OPS_SCHEMA,
): string[] {
    return ops_schema.properties.ops.items.anyOf.map(
        (variant) => variant.properties.op.enum[0],
    );
}

/** Field names of one op variant, `op` and `why` included. */
export function schemaFieldsFor(
    kind: string,
    ops_schema: OpsJsonSchema = OPS_SCHEMA,
): string[] {
    const variant = ops_schema.properties.ops.items.anyOf.find(
        (candidate) => candidate.properties.op.enum[0] === kind,
    );
    return variant ? Object.keys(variant.properties) : [];
}
