# Running the e2e suite on a self-hosted macOS runner

How `.github/workflows/e2e-advisory.yml` is set up. Written from an actual working
install rather than from documentation, so the gotchas below are ones that really bit.

**Current runner:** `placeos-e2e-mac` — macOS 26.1, Intel x86_64, 12 CPU / 16 GB.
Labels `self-hosted, macOS, X64, placeos-e2e`. Docker via **Colima**, not Docker Desktop.

---

## No inbound access is needed

The usual worry with a machine on a corporate network is "how will GitHub reach it".
It doesn't. **The runner opens an outbound HTTPS long-poll to GitHub and waits for
work.** No port forwarding, no inbound firewall rule, no static IP, no VPN required
for CI to function.

Nor does anyone else need to reach it:

- **Committers don't.** A push from anywhere triggers the workflow on GitHub, which
  queues a job the runner collects over its own outbound connection.
- **GitHub doesn't.** It never initiates a connection to the machine.
- **You only do** to administer it — and only then is something like Tailscale useful.

What it *does* need is outbound 443. Check that first:

```bash
for host in github.com api.github.com codeload.github.com \
            objects.githubusercontent.com release-assets.githubusercontent.com \
            pipelines.actions.githubusercontent.com \
            registry-1.docker.io auth.docker.io production.cloudflare.docker.com; do
    printf '%-48s ' "$host"
    curl -sS -o /dev/null -m 10 -w '%{http_code}\n' "https://$host" 2>&1 | tail -1
done
```

Any HTTP status (401/403/404 included) means reachable — you are looking for
timeouts, not 200s.

- **github.com / api / codeload / release-assets** — registration, job dispatch,
  checkout, the runner tarball, and cloning `PlaceOS/www-core` during bring-up.
- **registry-1.docker.io / auth.docker.io / production.cloudflare.docker.com** —
  pulling the PlaceOS images. The one people forget; without it the stack cannot start.

> A slow link looks like a block. Colima's first VM image download failed here with a
> timeout that read like a firewall; the host was fine, just slow. Retry before
> concluding the network is at fault.

**Behind a proxy:** set `HTTPS_PROXY` / `HTTP_PROXY` / `NO_PROXY` before `config.sh`
and in `~/actions-runner/.env`. Colima needs it separately, in its own config.

---

## Setup

### 1. Docker, without Docker Desktop

Docker Desktop is a GUI app, which drags in a login-session requirement for no
benefit on a headless box. **Colima** gives a normal `docker` + `docker compose`
against a Lima VM, entirely from the CLI, startable over SSH.

```bash
brew install colima docker docker-compose oven-sh/bun/bun node@24
```

**Register the compose plugin** — brew installs it but does not wire it up, and every
script here uses `docker compose` (v2 subcommand syntax). Docker Desktop bundled this,
so it is easy to miss:

```bash
mkdir -p ~/.docker
cat > ~/.docker/config.json <<'EOF'
{ "cliPluginsExtraDirs": ["/usr/local/lib/docker/cli-plugins"] }
EOF
```

(`/usr/local` is the Intel brew prefix. On Apple Silicon use `/opt/homebrew`.)

```bash
colima start --cpu 6 --memory 10 --disk 80
brew services start colima          # launchd agent, so it comes back on login

docker version && docker compose version && docker run --rm hello-world
```

Verified on this VM, so no extra provisioning is needed:

| | |
|---|---|
| `vm.max_map_count` | **1048576** — above Elasticsearch's 262144, so no sysctl step |
| cgroup version | **v2** — the condition that crashes ES 7.17.6; the stack pins 7.17.28 for exactly this reason. Do not downgrade it. |
| Published ports | forwarded to the host, so `localhost:9443` works |

### 2. Register the runner

Needs **admin on the repo**.

```bash
gh api -X POST repos/PlaceOS/user-interfaces/actions/runners/registration-token --jq .token

mkdir -p ~/actions-runner && cd ~/actions-runner
V=2.336.0
ARCH=osx-x64        # Intel. Apple Silicon: osx-arm64  (check with `uname -m`)
curl -sS -o runner.tar.gz -L --retry 3 --retry-all-errors \
  "https://github.com/actions/runner/releases/download/v${V}/actions-runner-${ARCH}-${V}.tar.gz"
tar xzf runner.tar.gz && rm runner.tar.gz

# The LABEL IS LOAD-BEARING — the workflow targets `placeos-e2e`.
./config.sh --unattended --replace \
  --url https://github.com/PlaceOS/user-interfaces \
  --token <TOKEN> --name placeos-e2e-mac --labels placeos-e2e --work _work
```

> `svc.sh` is **not** in the tarball — `config.sh` generates it. Register before you
> try to install the service.

### 3. Install the service

```bash
cd ~/actions-runner
# The launchd agent gets a minimal environment; brew's bin dir must be on PATH or
# jobs fail with `docker: command not found`.
echo 'PATH=/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin' >> .env
./svc.sh install && ./svc.sh start && ./svc.sh status
```

Confirm it shows **Idle** under Settings → Actions → Runners.

Watching it interactively while setting up? Use `./run.sh` instead — same behaviour,
logs in front of you, Ctrl-C to stop.

---

## What the workflow does differently because it is self-hosted

| Choice | Why |
|---|---|
| **No `actions/cache`, `setup-node` or `setup-bun`** | Those are right on a hosted runner that starts from a bare VM. Here they were the biggest cost in the job: the first run spent **9.1 min** uploading `node_modules` and **3.1 min** saving the bun cache out of 19.2 min total, while the suite itself took 1.0 min. The workspace and toolchain persist on this machine, so the toolchain is provisioned once (step 1) and nothing is shipped to a remote cache. |
| **Reclaim step** | A self-hosted machine is not a fresh VM. A previous aborted run can leave the stack up or port 4214 held, and that failure looks nothing like its cause. |
| **No `vm.max_map_count` bump** | Required on hosted Linux, meaningless here — the value lives in Colima's VM and is already high. Restore it if reverting to `ubuntu-latest`. |
| **`E2E_WORKERS: 2`** | Lower than the local default of 4. The machine also hosts ~10 containers, a dev server and browsers; less contention means fewer failures that are about the machine rather than the code. |
| **No `pull_request` trigger** | This repo is **public**. A fork PR would run arbitrary code on a machine on an internal network. Every trigger requires write access. Do not add it back without moving to `ubuntu-latest` or making the repo private. |

**Trade-off worth knowing:** dropping remote caching means runs are no longer hermetic
— machine state matters. `bun install --frozen-lockfile` still runs every job and will
repair a broken `node_modules`, and the reclaim step handles stale containers, but if
something inexplicable happens, machine state is the first thing to suspect.

**Measured:** ~2.8 min job execution, ~3 min wall clock. The suite is ~60s of that.

---

## Operating it

```bash
cd ~/actions-runner
./svc.sh status                        # is it running
tail -f _diag/Runner_*.log             # runner logs
cd <repo>/e2e/stack && ./down.sh --volumes   # reset the stack by hand
docker system prune -a --volumes       # reclaim disk (stack rebuilds from nothing)
```

### Known limitation: it will not survive a reboot unattended

Colima and the runner are both launchd **agents**, which need a logged-in user
session, and there is currently **no auto-login**. After a reboot nothing starts until
someone logs in. Accepted for now because the machine stays on; the fix when needed is
either to enable auto-login or to convert both to system-level LaunchDaemons.

There is also no ordering between the two agents, so "runner online but Docker not
ready yet" is possible on a cold start — untested, and it would present as a
stack-bring-up failure.

## Troubleshooting

| Symptom | Cause / fix |
|---|---|
| Runner **Offline** | Service stopped (`./svc.sh status`), machine asleep or rebooted (see above), or outbound 443 blocked. Unrelated to whether anyone can reach the machine. |
| `docker: command not found` | Service PATH — step 3. |
| `docker compose` not a valid command | The compose plugin is not registered — step 1. |
| Hangs on **Bring up the local PlaceOS stack** | `up.sh` prints `compose ps` plus every service's logs on failure; read the step output first. Usually Colima not running (`colima status`) or the registry unreachable. |
| `port is already allocated` | Previous run died. The reclaim step handles it; otherwise `./down.sh --volumes`. |
| `elastic-1 is unhealthy` | Give Colima more memory. ES is pinned to 7.17.28 to avoid the cgroup v2 JDK crash — do not downgrade. |
| Can't SSH the machine from the LAN | Expected and irrelevant to CI. It sits on a different subnet with inter-VLAN traffic filtered; use Tailscale for admin. |

## Reverting to GitHub-hosted

1. `runs-on: [self-hosted, placeos-e2e]` → `runs-on: ubuntu-latest`
2. Restore the `sudo sysctl -w vm.max_map_count=262144` step.
3. Restore `actions/cache` + `setup-node` + `setup-bun` (a bare VM needs them).
4. The reclaim step becomes unnecessary but harmless.
