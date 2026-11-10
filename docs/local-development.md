# Local development

Read this document before serving an application or changing the development proxy.

## Proxy safety

`config/proxy.conf.js` sends API and authentication requests to the shared development system by default. Treat that system as live. Use mock mode or a local PlaceOS backend unless the user explicitly requests access to an external system.

Use environment variables to select a local backend. Keep the shared proxy default unchanged.

```bash
PLACE_PROXY_DOMAIN=localhost:8443 \
PLACE_PROXY_VALID_SSL=false \
bun run nx -- serve <project>
```

Set `PLACE_PROXY_SECURE=false` when the local backend uses HTTP.

## Mock mode

Open the application with `?mock=true` to enable mock mode before application setup.

```text
http://localhost:<port>/?mock=true
```

Use `Ctrl + Alt/Option + Shift + M` in the application to switch mock mode. The application reloads after the switch.

Mock mode keeps your changes for the browser session. The mocks save changed data in `localStorage` after each write request and after each command to a mock system. A reload keeps the changes.

All tabs on the same origin share the changes, also when the tabs show different applications. For example, a booking that you change in Workplace is also changed in the Concierge mock data in another tab. The other tab does not reload. It shows the change on its next request, for example when it polls or when you go to a different page. Commands to a mock system, such as a lighting level, show in the other tab immediately.

Each `nx serve` uses a different port, which is a different origin. To share changes between applications, serve them from one origin, for example the `dist/apps` folder from one static server.

To start again with the generated data, close the browser or remove the `PLACEOS.mock.*` keys from local storage.

Some items do not work fully in mock mode:

- File uploads are not mocked. They go to the network, which is the development proxy when you use `nx serve`.
- Map AI shows as not available.
- The `public` and `map-studio` applications have no mock mode.

When you add a mock endpoint, import `registerMockEndpoint` from `libs/mocks/src/lib/session.ts`, not from `@placeos/ts-client`. Call `persist` (or `persistById` for a large generated list) for each dataset that a write request changes.

## External backend authentication

OAuth redirects do not work through the local development server. Use the basic authentication form at `/login/?continue=/` when the user requests an external backend. Treat access tokens as secrets.

## Nx targets

Inspect a project before running a target:

```bash
bun run nx -- show project <project>
```

Run only a target listed in that project configuration.

If hot module replacement causes browser errors, serve the project with `--no-hmr`.

## Debugging panels

Right-click within the bottom-left 32-pixel square of an application to open
Settings, Driver bindings, or Console. The corner has no visible control and
does not block normal left-clicks or taps. Keyboard users can focus the
"Open debugging tools" button and press Enter.

The menu opens one panel at a time. These shortcuts also toggle the panels:

- Settings: `Ctrl + Alt + Shift + S`
- Driver bindings: `Ctrl + Alt + Shift + B`
- Console: `Ctrl + Backquote`

Debug panels load when first opened. Each app loads the menu launcher when
the browser is idle after startup. For admin and support users, the launcher
then starts to record console logs, bindings, and driver commands, so the
panels also show what happened before they opened. Closing the driver panel
does not clear local value overrides. The launcher shows the number of active
setting overrides.
