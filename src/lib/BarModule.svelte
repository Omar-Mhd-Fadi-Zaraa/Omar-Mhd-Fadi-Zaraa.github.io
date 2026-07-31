<script>
	/** @type {{ label: string; pressed?: boolean; onclick: (e: MouseEvent) => void; icon?: import('svelte').Snippet; children?: import('svelte').Snippet }} */
	let { label, pressed = false, onclick, icon, children } = $props();
</script>

<div class="qs-module">
	<button
		type="button"
		class="qs-module-btn"
		class:open={pressed}
		aria-label={label}
		aria-expanded={pressed}
		aria-haspopup="true"
		{onclick}
	>
		{#if icon}
			{@render icon()}
		{/if}
	</button>
	{#if pressed && children}
		<div class="qs-popover" role="dialog" aria-label={label}>
			{@render children()}
		</div>
	{/if}
</div>

<style>
	.qs-module {
		position: relative;
		display: flex;
		align-items: center;
	}

	.qs-module-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 28px;
		height: 26px;
		padding: 0;
		border: 1px solid transparent;
		border-radius: 6px;
		background: transparent;
		color: var(--qs-module-fg, var(--text-secondary));
		cursor: pointer;
		transition:
			background var(--transition),
			color var(--transition),
			border-color var(--transition);
	}

	.qs-module-btn :global(svg) {
		width: 16px;
		height: 16px;
	}

	.qs-module-btn:hover,
	.qs-module-btn.open {
		color: var(--text-primary);
		background: var(--qs-module-hover, rgba(255, 255, 255, 0.06));
		border-color: var(--border);
	}

	.qs-module-btn.open {
		color: var(--accent-primary);
	}

	.qs-popover {
		position: absolute;
		top: calc(100% + 6px);
		right: 0;
		min-width: 220px;
		max-width: min(280px, calc(100vw - 1rem));
		padding: 0.65rem;
		background: var(--qs-popover-bg, var(--bg-mantle));
		border: 1px solid var(--border);
		border-radius: var(--radius);
		box-shadow: var(--shadow);
		z-index: 300;
		animation: pop-in 0.12s ease-out;
	}

	@keyframes pop-in {
		from {
			opacity: 0;
			transform: translateY(-4px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	:global(.qs-popover-title) {
		font-family: var(--font-mono);
		font-size: 0.6875rem;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: var(--text-muted);
		margin-bottom: 0.5rem;
		padding-bottom: 0.35rem;
		border-bottom: 1px solid var(--border);
	}

	:global(.qs-popover-row) {
		display: flex;
		flex-direction: column;
		gap: 0.15rem;
		padding: 0.35rem 0;
	}

	:global(.qs-popover-row a),
	:global(.qs-popover-row button.linkish) {
		font-size: 0.8125rem;
		color: var(--text-secondary);
		text-align: left;
		background: none;
		border: none;
		padding: 0.25rem 0;
		cursor: pointer;
		font-family: inherit;
	}

	:global(.qs-popover-row a:hover),
	:global(.qs-popover-row button.linkish:hover) {
		color: var(--accent-primary);
	}

	:global(.theme-option) {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		width: 100%;
		padding: 0.4rem 0.35rem;
		border: 1px solid transparent;
		border-radius: 6px;
		background: transparent;
		color: var(--text-secondary);
		font-size: 0.8125rem;
		text-align: left;
		cursor: pointer;
		font-family: inherit;
	}

	:global(.theme-option:hover) {
		background: var(--qs-module-hover, rgba(255, 255, 255, 0.06));
	}

	:global(.theme-option.active) {
		border-color: var(--accent-tint-border);
		color: var(--accent-primary);
	}

	:global(.theme-swatch) {
		width: 14px;
		height: 14px;
		border-radius: 4px;
		border: 1px solid var(--border);
		flex-shrink: 0;
	}
</style>
