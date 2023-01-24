import { useEffect, useState } from 'react'
import { FALSE } from 'utils/constants'

export default function Toggle({
	onClick = () => {},
	name,
	defaultValue,
	...props
}) {
	const [active, setActive] = useState(FALSE)
	const activeStyles = active ? 'translate-x-[18px]' : ''

	const handleToggle = () => {
		setActive(!active)
		onClick({
			target: {
				value: !active,
				name,
			},
		})
	}

	useEffect(() => {
		setActive(defaultValue)
	}, [defaultValue])

	return (
		<div {...props} className="w-[38px] bg-denim p-1 rounded-[10px]">
			<div
				className={`${activeStyles} w-[12px] h-[12px] bg-white rounded-[50%] transition-all`}
				onClick={handleToggle}
			></div>
		</div>
	)
}
