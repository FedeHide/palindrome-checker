import { useState, useEffect } from 'react'

/*
 * This function adds a typing effect, pushing a text letter by letter with a minimum delay.
 */

interface TypingEffectProps {
	text: string
	speed?: number
	className?: string
}

export const useTypingEffect = ({
	text,
	speed = 50,
	className,
}: TypingEffectProps): JSX.Element => {
	const [displayText, setDisplayText] = useState('')
	const [currentIndex, setCurrentIndex] = useState(0)

	useEffect(() => {
		if (currentIndex > text.length) {
			setCurrentIndex(0)
			setDisplayText('')
		}
		if (currentIndex < text.length) {
			const typingInterval = setInterval(() => {
				setDisplayText((prevText) => prevText + text[currentIndex])
				setCurrentIndex((prevIndex) => prevIndex + 1)
			}, speed)
			return () => {
				clearInterval(typingInterval)
			}
		}
	}, [text, speed, currentIndex])
	return <span className={className}>{displayText}</span>
}
