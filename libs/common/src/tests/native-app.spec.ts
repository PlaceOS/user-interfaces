import { getIntuneAccount } from '../lib/native-app';

describe('native app bridge', () => {
    const native_window = window as typeof window & {
        Capacitor?: {
            isNativePlatform: () => boolean;
            Plugins: Record<string, Record<string, () => Promise<never>>>;
        };
    };

    afterEach(() => {
        delete native_window.Capacitor;
        vi.useRealTimers();
    });

    it('stops waiting when a native plugin call does not settle', async () => {
        vi.useFakeTimers();
        native_window.Capacitor = {
            isNativePlatform: () => true,
            Plugins: {
                IntuneMAM: {
                    enrolledAccount: () => new Promise(() => undefined),
                },
            },
        };

        const result = getIntuneAccount();
        await vi.advanceTimersByTimeAsync(10_000);

        await expect(result).resolves.toBeNull();
    });
});
