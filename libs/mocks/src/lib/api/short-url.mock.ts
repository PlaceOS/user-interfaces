import { ShortURL } from '@placeos/common';
import { getUnixTime } from 'date-fns';

import { MOCK_PAGE_SIZE, persist, registerMockEndpoint } from '../session';
import { registerCrudEndpoints } from './crud.mock';
import { ACTIVE_USER } from './users.data';

const PATH = '/api/engine/v2/short_url';

const now = getUnixTime(Date.now());

/** Short URLs that Concierge manages. IDs need the `uri-` prefix. */
const MOCK_SHORT_URLS: ShortURL[] = [
    {
        id: 'uri-welcome',
        name: 'Visitor welcome',
        description: 'Check-in page for building visitors',
        uri: 'https://place.tech/visitors',
        user_id: ACTIVE_USER.id,
        user_name: ACTIVE_USER.name,
        user_email: ACTIVE_USER.email,
        redirect_count: 42,
        enabled: true,
        valid_from: now - 30 * 24 * 60 * 60,
        valid_to: 0,
        created_at: now - 30 * 24 * 60 * 60,
        updated_at: now - 2 * 24 * 60 * 60,
    },
];

export function registerMockShortUrls() {
    persist('short-urls', MOCK_SHORT_URLS);

    registerMockEndpoint({
        path: PATH,
        method: 'GET',
        page_size: MOCK_PAGE_SIZE,
        callback: (request) => {
            const q = `${request.query_params?.q || ''}`.toLowerCase();
            return MOCK_SHORT_URLS.filter(
                (item) =>
                    !q ||
                    item.name.toLowerCase().includes(q) ||
                    item.uri.toLowerCase().includes(q),
            );
        },
    });
    registerCrudEndpoints(PATH, MOCK_SHORT_URLS, 'uri-', 'short URL');
}
