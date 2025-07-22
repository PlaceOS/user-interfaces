import { CommonModule } from '@angular/common';
import {
    AfterViewInit,
    Component,
    ElementRef,
    HostListener,
    inject,
    Injector,
    input,
    model,
    OnChanges,
    OnDestroy,
    OnInit,
    output,
    signal,
    SimpleChanges,
    TemplateRef,
    Type,
    viewChild,
    viewChildren,
} from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
    applyGlobalStyles,
    createViewer,
    getViewer,
    listenToViewerChanges,
    Point,
    removeViewer,
    updateViewer,
    ViewAction,
    Viewer,
    ViewerFeature,
    ViewerLabel,
    ViewerStyles,
} from '@placeos/svg-viewer';
import { apiKey, authority, token } from '@placeos/ts-client';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { AsyncHandler } from 'libs/common/src/lib/async-handler.class';
import { MAP_FEATURE_DATA } from 'libs/common/src/lib/types';
import { TranslatePipe } from './translate.pipe';

function isSamePoint(p1: Point, p2: Point): boolean {
    return p1.x === p2.x && p1.y === p2.y;
}

@Component({
    selector: `map-renderer`,
    template: `
        <div
            #outlet
            tabindex="0"
            role="map"
            class="absolute inset-0"
            [class.hidden]="!src()"
        ></div>
        @if (src()) {
            @if (!viewer || loading()) {
                <mat-spinner class="absolute" [diameter]="48" />
            }
            @if (viewer === '~empty~') {
                <div class="absolute inset-0 flex items-center justify-center">
                    <div class="opacity-30">
                        {{ 'EXPLORE.MAP_FAILED_TO_LOAD' | translate }}
                    </div>
                </div>
            }
        } @else {
            <div class="absolute inset-0 flex items-center justify-center">
                <div class="opacity-30">
                    {{ 'EXPLORE.MAP_EMPTY' | translate }}
                </div>
            </div>
        }
        @if (injectors?.length) {
            <div hidden>
                @for (
                    element of features();
                    track element.track_id || $index;
                    let i = $index
                ) {
                    @if (element) {
                        <div>
                            <div
                                #feature
                                class="pointer-events-none"
                                [attr.no-scale]="element.no_scale"
                                [attr.el-id]="element.location"
                                [attr.track-id]="element.track_id"
                                [attr.view-id]="viewer"
                            >
                                @switch (type(element.content)) {
                                    @case ('component') {
                                        <ng-container
                                            *ngComponentOutlet="
                                                element.content;
                                                injector: injectors[i]
                                            "
                                        ></ng-container>
                                    }
                                    @case ('html') {
                                        <div
                                            [innerHTML]="
                                                element.content | sanitize
                                            "
                                        ></div>
                                    }
                                    @default {
                                        <ng-container
                                            *ngTemplateOutlet="
                                                element.content;
                                                context: element.data
                                            "
                                        ></ng-container>
                                    }
                                }
                            </div>
                        </div>
                    }
                }
            </div>
        }
    `,
    styles: [
        `
            :host {
                height: 100%;
                width: 100%;
            }

            mat-spinner {
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        `,
    ],
    imports: [CommonModule, TranslatePipe, MatProgressSpinnerModule],
})
export class MapRendererComponent
    extends AsyncHandler
    implements AfterViewInit, OnChanges, OnInit, OnDestroy
{
    private _injector = inject(Injector);

    /** Zoom level to apply to the SVG */
    public readonly zoom = model(1);
    /** Zoom level to apply to the SVG */
    public readonly center = model<Point>({ x: 0.5, y: 0.5 });
    /** URL to the SVG file */
    public readonly src = input<string>(undefined);
    /** Custom CSS styles to apply to the SVG file */
    public readonly styles = input<ViewerStyles>(undefined);
    /** List of features to renderer over the SVG */
    public readonly features = input<ViewerFeature[]>(undefined);
    /** List of labels to renderer over the SVG */
    public readonly labels = input<ViewerLabel[]>(undefined);
    /** List of available user actions for the SVG */
    public readonly actions = input<ViewAction[]>(undefined);
    /** Number of times to reset the map */
    public readonly reset = input(0);
    public readonly options = input<any>(undefined);
    public readonly focus = input<string>(undefined);
    public readonly zoomChange = output<number>();
    public readonly centerChange = output<Point>();
    public readonly mapInfo = output<any>();
    public readonly loading = signal(false);

    public injectors: Injector[] = [];
    public feature_list: ViewerFeature[] = [];

    /** ID of the active SVG Viewer */
    public viewer: string;
    /** Observable for changes on the SVG viewer */
    private _on_changes: BehaviorSubject<Viewer> = new BehaviorSubject(null);

    private _extra_data = {
        ratio$: this._on_changes.pipe(map((_) => _.ratio)),
        svg_ratio$: this._on_changes.pipe(map((_) => _.svg_ratio)),
        zoom$: this._on_changes.pipe(map((_) => _.zoom)),
        position: this._on_changes.pipe(map((_) => _.center)),
    };

    private readonly _outlet_el =
        viewChild<ElementRef<HTMLDivElement>>('outlet');
    private readonly _feature_list = viewChildren<ElementRef<HTMLDivElement>>(
        'feature',
        {},
    );

    @HostListener('window:resize') public onResize() {
        this.zoom.set(1);
        this.center.set({ x: 0.5, y: 0.5 });
        this.updateDisplay();
    }

    public type(
        content: string | TemplateRef<any> | Type<any>,
    ): 'html' | 'template' | 'component' {
        return typeof content === 'string'
            ? 'html'
            : content instanceof TemplateRef
              ? 'template'
              : 'component';
    }

    constructor() {
        super();
    }

    public ngOnInit() {
        applyGlobalStyles();
    }

    public ngOnDestroy(): void {
        if (this.viewer) removeViewer(this.viewer);
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.src && this.src()) {
            this.createView().catch((e) => {
                console.warn(e);
                this.loading.set(false);
                this.viewer = '~empty~';
            });
        }
        if (changes.features) {
            this.updateInjectors();
        }
        if (this.viewer) {
            const focus = this.focus();
            if (changes.focus && focus) {
                this.focusOn(focus);
            } else if (
                (changes.zoom &&
                    changes.zoom.previousValue != changes.zoom.currentValue) ||
                (changes.center &&
                    !isSamePoint(
                        changes.center.previousValue,
                        changes.center.currentValue,
                    ))
            ) {
                this.updateDisplay();
            }
            if (
                changes.styles ||
                changes.features ||
                changes.labels ||
                changes.actions
            ) {
                this.timeout('update_view', () => this.updateView());
            }
        }
        if (
            changes.reset &&
            changes.reset.currentValue !== changes.reset.previousValue
        ) {
            this.zoom.set(1);
            this.center.set({ x: 0.5, y: 0.5 });
            this.updateDisplay();
        }
    }

    public ngAfterViewInit() {
        this.createView().catch((e) => {
            console.warn(e);
            this.loading.set(false);
            this.viewer = '~empty~';
        });
    }

    /** Update overlays, styles and actions of viewer */
    private updateView() {
        try {
            if (!getViewer(this.viewer) || this.loading()) {
                return this.timeout('update_view', () => this.updateView());
            }
            this.updateFeatureList();
            updateViewer(this.viewer, {
                styles: this.styles(),
                features: this.feature_list,
                labels: this.labels(),
                actions: this.actions(),
                options: this.options(),
            });
        } catch (e) {
            console.warn('[MAP] Update viewer error.', e);
            return this.timeout('update_view', () => this.updateView());
        }
    }

    /** Update zoom and center position of viewer */
    private updateDisplay() {
        try {
            updateViewer(this.viewer, {
                zoom: this.zoom(),
                desired_zoom: this.zoom(),
                center: this.center(),
                desired_center: this.center(),
                options: this.options(),
            });
        } catch (e) {
            console.warn('[MAP] Update view display error.', e);
            return this.timeout('update_display', () => this.updateDisplay());
        }
    }

    private async createView() {
        if (!authority()) {
            return this.timeout(
                'create_view',
                () => this.createView().catch((e) => console.warn(e)),
                300,
            );
        }
        const simp_url = this.src()?.toLowerCase() || '';
        if (!simp_url.includes('svg') && !simp_url.includes('upload')) return;
        const _outlet_el = this._outlet_el();
        const src = this.src();
        if (src && _outlet_el?.nativeElement && !this.loading()) {
            this.loading.set(true);
            const styles = this.styles();
            const labels = this.labels();
            const actions = this.actions();
            const options = this.options();
            if (this.viewer) {
                try {
                    updateViewer(this.viewer, {
                        styles: styles,
                        features: [],
                        labels: labels,
                        actions: actions,
                        options: options,
                    });
                    removeViewer(this.viewer);
                } catch (e) {
                    console.warn(e);
                    return;
                }
            }
            this.updateFeatureList();
            const tkn = token();
            document.cookie = `${
                tkn === 'x-api-key'
                    ? 'api-key=' + encodeURIComponent(apiKey())
                    : 'bearer_token=' + encodeURIComponent(tkn)
            };max-age=30;path=/api/engine/v2/uploads;samesite=strict;${
                location.protocol === 'https:' ? 'secure;' : ''
            }`;
            this.viewer = await createViewer({
                element: _outlet_el?.nativeElement,
                url: src,
                styles: styles,
                zoom: this.zoom(),
                desired_zoom: this.zoom(),
                center: this.center(),
                features: this.feature_list,
                labels: labels,
                actions: actions,
                options: options,
            }).catch((e) => '');
            this.loading.set(false);
            if (!this.viewer) {
                this.viewer = '~empty~';
                return;
            }
            this.subscription(
                'view_changes',
                listenToViewerChanges(this.viewer)?.subscribe((v) => {
                    this._on_changes.next({ ...v } as any);
                    this.zoomChange.emit(v.zoom);
                    this.zoom.set(v.zoom);
                    this.centerChange.emit(v.center);
                    this.center.set(v.center);
                }),
            );
            const viewer = getViewer(this.viewer);
            this.mapInfo.emit(viewer.mappings);
            const focus = this.focus();
            if (focus) this.focusOn(focus);
        } else if ((src && !_outlet_el?.nativeElement) || this.loading()) {
            this.timeout('create_view', () =>
                this.createView().catch((e) => console.warn(e)),
            );
        }
    }

    private focusOn(id: string) {
        if (!id || !this.viewer) return;
        const viewer: Viewer = getViewer(this.viewer);
        if (!viewer) return;
        const rect = viewer.mappings[id];
        if (!rect) return;
        this.center.set({
            x: 1 - (rect.x + rect.w / 2),
            y: 1 - (rect.y + rect.h / 4),
        });
        this.updateDisplay();
    }

    private updateFeatureList() {
        const feature_elements = this._feature_list();
        this.feature_list = (this.features() || [])
            .map((f, idx) => ({
                ...f,
                content: feature_elements[idx]?.nativeElement,
            }))
            .filter((f) => f.content);
    }

    private updateInjectors() {
        const old_injectors = this.injectors || [];
        this.injectors = (this.features() || []).map(
            (f: any) =>
                old_injectors.find(
                    (_) =>
                        _.get(MAP_FEATURE_DATA)?.track_id &&
                        _.get(MAP_FEATURE_DATA)?.track_id === f.track_id,
                ) ||
                Injector.create({
                    providers: [
                        {
                            provide: MAP_FEATURE_DATA,
                            useValue: {
                                track_id: f.track_id,
                                ...f.data,
                                ...this._extra_data,
                            },
                        },
                    ],
                    parent: this._injector,
                }),
        );
    }
}
