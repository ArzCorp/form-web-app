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
	const [pageHeight, setPageHeight] = useState('100vh')
	const [footerHeight, setFooterHeight] = useState(_0)

	const setDesktopPageHeight = () => {
		const headerHeight = document.querySelector('#app-header').clientHeight
		const footerHeight = document.querySelector('#app-footer').clientHeight
		const pageWidth = window.innerWidth

		if (pageWidth >= 1024) return setPageHeight('auto')
		setPageHeight(`calc(100vh - ${headerHeight + footerHeight}px)`)
		setFooterHeight(
			footerHeight + MARGIN_FOOTER_MAIN_PAGE + MARGIN_HEADER_MAIN_PAGE
		)
	}

	useEffect(() => {
		window.addEventListener('resize', setDesktopPageHeight)
		setDesktopPageHeight()
	}, [])

	return (
		<section className="lg:bg-very-light-grey lg:min-h-screen lg:flex items-center">
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.png" />
			</Head>
			<div className="lg:flex lg:h-screen lg:w-full lg:max-w-[940px] lg:max-h-[600px] lg:my-auto lg:mx-auto">
				<Header />
				<div
					className="bg-light lg:bg-white relative lg:w-full lg:h-auto lg:rounded-tr-[15px] lg:rounded-br-[15px]"
					style={{
						minHeight: pageHeight,
					}}
				>
					<div
						style={{
							maxHeight: `calc(100vh - ${footerHeight}px)`,
						}}
						className="bg-white lg:ml-0 mx-4 px-6 lg:pb-0 lg:px-[100px] lg:pt-[56px] py-8 lg:static absolute left-0 right-0 top-[-75px] rounded-[10px] overflow-x-auto"
					>
						{children}
					</div>
				</div>
			</div>
			<Footer hidden={asPath === '/success'} />
		</section>
	)
}
