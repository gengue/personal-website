import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
	Coffee,
	Gamepad2,
	Beer,
	Music2,
	BookOpen,
	Code2,
	Rocket,
	Linkedin,
	Github,
	Instagram,
	Twitter,
} from "lucide-react";
import { Rubik_Mono_One } from "next/font/google";
import { Metadata, Viewport } from "next";

const rubikMono = Rubik_Mono_One({
	weight: "400",
	subsets: ["latin"],
});

export const viewport: Viewport = {
	themeColor: "#00dbee",
};

export const metadata: Metadata = {
	title: "Genesis Guerrero",
	description:
		"Genesis Guerrero Martinez is a Software Engineer & Open Source enthusiast based in Norway, with rock-solid experience in building complex applications with modern technologies",
	keywords:
		"Genesis Alberto Guerrero Martinez,Santa Marta,Colombia,Software Developer,programmer,Norway,Web Developer, beer",
	openGraph: {
		title: "Genesis Guerrero Martinez",
		description:
			"Genesis Guerrero Martinez is a Software Engineer & Open Source enthusiast based in Norway, with rock-solid experience in building complex applications with modern technologies",
		type: "article",
	},
	verification: {
		google: "OFQHcTJEaaf4sDj5EfqvwdlH3542ks9AZARNQ_KIzMY",
	},
};

const yearsOfExp = new Date().getFullYear() - 2014;
const currentTitle = "Software Engineer";
const currentCompany = "Ventura TRAVEL";

export default function Page() {
	return (
		<div className="min-h-screen bg-black text-white">
			{/* Hero Section */}
			<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-b from-[#00dbee]/20 to-black/95" />
				<div className="container relative px-4 py-32 mx-auto">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div className="space-y-8 text-center lg:text-start order-2 lg:order-1">
							<h1
								className={`${rubikMono.className} text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter`}
							>
								I'm <span className="text-[#00dbee]">Genesis</span>
							</h1>
							<p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
								A Software Engineer with rock-solid experience in building
								complex web applications{" "}
							</p>
						</div>
						<div className="relative aspect-square mx-auto order-1 lg:order-2">
							<Image
								src="/me2.jpg"
								alt="Genesis Guerrero - Software Engineer"
								height={400}
								width={400}
								className="object-cover rounded-full w-[300px] h-[300px] md:w-[500px] md:h-[500px]"
								priority
							/>
						</div>
					</div>
				</div>
			</section>

			{/* About Section */}
			<section className="py-32 bg-black">
				<div className="container px-4 mx-auto">
					<h2
						className={`${rubikMono.className} text-5xl md:text-6xl font-bold mb-16`}
					>
						About me
					</h2>
					<div className="grid lg:grid-cols-2 gap-16">
						<div className="space-y-6 text-lg text-gray-300">
							<p>
								Genesis Guerrero Martínez was born in Santa Marta, Colombia.
								Since 2014 I have developed many types of web applications and
								building tools to help businesses grow.
							</p>
							<p>
								I share my experience in web development, frontend research,
								open source and developer lifestyle on Twitter (I refuse to call
								it X).
							</p>
							<p>
								It's my pleasure to have been named a Python Ambassador in
								Colombia and participated as speaker in the NodeJS school day.
							</p>
							<p>
								Currently, I am working as {currentTitle} at {currentCompany}.
							</p>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							<div className="p-6 bg-white/5 rounded-xl">
								<h3 className="text-[#00dbee] text-xl font-semibold mb-2">
									{yearsOfExp}+ years of experience
								</h3>
								<p className="text-gray-400">Software Development</p>
							</div>
							<div className="p-6 bg-white/5 rounded-xl">
								<h3 className="text-[#00dbee] text-xl font-semibold mb-2">
									IT consultant
								</h3>
								<p className="text-gray-400">Enterprise Solutions</p>
							</div>
							<div className="p-6 bg-white/5 rounded-xl">
								<h3 className="text-[#00dbee] text-xl font-semibold mb-2">
									Performance
								</h3>
								<p className="text-gray-400">Engineering Excellence</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Skills Section */}
			<section className="py-32 bg-black/50">
				<div className="container px-4 mx-auto">
					<h2
						className={`${rubikMono.className} text-5xl md:text-6xl font-bold mb-8`}
					>
						What I can do
					</h2>
					<p className="text-xl text-gray-300 mb-16 max-w-3xl">
						A freelance software engineer specialized in both front-end and
						back-end web development with solid experience in building scalable
						products. I can bring your ideas to life with code or help you to
						improve your existing product.
					</p>
					<div className="flex flex-wrap gap-3">
						{[
							"NodeJS",
							"TypeScript",
							"NextJS",
							"ReactJS",
							"Postgres",
							"Python",
							"Django",
							"FastAPI",
							"PWA",
							"AWS",
							"GCP",
							"Golang",
							"Hasura",
							"GraphQL",
							"K8s",
						].map((skill) => (
							<Badge
								key={skill}
								variant="secondary"
								className="text-[#00dbee] bg-[#00dbee]/10 hover:bg-[#00dbee]/20 px-4 py-2 text-lg"
							>
								#{skill}
							</Badge>
						))}
					</div>
				</div>
			</section>

			{/* Random Facts Section */}
			<section className="py-24 bg-black">
				<div className="container px-4 mx-auto">
					<h2
						className={`${rubikMono.className} text-5xl md:text-6xl font-bold mb-16`}
					>
						Some facts
					</h2>
					<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
						{[
							{ icon: Coffee, text: "I drink a lot of coffee" },
							{ icon: Music2, text: "I'm into rock and metal music" },
							{ icon: Beer, text: "I love craft beer, especially IPAs" },
							{ icon: Music2, text: "Play the bass guitar is my zen time" },
							{
								icon: Gamepad2,
								text: "I'm addicted to Souls-like and JRPG games",
							},
							{
								icon: Code2,
								text: "I'm currently learning AI-based applications and Golang",
							},
							{
								icon: BookOpen,
								text: "I like anime and manga, Berserk is my favorite",
							},
							{
								icon: Rocket,
								text: "I am open to participate in early-stage startups",
							},
						].map((fact, index) => (
							<div
								key={index}
								className="flex items-start space-x-4 p-6 bg-white/5 rounded-xl"
							>
								<fact.icon className="w-6 h-6 text-[#00dbee]" />
								<p className="text-gray-300">{fact.text}</p>
							</div>
						))}
					</div>
					<p className="text-3xl">And... I use vim BTW</p>
				</div>
			</section>

			{/* Socials Section */}
			<section className="py-32 bg-gradient-to-t from-[#00dbee]/20 to-black">
				<div className="container px-4 mx-auto">
					<h2
						className={`${rubikMono.className} text-5xl md:text-6xl font-bold mb-16`}
					>
						Let's Connect
					</h2>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
						<a
							href="https://twitter.com/geneguer"
							target="_blank"
							rel="noopener noreferrer"
							className="group flex items-center gap-4 p-6 bg-white/5 rounded-xl hover:bg-[#00dbee]/10 transition-all"
						>
							<Twitter className="w-8 h-8 text-[#00dbee]" />
							<div>
								<p className="font-semibold">Twitter</p>
								<p className="text-sm text-gray-400 group-hover:text-[#00dbee]">
									@geneguer
								</p>
							</div>
						</a>

						<a
							href="https://www.linkedin.com/in/genesis-guerrero/"
							target="_blank"
							rel="noopener noreferrer"
							className="group flex items-center gap-4 p-6 bg-white/5 rounded-xl hover:bg-[#00dbee]/10 transition-all"
						>
							<Linkedin className="w-8 h-8 text-[#00dbee]" />
							<div>
								<p className="font-semibold">LinkedIn</p>
								<p className="text-sm text-gray-400 group-hover:text-[#00dbee]">
									genesis-guerrero
								</p>
							</div>
						</a>

						<a
							href="https://github.com/gengue"
							target="_blank"
							rel="noopener noreferrer"
							className="group flex items-center gap-4 p-6 bg-white/5 rounded-xl hover:bg-[#00dbee]/10 transition-all"
						>
							<Github className="w-8 h-8 text-[#00dbee]" />
							<div>
								<p className="font-semibold">GitHub</p>
								<p className="text-sm text-gray-400 group-hover:text-[#00dbee]">
									gengue
								</p>
							</div>
						</a>

						<a
							href="https://www.instagram.com/genesis.codes/"
							target="_blank"
							rel="noopener noreferrer"
							className="group flex items-center gap-4 p-6 bg-white/5 rounded-xl hover:bg-[#00dbee]/10 transition-all"
						>
							<Instagram className="w-8 h-8 text-[#00dbee]" />
							<div>
								<p className="font-semibold">Instagram</p>
								<p className="text-sm text-gray-400 group-hover:text-[#00dbee]">
									genesis.codes
								</p>
							</div>
						</a>
					</div>
				</div>
			</section>
		</div>
	);
}
