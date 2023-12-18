import { title } from "@/components/primitives";
import Link from 'next/link';
import { Button } from "@nextui-org/react";
import { Card } from "@nextui-org/react";
import  Container  from "@nextui-org/react";
import { useRouter } from 'next/router';

export default function BlogPage() {
	// const router = useRouter();
	// const { id } = router.query;


	const blogPost = {
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

	if (!blogPost) {
		return <p>Loading...</p>;
	}
	return (
	
			

		<main className="container mx-auto mt-8">
			<article className="bg-white dark:bg-black p-6 rounded-lg text-left">
				<h1 className="text-4xl font-bold mb-4">{blogPost.title}</h1>
				<p className="text-black dark:text-white">{blogPost.content}</p>
				<h2 className="text-black dark:text-white text-3xl font-bold">{blogPost.subtitle1}</h2>
				<p className="text-black dark:text-white">{blogPost.content1}</p>
				<h2 className="text-black dark:text-white text-3xl font-bold">{blogPost.subtitle2}</h2>
				<p className="text-black dark:text-white">{blogPost.content2}</p>
				<h2 className="text-black dark:text-white text-3xl font-bold">{blogPost.subtitle3}</h2>
				<p className="text-black dark:text-white ">{blogPost.content3}</p>
				<h2 className="text-black dark:text-white text-3xl font-bold">{blogPost.subtitle4}</h2>
				<p className="text-black dark:text-white">{blogPost.content4}</p>
				<h2 className="text-black dark:text-white text-3xl font-bold">{blogPost.subtitle5}</h2>
				<p className="text-black dark:text-white">{blogPost.content5}</p>
				<h2 className="text-black dark:text-white text-3xl font-bold">{blogPost.subtitle6}</h2>
				<p className="text-black dark:text-white">{blogPost.content6}</p>
				<p className="text-black pt-5 dark:text-white text-xl">Thank you for choosing Visual Connect. Let&apos;s redefine online collaboration together.</p>
				<h2 className="text-black dark:text-white font-medium pt-6 title-font tracking-wider text-sm">Tanmoy Ganguly</h2>
				<p className="text-gray-500">Founder and Developer</p>
			
				

			</article>
		</main>

		
	);
}
