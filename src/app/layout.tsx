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
		url: 'https://palindrome-checker.vercel.app/',
		type: 'website',
		title: 'Palindrome Checker | freeCodeCamp',
		description: 'This is a Palindrome checker, a freecodecamp assignment',
		images: [
			'https://opengraph.b-cdn.net/production/documents/3557e93f-f185-430e-836f-77c17cd43cd1.png?token=NNbMPdbiJpmHcEHZpqjh6OMgTaBdNdOXLq1MxAXzf1g&height=342&width=800&expires=33242362729',
		],
	},
	twitter: {
		card: 'summary_large_image',
		site: 'https://palindrome-checker.vercel.app/',
	},
}

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>): JSX.Element {
	return (
		<html lang="en">
			<head>
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-title" content="Pokemon Search App" />
				<meta name="apple-mobile-web-app-status-bar-style" content="default" />
			</head>
			<body>{children}</body>
		</html>
	)
}
