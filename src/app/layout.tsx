import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-context";

const jetbrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	variable: "--font-jetbrains",
});

export const metadata: Metadata = {
	title: "Genesis Guerrero Martinez | Software Engineer & Full-Stack Developer",
	description: "Software Engineer specializing in cloud infrastructure, distributed systems, and full-stack development. Building scalable solutions with React, TypeScript, Python, and modern cloud technologies.",
	keywords: "Genesis Guerrero Martinez, Software Engineer, Full-Stack Developer, React, TypeScript, Python, Cloud Computing, AWS, Docker, Kubernetes, Bay Area, San Francisco",
	authors: [{ name: "Genesis Guerrero Martinez" }],
	creator: "Genesis Guerrero Martinez",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://genesis.dev",
		title: "Genesis Guerrero Martinez | Software Engineer",
		description: "Software Engineer specializing in cloud infrastructure, distributed systems, and full-stack development.",
		siteName: "Genesis Guerrero Martinez Portfolio",
	},
	twitter: {
		card: "summary_large_image",
		title: "Genesis Guerrero Martinez | Software Engineer",
		description: "Software Engineer specializing in cloud infrastructure, distributed systems, and full-stack development.",
		creator: "@genesis",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	icons: {
		icon: "/favicon.ico",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={jetbrainsMono.variable}>
				<ThemeProvider>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
