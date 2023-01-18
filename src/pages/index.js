import { Fragment, useCallback, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Home() {
	const { push } = useRouter()

	const moveToHome = useCallback(() => {
		push('/form/step-one')
	}, [push])

	useEffect(() => {
		moveToHome()
	}, [moveToHome])

	return (
		<Fragment>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.png" />
			</Head>
			<div className="flex items-center justify-center min-h-screen">
				<div className="text-purple font-bold text-xl p-4 bg-very-light-grey rounded-lg max-w-min animate-bounce duration-75">
					<p>MULTI</p>
					<p>STEP</p>
					<p>FORM</p>
				</div>
			</div>
		</Fragment>
	)
}
