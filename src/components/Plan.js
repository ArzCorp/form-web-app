import Image from 'next/image'

export default function Plan({
	title,
	price,
	icon,
	freetrail,
	isActive,
	onClick,
	id,
}) {
	const activeStyles = isActive
		? 'border-purple bg-very-light-grey'
		: 'bg-white border border-light-grey'

	const handleClick = () => {
		onClick({
			id,
			title,
			price,
		})
	}

	return (
		<article
			className={`${activeStyles} flex lg:flex-col border lg:justify-between lg:items-start lg:w-full items-center gap-[14px] lg:gap-4 text-denim text-body-xl lg:pt-5 lg:pb-4 lg:px-[10px] leading-[18px] max-h-[77px] lg:min-h-[183px] hover:border-purple hover:bg-very-light-grey rounded-lg p-4 pt-[14px]`}
			onClick={handleClick}
		>
			<Image src={icon} width="40" height="40" alt={`icon ${title}`} />
			<div>
				<h2 className="font-medium mb-[7px] lg:text-body-xl lg:leading-[18.38px]">
					{title}
				</h2>
				<p className="text-grey text-body-m leading-[20px]">{price}</p>
				<p className="text-body-s leading-[13px] mt-[6px] hidden lg:block">
					{freetrail}
				</p>
			</div>
		</article>
	)
}
