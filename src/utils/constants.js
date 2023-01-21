export const EMPTY_STRING = ''
export const TRUE = true
export const FALSE = false
export const NULL = null
export const EMPTY_FUNCTION = () => {}
export const _0 = 0

export const MARGIN_FOOTER_MAIN_PAGE = 24
export const MARGIN_HEADER_MAIN_PAGE = 99

export const INPUT_TYPE_NUMBER = 'number'
export const INPUT_TYPE_EMAIL = 'email'
export const INPUT_TYPE_PASSWORD = 'password'

export const WRONG_EMAIL_FORMAT_MESSAGE = 'Formato incorrecto'
export const WRONG_PHONE_NUMBER_FORMAT_MESSAGE =
	'El número debe tener 10 dígitos'

export const PAGES = [
	{
		id: 1,
		name: 'STEP 1',
		title: 'YOUR INFO',
		href: '/form/step-one',
	},
	{
		id: 2,
		name: 'STEP 2',
		title: 'SELECT PLAN',
		href: '/form/step-two',
	},
	{
		id: 3,
		name: 'STEP 3',
		title: 'ADD-ONS',
		href: '/form/step-three',
	},
	{
		id: 4,
		name: 'STEP 4',
		title: 'SUMMARY',
		href: '/form/step-four',
	},
]

export const PLANS = [
	{
		freetrail: '2 months',
		id: 1,
		title: 'Arcade',
		price: '$9/mo',
		icon: '/icons/icon-arcade.svg',
	},
	{
		freetrail: '2 months',
		id: 2,
		title: 'Advanced',
		price: '$12/mo',
		icon: '/icons/icon-advanced.svg',
	},
	{
		freetrail: '2 months',
		id: 3,
		title: 'Pro',
		price: '$15/mo',
		icon: '/icons/icon-pro.svg',
	},
]

export const ADDONS = [
	{
		id: 1,
		title: 'Online service',
		description: 'Access to multiplayer games',
		price: 1,
	},
	{
		id: 2,
		title: 'Larger storage',
		description: 'Extra 1TB of cloud save',
		price: 2,
	},
	{
		id: 3,
		title: 'Customizable profile',
		description: 'Custom theme on your profile',
		price: 2,
	},
]
