import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { MapDocument, MapDocumentOptions } from '../lib/map-document';

/** The sample maps that load; `test.svg` has no xmlns and is rejected as not_svg. */
export const SAMPLE_MAPS = [
    'level_P1',
    'level_G',
    'level_1',
    'level_2',
    'level_3',
] as const;
export type SampleMap = (typeof SAMPLE_MAPS)[number] | 'test';

const cache = new Map<string, string>();

export function readMap(name: SampleMap): string {
    let text = cache.get(name);
    if (!text) {
        text = readFileSync(
            join(process.cwd(), 'shared/assets/maps', `${name}.svg`),
            'utf8',
        );
        cache.set(name, text);
    }
    return text;
}

export function loadMap(
    name: SampleMap,
    options?: MapDocumentOptions,
): MapDocument {
    return MapDocument.load(readMap(name), options);
}

export function svg(body: string, attrs = 'viewBox="0 0 1000 500"'): string {
    return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" ${attrs}>${body}</svg>`;
}

export function load(
    body: string,
    options?: MapDocumentOptions,
    attrs?: string,
): MapDocument {
    return MapDocument.load(svg(body, attrs), options);
}

export function anchor(doc: MapDocument, id: string): string {
    const element = doc.byId(id);
    if (!element) throw new Error(`no element with id ${id}`);
    return doc.anchorOf(element);
}

/** A small office map: a styled group of desks, a room, a zone layer and a label. */
export const OFFICE = svg(
    `<defs><style>.desk{fill:#dde;stroke:#446}.wall{fill:none;stroke:#000;stroke-width:2}.room{fill:#fff}</style>
        <linearGradient id="grad"><stop offset="0" stop-color="#fff"/></linearGradient>
        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5"><path d="M0,0 L10,5 L0,10 z"/></marker></defs>
    <g id="base"><path class="wall" d="M10 10 H990 V490 H10 Z"/><rect id="bg" x="0" y="0" width="1000" height="500" fill="url(#grad)"/></g>
    <g id="rooms"><rect id="area-1.01-status" class="room" x="20" y="20" width="200" height="100"/><path id="area-1.02-status" class="room" d="M240 20 h200 v100 h-200 z"/></g>
    <g id="desks" transform="translate(100 200)"><rect id="table-01.001" class="desk" x="0" y="0" width="30" height="20"/><rect id="table-01.002" class="desk" x="40" y="0" width="30" height="20"/><rect id="table-01.003" class="desk" x="80" y="0" width="30" height="20"/></g>
    <g id="zones"><polygon id="zone-01.A" points="500,300 700,300 700,450 500,450" fill="#0f0" fill-opacity="0.2"/></g>
    <g id="labels"><text id="label-1" x="30" y="60" font-size="12">Meeting 1.01<tspan id="sub-1" x="30" y="76">(8 seats)</tspan></text></g>
    <g id="plants"><circle id="plant-1" cx="900" cy="400" r="10" fill="#0a0"/><circle id="plant-2" cx="930" cy="400" r="10"/></g>
    <line id="guide" x1="0" y1="250" x2="1000" y2="250" stroke="#f00" marker-end="url(#arrow)"/>
    <use id="ghost" xlink:href="#table-01.001" x="400" y="400"/>`,
);
