<script>
	import { profile } from '../data/portfolio.js';
	import Terminal from './Terminal.svelte';
	import { hyprNav } from './hypr-nav.svelte.js';
	import { workspaceById } from './workspaces.js';

	let charIndex = $state(0);
	let displayText = $state('');
	let showCursor = $state(true);

	const fullText = profile.tagline;

	let wsIndex = $derived(workspaceById(hyprNav.activeWorkspaceId)?.index ?? 1);

	$effect(() => {
		if (charIndex < fullText.length) {
			const timeout = setTimeout(() => {
				displayText += fullText[charIndex];
				charIndex++;
			}, 45);
			return () => clearTimeout(timeout);
		}
	});

	$effect(() => {
		const interval = setInterval(() => {
			showCursor = !showCursor;
		}, 530);
		return () => clearInterval(interval);
	});
</script>

<section class="hypr-workspace hero" id="hero">
	<div class="hypr-frame">
		<div class="hypr-tile-row hypr-tile-row--grow">
			<div class="hypr-tile hypr-tile--master hypr-tile--focused hypr-scroll">
				<p class="hero-greeting">
					<span class="prompt">hyprctl</span> activeworkspace
				</p>
				<h1 class="hero-name">
					I'm <span class="highlight">{profile.name}</span>
				</h1>
				<p class="hero-title">{profile.title}</p>
				<p class="hero-tagline">
					{displayText}<span class="cursor" class:blink={showCursor}>▋</span>
				</p>

				<div class="hero-actions">
					<a href="#projects" class="btn btn-primary">
						<span class="prompt">./</span>view_projects
					</a>
					<a href="#contact" class="btn btn-outline">
						<span class="prompt">$</span>contact --email
					</a>
				</div>

				<div class="hero-meta">
					<span class="meta-item">
						<span class="status-dot"></span>
						Available for work
					</span>
					<span class="meta-item mono ws-badge">WS · {wsIndex}</span>
					<span class="meta-item mono stack">Hyprland · Quickshell</span>
					<span class="meta-item mono">{profile.location}</span>
				</div>
			</div>

			<div class="hypr-tile hypr-tile--stack hypr-scroll terminal-tile">
				<Terminal lines={profile.terminalLines} animate />
			</div>
		</div>
	</div>
</section>

<style>
	.hero-greeting {
		font-family: var(--font-mono);
		font-size: 0.875rem;
		color: var(--text-muted);
		margin-bottom: 1rem;
	}

	.prompt {
		color: var(--accent-secondary);
		margin-right: 0.35rem;
	}

	.hero-name {
		margin-bottom: 0.5rem;
	}

	.highlight {
		color: var(--accent-primary);
	}

	.hero-title {
		font-family: var(--font-mono);
		font-size: 1rem;
		color: var(--accent-highlight);
		margin-bottom: 1.25rem;
	}

	.hero-tagline {
		font-size: 1.125rem;
		color: var(--text-secondary);
		min-height: 1.75rem;
		margin-bottom: 2rem;
	}

	.cursor {
		color: var(--accent-primary);
		font-weight: 400;
	}

	.cursor.blink {
		opacity: 1;
	}

	.cursor:not(.blink) {
		opacity: 0;
	}

	.hero-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		margin-bottom: 2rem;
	}

	.hero-meta {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		font-size: 0.875rem;
		color: var(--text-muted);
	}

	.meta-item {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.status-dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: var(--accent-secondary);
		box-shadow: 0 0 8px var(--accent-secondary);
		animation: pulse 2s ease infinite;
	}

	.ws-badge {
		padding: 0.15rem 0.5rem;
		border-radius: var(--radius-pill);
		background: var(--accent-tint);
		border: 1px solid var(--accent-tint-border);
		color: var(--accent-primary);
		font-size: 0.75rem;
	}

	.stack {
		color: var(--text-muted);
		font-size: 0.8125rem;
	}

	.terminal-tile {
		padding: 0.65rem;
		background: transparent;
		border: none;
	}

	.terminal-tile::before {
		display: none;
	}

	@keyframes pulse {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0.5;
		}
	}
</style>
