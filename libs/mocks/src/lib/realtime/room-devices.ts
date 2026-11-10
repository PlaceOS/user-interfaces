/** Lighting areas of a mock room. `binding` is the `Lighting` status key. */
export const LIGHTING_AREAS = [
    { name: 'Front', area: 'zone1', binding: 'level_zone1' },
    { name: 'Middle', area: 'zone2', binding: 'level_zone2' },
    { name: 'Back', area: 'zone3', binding: 'level_zone3' },
];

/** Mock for a lighting driver. Each area keeps its level in `level_<area>`. */
export class LightingModule {
    level_zone1 = 50;
    level_zone2 = 75;
    level_zone3 = 100;

    $set_lighting_level(value: number, area: string) {
        const key = `level_${area}`;
        if (key in this) this[key] = value;
    }
}

/** Mock for an assistive listening system */
export class HearingAugmentationModule {
    join_code = '4821';
    has_t_coil = true;
}

/** Mock for the remote logging driver. Logging stays off in mock mode. */
export class LoggerModule {
    enabled = false;

    $post_event(_event: unknown) {}
}
