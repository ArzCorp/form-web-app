import { useEffect, useState } from 'react'
import Head from 'next/head'
import Header from './Header'

import { _0 } from 'utils/constants'

export default function Layout({ title, children, description }) {
	const [pageHeight, setPageHeight] = useState(_0)

	const calculatePageHeight = () => {
		const headerHeight = document.querySelector('#app-header').clientHeight
		const footerHeight = document.querySelector('#app-footer').clientHeight

		setPageHeight(headerHeight + footerHeight)
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
				<div className="bg-white mx-4 px-6 py-8 absolute left-0 right-0 top-[-75px]">
					{children}
				</div>
			</div>
			<footer id="app-footer">
				<p>FOOTER</p>
			</footer>
		</section>
	)
}
