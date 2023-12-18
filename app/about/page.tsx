import React from "react";
import { Image } from "@nextui-org/react";
import { title, subtitle } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import NextImage from "next/image";

export default function AboutPage() {
	const about = {
		// id: id,
		title: 'Unveiling Visual Connect: A New Dimension in Online Collaboration',
		subtitle1: 'High-Quality Video Meetings',
		subtitle2: 'User-Friendly Interface',
		subtitle3: 'Security You Can Trust',
		subtitle4: 'Free for Everyone',
		subtitle5: 'Elevate Your Meetings, Empower Your Collaboration',
		subtitle6: 'Join the Visual Connect Revolution',
		content: 'Welcome to the future of online collaboration! In an era where connectivity is paramount, Visual Connect emerges as the game-changer, revolutionizing the way we connect, communicate, and collaborate. As the founder and developer of Visual Connect, I am thrilled to introduce you to a platform that transcends traditional boundaries, offering a dynamic and immersive experience for users around the globe.',
		content1: 'At the core of Visual Connect is the commitment to providing high-quality video meetings. We understand that clarity and precision are non-negotiable when it comes to virtual interactions. Visual Connect ensures crystal-clear video quality, offering an unparalleled level of communication that makes each meeting feel like an in-person conversation.',
		content2: 'Navigating through online meetings should be intuitive and effortless. Visual Connect boasts a user-friendly interface designed to enhance user experience. From initiating video calls to sharing documents seamlessly, our platform prioritizes simplicity without compromising on powerful functionality.',
		content3: 'Your privacy is our priority. Visual Connect employs state-of-the-art encryption and security measures to ensure that your data remains confidential and protected. Rest assured that your meetings on Visual Connect are secure, enabling you to focus on what matters most—collaboration.',
		content4: 'Breaking barriers to collaboration, Visual Connect is now free for everyone! We believe that access to premium features should not be limited by financial constraints. Enjoy the full suite of Visual Connects capabilities without the burden of subscription fees.',
		content5: 'Visual Connect is not just a meeting platform; its a catalyst for innovation and productivity.Elevate your virtual meetings, empower your team, and unlock the full potential of collaborative endeavors.Whether youre a business professional, educator, or creative mind, Visual Connect adapts to your unique needs.',
		content6: 'As the founder and developer of Visual Connect, I invite you to embark on this exciting journey with us. Experience the difference, explore the possibilities, and be part of reshaping the way we connect online. Visual Connect is not just a tool; its a vision for a more connected and collaborative world.',

	};

	if (!about) {
		return <p>Loading...</p>;
	}
	return (





    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-col px-5 py-4 justify-left items-left">
          <div className="w-full flex flex-col mb-16 items-center text-center">
            <h1 className={title()}>
              <span className="text-black dark:text-white">
                Welcome to Visual Connect: Redefining Online Collaboration
              </span>
            </h1>
            <p className="mb-8 mt-3 leading-relaxed text-gray-800 dark:text-gray-300">
              At Visual Connect, we believe that seamless communication is at
              the heart of successful collaborations. As the visionary founder
              and developer, I am proud to introduce you to a revolutionary
              online meeting platform that goes beyond the ordinary - welcome to
              Visual Connect!
            </p>

            <p className="text-sm mt-2 text-gray-500 mb-8 w-full">
              Tanmoy Ganguly, Founder
            </p>
          </div>
        </div>
		  </section>
		  



		  <main className="container mx-auto mt-8">
			  <article className="bg-white dark:bg-black p-6 rounded-lg text-left">
				  <h1 className="text-4xl font-bold mb-4">{about.title}</h1>
				  <p className="text-black dark:text-white">{about.content}</p>
				  <h2 className="text-black dark:text-white text-3xl font-bold">{about.subtitle1}</h2>
				  <p className="text-black dark:text-white">{about.content1}</p>
				  <h2 className="text-black dark:text-white text-3xl font-bold">{about.subtitle2}</h2>
				  <p className="text-black dark:text-white">{about.content2}</p>
				  <h2 className="text-black dark:text-white text-3xl font-bold">{about.subtitle3}</h2>
				  <p className="text-black dark:text-white ">{about.content3}</p>
				  <h2 className="text-black dark:text-white text-3xl font-bold">{about.subtitle4}</h2>
				  <p className="text-black dark:text-white">{about.content4}</p>
				  <h2 className="text-black dark:text-white text-3xl font-bold">{about.subtitle5}</h2>
				  <p className="text-black dark:text-white">{about.content5}</p>
				  <h2 className="text-black dark:text-white text-3xl font-bold">{about.subtitle6}</h2>
				  <p className="text-black dark:text-white">{about.content6}</p>
				  <p className="text-black pt-5 dark:text-white text-xl">Thank you for choosing Visual Connect. Lets redefine online collaboration together.</p>
				  <h2 className="text-black dark:text-white font-medium pt-6 title-font tracking-wider text-sm">Tanmoy Ganguly</h2>
				  <p className="text-gray-500">Founder and Developer</p>



			  </article>
		  </main>
    </>
  );
}
