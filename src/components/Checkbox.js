import { useState } from 'react'
import { FALSE } from 'utils/constants'

export default function Checkbox({
	title,
	description,
	name,
	price,
	...props
}) {
	const [isActive, setIsActive] = useState(FALSE)
	const activeStyles = isActive
		? 'border-purple bg-very-light-grey'
		: 'bg-white border-light-grey'

	const handleClick = (e) => {
		const { checked } = e.target
		setIsActive(checked)
	}

	return (
		<div
			className={`${activeStyles} flex items-center justify-between border rounded-lg py-3 px-4 transition-all duration-500`}
		>
			<div className="flex items-center">
				<input
					className="w-[20px] h-[20px] mr-4 checked:bg-purple focus:bg-transparent border-light-grey focus:ring-purple rounded"
					type="checkbox"
					name={name}
					{...props}
					onClick={handleClick}
				/>
				<div>
					<p className="text-body-m leading-[16px] text-denim font-medium">
						{title}
					</p>
					<p className="text-body-s leading-[20px] text-grey">{description}</p>
				</div>
			</div>
			<p className="text-body-s text-purple leading-[20px]">{`+${price}/mo`}</p>
		</div>
	)
}
