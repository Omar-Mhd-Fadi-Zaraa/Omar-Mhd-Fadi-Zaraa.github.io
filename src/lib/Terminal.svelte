<script>
	/** @type {{ lines: string[]; animate?: boolean }} */
	let { lines, animate = false } = $props();

	let visibleLines = $state(/** @type {string[]} */ ([]));
	let lineIndex = $state(0);

	$effect(() => {
		if (!animate) {
			visibleLines = lines;
			return;
		}

		if (lineIndex < lines.length) {
			const delay = lineIndex === 0 ? 400 : 350 + Math.random() * 200;
			const timeout = setTimeout(() => {
				visibleLines = [...visibleLines, lines[lineIndex]];
				lineIndex++;
			}, delay);
			return () => clearTimeout(timeout);
		}
	});

	/** @param {string} line */
	function colorize(line) {
		if (line.startsWith('$')) {
			return `<span class="cmd-prompt">$</span><span class="cmd-text">${line.slice(1)}</span>`;
		}
		if (line === 'Damascus') {
			return `<span class="output-wayland">${line}</span>`;
		}
		if (line.startsWith('IT student')) {
			return `<span class="output-hypr">${line}</span>`;
		}
		if (line.includes('Music_Recommendation')) {
			return `<span class="output-qs">${line}</span>`;
		}
		if (line === 'omar-zarraa') {
			return `<span class="output-user">${line}</span>`;
		}
		if (line === 'wayland') {
			return `<span class="output-wayland">${line}</span>`;
		}
		if (line.startsWith('Hyprland')) {
			return `<span class="output-hypr">${line}</span>`;
		}
		if (line.startsWith('class:')) {
			return `<span class="output-key">class</span>: <span class="output-str">${line.slice(7)}</span>`;
		}
		if (line.includes('Quickshell')) {
			return `<span class="output-qs">${line}</span>`;
		}
		if (line === 'workspace ready.') {
			return `<span class="output-success">${line}</span>`;
		}
		return `<span class="output">${line}</span>`;
	}
</script>

<div class="hypr-window">
	<div class="hypr-window-border" aria-hidden="true"></div>
	<div class="terminal">
		<div class="terminal-body">
			{#each visibleLines as line, i (i)}
				<div class="terminal-line" class:cmd={line.startsWith('$')}>
					{@html colorize(line)}
				</div>
			{/each}
			{#if animate && lineIndex < lines.length}
				<span class="cursor">▋</span>
			{/if}
		</div>
	</div>
</div>

<style>
	.hypr-window {
		position: relative;
		border-radius: var(--radius-hypr);
		padding: 2px;
		background: linear-gradient(
			135deg,
			var(--accent-secondary),
			var(--accent-primary),
			var(--accent-highlight)
		);
		box-shadow:
			0 0 0 1px rgba(17, 17, 27, 0.5),
			var(--shadow);
	}

	.hypr-window-border {
		position: absolute;
		inset: 0;
		border-radius: inherit;
		pointer-events: none;
	}

	.terminal {
		background: var(--bg-terminal);
		border-radius: calc(var(--radius-hypr) - 2px);
		overflow: hidden;
		font-family: var(--font-mono);
		font-size: 0.8125rem;
		line-height: 1.7;
	}

	.terminal-body {
		padding: 1.25rem;
		min-height: 220px;
	}

	.terminal-line {
		white-space: pre-wrap;
		word-break: break-word;
	}

	.terminal-line.cmd {
		margin-top: 0.25rem;
	}

	.terminal-line:first-child {
		margin-top: 0;
	}

	.cursor {
		color: var(--accent-primary);
		animation: blink 1s step-end infinite;
	}

	@keyframes blink {
		50% {
			opacity: 0;
		}
	}

	.terminal-body :global(.cmd-prompt) {
		color: var(--accent-secondary);
	}
	.terminal-body :global(.cmd-text) {
		color: var(--text-primary);
	}
	.terminal-body :global(.output) {
		color: var(--text-secondary);
	}
	.terminal-body :global(.output-wayland) {
		color: var(--accent-secondary);
		font-weight: 500;
	}
	.terminal-body :global(.output-hypr) {
		color: var(--accent-primary);
	}
	.terminal-body :global(.output-qs) {
		color: var(--accent-highlight);
	}
	.terminal-body :global(.output-key) {
		color: var(--accent-purple);
	}
	.terminal-body :global(.output-str) {
		color: var(--accent-orange);
	}
	.terminal-body :global(.output-success) {
		color: var(--accent-green);
		font-weight: 500;
	}
</style>
