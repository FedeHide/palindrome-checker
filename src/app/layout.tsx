import type { Metadata, Viewport } from 'next'
import '../scss/main.scss'

export const viewport: Viewport = {
	themeColor: '#ffffff',
}

export const metadata: Metadata = {
	title: 'Palindrome Checker | freeCodeCamp',
	description: 'This is a Palindrome checker, a freecodecamp assignment',
	manifest: '/manifest.json',
	robots: 'index, follow',
	authors: [{ name: 'FedeHide' }],
	keywords: ['Palindrome', 'Checker', 'freeCodeCamp'],
	icons: {
		apple: '/apple-touch-icon.png',
		icon: '/favicon.ico',
	},
	openGraph: {
		url: 'https://palindrome-checker-eight.vercel.app/',
		type: 'website',
		title: 'Palindrome Checker | freeCodeCamp',
		description: 'This is a Palindrome checker, a freecodecamp assignment',
		images: [
			'https://raw.githubusercontent.com/FedeHide/palindrome-checker/main/public/assets/palindome-checker-ss.webp',
		],
	},
	twitter: {
		card: 'summary_large_image',
		site: 'https://palindrome-checker-eight.vercel.app/',
	},
}

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>): JSX.Element {
	return (
		<html lang="en">
			<head>
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-title" content="Palindrome Checker" />
				<meta name="apple-mobile-web-app-status-bar-style" content="default" />
			</head>
			<body>{children}</body>
		</html>
	)
}
