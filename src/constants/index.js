import {
	carrent,
	css,
	figma,
	git,
	html,
	javascript,
	jobit,
	reactjs,
	redux,
	tailwind,
	tripguide,
	typescript,
} from '../assets';

import animeHouse from '../assets/animeHouse.png';
import js from '../assets/js.png';
import webs from '../assets/webs.png';
import mui from '../assets/mui.png';
import vercel from '../assets/vercel.svg';
import styledComponents from "../assets/styledComponents.png"

export const navLinks = [
	{
		id: 'about',
		title: 'About',
	},
	{
		id: 'work',
		title: 'Work',
	},
	{
		id: 'contact',
		title: 'Contact',
	},
];

const services = [
	{
		title: 'Web Developer',
		icon: webs,
	},
	{
		title: 'JavaScript Developer',
		icon: js,
	},
	{
		title: 'React Developer',
		icon: reactjs,
	},
	{
		title: 'TypeScript Developer',
		icon: typescript,
	},
];

const technologies = [
	{
		name: 'HTML 5',
		icon: html,
	},
	{
		name: 'CSS 3',
		icon: css,
	},
	{
		name: 'JavaScript',
		icon: javascript,
	},
	{
		name: 'TypeScript',
		icon: typescript,
	},
	{
		name: 'React JS',
		icon: reactjs,
	},
	{
		name: 'Redux Toolkit',
		icon: redux,
	},
	{
		name: 'Tailwind CSS',
		icon: tailwind,
	},
	{
		name: 'styledComponents',
		icon: styledComponents,
	},
	{
		name: 'git',
		icon: git,
	},
	{
		name: 'figma',
		icon: figma,
	},
  {
    name: 'mui',
    icon: mui
	},
	{
		name: 'vercel',
		icon: vercel,
	},
];

const experiences = [
	{
		title: 'React.js Developer',
		company_name: 'Anime Site',
		icon: animeHouse,
		iconBg: '#383E56',
		date: 'March 2020 - April 2021',
		points: [
			'ANIME SITE ⚛ Anime Streaming  Platform — это удобный сайт для просмотра и управления аниме. Построенный на основе React, TypeScript и Redux Toolkit, он обеспечивает плавное воспроизведение видео, простой поиск и фильтрацию по жанрам, а также позволяет добавлять аниме в избранное. Использование Material UI делает интерфейс современным и адаптивным, а React Toastify помогает с уведомлениями о новых эпизодах и обновлениях.',
		],
	},
];

const testimonials = [
	{
		testimonial:
			'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
		name: 'Sara Lee',
		designation: 'CFO',
		company: 'Acme Co',
		image: 'https://randomuser.me/api/portraits/women/4.jpg',
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Rick does.",
		name: 'Chris Brown',
		designation: 'COO',
		company: 'DEF Corp',
		image: 'https://randomuser.me/api/portraits/men/5.jpg',
	},
	{
		testimonial:
			"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: 'Lisa Wang',
		designation: 'CTO',
		company: '456 Enterprises',
		image: 'https://randomuser.me/api/portraits/women/6.jpg',
	},
];

const projects = [
	{
		name: 'Car Rent',
		description:
			'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient',
			},
			{
				name: 'mongodb',
				color: 'green-text-gradient',
			},
			{
				name: 'tailwind',
				color: 'pink-text-gradient',
			},
		],
		image: carrent,
		source_code_link: 'https://github.com/',
	},
	{
		name: 'Job IT',
		description:
			'Веб-приложение, позволяющее пользователям искать вакансии, просматривать предполагаемые диапазоны заработной платы для должностей и находить доступные вакансии в зависимости от их текущего местонахождения.',
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient',
			},
			{
				name: 'restapi',
				color: 'green-text-gradient',
			},
			{
				name: 'scss',
				color: 'pink-text-gradient',
			},
		],
		image: jobit,
		source_code_link: 'https://github.com/',
	},
	{
		name: 'Trip Guide',
		description:
			'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
		tags: [
			{
				name: 'nextjs',
				color: 'blue-text-gradient',
			},
			{
				name: 'supabase',
				color: 'green-text-gradient',
			},
			{
				name: 'css',
				color: 'pink-text-gradient',
			},
		],
		image: tripguide,
		source_code_link: 'https://github.com/',
	},
];

export { experiences, projects, services, technologies, testimonials };
