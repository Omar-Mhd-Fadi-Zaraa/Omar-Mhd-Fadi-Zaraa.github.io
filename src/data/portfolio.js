/** @typedef {{ name: string; level: number; category: 'ai' | 'linux' | 'dev' | 'tools' }} Skill */
/** @typedef {{ id: string; title: string; description: string; tags: string[]; category: 'ai' | 'linux' | 'fullstack'; github?: string; demo?: string; featured?: boolean }} Project */

/** @type {Skill[]} */
export const skills = [
	{ name: 'Python', level: 95, category: 'ai' },
	{ name: 'PyTorch / TensorFlow', level: 90, category: 'ai' },
	{ name: 'LLMs & RAG', level: 88, category: 'ai' },
	{ name: 'Computer Vision', level: 82, category: 'ai' },
	{ name: 'MLOps', level: 78, category: 'ai' },
	{ name: 'Arch Linux', level: 92, category: 'linux' },
	{ name: 'Bash / Shell', level: 90, category: 'linux' },
	{ name: 'Docker / Podman', level: 85, category: 'linux' },
	{ name: 'Systemd & Networking', level: 80, category: 'linux' },
	{ name: 'TypeScript', level: 85, category: 'dev' },
	{ name: 'Svelte / SvelteKit', level: 82, category: 'dev' },
	{ name: 'FastAPI', level: 88, category: 'dev' },
	{ name: 'PostgreSQL', level: 75, category: 'dev' },
	{ name: 'Git', level: 90, category: 'tools' },
	{ name: 'Neovim', level: 85, category: 'tools' },
	{ name: 'CI/CD', level: 80, category: 'tools' }
];

/** @type {Project[]} */
export const projects = [
	{
		id: 'rag-assistant',
		title: 'RAG Document Assistant',
		description:
			'Local-first retrieval-augmented generation pipeline with vector search, chunking strategies, and a chat UI.',
		tags: ['Python', 'LangChain', 'ChromaDB', 'FastAPI'],
		category: 'ai',
		github: 'https://github.com',
		featured: true
	},
	{
		id: 'vision-pipeline',
		title: 'Real-time Vision Pipeline',
		description:
			'Edge inference pipeline for object detection with ONNX export, batching, and latency benchmarks.',
		tags: ['PyTorch', 'ONNX', 'OpenCV', 'CUDA'],
		category: 'ai',
		github: 'https://github.com',
		demo: 'https://example.com',
		featured: true
	},
	{
		id: 'dotfiles',
		title: 'Arch Dotfiles',
		description:
			'Hyprland tiling config with Quickshell bar, keybindings, blur rules, and automated Arch provisioning.',
		tags: ['Arch', 'Hyprland', 'Quickshell', 'Bash'],
		category: 'linux',
		github: 'https://github.com',
		featured: true
	},
	{
		id: 'homelab',
		title: 'Homelab Stack',
		description:
			'Self-hosted services on bare metal — reverse proxy, monitoring, backups, and GPU workload scheduling.',
		tags: ['Docker', 'Nginx', 'Prometheus', 'systemd'],
		category: 'linux',
		github: 'https://github.com'
	},
	{
		id: 'ml-dashboard',
		title: 'ML Experiment Dashboard',
		description:
			'Track training runs, hyperparameters, and metrics with comparison views and export to reports.',
		tags: ['Svelte', 'FastAPI', 'PostgreSQL', 'W&B'],
		category: 'fullstack',
		github: 'https://github.com',
		demo: 'https://example.com'
	},
	{
		id: 'cli-tool',
		title: 'sysinfo CLI',
		description:
			'Rust-inspired TUI for system diagnostics — CPU, memory, disk I/O, and network stats in the terminal.',
		tags: ['Python', 'Rich', 'psutil', 'Linux'],
		category: 'linux',
		github: 'https://github.com'
	}
];

export const profile = {
	name: 'Your Name',
	title: 'IT Engineer · AI Developer · Hyprland on Arch',
	tagline: 'Intelligent systems on Wayland — tiled, blurred, and built to last.',
	email: 'you@example.com',
	github: 'https://github.com/yourusername',
	linkedin: 'https://linkedin.com/in/yourusername',
	location: 'Your City, Country',
	about: [
		'I design and ship AI-powered applications — from model training and fine-tuning to production APIs and user-facing interfaces.',
		'Linux is my daily driver. I run Arch with Hyprland and Quickshell — Wayland tiling, frosted UI, and workflows tuned in config files rather than mouse drags.',
		'I care about clean architecture, reproducible environments, and systems that are fast, observable, and maintainable.'
	],
	terminalLines: [
		'$ echo $XDG_SESSION_TYPE',
		'wayland',
		'$ hyprctl version | head -1',
		'Hyprland 0.41.x',
		'$ hyprctl activewindow | grep class',
		'class: kitty',
		'$ quickshell --version 2>/dev/null || echo "Quickshell · running"',
		'Quickshell · running',
		'$ echo "workspace ready."',
		'workspace ready.'
	]
};
