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

Debug panels load when first opened. The Public app loads its menu launcher
when the browser is idle after startup. Closing the driver panel does not
clear local value overrides.
