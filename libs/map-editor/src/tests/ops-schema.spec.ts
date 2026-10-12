import { OP_KINDS, targetsOf } from '../lib/ops';
import {
    opKindsInSchema,
    OPS_SCHEMA,
    schemaFieldsFor,
} from '../lib/ops-schema';

describe('ops-schema.json', () => {
    it('lists exactly the op kinds of the TypeScript union, in order', () => {
        expect(opKindsInSchema()).toEqual([...OP_KINDS]);
    });

    it('is in the OpenAI strict dialect', () => {
        expect(OPS_SCHEMA.additionalProperties).toBe(false);
        expect(OPS_SCHEMA.required).toEqual([
            'schema_version',
            'summary',
            'ops',
            'questions',
        ]);
        expect(OPS_SCHEMA.properties.schema_version.enum).toEqual([1]);
        for (const variant of OPS_SCHEMA.properties.ops.items.anyOf) {
            expect(variant.additionalProperties).toBe(false);
            expect(variant.required).toEqual(Object.keys(variant.properties));
            expect(variant.required).toContain('why');
        }
        for (const def of Object.values(OPS_SCHEMA.$defs)) {
            expect(def.required).toEqual(Object.keys(def.properties));
        }
        expect(Object.keys(OPS_SCHEMA.$defs)).toEqual(['target', 'name_value']);
    });

    it('leaves the server bookkeeping out of every variant', () => {
        for (const variant of OPS_SCHEMA.properties.ops.items.anyOf) {
            expect(variant.properties).not.toHaveProperty('id');
            expect(variant.properties).not.toHaveProperty('server_issue');
        }
    });

    it('carries the fields each op needs', () => {
        expect(schemaFieldsFor('set_attr')).toEqual([
            'op',
            'why',
            'target',
            'name',
            'value',
        ]);
        expect(schemaFieldsFor('transform')).toEqual([
            'op',
            'why',
            'target',
            'targets',
            'translate',
            'scale',
            'rotate',
            'origin',
        ]);
        expect(schemaFieldsFor('insert_shape')).toEqual([
            'op',
            'why',
            'parent',
            'after',
            'kind',
            'attrs',
            'new_id',
            'text',
        ]);
        expect(schemaFieldsFor('bogus')).toEqual([]);
    });

    it('collects targets from single and multi-target ops', () => {
        expect(
            targetsOf({
                op: 'delete',
                why: '',
                target: { a: 'e1' },
                targets: [{ a: 'e2' }],
            }),
        ).toEqual([{ a: 'e1' }, { a: 'e2' }]);
        expect(targetsOf({ op: 'ask', why: '', question: '?' })).toEqual([]);
    });
});
