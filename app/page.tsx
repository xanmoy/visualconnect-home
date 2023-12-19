import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import React from "react";
import { Image } from "@nextui-org/react";
import NextImage from "next/image";

export default function Home() {
	return (
		<>
			<section className="flex flex-col  md:mt-9 justify-left gap-4 py-8 md:py-10">


				{/* items-left */}
				{/* <section className="text-black dark:text-white body-font"> */}
				<div className="container mx-1 flex px-2 py-2 md:flex-row flex-col items-center">
					<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-left">
						<h1 className={title()}>High Quality Video <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Meetings&nbsp;</span></h1>
						<h1 className={title()}>
							Now Free For Everyone
						</h1>
						<h2 className={subtitle({ class: "mt-4" })}>
							Join VisualConnect and experience the future of seamless collaboration.
						</h2>

					</div>
					<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
						{/* <img className="className=-cover className=-center rounded" alt="hero" src="https://dummyimage.com/720x600"> */}
						<Image
							className="-cover className=-center rounded hidden md:block"
							as={NextImage}
							width={900}
							height={800}
							src="/meeting.jpg"
							alt="NextUI hero Image"
						/>
					</div>
				</div>
				{/* </section> */}

				<div className="flex flex-col md:flex-row items-left gap-4">
					<Link
						isExternal
						href={siteConfig.links.start}
					// className={buttonStyles({ color: "primary", radius: "full", variant: "shadow", })}
					><button className="bg-gradient-to-r from-violet-600 to-indigo-600 z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-unit-6 min-w-unit-24 h-unit-12 text-medium gap-unit-3 rounded-full [&>svg]:max-w-[theme(spacing.unit-8)] data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none bg-primary text-primary-foreground data-[hover=true]:opacity-hover w-full md:w-auto">
							Start a Meeting
						</button>

					</Link>
					<Link
						isExternal
						// className={buttonStyles({ variant: "bordered", radius: "full" })}
						href={siteConfig.links.join}
					>
						<button className="tap-highlight-transparent no-underline hover:opacity-80 active:opacity-disabled transition-opacity z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 border-medium px-unit-6 min-w-unit-24 h-unit-12 text-medium gap-unit-3 rounded-full [&>svg]:max-w-[theme(spacing.unit-8)] data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none bg-transparent border-default text-foreground data-[hover=true]:opacity-hover w-full md:w-auto">Join a Meeting</button>


					</Link>
				</div>

				{/* <div className="mt-8">
				<Snippet hideSymbol hideCopyButton variant="flat">
					<span>
						Get started by editing <Code color="primary">app/page.tsx</Code>
					</span>
				</Snippet>
			</div> */}
			</section>
			<section className="text-gray-600 body-font">
				<div className="container px-5 py-24 mx-auto">
					<div className="text-center mb-20">
						<h1 className="sm:text-3xl text-2xl font-medium title-font text-black dark:text-white mb-4">Elevate your meetings with Visual Connect</h1>
						<p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-slate-700 dark:text-slate-400">
							Sign up now and unlock a world of
							high-quality video collaboration. </p>
						<div className="flex mt-6 justify-center">
							<div className="w-16 h-1 rounded-full bg-blue-600 inline-flex"></div>
						</div>
					</div>
					<div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
						<div className="p-4 md:w-1/3 flex flex-col text-center items-center">
							<div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-5 flex-shrink-0">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" data-slot="icon" className="w-6 h-6">
									<path d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z" />
								</svg>

							</div>
							<div className="flex-grow">
								<h2 className="text-black dark:text-white text-lg title-font font-medium mb-3">Crystal-Clear Video Meetings</h2>
								<p className="leading-relaxed text-base text-slate-700 dark:text-slate-400">Experience meetings in stunning high definition.
									Visual Connect ensures sharp and clear video quality,
									making every interaction feel like a face-to-face
									conversation</p>
								{/* <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
									<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
										<path d="M5 12h14M12 5l7 7-7 7"></path>
									</svg>
								</a> */}
							</div>
						</div>
						<div className="p-4 md:w-1/3 flex flex-col text-center items-center">
							<div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-5 flex-shrink-0">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" data-slot="icon" className="w-6 h-6">
									<path d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z" />
								</svg>


							</div>
							<div className="flex-grow">
								<h2 className="text-black dark:text-white  text-lg title-font font-medium mb-3">Intuitive User Interface</h2>
								<p className="leading-relaxed text-base text-slate-700 dark:text-slate-400">Navigate effortlessly through Visual Connect&apos;s
									user-friendly interface. Enjoy a seamless experience
									from scheduling meetings to sharing documents, all with
									a few clicks.                                </p>
								{/* <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
									<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
										<path d="M5 12h14M12 5l7 7-7 7"></path>
									</svg>
								</a> */}
							</div>
						</div>
						<div className="p-4 md:w-1/3 flex flex-col text-center items-center">
							<div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-5 flex-shrink-0">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" data-slot="icon" className="w-6 h-6">
									<path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clip-rule="evenodd" />
								</svg>

							</div>
							<div className="flex-grow">
								<h2 className="text-black dark:text-white text-lg title-font font-medium mb-3">Secure and Reliable Platform</h2>
								<p className="leading-relaxed text-base text-slate-700 dark:text-slate-400">Trust in the security of your data. Visual Connect
									employs top-notch encryption and security measures to
									ensure your meetings are private and confidential</p>
								{/* <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
									<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
										<path d="M5 12h14M12 5l7 7-7 7"></path>
									</svg>
								</a> */}
							</div>
						</div>
					</div>

				</div>
			</section>

			<section className="text-gray-600 body-font">
				<div className="container px-5 py-24 mx-auto">
					<div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
						<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
							<path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
						</svg>
						<p className="leading-relaxed text-lg text-black dark:text-white w-full">Greetings,

							I am thrilled to welcome you to Visual Connect, where innovation meets seamless collaboration. As the founder and developer, my vision for this platform is to transcend conventional boundaries, offering high-quality video meetings, an intuitive user experience, and top-tier security. Visual Connect is not just a tool; it&apos;s a catalyst for innovation, empowering users across diverse domains.

							I invite you to explore the possibilities, experience the difference, and join us in reshaping the way we connect online. Thank you for choosing Visual Connect.</p>
						<span className="inline-block h-1 w-10 rounded bg-blue-600 mt-8 mb-6"></span>
						<h2 className="text-black dark:text-white font-medium title-font tracking-wider text-sm">Tanmoy Ganguly</h2>
						<p className="text-gray-500">Founder and Developer</p>
					</div>
				</div>
			</section>

		</>
	);
}