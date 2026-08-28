# Agent instructions

## Always required

- Use Bun for dependency installation and package scripts.
- Treat the development proxy as access to an external PlaceOS system. Use a local backend or mock mode unless the user explicitly requests live access.
- Read project names, targets, dependencies, and versions from the workspace configuration. Do not rely on copied lists or version numbers in documentation.
- Commit changes only when the user explicitly asks. Use the current working branch unless the task names another branch.

## Read when relevant

- [Source changes](docs/source-changes.md): Read before changing source code, Angular templates, styles, or tests.
- [Local development](docs/local-development.md): Read before serving an application or changing the development proxy.
- [Application settings](docs/settings/README.md): Read before changing runtime settings or a settings schema.
- [Mobile builds](docs/mobile-builds.md): Read before changing or running a Capacitor workflow.
- [Release workflow](docs/release-workflow.md): Read before creating a pull request or changing release and deployment configuration.
- [Signage plugin thumbnails](docs/signage-plugin-thumbnails.md): Read before changing the signage plugin thumbnail protocol.
