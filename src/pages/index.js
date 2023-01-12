import { Fragment } from 'react'
import Head from 'next/head'

export default function Home() {
	return (
		<Fragment>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="bg-black text-white min-h-screen flex justify-center items-center">
				<p className="text-3xl">Multi step form - 🔖v1.0</p>
			</main>
		</Fragment>
	)
}