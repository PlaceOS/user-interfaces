import { Component, input } from '@angular/core';

@Component({
    selector: 'placeos-public-page-shell',
    template: `
        <main
            class="from-base-200 via-base-200 to-base-300 text-base-content relative min-h-screen overflow-auto bg-gradient-to-br"
        >
            <div class="public-bg pointer-events-none fixed inset-0"></div>
            <div
                class="pointer-events-none fixed inset-0 [background-image:linear-gradient(currentColor_1px,transparent_1px),linear-gradient(90deg,currentColor_1px,transparent_1px)] [background-size:3rem_3rem] opacity-[0.04]"
            ></div>
            <section
                class="relative mx-auto flex w-[80rem] max-w-full flex-col gap-4 p-4"
            >
                <header
                    class="bg-grad border-base-300 text-brand-content mx-auto w-full max-w-2xl overflow-hidden rounded-xl border p-5 shadow-lg"
                >
                    <div class="relative max-w-3xl space-y-3">
                        <div
                            class="bg-brand-content/15 inline-flex rounded-lg p-2 ring-1 ring-white/20"
                        >
                            <img
                                class="h-8 w-auto"
                                [src]="logo()"
                                alt="PlaceOS"
                            />
                        </div>
                        <h1 class="text-3xl font-medium sm:text-4xl">
                            Events and public experiences
                        </h1>
                        <p class="max-w-2xl text-base opacity-90">
                            {{ description() }}
                        </p>
                    </div>
                </header>
                <ng-content />
            </section>
        </main>
    `,
    styles: [
        `
            .bg-grad {
                background:
                    radial-gradient(
                        circle at top right,
                        color-mix(in srgb, var(--brand-200) 72%, white 28%) 0,
                        transparent 18rem
                    ),
                    linear-gradient(
                        105deg,
                        var(--brand-100) 0%,
                        var(--brand-200) 100%
                    );
            }

            .public-bg {
                background:
                    radial-gradient(
                        circle at 12% 8%,
                        color-mix(in srgb, var(--brand-100) 30%, transparent) 0,
                        transparent 22rem
                    ),
                    radial-gradient(
                        circle at 84% 12%,
                        color-mix(in srgb, var(--brand-200) 22%, transparent) 0,
                        transparent 24rem
                    ),
                    radial-gradient(
                        circle at 70% 84%,
                        color-mix(in srgb, var(--accent) 18%, transparent) 0,
                        transparent 20rem
                    );
            }
        `,
    ],
})
export class PublicPageShellComponent {
    public readonly logo = input('assets/logo-light.svg');
    public readonly description = input(
        'Browse public events, view details, and register to attend.',
    );
}
