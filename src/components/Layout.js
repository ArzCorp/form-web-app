import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

import {
	MARGIN_FOOTER_MAIN_PAGE,
	MARGIN_HEADER_MAIN_PAGE,
	NULL,
	_0,
} from 'utils/constants'

export default function Layout({ title, children, description }) {
	const { asPath } = useRouter()
	const [pageHeight, setPageHeight] = useState(_0)
	const [footerHeight, setFooterHeight] = useState(_0)

	const calculatePageHeight = () => {
		const headerHeight = document.querySelector('#app-header').clientHeight
		const footerHeight = document.querySelector('#app-footer').clientHeight

		setPageHeight(headerHeight + footerHeight)
		setFooterHeight(
			footerHeight + MARGIN_FOOTER_MAIN_PAGE + MARGIN_HEADER_MAIN_PAGE
		)
	}

	useEffect(() => {
		calculatePageHeight()
	}, [])

	return (
		<section>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.png" />
			</Head>
			<Header />
			<div
				className="bg-light relative"
				style={{
					minHeight: `calc(100vh - ${pageHeight}px)`,
				}}
			>
				<div
					style={{
						maxHeight: `calc(100vh - ${footerHeight}px)`,
					}}
					className="bg-white mx-4 px-6 py-8 absolute left-0 right-0 top-[-75px] rounded-[10px] overflow-x-auto"
				>
					{children}
				</div>
			</div>
			<Footer hidden={asPath === '/success'} />
		</section>
	)
}
