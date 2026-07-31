<script>
	import { profile } from '../data/portfolio.js';
</script>

<section class="hypr-workspace section about" id="about">
	<div class="hypr-frame">
		<div class="hypr-tile hypr-tile--chrome">
			<p class="section-label">About</p>
			<h2 class="section-title">Who I am</h2>
			<p class="section-desc">
				An engineer at the intersection of artificial intelligence and systems programming.
			</p>
		</div>

		<div class="hypr-tile-row hypr-tile-row--grow">
			<div class="hypr-tile hypr-tile--master hypr-tile--focused hypr-scroll">
				<div class="about-text">
					{#each profile.about as paragraph, i (i)}
						<p>{paragraph}</p>
					{/each}
				</div>
			</div>

			<aside class="hypr-tile hypr-tile--stack hypr-scroll about-card">
				<h3 class="card-title">
					<span class="icon">◇</span> quick_stats.json
				</h3>
				<dl class="stats">
					<div class="stat">
						<dt>role</dt>
						<dd>AI / ML Engineer</dd>
					</div>
					<div class="stat">
						<dt>os</dt>
						<dd>Arch Linux (daily)</dd>
					</div>
					<div class="stat">
						<dt>compositor</dt>
						<dd>Hyprland</dd>
					</div>
					<div class="stat">
						<dt>shell</dt>
						<dd>Quickshell</dd>
					</div>
					<div class="stat">
						<dt>session</dt>
						<dd>Wayland</dd>
					</div>
					<div class="stat">
						<dt>focus</dt>
						<dd>LLMs, CV, Infra</dd>
					</div>
					<div class="stat">
						<dt>location</dt>
						<dd>{profile.location}</dd>
					</div>
				</dl>
			</aside>
		</div>
	</div>
</section>

<style>
	.about-text p {
		color: var(--text-secondary);
		margin-bottom: 1rem;
	}

	.about-text p:last-child {
		margin-bottom: 0;
	}

	.about-card {
		padding: 1.25rem;
	}

	.card-title {
		font-family: var(--font-mono);
		font-size: 0.875rem;
		color: var(--accent-cyan);
		margin-bottom: 1.25rem;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.icon {
		color: var(--accent-secondary);
	}

	.stats {
		display: grid;
		gap: 0.875rem;
	}

	.stat {
		display: grid;
		grid-template-columns: 5.5rem 1fr;
		gap: 0.5rem;
		font-family: var(--font-mono);
		font-size: 0.8125rem;
	}

	.stat dt {
		color: var(--accent-purple);
	}

	.stat dt::after {
		content: ':';
	}

	.stat dd {
		color: var(--text-primary);
	}
</style>
