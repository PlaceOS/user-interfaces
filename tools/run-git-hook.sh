#!/bin/sh

if command -v bun >/dev/null 2>&1; then
    exec bun ./tools/git-hooks.js "$@"
fi

# GUI Git clients often do not load the shell profile that adds Bun to PATH.
hook_bun="${BUN_INSTALL:-$HOME/.bun}/bin/bun"
if [ -x "$hook_bun" ]; then
    exec "$hook_bun" ./tools/git-hooks.js "$@"
fi

if command -v node >/dev/null 2>&1; then
    exec node ./tools/git-hooks.js "$@"
fi

echo 'Git hooks need Bun or Node.js. Add one to your Git client PATH, or set BUN_INSTALL to the Bun installation directory.' >&2
exit 1
