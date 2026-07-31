/** @typedef {{ id: string; label: string; description: string }} ThemeOption */

/** @type {ThemeOption[]} */
export const THEMES = [
	{ id: 'mocha', label: 'Mocha', description: 'Dark · default' },
	{ id: 'macchiato', label: 'Macchiato', description: 'Dark · warm' },
	{ id: 'latte', label: 'Latte', description: 'Light' }
];

class ThemeStore {
	/** @type {string} */
	id = $state('mocha');

	init() {
		const saved = localStorage.getItem('portfolio-theme');
		const valid = THEMES.some((t) => t.id === saved);
		this.apply(valid && saved ? saved : 'mocha');
	}

	/** @param {string} themeId */
	apply(themeId) {
		if (!THEMES.some((t) => t.id === themeId)) return;
		this.id = themeId;
		document.documentElement.setAttribute('data-theme', themeId);
		localStorage.setItem('portfolio-theme', themeId);
	}
}

export const themeStore = new ThemeStore();
