import { mount } from 'svelte';
import './styles/global.css';
import './styles/themes.css';
import './styles/hypr-layout.css';
import App from './App.svelte';
import { themeStore } from './lib/theme.svelte.js';

themeStore.init();

mount(App, { target: document.getElementById('app') });
