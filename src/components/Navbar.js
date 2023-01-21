import NavbarLink from 'components/NavbarLink'
import { PAGES } from 'utils/constants'

export default function Navbar() {
	return (
		<div className="flex lg:flex-col gap-4 lg:gap-8 justify-center pt-8 lg:pt-0">
			{PAGES.map((page) => (
				<NavbarLink key={page.id} step={page.id} {...page} />
			))}
		</div>
	)
}
