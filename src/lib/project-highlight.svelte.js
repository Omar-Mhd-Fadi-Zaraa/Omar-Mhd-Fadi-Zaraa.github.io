import { scrollToWorkspace } from './hypr-nav.svelte.js';

class ProjectHighlight {
	highlightedProjectId = $state(/** @type {string | null} */ (null));

	/** @type {ReturnType<typeof setTimeout> | undefined} */
	#scrollTimer;
	/** @type {ReturnType<typeof setTimeout> | undefined} */
	#clearTimer;

	/** @param {string} projectId */
	focus(projectId) {
		this.highlightedProjectId = projectId;
		scrollToWorkspace('projects');

		clearTimeout(this.#scrollTimer);
		clearTimeout(this.#clearTimer);

		this.#scrollTimer = setTimeout(() => {
			const cards = document.querySelectorAll(`[data-project-id="${projectId}"]`);
			const visible =
				/** @type {HTMLElement | undefined} */ (
					Array.from(cards).find((el) => el.getBoundingClientRect().width > 0)
				) ?? /** @type {HTMLElement | undefined} */ (cards[0]);
			visible?.scrollIntoView({ behavior: 'smooth', block: 'center' });
		}, 450);

		this.#clearTimer = setTimeout(() => {
			this.highlightedProjectId = null;
		}, 5000);
	}
}

export const projectHighlight = new ProjectHighlight();
