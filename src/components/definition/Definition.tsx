'use client'
import { useTypingEffect } from '@/app/hooks/useTypingEffect'
import { useEffect, useState } from 'react'

export default function Definition(): JSX.Element {
	const [displayText, setDisplayText] = useState('')
	const [iconVisible, setIconVisible] = useState(true)
	const typingText = useTypingEffect({
		text: displayText,
		speed: 50,
		className: 'definition-container__animated-text animated-text--animation',
	})
	const initialText = 'Check for a palindrome'
	const definition =
		"A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing"

	useEffect(() => {
		setDisplayText(initialText)
	}, [])

	const handleClick = (): void => {
		if (displayText !== definition) {
			setDisplayText('')
			setIconVisible(false)
			setTimeout(() => {
				setDisplayText(definition)
			}, 100)
		}
	}

	return (
		<section
			style={{ cursor: iconVisible ? 'pointer' : 'default' }}
			onClick={handleClick}
			id="definition-trigger"
			className="definition-container"
		>
			<span>
				{iconVisible && (
					<svg
						className="definition-container__icon"
						id="icon"
						width="50"
						height="50"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g clipPath="url(#clip0_305_27983)">
							<path
								d="M12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25Z"
								stroke="#f0ffff"
								strokeWidth="1.5"
								strokeMiterlimit="10"
								strokeLinecap="round"
							/>
							<path
								d="M12.0002 13.7502C12.0002 12.8102 12.5302 12.0002 13.3002 11.5102C14.1902 10.9502 14.7102 9.8402 14.4102 8.6402C14.1902 7.7802 13.5002 7.0702 12.6602 6.8502C10.9902 6.4102 9.49023 7.6902 9.49023 9.3302"
								stroke="#f0ffff"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<circle cx="12" cy="17" r="1" fill="#f0ffff" />
						</g>
						<defs>
							<clipPath id="clip0_305_27983">
								<rect width="24" height="24" fill="white" />
							</clipPath>
						</defs>
					</svg>
				)}
			</span>
			<div className="definition-container__definition">{typingText}</div>
		</section>
	)
}
