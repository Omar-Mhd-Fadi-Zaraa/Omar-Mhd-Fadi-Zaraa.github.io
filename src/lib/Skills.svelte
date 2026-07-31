<script>
	import { skills } from '../data/portfolio.js';
	import { skillIconUrl } from './skill-icons.js';

	const categories = [
		{ id: 'all', label: 'All' },
		{ id: 'ai', label: 'AI / ML' },
		{ id: 'linux', label: 'Linux / Sys' },
		{ id: 'dev', label: 'Development' },
		{ id: 'tools', label: 'Tools' }
	];

	let activeCategory = $state('all');

	let filteredSkills = $derived(
		activeCategory === 'all'
			? skills
			: skills.filter((s) => s.category === activeCategory)
	);
</script>

<section class="hypr-workspace section skills" id="skills">
	<div class="hypr-frame">
		<div class="hypr-tile hypr-tile--chrome">
			<p class="section-label">Skills</p>
			<h2 class="section-title">Tech stack</h2>
			<p class="section-desc">
				Technologies I use to build AI systems and keep them running in production.
			</p>
			<div class="filter-bar" role="tablist" aria-label="Skill categories">
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

		<div class="hypr-tile hypr-tile--focused hypr-scroll hypr-tile--fill">
			<div class="skills-grid">
				{#each filteredSkills as skill (skill.name)}
					<div class="skill-card card">
						<div class="skill-title">
							<span class="skill-icons" aria-hidden="true">
								{#each skill.icons as slug (slug)}
									<img
										class="skill-icon"
										src={skillIconUrl(slug)}
										alt=""
										width="20"
										height="20"
										loading="lazy"
										decoding="async"
									/>
								{/each}
							</span>
							<span class="skill-name">{skill.name}</span>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
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

	.skills-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
		gap: 0.75rem;
		width: 100%;
		align-content: start;
	}

	.skill-card {
		padding: 0.75rem 1rem;
	}

	.skill-title {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		min-width: 0;
	}

	.skill-icons {
		display: inline-flex;
		align-items: center;
		gap: 0.25rem;
		flex-shrink: 0;
	}

	.skill-icon {
		display: block;
		width: 1.25rem;
		height: 1.25rem;
		object-fit: contain;
	}

	.skill-name {
		font-size: 0.875rem;
		font-weight: 500;
		line-height: 1.3;
	}
</style>
