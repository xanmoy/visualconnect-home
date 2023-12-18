export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "VisualConnect",
	description: "Visual Connect is a cloud meeting platform that lets you connect with your friends, family and colleagues.",
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
		start: "https://meeting.visualconnect.xanmoy.me/create",
		twitter: "https://twitter.com/getnextui",
		join: "https://meeting.visualconnect.xanmoy.me/join",
		discord: "https://discord.gg/9b6yyZKmH4",
		sponsor: "https://patreon.com/jrgarciadev"
	},
};
