import {
    SignageMedia,
    SignageTemplate,
    SignageTemplateMapping,
} from '@placeos/ts-client';

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

interface HydratedSignageTemplateData extends Partial<SignageTemplate> {
    background_media?: Partial<SignageMedia> | null;
}

export class HydratedSignageTemplate extends SignageTemplate {
    public readonly background_media: SignageMedia | null;

    constructor(data: HydratedSignageTemplateData = {}) {
        super(data);
        this.background_media = data.background_media
            ? new SignageMedia(data.background_media)
            : null;
    }
}

interface HydratedSignageTemplateMappingData extends Partial<SignageTemplateMapping> {
    template_details?: HydratedSignageTemplateData;
}

/** Keeps the template preview returned with a template mapping. */
export class HydratedSignageTemplateMapping extends SignageTemplateMapping {
    public readonly template_details: HydratedSignageTemplate;

    constructor(data: HydratedSignageTemplateMappingData = {}) {
        super(data);
        this.template_details = new HydratedSignageTemplate({
            id: data.template_id,
            ...data.template_details,
        });
    }
}
