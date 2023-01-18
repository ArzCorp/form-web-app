import Link from 'next/link'
import { useRouter } from 'next/router'
import { EMPTY_STRING, _0 } from 'utils/constants'

export default function NavbarLink({ href = EMPTY_STRING, step = _0 }) {
	const { pathname } = useRouter()
	const isActive = pathname === href

	const activeStyles = isActive
		? 'text-denim bg-sky-blue'
		: 'text-white bg-transparent border text-white'

	return (
		<Link href={href}>
			<div
				className={`${activeStyles} flex justify-center items-center text-body-m font-bold rounded-[50%] min-w-[33px] min-h-[33px] max-w-[min-content]`}
			>
				<p>{step}</p>
			</div>
		</Link>
	)
}
