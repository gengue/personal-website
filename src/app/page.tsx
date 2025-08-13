import Link from "next/link";
import Image from "next/image";
import { ThemeSwitcher } from "@/components/theme-switcher";

export default function Home() {
	const asciiArt = `
   _____ ______ _   _ ______  _____ _____  _____ 
  / ____|  ____| \\ | |  ____|/ ____|_   _|/ ____|
 | |  __| |__  |  \\| | |__  | (___   | | | (___  
 | | |_ |  __| | . \` |  __|  \\___ \\  | |  \\___ \\ 
 | |__| | |____| |\\  | |____ ____) |_| |_ ____) |
  \\_____|______|_| \\_|______|_____/|_____|_____/ `;

	return (
		<div className="min-h-screen bg-background text-foreground font-mono">
			{/* Terminal Header */}
			<div className="border-b border-border bg-card">
				<div className="max-w-4xl mx-auto px-2 sm:px-4 py-3">
					<div className="flex items-center justify-between">
						<div className="flex items-center space-x-2 sm:space-x-3">
							<div className="flex space-x-1 sm:space-x-2">
								<div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
								<div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
								<div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
							</div>
							<span className="text-xs sm:text-sm text-muted-foreground hidden xs:inline">
								genesis@portfolio ~ %
							</span>
						</div>
						<div className="flex items-center gap-2 sm:gap-3">
							<ThemeSwitcher />
							<Link
								href="/terminal"
								className="text-primary hover:text-primary/80 transition-colors text-xs sm:text-sm font-medium border border-border px-2 py-1 sm:px-3 rounded terminal-glow"
							>
								<span className="hidden xs:inline">Enter dev mode →</span>
								<span className="xs:hidden">Dev →</span>
							</Link>
						</div>
					</div>
				</div>
			</div>

			<div className="max-w-4xl mx-auto px-2 sm:px-4 py-4 sm:py-8">
				{/* ASCII Art Header */}
				<div className="mb-6 sm:mb-8 border border-border rounded-lg p-3 sm:p-6 bg-card">
					<div className="flex items-center gap-4 sm:gap-8">
						<div className="flex-1 min-w-0">
							<pre className="text-primary text-[0.69rem] xs:text-[0.5rem] sm:text-xs md:text-sm overflow-x-auto terminal-glow whitespace-pre sm:whitespace-pre-wrap">
								{asciiArt}
							</pre>
						</div>
						<div className="hidden md:flex flex-shrink-0 flex-col items-center justify-center">
							<div className="mb-1">
								<p className="text-muted-foreground text-xs opacity-75 font-mono">
									<span className="text-primary">$</span> icat avatar.jpg
								</p>
							</div>
							<Image
								src="/me-pixel.png"
								alt="Genesis Guerrero - Pixel Avatar"
								width={80}
								height={80}
								className="w-16 h-16 sm:w-20 sm:h-20 pixel-avatar border-2 border-primary/50 rounded object-cover"
								style={{ objectFit: "cover" }}
								priority
							/>
						</div>
					</div>
					<div className="mt-3 sm:mt-4 space-y-1 sm:space-y-2">
						<p className="text-primary font-semibold terminal-glow">
							Welcome to Genesis Guerrero's Portfolio
						</p>
						<p className="text-sm pb-4">
							A quirky code alchemist building playful things in the cloud
						</p>
						<p className="text-muted-foreground text-xs">
							Terminal Whisperer | Automation Addict | Neovim Nerd | Opinionated
						</p>
					</div>
				</div>

				{/* Content Sections */}
				<div className="space-y-4 sm:space-y-6">
					{/* About Section */}
					<section className="border border-border rounded-lg p-3 sm:p-6 bg-card">
						<div className="agnoster-segment agnoster-about mb-4">
							<h2 className="font-semibold flex items-center">
								<span className="mr-2">$</span>
								<span>about</span>
							</h2>
						</div>
						<div className="space-y-2 sm:space-y-3 pl-2 sm:pl-4 border-l-2 border-border">
							<div className="text-muted-foreground space-y-1">
								<p>
									<strong className="text-foreground">Name:</strong> Genesis
									Guerrero Martínez
								</p>
								<p>
									<strong className="text-foreground">Location:</strong> Oslo,
									Norway
								</p>
								<p>
									<strong className="text-foreground">Origin:</strong> Santa
									Marta, Colombia
								</p>
								<p>
									<strong className="text-foreground">Languages:</strong>{" "}
									Spanish (native), English, Norwegian (learning)
								</p>
							</div>
							<div className="py-2 space-y-2">
								<p>
									A Software Engineer with rock-solid experience in building
									complex web applications.
								</p>
								<p>
									Since 2014, I've developed many types of web applications and
									built tools to help businesses grow.
								</p>
							</div>
							<div className="text-sm space-y-2">
								<p className="text-accent">
									TUI applications lover | AI Agent Adventurer | Refactor
									Renegade | Automation Aficionado
								</p>
								<p className="text-accent">
									NodeJS School Day Speaker | Python Ambassador in Colombia
								</p>
							</div>
						</div>
					</section>

					{/* Work Section */}
					<section className="border border-border rounded-lg p-3 sm:p-6 bg-card">
						<div className="agnoster-segment agnoster-work mb-4">
							<h2 className="font-semibold flex items-center">
								<span className="mr-2">$</span>
								<span>work</span>
							</h2>
						</div>
						<div className="space-y-2 sm:space-y-3 pl-2 sm:pl-4 border-l-2 border-border">
							<p className="text-primary font-semibold">
								Currently @ Ventura TRAVEL
							</p>
							<p className="">
								<strong>Position: </strong>
								<span className="text-muted-foreground">
									Software Engineer | Infrastructure Team Manager
								</span>
							</p>
							<p className="">
								<strong>Experience: </strong>
								<span className="text-muted-foreground">
									11 years in software development
								</span>
							</p>
						</div>
					</section>

					{/* Skills Section */}
					<section className="border border-border rounded-lg p-3 sm:p-6 bg-card">
						<div className="agnoster-segment agnoster-skills mb-4">
							<h2 className="font-semibold flex items-center">
								<span className="mr-2">$</span>
								<span>skills</span>
							</h2>
						</div>
						<div className="space-y-3 sm:space-y-4 pl-2 sm:pl-4 border-l-2 border-border text-sm">
							<div>
								<p className="text-primary font-semibold mb-1 sm:mb-2">
									Expert:
								</p>
								<ul className="space-y-1 ml-2 sm:ml-4">
									<li>├── Web development</li>
									<li>├── TypeScript</li>
									<li>├── React</li>
									<li>└── Node.js</li>
								</ul>
							</div>
							<div>
								<p className="text-primary font-semibold mb-1 sm:mb-2">
									Proficient:
								</p>
								<ul className="space-y-1 ml-2 sm:ml-4">
									<li>├── k8s, GCP, argoCD, gitlab-CI</li>
									<li>├── Python</li>
									<li>├── Golang</li>
									<li>└── PHP</li>
								</ul>
							</div>
							<div>
								<p className="text-primary font-semibold mb-1 sm:mb-2">
									Currently working:
								</p>
								<ul className="space-y-1 ml-2 sm:ml-4">
									<li>└── AI-based applications</li>
								</ul>
							</div>
						</div>
					</section>

					{/* Interests Section */}
					<section className="border border-border rounded-lg p-3 sm:p-6 bg-card">
						<div className="agnoster-segment agnoster-interests mb-4">
							<h2 className="font-semibold flex items-center">
								<span className="mr-2">$</span>
								<span>interests</span>
							</h2>
						</div>
						<div className="space-y-1 sm:space-y-2 pl-2 sm:pl-4 border-l-2 border-border text-sm">
							<p>☕ I drink a lot of coffee</p>
							<p>🎸 Rock and metal music enthusiast</p>
							<p>🍺 Craft beer lover</p>
							<p>🎵 Bass guitar player (my zen time)</p>
							<p>🎮 Souls-like and JRPG games addict</p>
							<p>📺 Anime/manga fan (Berserk is my favorite)</p>
							<p>🥾 Hiking with my beautiful wife</p>
							<p>🚀 Open to early-stage startups</p>
							<p>
								⌨ And... I use vim BTW (
								<a
									href="https://github.com/gengue/dotfiles"
									target="_blank"
									rel="noopener noreferrer"
									className="text-primary hover:text-primary/80 transition-colors underline break-all"
								>
									github.com/gengue/dotfiles
								</a>
								)
							</p>
						</div>
					</section>

					{/* Contact Section */}
					<section className="border border-border rounded-lg p-3 sm:p-6 bg-card">
						<div className="agnoster-segment agnoster-contact mb-4">
							<h2 className="font-semibold flex items-center">
								<span className="mr-2">$</span>
								<span>contact</span>
							</h2>
						</div>
						<div className="pl-2 sm:pl-4 border-l-2 border-border space-y-2 text-sm">
							<div className="flex items-center gap-2">
								<span className="text-muted-foreground">"twitter":</span>
								<a
									href="https://twitter.com/geneguer"
									target="_blank"
									rel="noopener noreferrer"
									className="text-primary hover:text-primary/80 transition-colors underline hover:underline terminal-glow"
								>
									@geneguer
								</a>
							</div>
							<div className="flex items-center gap-2">
								<span className="text-muted-foreground">"github":</span>
								<a
									href="https://github.com/genesisguerrero"
									target="_blank"
									rel="noopener noreferrer"
									className="text-primary hover:text-primary/80 transition-colors underline hover:underline terminal-glow"
								>
									github.com/genesisguerrero
								</a>
							</div>
							<div className="flex items-center gap-2">
								<span className="text-muted-foreground">"linkedin":</span>
								<a
									href="https://www.linkedin.com/in/genesis-guerrero/"
									target="_blank"
									rel="noopener noreferrer"
									className="text-primary hover:text-primary/80 transition-colors underline hover:underline terminal-glow"
								>
									linkedin.com/in/genesis-guerrero
								</a>
							</div>
							<div className="flex items-center gap-2">
								<span className="text-muted-foreground">"website":</span>
								<a
									href="https://genesisguerrero.com"
									target="_blank"
									rel="noopener noreferrer"
									className="text-primary hover:text-primary/80 transition-colors underline hover:underline terminal-glow"
								>
									genesisguerrero.com
								</a>
							</div>
						</div>
					</section>
				</div>

				{/* Footer */}
				<footer className="mt-8 sm:mt-12 text-center">
					<div className="border border-border rounded-lg p-3 sm:p-4 bg-card">
						<p className="text-muted-foreground text-sm">
							Terminal Portfolio v1.0.0
						</p>
						<div className="mt-2">
							<Link
								href="/terminal"
								className="text-primary hover:text-primary/80 transition-colors text-xs sm:text-sm underline terminal-glow"
							>
								Switch to dev mode
							</Link>
						</div>
					</div>
				</footer>
			</div>
		</div>
	);
}
