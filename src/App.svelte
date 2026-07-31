<script>
	import QuickshellBar from './lib/QuickshellBar.svelte';
	import Hero from './lib/Hero.svelte';
	import About from './lib/About.svelte';
	import Skills from './lib/Skills.svelte';
	import Projects from './lib/Projects.svelte';
	import LinuxSection from './lib/LinuxSection.svelte';
	import Contact from './lib/Contact.svelte';
	import Footer from './lib/Footer.svelte';
	import { initHyprViewport, handleHyprKeydown } from './lib/hypr-nav.svelte.js';

	let viewport = $state(/** @type {HTMLElement | null} */ (null));

	$effect(() => {
		if (!viewport) return;
		return initHyprViewport(viewport);
	});
</script>

<svelte:window onkeydown={handleHyprKeydown} />

<a href="#hero" class="skip-link">Skip to content</a>

<QuickshellBar />

<p class="hypr-hint mono" aria-hidden="true">
	<span class="hypr-hint-text">Change workspace:</span>
	<span class="hypr-hint-keys"><kbd>1</kbd>–<kbd>6</kbd></span>
	<span class="hypr-hint-text">or</span>
	<span class="hypr-hint-keys"><kbd>↑</kbd> <kbd>↓</kbd></span>
</p>

<main id="main" class="hypr-viewport" bind:this={viewport}>
	<Hero />
	<About />
	<Skills />
	<Projects />
	<LinuxSection />
	<div class="hypr-workspace contact-ws" id="contact">
		<div class="hypr-frame">
			<div class="hypr-tile hypr-tile--fill hypr-scroll contact-embed">
				<Contact embedded />
			</div>
			<div class="hypr-tile hypr-tile--status">
				<Footer embedded />
			</div>
		</div>
	</div>
</main>

<style>
	.hypr-hint {
		position: fixed;
		right: 0.75rem;
		bottom: 0.75rem;
		z-index: 90;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: flex-end;
		gap: 0.35rem 0.4rem;
		max-width: min(18rem, calc(100vw - 1.5rem));
		font-size: 0.625rem;
		line-height: 1.35;
		color: var(--text-muted);
		padding: 0.4rem 0.65rem;
		border-radius: var(--radius-pill);
		background: var(--hypr-hint-bg);
		border: 1px solid var(--border);
		box-shadow: var(--shadow);
		pointer-events: none;
	}

	.hypr-hint-text {
		color: var(--text-secondary);
	}

	.hypr-hint-keys {
		display: inline-flex;
		align-items: center;
		gap: 0.2rem;
	}

	.hypr-hint kbd {
		display: inline-block;
		padding: 0.1rem 0.35rem;
		font-family: inherit;
		font-size: 0.625rem;
		color: var(--text-primary);
		background: var(--bg-elevated);
		border: 1px solid var(--border-bright);
		border-radius: 4px;
	}

	.contact-ws {
		padding-bottom: calc(var(--hypr-gap) + 0.25rem);
	}

	.contact-embed {
		padding: 0.65rem;
		background: transparent;
		border: none;
	}

	.contact-embed::before {
		display: none;
	}
</style>
