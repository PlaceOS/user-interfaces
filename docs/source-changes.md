# Source changes

## Before editing

1. Read the relevant sections of [STANDARDS.md](STANDARDS.md).
2. Inspect the project configuration and the code around the change.
3. Identify every application and library that the change can affect.

Use the Nx project configuration as the source of truth for available targets. Do not assume that every project has the same targets.

## Verification

1. Run the focused tests for each affected application and library that has a test target.
2. Build each affected application.
3. Run other targets only when the changed behavior requires them. For example, run an end-to-end target for a changed user flow.

The change is complete when all available focused tests pass and every affected application builds. If a required command cannot run, report the command and the reason.

If Nx reports `Failed to start plugin worker`, retry the command once with `NX_ISOLATE_PLUGINS=false`.
