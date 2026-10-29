# Release workflow

Read this document before creating a pull request or changing release and deployment configuration.

## Pull requests

Read `defaultBase` from `nx.json` and use it as the pull request base. Use another base only when the task names one.

## Releases and deployments

Release branches and deployment workflows can affect production. Change or run them only when the user explicitly requests that work.

The workflow files under `.github/workflows/` define the active branch triggers, build configurations, and deployment branches. Inspect those files before release work. Do not rely on a copied branch map in documentation.

CI builds the applications that changed since the latest successful run of the same workflow on the branch. If CI cannot find that run, it uses the commit before the push, then `HEAD~1`. `.github/scripts/get-affected-base.sh` selects this base commit.

CI writes the `build/<project>/<environment>` branches. Do not edit those branches directly.

The workflow generates application-specific changelogs once before the build jobs
start. Each changelog includes commits that change the application, its transitive
Nx dependencies, or files under `shared/`. Builds include `CHANGELOG.md` when
generation and artifact transfer succeed. Changelog generation, upload, download,
or copy failures do not block tests, builds, or deployment.

`cliff.toml` disables remote metadata lookups for both application and release
changelogs. Their template uses only local commits and tags, so generation does
not need GitHub API access. Run the generation regression tests with
`bun test tools/changelog-generation.test.js`; they require `git-cliff` and `jq`
on `PATH` (or `GIT_CLIFF_BIN` pointing to the generator binary).

## Sentry source maps

Production builds of the apps that use Sentry make hidden source maps: the scripts do not link to them. Staging builds keep their linked source maps. The build writes a debug ID into each script and its source map.

After each build in the `BUILD` workflow, CI runs `.github/scripts/register-sentry-debug-ids.mjs`. The script adds code that registers each script's debug ID for the Sentry SDK, and updates the service worker hashes. CI then uploads the source maps to the `placeos-dev` project in the `place-technology` Sentry organisation. The upload needs the `SENTRY_AUTH_TOKEN` repository secret. Without the secret, CI does not change the build and skips the upload. An upload failure does not block the deployment.

The `BUILD` and `PR Flow` workflows delete the source maps from production builds before deployment.
