import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-context";

const jetbrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	variable: "--font-jetbrains",
});

export const metadata: Metadata = {
	title: "Genesis Guerrero Martinez",
	description: "Genesis Guerrero Martinez - Software Engineer",
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
