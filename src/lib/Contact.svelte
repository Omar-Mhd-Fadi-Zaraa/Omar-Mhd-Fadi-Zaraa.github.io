<script>
	import { profile } from '../data/portfolio.js';

	/** @type {{ embedded?: boolean }} */
	let { embedded = false } = $props();

	let formState = $state({
		name: '',
		email: '',
		message: ''
	});

	let submitted = $state(false);

	function handleSubmit(e) {
		e.preventDefault();
		submitted = true;
	}
</script>

{#if embedded}
	<div class="contact-root">
		<div class="hypr-tile hypr-tile--chrome chrome-inner">
			<p class="section-label">Contact</p>
			<h2 class="section-title">Get in touch</h2>
			<p class="section-desc">
				Open to freelance, full-time roles, and interesting collaborations.
			</p>
		</div>

		<div class="hypr-tile-row hypr-tile-row--grow contact-split">
			<div class="hypr-tile hypr-tile--stack hypr-scroll contact-info-tile">
				<div class="info-card">
					<h3>Let's connect</h3>
					<p>
						Whether it's an AI project, infrastructure challenge, or Linux tooling — I'd
						love to hear from you.
					</p>

					<ul class="contact-links">
						<li>
							<span class="label mono">email</span>
							<a href="mailto:{profile.email}">{profile.email}</a>
						</li>
						<li>
							<span class="label mono">phone</span>
							<a href={profile.whatsapp} target="_blank" rel="noopener">{profile.phone}</a>
						</li>
						<li>
							<span class="label mono">github</span>
							<a href={profile.github} target="_blank" rel="noopener">
								github.com/Omar-Mhd-Fadi-Zaraa
							</a>
						</li>
						<li>
							<span class="label mono">linkedin</span>
							<a href={profile.linkedin} target="_blank" rel="noopener">
								linkedin.com/in/omar-zarraa-721b6935b
							</a>
						</li>
						<li>
							<span class="label mono">resume</span>
							<a href={profile.resumeUrl} target="_blank" rel="noopener">Omar-Zarraa-cv.pdf</a>
						</li>
					</ul>
				</div>

				<div class="terminal-hint">
					<p class="mono hint-line">
						<span class="prompt">$</span> curl -X POST /api/contact
					</p>
					<p class="hint-note">
						Hook this form up to your backend, Formspree, or Netlify Forms when you're
						ready to deploy.
					</p>
				</div>
			</div>

			<form class="hypr-tile hypr-tile--master hypr-tile--focused contact-form" onsubmit={handleSubmit}>
				{#if submitted}
					<div class="success-message">
						<span class="success-icon">✓</span>
						<h3>Message sent!</h3>
						<p>
							Thanks for reaching out. Wire this form to your email service to make it
							functional.
						</p>
						<button
							type="button"
							class="btn btn-outline"
							onclick={() => {
								submitted = false;
								formState = { name: '', email: '', message: '' };
							}}
						>
							Send another
						</button>
					</div>
				{:else}
					<div class="field">
						<label for="name">
							<span class="prompt">--name</span>
						</label>
						<input
							type="text"
							id="name"
							name="name"
							bind:value={formState.name}
							required
							placeholder="Jane Doe"
							autocomplete="name"
						/>
					</div>

					<div class="field">
						<label for="email">
							<span class="prompt">--email</span>
						</label>
						<input
							type="email"
							id="email"
							name="email"
							bind:value={formState.email}
							required
							placeholder="jane@example.com"
							autocomplete="email"
						/>
					</div>

					<div class="field">
						<label for="message">
							<span class="prompt">--message</span>
						</label>
						<textarea
							id="message"
							name="message"
							bind:value={formState.message}
							required
							rows="4"
							placeholder="Tell me about your project..."
						></textarea>
					</div>

					<button type="submit" class="btn btn-primary submit-btn">
						<span class="prompt">$</span> send_message
					</button>
				{/if}
			</form>
		</div>
	</div>
{:else}
	<section class="hypr-workspace section contact" id="contact">
		<!-- fallback if not embedded -->
	</section>
{/if}

<style>
	.contact-root {
		display: flex;
		flex-direction: column;
		gap: var(--hypr-gap);
		height: 100%;
		min-height: 0;
	}

	.chrome-inner {
		background: transparent;
		border: none;
		padding: 0 0 0.25rem;
	}

	.chrome-inner::before {
		display: none;
	}

	.contact-split {
		flex: 1;
		min-height: 0;
	}

	.contact-info-tile,
	.contact-form {
		min-height: 0;
	}

	.info-card h3 {
		margin-bottom: 0.75rem;
	}

	.info-card > p {
		color: var(--text-secondary);
		font-size: 0.9375rem;
		margin-bottom: 1.25rem;
	}

	.contact-links {
		list-style: none;
		display: grid;
		gap: 0.875rem;
	}

	.contact-links li {
		display: grid;
		gap: 0.25rem;
	}

	.label {
		font-size: 0.75rem;
		color: var(--accent-purple);
	}

	.contact-links a {
		font-size: 0.9375rem;
		word-break: break-all;
	}

	.terminal-hint {
		margin-top: 1rem;
		padding: 0.875rem 1rem;
		background: var(--bg-terminal);
		border-radius: var(--radius);
		border: 1px solid var(--border);
	}

	.hint-line {
		font-size: 0.8125rem;
		color: var(--text-secondary);
		margin-bottom: 0.5rem;
	}

	.prompt {
		color: var(--accent-secondary);
	}

	.hint-note {
		font-size: 0.8125rem;
		color: var(--text-muted);
	}

	.contact-form {
		display: grid;
		gap: 1rem;
		align-content: start;
	}

	.field {
		display: grid;
		gap: 0.375rem;
	}

	.field label {
		font-family: var(--font-mono);
		font-size: 0.8125rem;
		color: var(--text-muted);
	}

	.field input,
	.field textarea {
		width: 100%;
		padding: 0.75rem 1rem;
		font-family: var(--font-sans);
		font-size: 0.9375rem;
		color: var(--text-primary);
		background: var(--bg-terminal);
		border: 1px solid var(--border);
		border-radius: var(--radius);
		transition: border-color var(--transition);
	}

	.field input:focus,
	.field textarea:focus {
		outline: none;
		border-color: var(--accent-cyan);
	}

	.field textarea {
		resize: vertical;
		min-height: 96px;
	}

	.submit-btn {
		justify-self: start;
	}

	.success-message {
		text-align: center;
		padding: 1.5rem 0.5rem;
	}

	.success-icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 48px;
		height: 48px;
		border-radius: 50%;
		background: var(--accent-tint-strong);
		color: var(--accent-primary);
		font-size: 1.5rem;
		margin-bottom: 1rem;
	}

	.success-message h3 {
		margin-bottom: 0.5rem;
	}

	.success-message p {
		color: var(--text-secondary);
		font-size: 0.9375rem;
		margin-bottom: 1.5rem;
	}

	@media (max-width: 768px) {
		.contact-split {
			flex-direction: column;
		}
	}
</style>
