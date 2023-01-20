import Navbar from 'components/Navbar'

export default function Header() {
	return (
		<header
			id="app-header"
			className="lg:bg-white lg:p-4 lg:w-full lg:max-w-[274px] lg:rounded-tl-[15px] lg:rounded-bl-[15px]"
		>
			<div className="bg-header h-[172px] lg:h-full lg:px-8 lg:py-10">
				<Navbar />
			</div>
		</header>
	)
}
