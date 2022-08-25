
import { generateMockBuilding } from './building.utilities';

let ORG_COUNT = 0;

export function generateMockOrganisation(): Record<string, any> {
    return {
        id: `zone_org-${ORG_COUNT++}`,
        name: `Organisation ${ORG_COUNT}`,
        buildings: Array(3).fill(0).map(i => generateMockBuilding()),
        settings: {
            test: {
                nested: {
                    org: true
                }
            }
        }
    };
}
