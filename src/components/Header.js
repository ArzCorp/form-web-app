import Navbar from 'components/Navbar'

export default function Header() {
	return (
		<header
			id="app-header"
			className="lg:bg-white lg:p-4 lg:rounded-tl-[15px] lg:rounded-bl-[15px]"
		>
			<div className="bg-header lg:bg-header-desktop h-[172px] lg:h-full">
				<Navbar />
			</div>
		</header>
	)
}
