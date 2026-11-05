import {
    Component,
    computed,
    effect,
    inject,
    OnInit,
    signal,
} from '@angular/core';
import { OrganisationService, settingSignal } from '@placeos/common';
import { AnnounceDirective } from './announce.directive';
import { IconComponent } from './icon.component';
import { TranslatePipe } from './translate.pipe';

export interface BannerDetails {
    id: string;
    type?: 'info' | 'warn' | 'error';
    content: string;
    message?: string;
}

/** Icon for each banner type, so the type does not rely on colour only */
const BANNER_ICONS: Record<NonNullable<BannerDetails['type']>, string> = {
    info: 'info',
    warn: 'warning',
    error: 'error',
};

@Component({
    selector: 'global-banner',
    template: `
        @if (environment_bar(); as bar_color) {
            <div
                aria-hidden="true"
                class="environment-bar top-0 print:hidden"
                [style.background-color]="bar_color"
            ></div>
            <div
                aria-hidden="true"
                class="environment-bar bottom-0 print:hidden"
                [style.background-color]="bar_color"
            ></div>
        }
        @if (!has_been_closed() && banner()) {
            <div
                class="flex w-full items-center space-x-4 p-4 print:hidden"
                [class.bg-info]="banner().type === 'info' || !banner().type"
                [class.text-info-content]="
                    banner().type === 'info' || !banner().type
                "
                [class.bg-warning]="banner().type === 'warn'"
                [class.text-warning-content]="banner().type === 'warn'"
                [class.bg-error]="banner().type === 'error'"
                [class.text-error-content]="banner().type === 'error'"
            >
                <icon aria-hidden="true" class="text-2xl">{{
                    type_icon()
                }}</icon>
                @if (banner().type === 'error') {
                    <div role="alert" class="flex-1">
                        {{ banner()?.content || banner()?.message }}
                    </div>
                } @else {
                    <div announce class="flex-1">
                        {{ banner()?.content || banner()?.message }}
                    </div>
                }
                <button
                    icon
                    matRipple
                    [attr.aria-label]="'COMMON.CLOSE' | translate"
                    (click)="close()"
                >
                    <icon>close</icon>
                </button>
            </div>
        }
    `,
    styles: [
        `
            :host {
                display: block;
                width: 100%;
            }

            .environment-bar {
                height: 0.5rem;
                left: 0;
                pointer-events: none;
                position: fixed;
                width: 100%;
                z-index: 10000;
            }
        `,
    ],
    imports: [IconComponent, TranslatePipe, AnnounceDirective],
})
export class GlobalBannerComponent implements OnInit {
    private _org = inject(OrganisationService);

    private _change = signal(0);
    public readonly is_setup = signal(false);
    public readonly banner = settingSignal<BannerDetails>('banner');
    public readonly environment_bar = settingSignal<string>('environment_bar');
    /** Icon for the banner type */
    public readonly type_icon = computed(
        () => BANNER_ICONS[this.banner()?.type ?? 'info'] ?? BANNER_ICONS.info,
    );
    private readonly _environment_bar_padding = effect(() => {
        document.body.classList.toggle(
            'has-environment-bar',
            !!this.environment_bar(),
        );
    });
    /** Identifies the banner, so a closed banner stays closed */
    private readonly _banner_key = computed(() => {
        const banner = this.banner();
        return banner?.id || banner?.content || banner?.message || '';
    });
    public readonly has_been_closed = computed(() => {
        if (!this.is_setup()) return true;
        this._change();
        return (
            (!this.banner()?.content && !this.banner()?.message) ||
            localStorage.getItem('PLACE.last_banner') === this._banner_key()
        );
    });

    public async ngOnInit() {
        await this._org.waitUntilInitialised();
        setTimeout(() => this.is_setup.set(true), 500);
    }

    public async close() {
        localStorage.setItem('PLACE.last_banner', this._banner_key());
        this._change.set(Date.now());
    }
}
