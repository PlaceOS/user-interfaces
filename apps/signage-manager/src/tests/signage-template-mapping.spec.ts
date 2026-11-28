import { hydratedTemplateMapping } from '../app/signage-template-mapping';
import { mediaUrl } from '../app/signage-url.util';

describe('HydratedSignageTemplateMapping', () => {
    it('keeps the hydrated template and background media from the response', () => {
        const mapping = hydratedTemplateMapping({
            id: 'mapping-1',
            template_id: 'template-1',
            zone_id: 'zone-1',
            schedule: null,
            template_details: {
                name: 'Welcome',
                background_item_id: 'media-1',
                background_media: {
                    id: 'media-1',
                    media_uri: '/api/engine/v2/uploads/media-1/url',
                },
                layouts: [
                    {
                        position: 'top',
                        plugin_id: 'clock',
                        plugin_params: {},
                    },
                ],
            },
        });

        expect(mapping.template_details.id).toBe('template-1');
        expect(mapping.template_details.name).toBe('Welcome');
        expect(mediaUrl(mapping.template_details.background_media)).toBe(
            '/api/engine/v2/uploads/media-1/url',
        );
        expect(mapping.template_details.layouts[0].plugin_id).toBe('clock');
    });
});
