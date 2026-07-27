import { CommonModule } from '@angular/common';
import {
    Component,
    computed,
    inject,
    input,
    linkedSignal,
    output,
    signal,
} from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { OrganisationService, SettingsService } from '@placeos/common';
import {
    DurationPipe,
    IconComponent,
    LevelPipe,
    TranslatePipe,
    UserAvatarComponent,
} from '@placeos/components';
import { AssetManagerStateService } from './asset-manager-state.service';
import { SplitJoinPipe } from './split-join.pipe';

@Component({
    selector: 'asset-request-details',
    template: `
        @if (request()) {
            <div
                class="fixed inset-0 z-50"
                (click)="request.set(null); requestChange.emit(request())"
            >
                <div class="absolute inset-0 bg-black opacity-50"></div>
                <div
                    class="bg-base-100 absolute inset-y-0 right-0 w-[480px]"
                    (click)="$event.stopPropagation()"
                >
                    <button
                        icon
                        matRipple
                        (click)="
                            request.set(null); requestChange.emit(request())
                        "
                        class="absolute top-1 right-1"
                    >
                        <icon>close</icon>
                    </button>
                    <div
                        class="border-base-200 flex space-x-4 border-b px-2 py-4"
                    >
                        <a-user-avatar
                            [user]="$any({ name: request().user_name })"
                            class="text-xl"
                        ></a-user-avatar>
                        <div details class="space-y-1">
                            <div class="font-medium">
                                {{ request().user_name }}
                            </div>
                            <div class="flex items-center space-x-2 text-sm">
                                <icon>mail</icon>
                                <a
                                    class="underline"
                                    [href]="'mailto:' + request().user_email"
                                >
                                    {{
                                        request().user_email ||
                                            'staff@place.tech'
                                    }}
                                </a>
                            </div>
                            <div class="flex items-center space-x-2 text-sm">
                                <icon>call</icon>
                                <a
                                    class="underline"
                                    [href]="'tel:' + request().user_phone"
                                >
                                    {{ request().user_phone || '04 1234 5678' }}
                                </a>
                            </div>
                            <div class="flex items-center space-x-2 text-sm">
                                <icon>work_outline</icon>
                                <div>
                                    {{ request().user_company || 'PlaceOS' }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="relative px-3 py-4">
                        <div class="flex items-center space-x-4">
                            <div
                                class="bg-base-200 text-secondary flex h-6 w-6 items-center justify-center rounded-full"
                            >
                                <icon class="text-sm">send</icon>
                            </div>
                            <div class="font-medium">
                                {{
                                    'APP.CONCIERGE.ASSETS_REQUESTS_ITEMS'
                                        | translate
                                }}
                            </div>
                        </div>
                        <div class="mt-1 flex flex-col pl-10">
                            @for (item of items(); track item) {
                                <div>
                                    {{ item.name }}
                                    <span
                                        class="bg-success text-success-content rounded-sm px-2 py-1 text-xs"
                                    >
                                        x{{ item.quantity }}
                                    </span>
                                </div>
                            }
                        </div>
                        <div class="mt-4 flex items-center space-x-4">
                            <div
                                class="bg-base-200 text-secondary flex h-6 w-6 items-center justify-center rounded-full"
                            >
                                <icon class="text-sm">event</icon>
                            </div>
                            <div class="font-medium">
                                {{
                                    'APP.CONCIERGE.ASSETS_REQUESTS_DATE'
                                        | translate
                                }}
                            </div>
                        </div>
                        <div class="mt-1 pl-10">
                            {{ request().date | date: 'EEEE, MMMM d, y' }}
                        </div>
                        <div class="mt-4 flex items-center space-x-4">
                            <div
                                class="bg-base-200 text-secondary flex h-6 w-6 items-center justify-center rounded-full"
                            >
                                <icon class="text-sm">schedule</icon>
                            </div>
                            <div class="font-medium">
                                {{ 'FORM.PERIOD' | translate }}
                            </div>
                        </div>
                        <div class="mt-1 pl-10">
                            {{ request().date | date: time_format() }} &ndash;
                            {{
                                request().date + request().duration * 60 * 1000
                                    | date: time_format()
                            }}
                            ({{ request().duration | duration }})
                        </div>
                        <div class="mt-4 flex items-center space-x-4">
                            <div
                                class="bg-base-200 text-secondary flex h-6 w-6 items-center justify-center rounded-full"
                            >
                                <icon class="text-sm">place</icon>
                            </div>
                            <div class="font-medium">Floor</div>
                        </div>
                        <div class="mt-1 pl-10">
                            {{
                                (request().zones | level)?.display_name || 'N/A'
                            }}
                        </div>
                        <div class="mt-4 flex items-center space-x-4">
                            <div
                                class="bg-base-200 text-secondary flex h-6 w-6 items-center justify-center rounded-full"
                            >
                                <icon class="text-sm">meeting_room</icon>
                            </div>
                            <div class="font-medium">
                                {{ 'RESOURCE.ROOM' | translate }}
                            </div>
                        </div>
                        <div class="mt-1 pl-10">
                            {{ request().description }}
                        </div>
                        <div class="absolute top-4 right-4 text-sm">
                            <button
                                matRipple
                                class="!bg-opacity-20 mb-4 flex w-full items-center space-x-2 rounded-3xl px-2 py-1 text-left"
                                [class.bg-success]="
                                    request().status === 'approved'
                                "
                                [class.bg-error]="
                                    request().status === 'declined'
                                "
                                [class.bg-warning]="
                                    request().status === 'tentative'
                                "
                                [matMenuTriggerFor]="menu"
                                [disabled]="loading()"
                            >
                                <icon
                                    class="text-xl"
                                    [class.text-green-600]="
                                        request().status === 'approved'
                                    "
                                    [class.text-red-600]="
                                        request().status === 'declined'
                                    "
                                    [class.text-yellow-400]="
                                        request().status === 'tentative'
                                    "
                                >
                                    {{
                                        request().status === 'approved'
                                            ? 'done'
                                            : request().status === 'declined'
                                              ? 'close'
                                              : 'warning'
                                    }}
                                </icon>
                                <div class="flex-1 capitalize">
                                    {{ request().status }}
                                </div>
                                <icon class="text-2xl">expand_more</icon>
                            </button>
                            <mat-menu #menu="matMenu" class="w-36">
                                <button
                                    mat-menu-item
                                    (click)="setStatus('approved')"
                                >
                                    {{ 'COMMON.APPROVE' | translate }}
                                </button>
                                <button
                                    mat-menu-item
                                    (click)="setStatus('declined')"
                                >
                                    {{ 'COMMON.DECLINE' | translate }}
                                </button>
                            </mat-menu>
                            <button
                                matRipple
                                class="border-base-200 flex w-full items-center rounded-none border bg-none px-2 py-1 text-left"
                                [matMenuTriggerFor]="tracking_menu"
                                [disabled]="loading()"
                            >
                                <div class="flex-1 capitalize">
                                    {{
                                        (request().extension_data?.tracking
                                            | splitjoin) || 'In Storage'
                                    }}
                                </div>
                                <icon class="text-2xl">expand_more</icon>
                            </button>
                            <mat-menu #tracking_menu="matMenu" class="w-36">
                                <button
                                    mat-menu-item
                                    (click)="setTracking('in_storage')"
                                >
                                    {{
                                        'APP.CONCIERGE.ASSETS_REQUESTS_TRACKING_STORAGE'
                                            | translate
                                    }}
                                </button>
                                <button
                                    mat-menu-item
                                    (click)="setTracking('in_transit')"
                                >
                                    {{
                                        'APP.CONCIERGE.ASSETS_REQUESTS_TRACKING_TRANSIT'
                                            | translate
                                    }}
                                </button>
                                <button
                                    mat-menu-item
                                    (click)="setTracking('at_location')"
                                >
                                    {{
                                        'APP.CONCIERGE.ASSETS_REQUESTS_TRACKING_LOCATION'
                                            | translate
                                    }}
                                </button>
                            </mat-menu>
                        </div>
                    </div>
                </div>
            </div>
        }
    `,
    styles: [``],
    imports: [
        CommonModule,
        MatMenuModule,
        TranslatePipe,
        SplitJoinPipe,
        MatRippleModule,
        IconComponent,
        LevelPipe,
        UserAvatarComponent,
        DurationPipe,
    ],
})
export class AssetRequestDetailsComponent {
    private _state = inject(AssetManagerStateService);
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);

    public readonly requestInput = input<any>(undefined, { alias: 'request' });
    public readonly request = linkedSignal(this.requestInput);
    public readonly requestChange = output<any>();

    public readonly loading = signal(false);
    public readonly items = computed(
        () => this.request()?.extension_data?.request?.items || [],
    );
    public readonly time_format = computed(() => this._settings.time_format);

    public async setStatus(status: string) {
        this.loading.set(true);
        await this._state.setStatus(this.request(), status);
        (this.request() as any).status = status;
        this.loading.set(false);
    }

    public async setTracking(state: string) {
        this.loading.set(true);
        await this._state.setTracking(this.request(), state);
        (this.request() as any).extension_data.tracking = state;
        this.loading.set(false);
    }
}
