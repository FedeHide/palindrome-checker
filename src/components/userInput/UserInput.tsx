import { useTypingEffect } from '@/app/hooks/useTypingEffect'
import { useState } from 'react'
import type { ChangeEvent } from 'react'

export default function UserInput(): JSX.Element {
	const labelText: string = 'Check for a palindrome'
	const labelError: string = 'Input a text'

	const [label, setLabel] = useState(labelText)
	const [checked, setChecked] = useState(false)
	const [inputValue, setInputValue] = useState('')
	const [result, setResult] = useState('')

	const typingText = useTypingEffect({
		text: result,
		speed: 50,
	})

	const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
		setInputValue(event.target.value)
	}

	const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>): void => {
		if (event.key === 'Enter') {
			checkForPalindrome(inputValue)
		}
	}

	/*
	 * This function checks if the user's input is a palindome or not.
	 */
	const checkForPalindrome = (inputValue: string): void => {
		if (result !== '') {
			setResult('')
		}
		// ! alert error on empty input
		if (inputValue === '') {
			setChecked(false)
			setLabel(labelError)
			setTimeout(() => {
				setLabel(labelText)
			}, 1000)
			return
		} else {
			setChecked(true)
		}
		setTimeout(() => {
			// * remove special characters and spaces from input
			const cleanInput = inputValue.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()

			// * Palindrome validation showing text when is <= 20 char. or defaul text
			const reversedInput = cleanInput.split('').reverse().join('')

			if (cleanInput.length <= 20) {
				const palindromeMessage =
					cleanInput === reversedInput
						? `${inputValue} IS a palindrome`
						: `${inputValue} is NOT a palindrome`
				setResult(palindromeMessage)
			} else {
				const defaultPalindromeMessage =
					cleanInput === reversedInput
						? `Your text IS a palindrome`
						: `Your text is NOT a palindrome`
				setResult(defaultPalindromeMessage)
			}
		}, 200)
	}
	return (
		<section className="input-container">
			<div className="input-container__entry-area">
				<input
					onKeyDown={handleKeyPress}
					onChange={handleChange}
					className="input-container__entry"
					type="tex"
					name="entry"
					id="text-input"
					style={{ border: label === labelError ? '2px solid var(--clr-white' : '' }}
					required
				/>
				<div
					id="label"
					className={`input-container__label ${label === labelError ? 'button--error' : ''}`}
				>
					{label}
				</div>
			</div>
			<button
				onClick={() => {
					checkForPalindrome(inputValue)
				}}
				id="check-btn"
				className={`input-container__button  ${label === labelError ? 'button--error' : 'button--hover'}`}
			>
				Check
			</button>
			<div id="result" className="input-container__result-div">
				<span
					style={{ display: checked && label !== labelError ? 'inline' : 'none' }}
					id="text-result"
					className="input-container__result-text"
				>
					{typingText}
				</span>
			</div>
		</section>
	)
}
