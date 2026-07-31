<script>
	const distroFacts = [
		{ label: 'Distro', value: 'Arch Linux' },
		{ label: 'Compositor', value: 'Hyprland (Wayland)' },
		{ label: 'Shell UI', value: 'Quickshell' },
		{ label: 'Terminal', value: 'Kitty' },
		{ label: 'Editor', value: 'Neovim' },
		{ label: 'Blur / gaps', value: 'Hyprland decoration' }
	];

	const commands = [
		{ cmd: 'hyprctl monitors', desc: 'Layout outputs like your monitor config' },
		{ cmd: 'hyprctl workspaces', desc: 'Tiled workspaces on each head' },
		{ cmd: 'hyprctl activewindow', desc: 'Focused window class & title' },
		{ cmd: 'quickshell log', desc: 'Debug the Quickshell bar & modules' },
		{ cmd: 'journalctl -u hyprland', desc: 'Compositor session logs' },
		{ cmd: 'pacman -Q hyprland quickshell', desc: 'Arch packages for the stack' }
	];

	let activeCommand = $state(0);

	/** @param {number} index */
	function selectCommand(index) {
		activeCommand = index;
	}
</script>

<section class="hypr-workspace section linux" id="linux">
	<div class="hypr-frame">
		<div class="hypr-tile hypr-tile--chrome">
			<p class="section-label">Desktop</p>
			<h2 class="section-title">Hyprland + Quickshell</h2>
			<p class="section-desc">
				Arch on Wayland with Hyprland tiling and a Quickshell bar — blur, gaps, and keybinds
				instead of a traditional desktop.
			</p>
		</div>

		<div class="hypr-tile-row hypr-tile-row--grow">
			<div class="hypr-tile hypr-scroll">
				<h3>
					<span class="hypr-icon">◆</span> hyprland.conf
				</h3>
				<ul class="setup-list">
					{#each distroFacts as fact (fact.label)}
						<li>
							<span class="key mono">{fact.label}</span>
							<span class="value">{fact.value}</span>
						</li>
					{/each}
				</ul>
			</div>

			<div class="hypr-tile hypr-tile--focused hypr-scroll">
				<h3>
					<span class="prompt">qs</span> modules
				</h3>
				<ul class="command-list" role="listbox" aria-label="Common commands">
					{#each commands as cmd, i (cmd.cmd)}
						<li>
							<button
								class="command-item"
								class:active={activeCommand === i}
								onclick={() => selectCommand(i)}
								role="option"
								aria-selected={activeCommand === i}
							>
								<span class="cmd mono">{cmd.cmd}</span>
								<span class="desc">{cmd.desc}</span>
							</button>
						</li>
					{/each}
				</ul>

				<div class="command-preview">
					<span class="preview-prompt mono">$ {commands[activeCommand].cmd}</span>
					<p class="preview-output">{commands[activeCommand].desc}</p>
				</div>
			</div>

			<div class="hypr-tile hypr-scroll">
				<h3>Philosophy</h3>
				<blockquote>
					"Tile windows with Hyprland, surface status with Quickshell, and keep the whole
					stack declarative — from pacman to panel modules."
				</blockquote>
				<div class="philosophy-points">
					<div class="point">
						<span class="point-icon">▦</span>
						<div>
							<strong>Tiling & keybinds</strong>
							<p>Workspaces, gaps, and animations defined once in Hyprland config.</p>
						</div>
					</div>
					<div class="point">
						<span class="point-icon">◈</span>
						<div>
							<strong>Quickshell bar</strong>
							<p>Workspaces, media, and system modules in a Qt6 shell on Wayland.</p>
						</div>
					</div>
					<div class="point">
						<span class="point-icon">◎</span>
						<div>
							<strong>Blur & layers</strong>
							<p>Frosted windows and layered surfaces — the same vibe as this site.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	h3 {
		font-family: var(--font-mono);
		font-size: 0.9375rem;
		color: var(--accent-cyan);
		margin-bottom: 1rem;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.hypr-icon {
		color: var(--accent-primary);
		font-size: 0.875rem;
	}

	.prompt {
		color: var(--accent-secondary);
	}

	.setup-list {
		list-style: none;
		display: grid;
		gap: 0.65rem;
	}

	.setup-list li {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-bottom: 0.65rem;
		border-bottom: 1px solid var(--border);
		font-size: 0.8125rem;
	}

	.setup-list li:last-child {
		border-bottom: none;
		padding-bottom: 0;
	}

	.key {
		color: var(--text-muted);
		font-size: 0.75rem;
	}

	.value {
		color: var(--text-primary);
		font-weight: 500;
		text-align: right;
	}

	.command-list {
		list-style: none;
		display: grid;
		gap: 0.35rem;
		margin-bottom: 1rem;
	}

	.command-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		padding: 0.5rem 0.65rem;
		background: transparent;
		border: 1px solid transparent;
		border-radius: var(--radius);
		cursor: pointer;
		text-align: left;
		transition:
			background var(--transition),
			border-color var(--transition);
	}

	.command-item:hover {
		background: var(--bg-elevated);
	}

	.command-item.active {
		background: var(--accent-tint);
		border-color: var(--accent-tint-border);
	}

	.cmd {
		color: var(--accent-secondary);
		font-size: 0.75rem;
	}

	.desc {
		font-size: 0.6875rem;
		color: var(--text-muted);
		text-align: right;
		max-width: 45%;
	}

	.command-preview {
		padding: 0.875rem;
		background: var(--bg-terminal);
		border-radius: var(--radius);
		border: 1px solid var(--border);
	}

	.preview-prompt {
		color: var(--accent-secondary);
		font-size: 0.8125rem;
		display: block;
		margin-bottom: 0.5rem;
	}

	.preview-output {
		font-size: 0.8125rem;
		color: var(--text-secondary);
	}

	blockquote {
		font-size: 0.875rem;
		color: var(--text-secondary);
		border-left: 3px solid var(--accent-primary);
		padding-left: 0.875rem;
		margin-bottom: 1rem;
		font-style: italic;
	}

	.philosophy-points {
		display: grid;
		gap: 0.75rem;
	}

	.point {
		display: flex;
		gap: 0.65rem;
	}

	.point-icon {
		font-size: 1rem;
		line-height: 1;
		color: var(--accent-primary);
	}

	.point strong {
		display: block;
		font-size: 0.8125rem;
		margin-bottom: 0.2rem;
	}

	.point p {
		font-size: 0.75rem;
		color: var(--text-muted);
		line-height: 1.45;
	}
</style>
