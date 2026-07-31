import { WORKSPACES } from './workspaces.js';

class HyprNav {
	activeWorkspaceId = $state('hero');
}

export const hyprNav = new HyprNav();

/** @param {string} id */
export function scrollToWorkspace(id) {
	const el = document.getElementById(id);
	if (!el) return;
	el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/** @param {HTMLElement} viewport */
export function initHyprViewport(viewport) {
	/** @type {IntersectionObserver | undefined} */
	let observer;

	const onIntersect = () => {
		const chrome = parseFloat(
			getComputedStyle(document.documentElement).getPropertyValue('--hypr-chrome-top')
		);

		/** @type {{ id: string; dist: number } | null} */
		let best = null;

		for (const ws of WORKSPACES) {
			const el = document.getElementById(ws.id);
			if (!el) continue;
			const rect = el.getBoundingClientRect();
			const dist = Math.abs(rect.top - chrome);
			if (rect.bottom > chrome + 40 && rect.top < viewport.clientHeight) {
				if (!best || dist < best.dist) {
					best = { id: ws.id, dist };
				}
			}
		}

		if (best) hyprNav.activeWorkspaceId = best.id;
	};

	observer = new IntersectionObserver(onIntersect, {
		root: viewport,
		threshold: [0.15, 0.35, 0.55, 0.75]
	});

	for (const ws of WORKSPACES) {
		const el = document.getElementById(ws.id);
		if (el) observer.observe(el);
	}

	viewport.addEventListener('scroll', onIntersect, { passive: true });
	onIntersect();

	return () => {
		observer?.disconnect();
		viewport.removeEventListener('scroll', onIntersect);
	};
}

/** @param {KeyboardEvent} e */
export function handleHyprKeydown(e) {
	const target = e.target;
	if (
		target instanceof HTMLInputElement ||
		target instanceof HTMLTextAreaElement ||
		target instanceof HTMLSelectElement ||
		(target instanceof HTMLElement && target.isContentEditable)
	) {
		return;
	}

	const idx = WORKSPACES.findIndex((w) => w.id === hyprNav.activeWorkspaceId);

	if (e.key >= '1' && e.key <= '9') {
		const n = Number(e.key);
		const ws = WORKSPACES.find((w) => w.index === n);
		if (ws) {
			e.preventDefault();
			scrollToWorkspace(ws.id);
		}
		return;
	}

	if (e.key === 'ArrowDown' || e.key === 'j' || e.key === 'PageDown') {
		if (idx < WORKSPACES.length - 1) {
			e.preventDefault();
			scrollToWorkspace(WORKSPACES[idx + 1].id);
		}
		return;
	}

	if (e.key === 'ArrowUp' || e.key === 'k' || e.key === 'PageUp') {
		if (idx > 0) {
			e.preventDefault();
			scrollToWorkspace(WORKSPACES[idx - 1].id);
		}
	}
}
