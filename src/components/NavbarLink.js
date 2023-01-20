import Link from 'next/link'
import { useRouter } from 'next/router'
import { EMPTY_STRING, _0 } from 'utils/constants'

export default function NavbarLink({
	href = EMPTY_STRING,
	step = _0,
	name,
	title,
}) {
	const { pathname } = useRouter()
	const isActive = pathname === href

	const activeStyles = isActive
		? 'text-denim bg-sky-blue'
		: 'text-white bg-transparent border text-white'

	return (
		<Link href={href}>
			<div className="flex items-center">
				<div
					className={`${activeStyles} flex justify-center items-center text-body-m font-bold rounded-[50%] min-w-[33px] min-h-[33px] max-w-[min-content]`}
				>
					<p>{step}</p>
				</div>
				<div className="ml-4 hidden lg:block">
					<p className="text-body-s leading-[13.80px] text-light-blue">
						{name}
					</p>
					<h3 className="text-white text-body-m leading-[16.09px] font-bold mt-1">
						{title}
					</h3>
				</div>
			</div>
		</Link>
	)
}
