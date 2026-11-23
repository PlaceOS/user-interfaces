import type {
    SignageTemplate,
    SignageTemplateMapping,
    SignageTemplateMappingInput,
} from '@placeos/ts-client';
import { signageTemplate, signageTemplateMapping } from './signage-models';

export type SignageTemplateMappingTarget =
    | { control_system_id: string; zone_id?: never }
    | { control_system_id?: never; zone_id: string };

export type SignageTemplateMappingQuery =
    | SignageTemplateMappingTarget
    | {
          control_system_id?: never;
          zone_id?: never;
          template_id: string;
      };

/** A template mapping with the template preview that the server returns */
export interface HydratedSignageTemplateMapping extends SignageTemplateMapping {
    readonly template_details: SignageTemplate;
}

/**
 * Keep the template preview returned with a template mapping. The preview
 * gets the ID of the mapped template when the response has none.
 */
export function hydratedTemplateMapping(
    data: SignageTemplateMappingInput = {},
): HydratedSignageTemplateMapping {
    const mapping = signageTemplateMapping(data);
    const details = mapping.template_details;
    return {
        ...mapping,
        template_details: signageTemplate({
            ...details,
            id: details?.id || mapping.template_id,
        }),
    };
}
