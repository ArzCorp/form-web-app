import { useState } from 'react'
import {
	EMPTY_FUNCTION,
	EMPTY_STRING,
	INPUT_TYPE_EMAIL,
	INPUT_TYPE_NUMBER,
	WRONG_EMAIL_FORMAT_MESSAGE,
	WRONG_PHONE_NUMBER_FORMAT_MESSAGE,
} from 'utils/constants'
import { isEmpty, validateEmail, validatePhoneNumber } from 'utils/validations'

export default function TextInput({
	name,
	label,
	onChange = EMPTY_FUNCTION,
	...props
}) {
	const [error, setError] = useState(EMPTY_STRING)
	const errorStyles = error
		? 'border-red-error focus:ring-red-error focus:border-red-error'
		: 'border-border focus:ring-purple focus:border-purple'

	const handleChange = (e) => {
		validateInput(e)
	}

	const validateInput = (e) => {
		const { type, value } = e.target

		if (isEmpty(value)) return setError('Campo requerido')

		if (type === INPUT_TYPE_NUMBER && !validatePhoneNumber(value))
			return setError(WRONG_PHONE_NUMBER_FORMAT_MESSAGE)

		if (type === INPUT_TYPE_EMAIL && !validateEmail(value))
			return setError(WRONG_EMAIL_FORMAT_MESSAGE)

		setError(EMPTY_STRING)
		onChange(e)
	}

	return (
		<div>
			<div className="mb-[3px] flex items-center justify-between">
				<label
					className="text-body-s lg:text-body-m block text-denim"
					htmlFor={name}
				>
					{label}
				</label>
				{error ? (
					<p className="text-red-error text-body-m font-bold">{error}</p>
				) : null}
			</div>
			<input
				className={`w-full ${errorStyles} appearance-none border placeholder-grey text-denim p-3 rounded text-body-l lg:text-body-xl font-medium max-h-[40px]`}
				name={name}
				onChange={handleChange}
				onKeyDown={validateInput}
				{...props}
			/>
		</div>
	)
}
