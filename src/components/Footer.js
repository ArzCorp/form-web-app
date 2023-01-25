import { useRouter } from 'next/router'
import {
	FLEX,
	HIDDEN,
	NULL,
	PAGES,
	SUCCESS_PAGE,
	_0,
	_1,
} from 'utils/constants'

import Button from 'components/Button'
import { useEffect, useState } from 'react'

export default function Footer({ hidden, isDesktop, onClickNextPage }) {
	const [nextPage, setNextPage] = useState(_0)
	const { pathname, back, push } = useRouter()
	const isFirstPage = pathname === '/form/step-one'
	const isLastPage = pathname === '/form/step-four'
	const firstPageStyles = isFirstPage ? 'justify-end' : 'justify-between'
	const hiddenStyles = hidden ? HIDDEN : FLEX
	const desktopStyles = isDesktop
		? `absolute right-0 left-0 bottom-8 hidden lg:${hiddenStyles} px-[100px]`
		: `${hiddenStyles} lg:hidden relative`

	const findPage = (currentPage) => {
		const pagePosition =
			PAGES.findIndex((page) => page.href === currentPage) + _1
		const pageUrl = PAGES[pagePosition]?.href
		if (pageUrl) return setNextPage(pageUrl)
	}

	const moveToNextPage = () => {
		push(nextPage)
		onClickNextPage()
	}

	const moveToConfirm = () => {
		push(SUCCESS_PAGE)
	}

	useEffect(() => {
		findPage(pathname)
	}, [pathname])

	return (
		<footer
			id="app-footer"
			className={`${desktopStyles} ${firstPageStyles} items-center p-4 min-h-[72px] z-50`}
		>
			{!isFirstPage ? (
				<p className="font-medium text-grey text-body-m" onClick={back}>
					Go Back
				</p>
			) : (
				NULL
			)}
			{!isLastPage ? (
				<Button onClick={moveToNextPage}>Next Step</Button>
			) : (
				<Button onClick={moveToConfirm}>Confirm</Button>
			)}
		</footer>
	)
}
