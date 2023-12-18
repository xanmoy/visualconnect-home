export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Next.js + NextUI",
	description: "Make beautiful websites regardless of your design experience.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},

		{
			label: "Blog",
			href: "/blog",
		},
		{
			label: "About",
			href: "/about",
		}
	],
	navMenuItems: [
		{
			label: "Home",
			href: "/",
		},

		{
			label: "Blog",
			href: "/blog",
		},
		{
			label: "About",
			href: "/about",
		}
	],
	links: {
		start: "https://visualconnect.xanmoy.me/create",
		twitter: "https://twitter.com/getnextui",
		join: "https://visualconnect.xanmoy.me/join",
		discord: "https://discord.gg/9b6yyZKmH4",
		sponsor: "https://patreon.com/jrgarciadev"
	},
};
