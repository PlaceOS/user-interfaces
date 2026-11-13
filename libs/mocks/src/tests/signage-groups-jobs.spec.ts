import { HashMap } from '@placeos/common';

import { registerMockSignage } from '../lib/api/signage.mock';
import { endpoint } from './endpoints';

vi.mock('@placeos/ts-client');

const API = '/api/engine/v2/signage';

describe('registerMockSignage groups and image jobs', () => {
    beforeAll(() => registerMockSignage());
    beforeEach(() => vi.useFakeTimers());
    afterEach(() => {
        vi.useRealTimers();
        localStorage.clear();
    });

    it('should give groups made in the same millisecond different IDs', () => {
        vi.setSystemTime(Date.UTC(2099, 0, 1));
        const create = endpoint<HashMap>('POST', '/api/engine/v2/groups');

        const first = create({ body: { name: 'First' } });
        const second = create({ body: { name: 'Second' } });

        expect(first.id).not.toBe(second.id);
    });

    it.each(['A poster', 'trigger-moderation'])(
        'should keep a cancelled "%s" job cancelled',
        (prompt) => {
            const job = endpoint<HashMap>(
                'POST',
                `${API}/ai/generate`,
            )({ body: { prompt, candidates: 2 } });

            endpoint('POST', `${API}/ai/jobs/:id/cancel`)({
                route_params: { id: job.id },
            });
            vi.advanceTimersByTime(5000);

            expect(
                endpoint<HashMap>(
                    'GET',
                    `${API}/ai/jobs/:id`,
                )({ route_params: { id: job.id } }),
            ).toMatchObject({ state: 'cancelled', images_produced: 0 });
        },
    );
});
