<script>
	import { projects } from '../data/portfolio.js';

	const categories = [
		{ id: 'all', label: 'All' },
		{ id: 'ai', label: 'AI / ML' },
		{ id: 'linux', label: 'Linux' },
		{ id: 'fullstack', label: 'Full Stack' }
	];

	let activeCategory = $state('all');

	let filteredProjects = $derived(
		activeCategory === 'all'
			? projects
			: projects.filter((p) => p.category === activeCategory)
	);

	let featuredProjects = $derived(projects.filter((p) => p.featured));
</script>

<section class="hypr-workspace section projects" id="projects">
	<div class="hypr-frame">
		<div class="hypr-tile hypr-tile--chrome">
			<p class="section-label">Projects</p>
			<h2 class="section-title">Selected work</h2>
			<p class="section-desc">
				AI pipelines, Linux tooling, and full-stack applications I've built and shipped.
			</p>
			<div class="filter-bar" role="tablist" aria-label="Project categories">
				{#each categories as cat (cat.id)}
					<button
						class="filter-btn"
						class:active={activeCategory === cat.id}
						onclick={() => (activeCategory = cat.id)}
						role="tab"
						aria-selected={activeCategory === cat.id}
					>
						{cat.label}
					</button>
				{/each}
			</div>
		</div>

		<div class="hypr-tile-row hypr-tile-row--grow">
			<div class="hypr-tile hypr-tile--master hypr-tile--focused hypr-scroll">
				<h3 class="tile-heading mono">featured · master</h3>
				<div class="featured-stack">
					{#each featuredProjects as project (project.id)}
						<article class="featured-card card">
							<div class="featured-badge">featured</div>
							<h3>{project.title}</h3>
							<p>{project.description}</p>
							<div class="tags">
								{#each project.tags as tag (tag)}
									<span class="tag">{tag}</span>
								{/each}
							</div>
							<div class="links">
								{#if project.github}
									<a href={project.github} target="_blank" rel="noopener" class="project-link">
										<span class="prompt">$</span> git
									</a>
								{/if}
								{#if project.demo}
									<a href={project.demo} target="_blank" rel="noopener" class="project-link demo">
										<span class="prompt">$</span> open demo
									</a>
								{/if}
							</div>
						</article>
					{/each}
				</div>
			</div>

			<div class="hypr-tile hypr-tile--stack hypr-scroll">
				<h3 class="tile-heading mono">all · stack</h3>
				<div class="projects-grid">
					{#each filteredProjects as project (project.id)}
						<article class="project-card card">
							<div class="project-category mono">{project.category}</div>
							<h3>{project.title}</h3>
							<p>{project.description}</p>
							<div class="tags">
								{#each project.tags as tag (tag)}
									<span class="tag">{tag}</span>
								{/each}
							</div>
							<div class="links">
								{#if project.github}
									<a href={project.github} target="_blank" rel="noopener" class="project-link">
										GitHub →
									</a>
								{/if}
								{#if project.demo}
									<a href={project.demo} target="_blank" rel="noopener" class="project-link demo">
										Live demo →
									</a>
								{/if}
							</div>
						</article>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.tile-heading {
		font-size: 0.6875rem;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: var(--text-muted);
		margin-bottom: 0.75rem;
		flex-shrink: 0;
	}

	.featured-stack {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.featured-card {
		position: relative;
		border-color: var(--accent-tint-border);
	}

	.featured-badge {
		position: absolute;
		top: 1rem;
		right: 1rem;
		font-family: var(--font-mono);
		font-size: 0.6875rem;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		color: var(--accent-primary);
		background: var(--accent-tint);
		padding: 0.2rem 0.5rem;
		border-radius: 4px;
	}

	.featured-card h3,
	.project-card h3 {
		font-size: 1rem;
		margin-bottom: 0.5rem;
	}

	.featured-card p,
	.project-card p {
		font-size: 0.875rem;
		color: var(--text-secondary);
		margin-bottom: 0.75rem;
		line-height: 1.5;
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.375rem;
		margin-bottom: 0.75rem;
	}

	.links {
		display: flex;
		gap: 1rem;
	}

	.project-link {
		font-family: var(--font-mono);
		font-size: 0.8125rem;
		color: var(--text-secondary);
	}

	.project-link:hover {
		color: var(--accent-primary);
	}

	.project-link.demo {
		color: var(--accent-cyan);
	}

	.prompt {
		color: var(--accent-secondary);
	}

	.filter-bar {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-top: 0.75rem;
	}

	.filter-btn {
		padding: 0.5rem 1rem;
		font-family: var(--font-mono);
		font-size: 0.8125rem;
		background: var(--bg-elevated);
		color: var(--text-secondary);
		border: 1px solid var(--border);
		border-radius: var(--radius-pill);
		cursor: pointer;
		transition:
			color var(--transition),
			border-color var(--transition),
			background var(--transition);
	}

	.filter-btn:hover {
		color: var(--text-primary);
		border-color: var(--border-bright);
	}

	.filter-btn.active {
		color: var(--accent-primary);
		border-color: var(--accent-primary);
		background: var(--accent-tint);
	}

	.projects-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 0.75rem;
		align-content: start;
	}

	.project-category {
		font-size: 0.6875rem;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		color: var(--accent-purple);
		margin-bottom: 0.35rem;
	}
</style>
