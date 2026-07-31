/** @typedef {{ id: string; index: number; label: string }} Workspace */

/** @type {Workspace[]} */
export const WORKSPACES = [
	{ id: 'hero', index: 1, label: 'hero' },
	{ id: 'about', index: 2, label: 'about' },
	{ id: 'skills', index: 3, label: 'skills' },
	{ id: 'projects', index: 4, label: 'projects' },
	{ id: 'linux', index: 5, label: 'linux' },
	{ id: 'contact', index: 6, label: 'contact' }
];

/** @param {string} id */
export function workspaceById(id) {
	return WORKSPACES.find((w) => w.id === id);
}
