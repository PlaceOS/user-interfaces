export interface RenderCheckResult {
    ok: boolean;
    error?: string;
    duration_ms?: number;
}

/** Can PlaceOS draw this markup? The viewer rasterises maps through an Image. */
export interface RenderCheck {
    check(markup: string): Promise<RenderCheckResult>;
}

/** Loads the markup into an Image from a blob URL, as the viewer does. */
export class BrowserRenderCheck implements RenderCheck {
    constructor(private readonly _timeout_ms = 10_000) {}

    public check(markup: string): Promise<RenderCheckResult> {
        const started = Date.now();
        const url = URL.createObjectURL(
            new Blob([markup], { type: 'image/svg+xml' }),
        );
        return new Promise<RenderCheckResult>((resolve) => {
            const image = new Image();
            let settled = false;
            const finish = (result: RenderCheckResult) => {
                if (settled) return;
                settled = true;
                clearTimeout(timer);
                URL.revokeObjectURL(url);
                resolve({ ...result, duration_ms: Date.now() - started });
            };
            const timer = setTimeout(
                () =>
                    finish({
                        ok: false,
                        error: 'the map did not finish rendering in time',
                    }),
                this._timeout_ms,
            );
            image.onload = () => {
                if (!image.naturalWidth && !image.width) {
                    finish({
                        ok: false,
                        error: 'the map rendered with no size',
                    });
                    return;
                }
                finish({ ok: true });
            };
            image.onerror = () =>
                finish({
                    ok: false,
                    error: 'the browser could not draw the map',
                });
            image.src = url;
        });
    }
}

/** For jsdom: answers with a fixed result and records what it was asked. */
export class FakeRenderCheck implements RenderCheck {
    public readonly calls: string[] = [];

    constructor(private readonly _result: RenderCheckResult = { ok: true }) {}

    public async check(markup: string): Promise<RenderCheckResult> {
        this.calls.push(markup);
        return { ...this._result };
    }
}
