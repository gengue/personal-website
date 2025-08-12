"use client";
import React, { useState, useEffect, useRef } from "react";

interface CommandHistoryEntry {
	command: string;
	output: React.ReactNode;
	timestamp: Date;
}

type SectionKey = "home" | "about" | "work" | "skills" | "interests" | "contact";

export default function Home() {
	const [currentSection, setCurrentSection] = useState<SectionKey>("home");
	const [commandHistory, setCommandHistory] = useState<CommandHistoryEntry[]>([]);
	const [currentCommand, setCurrentCommand] = useState("");
	const terminalRef = useRef<HTMLDivElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);

	const asciiArt = `
   _____ ______ _   _ ______  _____ _____  _____ 
  / ____|  ____| \\ | |  ____|/ ____|_   _|/ ____|
 | |  __| |__  |  \\| | |__  | (___   | | | (___  
 | | |_ |  __| | . \` |  __|  \\___ \\  | |  \\___ \\ 
 | |__| | |____| |\\  | |____ ____) |_| |_ ____) |
  \\_____|______|_| \\_|______|_____/|_____|_____/ `;

	const sections = {
		home: {
			title: "~/home",
			content: (
				<div>
					<pre className="text-green-400 text-xs sm:text-sm">{asciiArt}</pre>
					<div className="mt-4">
						<p className="text-green-400">
							Welcome to Genesis Guerrero's terminal
						</p>
						<p className="text-gray-400 mt-2">
							Software Engineer | Infrastructure Team Lead | Vim User
						</p>
						<p className="text-gray-500 mt-4">
							Type 'help' to see available commands
						</p>
					</div>
				</div>
			),
		},
		about: {
			title: "~/about",
			content: (
				<div>
					<p className="text-green-400 mb-2">&gt; cat about.txt</p>
					<div className="text-gray-300 pl-2">
						<p>Name: Genesis Guerrero Martínez</p>
						<p>Location: Oslo, Norway</p>
						<p>Origin: Santa Marta, Colombia</p>
						<p>Languages: Spanish (native), English, Norwegian (learning)</p>
						<p className="mt-2">
							A Software Engineer with rock-solid experience in building complex
							web applications.
						</p>
						<p>
							Since 2014, I've developed many types of web applications and
							built tools to help businesses grow.
						</p>
						<p className="mt-2">
							NodeJS School Day Speaker | Python Ambassador in Colombia
						</p>
						<p className="mt-2">
							Terminal enthusiast | TUI applications lover
						</p>
					</div>
				</div>
			),
		},
		work: {
			title: "~/work",
			content: (
				<div>
					<p className="text-green-400 mb-2">&gt; ./current_job.sh</p>
					<div className="text-gray-300 pl-2">
						<p className="text-amber-400">Currently @ Ventura TRAVEL</p>
						<p>Position: Software Engineer | Infrastructure Team Manager</p>
						<p className="mt-2 text-gray-400">
							Experience: 11 years in software development
						</p>
					</div>
				</div>
			),
		},
		skills: {
			title: "~/skills",
			content: (
				<div>
					<p className="text-green-400 mb-2">&gt; ls -la /usr/bin/skills/</p>
					<div className="text-gray-300 pl-2">
						<p className="text-amber-400">Expert:</p>
						<p>├── Web development</p>
						<p>├── TypeScript</p>
						<p>├── React</p>
						<p>└── Node.js</p>
						<p className="mt-2 text-amber-400">Proficient:</p>
						<p>├── k8s, GCP, argoCD, gitlab-CI</p>
						<p>├── Python</p>
						<p>├── Golang</p>
						<p>└── PHP</p>
						<p className="mt-2 text-amber-400">Currently working:</p>
						<p>└── AI-based applications</p>
					</div>
				</div>
			),
		},
		interests: {
			title: "~/interests",
			content: (
				<div>
					<p className="text-green-400 mb-2">
						&gt; grep -r "hobbies" ~/personal/
					</p>
					<div className="text-gray-300 pl-2">
						<p>☕ I drink a lot of coffee</p>
						<p>🎸 Rock and metal music enthusiast</p>
						<p>🍺 Craft beer lover</p>
						<p>🎵 Bass guitar player (my zen time)</p>
						<p>🎮 Souls-like and JRPG games addict</p>
						<p>📺 Anime/manga fan (Berserk is my favorite)</p>
						<p>🥾 Hiking with my beautiful wife</p>
						<p>🚀 Open to early-stage startups</p>
						<p>⌨ And... I use vim BTW (<span className="text-cyan-400">github.com/gengue/dotfiles</span>)</p>
					</div>
				</div>
			),
		},
		contact: {
			title: "~/contact",
			content: (
				<div>
					<p className="text-green-400 mb-2">&gt; cat contact.json</p>
					<div className="text-gray-300 pl-2">
						<p>{"{"}</p>
						<p>  "twitter": "@geneguer",</p>
						<p>  "github":  "github.com/genesisguerrero",</p>
						<p>  "website": "genesisguerrero.com"</p>
						<p>{"}"}</p>
					</div>
				</div>
			),
		},
	} as const;

	const commands = {
		help: () => ({
			output: (
				<div className="text-gray-300">
					<p className="text-green-400 mb-2">Available commands:</p>
					<p> about - About me</p>
					<p> work - Current position and experience</p>
					<p> skills - Technical skills</p>
					<p> interests - Personal interests</p>
					<p> contact - Contact information</p>
					<p> clear - Clear terminal</p>
					<p> home - Return to home</p>
				</div>
			),
		}),
		about: () => ({ section: "about" }),
		work: () => ({ section: "work" }),
		skills: () => ({ section: "skills" }),
		interests: () => ({ section: "interests" }),
		contact: () => ({ section: "contact" }),
		home: () => ({ section: "home" }),
		clear: () => ({ clear: true }),
		"": () => ({ output: null }),
	} as const;

	const availableCommands = [
		"help",
		"about",
		"work",
		"skills",
		"interests",
		"contact",
		"home",
		"clear",
	];

	const handleTabComplete = (currentInput: string) => {
		const input = currentInput.trim().toLowerCase();
		if (!input) return currentInput;

		const matches = availableCommands.filter((cmd) =>
			cmd.startsWith(input)
		);

		if (matches.length === 1) {
			return matches[0];
		} else if (matches.length > 1) {
			// Find common prefix of all matches
			let commonPrefix = matches[0];
			for (let i = 1; i < matches.length; i++) {
				let j = 0;
				while (
					j < commonPrefix.length &&
					j < matches[i].length &&
					commonPrefix[j] === matches[i][j]
				) {
					j++;
				}
				commonPrefix = commonPrefix.substring(0, j);
			}
			return commonPrefix.length > input.length ? commonPrefix : currentInput;
		}

		return currentInput;
	};

	const handleCommand = (cmd: string) => {
		const trimmedCmd = cmd.trim().toLowerCase() as keyof typeof commands;
		const commandFunc =
			commands[trimmedCmd] ||
			(() => ({
				output: (
					<p className="text-red-400">
						Command not found: {trimmedCmd}. Type 'help' for available commands.
					</p>
				),
			}));

		const result = commandFunc();

		if ('clear' in result && result.clear) {
			setCommandHistory([]);
			setCurrentSection("home");
		} else {
			const newEntry = {
				command: cmd,
				output: 'output' in result ? result.output : null,
				timestamp: new Date(),
			};

			setCommandHistory((prev) => [...prev, newEntry]);

			if ('section' in result && result.section) {
				setCurrentSection(result.section as SectionKey);
			}
		}
	};

	useEffect(() => {
		if (terminalRef.current) {
			terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
		}
	}, [commandHistory, currentSection]);

	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.focus();
		}
	}, []);

	return (
		<div className="min-h-screen bg-black text-green-400 font-mono p-4">
			<div className="max-w-4xl mx-auto">
				<div className="border border-green-400 rounded-lg p-4 h-[85vh] flex flex-col">
					<div className="flex items-center mb-4 pb-2 border-b border-green-400">
						<div className="flex space-x-2">
							<div className="w-3 h-3 rounded-full bg-red-500"></div>
							<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
							<div className="w-3 h-3 rounded-full bg-green-500"></div>
						</div>
						<div className="ml-4 text-gray-400">
							genesis@terminal {sections[currentSection].title}
						</div>
					</div>

					<div ref={terminalRef} className="flex-1 overflow-y-auto mb-4">
						{currentSection === "home" &&
							commandHistory.length === 0 &&
							sections.home.content}

						{commandHistory.map((entry, index) => (
							<div key={index} className="mb-2">
								<div className="flex items-start">
									<span className="text-green-400 mr-2">$</span>
									<span className="text-gray-300">{entry.command}</span>
								</div>
								{entry.output && (
									<div className="mt-1 ml-4">{entry.output}</div>
								)}
							</div>
						))}

						{currentSection !== "home" && sections[currentSection].content}
					</div>

					<div className="flex items-center">
						<span className="text-green-400 mr-2">$</span>
						<div className="flex-1 relative">
							<input
								ref={inputRef}
								type="text"
								value={currentCommand}
								onChange={(e) => setCurrentCommand(e.target.value)}
								onKeyDown={(e) => {
									if (e.key === "Tab") {
										e.preventDefault();
										const completed = handleTabComplete(currentCommand);
										setCurrentCommand(completed);
									} else if (e.key === "Enter") {
										e.preventDefault();
										if (currentCommand.trim()) {
											handleCommand(currentCommand);
											setCurrentCommand("");
										}
									}
								}}
								className="absolute inset-0 bg-transparent outline-none text-transparent caret-transparent"
								placeholder=""
								autoComplete="off"
								spellCheck="false"
							/>
							<span className="text-gray-300 pointer-events-none">
								{currentCommand ? (
									<>
										{currentCommand}
										<span className="animate-pulse">█</span>
									</>
								) : (
									<>
										<span className="animate-pulse">█</span>
										<span className="text-gray-500 ml-1">
											Type 'help' for commands...
										</span>
									</>
								)}
							</span>
						</div>
					</div>
				</div>

				<div className="mt-4 text-center text-gray-600 text-sm">
					<p>Terminal Portfolio v1.0.0</p>
				</div>
			</div>
		</div>
	);
}
