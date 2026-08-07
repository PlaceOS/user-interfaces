import { Component, computed, input, signal } from '@angular/core';

import { AvailabilityState, Floorplan, MapObject } from '../data/types';
import { STATE_COLORS } from '../editor/availability';
import { computeHeatmap } from './heatmap';

const STATUS_FILLS: Record<string, string> = {
    free: 'rgba(76, 175, 80, 0.55)',
    available: 'rgba(33, 150, 243, 0.55)',
    booked: 'rgba(255, 152, 0, 0.55)',
    pending: 'rgba(255, 152, 0, 0.45)',
    occupied: 'rgba(244, 67, 54, 0.55)',
    'checked-in': 'rgba(33, 150, 243, 0.55)',
    'out-of-service': 'rgba(158, 158, 158, 0.45)',
    restricted: 'rgba(121, 85, 72, 0.45)',
};

/** Desks read better on a dark plan when their fill is more solid */
const DESK_FILLS: Record<string, string> = {
    free: 'rgba(76, 175, 80, 0.7)',
    available: 'rgba(76, 175, 80, 0.7)',
    booked: 'rgba(255, 152, 0, 0.7)',
    pending: 'rgba(255, 152, 0, 0.6)',
    occupied: 'rgba(244, 67, 54, 0.7)',
    'checked-in': 'rgba(33, 150, 243, 0.7)',
    'out-of-service': 'rgba(158, 158, 158, 0.6)',
    restricted: 'rgba(121, 85, 72, 0.6)',
};

const STATUS_STROKES: Record<string, string> = {
    free: '#4CAF50',
    available: '#2196F3',
    booked: '#FF9800',
    pending: '#FF9800',
    occupied: '#F44336',
    'checked-in': '#2196F3',
    'out-of-service': '#9E9E9E',
    restricted: '#795548',
};

const DEFAULT_FILL = 'rgba(100, 116, 139, 0.2)';
const DEFAULT_STROKE = '#475569';

@Component({
    selector: 'map-studio-floor-plan-2d',
    template: `
        <div class="relative h-full w-full overflow-auto bg-[#0d1117]">
            <svg
                [attr.viewBox]="'0 0 ' + width() + ' ' + height()"
                preserveAspectRatio="xMidYMid meet"
                class="block h-full w-full"
            >
                <rect
                    x="0"
                    y="0"
                    [attr.width]="width()"
                    [attr.height]="height()"
                    [attr.fill]="background()"
                />

                @if (image_url(); as href) {
                    <image
                        [attr.href]="href"
                        x="0"
                        y="0"
                        [attr.width]="width()"
                        [attr.height]="height()"
                        opacity="0.35"
                        class="pointer-events-none"
                    />
                }

                @if (heatmap().length) {
                    <defs>
                        <filter id="kiosk-heatmap-blur">
                            <feGaussianBlur
                                [attr.stdDeviation]="width() / 40"
                            />
                        </filter>
                    </defs>
                    <g
                        filter="url(#kiosk-heatmap-blur)"
                        class="pointer-events-none"
                    >
                        @for (cell of heatmap(); track $index) {
                            <rect
                                [attr.x]="cell.x"
                                [attr.y]="cell.y"
                                [attr.width]="cell.w"
                                [attr.height]="cell.h"
                                [attr.fill]="cell.color"
                                [attr.opacity]="cell.opacity"
                            />
                        }
                    </g>
                }

                <!-- Walls sit under everything else -->
                @for (object of walls(); track object.id) {
                    @if (object.geometry.type === 'polygon') {
                        <polygon
                            [attr.points]="pointsOf(object)"
                            fill="#374151"
                            stroke="#1f2937"
                            stroke-width="1"
                            opacity="0.85"
                            class="pointer-events-none"
                        />
                    } @else {
                        <rect
                            [attr.x]="object.geometry.x ?? 0"
                            [attr.y]="object.geometry.y ?? 0"
                            [attr.width]="object.geometry.width ?? 10"
                            [attr.height]="object.geometry.height ?? 10"
                            fill="#374151"
                            stroke="#1f2937"
                            stroke-width="1"
                            opacity="0.85"
                            class="pointer-events-none"
                        />
                    }
                }

                @for (object of shapes(); track object.id) {
                    <g
                        class="cursor-pointer"
                        (mouseenter)="hover.set(object.id)"
                        (mouseleave)="hover.set(null)"
                    >
                        @switch (object.geometry.type) {
                            @case ('rect') {
                                <rect
                                    [attr.x]="object.geometry.x ?? 0"
                                    [attr.y]="object.geometry.y ?? 0"
                                    [attr.width]="object.geometry.width ?? 50"
                                    [attr.height]="object.geometry.height ?? 50"
                                    [attr.fill]="fillOf(object)"
                                    [attr.stroke]="strokeOf(object)"
                                    [attr.stroke-width]="strokeWidthOf(object)"
                                    rx="2"
                                    [attr.opacity]="
                                        object.id === hovered() ? 1 : 0.9
                                    "
                                />
                                @if (showsLabel(object)) {
                                    <text
                                        [attr.x]="centerX(object)"
                                        [attr.y]="labelY(object)"
                                        text-anchor="middle"
                                        dominant-baseline="central"
                                        fill="#e6edf3"
                                        [attr.font-size]="fontSize()"
                                        font-weight="600"
                                        class="pointer-events-none"
                                    >
                                        {{ object.label }}
                                    </text>
                                }
                                @if (showsStatus(object)) {
                                    <text
                                        [attr.x]="centerX(object)"
                                        [attr.y]="statusY(object)"
                                        text-anchor="middle"
                                        dominant-baseline="central"
                                        [attr.fill]="strokeOf(object)"
                                        [attr.font-size]="fontSize() * 0.65"
                                        font-weight="700"
                                        letter-spacing="0.5"
                                        class="pointer-events-none"
                                    >
                                        {{ statusOf(object) }}
                                    </text>
                                }
                                @if (showsDot(object)) {
                                    <circle
                                        [attr.cx]="centerX(object)"
                                        [attr.cy]="centerY(object)"
                                        [attr.r]="dotRadius(object)"
                                        [attr.fill]="strokeOf(object)"
                                        opacity="0.8"
                                        class="pointer-events-none"
                                    />
                                }
                            }
                            @case ('polygon') {
                                <polygon
                                    [attr.points]="pointsOf(object)"
                                    [attr.fill]="fillOf(object)"
                                    [attr.stroke]="strokeOf(object)"
                                    [attr.stroke-width]="strokeWidthOf(object)"
                                    [attr.opacity]="
                                        object.id === hovered() ? 1 : 0.9
                                    "
                                />
                                @if (object.label) {
                                    <text
                                        [attr.x]="polygonCx(object)"
                                        [attr.y]="polygonCy(object)"
                                        text-anchor="middle"
                                        dominant-baseline="central"
                                        fill="#e6edf3"
                                        [attr.font-size]="fontSize()"
                                        font-weight="600"
                                        class="pointer-events-none"
                                    >
                                        {{ object.label }}
                                    </text>
                                }
                            }
                            @case ('circle') {
                                <circle
                                    [attr.cx]="object.geometry.x ?? 0"
                                    [attr.cy]="object.geometry.y ?? 0"
                                    [attr.r]="object.geometry.r ?? 12"
                                    [attr.fill]="fillOf(object)"
                                    [attr.stroke]="strokeOf(object)"
                                    [attr.stroke-width]="strokeWidthOf(object)"
                                />
                            }
                        }
                    </g>
                }

                <!-- Amenities render on top as pins -->
                @for (object of amenities(); track object.id) {
                    <g
                        class="cursor-pointer"
                        (mouseenter)="hover.set(object.id)"
                        (mouseleave)="hover.set(null)"
                    >
                        <circle
                            [attr.cx]="object.geometry.x ?? 0"
                            [attr.cy]="object.geometry.y ?? 0"
                            [attr.r]="amenityRadius()"
                            fill="#0ea5e9"
                            stroke="#fff"
                            stroke-width="1.5"
                            opacity="0.9"
                        />
                        @if (object.id === hovered() && object.label) {
                            <text
                                [attr.x]="object.geometry.x ?? 0"
                                [attr.y]="
                                    (object.geometry.y ?? 0) -
                                    amenityRadius() -
                                    13
                                "
                                text-anchor="middle"
                                dominant-baseline="central"
                                fill="#e6edf3"
                                font-size="10"
                                font-weight="600"
                                class="pointer-events-none"
                            >
                                {{ object.label }}
                            </text>
                        }
                    </g>
                }

                @if (tooltip(); as tip) {
                    <g class="pointer-events-none">
                        <rect
                            [attr.x]="tip.x"
                            [attr.y]="tip.y"
                            width="120"
                            [attr.height]="tip.state ? 38 : 22"
                            rx="6"
                            fill="rgba(13,17,23,0.95)"
                            stroke="#30363d"
                            stroke-width="1"
                        />
                        <text
                            [attr.x]="tip.x + 8"
                            [attr.y]="tip.y + 14"
                            fill="#e6edf3"
                            font-size="10"
                            font-weight="700"
                        >
                            {{ tip.label }}
                        </text>
                        @if (tip.state) {
                            <circle
                                [attr.cx]="tip.x + 12"
                                [attr.cy]="tip.y + 29"
                                r="3"
                                [attr.fill]="tip.color"
                            />
                            <text
                                [attr.x]="tip.x + 20"
                                [attr.y]="tip.y + 32"
                                [attr.fill]="tip.color"
                                font-size="9"
                                font-weight="600"
                            >
                                {{ tip.state }}
                            </text>
                        }
                    </g>
                }
            </svg>
        </div>
    `,
})
export class FloorPlan2dComponent {
    public readonly floorplan = input.required<Floorplan>();
    public readonly objects = input.required<MapObject[]>();
    public readonly availability =
        input.required<Record<string, AvailabilityState>>();
    public readonly heatmap_enabled = input(false);
    public readonly image_url = input<string | null>(null);
    /** Object the kiosk wants called out, e.g. a search hit */
    public readonly highlight = input<string | null>(null);

    public readonly hover = signal<string | null>(null);

    /** Pointer wins, otherwise whatever the kiosk asked us to call out */
    public readonly hovered = computed(() => this.hover() ?? this.highlight());

    public readonly width = computed(
        () => this.floorplan().canvas_width ?? 1000,
    );
    public readonly height = computed(
        () => this.floorplan().canvas_height ?? 800,
    );
    public readonly background = computed(
        () => this.floorplan().background_color || '#161b22',
    );

    public readonly fontSize = computed(() =>
        Math.max(8, Math.min(this.width() / 80, 14)),
    );

    public readonly amenityRadius = computed(() =>
        Math.max(6, this.width() / 120),
    );

    private readonly _visible = computed(() =>
        this.objects().filter((o) => o.visible),
    );

    public readonly walls = computed(() =>
        this._visible().filter(
            (o) => o.object_type === 'decorative' && o.layer === 'walls',
        ),
    );

    public readonly amenities = computed(() =>
        this._visible().filter((o) => o.object_type === 'amenity'),
    );

    /** Zones, then rooms, then desks, then anything else — back to front */
    public readonly shapes = computed(() => {
        const visible = this._visible();
        const isWall = (o: MapObject) =>
            o.object_type === 'decorative' && o.layer === 'walls';
        const zones = visible.filter(
            (o) => o.object_type === 'zone' || o.object_type === 'area',
        );
        const rooms = visible.filter((o) => o.object_type === 'room');
        const desks = visible.filter((o) => o.object_type === 'desk');
        const other = visible.filter(
            (o) =>
                !['room', 'desk', 'amenity', 'zone', 'area'].includes(
                    o.object_type,
                ) && !isWall(o),
        );
        return [...zones, ...rooms, ...desks, ...other];
    });

    public readonly heatmap = computed(() =>
        this.heatmap_enabled()
            ? computeHeatmap(
                  this.objects(),
                  this.availability(),
                  this.width(),
                  this.height(),
              )
            : [],
    );

    public readonly tooltip = computed(() => {
        const id = this.hovered();
        const object = this.objects().find((o) => o.id === id);
        if (!object) return null;
        const state = this.availability()[object.id];
        if (
            !state &&
            object.object_type !== 'room' &&
            object.object_type !== 'desk'
        )
            return null;
        return {
            x: (object.geometry.x ?? 0) + (object.geometry.width ?? 0) + 8,
            y: (object.geometry.y ?? 0) - 5,
            label: object.label || object.svg_id || '',
            state: state ? state.replace(/-/g, ' ').toUpperCase() : '',
            color: state ? (STATE_COLORS[state] ?? '#999') : '#999',
        };
    });

    // ── Per-object styling ──────────────────────────────────────────────────

    public fillOf(object: MapObject): string {
        // Under the heatmap, rooms and desks fade so the colours read through
        if (
            this.heatmap_enabled() &&
            (object.object_type === 'room' || object.object_type === 'desk')
        )
            return 'rgba(255, 255, 255, 0.08)';
        const state = this.availability()[object.id];
        if (state && STATUS_FILLS[state]) {
            return object.object_type === 'desk'
                ? (DESK_FILLS[state] ?? STATUS_FILLS[state])
                : STATUS_FILLS[state];
        }
        return object.object_type === 'desk'
            ? 'rgba(76, 175, 80, 0.7)'
            : DEFAULT_FILL;
    }

    public strokeOf(object: MapObject): string {
        if (
            this.heatmap_enabled() &&
            (object.object_type === 'room' || object.object_type === 'desk')
        )
            return 'rgba(255, 255, 255, 0.2)';
        const state = this.availability()[object.id];
        if (state && STATUS_STROKES[state]) return STATUS_STROKES[state];
        return object.object_type === 'desk' ? '#4CAF50' : DEFAULT_STROKE;
    }

    public strokeWidthOf(object: MapObject): number {
        const base = Math.max(1, this.width() / 600);
        return object.id === this.hovered() ? base * 2 : base;
    }

    // ── Geometry helpers ────────────────────────────────────────────────────

    public readonly pointsOf = (object: MapObject) =>
        (object.geometry.points ?? []).map((p) => `${p.x},${p.y}`).join(' ');

    public centerX = (object: MapObject) =>
        (object.geometry.x ?? 0) + (object.geometry.width ?? 0) / 2;

    public centerY = (object: MapObject) =>
        (object.geometry.y ?? 0) + (object.geometry.height ?? 0) / 2;

    public polygonCx = (object: MapObject) => {
        const points = object.geometry.points ?? [];
        return points.reduce((sum, p) => sum + p.x, 0) / (points.length || 1);
    };

    public polygonCy = (object: MapObject) => {
        const points = object.geometry.points ?? [];
        return points.reduce((sum, p) => sum + p.y, 0) / (points.length || 1);
    };

    public statusOf = (object: MapObject) =>
        (this.availability()[object.id] ?? '').replace(/-/g, ' ').toUpperCase();

    public labelY(object: MapObject) {
        const state = this.availability()[object.id];
        return this.centerY(object) - (state ? this.fontSize() * 0.3 : 0);
    }

    public statusY = (object: MapObject) =>
        this.centerY(object) + this.fontSize() * 0.6;

    /** Labels are only legible once the shape is big enough to hold them */
    public showsLabel(object: MapObject) {
        return (
            !!object.label &&
            (object.geometry.width ?? 0) > 30 &&
            (object.geometry.height ?? 0) > 20
        );
    }

    public showsStatus(object: MapObject) {
        return (
            !!this.availability()[object.id] &&
            (object.geometry.width ?? 0) > 50 &&
            (object.geometry.height ?? 0) > 30
        );
    }

    /** Small shapes get a coloured dot instead of status text */
    public showsDot(object: MapObject) {
        return (
            !!this.availability()[object.id] &&
            ((object.geometry.width ?? 0) <= 50 ||
                (object.geometry.height ?? 0) <= 30)
        );
    }

    public dotRadius = (object: MapObject) =>
        Math.min(object.geometry.width ?? 0, object.geometry.height ?? 0) * 0.2;
}
