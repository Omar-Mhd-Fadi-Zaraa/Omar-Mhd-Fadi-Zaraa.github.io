const SIMPLE_ICONS_CDN = 'https://cdn.simpleicons.org';
const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

/** @param {string} key Simple Icons slug or `devicon:<name>` for Devicon */
export function skillIconUrl(key) {
	if (key.startsWith('devicon:')) {
		const name = key.slice('devicon:'.length);
		return `${DEVICON}/${name}/${name}-original.svg`;
	}
	return `${SIMPLE_ICONS_CDN}/${key}`;
}
