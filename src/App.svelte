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
	<span>1–6</span> workspace · <span>↑↓</span> focus
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
		font-size: 0.625rem;
		color: var(--text-muted);
		padding: 0.35rem 0.6rem;
		border-radius: var(--radius-pill);
		background: rgba(30, 30, 46, 0.65);
		border: 1px solid var(--border);
		pointer-events: none;
	}

	.hypr-hint span {
		color: var(--accent-secondary);
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
