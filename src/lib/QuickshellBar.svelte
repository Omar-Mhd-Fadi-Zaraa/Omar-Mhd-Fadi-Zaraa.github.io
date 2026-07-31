<script>
	import { profile } from '../data/portfolio.js';
	import { WORKSPACES } from './workspaces.js';
	import { hyprNav, scrollToWorkspace } from './hypr-nav.svelte.js';
	import { themeStore, THEMES } from './theme.svelte.js';
	import BarModule from './BarModule.svelte';

	/** @type {string | null} */
	let openModule = $state(null);

	let barEl = $state(/** @type {HTMLElement | null} */ (null));

	let activeWs = $derived(WORKSPACES.find((w) => w.id === hyprNav.activeWorkspaceId) ?? WORKSPACES[0]);

	let windowTitle = $derived(`portfolio — ${activeWs.label}`);

	/** @param {string} name */
	function toggleModule(name, e) {
		e.stopPropagation();
		openModule = openModule === name ? null : name;
	}

	/** @param {string} id */
	function goTo(id) {
		openModule = null;
		scrollToWorkspace(id);
	}

	/** @param {string} themeId */
	function pickTheme(themeId) {
		themeStore.apply(themeId);
	}

	$effect(() => {
		if (!openModule) return;
		/** @param {MouseEvent} e */
		const onDocClick = (e) => {
			if (!barEl?.contains(/** @type {Node} */ (e.target))) {
				openModule = null;
			}
		};
		const t = setTimeout(() => document.addEventListener('click', onDocClick), 0);
		return () => {
			clearTimeout(t);
			document.removeEventListener('click', onDocClick);
		};
	});
</script>

<header class="qs-panel" bind:this={barEl}>
	<div class="qs-section qs-left">
		<span class="qs-brand mono" title="Quickshell panel">qs</span>
		<div class="ws-strip" role="tablist" aria-label="Workspaces">
			{#each WORKSPACES as ws (ws.id)}
				<button
					type="button"
					class="ws-pill"
					class:active={hyprNav.activeWorkspaceId === ws.id}
					class:occupied={true}
					role="tab"
					aria-selected={hyprNav.activeWorkspaceId === ws.id}
					title="workspace {ws.index}"
					onclick={() => goTo(ws.id)}
				>
					{ws.index}
				</button>
			{/each}
		</div>
	</div>

	<div class="qs-section qs-center mono" title="Active tile">
		<span class="ws-dot" aria-hidden="true"></span>
		<span class="window-title">{windowTitle}</span>
	</div>

	<div class="qs-section qs-right">
		<BarModule
			label="Contact"
			pressed={openModule === 'contact'}
			onclick={(e) => toggleModule('contact', e)}
		>
			{#snippet icon()}
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
					<path
						d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
					/>
				</svg>
			{/snippet}
			{#snippet children()}
				<p class="qs-popover-title">Contact</p>
				<div class="qs-popover-row">
					<a href="mailto:{profile.email}">{profile.email}</a>
					<a href={profile.linkedin} target="_blank" rel="noopener">LinkedIn</a>
					<a href={profile.github} target="_blank" rel="noopener">GitHub</a>
					<button type="button" class="linkish" onclick={() => goTo('contact')}>
						Open contact workspace →
					</button>
				</div>
				<p class="contact-loc mono">{profile.location}</p>
			{/snippet}
		</BarModule>

		<BarModule
			label="Profile"
			pressed={openModule === 'profile'}
			onclick={(e) => toggleModule('profile', e)}
		>
			{#snippet icon()}
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
					<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
					<circle cx="12" cy="7" r="4" />
				</svg>
			{/snippet}
			{#snippet children()}
				<p class="qs-popover-title">{profile.name}</p>
				<p class="profile-line">{profile.title}</p>
				<div class="qs-popover-row">
					<button type="button" class="linkish" onclick={() => goTo('about')}>About</button>
					<button type="button" class="linkish" onclick={() => goTo('skills')}>Skills</button>
					<button type="button" class="linkish" onclick={() => goTo('projects')}>Projects</button>
					<button type="button" class="linkish" onclick={() => goTo('linux')}>Desktop setup</button>
				</div>
			{/snippet}
		</BarModule>

		<BarModule
			label="Theme"
			pressed={openModule === 'theme'}
			onclick={(e) => toggleModule('theme', e)}
		>
			{#snippet icon()}
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
					<circle cx="12" cy="12" r="5" />
					<path
						d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
					/>
				</svg>
			{/snippet}
			{#snippet children()}
				<p class="qs-popover-title">Appearance</p>
				{#each THEMES as theme (theme.id)}
					<button
						type="button"
						class="theme-option"
						class:active={themeStore.id === theme.id}
						onclick={() => pickTheme(theme.id)}
					>
						<span
							class="theme-swatch"
							style:background={theme.id === 'latte'
								? '#eff1f5'
								: theme.id === 'macchiato'
									? '#24273a'
									: '#1e1e2e'}
						></span>
						<span>
							<strong>{theme.label}</strong>
							<span class="theme-desc"> — {theme.description}</span>
						</span>
					</button>
				{/each}
			{/snippet}
		</BarModule>

		<BarModule
			label="Shortcuts"
			pressed={openModule === 'help'}
			onclick={(e) => toggleModule('help', e)}
		>
			{#snippet icon()}
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
					<rect x="2" y="4" width="20" height="16" rx="2" />
					<path d="M6 8h.01M10 8h.01M14 8h.01M18 8h.01M8 12h8M6 16h12" />
				</svg>
			{/snippet}
			{#snippet children()}
				<p class="qs-popover-title">Keybinds</p>
				<ul class="shortcut-list mono">
					<li><kbd>1</kbd>–<kbd>6</kbd> switch workspace</li>
					<li><kbd>↑</kbd> <kbd>↓</kbd> or <kbd>j</kbd> <kbd>k</kbd> focus</li>
					<li>Scroll snaps per workspace</li>
				</ul>
			{/snippet}
		</BarModule>

		<a
			class="qs-module-btn qs-link-btn"
			href={profile.github}
			target="_blank"
			rel="noopener"
			aria-label="GitHub"
			title="GitHub"
		>
			<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
				<path
					d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
				/>
			</svg>
		</a>

		<span class="qs-clock mono" title="Local time">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
	</div>
</header>

<style>
	.qs-panel {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 200;
		height: var(--qs-bar-height);
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.75rem;
		padding: 0 0.65rem;
		background: var(--qs-panel-bg, rgba(24, 24, 37, 0.92));
		backdrop-filter: blur(16px);
		-webkit-backdrop-filter: blur(16px);
		border-bottom: 1px solid var(--border);
		box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);
	}

	.qs-section {
		display: flex;
		align-items: center;
		min-width: 0;
	}

	.qs-left {
		gap: 0.5rem;
		flex-shrink: 0;
	}

	.qs-brand {
		font-size: 0.6875rem;
		font-weight: 700;
		color: var(--accent-secondary);
		padding: 0.15rem 0.35rem;
		border-radius: 4px;
		background: var(--accent-tint);
	}

	.ws-strip {
		display: flex;
		gap: 3px;
	}

	.ws-pill {
		min-width: 22px;
		height: 22px;
		padding: 0 0.25rem;
		font-family: var(--font-mono);
		font-size: 0.6875rem;
		font-weight: 700;
		border: none;
		border-radius: 5px;
		cursor: pointer;
		background: transparent;
		color: var(--text-muted);
		transition:
			color var(--transition),
			background var(--transition);
	}

	.ws-pill.occupied {
		color: var(--accent-cyan);
	}

	.ws-pill:hover {
		background: var(--qs-module-hover, rgba(255, 255, 255, 0.06));
	}

	.ws-pill.active {
		color: var(--bg-crust);
		background: var(--accent-primary);
	}

	.qs-center {
		flex: 1;
		justify-content: center;
		gap: 0.4rem;
		font-size: 0.75rem;
		color: var(--text-muted);
		overflow: hidden;
		padding: 0 0.5rem;
	}

	.ws-dot {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: var(--accent-secondary);
		flex-shrink: 0;
	}

	.window-title {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.qs-right {
		gap: 0.2rem;
		flex-shrink: 0;
	}

	.qs-link-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 28px;
		height: 26px;
		color: var(--text-secondary);
		border-radius: 6px;
	}

	.qs-link-btn:hover {
		color: var(--text-primary);
		background: var(--qs-module-hover, rgba(255, 255, 255, 0.06));
	}

	.qs-link-btn svg {
		width: 15px;
		height: 15px;
	}

	.qs-clock {
		font-size: 0.6875rem;
		color: var(--text-muted);
		padding: 0 0.35rem 0 0.25rem;
		min-width: 2.75rem;
		text-align: right;
	}

	.contact-loc {
		font-size: 0.6875rem;
		color: var(--text-muted);
		margin-top: 0.35rem;
	}

	.profile-line {
		font-size: 0.75rem;
		color: var(--text-secondary);
		margin-bottom: 0.35rem;
		line-height: 1.4;
	}

	.theme-desc {
		font-weight: 400;
		color: var(--text-muted);
	}

	.shortcut-list {
		list-style: none;
		font-size: 0.6875rem;
		color: var(--text-secondary);
		display: grid;
		gap: 0.35rem;
	}

	.shortcut-list kbd {
		display: inline-block;
		padding: 0.1rem 0.3rem;
		border-radius: 4px;
		background: var(--bg-elevated);
		border: 1px solid var(--border);
		font-size: 0.625rem;
	}

	@media (max-width: 768px) {
		.qs-center {
			display: none;
		}

		.ws-strip .ws-pill:not(.active) {
			display: none;
		}

		.ws-strip .ws-pill.active {
			display: inline-flex;
		}

		.qs-clock {
			display: none;
		}
	}
</style>
