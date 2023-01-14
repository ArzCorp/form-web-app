import NavbarLink from 'components/NavbarLink'
import { PAGES } from 'utils/constants'

export default function Navbar() {
	return (
		<div className="flex gap-4 justify-center pt-8">
			{PAGES.map((page) => (
				<NavbarLink key={page.id} step={page.id} href={page.href} />
			))}
		</div>
	)
}
