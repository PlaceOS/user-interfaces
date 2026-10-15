# map-editor

Document core for the PlaceOS map editor: a strictly parsed SVG map with session
anchors, an element index, a closed vocabulary of DOM operations with an applier
and a validator, snapshot history and a browser draft store. Framework-free so
it unit-tests in jsdom; Angular hosts wrap it.

## Running unit tests

Run `nx test map-editor` to execute the unit tests.
