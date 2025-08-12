import Link from "next/link";

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
				<div className="max-w-4xl mx-auto px-4 py-3">
					<div className="flex items-center justify-between">
						<div className="flex items-center space-x-3">
							<div className="flex space-x-2">
								<div className="w-3 h-3 rounded-full bg-red-500"></div>
								<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
								<div className="w-3 h-3 rounded-full bg-green-500"></div>
							</div>
							<span className="text-sm text-muted-foreground">genesis@portfolio ~ %</span>
						</div>
						<Link 
							href="/terminal" 
							className="text-primary hover:text-primary/80 transition-colors text-sm font-medium border border-border px-3 py-1 rounded terminal-glow"
						>
							Enter dev mode →
						</Link>
					</div>
				</div>
			</div>

			<div className="max-w-4xl mx-auto px-4 py-8">
				{/* ASCII Art Header */}
				<div className="mb-8 border border-border rounded-lg p-6 bg-card">
					<pre className="text-primary text-xs sm:text-sm overflow-x-auto terminal-glow">{asciiArt}</pre>
					<div className="mt-4 space-y-2">
						<p className="text-primary font-semibold terminal-glow">Welcome to Genesis Guerrero's Portfolio</p>
						<p className="text-muted-foreground">Software Engineer | Infrastructure Team Lead | Vim User</p>
					</div>
				</div>

				{/* Content Sections */}
				<div className="space-y-6">
					{/* About Section */}
					<section className="border border-border rounded-lg p-6 bg-card">
						<h2 className="text-primary text-lg font-semibold mb-4 flex items-center">
							<span className="text-muted-foreground mr-2">$</span>
							cat about.txt
						</h2>
						<div className="space-y-3 pl-4 border-l-2 border-border">
							<div className="text-sm text-muted-foreground space-y-1">
								<p><strong className="text-foreground">Name:</strong> Genesis Guerrero Martínez</p>
								<p><strong className="text-foreground">Location:</strong> Oslo, Norway</p>
								<p><strong className="text-foreground">Origin:</strong> Santa Marta, Colombia</p>
								<p><strong className="text-foreground">Languages:</strong> Spanish (native), English, Norwegian (learning)</p>
							</div>
							<div className="text-sm space-y-2">
								<p>A Software Engineer with rock-solid experience in building complex web applications.</p>
								<p>Since 2014, I've developed many types of web applications and built tools to help businesses grow.</p>
								<p className="text-primary">NodeJS School Day Speaker | Python Ambassador in Colombia</p>
								<p className="text-accent">Terminal enthusiast | TUI applications lover</p>
							</div>
						</div>
					</section>

					{/* Work Section */}
					<section className="border border-border rounded-lg p-6 bg-card">
						<h2 className="text-primary text-lg font-semibold mb-4 flex items-center">
							<span className="text-muted-foreground mr-2">$</span>
							./current_job.sh
						</h2>
						<div className="space-y-3 pl-4 border-l-2 border-border">
							<p className="text-primary font-semibold">Currently @ Ventura TRAVEL</p>
							<p className="text-sm">Position: Software Engineer | Infrastructure Team Manager</p>
							<p className="text-sm text-muted-foreground">Experience: 11 years in software development</p>
						</div>
					</section>

					{/* Skills Section */}
					<section className="border border-border rounded-lg p-6 bg-card">
						<h2 className="text-primary text-lg font-semibold mb-4 flex items-center">
							<span className="text-muted-foreground mr-2">$</span>
							ls -la /usr/bin/skills/
						</h2>
						<div className="space-y-4 pl-4 border-l-2 border-border text-sm">
							<div>
								<p className="text-primary font-semibold mb-2">Expert:</p>
								<ul className="space-y-1 ml-4">
									<li>├── Web development</li>
									<li>├── TypeScript</li>
									<li>├── React</li>
									<li>└── Node.js</li>
								</ul>
							</div>
							<div>
								<p className="text-primary font-semibold mb-2">Proficient:</p>
								<ul className="space-y-1 ml-4">
									<li>├── k8s, GCP, argoCD, gitlab-CI</li>
									<li>├── Python</li>
									<li>├── Golang</li>
									<li>└── PHP</li>
								</ul>
							</div>
							<div>
								<p className="text-primary font-semibold mb-2">Currently working:</p>
								<ul className="space-y-1 ml-4">
									<li>└── AI-based applications</li>
								</ul>
							</div>
						</div>
					</section>

					{/* Interests Section */}
					<section className="border border-border rounded-lg p-6 bg-card">
						<h2 className="text-primary text-lg font-semibold mb-4 flex items-center">
							<span className="text-muted-foreground mr-2">$</span>
							grep -r "hobbies" ~/personal/
						</h2>
						<div className="space-y-2 pl-4 border-l-2 border-border text-sm">
							<p>☕ I drink a lot of coffee</p>
							<p>🎸 Rock and metal music enthusiast</p>
							<p>🍺 Craft beer lover</p>
							<p>🎵 Bass guitar player (my zen time)</p>
							<p>🎮 Souls-like and JRPG games addict</p>
							<p>📺 Anime/manga fan (Berserk is my favorite)</p>
							<p>🥾 Hiking with my beautiful wife</p>
							<p>🚀 Open to early-stage startups</p>
							<p>⌨ And... I use vim BTW (<span className="text-primary">github.com/gengue/dotfiles</span>)</p>
						</div>
					</section>

					{/* Contact Section */}
					<section className="border border-border rounded-lg p-6 bg-card">
						<h2 className="text-primary text-lg font-semibold mb-4 flex items-center">
							<span className="text-muted-foreground mr-2">$</span>
							cat contact.json
						</h2>
						<div className="pl-4 border-l-2 border-border">
							<pre className="text-sm">
{`{
  "twitter": "@geneguer",
  "github": "github.com/genesisguerrero",
  "website": "genesisguerrero.com"
}`}
							</pre>
						</div>
					</section>
				</div>

				{/* Footer */}
				<footer className="mt-12 text-center">
					<div className="border border-border rounded-lg p-4 bg-card">
						<p className="text-muted-foreground text-sm">Terminal Portfolio v1.0.0</p>
						<div className="mt-2">
							<Link 
								href="/terminal" 
								className="text-primary hover:text-primary/80 transition-colors text-sm underline terminal-glow"
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