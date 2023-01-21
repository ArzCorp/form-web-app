import { EMPTY_STRING } from './constants'

export const validatePhoneNumber = (phoneNumber = EMPTY_STRING) => {
	return phoneNumber.length >= 10
}

export const validateEmail = (email) => {
	return String(email)
		.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		)
}

export const isEmpty = (value) => String(value).length === 0
