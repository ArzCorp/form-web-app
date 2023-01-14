import { useRouter } from 'next/router'
import { NULL, PAGES, _0 } from 'utils/constants'

import Button from 'components/Button'
import { useEffect, useState } from 'react'

export default function Footer() {
	const [nextPage, setNextPage] = useState(_0)
	const { pathname, back, push } = useRouter()
	const isFirstPage = pathname === '/form/step-one'
	const isLastPage = pathname === '/form/step-four'
	const firstPageStyles = isFirstPage ? 'justify-end' : 'justify-between'

	const findPage = (currentPage) => {
		const pagePosition =
			PAGES.findIndex((page) => page.href === currentPage) + 1
		const pageUrl = PAGES[pagePosition]?.href
		if (pageUrl) return setNextPage(pageUrl)
	}

	const moveToNextPage = () => {
		push(nextPage)
	}

	useEffect(() => {
		findPage(pathname)
	}, [pathname])

	return (
		<footer
			id="app-footer"
			className={`${firstPageStyles} flex items-center p-4 min-h-[72px]`}
		>
			{!isFirstPage ? (
				<p className="font-medium text-grey text-body-m" onClick={back}>
					Go Back
				</p>
			) : (
				NULL
			)}
			{!isLastPage ? <Button onClick={moveToNextPage}>Next Step</Button> : NULL}
		</footer>
	)
}
