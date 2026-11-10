import { registerMockEndpoint } from '../session';

const PATH = '/api/engine/v2/maps/ai';

/**
 * Map AI asks a model to edit map geometry. The mock does not fake that, so
 * it reports the feature as unavailable and the map editor hides its tools.
 */
export function registerMockMapsAi() {
    registerMockEndpoint({
        path: `${PATH}/capabilities`,
        method: 'GET',
        callback: () => ({
            enabled: false,
            reason: 'Map AI is not available in mock mode.',
            providers: [],
            default_provider_id: null,
            quota: { user_remaining_today: 0, domain_remaining_month: 0 },
            limits: {
                max_context_bytes: 0,
                max_ops: 0,
                max_instruction_chars: 0,
            },
        }),
    });
    registerMockEndpoint({
        path: `${PATH}/jobs`,
        method: 'GET',
        callback: () => [],
    });
    registerMockEndpoint({
        path: `${PATH}/usage`,
        method: 'GET',
        callback: () => [],
    });
}
