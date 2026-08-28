# Release workflow

Read this document before creating a pull request or changing release and deployment configuration.

## Pull requests

Read `defaultBase` from `nx.json` and use it as the pull request base. Use another base only when the task names one.

## Releases and deployments

Release branches and deployment workflows can affect production. Change or run them only when the user explicitly requests that work.

The workflow files under `.github/workflows/` define the active branch triggers, build configurations, and deployment branches. Inspect those files before release work. Do not rely on a copied branch map in documentation.

CI writes the `build/<project>/<environment>` branches. Do not edit those branches directly.
