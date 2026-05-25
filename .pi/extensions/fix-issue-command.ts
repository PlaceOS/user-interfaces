import { existsSync, readFileSync } from "node:fs";
import * as path from "node:path";
import type { ExtensionAPI, ExtensionCommandContext } from "@earendil-works/pi-coding-agent";

const ISSUE_KEY_PATTERN = /^[A-Z][A-Z0-9]+-[0-9]+$/;

function stripFrontmatter(markdown: string): { description?: string; body: string } {
	if (!markdown.startsWith("---\n")) return { body: markdown };
	const end_index = markdown.indexOf("\n---", 4);
	if (end_index === -1) return { body: markdown };

	const frontmatter = markdown.slice(4, end_index).trim();
	const body = markdown.slice(end_index + 4).replace(/^\n+/, "");
	const description_match = frontmatter.match(/^description:\s*(.+)$/m);
	const description = description_match?.[1]?.replace(/^['"]|['"]$/g, "").trim();
	return { description, body };
}

function splitArgs(input: string): string[] {
	const args: string[] = [];
	let current = "";
	let quote: '"' | "'" | undefined;
	let escaped = false;

	for (const char of input) {
		if (escaped) {
			current += char;
			escaped = false;
			continue;
		}

		if (char === "\\" && quote !== "'") {
			escaped = true;
			continue;
		}

		if ((char === '"' || char === "'") && !quote) {
			quote = char;
			continue;
		}

		if (char === quote) {
			quote = undefined;
			continue;
		}

		if (/\s/.test(char) && !quote) {
			if (current) {
				args.push(current);
				current = "";
			}
			continue;
		}

		current += char;
	}

	if (escaped) current += "\\";
	if (current) args.push(current);
	return args;
}

function fenced(value: string): string {
	return `\n\`\`\`text\n${value.trim() || "(none)"}\n\`\`\``;
}

function findOpencodeCommandPath(cwd: string): string | undefined {
	let current_dir = path.resolve(cwd);
	while (true) {
		const candidate = path.join(current_dir, ".opencode", "commands", "fix-issue.md");
		if (existsSync(candidate)) return candidate;
		const parent_dir = path.dirname(current_dir);
		if (parent_dir === current_dir) return undefined;
		current_dir = parent_dir;
	}
}

async function execText(pi: ExtensionAPI, command: string, args: string[], ctx: ExtensionCommandContext, cwd = ctx.cwd): Promise<string> {
	const result = await pi.exec(command, args, { cwd, timeout: 10_000 });
	if (result.code !== 0) return (result.stderr || result.stdout).trim();
	return result.stdout.trim();
}

async function buildContext(pi: ExtensionAPI, args: string, ctx: ExtensionCommandContext): Promise<string> {
	const repo_root_output = await execText(pi, "git", ["rev-parse", "--show-toplevel"], ctx);
	const repo_root = repo_root_output && !repo_root_output.toLowerCase().includes("fatal:") ? repo_root_output : ctx.cwd;
	const repo_name = path.basename(repo_root);
	const current_branch = await execText(pi, "git", ["branch", "--show-current"], ctx, repo_root);
	const current_worktree = await execText(pi, "git", ["rev-parse", "--show-toplevel"], ctx, repo_root);
	const worktree_directory = path.join(repo_root, ".worktrees");
	const tester_path = path.join(repo_root, "config", "testers");
	const tester_config = existsSync(tester_path)
		? readFileSync(tester_path, "utf8").split(/\r?\n/).slice(0, 20).join("\n")
		: "";
	const git_status = await execText(pi, "git", ["status", "--short"], ctx, repo_root);
	const positional_args = splitArgs(args);
	const first_positional_arg = positional_args[0] ?? "";

	return `## Context

- **Repository Name:** \`${repo_name}\`
- **Repository Root:** \`${repo_root}\`
- **Current Branch:** \`${current_branch || "(none)"}\`
- **Current Worktree:** \`${current_worktree || repo_root}\`
- **Worktree Directory:** \`${worktree_directory}\`
- **Tester Config:**${fenced(tester_config)}
- **Git Status:**${fenced(git_status)}
- **Raw Arguments:** \`${args || ""}\`
- **First Positional Argument:** \`${first_positional_arg}\`
- **First Positional Argument Matches Issue Key:** \`${ISSUE_KEY_PATTERN.test(first_positional_arg) ? "yes" : "no"}\``;
}

function adaptPromptForPi(body: string, context_block: string): string {
	let prompt = body.replace(/## Context[\s\S]*?(?=\n## Argument Handling)/, context_block);
	prompt = prompt.replace(
		"Use `apply_patch` for manual edits.",
		"Use Pi's `edit` tool for precise manual edits and `write` for new files. Do not use `apply_patch` unless it is explicitly available in the environment.",
	);
	prompt = prompt.replace(
		"Run verification with separate sub-agents:",
		"Run verification with separate Pi sub-agents using the `pi_subtask` tool when available:",
	);
	return `You are executing the project /fix-issue command in Pi. Follow this command prompt end-to-end.\n\n${prompt}`;
}

export default function (pi: ExtensionAPI) {
	pi.registerCommand("fix-issue", {
		description: "Start a Jira issue workflow for work assigned to the current user and tagged with this repository name.",
		handler: async (args, ctx) => {
			await ctx.waitForIdle();

			const command_path = findOpencodeCommandPath(ctx.cwd);
			if (!command_path) {
				ctx.ui.notify("Unable to find .opencode/commands/fix-issue.md", "error");
				return;
			}

			const { description, body } = stripFrontmatter(readFileSync(command_path, "utf8"));
			const context_block = await buildContext(pi, args ?? "", ctx);
			const prompt = adaptPromptForPi(body, context_block);

			ctx.ui.notify(description || "Starting fix-issue workflow", "info");
			pi.sendUserMessage(prompt);
		},
	});
}
