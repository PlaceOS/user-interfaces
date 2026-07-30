# Running the e2e suite on a self-hosted macOS runner

Runbook for pointing `.github/workflows/e2e-advisory.yml` at a Mac on the internal
network instead of a GitHub-hosted runner.

---

## First: no inbound access is needed

The common worry with a machine on a corporate wifi is "how will GitHub reach it".
It doesn't. **The runner opens an outbound HTTPS long-poll to GitHub and waits for
work.** No port forwarding, no inbound firewall rule, no static IP, no VPN, no
tunnel.

What it *does* need is **outbound 443** to a handful of hosts. If the network
filters or proxies outbound traffic, that is the only thing to sort out.

### Step 0 — pre-flight, before installing anything

Run this on the runner machine. It answers the network question in about ten
seconds, and if it fails you have saved yourself the whole setup.

```bash
for host in github.com api.github.com codeload.github.com \
            objects.githubusercontent.com pipelines.actions.githubusercontent.com \
            registry-1.docker.io auth.docker.io production.cloudflare.docker.com; do
    printf '%-46s ' "$host"
    curl -sS -o /dev/null -m 10 -w '%{http_code}\n' "https://$host" 2>&1 | tail -1
done
```

Any HTTP status (including 401/404) means the host is reachable — you are looking
for connection failures and timeouts, not for 200s.

- **`github.com` / `api.github.com` / `codeload.github.com`** — runner registration,
  job dispatch, checkout, and cloning `PlaceOS/www-core` during stack bring-up.
- **`objects.githubusercontent.com` / `pipelines.actions.githubusercontent.com`** —
  action downloads, log upload, artifact upload.
- **`registry-1.docker.io` / `auth.docker.io` / `production.cloudflare.docker.com`** —
  pulling the PlaceOS images. This is the one people forget; without it the stack
  cannot start.

**If there is an outbound proxy**, the runner supports it. Set these before
`config.sh` *and* make sure the service sees them (see Step 3):

```bash
export HTTPS_PROXY=http://proxy.internal:8080
export HTTP_PROXY=http://proxy.internal:8080
export NO_PROXY=localhost,127.0.0.1
```

Docker Desktop needs the proxy configured separately, in
**Settings → Resources → Proxies**.

---

### Who needs to be on the runner's network? Nobody.

Worth stating plainly, because it is the natural thing to worry about and it is not a
constraint:

- **Committers do not.** A push from anywhere triggers the workflow on GitHub, which
  queues a job, which the runner collects over its own outbound connection. Where the
  author sits is irrelevant.
- **GitHub does not.** It never initiates a connection to the machine.
- **You only do** if you want to administer the box directly — install it, read logs,
  restart the service.

So the runner can live on an internal network that most of the team cannot reach, and
CI still works for all of them.

### Setting it up over SSH: read this first

macOS ships with Remote Login **off**, so SSH may need enabling
(System Settings → General → Sharing → Remote Login). But even with SSH working,
**two of the steps below cannot be completed from an SSH-only session**:

- **Docker Desktop is a GUI app.** `open -a Docker` over SSH only succeeds if that
  user already has an active GUI session (logged in at the console). Over SSH alone
  it will not start, and the stack step will fail with the daemon unreachable.
- **`svc.sh install` creates a launchd *agent***, which belongs to a GUI session. Run
  from a bare SSH login it may install but not run when you expect.

Practical order: do the GUI-dependent parts once at the machine (enable auto-login,
set Docker Desktop to start on login, start it), after which SSH is fine for
everything else — registering the runner, service control, logs.

## Step 1 — prerequisites

| | |
|---|---|
| **Docker Desktop** | Installed, running, and set to **start on login**. Give it **≥ 8 GB memory and ≥ 4 CPUs** (Settings → Resources) — the stack is 10 containers including Elasticsearch and Postgres, and the job also runs an Angular build and a browser. |
| **Xcode Command Line Tools** | `xcode-select --install` |
| **git** | Comes with the CLT. |
| Node / Bun / Playwright browsers | **Not needed up front** — the workflow installs them (`setup-node`, `setup-bun`, `playwright install`). |

Sanity check:

```bash
docker run --rm hello-world     # proves Docker works AND the registry is reachable
sw_vers && uname -m             # note the arch for Step 2
```

---

## Step 2 — register the runner

You need **admin on the repo** to add a runner.

```bash
# 1. Get a registration token (valid ~1 hour)
gh api -X POST repos/PlaceOS/user-interfaces/actions/runners/registration-token --jq .token

# 2. Download the runner. Pick the arch from `uname -m`:
#      arm64  -> osx-arm64        x86_64 -> osx-x64
mkdir -p ~/actions-runner && cd ~/actions-runner
RUNNER_VERSION=2.336.0
RUNNER_ARCH=osx-arm64   # or osx-x64
curl -o runner.tar.gz -L \
  "https://github.com/actions/runner/releases/download/v${RUNNER_VERSION}/actions-runner-${RUNNER_ARCH}-${RUNNER_VERSION}.tar.gz"
tar xzf runner.tar.gz && rm runner.tar.gz

# 3. Configure. The LABEL IS LOAD-BEARING — the workflow targets `placeos-e2e`.
./config.sh \
  --url https://github.com/PlaceOS/user-interfaces \
  --token <TOKEN_FROM_STEP_1> \
  --name placeos-e2e-mac \
  --labels placeos-e2e \
  --work _work
```

(Or generate the token via **Settings → Actions → Runners → New self-hosted
runner**, which shows the same commands pre-filled.)

The default `self-hosted` label is added automatically; `runs-on` in the workflow
is `[self-hosted, placeos-e2e]`.

---

## Step 3 — run it as a service, and the three macOS gotchas

```bash
cd ~/actions-runner
./svc.sh install
./svc.sh start
./svc.sh status
```

Then confirm it shows **Idle** under Settings → Actions → Runners.

**These are the things that actually catch people out on macOS:**

1. **Docker Desktop needs a logged-in GUI session.** The runner service is a
   launchd *agent*, and Docker Desktop is a GUI app — neither runs when nobody is
   logged in. If the Mac is headless, enable automatic login (System Settings →
   Users & Groups → Automatic login) and leave the session logged in. A locked
   screen is fine; a logged-out one is not.

2. **A sleeping Mac runs no nightlies.** Prevent system sleep:

   ```bash
   sudo pmset -a sleep 0            # never sleep the system
   sudo pmset -a disablesleep 1     # laptops: also ignore lid close
   pmset -g | grep -E 'sleep|disablesleep'
   ```

   Display sleep is fine and worth leaving on.

3. **The service gets a minimal environment.** If a job reports `docker: command
   not found`, the service cannot see Docker's CLI. Fix by adding it to the
   runner's env file, then restarting the service:

   ```bash
   cd ~/actions-runner
   echo 'PATH=/usr/local/bin:/opt/homebrew/bin:/usr/bin:/bin:/usr/sbin:/sbin' >> .env
   # add proxy vars here too, if you needed them in Step 0
   ./svc.sh stop && ./svc.sh start
   ```

Prefer to watch it interactively while setting up? Skip the service and run
`./run.sh` in a terminal — same behaviour, logs in front of you, stops on Ctrl-C.

---

## Step 4 — trigger a run

The workflow already targets the runner. Nothing to edit.

```bash
# From a clone of the repo, on the e2e branch:
git commit --allow-empty -m "ci: exercise the self-hosted runner" && git push
gh run watch
```

The `push: ['e2e/**']` trigger fires on any branch under `e2e/`.
`workflow_dispatch` also works, but only once this file is on `develop`.

**Expected on a first run:** ~10–15 min, most of it pulling ~10 Docker images. Then
~4–5 min per run once the images are cached locally.

---

## Step 5 — the nightly needs a merge to `develop`

> **GitHub only runs `schedule` triggers from the default branch.** The nightly
> will not fire from `e2e/ci-verify` no matter what the cron says.

So the track record does not start accumulating until this workflow is merged to
`develop`. Until then, use pushes or manual dispatch. Worth knowing, because "the
nightly silently never ran" is an easy thing to not notice for a fortnight.

---

## Security posture — why there is no `pull_request` trigger

`PlaceOS/user-interfaces` is a **public** repo, and GitHub's own guidance is not to
use self-hosted runners with public repositories: a `pull_request` trigger lets
anyone's fork run arbitrary code on the runner. Here that runner is a machine on an
internal network, so the blast radius is the network, not just a throwaway VM.

The workflow therefore triggers **only** on `schedule`, `workflow_dispatch`, and
pushes to `e2e/**` — all of which require write access to this repo. There is no
path for fork code to reach the machine.

**Do not add `pull_request` back** without either moving the job to
`runs-on: ubuntu-latest` or making the repo private.

Worth doing as defence in depth, in case someone adds it later:

- **Settings → Actions → General → Fork pull request workflows** → require approval
  for **all** outside collaborators.
- Run the runner under a **dedicated macOS user account** with no access to
  credentials or source you care about, and keep no secrets on the machine. The
  workflow needs none.

---

## Troubleshooting

| Symptom | Cause / fix |
|---|---|
| Runner shows **Offline** | Service not running (`./svc.sh status`), machine asleep, or outbound 443 blocked — re-run Step 0. Note this is about the runner's *outbound* connection; whether anyone can reach the machine is unrelated. |
| Can't ping / SSH the machine from elsewhere on the network | Expected and harmless for CI. macOS has Remote Login off by default and its firewall drops ICMP; some wifi also enforces client isolation. Only affects direct administration. |
| `docker: command not found` | Service PATH — gotcha 3 above. |
| Job hangs on **Bring up the local PlaceOS stack** | Docker Desktop not running (no GUI session — gotcha 1), or registry unreachable. `up.sh` prints `compose ps` plus every service's logs on failure, so read the step output first. |
| `port is already allocated` / webServer port in use | A previous run died. The **Reclaim the machine** step handles this automatically; if it recurs, run `e2e/stack/down.sh --volumes` by hand. |
| `elastic-1 is unhealthy` | Give Docker Desktop more memory. Elasticsearch is pinned to 7.17.28 specifically to avoid the cgroup v2 JDK crash — do not downgrade it. |
| Disk filling up | Volumes accumulate across runs. `docker system prune -a --volumes` (safe — the stack is rebuilt from nothing each run). |
| Two runs at once | One runner takes one job at a time; the second queues. That is the desired behaviour: the stack binds fixed ports and cannot run twice. |

## Reverting to GitHub-hosted

In `.github/workflows/e2e-advisory.yml`:

1. `runs-on: [self-hosted, placeos-e2e]` → `runs-on: ubuntu-latest`
2. Restore the `sysctl -w vm.max_map_count=262144` step (required on Linux, a no-op
   on macOS — see the comment in the workflow).
3. The **Reclaim the machine** step becomes unnecessary but is harmless.
