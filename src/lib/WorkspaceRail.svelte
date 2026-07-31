<script>
	import { WORKSPACES } from './workspaces.js';
	import { hyprNav, scrollToWorkspace } from './hypr-nav.svelte.js';
</script>

<aside class="workspace-rail" aria-label="Hyprland workspaces">
	<span class="rail-label mono">ws</span>
	{#each WORKSPACES as ws (ws.id)}
		<button
			type="button"
			class="ws-btn"
			class:active={hyprNav.activeWorkspaceId === ws.id}
			title="Workspace {ws.index}: {ws.label}"
			aria-label="Workspace {ws.index}, {ws.label}"
			aria-current={hyprNav.activeWorkspaceId === ws.id ? 'true' : undefined}
			onclick={() => scrollToWorkspace(ws.id)}
		>
			{ws.index}
		</button>
	{/each}
</aside>

<style>
	.workspace-rail {
		position: fixed;
		left: 0.5rem;
		top: 50%;
		transform: translateY(-40%);
		z-index: 90;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.35rem;
		padding: 0.5rem 0.35rem;
		background: rgba(30, 30, 46, 0.75);
		backdrop-filter: blur(var(--glass-blur));
		border: 1px solid var(--border);
		border-radius: var(--radius-lg);
	}

	.rail-label {
		font-size: 0.5625rem;
		text-transform: uppercase;
		letter-spacing: 0.12em;
		color: var(--text-muted);
		margin-bottom: 0.15rem;
	}

	.ws-btn {
		width: 1.75rem;
		height: 1.75rem;
		padding: 0;
		font-family: var(--font-mono);
		font-size: 0.75rem;
		font-weight: 600;
		color: var(--text-muted);
		background: transparent;
		border: 1px solid transparent;
		border-radius: 8px;
		cursor: pointer;
		transition:
			color var(--transition),
			background var(--transition),
			border-color var(--transition),
			box-shadow var(--transition);
	}

	.ws-btn:hover {
		color: var(--text-primary);
		background: var(--bg-elevated);
	}

	.ws-btn.active {
		color: var(--bg-crust);
		background: var(--accent-primary);
		border-color: var(--accent-primary);
		box-shadow: 0 0 12px rgba(203, 166, 247, 0.45);
	}

	@media (max-width: 768px) {
		.workspace-rail {
			top: auto;
			bottom: 0.75rem;
			left: 50%;
			transform: translateX(-50%);
			flex-direction: row;
			padding: 0.35rem 0.5rem;
		}

		.rail-label {
			display: none;
		}
	}
</style>
