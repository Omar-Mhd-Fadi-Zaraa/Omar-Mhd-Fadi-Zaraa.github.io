/** @typedef {{ name: string; level: number; category: 'ai' | 'linux' | 'dev' | 'tools'; icons: string[] }} Skill */
/** @typedef {{ id: string; title: string; description: string; tags: string[]; category: 'ai' | 'linux' | 'fullstack'; github?: string; demo?: string; featured?: boolean }} Project */

const GH = 'https://github.com/Omar-Mhd-Fadi-Zaraa';

/** @type {Skill[]} */
export const skills = [
	{ name: 'Python', level: 92, category: 'ai', icons: ['python'] },
	{ name: 'PyTorch', level: 86, category: 'ai', icons: ['pytorch'] },
	{ name: 'TensorFlow', level: 84, category: 'ai', icons: ['tensorflow'] },
	{ name: 'scikit-learn', level: 82, category: 'ai', icons: ['scikitlearn'] },
	{ name: 'Pandas / NumPy', level: 88, category: 'ai', icons: ['pandas', 'numpy'] },
	{ name: 'RAG & fine-tuning', level: 80, category: 'ai', icons: ['openai'] },
	{ name: 'Arch Linux', level: 88, category: 'linux', icons: ['archlinux'] },
	{ name: 'Linux Mint', level: 78, category: 'linux', icons: ['linuxmint'] },
	{ name: 'Bash / Shell', level: 82, category: 'linux', icons: ['gnubash'] },
	{ name: 'Docker', level: 76, category: 'linux', icons: ['docker'] },
	{ name: 'Go', level: 74, category: 'dev', icons: ['go'] },
	{ name: 'Gin / REST APIs', level: 72, category: 'dev', icons: ['go'] },
	{ name: 'PostgreSQL / SQLite', level: 70, category: 'dev', icons: ['postgresql', 'sqlite'] },
	{ name: 'Svelte', level: 68, category: 'dev', icons: ['svelte'] },
	{ name: 'Git', level: 88, category: 'tools', icons: ['git'] },
	{ name: 'Matplotlib / Seaborn', level: 80, category: 'tools', icons: ['devicon:matplotlib'] }
];

/** @type {Project[]} */
export const projects = [
	{
		id: 'music-ml',
		title: 'Music Recommendation & Generation',
		description:
			'RNN-based music genre classifier with an API to recommend songs from predicted genres, plus exploratory work on transformers for music generation.',
		tags: ['Python', 'TensorFlow', 'PyTorch', 'Matplotlib'],
		category: 'ai',
		github: `${GH}/Music_Recommendation_And_Generation`,
		featured: true
	},
	{
		id: 'tuxtailor',
		title: 'TuxTailor',
		description:
			'Agentic application for creating company-specific Linux ISOs tailored for deployment on organizational machines.',
		tags: ['Linux', 'Python', 'AI agents', 'Automation'],
		category: 'linux',
		github: `${GH}/TuxTailor`,
		featured: true
	},
	{
		id: 'university-api',
		title: 'University System REST API',
		description:
			'REST API for a university system: enrollment, student marks, and course management for students and admins.',
		tags: ['Go', 'Gin', 'SQLite', 'REST'],
		category: 'fullstack',
		github: `${GH}/Univsersity_system_API`,
		featured: true
	},
	{
		id: 'denmark-de-jobs',
		title: 'Data Engineering Jobs in Denmark',
		description:
			'Exploratory data analysis on a dataset of data-engineering job postings in Denmark.',
		tags: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
		category: 'ai',
		github: `${GH}/Denmark-DE-Jobs-Data-Analysis`
	},
	{
		id: 'heart-titanic-ml',
		title: 'Heart Disease & Titanic ML',
		description:
			'Machine learning experiments on the classic heart disease and Titanic datasets.',
		tags: ['Python', 'scikit-learn', 'Pandas'],
		category: 'ai',
		github: `${GH}/HeartDisease-Titanic-ML-Project`
	},
	{
		id: 'oscar-predictor',
		title: 'Oscar Award Predictor',
		description: 'ML project predicting Oscar outcomes from historical nomination and feature data.',
		tags: ['Python', 'ML'],
		category: 'ai',
		github: `${GH}/Oscar_Award_Predictor`
	},
	{
		id: 'gittracker',
		title: 'GitTracker',
		description:
			'CLI tool to visualize your contributions across local Git repositories over the last six months.',
		tags: ['Git', 'CLI', 'Linux'],
		category: 'linux',
		github: `${GH}/GitTracker`
	},
	{
		id: 'omarchy-setup',
		title: 'My Omarchy Setup',
		description: 'Personal Linux desktop configuration and dotfiles for an Omarchy-based workflow.',
		tags: ['Arch Linux', 'Dotfiles', 'Hyprland'],
		category: 'linux',
		github: `${GH}/My_Omarchy_Setup`
	},
	{
		id: 'twitch-da',
		title: 'Twitch Streamers Analytics',
		description: 'Quick data analysis on a Twitch streamers analytics dataset from 2020.',
		tags: ['Python', 'Pandas', 'Data analysis'],
		category: 'ai',
		github: `${GH}/Twitch-Streamers-DA-Project`
	},
	{
		id: 'event-api',
		title: 'Event Management REST API',
		description: 'Backend API for an event management website.',
		tags: ['REST', 'API', 'Backend'],
		category: 'fullstack',
		github: `${GH}/Event-Management-Website-REST-API`
	},
	{
		id: 'marcel-jump',
		title: 'Marcel Jump',
		description: 'A Flappy Bird–style game built to practice game logic and polish.',
		tags: ['Game dev', 'Practice project'],
		category: 'fullstack',
		github: `${GH}/Marcel-Jump`
	}
];

export const profile = {
	name: 'Omar Zarraa',
	title: 'Machine Learning Engineer · IT Student',
	tagline:
		'Building models and agents — RAG, fine-tuning, and automating systems with AI.',
	email: 'o.zarraa.2005@gmail.com',
	phone: '+963 935 573 617',
	whatsapp: 'https://wa.me/963935573617',
	github: `${GH}`,
	linkedin: 'https://www.linkedin.com/in/omar-zarraa-721b6935b',
	resumeUrl: 'https://omar-mhd-fadi-zaraa.github.io/PDFs/Omar-Zarraa-cv.pdf',
	location: 'Damascus, Syria',
	about: [
		"I'm an up-and-coming machine learning engineer focused on RAG, fine-tuning, and using AI to automate real systems. I'm an IT student at Arab International University with about three years of hands-on project experience.",
		'I enjoy backend work and have explored kernel and systems topics when curiosity pulls me deeper — from REST APIs in Go to tooling on Linux.',
		'Off the clock I make art and 3D models. I run Arch (and Omarchy/Hyprland-style setups) and like reproducible, config-driven environments.'
	],
	terminalLines: [
		'$ whoami',
		'omar-zarraa',
		'$ curl -s ipinfo.io/city',
		'Damascus',
		'$ gh api user --jq .bio',
		'IT student at Arab International University',
		'$ ls ~/projects | head -3',
		'Music_Recommendation_And_Generation  TuxTailor  Univsersity_system_API',
		'$ echo "workspace ready."',
		'workspace ready.'
	]
};
