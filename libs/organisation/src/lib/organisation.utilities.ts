import { getModule } from '@placeos/ts-client';
import { generateMockBuilding } from './building.utilities';

let ORG_COUNT = 0;

export function generateMockOrganisation(): Record<string, any> {
    return {
        id: `zone_org-${ORG_COUNT++}`,
        name: `Organisation ${ORG_COUNT}`,
        buildings: Array(3)
            .fill(0)
            .map((i) => generateMockBuilding()),
        settings: {
            test: {
                nested: {
                    org: true,
                },
            },
        },
    };
}

export type ModuleBindingMetadata =
    | string
    | { system_id: string; module?: string };

export function moduleFromMetadata(
    value?: ModuleBindingMetadata,
    default_module?: string
) {
    if (!value) return null;
    return value instanceof Object
        ? getModule(value.system_id, value.module || default_module)
        : getModule(value, default_module);
}
