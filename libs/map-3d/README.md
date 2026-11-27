# map-3d

3D view of a PlaceOS SVG map. The map stays one SVG file: elements that stand
above the floor carry `data-3d-kind` and `data-3d-height` (metres), set on the
element or on a group, and the root carries `data-3d-unit` (SVG user units per
metre). A map without `data-3d-unit` has no 3D view.

- `annotations.ts`: the attributes, with no dependencies, safe to import anywhere.
- `detect.ts`: works out walls, furniture, labels and scale for a map.
- `session.ts`: editing of the annotations with undo, for the Concierge page.
- `viewer.ts`: draws the map with three.js. Takes the same calls as the 2D
  `MapViewer`. Import it lazily, so three.js stays out of the main bundle.

Framework-free. Angular hosts wrap it.

## Running unit tests

Run `nx test map-3d` to execute the unit tests.
