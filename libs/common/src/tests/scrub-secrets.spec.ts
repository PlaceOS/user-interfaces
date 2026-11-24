import { scrubSecrets } from '../lib/scrub-secrets';

describe('scrubSecrets', () => {
    it('should remove credentials from nested URLs', () => {
        const event = {
            request: { url: 'https://a.b.com/kiosk/#/?x-api-key=abc&lang=en' },
            breadcrumbs: [
                { data: { to: '/#/home?zone=1&bearer_token=xyz' } },
                {
                    data: {
                        to: '/kiosk/?public=true&jwt=j1#/checkin?token=t1',
                    },
                },
            ],
        };

        scrubSecrets(event);

        expect(event.request.url).toBe(
            'https://a.b.com/kiosk/#/?x-api-key=[Filtered]&lang=en',
        );
        expect(event.breadcrumbs[0].data.to).toBe(
            '/#/home?zone=1&bearer_token=[Filtered]',
        );
        expect(event.breadcrumbs[1].data.to).toBe(
            '/kiosk/?public=true&jwt=[Filtered]#/checkin?token=[Filtered]',
        );
    });

    it('should leave SDK state alone', () => {
        const event = {
            request: { url: '/#/?x-api-key=abc' },
            // Sentry keeps live objects here, some with getters only
            sdkProcessingMetadata: {
                get url() {
                    return '/#/?x-api-key=abc';
                },
            },
        };

        expect(() => scrubSecrets(event)).not.toThrow();
        expect(event.request.url).toBe('/#/?x-api-key=[Filtered]');
    });
});
