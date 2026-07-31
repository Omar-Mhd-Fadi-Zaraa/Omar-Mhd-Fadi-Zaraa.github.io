<script>
	import { profile } from '../data/portfolio.js';
	import { scrollToWorkspace } from './hypr-nav.svelte.js';

	/** @type {{ embedded?: boolean }} */
	let { embedded = false } = $props();

	const year = new Date().getFullYear();
</script>

<footer class="footer" class:embedded>
	{#if embedded}
		<div class="footer-compact">
			<span class="logo mono">
				<span class="prompt">6</span> arch/omar
			</span>
			<nav class="footer-nav" aria-label="Footer navigation">
				{#each [
					['about', 'About'],
					['skills', 'Skills'],
					['projects', 'Projects'],
					['linux', 'Linux'],
					['contact', 'Contact']
				] as [id, label] (id)}
					<button type="button" onclick={() => scrollToWorkspace(id)}>{label}</button>
				{/each}
			</nav>
			<p class="mono copyright">
				© {year} · Hyprland · Quickshell
			</p>
		</div>
	{:else}
		<div class="container footer-inner">
			<div class="footer-brand">
				<span class="logo mono">
					<span class="prompt">1</span> arch/omar
				</span>
				<p class="footer-tagline">{profile.title}</p>
			</div>

			<nav class="footer-nav" aria-label="Footer navigation">
				<a href="#about">About</a>
				<a href="#skills">Skills</a>
				<a href="#projects">Projects</a>
				<a href="#linux">Linux</a>
				<a href="#contact">Contact</a>
			</nav>

			<div class="footer-social">
				<a href={profile.github} target="_blank" rel="noopener" aria-label="GitHub">GitHub</a>
				<a href={profile.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn"
					>LinkedIn</a
				>
				<a href="mailto:{profile.email}" aria-label="Email">Email</a>
			</div>
		</div>

		<div class="container footer-bottom">
			<p class="mono copyright">
				<span class="prompt">hyprctl</span> echo "© {year} {profile.name} · Arch · Hyprland · Quickshell"
			</p>
		</div>
	{/if}
</footer>

<style>
	.footer {
		border-top: 1px solid var(--border);
		padding-block: 3rem 1.5rem;
		margin-top: 2rem;
	}

	.footer.embedded {
		border-top: none;
		margin: 0;
		padding: 0;
		background: transparent;
	}

	.footer.embedded::before {
		display: none;
	}

	.footer-compact {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: 0.5rem 1rem;
		width: 100%;
	}

	.footer-inner {
		display: grid;
		grid-template-columns: 1.5fr 1fr 1fr;
		gap: 2rem;
		padding-bottom: 2rem;
		border-bottom: 1px solid var(--border);
	}

	.logo {
		font-weight: 600;
		font-size: 0.8125rem;
		color: var(--text-primary);
	}

	.prompt {
		color: var(--accent-primary);
	}

	.footer-tagline {
		font-size: 0.8125rem;
		color: var(--text-muted);
		margin-top: 0.375rem;
	}

	.footer-nav,
	.footer-social {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem 0.75rem;
	}

	.footer-nav a,
	.footer-nav button,
	.footer-social a {
		font-size: 0.75rem;
		color: var(--text-secondary);
		background: none;
		border: none;
		padding: 0;
		font-family: inherit;
		cursor: pointer;
	}

	.footer-nav a:hover,
	.footer-nav button:hover,
	.footer-social a:hover {
		color: var(--accent-primary);
	}

	.footer-bottom {
		padding-top: 1.5rem;
	}

	.copyright {
		font-size: 0.6875rem;
		color: var(--text-muted);
	}

	@media (max-width: 768px) {
		.footer-inner {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}

		.footer-compact {
			flex-direction: column;
			align-items: flex-start;
		}
	}
</style>
